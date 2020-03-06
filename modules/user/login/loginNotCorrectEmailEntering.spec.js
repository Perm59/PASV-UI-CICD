import LoginPage from '../_page/LoginPage';
import Menu from '../../_page/Menu';

describe('LOGIN PAGE --NEGATIVE WITH NOT CORRECT EMAIL ENTERING', () => {
    before(() => {
        LoginPage.open();
        browser.waitUntil(() => Menu.h1.getText() === 'User Login',
          3000, 'expected header to be different after 3s');
    });

    it('should fill out email field with not correct entering', () => {
        LoginPage.emailInput.setValue('absd@mail');
    });

    it('should get invalid email warning', () => {
        browser.waitUntil(() => $(LoginPage.invalidEmailNotification).isDisplayed(), 5000);
    });
});

