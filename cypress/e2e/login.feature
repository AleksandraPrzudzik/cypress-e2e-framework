Feature: Login into the Swag Labs

    Background:
        Given I navigate to the login page
        
    Scenario: Login with valid credentials
        When I enter a valid username and password
        And click the login button
        Then I should be redirected to the dashboard
    
    Scenario: Login with invalid credentials
        When I enter invalid username and password
        And click the login button
        Then an error should be visible
        And I should be able to close the error message

    Scenario: Login with the username only
        When I enter only username
        And click the login button
        Then required "password" error should be visible
        And I should be able to close the error message

    Scenario: Login with the password only
        When I enter only password
        And click the login button
        Then required "username" error should be visible
        And I should be able to close the error message
    