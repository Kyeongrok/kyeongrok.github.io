# 프로젝트별 누적 다운로드 수를 모아 _data/download_stats.json 에 쓴다.
# 릴리스 전체를 읽어야 해서 브라우저에서는 너무 무겁다 — GitHub Actions 가 하루 한 번 돌린다.
#
# 다운로드 버튼에 걸린 파일만 센다. 릴리스에는 자동 업데이터가 받는 파일(releases.win.json,
# *.nupkg)과 게임 데이터 파일도 있는데, 이것까지 세면 실제보다 훨씬 크게 나온다.
#
# 실행: ruby scripts/update_download_stats.rb (gh 로그인 필요)

require "json"
require "yaml"

OUTPUT = "_data/download_stats.json"

def read_front_matter(path)
  YAML.safe_load(File.read(path, encoding: "UTF-8")[/\A---\s*\n(.*?)^---/m, 1])
end

def fetch_assets(repository)
  output = IO.popen(
    [
      "gh", "api", "--paginate",
      "repos/#{repository}/releases?per_page=100",
      "--jq", ".[].assets[] | [.name, .download_count] | @tsv",
    ],
    &:read
  )

  raise "Failed to load releases of #{repository}" unless $?.success?

  output.lines.map do |line|
    name, count = line.chomp.split("\t")
    [name, count.to_i]
  end
end

# 일본어판(_projects/ja/)은 같은 저장소를 가리키므로 기본 언어 파일만 읽는다.
stats = Dir["_projects/*.md"].sort.to_h do |path|
  project = read_front_matter(path)
  patterns = project["downloads"].map { |download| Regexp.new(download["match"]) }

  total = fetch_assets(project["repository"]).sum do |name, count|
    patterns.any? { |pattern| pattern.match?(name) } ? count : 0
  end

  [project["repository"], total]
end

File.write(OUTPUT, JSON.pretty_generate(stats) + "\n")
puts JSON.pretty_generate(stats)
