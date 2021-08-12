module.exports = {
  hooks: {
    'after:bump': 'yarn build:copy-files',
  },
  git: {
    tagName: 'v${version}',
    commitMessage: `chore: v${version} release

[skip ci]`,
  },
  github: {
    release: true,
    releaseName: 'v${version}',
    tokenRef: 'CIRCLECI_GITHUB_TOKEN',
  },
  npm: {
    publish: true,
    publishPath: './dist',
    skipChecks: true,
  },
  plugins: {
    '@release-it/conventional-changelog': {
      infile: 'CHANGELOG.md',
      preset: {
        name: 'conventionalcommits',
        types: [
          {
            type: 'feat',
            section: 'Core Changes',
          },
          {
            type: 'fix',
            section: 'Bug Fixes',
          },
          {
            type: 'docs',
            section: 'Documentation Changes',
          },
          {
            type: 'perf',
            section: 'Performance Improvements',
          },
        ],
      },
    },
  },
};
