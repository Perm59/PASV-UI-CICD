import AppPage from '../../_page/AppPage';

class CardsTrainingPage extends AppPage {
  get groupTitle() {
    return browser.$('//h1');
  }

  get startTrainingBtn() {
    return browser.$('//button[contains(text(),"Start training")]');
  }

  get showAnswerBtn() {
    return browser.$('//div//button[contains(text(),"Show")]');
  }

  get iKnowBtn() {
    return browser.$('//button[contains(text(),"I know")]');
  }

  get getRandomBtn() {
    return browser.$('//button[contains(text(),"Get random next")]');
  }

  get answerTxt() {
    return browser.$('//div[@class="result"]//p');
  }

  get progressBar() {
    return browser.$('//div[@class="progress"]//div[@aria-valuenow]');
  }

  get cardsList() {
    return browser.$$('//div[@class="pb-1 mb-1 border-bottom"]');
  }

  open(path) {
    super.open('');
  }

  getRandomBtnClick() {
    this.getRandomBtn.click();
  }

  iKnowBtnClick() {
    this.iKnowBtn.click();
  }

  startTrainingClick() {
    this.startTrainingBtn.click();
  }

  showAnswerBtnClick() {
    this.showAnswerBtn.click();
  }
}

export default new CardsTrainingPage();
