describe ('Enter feature name', function() 
{

    it ('should enter name as Tom', function()
    {

        browser.get('https://angularjs.org/');
        element(by.model('yourName')).sendKeys('Tom');
        var t = element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
        expect(t.getText()).toEqual('Hello Tom!');
        
    });


});


describe ('add numbers', function()

{
    it ('add 2 numbers', function()

{
    browser.get('https://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);
    element(by.id('gobutton')).click();
    var result = element(by.xpath('/html/body/div/div/form/h2'));
    expect(result.getText()).toEqual('3');


});

});





describe( 'Enter to do', function()
{
    it('should enter to do', function()

    {
        browser.get('https://angularjs.org/');
        element(by.model('todoList.todoText')).sendKeys('ToDo1');
        element(by.xpath('/html/body/div[2]/div[3]/div[2]/div[2]/div/form/input[2]')).click();
        var T1 = element(by.xpath('/html/body/div[2]/div[3]/div[2]/div[2]/div/ul/li[3]/label/span'));
        expect(T1.getText()).toEqual('ToDo1');
        
    });
});



describe('AngularJS site Title', function()

{
    it('Verify the Title', function()

    {
        browser.get('https://angularjs.org');
        expect(browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework')
        
    });

});




describe('Super Calculator Test', function()


{
    it('should add numbers', function()

{
    browser.get('https://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys('2');
    element(by.model('second')).sendKeys('3');
    element(by.xpath('//*[@id="gobutton"]')).click();
    var R = element(by.xpath('/html/body/div/div/form/h2'));
    expect(R.getText()).toEqual('5');

});

});




describe('Super Calculator subtract', function()
{
    it('should subtract numbers', function()

    {
        browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('6');
        element(by.model('operator')).click();
        element(by.xpath('/html/body/div/div/form/select/option[5]')).click();
        element(by.model('second')).sendKeys('3');
        browser.driver.sleep(3000);
        element(by.xpath('//*[@id="gobutton"]')).click();
        var SR = element(by.xpath('/html/body/div/div/form/h2'));
        expect(SR.getText()).toEqual('3');


    });
});




describe ('multiple test cases', function()
{
    var firstno = element(by.model('first'))
    var secondno = element(by.model('second'));
    var button = element(by.id('gobutton'))
    var result = element(by.xpath('/html/body/div/div/form/h2'));

    beforeEach(function()
{
    browser.get('https://juliemr.github.io/protractor-demo/');
});
        
    //Get the Title of web page
    it ('should get title', function()

{
    
    expect(browser.getTitle()).toEqual('Super Calculator');

});

//Add numbers
it('should add 2 and 3', function()
{
    firstno.sendKeys(2);
    secondno.sendKeys(3);
    button.click();
    expect(result.getText()).toEqual('5');

});

});

/*


describe('count the number of rows in history', function()

{
    var firstno = element(by.model('first'));
    var secondno = element(by.model('second'));
    var button = element(by.id('gobutton'));
    var history = element.all(by.repeater('result in memory'));
    
    beforeEach(function()
{
    browser.get('https://juliemr.github.io/protractor-demo/');

});

    function add(a,b) 

        {
            firstno.sendKeys(a);
            secondno.sendKeys(b);
            button.click();
        
        }
    

    it ('count history', function()

    {
        add(1,2);
        add(2,3);
        expect(history.count()).toEqual(2);

        add(3,5);
        add(5,10);
        expect(history.count()).toEqual(4);

    });

});

*/

