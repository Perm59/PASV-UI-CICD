import AppPage from '../../_page/AppPage';

class CardsWaitingForApprovalPage extends AppPage {

  get cardsLink() {
    return browser.$('//a[@qa="cards-link"]');
  }

  get h1(){
    return browser.$('//h1');
  }

  get PageNameTitle() {
    return browser.$('//span[contains(text(), "Waiting for approval")]');
  }

  get Refresh() {
    return browser.$('//button[contains(text(), "Refresh")]');
  }

  get CreateCard() {
    return browser.$('//button[contains(text(), "Create new Card")]');
  }

  get ModuleWindowTitle() {
    return browser.$('//div[@class="modal-body"]//h5[@class="modal-title"]');
  }

  get ModuleWindowQuestion() {
    return browser.$('//div[@class="modal-body"]//textarea[@name="question"]');
  }

  get ModuleWindowAnswer() {
    return browser.$('//div[@class="modal-body"]//textarea[@name="answer"]');
  }

  get ModuleWindowClose() {
    return browser.$('//button[@class="close"]');
  }

  get lastCreatedCardQuestion() {
    return browser.$('//div[@class = "row"]//strong[@class]');
  }

  get lastCreatedCardAnswer() {
    return browser.$('//div[@class = "row"]//span[2]');
  }

  get lastCreatedCardCreator() {
    return browser.$('//div[@class = "row"]//small[@class]');
  }

  get lastCreatedCardStatus() {
    return browser.$('//div[@class = "row"]//span[contains(@class,"badge")]');
  }
  // Я пытался найти где взять этот селектор, но не нашел. Решил временно свой написать.
  get userName() {
    return browser.$('//a[@class="dropdown-toggle nav-link"]');
  }
}

export default new CardsWaitingForApprovalPage();
