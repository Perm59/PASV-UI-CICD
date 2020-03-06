import LoginPage from '../../user/_page/LoginPage';
import LogoutPage from '../../user/_page/LogoutPage';
import CreateDayReportPage from '../_page/CreateDayReportPage';
import { student } from '../../user/_data/user.data';
import {hoursStudiedInputs, hoursStudiedInputsInvalid, howWasYourDayInputs, howWasYourDayInputsInvalid} from "../_data/createDayReport.data";
import {dailyReportList} from "../_data/dailyReportsList.data";

describe('CREATE DAY REPORT -- INVALID TITLES, INSTRUCTIONS, WARNINGS', () => {
  before('should login as STUDENT, navigate to Day Report page', () => {
    LoginPage.login(student);
    CreateDayReportPage.diaryLink.click();
    CreateDayReportPage.createDayReportBtn.click();
  });

  it('should verify Create Day Report PAGE HEADER is CORRECT', () => {
    expect(CreateDayReportPage.header.getText()).not.eq(dailyReportList.h1);
  });

  it('should verify COMMON TITLE TO ALL CHECK MARKS', () => {
    expect(CreateDayReportPage.checkMarksTitle.getText()).not.eq('What is your morale?');
  });

  it('should display REQUIRED WARNING if NO CHECK MARK SELECTED ', () => {
    CreateDayReportPage.requiredWarningForCheckMarks.isDisplayed();
  });

  it('should display REQUIRED WARNING if USER MORALE NOT SELECTED', () => {
    CreateDayReportPage.requiredWarningForMorale.isDisplayed();
  });

  it('should verify SAVE BUTTON NOT ACTIVE ', () => {
    expect(CreateDayReportPage.saveBtn.isEnabled()).be.not.true;
  });

  it('should verify SAVE BUTTON TEXT', () => {
    expect(CreateDayReportPage.saveBtn.getText()).not.eq('save');
  });

  it('should verify SAVE BUTTON CLICKABLE', () => {
    expect(CreateDayReportPage.saveBtn.isClickable()).be.not.true;
  });

  after('should LOGOUT', () => {
    LogoutPage.logout();
  });
});

describe('CREATE DAY REPORT -- INVALID INPUTS IN HOW MANY HOURS USER STUDIED', () => {
  before('should login as STUDENT, navigate to Day Report page', () => {
    LoginPage.login(student);
    CreateDayReportPage.diaryLink.click();
    CreateDayReportPage.createDayReportBtn.click();
    CreateDayReportPage.beforeForHowManyHoursNegativeScenarios();
  });

it('should verify HOW MANY HOURS USER STUDIED TODAY inputs', () => {
  for(let i = 0; i < hoursStudiedInputsInvalid.length; i++) {
    expect(CreateDayReportPage.howManyHours.setValue(hoursStudiedInputsInvalid[i]));
    expect(CreateDayReportPage.saveBtn.isEnabled()).be.not.true;
  }
});

it('should display MAX 10 HOURS WARNING', () => {
  CreateDayReportPage.maxTenWarning.isDisplayed();
});

  after('should LOGOUT', () => {
    LogoutPage.logout();
  });
});

describe('CREATE DAY REPORT -- INVALID INPUT IN HOW WAS YOUR DAY', () => {
  before('should login as STUDENT, navigate to Day Report page', () => {
    LoginPage.login(student);
    CreateDayReportPage.diaryLink.click();
    CreateDayReportPage.createDayReportBtn.click();
    CreateDayReportPage.beforeForHowWasYourDayNegativeScenarios();
  });

  it('should verify HOW WAS YOUR DAY input', () => {
    for(let i = 0; i < howWasYourDayInputsInvalid.length; i++) {
      expect(CreateDayReportPage.howWasYourDay.setValue(howWasYourDayInputsInvalid[i]));
      expect(CreateDayReportPage.saveBtn.isEnabled()).be.not.true;
    }
  });

  it('should display MUST BE 30 CHARACTERS OR MORE WARNING', () => {
    CreateDayReportPage.mustBeThirtyWarning.isDisplayed();
  });

  after('should LOGOUT', () => {
    LogoutPage.logout();
  });

});

