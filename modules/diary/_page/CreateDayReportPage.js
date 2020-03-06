import AppPage from '../../_page/AppPage';
import {createDayReport, hoursStudiedInputsInvalid, howWasYourDayInputsInvalid, howWasYourDayInputs, hoursStudiedInputs} from "../_data/createDayReport.data";

class CreateDayReportPage extends AppPage {
  get diaryLink() {
    return browser.$('//a[@qa="diary-link"]');
  }

  get createDayReportBtn() {
    return browser.$('//a[@qa="create-day-report-button"]');
  }

  get header() {
    return browser.$('//h1');
  }

  get checkMarksTitle() {
    return browser.$('//div[contains(@class, "mb-2")]//strong');
  }

  get instructionToNeedHelp1() {
    return browser.$('//label[@for="input-0"]//small[@class="text-secondary"]');
  }

  get instructionToNeedHelp2() {
    return browser.$(
      '//div[@innertext="Describe what difficulties you have, we will contact you and help"]',
    );
  }

  get instructionToUnderstoodEverything1() {
    return browser.$('//label[@for="input-1"]//small[@class="text-secondary"]');
  }

  get instructionToUnderstoodEverything2() {
    return browser.$(
      '//div[@innertext="It means that you are not experiencing difficulties and understand the material that is discussed in the lessons."]',
    );
  }

  get instructionToHelpedClassmates1() {
    return browser.$('//label[@for="input-2"]//small[@class="text-secondary"]');
  }

  get instructionToHelpedClassmates2() {
    return browser.$('//div[@innertext="Specify to whom and on what topic you helped"]');
  }

  get slogan() {
    return browser.$('//small[@qa="app-slogan"]');
  }

  get moraleLevel() {
    return browser.$('//select[@name="morale"]');
  }

  get howManyHours() {
    return browser.$('//input[@name="hours"]');
  }

  get howWasYourDay() {
    return browser.$('//textarea[@name="description"]');
  }

  get saveBtn() {
    return browser.$('//button[contains(text(),"Save")]');
  }

  get newDayReport() {
    return browser.$('//div[@qa="day-report-item-0"]//div[@qa="description"]');
  }

  get requiredWarningForCheckMarks() {
    return browser.$('//div[@qa="day-report-marks"]//span[@innertext="Required"]');
  }

  get requiredWarningForMorale() {
    return browser.$('//div[@class="d-flex flex-row"]//span[@innertext="Required"]');
  }

  get maxTenWarning() {
    return browser.$('//div[@innertext="Maximum is 10"]');
  }

  get mustBeThirtyWarning() {
    return browser.$('//div[@innertext="Must be 30 characters or more"]');
  }

  checkAllMarks() {
    for (let i = 0; i < 12; i++) {
      browser.$(`//input[@id="input-${i}"]`).click();
    }
  }

  selectDropdown() {
    this.moraleLevel.selectByVisibleText('10 – I am pleased with everything!');
    for (let i = 9; i > 0; i--) {
      this.moraleLevel.selectByVisibleText(`${i}`);
    }
    this.moraleLevel.selectByVisibleText('0 – I give up');
  }

  howWasYourDayNegative() {
    this.howWasYourDay.setValue('qwertyuiopasdfghjklzxcvbnmqwe'); //29-character text entered
  }

 beforeForHowManyHoursNegativeScenarios() {
    this.checkAllMarks();
    this.moraleLevel.selectByVisibleText('9');
    this.howWasYourDay.setValue(howWasYourDayInputs[0]);
  }

  beforeForHowWasYourDayNegativeScenarios() {
    this.checkAllMarks();
    this.moraleLevel.selectByVisibleText('9');
    this.howManyHours.setValue(hoursStudiedInputs[4]);
  }

  createNewDayReport() {
    this.createDayReportBtn.click();
    this.checkAllMarks();
    this.moraleLevel.selectByVisibleText('9');
    this.howManyHours.setValue(hoursStudiedInputs[4]);
    this.howWasYourDay.setValue(howWasYourDayInputs[4]);
    this.saveBtn.click();
  }
}

export default new CreateDayReportPage();
