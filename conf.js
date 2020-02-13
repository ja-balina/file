exports.config = {
    framework: 'jasmine2',
    specs: ['./specs/login-spec.js', './specs/homepage-spec.js'],
    capabilities: {
      browserName: 'chrome'
    },
    onPrepare: () => {
        browser.ignoreSynchronization = true;
    }
  }