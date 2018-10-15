

describe ('GlobalSQATesting', function()

{

beforeEach(function()

{   
    browser.get ('http://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
});


    xit ('should get title', function()

{
     
    expect(browser.getTitle()).toEqual('XYZ Bank');

});

xit('should show text XYZ Bank', function()

{

    var text = element(by.className('mainHeading'));
    expect(text.getText()).toEqual('XYZ Bank');
});

var home_page = require('../ProtractorScripts/homepage.js');



xit('should login as customer', function()

{
    
    home_page.clickCustomerLogin();
    home_page.selectName();
    element(by.className('btn btn-default')).click();
    var loggedInUser = element(by.xpath('/html/body/div/div/div[2]/div/div[1]/strong'));
    expect(loggedInUser.getText()).toEqual('Welcome Hermoine Granger !!');

});

xit('should print all options in dropdown', function()

{
    home_page.clickCustomerLogin();
    element.all(by.css('.form-control ng-pristine ng-valid ng-touched option')).each(function(element, index) 
    {
        
        element.getText().then(function (text)
        {
          console.log(index, text);
        });
      });

});

xit('should login as manager', function()
{
    home_page.bankLogin();
});

var add_Customer = require('../ProtractorScripts/addCustomer.js');

it('should add a customer', function()

{
    home_page.bankLogin();
    element(by.buttonText('Add Customer')).click();

    element(by.model('fName')).sendKeys('first');
        element(by.model('lName')).sendKeys('last');
        element(by.model('postCd')).sendKeys('784');
        element(by.css("button[type='submit']")).click();
    
    /*    add_Customer.newCustomer('c1','k1', '789');*/

});

});