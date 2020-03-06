import Menu from '../../_page/Menu';
import LoginPage from '../../user/_page/LoginPage';
import LogoutPage from '../../user/_page/LogoutPage';
import GroupsPage from '../_page/GroupsPage';
import GroupDescriptionPage from '../_page/GroupDescriptionPage';
import { admin, student } from '../../user/_data/user.data';
import { groupDescription } from '../_data/groupDescription.data';

describe('GROUP DESCRIPTION TAB', () => {
  before(() => {
    GroupsPage.createNewGroup(admin);
    LoginPage.login(student);
  });

  it('should click group button', () => {
    Menu.groupLink.click();
    browser.pause(1000);
  });

  it('should have a correct page title', () => {
    const actual = Menu.h1.getText();
    const expected = groupDescription.h1;
    expect(actual).equal(expected);
  });

  it('should open recently created group', () => {
    GroupDescriptionPage.recentlyCreatedGroup.click();
    browser.waitUntil(() => GroupDescriptionPage.navigationBar.isDisplayed());
  });

  it('should Group have correct name', () => {
    const element = Menu.h1.getText();
    expect(element.includes(groupDescription.name)).true;
  });

  it('should open Group description tab', () => {
    GroupDescriptionPage.descriptionTabBtn.click();
    browser.waitUntil(() => Menu.p.isDisplayed());
  });

  it('should check Group description tab has opened', () => {
    const element = browser.getUrl();
    expect(element.includes(groupDescription.partialUrl)).true;
  });

  it('should Group have correct description', () => {
    const actual = Menu.p.getText();
    const expected = groupDescription.description;
    expect(actual).equal(expected);
  });

  after('it should logout', () => {
    LogoutPage.logout();
  });
});
