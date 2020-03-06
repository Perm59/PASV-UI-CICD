export default class AppPage {
  get h1() {
    return $('//h1');
  }

  open(path) {
    browser.url(path);
  }

  click(element) {
    $(element).click();
  }
}
