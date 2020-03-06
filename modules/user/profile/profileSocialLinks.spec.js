import Menu from '../../_page/Menu';
import ProfilePage from '../_page/ProfilePage';
import LoginPage from '../_page/LoginPage';
import LogoutPage from '../_page/LogoutPage';
import { text, partialUrl } from '../_data/profilePage.data';
import { student } from '../_data/user.data';

describe('SOCIAL NETWORKS INTEGRATION', () => {
  before(() => {
    LoginPage.login(student);
  });

  it('should check that page is correct', () => {
    browser.waitUntil(() => Menu.h1.getText() === text.studentName);
  });

  it('should click CodeWars icon', () => {
    const element = ProfilePage.codeWarsIcon;
    element.click();
  });

  it('should check user has been redirected to codewars', () => {
    browser.switchWindow(partialUrl.codewars);
    const element = browser.getUrl();
    expect(element).includes(partialUrl.codewars);
    browser.closeWindow();
  });

  it('should click Facebook icon', () => {
    browser.switchWindow(partialUrl.pasv);
    const element = ProfilePage.facebookIcon;
    element.click();
  });

  it('should check that user has been redirected to facebook', () => {
    browser.switchWindow(partialUrl.facebook);
    const element = browser.getUrl();
    expect(element).includes(partialUrl.facebook);
    browser.closeWindow();
  });

  it('should click LinkedIn icon', () => {
    browser.switchWindow(partialUrl.pasv);
    const element = ProfilePage.linkedInIcon;
    element.click();
  });

  it('should check user has been redirected to LinkedIn', () => {
    browser.switchWindow(partialUrl.linkedin);
    const element = browser.getUrl();
    expect(element).includes(partialUrl.linkedin);
    browser.closeWindow();
  });

  it('should logout', () => {
    browser.switchWindow(partialUrl.pasv);
  });

  after('should logout', () => {
    LogoutPage.logout();
  });
});
