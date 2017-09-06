var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var firefox = require('selenium-webdriver/firefox');
var phantomjs = require('selenium-webdriver/phantomjs');
var safari = require('selenium-webdriver/safari');
var opera = require('selenium-webdriver/opera');
var edge = require('selenium-webdriver/edge');
var ie = require('selenium-webdriver/ie');

exports.setBrowserService = function (browser){
    browsers[browser].setService();
};

exports.getDriverConfig = function(browser){
    return browsers[browser].driverConfig();
};

browsers = {
    chrome: {
        setService: function(){
            var service = new chrome.ServiceBuilder('drivers/chromedriver.exe').build();
            
            chrome.setDefaultService(service);
        },
        driverConfig: function(){
            var driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();

            return driver;
        }
    },
    phantomjs : {
        setService: function(){
            return null;
        },
        driverConfig: function(){
            var phantomjs_exe = 'drivers/phantomjs.exe';
            var customPhantom = webdriver.Capabilities.phantomjs();
            customPhantom.set("phantomjs.binary.path", phantomjs_exe);
            //build custom phantomJS driver
            var driver = new webdriver.Builder().
                   withCapabilities(customPhantom).
                   build();

            return driver;
        }
    },
    firefox: {
        setService: function(){
            var service = new firefox.ServiceBuilder('drivers/geckodriver.exe').build();
        },
        driverConfig: function(){
            var options = new firefox.Options()
                .setBinary('drivers/geckodriver.exe');
            var driver = new webdriver.Builder()
                .forBrowser('firefox')
                .setFirefoxOptions(options)
                .build();

            return driver;
        }
    }
};