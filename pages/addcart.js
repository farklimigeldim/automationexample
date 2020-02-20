const { I } = inject();

module.exports = {

  title: "page",
  popup: '.homepage-popup',

  

  buttons: {
   
    addDress:'//*[@id="center_column"]/ul/li[3]/div/div[2]/div[2]/a[1]',
    gocart: '//*[@id="header"]/div[3]/div/div/div[3]/div/a',
  },

  go() {
    
    I.amOnPage('/index.php?id_category=11&controller=category');
   
    
    
    
  },
  
 

}
