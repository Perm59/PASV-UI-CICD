class Notification {
  get title() {
    return $('//h4[@class="notification-title"]');
  }

  get success() {
    return $(
      '//div[@class="notification notification-success notification-visible"]'
    );
  }

  get fail() {
    return $(
      '//div[@class="notification notification-error notification-visible"]'
    );
  }

  get invalidMsg() {
    return $('//div[contains(@class, "form")]//div[contains(text(), "Invalid")]');
  }
}

export default new Notification();
