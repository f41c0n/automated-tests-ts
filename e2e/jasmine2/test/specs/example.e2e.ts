import { browser, expect } from '@wdio/globals';
import angularHomepage from '../pages/example.page';
import names from '../testData/example.td';

names.forEach((name: string) => {
    describe(`greeting for "${name}"`, () => {
        beforeAll(async () => {
            await angularHomepage.open();
        });

        it('should open Home page', async () => {
            await expect(browser).toHaveUrl(angularHomepage.url);
        });

        it('should type name', async () => {
            await angularHomepage.setName(name);
            await expect(angularHomepage.nameInput).toHaveValue(name);
        });

        it('should update greeting', async () => {
            await expect(angularHomepage.greeting).toHaveText(`Hello ${name}!`);
        });
    });
});
