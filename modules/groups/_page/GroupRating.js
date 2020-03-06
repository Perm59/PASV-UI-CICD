import AppPage from '../../_page/AppPage';

class GroupRating extends AppPage {
  get ratingLink() {
    return $('//a[contains(text(),"Rating")]');
  }

  get h1() {
    return $('//h1');
  }

  get ratingTable() {
    return $('.rt-table');
  }

  get facebookLink() {
    return $('//a[@qa="facebook"]');
  }

  get LinkedInLink() {
    return $('//a[@qa="linkedIn"]');
  }

  get gitHubLink() {
    return $('//a[@qa="github"]');
  }

  get codewarsLink() {
    return $('//a[@qa="codewars"]');
  }

  get nameColumnHeader() {
    return $('//div[text()="Name"]/..');
  }

  get dColumnHeader() {
    return $('//div[text()="D"]/..');
  }

  get honorColumnHeader() {
    return $('//div[text()="Honor"]/..');
  }

  get tasksColumnHeader() {
    return $('//div[text()="Tasks"]/..');
  }

  get trendColumnHeader() {
    return $('//div[text()="Trend"]/..');
  }

  get pulseColumnHeader() {
    return $('//div[text()="Pulse (7 days)"]/..');
  }

  get test() {
    return $$('//div[@class="rt-td"]');
  }
}
export default new GroupRating();
