var {By, until} = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var {driver, base_url} = require('../index.js');
var expect = require('chai').expect;
var utils = require("../helpers/util.js");

var tasks = new utils.DriverTasks(); 

test.describe( 'Test Suite' , function(){
    this.timeout('60000');
    test.before(function(){
        return driver.get( base_url );
    });

    test.after(function(){
        driver.takeScreenshot().then(function(data) {
            utils.writeScreenshot(data, 'screenshot');
            driver.close();
        });
    });

    test.afterEach(function(){
        var title = this.currentTest.title.replace(new RegExp(' |/', 'g'), '-');
        var screenshotName = 'screenshot-' + title;
        if (this.currentTest.state === 'failed') {
            driver.takeScreenshot().then(function(data) {
                writeScreenshot(data, screenshotName);
            });
        };
    });

    test.it( 'Search Selenium', function(){
        driver.wait(function(){
            return until.elementIsVisible(By.name('q'));
        }, 20000);
        search_input = tasks.findElement('q', 'name');
        search_input.sendKeys('selenium');
        tasks.clickElement('btnK', 'name');
        driver.getTitle().then(function(title){
            expect(title).contains('selenium');
        });
    });

    test.it( 'Change Page', function(){
        tasks.scrollTo('navcnt', 'id');
        tasks.clickElement('a[aria-label="Page 2"]', 'css');
        var results = tasks.findElement('resultStats', 'id');
        results.getText().then(function(text){
            expect(text).contains('2');
        });
    });

    test.it( 'Check Google Logo URL', function(){
        tasks.getAttribute('img[alt="Google"]', 'src','css')
        .then(function(attribute){
            expect(attribute).contains('/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png');
        });
    });
});