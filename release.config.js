module.exports  = {
    branches: ["master",'development','staged'],
    repositoryUrl:"https://github.com/prashant9428/test-package",
    plugins:[
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/github',
        "@semantic-release/npm",
        {
          "path": "@semantic-release/exec",
          "cmd": "my-script ${nextRelease.version}",
        },
    ]
}