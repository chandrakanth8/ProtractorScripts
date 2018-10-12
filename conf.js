
exports.config = {

    plugins: [{
        package: 'protractor-console',
        logLevels: ['severe']}],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec1.js']

            
};