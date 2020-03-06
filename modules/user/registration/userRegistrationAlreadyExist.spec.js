import RegistrationPage from '../_page/RegistrationPage';
import HomePage from '../../_page/HomePage';
import Notification from '../../_page/Notification';
import {
  userRegisteredData,
  errorNotificationData
} from '../_data/userRegistration.data';

describe('USER REGISTRATION -- NEGATIVE -- DUPLICATE REGISTRATION', () => {
  before('Go to register page from home page', () => {
    HomePage.open();
    HomePage.registrationLink.click();
    browser.pause(1000);
  });

  it('should already registered user after submitting registration form get error notification', () => {
    RegistrationPage.userRegistration(userRegisteredData);
    browser.waitUntil(() => Notification.title.getText() === errorNotificationData, 3000);
  });
});
