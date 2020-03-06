import FlashCardsPage from '../../_page/FlashCardsPage';
import LoginPage from '../../user/_page/LoginPage';
import { student } from '../../user/_data/user.data';
import Menu from '../../_page/Menu';

describe('MENU CARDS PAGE', () => {
  before('login as a student', () => {
    LoginPage.login(student);
  });

  it('should check a `FlashCards` page title', () => {
    FlashCardsPage.openCardsMenu().click();
    browser.waitUntil(() => Menu.h1.getText() === 'FlashCards');
  });

  it('should check a description', function() {
    const actual = FlashCardsPage.pageDescription.getText();
    const expected =
      'Now the stage of filling content cards. Create cards. After there will be enough cards training will be opened for memorization.';
    expect(actual).eq(expected);
  });

  //Эти тесты через раз падают, так как постоянно создаются новые и сравнение сделать сложнее по имени.
  // it('should check the name of the first(top) card', function () {
  //     const actual = FlashCardsPage.firstCreatedCard.getText();
  //     const expected = 'Black Jack';
  //     expect(actual).eq(expected);
  // });

  // it('should have `Black Jack` title when clicked on name', function () {
  //     FlashCardsPage.firstCreatedCard.click();
  //     const actual=FlashCardsPage.h1LastCreated.getText();
  //     const expected='Black Jack';
  //     expect(actual).eq(expected);
  // })

  it('should check title of the oldest created card', function() {
    const actual = FlashCardsPage.cardLastInList.getText();
    const expected = 'TestGroup';
    expect(actual).eq(expected);
  });

  it('should check `Main view` title in the navigation menu link', function() {
    FlashCardsPage.firstCreatedCard.click();
    browser.waitUntil(()=>FlashCardsPage.mainViewLink.getText()==='Main view');
  });

  it('should check `Compact view` title in the navigation menu', function() {
    const actual = FlashCardsPage.compactViewLink.getText();
    expect(actual).eq('Compact view');
  });

  it('should check `Waiting for approval` title in the navigation menu', function() {
    const actual = FlashCardsPage.waitingForApproval.getText();
    expect(actual).eq('Waiting for approval');
  });

  it('should check `Training` title of Navigation Menu link', function() {
    const actual = FlashCardsPage.trainingLink.getText();
    expect(actual).eq('Training');
  });

  it('should check `Main view` link is clickable', function() {
    const actual = FlashCardsPage.mainViewLink.isClickable();
    expect(actual).be.true;
  });

  it('should check `Compact view` link is clickable', function() {
    const actual = FlashCardsPage.compactViewLink.isClickable();
    expect(actual).be.true;
  });

  it('should check `Waiting for approval` link is clickable', function() {
    const actual = FlashCardsPage.waitingForApproval.isClickable();
    expect(actual).be.true;
  });

  it('should check `Training` link is clickable', function() {
    const actual = FlashCardsPage.trainingLink.isClickable();
    expect(actual).be.true;
  });
});
