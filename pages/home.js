const { I } = inject();

module.exports = {

  title: "page",
  popup: '.homepage-popup',

  fields: {
    user: '#email',
    paswrd: '#passwd',
   
  },

  buttons: {
    Giris: "//a[contains(.,'Sign in')]",
    login: "#SubmitLogin",
    
  },

  go() {
    I.amOnPage("/index.php");
    I.click(this.buttons.Giris);
    I.saveScreenshot('giriş.jpg')
    
  },
  
  

}
