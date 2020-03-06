import LoginPage from '../../user/_page/LoginPage';
import GroupsPage from '../_page/GroupsPage';
import LecturePage from '../_page/LecturePage';
import { admin, student } from '../../user/_data/user.data';
import { groupsLectures } from '../_data/groupsLectures.data.js';
import CreateLecturePage from '../_page/CreateLecturePage';
import { lectureName } from '../_page/CreateLecturePage';
import { lectures } from "../_data/groupsLectures.data";

describe('GROUPS LECTURES', () => {
  before('Create new Group and Lecture as an Admin, login as a Student', () => {
    GroupsPage.createNewGroup(admin);
    CreateLecturePage.createNewLecture();
    LoginPage.login(student);
  });

  it('should click top menu Groups', () => {
    GroupsPage.groupsLink.click();
  });

  it('should verify the header on Groups Page is correct', () => {
    const actual = GroupsPage.h1.getText();
    const expected = groupsLectures.groupsHeader;
    expect(actual).eq(expected);
  });

  it('should click group name in the list', () => {
    GroupsPage.groupNameLink.scrollIntoView();
    GroupsPage.groupNameLink.click();
  });

  it('should verify the header on Group Name Page is correct', () => {
    const actual = LecturePage.h1.getText();
    const expected = lectures.groupNameHeader;
    expect(actual).eq(expected);
  });

  it('should choose lecture in the list', () => {
    LecturePage.lectureLink(lectureName).scrollIntoView();
    LecturePage.lectureLink(lectureName).click();
  });

  it('should verify video is displaying', () => {
    LecturePage.video.isDisplayed();
  });

  it('should click Dislike button', () => {
    LecturePage.dislikeBtn.click();
  });

  it('should click Like button', () => {
    LecturePage.likeBtn.click();
  });

  it('should click Mark as understood button', () => {
    LecturePage.markAsUnderstoodBtn.click();
  });

  it('should check Homework header', () => {
    const actual = LecturePage.homeworkHeader.getText();
    const expected = lectures.homeworkHeader;
    expect(actual).eq(expected);
  });

  it('should check Homework description is existing', () => {
    LecturePage.homeworkDescription.isExisting();
  });

  it('should fill out Send your Homework to review field', () => {
    LecturePage.sendYourHomeworkToReviewField.setValue(lectures.homeworkInput);
  });

  it('should click Send homework to review', () => {
    LecturePage.sendHomeworkToReviewBtn.click();
  });

  it('should fill out Comment field', () => {
    LecturePage.commentField.setValue(lectures.commentField);
  });

  it('should click Add comment button', () => {
    LecturePage.addCommentBtn.click();
  });
});
