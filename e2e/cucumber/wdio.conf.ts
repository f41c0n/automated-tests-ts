export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',

    specs: ['./features/**/*.feature'],
    maxInstances: 1,

    // WebdriverIO v9 auto-manages the matching chromedriver for the local
    // Chrome install — no Selenium server, Java or webdriver-manager needed.
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--headless=new',
                '--disable-gpu',
                '--no-sandbox',
                '--window-size=1920,1080',
            ],
        },
    }],

    logLevel: 'warn',
    baseUrl: 'https://angularjs.org',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    framework: 'cucumber',
    reporters: [
        'spec',
        ['allure', { outputDir: '../../reports/e2e/cucumber/allure-results' }],
    ],

    cucumberOpts: {
        require: ['./features/step-definitions/*.steps.ts'],
        timeout: 60000,
    },
};
