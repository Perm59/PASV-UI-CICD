import AppPage from '../../_page/AppPage';
import { newCourseCreate } from '../_data/courseStart.data';

class NewCourseCreatePage extends AppPage {
  open() {
    super.open('https://stage.pasv.us/course');
  }

  get createNewCourseBtn() {
    return $('//a[@class="btn btn-primary"]');
  }

  get newCourseNameInput() {
    return $('//input[@name="name"]');
  }

  get newCourseDescriptionInput() {
    return $('//input[@name="description"]');
  }

  get accessTypeSelect() {
    return $('//select[@name="accessType"]');
  }

  get createBtn() {
    return $('//button[@class="btn btn-primary"]');
  }

  get createdCourseTitle() {
    return $(`//a[text()="${newCourseCreate.courseName}"]`);
  }

  newCourseCreate() {
    this.open();
    this.createNewCourseBtn.click();
    this.newCourseNameInput.setValue(newCourseCreate.courseName);
    this.newCourseDescriptionInput.setValue(newCourseCreate.description);
    this.accessTypeSelect.selectByVisibleText(newCourseCreate.accessType);
    this.createBtn.click();
  }
}

export default new NewCourseCreatePage();
