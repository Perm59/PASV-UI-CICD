import AppPage from '../../_page/AppPage';

class GroupDescriptionPage extends AppPage {
  get recentlyCreatedGroup() {
    return $('//a[contains(text(),"GROUP FOR TEST")]');
  }

  get descriptionTabBtn() {
    return $('//a[contains(text(),"Description")]');
  }

  get navigationBar() {
    return $('//ul[@class="mb-4 tabs nav"]');
  }
}

export default new GroupDescriptionPage();
