/////////////////////////////////////////////////////////////////////////////
////Lesson #22 Webdriver.io Page Object part 1
// class LoginPage {
//     get username() {return $('#username')};
//     get password() {return $('#password')};
//     get loginButton() {return $('.radius')};

//     async setUserNameInput(val) {
//         await this.username.addValue(val);
//     };
//     async setPasswordInput(val) {
//         await this.password.addValue(val);
//     };
//     async clickOnLoginButton() {
//         await this.loginButton.click();
//     };

// }

// export default new LoginPage ();
/////////////////////////////////////////////////////////////////////////////
////Lesson #23 Webdriver.io Page Object part 2
// class MainPage {
//     get forumBtn() { return $('a[href="https://dou.ua/forums/"]') }
//     get bandBtn() { return $('a[href="https://dou.ua/lenta/"]') }
//     get salariesBtn() { return $('a[href="https://jobs.dou.ua/salaries/"]') }
//     get searchInput() { return $('#txtGlobalSearch') }
//     get gameDevBtn() { return $(' .menu-site__gamedev') }
//     get relocateBtn() { return $(' .menu-site__relocate') }

//     async clickOnForumBtn() {
//         await this.forumBtn.click();
//     };

//     async clickOnBandBtn() {
//         await this.bandBtn.click();
//     };

//     async clickOnGameDaveBtn() {
//         await this.gameDevBtn.click();
//     };

//     async setSearchInput(val) {
//         await this.searchInput.addValue(val);
//     };
// }

// export default new MainPage();

////Lesson #23 Webdriver.io Page Object part 2 Homework
class MainPage {
    get salariesBtn() { return $('a[href="https://jobs.dou.ua/salaries/"]') }
    
    get jobsBtn() { return $('a[href="https://jobs.dou.ua/"]') }

    get gameDevBtn() { return $('a[href="https://gamedev.dou.ua/?from=button"]') }

    
    async clickOnSalariesBtn() {
        await this.salariesBtn.click();
    };

    async clickOnJobsBtn() {
        await this.jobsBtn.click();
    };

    async clickOngameDevBtn() {
        await this.gameDevBtn.click();
    };
}
export default new MainPage();