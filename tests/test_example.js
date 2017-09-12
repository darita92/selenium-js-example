var {By, until} = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var {driver, base_url} = require('../index.js');
var expect = require('chai').expect;

test.describe( 'Test Suite' , function(){
    this.timeout('60000');
    test.before(function(){
        console.log(driver);
        return driver.get( base_url );
    });

    test.after(function(){
        return driver.close();
    });

    test.it( 'Test Case', function(){
        driver.wait(function(){
            return until.elementIsVisible(By.name('q'));
        }, 20000);
        search_input = driver.findElement(By.name('q'));
        search_input.sendKeys('selenium');
    });
});