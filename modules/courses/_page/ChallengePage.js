import AppPage from '../../_page/AppPage';
import Menu from "../../_page/Menu";
import { courseData } from '../_data/courseCreateData';
import {challengeData} from "../_data/challengeCreateData";

class ChallengePage extends AppPage {

  get createNewChallengeGlobal() {
    Menu.challengeLink.click();
    this.createNewChallengeBtn.click();
  //  browser.waitUntil(() => Menu.h1.isDisplayed());
    this.challengeNameInput.setValue(challengeData.name);
    this.challengeDescriptionTextarea.setValue(challengeData.description);
    this.challengeInstructionTextarea.setValue(challengeData.instruction);
    this.challengeCompletedSolutionTextarea.setValue(challengeData.solution);
    this.challengeOpenTestTextarea.setValue(challengeData.openTest);
    this.challengeHiddenTestTextarea.setValue(challengeData.hiddenTest);
    this.challengeProgramingLanguageSelect.selectByVisibleText( challengeData.language);
    this.challengeLevelSelect.selectByVisibleText(challengeData.level);
    this.chalelngeCheckerSelect.selectByVisibleText( challengeData.checker);
    this.challengeShowOpenTests.click();
    this.challengeCoursePurpose.click();
    this.challengeSaveBtn.click();
  }

  get createNewChallengeBtn() {
    return $('//button[@qa="create-challenge-button"]');
  }

  get challengeNameInput() {
    return $('//input[@name="name"]');
  }

  get challengeDescriptionTextarea() {
    return $('//textarea[@name="description"]');
  }

  get challengeInstructionTextarea() {
    return $('//textarea[@name="instruction"]');
  }

  get challengeCompletedSolutionTextarea() {
    return $('//div[@qa="completedSolution"]//textarea');
  }

  get challengeOpenTestTextarea() {
    return $('//div[@qa="openTest"]//textarea');
  }

  get challengeHiddenTestTextarea() {
    return $('//div[@qa="hiddenTest"]//textarea');
  }

  get challengeProgramingLanguageSelect() {
    return $('//select[@name="programmingLang"]');
  }

  get challengeLevelSelect() {
    return $('//select[@name="level"]');
  }

  get chalelngeCheckerSelect() {
    return $('//select[@name="checker"]');
  }

  get challengeShowOpenTests() {
    return $('//label[text()="Show open tests"]');
  }

  get challengeCoursePurpose() {
    return $('//label[text()="Course Purpose"]');
  }

  get challengeSaveBtn() {
    return $('//button[@type="submit"]');
  }

  //  created challenge Inside Courses
  get challengeInsideCourseName() {
    return $(`//strong[text() ="${courseData.name}"]`);
  }

  get challengeInsideCourseTextarea() {
    return $('//div[@qa="initialSolution"]//textarea');
  }

  get challengeInsideCourseValidateBtn() {
    return $('//button[text() ="Validate solution")]');
  }

  get challengePassArray() {
    // check if all tests passed
    return $('//div[@class="col-md-6"]//span[text() ="Pass")]'); // return array
  } // selector "class="col-md-6" -- needs change

  get challengeSubmitSolutionBtn() {
    return $('//button[text() = "Submit solution")]');
  }

  get challengeCompleteMark() {
    return $('//div[@class="mb-4 h5-"]//span[text() ="Completed")]');
  } // @class="mb-4 h5-" -- not strong selector
}

export default new ChallengePage();
