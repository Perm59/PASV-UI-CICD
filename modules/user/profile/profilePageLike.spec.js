import Menu from '../../_page/Menu';
import Notification from '../../_page/Notification';
import ProfilePage from '../_page/ProfilePage';
import LoginPage from '../_page/LoginPage';
import LogoutPage from '../_page/LogoutPage';
import CreateDayReportPage from '../../diary/_page/CreateDayReportPage';
import { text } from '../_data/profilePage.data';
import { student } from '../_data/user.data';

describe('PROFILE PAGE DAILY REPORTS LIKE BUTTON TESTING', () => {
  before(() => {
    LoginPage.login(student);
    CreateDayReportPage.createNewDayReport();
    browser.pause(1000);
    ProfilePage.goToProfilePage();
  });

  it('should check profile page is loaded and correct', () => {
    browser.waitUntil(() => Menu.h1.isDisplayed());
    expect(Menu.h1.getText()).equal(text.studentName);
  });

  it('should click Like button', () => {
    ProfilePage.likeBtn.click();
  });

  it('should success notification pop up', () => {
    Notification.success.waitForDisplayed(1500);
  });

  after('should logout', () => {
    LogoutPage.logout();
  });
});
