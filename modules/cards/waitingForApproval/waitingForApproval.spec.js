import { expect } from 'chai';
import FlashCardsPage from '../../_page/FlashCardsPage';
import { student } from '../../user/_data/user.data';
import LoginPage from '../../user/_page/LoginPage';
import CardsWaitingForApprovalPage from '../_page/CardsWaitingForApprovalPage';
import { positive } from '../../_data/newCard.data';
import Logout from '../../user/_page/LogoutPage';
import {waitingForApprovalData} from "../_data/cardsWaitingForApproval.data";
import {pageTestData} from "../_data/cardsMainAndCompact.data";

describe('WAITING FOR APPROVAL', () => {
  before('login as a student', () => {
    LoginPage.login(student);
  });

  it('should click `Cards` in the navigation bar', () => {
    CardsWaitingForApprovalPage.cardsLink.click();
  });

  it('should have correct header', () => {
    expect(FlashCardsPage.h1.getText()).eq(pageTestData.title);
  });

  it('should find group `Test Group` and click', () => {
    FlashCardsPage.linkToGroup.scrollIntoView();
    FlashCardsPage.linkToGroup.click();
  });

  it('should check a group title', () => {
    expect(CardsWaitingForApprovalPage.h1.getText()).eq(waitingForApprovalData.header);
  });

  it('should click `Waiting for approval` link', () => {
    FlashCardsPage.waitingForApproval.click();
  });

  it('should verify `Waiting for approval` title', () => {
    expect(CardsWaitingForApprovalPage.PageNameTitle.getText()).eq(waitingForApprovalData.title);
  });

  it('should click `Create new Card` button', () => {
    CardsWaitingForApprovalPage.CreateCard.click();
  });

  it('should verify a modal window title', () => {
    browser.waitUntil(() => CardsWaitingForApprovalPage.ModuleWindowTitle.getText() === waitingForApprovalData.moduleTitle);
  });

  it('should verify that `Question` text area is present', () => {
    expect(CardsWaitingForApprovalPage.ModuleWindowQuestion.isDisplayed());
  });

  it('should verify that `Answer` text area is present', () => {
    expect(CardsWaitingForApprovalPage.ModuleWindowAnswer.isDisplayed());
  });

  it('should verify that `Create` button is present', () => {
    expect(CardsWaitingForApprovalPage.ModuleWindowAnswer.isDisplayed());
  });

  it('should verify that `Close` button is present', () => {
    expect(CardsWaitingForApprovalPage.ModuleWindowClose.isDisplayed());
  });

  it('should fill in the `Question` text area', () => {
    FlashCardsPage.question.setValue(positive.questionText);
  });

  it('should fill in the `Answer` text area', () => {
    FlashCardsPage.answer.setValue(positive.answerText);
  });

  it('should check if `Create` button is enabled', () => {
    expect(FlashCardsPage.createBtn.isEnabled()).be.true;
  });

  it('should click `Create` button', () => {
    FlashCardsPage.createBtn.click();
  });

  it('should check if the card was created', () => {
    expect(FlashCardsPage.lastCreatedCard.getText()).equal(positive.questionText);
  });

  it('should check if the card has right `Question`', () => {
    expect(CardsWaitingForApprovalPage.lastCreatedCardQuestion.getText()).eq(positive.questionText);
  });

  it('should check if the card has right `Answer`', () => {
    expect(CardsWaitingForApprovalPage.lastCreatedCardAnswer.getText()).eq(positive.answerText);
  });

  it('should check if the card has right creator name', () => {
    expect(CardsWaitingForApprovalPage.lastCreatedCardCreator.getText()).eq(
      Logout.logoutDropdown.getText(),
    );
  });

  it('should check if the card has right status', () => {
    expect(CardsWaitingForApprovalPage.lastCreatedCardStatus.getText()).eq(waitingForApprovalData.cardStatus);
  });
});
