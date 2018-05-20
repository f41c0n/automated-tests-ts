import { browser, Config } from 'protractor';
import { SpecReporter } from 'jasmine-spec-reporter';

export const config: Config = {
    baseUrl: 'https://angularjs.org/',
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

    framework: 'jasmine2',

    specs: ['tests/*.spec.js'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    onPrepare: () => {
        const width: number = 1920;
        const height: number = 1080;
        browser.driver.manage().window().setSize(width, height);

        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    }
};