class LogoutPage {

  get logoutDropdown() {
    return $('//a[@class="dropdown-toggle nav-link"]');
  }

  get logoutBtn() {
    return $('//button[contains(text(),"Logout")]');
  }

  logout() {
    this.logoutDropdown.click();
    this.logoutBtn.click();
  }
}

export default new LogoutPage();

