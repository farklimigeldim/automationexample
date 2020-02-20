
Feature('register');


Scenario('login', async (I, homePage) => {

    homePage.go();
    I.fillField(homePage.fields.user, "b@bb.com");
    I.fillField(homePage.fields.paswrd, "pasword");
    I.click(homePage.buttons.login);
   
    I.saveScreenshot('register.jpg');
    
});

