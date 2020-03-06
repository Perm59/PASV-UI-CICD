import AppPage from '../../_page/AppPage';

class DayReportLikePage extends AppPage {
  get diaryLink() {
    return browser.$('//a[@qa="diary-link"]');
  }

  get h1() {
    return browser.$('//h1');
  }

  get likeBtn() {
    return browser.$('//button[@qa="like-button"]');
  }

  get likeBtnStatus() {
    return browser.$('//button[@disabled]');
  }

  get createDayReportBtn() {
    return browser.$('//a[@qa="create-day-report-button"]');
  }

  open() {
    super.open('https://stage.pasv.us/user/login');
  }
}

export default new DayReportLikePage();
