var home_page = function()
{
    this.clickCustomerLogin = function()

    {
        element(by.className('btn btn-primary btn-lg')).click();
    }

    this.selectName = function()

    {
        element(by.id('userSelect')).element(by.css("[value='2']")).click();


    }

};
module.exports = new home_page();