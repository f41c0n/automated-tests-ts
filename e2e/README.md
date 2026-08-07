### Requirements
Installed:
* Node.js
* Google Chrome (WebdriverIO v9 auto-downloads the matching chromedriver — no
  Selenium server, Java or webdriver-manager needed)
### Installing
Navigate to e2e/jasmine2 directory
```
cd e2e/jasmine2
```
or to e2e/cucumber
```
cd e2e/cucumber
```
Install all modules
```
npm install
```
### Tests
Run example test
```
npm test
```
Tests run headless Chrome against https://angularjs.org/. To run without the
Allure report auto-opening afterwards, use:
```
npx wdio run ./wdio.conf.ts
```
### Report
`npm test` generates an Allure report and opens it when the run ends (the
`allure open` step starts a local web server and stays running until you stop
it with Ctrl+C).

Reports are written to:
```
reports/e2e/jasmine2/allure-report/index.html
reports/e2e/cucumber/allure-report/index.html
```
