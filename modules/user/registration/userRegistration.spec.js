import RegistrationPage from '../_page/RegistrationPage';
import request from 'supertest';
import HomePage from '../../_page/HomePage';
import Notification from '../../_page/Notification';
import Menu from '../../_page/Menu';
import { urlData } from '../../_data/url.data';
import {
  newUserData,
  pageRegisterData,
  successfulNotificationData,
} from '../_data/userRegistration.data';
import axios from 'axios';
import { expect } from 'chai';

describe('USER REGISTRATION', () => {
  it('should 123 ', async () => {

    const response = await axios
      .get('https://server-stage.pasv.us/user/login',{
        'email':'admin@pasv.com',
        'password': 'admin',
      })
      .then(res => res)
      .catch(err => {
        console.log('ERROR', err)
      });
    console.log(response.data.token).not.empty;
    expect(response.data.token).eq(200);
    console.log('DATA '+ response);
    console.log('END')
  });


    it('should token is not empty ', () => {
      console.log(process.env.ADMIN_TOKEN)
      expect(process.env.ADMIN_TOKEN).is.not.empty;
    });

  it('should verify from DB user by email ', async() => {
    const email = 'admin@pasv.com';
    const response = await axios({
      method: 'get',
      url: `https://server-stage.pasv.us/email/${email}`,
      headers: {
        Authorization: process.env.ADMIN_TOKEN,
      },
    })
      .then(r => r)
      .catch(e => e);

    expect (response.status).eq(200);
    expect(response.data.payload.name).eq('John Smith')

  });

  });


// describe('USER REGISTRATION', () => {
//   before(
//     'should open Home Page, click button `Registration` and redirect to Registration Page',
//     () => {
//       HomePage.open();
//       HomePage.registrationLink.click();
//       browser.pause(1000);
//     },
//   );
//
//   it('should registration page has correct header', () => {
//     const actual = Menu.h1.getText();
//     const expected = pageRegisterData.h1;
//     expect(actual).eq(expected);
//   });
//
//   it('should have correct warning text', () => {
//     const actual = RegistrationPage.p.getText();
//     const expected = pageRegisterData.warningText;
//     expect(actual).eq(expected);
//   });
//
//   it('should button `Submit` will be disabled by default', () => {
//     const element = RegistrationPage.submitBtn;
//     expect(element.isEnabled()).to.be.false;
//   });
//
//   it('should fill out `First Name` Field', () => {
//     RegistrationPage.firstNameInput.setValue(newUserData.firstName);
//   });
//
//   it('should fill out `Last Name` Field', () => {
//     RegistrationPage.lastNameInput.setValue(newUserData.lastName);
//   });
//
//   it('should fill out `Cell Phone Number` Field', () => {
//     RegistrationPage.cellPhoneNumberInput.setValue(newUserData.phone);
//   });
//
//   it('should fill out `Email` field', () => {
//     RegistrationPage.emailInput.setValue(newUserData.email);
//   });
//
//   it('should button `Submit` will be disabled without filling out all required fields', () => {
//     const element = RegistrationPage.submitBtn;
//     expect(element.isEnabled()).to.be.false;
//   });
//
//   it('should fill out Password field', () => {
//     RegistrationPage.passwordInput.setValue(newUserData.password);
//   });
//
//   it('should fill out About field', () => {
//     RegistrationPage.aboutInput.setValue(newUserData.about);
//   });
//
//   it('should fill out My goals field', () => {
//     RegistrationPage.myGoalsInput.setValue(newUserData.goals);
//   });
//
//   it('should button `Submit` will be disabled without filling out last required field', () => {
//     const element = RegistrationPage.submitBtn;
//     expect(element.isEnabled()).to.be.false;
//   });
//
//   it('should choose English level from dropdown menu', () => {
//     RegistrationPage.englishLevelOption.selectByVisibleText(newUserData.englishLevel);
//   });
//
//   it('should button `Submit` will be enabled when filling out all required fields', () => {
//     const element = RegistrationPage.submitBtn;
//     expect(element.isEnabled()).to.be.true;
//   });
//
//   it('should click button Submit after filling all fields', () => {
//     RegistrationPage.submitBtn.click();
//   });
//
//   it('should wait until redirect to login page after submitting form', () => {
//     browser.waitUntil(() => browser.getUrl() === urlData.loginUrl, 3000);
//   });
//
//   it('should get successful notification about user registration in the system', () => {
//     const actual = Notification.title.getText();
//     const expected = successfulNotificationData.successfulNotification;
//     expect(actual).eq(expected);
//   });

  // var agent = request.agent();
  // var request = require('superagent');

  // it('should verify from database', () => {
  //   agent('https://server-stage.pasv.us/info')
  //     .get('')
  //     .expect('Content-Type', /json/)
  //     .expect('Content-Length', '15')
  //     .expect(200)
  //     .end(function(err, res) {
  //       if (err) throw err;
  //       done();
  //     });
  // });
