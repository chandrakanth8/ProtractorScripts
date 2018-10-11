var home_page = function()
{
    this.clickCustomerLogin = function()

    {
        element(by.className('btn btn-primary btn-lg')).click();

    }


};
module.exports = new home_page();