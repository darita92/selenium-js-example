var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var firefox = require('selenium-webdriver/firefox');
var phantomjs = require('selenium-webdriver/phantomjs');
var safari = require('selenium-webdriver/safari');
var opera = require('selenium-webdriver/opera');
var edge = require('selenium-webdriver/edge');
var ie = require('selenium-webdriver/ie');

exports.getDriverConfig = function(browser){
    if(browser in browsers){
        return browsers[browser].driverConfig();
    }
    else{
        throw new Error(`
            Browser not Supported.
            Make sure you wrote the name correctly.
        `);
    }
};

browsers = {
    headlessChrome: {
        driverConfig: function(){
            var options = new chrome.Options();
            options.addArguments("--headless");
            options.addArguments("--disable-gpu");
            options.addArguments("--incognito");
            options.addArguments("--start-maximized");
            options.setChromeBinaryPath(require("puppeteer").executablePath());
            var driver = new webdriver.Builder().            
            forBrowser("chrome").setChromeOptions(options).
            build();
            
            return driver;
        }
    },
    chrome: {
        driverConfig: function(){
            var options = new chrome.Options();
            options.addArguments("--incognito");
            options.addArguments("--start-maximized");
            var driver = new webdriver.Builder().            
            forBrowser("chrome").setChromeOptions(options).
            build();
            
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
            var service = new opera.ServiceBuilder()
                .loggingTo('/opera-logs.txt')
                .enableVerboseLogging()
                .build();
            
            var options = new opera.Options();
            options.setOperaBinaryPath = __dirname + '/drivers/operadriver.exe';

            var driver = opera.Driver.createSession(options, service);

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