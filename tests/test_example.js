var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var {driver, base_url} = require('../index.js');
var expect = require('chai').expect;

test.describe( 'Test Suite' , function(){
    this.timeout('10000');
    test.before(function(){
        console.log(driver);
        return driver.get( base_url );
    });

    test.after(function(){
        return driver.quit();
    });

    test.it( 'Test Case', function(){
        driver.getTitle().then(function(title){
            expect(title).equals('Google');
        });
        driver.sleep();
    });
});