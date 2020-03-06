import AppPage from './AppPage';

class CoursesProgressPage extends AppPage {
  get progressLink() {
    return $('//ul[@class="list-group"]//div/a');
  }

  get completedLessonsBtn() {
    return $('//div[contains(text(),"Completed Lessons")]');
  }

  get createNewCourseBtn() {
    return $('//a[@class="btn btn-primary"]');
  }
}

export default new CoursesProgressPage();
