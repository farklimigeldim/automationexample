
Feature('addcart');


Scenario('add to cart', async (I, addPage) => {

    addPage.go();
    
    I.click(addPage.buttons.addDress);
    I.saveScreenshot('addDress.jpg');
    I.click(addPage.buttons.gocart);
    I.saveScreenshot('addcart.jpg');
});

