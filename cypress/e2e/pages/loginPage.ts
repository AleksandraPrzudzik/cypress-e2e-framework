class LoginPage {
    get loginBtnContainer() { return cy.get('#login_button_container')}
    get loginLogo() { return cy.get('.login_logo')}
    get usernameInput() { return cy.get('#user-name')}
    get passwordInput() { return cy.get('#password')}
    get loginButton() { return cy.get('#login-button')}
    get errorMessage() { return cy.get('[data-test="error"]')}
    get errorCancelBtn() { return cy.get('[data-test="error-button"]')}

    public openApplication() {
        cy.visit('/')
        cy.log('App has been launched')
    }

    public checkAppBasicData() {
        cy.url().should('eq', 'https://www.saucedemo.com/')
        this.loginLogo.should('be.visible').should('have.text', 'Swag Labs')

    }

    public login(username: string, password: string) {
        this.loginBtnContainer.should('be.visible')
        this.usernameInput.click().type(username)
        this.passwordInput.click().type(password)
    }
    
    public loginWithUsernameOnly(username: string) {
        this.loginBtnContainer.should('be.visible')
        this.usernameInput.click().type(username)
    }
    public loginWithPasswordOnly(password: string) {
        this.loginBtnContainer.should('be.visible')
        this.passwordInput.click().type(password)
    }

    public clickLoginButton() {
        this.loginButton.should('be.visible').click()
    }

    public validateLoginError(errorMessage: string) {
        this.errorMessage.should('be.visible').should('have.text', errorMessage)
    }

    public cancelLoginErrorMessage() {
        this.errorCancelBtn.should('be.visible').click()
        this.errorMessage.should('not.exist')
    }
}
export const loginPage: LoginPage = new LoginPage()
