var home_page = function()
{
    this.clickCustomerLogin = function()

    {
        element(by.className('btn btn-primary btn-lg')).click();
    }

    this.selectName = function()

    {
        element(by.id('userSelect')).element(by.css("[value='1']")).click(); 
        
    }

    this.nameSelected = function()

    {
    var n = element(by.id('userSelect')).element(by.css("[value='1']"));
    console.log(n);
    }

    this.bankLogin = function()

    {
        element(by.buttonText('Bank Manager Login')).click();
    }
    
};
module.exports = new home_page();