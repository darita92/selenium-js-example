var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var firefox = require('selenium-webdriver/firefox');
var phantomjs = require('selenium-webdriver/phantomjs');
var safari = require('selenium-webdriver/safari');
var opera = require('selenium-webdriver/opera');
var edge = require('selenium-webdriver/edge');
var ie = require('selenium-webdriver/ie');

exports.getDriverConfig = function(browser){
    return browsers[browser].driverConfig();
};

browsers = {
    chrome: {
        driverConfig: function(){
            var driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();

            return driver;
        }
    },
    phantomjs : {
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
        driverConfig: function(){
            var driver = new webdriver.Builder()
                .forBrowser('firefox')
                .build();

            return driver;
        }
    },
    opera: {
        driverConfig: function(){
            var driver = new webdriver.Builder()
                .forBrowser('opera')
                .build();

            return driver;
        }
    },
    ie: {
        driverConfig: function(){
            var driver = new webdriver.Builder()
                .forBrowser('ie')
                .build();

            return driver;
        }
    },
    edge: {
        driverConfig: function(){
            var service = new edge.ServiceBuilder()
                .setPort(55555)
                .build();
       
            var options = new edge.Options();
        
            var driver = edge.Driver.createSession(options, service);

            return driver;
        }
    }
};