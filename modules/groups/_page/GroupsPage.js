import AppPage from '../../_page/AppPage';
import LoginPage from '../../user/_page/LoginPage';
import Menu from '../../_page/Menu';
import LogoutPage from '../../user/_page/LogoutPage';

class GroupsPage extends AppPage {

  get groupsLink() {
    return browser.$('//a[@qa="groups-link"]');
  }

  get h1() {
    return browser.$('//h1');
  }

  get groupNameLink() {
    return browser.$('=GROUP FOR TEST');
  }

  get createNewGroupBtn() {
    return browser.$('//a[@qa="create-group-button"]');
  }

  get group4TestLink() {
    return $('//h4[@qa="group-name"]//a[text()="Group4Test"]');
  }

  get testGroup() {
    return $('//a[contains(text(),"GROUP FOR TEST")]');
  }

  get quizTabBtn() {
    return $('//a[contains(text(),"Quiz")]');
  }

  get createGroupBtn() {
    return $('//a[@class="btn btn-secondary"]');
  }

  get groupNameInput() {
    return $('//input[@name="name"]');
  }

  get groupDescriptionInput() {
    return $('//input[@name="description"]');
  }

  get accessTypeDropbox() {
    return $('//select[@name="accessType"]');
  }

  get createBtn() {
    return $('//button[@type="submit"]');
  }

  createNewGroup(role) {
    LoginPage.login(role);
    super.click(Menu.groupLink);
    super.click(this.createGroupBtn);
    this.groupNameInput.setValue('GROUP FOR TEST');
    this.groupDescriptionInput.setValue('test '.repeat(5));
    this.accessTypeDropbox.selectByVisibleText('All');
    super.click(this.createBtn);
    LogoutPage.logout();
  }
}

export default new GroupsPage();
