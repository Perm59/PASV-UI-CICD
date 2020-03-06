import Menu from '../../_page/Menu';
import Notification from '../../_page/Notification';
import LoginPage from '../../user/_page/LoginPage';
import LogoutPage from '../../user/_page/LogoutPage';
import CreateDayReportPage from '../../diary/_page/CreateDayReportPage';
import DailyReportsPage from '../_page/DailyReportsPageList';
import { dailyReportList } from '../_data/dailyReportsList.data';
import { student } from '../../user/_data/user.data';

describe('DAILY REPORTS PAGE TESTING', () => {
  before(() => {
    LoginPage.login(student);
    for (let i = 0; i < 3; i++) {
      CreateDayReportPage.createNewDayReport();
    }
  });

  it('should click Diary button', () => {
    const element = DailyReportsPage.diaryBtn;
    element.click();
  });

  it('should show success notification', () => {
    browser.waitUntil(() => Notification.title.isDisplayed());
  });

  it('should check that page has correct description', () => {
    expect(Menu.h1.getText()).equal(dailyReportList.h1);
  });

  it('should check Create Day Report button is displayed', () => {
    expect(DailyReportsPage.createBtn.isDisplayed()).true;
  });

  it('should check paragraph contains correct description', () => {
    const actual = Menu.p.getText();
    expect(actual).eq(dailyReportList.p);
  });

  it('should Create Day Report button be clickable', () => {
    const actual = DailyReportsPage.createBtn.isClickable();
    expect(actual).true;
  });

  it('should check 3 most recent reports exist in the list', () => {
    DailyReportsPage.checkLast3Reports();
  });

  after('should logout', () => {
    LogoutPage.logout();
  });
});
