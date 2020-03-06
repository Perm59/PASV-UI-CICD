const testEmails = {
  incorrectFormat: 'amcamc@@',
  notRegistered: 'asdadfdfs@mail.com',
  correctFormat: 'studentofpasv@gmail.com',
};

const pagePswRecovery = {
  forgotLinkTxt: 'Forgot password?',
  h1: 'Reset your password',
  urlResetPsw: 'https://stage.pasv.us/user/password/reset/request',
  urlRedirect: 'https://stage.pasv.us/user/password/reset/mailed',
  h1Redirect: 'Check your email for a link to reset your password',
  failedMsgTxt: 'User not found',
};

export { testEmails, pagePswRecovery };
