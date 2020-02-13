'use strict';

describe('Verify functionality of Homepage', () => {
    it('Should be able to navigate the page', () => {
        browser.get('http://amazon.com');
        browser.sleep(2000);
    });

    it('Should be able to access the login page', () => {
        const btnSignIn = element(by.id('nav-link-accountList'));
        const emailAdd = element(by.css("input[type ='email']"));
        const btnContinue = element(by.id('continue'));
        const btnSubmit = element(by.id('signInSubmit'));
        const password = element(by.css("input[type ='password']"));
        
        btnSignIn.click();
        emailAdd.sendKeys('jabalina.test@gmail.com');
        btnContinue.click();
        browser.sleep(2000);
        password.sendKeys('JB@lina06')
        btnSubmit.click();
        browser.sleep(2000);
    });

    it('Should be able to proceed to Homepage', () => {
        const btnAuthenticate = element(by.id('continue'));

        btnAuthenticate.click();
        browser.sleep(20000);
        /*Since it requires OTP, this will be done manually*/
    });

    it('Should be able to select cart', () => {
        const btnCart = element(by.id('nav-cart-count'));

        btnCart.click();
        browser.sleep(2000);
    });

    it('Should be able to select cart', () => {
        const btnAddToCart = element(by.css("input[name ='submit.addToCart']"));

        btnAddToCart.click();
        browser.sleep(2000);
    });

    it('Should be able to proceed to checkout form', () => {
        const btnProceedToCheckout = element(by.id('hlb-ptc-btn-native'));

        btnProceedToCheckout.click();
        browser.sleep(2000);
    });
})