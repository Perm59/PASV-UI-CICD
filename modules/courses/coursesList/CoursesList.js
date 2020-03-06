import AppPage from '../../_page/AppPage';

class CoursesList extends AppPage {
  get name1() {
    return browser.$('//ul[@class="list-group"]//h4/a');
  }
  get description1() {
    return browser.$('//ul[@class="list-group"]//div[(text()="JavaScript")]');
  }
  get progress1() {
    return browser.$('//ul[@class="list-group"]//div/a');
  }

  get name50() {
    return browser.$('//ul[@class="list-group"]//div[50]//h4/a');
  }
  get description50() {
    return browser.$(
      '//ul[@class="list-group"]//div[50]//div[(text()="JavaScript. Arrays")]',
    );
  }
  get progress50() {
    return browser.$('//ul[@class="list-group"]//div[50]/a');
  }
}

export default new CoursesList();
