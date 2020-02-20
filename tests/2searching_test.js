
Feature('Searching');


Scenario('search for an item', async (I, searchPage) => {

    searchPage.go();
    I.fillField(searchPage.fields.searchTextBox, "Blouse");
    
    I.click(searchPage.buttons.searchSubmit);
 
    I.saveScreenshot('search.jpg');
    
  
});

