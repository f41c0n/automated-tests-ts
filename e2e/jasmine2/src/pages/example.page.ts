import { browser, element, by, promise, ElementFinder } from 'protractor';

export class AngularHomepage {
    public url: string;
    public nameInput: ElementFinder;
    public greeting: ElementFinder;

    constructor() {
        this.url = 'https://angularjs.org/';
        this.nameInput = element(by.css('input[ng-model="yourName"]'));
        this.greeting = element(by.css('h1.ng-binding'));
    }

    public open(): void {
        browser.get(this.url);
    }

    public setName(userName: string): void {
        this.nameInput.clear();
        this.nameInput.sendKeys(userName);
    }

    public getName(): promise.Promise<string> {
        return this.nameInput.getAttribute('value');
    }

    public getGreeting(): promise.Promise<string> {
        return this.greeting.getText();
    }
}
