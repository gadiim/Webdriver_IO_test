////Lesson #23 Webdriver.io Page Object part 2 Homework
class SalariesPage {
    get searchedSalariesText () {
        return $('//*[text()="I Квартиль"]')
    };
}
export default new SalariesPage();