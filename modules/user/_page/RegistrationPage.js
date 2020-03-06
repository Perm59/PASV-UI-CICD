import AppPage from '../../_page/AppPage';

class RegistrationPage extends AppPage {
  get p() {
    return $('//p');
  }

  get firstNameInput() {
    return $('//form//input[@name="firstName"]');
  }

  get lastNameInput() {
    return $('//form//input[@name="lastName"]');
  }

  get cellPhoneNumberInput() {
    return $('//form//input[@name="phone"]');
  }

  get emailInput() {
    return $('//form//input[@name="email"]');
  }

  get passwordInput() {
    return $('//form//input[@name="password"]');
  }

  get aboutInput() {
    return $('//form//textarea[@name="about"]');
  }

  get myGoalsInput() {
    return $('//form//textarea[@name="goals"]');
  }

  get englishLevelOption() {
    return $('//form//select[@name="englishLevel"]');
  }

  get submitBtn() {
    return $('//form//button[@type="submit"]');
  }

  userRegistration(role) {
    this.firstNameInput.setValue(role.firstName);
    this.lastNameInput.setValue(role.lastName);
    this.cellPhoneNumberInput.setValue(role.phone);
    this.emailInput.setValue(role.email);
    this.passwordInput.setValue(role.password);
    this.aboutInput.setValue(role.about);
    this.myGoalsInput.setValue(role.goals);
    this.englishLevelOption.selectByVisibleText(role.englishLevel);
    this.submitBtn.click();
  }
}

export default new RegistrationPage();
