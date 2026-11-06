// 각 프로젝트의 최신 GitHub 릴리스를 읽어 버전 표시와 다운로드 버튼을 채운다.
// GitHub API 는 비로그인 시 시간당 60회 제한이 있어서 결과를 잠깐 sessionStorage 에 담아 둔다.

const CACHE_MS = 10 * 60 * 1000;

const pending = new Map();

const MESSAGES = {
    ko: {
        locale: "ko-KR",
        latest: (tag, date) => `최신 버전 ${tag} (${date})`,
        failed: "최신 버전을 불러오지 못했습니다.",
        fallback: "GitHub 릴리스에서 받기",
    },
    ja: {
        locale: "ja-JP",
        latest: (tag, date) => `最新バージョン ${tag}（${date}）`,
        failed: "最新バージョンを取得できませんでした。",
        fallback: "GitHub のリリースからダウンロード",
    },
};

const text = MESSAGES[document.documentElement.lang] || MESSAGES.ko;

function readCache(key) {
    try {
        const cached = JSON.parse(sessionStorage.getItem(key));

        if (cached && Date.now() - cached.savedAt < CACHE_MS) {
            return cached.release;
        }
    } catch (error) {
        // 저장소를 못 쓰는 환경이면 캐시 없이 간다.
    }

    return null;
}

function writeCache(key, release) {
    try {
        sessionStorage.setItem(key, JSON.stringify({ savedAt: Date.now(), release }));
    } catch (error) {
        // 무시
    }
}

async function requestLatestRelease(repository) {
    const cacheKey = `release:${repository}`;
    const cached = readCache(cacheKey);

    if (cached) {
        return cached;
    }

    const response = await fetch(
        `https://api.github.com/repos/${repository}/releases/latest`
    );

    if (!response.ok) {
        throw new Error(`Failed to load release of ${repository}`);
    }

    const data = await response.json();

    const release = {
        tag: data.tag_name,
        publishedAt: data.published_at,
        assets: data.assets.map(asset => ({
            name: asset.name,
            url: asset.browser_download_url,
            size: asset.size,
        })),
    };

    writeCache(cacheKey, release);

    return release;
}

// 같은 페이지에서 한 저장소를 여러 번 부르면 요청 하나를 같이 쓴다.
function getLatestRelease(repository) {
    if (!pending.has(repository)) {
        pending.set(repository, requestLatestRelease(repository));
    }

    return pending.get(repository);
}

function formatSize(bytes) {
    if (bytes >= 1024 ** 3) {
        return `${(bytes / 1024 ** 3).toFixed(1)} GB`;
    }

    if (bytes >= 1024 ** 2) {
        return `${Math.round(bytes / 1024 ** 2)} MB`;
    }

    return `${Math.round(bytes / 1024)} KB`;
}

function formatDate(isoDate) {
    return new Date(isoDate).toLocaleDateString(text.locale);
}

async function fillVersion(element) {
    const repository = element.dataset.repository;

    try {
        const release = await getLatestRelease(repository);

        element.textContent = "short" in element.dataset
            ? release.tag
            : text.latest(release.tag, formatDate(release.publishedAt));

    } catch (error) {
        console.error(error);

        element.textContent = "short" in element.dataset
            ? "—"
            : text.failed;

        element.classList.add("error");
    }
}

// 안드로이드 폰 · 태블릿으로 들어왔는가 — 받을 수 있는 모바일 파일이 APK 뿐이라 아이폰은 PC 와 같이 둔다.
function isMobile() {
    return /Android/i.test(navigator.userAgent || "");
}

// downloads 항목의 match 는 파일 이름 정규식이다 — 이름에 버전이 붙거나 바뀌어도 찾도록.
async function fillDownloads(container) {
    const repository = container.dataset.repository;
    const config = JSON.parse(container.querySelector("script").textContent || "[]");

    try {
        const release = await getLatestRelease(repository);

        // primary 버튼과 beside_primary 버튼은 한 줄(.download-row)에 나란히 놓는다.
        // 폰으로 들어오면 mobile_primary 항목을 맨 위 큰 버튼으로 — PC 용 primary · beside_primary 는 작은 버튼으로 내린다.
        const mobileFirst = isMobile() && config.some(c => c.mobile_primary);
        const items = mobileFirst
            ? [...config.filter(c => c.mobile_primary), ...config.filter(c => !c.mobile_primary)]
                .map(c => ({ ...c, primary: !!c.mobile_primary, beside_primary: false }))
            : config;
        let row = null;

        for (const { match, label, sub, primary, beside_primary } of items) {
            const pattern = new RegExp(match);
            const asset = release.assets.find(a => pattern.test(a.name));

            if (!asset) {
                console.warn(`${repository}: no asset matches ${match}`);
                continue;
            }

            const link = document.createElement("a");
            link.className = `download ${primary ? "primary" : "secondary"}`;
            link.href = asset.url;
            link.textContent = label;

            const subText = document.createElement("span");
            subText.className = "sub";
            subText.textContent = `${sub} · ${formatSize(asset.size)}`;
            link.appendChild(subText);

            if (primary || beside_primary) {
                if (!row) {
                    row = document.createElement("div");
                    row.className = "download-row";
                    container.appendChild(row);
                }

                row.appendChild(link);
            } else {
                container.appendChild(link);
            }
        }

        if (!container.querySelector("a")) {
            throw new Error("No downloadable assets found");
        }

    } catch (error) {
        console.error(error);

        const link = document.createElement("a");
        link.className = "download primary";
        link.href = `https://github.com/${repository}/releases`;
        link.textContent = text.fallback;
        container.appendChild(link);
    }
}

// GoatCounter 의 누적 방문 수. 못 불러오면 푸터에 아무것도 안 보이게 둔다.
async function fillVisitorCount(element) {
    try {
        const response = await fetch(element.dataset.visitorCount);

        if (!response.ok) {
            throw new Error("Failed to load visitor count");
        }

        const { count } = await response.json();

        element.querySelector("span").textContent = count;
        element.hidden = false;

    } catch (error) {
        console.error(error);
    }
}

document.querySelectorAll("[data-release-version]").forEach(fillVersion);
document.querySelectorAll("[data-downloads]").forEach(fillDownloads);
document.querySelectorAll("[data-visitor-count]").forEach(fillVisitorCount);

document.querySelectorAll("[data-number]").forEach(element => {
    element.textContent = Number(element.textContent).toLocaleString(text.locale);
});
