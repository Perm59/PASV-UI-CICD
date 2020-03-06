import LoginPage from '../../user/_page/LoginPage';
import CoursesListPage from '../_page/CoursesListPage';
import { student } from '../../user/_data/user.data';
import AppPage from '../../_page/Menu';
import Menu from '../../_page/Menu';

describe('COURSE LIST', () => {
  before('loginAsStudent', () => {
    LoginPage.login(student);
  });

  it('should click top menu Courses', () => {
    Menu.coursesLink.click();
  });

  it('should have correct title', () => {
    expect(AppPage.h1.getText()).eq('Courses');
  });

  it('should click first item in the course list', () => {
    CoursesListPage.name1.click();
    browser.waitUntil(() => AppPage.h1.getText() === 'COURSE73.57');
    browser.back();
  });

  it('should have description about course', () => {
    expect(CoursesListPage.description1.getText()).eq('TEST PURPOSES ONLY');
  });

  it('should click Progress of first course', () => {
    CoursesListPage.progress1.click();
    browser.waitUntil(() => AppPage.h1.getText() === 'Course Report');
    browser.back();
  });

  it('should click 20th item in the course list', () => {
    CoursesListPage.name20.click();
    browser.waitUntil(() => AppPage.h1.getText() === '28 Course for adding Challenge');
    browser.back();
  });

  it('should have description about course', () => {
    expect(CoursesListPage.description20.getText()).eq('description, description');
  });

  it('should click Progress of 20th course', () => {
    CoursesListPage.progress20.click();
    browser.waitUntil(() => AppPage.h1.getText() === 'Course Report');
    browser.back();
  });
});
