import LoginPage from '../_page/LoginPage';
import { student } from '../_data/user.data';
import Logout from '../_page/LogoutPage';

describe('LOGOUT', () => {
  before(() => {
    LoginPage.login(student);
  });

  it('should logout', () => {
    Logout.logout();
  });
});
