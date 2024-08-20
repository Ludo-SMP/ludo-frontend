const {
  LH_MONITORING_PAGE_NAMES,
  DEV_ORIGIN_URL,
  LH_MONITORING_PAGE_ROUTES,
} = require('./src/Constants/lighthouse.ts');

const urls = LH_MONITORING_PAGE_NAMES.map((pageName) => `${DEV_ORIGIN_URL}${LH_MONITORING_PAGE_ROUTES[pageName]}`);

module.exports = {
  ci: {
    collect: {
      startServerCommand: 'yarn start:mac',
      url: urls,
      numberOfRuns: 1,
      settings: {
        chromeFlags: '--ignore-certificate-errors',
        preset: 'desktop',
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './lhci_reports/desktop',
      reportFilenamePattern: '%%PATHNAME%%-%%DATETIME%%-desktop-report.%%EXTENSION%%',
    },
  },
};
