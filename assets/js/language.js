// 방문자에게 맞는 언어 페이지로 보낸다. 화면이 그려지기 전에 돌도록 <head> 에서 불러온다.
// GitHub Pages 는 서버에서 접속 국가를 알 수 없어서 브라우저 언어와 시간대로 대신 판단한다.
// 오른쪽 위 언어 선택에서 고른 언어가 있으면 그것을 먼저 따른다.

(function () {
    const STORAGE_KEY = "lang";
    const SUPPORTED = ["ko", "ja"];

    function savedLanguage() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (error) {
            return null;
        }
    }

    function saveLanguage(lang) {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (error) {
            // 저장소를 못 쓰면 이번 이동만 반영된다.
        }
    }

    // 한국어/일본어 사용자라고 확실히 알 수 있을 때만 값을 돌려준다.
    // 그 밖의 방문자(검색 엔진 포함)는 지금 보고 있는 페이지에 그대로 둔다.
    function detectLanguage() {
        const languages = navigator.languages && navigator.languages.length
            ? navigator.languages
            : [navigator.language || ""];

        for (const language of languages) {
            const code = language.toLowerCase().split("-")[0];

            if (SUPPORTED.includes(code)) {
                return code;
            }
        }

        try {
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

            if (timeZone === "Asia/Seoul") {
                return "ko";
            }

            if (timeZone === "Asia/Tokyo") {
                return "ja";
            }
        } catch (error) {
            // 무시
        }

        return null;
    }

    const current = document.documentElement.lang;
    const wanted = savedLanguage() || detectLanguage();

    if (wanted && wanted !== current) {
        const alternate = document.querySelector(`link[rel="alternate"][hreflang="${wanted}"]`);

        if (alternate) {
            location.replace(alternate.href + location.hash);
            return;
        }
    }

    // 언어를 직접 고르면 다음 방문부터 그 언어로 연다.
    document.addEventListener("click", event => {
        const link = event.target.closest(".lang-switch a[data-lang]");

        if (link) {
            saveLanguage(link.dataset.lang);
        }
    });
})();
