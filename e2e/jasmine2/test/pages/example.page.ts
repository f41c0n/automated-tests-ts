import { $, browser } from '@wdio/globals';
import type { ChainablePromiseElement } from 'webdriverio';

class AngularHomepage {
    public readonly url: string = 'https://angularjs.org/';

    public get nameInput(): ChainablePromiseElement {
        return $('input[ng-model="yourName"]');
    }

    public get greeting(): ChainablePromiseElement {
        return $('h1.ng-binding');
    }

    public async open(): Promise<void> {
        await browser.url(this.url);
    }

    public async setName(userName: string): Promise<void> {
        await this.nameInput.setValue(userName);
    }
}

export default new AngularHomepage();
