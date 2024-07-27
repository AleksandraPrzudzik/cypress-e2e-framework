import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { loginPage } from "../pages/loginPage";
import { homePage } from '../pages/homePage';
import { Errors } from '../../support/enums/error-messages';

beforeEach(function () {
    loginPage.openApplication()
    cy.fixture('users').then((users) => {
        this.users = users
    })
})

describe('Login functionality', () => {
    Given('I navigate to the login page', () => {
        loginPage.checkAppBasicData()
    })

    When('I enter a valid username and password', function () {
        loginPage.login(this.users.validUsers.standard_user, this.users.validUsers.password)
    })
    
    When('I enter invalid username and password', function () {
        loginPage.login(this.users.invalidUsers.error, this.users.invalidUsers.password)
    })
    
    When('I enter only username', function () {
        loginPage.loginWithUsernameOnly(this.users.invalidUsers.error)
    })
    
    When('I enter only password', function () {
        loginPage.loginWithPasswordOnly(this.users.invalidUsers.password)
    })

    Then('click the login button', () => {
        loginPage.clickLoginButton()
    })

    Then('I should be redirected to the dashboard', () => {
        homePage.checkHomePageBasicData()
    })
    
    Then('an error should be visible', () => {
        loginPage.validateLoginError(Errors.INVALID_LOGIN)
    })
    
    Then('required {string} error should be visible', (type: string) => {
        switch (type) {
            case 'username': {
                loginPage.validateLoginError(Errors.MISSING_USERNAME)
                break;
            }
            case 'password': {
                loginPage.validateLoginError(Errors.MISSING_PASSWORD)
                break;
            }
        }
    })
    
    Then('I should be able to close the error message', () => {
        loginPage.cancelLoginErrorMessage()
    })
})
