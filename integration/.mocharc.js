// Replaces the legacy src/configs/mocha.opts (removed in Mocha 6+).
// resultsDir is resolved relative to cwd (the integration/ dir) at run time.
module.exports = {
    timeout: 3000,
    retries: 2,
    slow: 1000,
    reporter: 'allure-mocha',
    'reporter-option': ['resultsDir=../reports/integration/allure-results'],
};
