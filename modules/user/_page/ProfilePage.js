import AppPage from '../../_page/AppPage';

class ProfilePage extends AppPage {
  get createDayReportBtn() {
    return $("//a[@class='btn btn-secondary']");
  }

  get likeBtn() {
    return $("//button[@class='btn btn-outline-primary btn-sm']");
  }

  get updateListBtn() {
    return $("//button[@class='btn btn-secondary']");
  }

  get updateListNotification() {
    return $("//h4[@class='notification-title']");
  }

  get codeWarsIcon() {
    return $('//a[@qa="codewars"]');
  }

  get facebookIcon() {
    return $('//a[@qa="facebook"]');
  }

  get linkedInIcon() {
    return $('//a[@qa="linkedIn"]');
  }

  get coinTotal() {
    return $('//div[@qa="user-achievement"]//span');
  }

  get coinTotalTopRight() {
    return $('//div[@class="justify-content-end collapse navbar-collapse"]//span');
  }

  goToProfilePage() {
    $('//a[@class="dropdown-toggle nav-link"]').click();
    $('//button[contains(text(), "Profile")]').click();
  }
}

export default new ProfilePage();
