/* test is impossible for now



import ProfilePage from '../../_page/ProfilePage';
import LoginPage from '../../_page/LoginPage';
import Menu from '../../_page/Menu';
import { student } from '../../_data/user.data';
import {data} from "../../_data/profilePage.data";

describe('PROFILE PAGE UPDATE LIST BUTTON', () => {
  before(() => {
    LoginPage.login(student);
  });

  it('should check profile page is loaded and correct', () => {
    const element = Menu.h1;
    browser.waitUntil(() => element.isDisplayed());
    expect(element.getText()).equal(data.student.name);
  });

  it('should check Update list button exist', () => {
    expect(ProfilePage.updateListBtn).is.exist;
  });

  it('should click Update list button', () => {
    const element = ProfilePage.updateListBtn;
    element.click();
    browser.pause(3000);
  });

  it('should have a correct notification', () => {
    const actual = $(ProfilePage.updateListNotification).getText();
    const expected = 'Completed challenges';
    expect(actual).equal(expected);
  });
});


 */
