module.exports  = {
    branches: ["master",{'name':'development','prerelease': false}],
    repositoryUrl:"https://github.com/prashant9428/test-package",
    plugins:[
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/github'
    ]
}