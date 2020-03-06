import { expect } from 'chai';
import LoginPage from '../../user/_page/LoginPage';
import CreateDayReportPage from '../../diary/_page/CreateDayReportPage';
import { admin, student } from '../../user/_data/user.data';
import LogoutPage from '../../user/_page/LogoutPage';
import DiaryPage from '../_page/DiaryPage';
import ProfilePage from '../../user/_page/ProfilePage';

let beforeCoinAmount = 0;
let newCoinAmount = 0;
let topCoinAmount = 0;

describe('SAVE COINS AMOUNT BEFORE ', () => {
  before(() => {
    LoginPage.login(student);
    DiaryPage.goToDiaryPage();
    CreateDayReportPage.createNewDayReport();
  });

  it('should save current amount of user coins from the Profile page', () => {
    ProfilePage.goToProfilePage();
    browser.refresh();
    beforeCoinAmount = ProfilePage.coinTotal.getText();
    topCoinAmount = ProfilePage.coinTotalTopRight.getText();
    expect(topCoinAmount).equal(beforeCoinAmount);
  });

  it('should logout as user', () => {
    LogoutPage.logout();
  });
});

describe('APPROVE DAY REPORT BY ADMIN', () => {
  before(() => {
    LoginPage.login(admin);
    DiaryPage.goToDiaryPage();
  });

  it('should approve day report', () => {
    DiaryPage.approveBtn.click();
  });

  it('should logout as admin', () => {
    LogoutPage.logout();
  });
});

describe('VERIFY TOTAL COINS AMOUNT AFTER ADMIN APPROVED REPORT', () => {
  before(() => {
    LoginPage.login(student);
    ProfilePage.goToProfilePage();
  });

  it('should verify new coin amount not equal coin amount before', () => {
    browser.refresh();
    topCoinAmount = ProfilePage.coinTotalTopRight.getText();
    newCoinAmount = ProfilePage.coinTotal.getText();
    expect(newCoinAmount).to.not.equal(beforeCoinAmount);
  });

  it('should verify new coin amount equal to amount of coin before + 1', () => {
    expect(Number.parseInt(newCoinAmount)).equal(Number.parseInt(beforeCoinAmount) + 1);
  });

  it(
    'should verify amount of coin from the top left corner is the match to the amount ' +
      'of coin under the header on the Profile page',
    () => {
      expect(topCoinAmount).equal(newCoinAmount);
    },
  );
});
