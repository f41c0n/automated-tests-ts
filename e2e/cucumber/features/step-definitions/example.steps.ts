import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser, expect } from '@wdio/globals';
import angularHomepage from '../pageobjects/example.page';

Given(/^I go to Angular home page$/, async () => {
    await angularHomepage.open();
    await expect(browser).toHaveUrl(angularHomepage.url);
});

When(/^I add "([^"]*)" in the input field$/, async (userName: string) => {
    await angularHomepage.setName(userName);
    await expect(angularHomepage.nameInput).toHaveValue(userName);
});

Then(/^I should see "([^"]*)"$/, async (greeting: string) => {
    await expect(angularHomepage.greeting).toHaveText(greeting);
});
