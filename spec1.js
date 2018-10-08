describe ('multiple test cases', function()
{
    it ('should get title', function()

{
    browser.get('https://juliemr.github.io/protractor-demo/');
    var title = browser.getTitle();
    expect(title.getText()).toEqual('Super Calculator');

});

});