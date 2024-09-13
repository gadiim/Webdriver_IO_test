class LoginPage {
    get username() {return $('#username')};
    get password() {return $('#password')};
    get loginButton() {return $('.radius')};

    async setUserNameInput(val) {
        await this.username.addValue(val);
    };
    async setPasswordInput(val) {
        await this.password.addValue(val);
    };
    async clickOnLoginButton() {
        await this.loginButton.click();
    };

}

export default new LoginPage ();