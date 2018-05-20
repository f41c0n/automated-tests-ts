import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { browser } from 'protractor';
import { AngularHomepage } from '../../../pages/example/example.page';
import { Given, When, Then } from 'cucumber';

chai.use(chaiAsPromised);
const expect: any = chai.expect;
const angularHomepage: AngularHomepage = new AngularHomepage();

Given(/^I go to Angular home page$/, async () => {
    angularHomepage.open();
    await expect(browser.getCurrentUrl()).to.eventually.equal(angularHomepage.url);
});

When(/^I add "([^"]*)" in the input field$/, async (yourName: string) => {
    angularHomepage.setName(yourName);
    await expect(angularHomepage.getName()).to.eventually.equal(yourName);
});

Then(/^I should see "([^"]*)"$/, async (yourName: string) => {
    await expect(angularHomepage.getGreeting()).to.eventually.equal(yourName);
});