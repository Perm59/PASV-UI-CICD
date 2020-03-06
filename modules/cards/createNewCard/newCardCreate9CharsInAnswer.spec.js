import { expect } from 'chai';
import FlashCardsPage from '../../_page/FlashCardsPage';
import LoginPage from '../../user/_page/LoginPage';
import { negative4 } from '../../_data/newCard.data';
import { student } from '../../user/_data/user.data';

describe('CREATE NEW CARD -- NEGATIVE WITH 9 CHARS IN ANSWER', () => {
  before('should login as a student', () => {
    LoginPage.login(student);
  });

  it('should open `FlashCards` page', () => {
    FlashCardsPage.open();
  });

  it('should check if the group exists', () => {
    const actual = FlashCardsPage.groupName;
    expect(actual).to.exist;
  });

  it('should click the link with a `FlashCards` group name', () => {
    FlashCardsPage.groupName.click();
  });

  it('should click `Waiting for approval` link', () => {
    FlashCardsPage.waitingForApproval.click();
  });

  it('should click `Create new Card` button', () => {
    FlashCardsPage.createNewCardBtn.click();
    browser.pause(2000);
  });

  it('should check if a modal form is opened', () => {
    const element = FlashCardsPage.modalForm;
    expect(element.isDisplayed()).true;
  });

  it('should check if a correct modal form is open', () => {
    const actual = FlashCardsPage.modalFormTitle.getText();
    const expected = 'Create Flash Card';
    expect(actual).equal(expected);
  });

  it('should fill in the `Question` text area', () => {
    FlashCardsPage.question.setValue(negative4.questionText);
  });

  it('should fill in the `Answer` text area', () => {
    FlashCardsPage.answer.setValue(negative4.answerText);
    browser.pause(3000);
  });

  it('should check if `Create` button is disabled', () => {
    const element = FlashCardsPage.createBtn.isEnabled();
    expect(element).be.false;
  });

  after('close the modal form and logout', () => {
    browser.$('//button[@class = "close"]').click();
    FlashCardsPage.logout();
    browser.pause(3000);
  });
});
