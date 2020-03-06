const email = Math.random() + 'test1@gmail.com';
const password = 'password';

const newUserData = {
  firstName: 'John',
  lastName: 'Morgan',
  password: password,
  phone: '14158706170',
  email: email,
  about: 'I am a student',
  goals: 'eat sleep code repeat',
  englishLevel: 'Upper intermediate',
};

const userRegisteredData = {
  firstName: 'John',
  lastName: 'Morgan',
  password: 'qwqwqw',
  phone: '14158706170',
  email: 'irina_ger@yahoo.com',
  about: 'I am a student',
  goals: 'eat sleep code repeat',
  englishLevel: 'Upper intermediate',
};

const pageRegisterData = {
  h1: 'User Register',
  warningText: 'Profiles with fictitious or dummy data will be deleted.',
  buttonText: 'Submit',
};

const successfulNotificationData = {
  successfulNotification: 'User created successfully. Please check your email and verify it'
};

const errorNotificationData = 'User with this e-mail exists';

export { newUserData, userRegisteredData, pageRegisterData, successfulNotificationData, errorNotificationData };
