const { I } = inject();

module.exports = {

  title: "page",
  popup: '.homepage-popup',

  fields: {
    
    searchTextBox: "#search_query_top",
  },

  buttons: {
    
    searchSubmit: "//button[@class='btn btn-default button-search']",
  },

  go() {
    I.amOnPage("/index.php");
    
    
  },
 

}
