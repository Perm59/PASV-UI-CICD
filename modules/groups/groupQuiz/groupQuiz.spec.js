import Menu from '../../_page/Menu';
import LoginPage from '../../user/_page/LoginPage';
import LogoutPage from '../../user/_page/LogoutPage';
import GroupsPage from '../_page/GroupsPage';
import { student, admin } from '../../user/_data/user.data';

describe('GROUPS QUIZ TAB', () => {
  before(() => {
    GroupsPage.createNewGroup(admin);
    LoginPage.login(student);
  });

  it('should check header is student name', () => {
    const element = Menu.h1;
    const actual = element.getText();
    const expected = 'Student PASV';
    expect(actual).equals(expected);
  });

  it('should click Groups link', () => {
    Menu.groupLink.click();
    browser.waitUntil(() => Menu.h1.getText() === 'Groups');
  });

  it('should open Existed Group "GROUP FOR TEST" link', () => {
    GroupsPage.testGroup.click();
    browser.waitUntil(() => Menu.h1.getText() === 'Group GROUP FOR TEST');
  });

  it('should check if quiz tab exist', () => {
    expect(GroupsPage.quizTabBtn.isDisplayed()).true;
  });

  it('should click quiz Tab Btn', () => {
    GroupsPage.quizTabBtn.click();
    browser.pause(1000);
  });

  it('should check redirection to quiz page', () => {
    const element = browser.getUrl();
    expect(element.includes('quiz')).true;
  });

  after('should log out', () => {
    LogoutPage.logout();
  });
});
