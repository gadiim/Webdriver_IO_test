////Lesson #23 Webdriver.io Page Object part 2 Homework
class JobsPage {
    get searchedButton () {
        return $('.btn-search')
    };

    get searchedJobsText () {
        return $('#container > div.header > div.b-sub-head-n > div.b-jobs-search > form > div')
    };

    async clickOnSearchedButton() {
        await this.searchedButton.click();
    };

    async isDisplayedSearchedButton() {
        await this.searchedButton.isDisplayed();
    };

    async getTexSearchedJobsText() {
        await this.searchedJobsText.getText();
    };

}
export default new JobsPage();