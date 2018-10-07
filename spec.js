
describe('Get Title & Add numbers', function()
{
    beforeEach(function()
    {
        browser.get('https://juliemr.github.io/protractor-demo/');

    });

    it('capture Title of Super Calculator', function()
    
    {
        browser.get('https://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');

    });

    it('should add 2 numbers', function()
    
    {
        
        element(by.model('first')).sendKeys(2);
        element(by.model('second')).sendKeys(3);
        element(by.id('gobutton')).click();

        var result= element(by.xpath('/html/body/div/div/form/h2'));
        expect(result.getText()).toEqual('5');
        

    });

});


