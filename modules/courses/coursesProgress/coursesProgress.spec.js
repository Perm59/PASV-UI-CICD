import Menu from '../../_page/Menu';
import LoginPage from '../../user/_page/LoginPage';
import LogoutPage from '../../user/_page/LogoutPage';
import ProfilePage from '../../user/_page/ProfilePage';
import CoursesProgressPage from '../../_page/CoursesProgressPage';
import { text } from '../../user/_data/profilePage.data';
import { admin, student } from '../../user/_data/user.data';
import CoursesPage from '../_page/CoursesPage';
import { course } from '../../_data/courseProgress.data';

// this test will be refactored once Create New Course method is proper
describe('COURSES PROGRESS PAGE', () => {
  before(() => {
    CoursesPage.createNewCourse(admin, course.name);
    LogoutPage.logout();
    LoginPage.login(student);
  });

  it('should click Courses link', () => {
    Menu.coursesLink.click();
  });

  it('should find and open recently created course', () => {
    $(`//a[contains(text(),${course.name})]`).click();
    browser.pause(4000);
  });

  it('should click Progress link', () => {
    Menu.coursesLink.click();
    CoursesProgressPage.progressLink.click();
  });

  it('should check Course Report page is open', () => {
    expect(Menu.h1.getText()).equal('Course Report');
  });

  it('should click Completed Lessons button', () => {
    const element = CoursesProgressPage.completedLessonsBtn;
    element.click();
  });

  it('should click link Profile page', () => {
    ProfilePage.goToProfilePage();
    browser.pause(1000);
  });

  it('should go to `Profile` page', () => {
    expect(Menu.h1.getText()).equal(text.studentName);
  });

  after('should logout', () => {
    LogoutPage.logout();
  });
});
