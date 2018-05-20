import { browser } from 'protractor';
import { AngularHomepage } from '../pages/example.page';
import * as using from 'jasmine-data-provider';
import names from '../testData/example.td';

const angularHomepage: AngularHomepage = new AngularHomepage();

using(names, (name: string) => {
    describe('greeting', () => {
        beforeAll(() => {
            angularHomepage.open();
        });

        it('should open Home page', () => {
            expect(browser.getCurrentUrl()).toEqual(angularHomepage.url);
        });

        it('should type name', () => {
            angularHomepage.setName(name);
            expect(angularHomepage.getName()).toEqual(name);
        });

        it('should update greeting', () => {
            expect(angularHomepage.getGreeting()).toEqual(`Hello ${name}!`);
        });
    });
});
