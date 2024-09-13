/////////////////////////////////////////////////////////////////////////////
////Lesson #23 Webdriver.io Page Object part 2
// class GameDevPage {
//     get companyGameDevsRankLink() { return $('//"[text()="Рейтинг найбільших геймдев-компаній"]') };
//     get topGamesRateLink() { return $('//*[text()="Топ ігор місяця"]') };

//     async clickOnTopGamesRateLink() {
//         await this.topGamesRateLink.click();
//     };
// };
// export default new GameDevPage();
////Lesson #23 Webdriver.io Page Object part 2 Homework
class GameDevPage {
    get searchedGameDevText () {
        return $('body > div > div.posts_footer')
    };

    async getTexSearchedGameDevText() {
        await this.searchedGameDevText.getText();
    };

};
export default new GameDevPage();