import LoginPage from '../_page/LoginPage';
import {student} from  '../_data/user.data';
import Menu from '../../_page/Menu';
import Notification from '../../_page/Notification';


describe('LOGIN PAGE --NEGATIVE WITH VALID EMAIL AND INVALID PASSWORD', () => {
    before(() => {
        LoginPage.open();
    });

    it('should have correct title', () => {
        browser.waitUntil(() => {
            return Menu.h1.getText() === 'User Login'
        }, 5000, 'expected header to be different after 3s');
    });

    it('should fill out email field', () => {
        LoginPage.emailInput.setValue(student.email);
    });

    it('should fill out password field', () => {
        LoginPage.passwordInput.setValue(123456);
    });

    it('should click Login button', () => {
        LoginPage.submitBtn.click();
    });

    it('should get negative login notification', () => {
        browser.waitUntil(() => $(Notification.fail).isDisplayed(), 100000);
    });
});
