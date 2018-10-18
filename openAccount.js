var openAccount = function ()

{
 
    this.accountopen = function () 
    {
        element(by.css("option[value='1']")).click();
        element(by.css("option[value='Dollar']")).click();
        element(by.buttonText('Process')).click();


    }


};
module.exports = new openAccount();