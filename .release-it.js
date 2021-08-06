module.exports = {
  hooks: {
    'after:bump': 'build:copy-files',
  },
  git: {
    tagName: 'v${version}',
    commitMessage: 'chore: v${version} release',
  },
  github: {
    release: true,
    releaseName: '${version}',
  },
  npm: {
    publish: true,
    publishPath: './dist',
  },
  plugins: {
    '@release-it/conventional-changelog': {
      infile: 'CHANGELOG.md',
      preset: {
        name: 'conventionalcommits',
        types: [
          {
            type: 'feat',
            section: 'Features',
          },
          {
            type: 'fix',
            section: 'Bug Fixes',
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
