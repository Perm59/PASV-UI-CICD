import { expect } from 'chai';
import LoginPage from '../../user/_page/LoginPage';
import DayReportLikePage from '../_page/DayReportLikePage';
import CreateDayReportPage from "../../diary/_page/CreateDayReportPage";
import { student } from '../../user/_data/user.data';
import Menu from "../../_page/Menu";
import {text} from "../../user/_data/profilePage.data";

describe('DAY REPORT PAGE LIKE BUTTON TESTING', () => {
  before(() => {
    LoginPage.login(student);
    DayReportLikePage.diaryLink.click();
    browser.pause(500);
  });

  it('should have a correct page title', () => {
    const actual = CreateDayReportPage.header.getText();
    const expected = 'Daily reports';
    expect(actual).equal(expected);
  });

  it('should click Like button', () => {
    CreateDayReportPage.createNewDayReport();
    expect(DayReportLikePage.likeBtn.getText()).equal('Like 👍');
    DayReportLikePage.likeBtn.click();
    browser.waitUntil(() => DayReportLikePage.likeBtn.getText() === 'I like this 👍1');
  });

  it('should Like button be disabled', () => {
    expect(DayReportLikePage.likeBtn.isEnabled()).equal(false);
  });
});
