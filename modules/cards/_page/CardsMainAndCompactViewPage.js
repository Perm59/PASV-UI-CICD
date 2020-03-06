import AppPage from '../../_page/AppPage';

class CardsMainAndCompactViewPage extends AppPage {
  get mainView() {
    return browser.$('//a[contains(text(),"Main view")]');
  }

  get mainViewActive() {
    return browser.$('//a[contains(text(),"Main view")][contains(@class,"nav-link active")]');
  }

  get compactView() {
    return browser.$('//a[contains(text(),"Compact view")]');
  }

  get compactViewActive() {
    return browser.$('//a[contains(text(),"Compact view")][contains(@class,"nav-link active")]');
  }

  get questionText() {
    return browser.$(
      '//strong[contains(text(),"What is the difference between the first test and the second one?")]',
    );
  }

  get cardQuestion() {
    return browser.$('//strong[@class="d-block mb-2"][@qa="question"]');
  }

  get answerText() {
    return browser.$('//div[@class="answer mb-4 mt-1 img-shadow"]');
  }

  get cardAnswer() {
    return browser.$('//span[@qa="answer"]');
  }
}
export default new CardsMainAndCompactViewPage();
