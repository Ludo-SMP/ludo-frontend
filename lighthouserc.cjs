const { getLighthouseMonitoringPageUrls } = require('./src/utils/lighthouse');

const urls = getLighthouseMonitoringPageUrls();

module.exports = {
  ci: {
    collect: {
      startServerCommand: 'yarn start:mac',
      url: urls,
      numberOfRuns: 5,
    },

    upload: {
      target: 'filesystem',
      outputDir: './lhci',
      reportFilenamePattern: '%%PATHNAME%%-%%DATETIME%%.%%EXTENSION%%',
    },
  },
};
