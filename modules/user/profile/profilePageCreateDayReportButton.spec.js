import Menu from '../../_page/Menu';
import ProfilePage from '../_page/ProfilePage';
import LoginPage from '../_page/LoginPage';
import LogoutPage from '../_page/LogoutPage';
import { text } from '../_data/profilePage.data';
import { student } from '../_data/user.data';

describe('PROFILE PAGE CREATE DAILY REPORT BUTTON TESTING', () => {
  before(() => {
    LoginPage.login(student);
  });

  it('should go to Profile Page', () => {
    ProfilePage.goToProfilePage();
  });

  it('should check Create day report button exists and clickable', () => {
    browser.waitUntil(() => ProfilePage.createDayReportBtn.isDisplayed());
    const actual = ProfilePage.createDayReportBtn.isClickable();
    expect(actual).true;
  });

  it('should click Create day report button', () => {
    const element = ProfilePage.createDayReportBtn;
    element.click();
  });

  it('should have correct header', () => {
    browser.waitUntil(() => Menu.h1.isDisplayed());
    expect(Menu.h1.getText()).equal(text.createDayReportH1);
  });

  after('should logout', () => {
    LogoutPage.logout();
  });
});
