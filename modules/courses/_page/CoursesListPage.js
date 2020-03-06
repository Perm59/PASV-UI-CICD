import AppPage from '../../_page/AppPage';

class CoursesListPage extends AppPage {
  get name1() {
    return browser.$('//ul[@class="list-group"]//h4/a');
  }
  get description1() {
    return browser.$('//ul[@class="list-group"]//div[(text()="TEST PURPOSES ONLY")]');
  }
  get progress1() {
    return browser.$('//ul[@class="list-group"]//div/a');
  }

  get name20() {
    return browser.$('//ul[@class="list-group"]//div[20]//h4/a');
  }
  get description20() {
    return browser.$(
      '//ul[@class="list-group"]//div[20]//div[(text()="description, description")]',
    );
  }
  get progress20() {
    return browser.$('//ul[@class="list-group"]//div[20]/a');
  }
}
export default new CoursesListPage();
