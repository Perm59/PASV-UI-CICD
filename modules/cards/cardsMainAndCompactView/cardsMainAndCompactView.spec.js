import { expect } from 'chai';
import LoginPage from '../../user/_page/LoginPage';
import MainAndCompactViewPage from '../_page/CardsMainAndCompactViewPage';
import FlashCardsPage from '../../_page/FlashCardsPage';
import { student } from '../../user/_data/user.data';
import { pageTestData } from '../_data/cardsMainAndCompact.data';
import { groupNameLink } from '../../_data/newCard.data';

describe('CARDS MAIN VIEW AND COMPACT VIEW', () => {
  before('login as a student', () => {
    LoginPage.login(student);
    browser.pause(200);
  });

  it('should open `FlashCards` page', () => {
    FlashCardsPage.open();
    expect(pageTestData.title).equal(FlashCardsPage.h1.getText());
  });

  it('should open a specified `Flash Card`', () => {
    browser.$(groupNameLink).click();
    expect(pageTestData.groupName).equal(FlashCardsPage.h1.getText());
  });

  it('should redirect to `Main view`', () => {
    MainAndCompactViewPage.mainView.click();
    expect(MainAndCompactViewPage.mainViewActive.isExisting()).equal(true);
  });

  it('should check that question appears under `Main view`', () => {
    expect(MainAndCompactViewPage.cardQuestion.isExisting()).equal(true);
  });

  it('should check that answer appears under question', () => {
    expect(MainAndCompactViewPage.cardAnswer.isExisting()).equal(true);
  });

  it('should redirect to `Compact view`', () => {
    MainAndCompactViewPage.compactView.click();
    expect(MainAndCompactViewPage.compactViewActive.isExisting()).equal(true);
  });

  it('should check that answer does not appear before hovering over the question', () => {
    expect(MainAndCompactViewPage.answerText.isExisting()).equals(false);
  });

  it('should check that answer appears when hovering over the question', () => {
    MainAndCompactViewPage.questionText.moveTo();
    expect(MainAndCompactViewPage.answerText.isExisting()).equals(true);
  });
});
