var add_Customer = function()

{
    this.newCustomer = function(first,last,pin)

    {
        element(by.model('fName')).sendKeys(first);
        element(by.model('lName')).sendKeys(last);
        element(by.model('postCd')).sendKeys(pin);
        element(by.buttonText('Add Customer')).click();

    }

};
module.exports = new add_Customer();