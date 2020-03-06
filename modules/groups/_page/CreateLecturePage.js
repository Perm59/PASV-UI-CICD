import AppPage from '../../_page/AppPage';
import LoginPage from '../../user/_page/LoginPage';
import { admin } from '../../user/_data/user.data';
import GroupsPage from './GroupsPage';
import GroupNamePage from './LecturePage';
import LogoutPage from '../../user/_page/LogoutPage';
import { createLecture} from "../_data/groupsLectures.data";

const lectureName = Math.random() + 'lecture';

class CreateLecturePage extends AppPage {

  get h3() {
    return browser.$('//div//h3[@qa="lecture-create-edit-title"]');
  }

  get lectureNameField() {
    return browser.$('//input[@name="name"]');
  }

  get videoLink() {
    return browser.$('//input[@name="video"]');
  }

  get dateField() {
    return browser.$('//input[@placeholder="Date"]');
  }

  get saveBtn() {
    return browser.$('//button[@type="submit"]');
  }

  get homeworkField() {
    return browser.$('//textarea[@name="homework"]');
  }

  createNewLecture() {
    LoginPage.login(admin);
    GroupsPage.groupsLink.click();
    GroupsPage.groupNameLink.scrollIntoView();
    GroupsPage.groupNameLink.click();
    GroupNamePage.createLectureBtn.click();
    this.lectureNameField.setValue(lectureName);
    this.videoLink.setValue(createLecture.videoLink);
    this.dateField.setValue(createLecture.dateField);
    this.homeworkField.setValue(createLecture.homeworkField);
    this.saveBtn.click();
    LogoutPage.logout();
  }
}

export default new CreateLecturePage();
export { lectureName };
