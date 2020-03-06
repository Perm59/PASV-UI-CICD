import LoginPage from '../../user/_page/LoginPage';
import LogoutPage from '../../user/_page/LogoutPage';
import CreateDayReportPage from '../_page/CreateDayReportPage';
import { student } from '../../user/_data/user.data';
import {
  createDayReport,
  hoursStudiedInputs,
  howWasYourDayInputs,
  instructionsToCheckMarks
} from '../_data/createDayReport.data';

describe('CREATE DAY REPORT', () => {
  before('should login as STUDENT, navigate to Day Report page', () => {
    LoginPage.login(student);
    CreateDayReportPage.diaryLink.click();
    CreateDayReportPage.createDayReportBtn.click();
  });

  it('should verify Create Day Report PAGE HEADER', () => {
    expect(CreateDayReportPage.header.getText()).eq(createDayReport.h1);
  });

  it('should verify COMMON TITLE TO ALL CHECK MARKS', () => {
    expect(CreateDayReportPage.checkMarksTitle.getText()).eq(createDayReport.checkMarksTitle);
  });

  it('should select ALL CHECK MARKS to DAILY REPORT', () => {
    CreateDayReportPage.checkAllMarks();
  });

  it('should display & verify INSTRUCTION to NEED HELP check mark', () => {
    expect(CreateDayReportPage.instructionToNeedHelp1.getText()).eq(instructionsToCheckMarks.instructionToNeedHelp);
    CreateDayReportPage.instructionToNeedHelp2.isDisplayed();
  });

  it('should display & verify INSTRUCTION to UNDERSTOOD EVERYTHING check mark', () => {
    expect(CreateDayReportPage.instructionToUnderstoodEverything1.getText()).to.contain(instructionsToCheckMarks.instructionToUnderstoodEverything);
    CreateDayReportPage.instructionToUnderstoodEverything2.isDisplayed();
  });

  it('should display & verify INSTRUCTION to HELPED CLASSMATES check mark', () => {
    expect(CreateDayReportPage.instructionToHelpedClassmates1.getText()).eq(instructionsToCheckMarks.instructionToHelpedClassmates);
    CreateDayReportPage.instructionToHelpedClassmates2.isDisplayed();
  });

  it('should select USER MORALE dropdown', () => {
    CreateDayReportPage.selectDropdown();
  });

  it('should fill out HOW MANY HOURS USER STUDIED TODAY input', () => {
    for(let i = 0; i < hoursStudiedInputs.length; i++) {
      expect(CreateDayReportPage.howManyHours.setValue(hoursStudiedInputs[i]));
      CreateDayReportPage.howWasYourDay.setValue(howWasYourDayInputs[5]);
      expect(CreateDayReportPage.saveBtn.isEnabled()).be.true;
    }
  });

  it('should fill out HOW WAS YOUR DAY input', () => {
    for(let i = 0; i < howWasYourDayInputs.length; i++) {
      expect(CreateDayReportPage.howWasYourDay.setValue(howWasYourDayInputs[i]));
      expect(CreateDayReportPage.saveBtn.isEnabled()).be.true;
    }
  });

  it('should verify FOOTER SLOGAN text', () => {
    expect(CreateDayReportPage.slogan.getText()).to.contain('what do you do for your career?');
  });

  it('should verify SAVE BUTTON TEXT', () => {
    expect(CreateDayReportPage.saveBtn.getText()).eq('Save');
  });

  it('should verify SAVE BUTTON is ACTIVE', () => {
    expect(CreateDayReportPage.saveBtn.isEnabled()).be.true;
  });

  it('should CLICK SAVE BUTTON ', () => {
    CreateDayReportPage.saveBtn.click();
  });

  it('should verify DAY REPORT WAS SUBMITTED', () => {
    expect(CreateDayReportPage.newDayReport.getText()).eq(howWasYourDayInputs[5]);
  });

  after('should LOGOUT', () => {
    LogoutPage.logout();
  });

});
