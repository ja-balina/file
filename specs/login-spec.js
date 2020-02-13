'use strict';

describe('Verify functionality of Login Page', () => {
    it('Should be able to access the page', () => {
        browser.get('http://amazon.com');
        browser.sleep(2000);
    });

    it('Should be able to display the login page', () => {
        const btnSignIn = element(by.id('nav-link-accountList'));

        btnSignIn.click();
        browser.sleep(2000);
    });

    it('Should be able to display error message when entering empty value', () => {
        const emailAdd = element(by.css("input[type ='email']"));
        const btnContinue = element(by.id('continue'));
        const errorMessage = element(by.id('auth-email-missing-alert'));

        emailAdd.sendKeys('');
        btnContinue.click();
        expect((errorMessage).getText()).
            toContain('Enter your email or mobile phone number');
        browser.sleep(2000);
    });  

    it('Should be able to display error message when using invalid email address', () => {
        const emailAdd = element(by.css("input[type ='email']"));
        const btnContinue = element(by.id('continue'));
        const errorMessage = element(by.id('auth-error-message-box'));

        emailAdd.sendKeys('gajdgajgda@gmail.com');
        btnContinue.click();
        expect((errorMessage).getText())
            .toContain('There was a problem');
        browser.sleep(2000);
    });

    it('Should be able to login using email address', () => {
        const emailAdd = element(by.css("input[type ='email']"));
        const btnContinue = element(by.id('continue'));

        emailAdd.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        emailAdd.sendKeys(protractor.Key.BACK_SPACE);
        emailAdd.sendKeys('jabalina.test@gmail.com');
        btnContinue.click();
        browser.sleep(2000);
    });

    it('Should be able to login using mobile number', () => {
        const btnChange = element(by.id('ap_change_login_claim'));
        const phoneNumber = element(by.css("input[type ='email']"));
        const btnContinue = element(by.id('continue'));

        btnChange.click();
        phoneNumber.sendKeys('+639171470206');
        btnContinue.click();
    });

    it('Should be able to display error message when entering empty password', () => {
        const password = element(by.css("input[type ='password']"));
        const btnSignInPassword = element(by.id('signInSubmit'));
        const errorMessage = element(by.id('auth-password-missing-alert'));

        password.sendKeys('');
        btnSignInPassword.click();
        expect((errorMessage).getText())
            .toContain('Enter your password');
        btnSignInPassword.click();
        browser.sleep(2000);
    });

    it('Should be able to display error message when entering incorrect password', () => {
        const password = element(by.css("input[type ='password']"));
        const btnSignInPassword = element(by.id('signInSubmit'));
        const errorMessage = element(by.id('auth-error-message-box'));

        password.sendKeys('agdjagjdga');
        btnSignInPassword.click();
        expect((errorMessage).getText())
            .toContain('There was a problem');
        browser.sleep(2000);
    });

    it('Should be able to proceed in Homepage when entering correct password', () => {
        const btnSubmit = element(by.id('signInSubmit'));
        const password = element(by.css("input[type ='password']"));

        password.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        password.sendKeys(protractor.Key.BACK_SPACE);
        password.sendKeys('JB@lina06')
        btnSubmit.click();
        browser.sleep(2000);
    });
});