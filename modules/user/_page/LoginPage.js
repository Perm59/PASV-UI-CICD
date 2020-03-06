import AppPage from '../../_page/AppPage';

class LoginPage extends AppPage {
  get emailInput() {
    return $('//input[@name="email"]');
  }

  get passwordInput() {
    return $('//input[@name="password"]');
  }

  get forgotPasswordLink() {
    return $('//a[@qa="forgot-password-link"]');
  }

  get submitBtn() {
    return $('//button[@type="submit"]');
  }

  get notification() {
    return $('//h4[@class="notification-title"]');
  }

  get invalidEmailNotification(){
    return $('//div[@class="invalid-feedback"]')
  }

  login(role) {
    this.open();
    this.emailInput.setValue(role.email);
    this.passwordInput.setValue(role.password);
    this.submitBtn.click();
    browser.pause(2000);
  }

  open() {
    super.open('https://stage.pasv.us/user/login');
  }
}

export default new LoginPage();
