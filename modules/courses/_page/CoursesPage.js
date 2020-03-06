import AppPage from '../../_page/AppPage';
import LoginPage from '../../user/_page/LoginPage';
import Menu from '../../_page/Menu';
import {courseData} from '../_data/courseCreateData';
class CoursesPage extends AppPage {

  get createNewCourseGlobal() {
    Menu.coursesLink.click();
   // browser.waitUntil(() => Menu.h1.getText() === 'Courses');
    this.createNewCourseBtn.click();
    this.courseNameInput.setValue(courseData.name);
    this.courseDescriptionInput.setValue(courseData.description);
    this.accessTypeSelect.selectByAttribute('value', courseData.type);
    this.createBtn.click();
  }

  get createNewCourseBtn() {
    return $('//a[text() ="Create new Course"]');
  }

  get courseNameInput() {
    return $('//input[@name="name"]');
  }

  get courseDescriptionInput() {
    return $('//input[@name="description"]');
  }

  get accessTypeSelect() {
    return $('//select[@name="accessType"]');
  }

  get createBtn() {
    return $('//button[@type="submit"]');
  }

  get findCourse() {
    return $(`//ul[@class="list-group"]//a[text() ="${courseData.name}"]`);
  }

  get editBtn() {
    return $('//a[@class="edit"]');
  }

  get courseDescription() {
    return $(`//div[text() ="${courseData.description}"]`);
  }

  get startCourseBtn() {
    return $('//button[text() ="Start course"]');
  }

  createNewCourse(role, name) {
    LoginPage.login(role);
    super.click(Menu.coursesLink);
    super.click(this.createNewCourseBtn);
    this.courseNameInput.setValue(name);
    this.courseDescriptionInput.setValue('TEST PURPOSES ONLY');
    this.accessTypeSelect.selectByVisibleText('All');
    this.createBtn.click();
    browser.waitUntil(() => Menu.h1.getText() === 'Courses');
  }
}

export default new CoursesPage();
