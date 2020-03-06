import {expect}  from 'chai';
import LoginPage from '../_page/LoginPage';
import HomePage from '../../_page/HomePage';
import {student} from  '../_data/user.data';
import Menu from '../../_page/Menu';
import Notification from '../../_page/Notification';

describe('LOGIN PAGE --POSITIVE', () => {
    before(() => {
        HomePage.open();
        HomePage.loginLink.click();
    });

    it('should wait correct Login Page title', () => {
        browser.waitUntil(() => {
            return Menu.h1.getText() === 'User Login'
        }, 5000, 'expected header to be different after 3s');
    });

    it('should fill out email field', () => {
        LoginPage.emailInput.setValue(student.email);
    });

    it('should fill out password field', () => {
        LoginPage.passwordInput.setValue(student.password);
    });

    it('should check password field hide with bullets', () => {
        const actual = LoginPage.passwordInput.getAttribute('type');
        const expected = 'password';
        expect(actual).eq(expected);
    });

    it('should click Login button', () => {
        LoginPage.submitBtn.click();
    });

    it('should check transfer to Profile Page', () => {
        browser.waitUntil(() => {
            return Menu.h1.getText() === 'Student PASV'
        }, 5000, 'expected header to be different after 3s');
    });

    it('should get positive login notification', () => {
        $(Notification.success).isDisplayed();
    });

    //Wait until "Completed challenge" notification bug fixing
    //it('should get correct text in notification', () => {
        //const actual = LoginPage.notification.getText();
        //const expected = 'Auth success';
        //expect(actual).eq(expected);
    //});

});
