import { browser, Config } from 'protractor';

export const config: Config = {
    baseURL: '',
    getPageTimeout: 60000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    seleniumAddress: 'http://localhost:4444/wd/hub',

    multiCapabilities: [{
        browserName: 'firefox',
        platform: 'WINDOWS',
        maxInstances: 1
    }, {
        browserName: 'chrome',
        platform: 'WINDOWS',
        maxInstances: 1
    }, {
        browserName: 'internet explorer',
        platform: 'WINDOWS',
        ignoreProtectedModeSettings: true,
        maxInstances: 1
    }, {
        browserName: 'firefox',
        platform: 'LINUX',
        maxInstances: 1
    }, {
        browserName: 'chrome',
        platform: 'LINUX',
        maxInstances: 1
    }],

    specs: [
        'features/**/*.feature'
    ],

    cucumberOpts: {
        require: 'features/**/step_definitions/*steps.js'
    },

    onPrepare: (): void => {
        const width: number = 1920;
        const height: number = 1080;
        browser.driver.manage().window().setSize(width, height);
    }
};
