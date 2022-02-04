module.exports  = {
    branches: ["master",'development','staged'],
    repositoryUrl:"https://github.com/prashant9428/test-package",
    plugins:[
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/github',
        ["@semantic-release/git", {
            "assets": ["dist/**/*.{js,css}", "docs", "package.json"],
            "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
          }]
    ]
}