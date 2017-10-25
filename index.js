require('dotenv').config()
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var firefox = require('selenium-webdriver/firefox');
var phantomjs = require('selenium-webdriver/phantomjs');
var safari = require('selenium-webdriver/safari');
var opera = require('selenium-webdriver/opera');
var edge = require('selenium-webdriver/edge');
var ie = require('selenium-webdriver/ie');
var {setBrowserService, getDriverConfig} = require('./helpers/driversServices.js');
var path = require('path');
var addToPath = require('add-to-path');

addToPath([__dirname + '\\drivers']);

var browser = process.env.MOCHA_BROWSER || 'chrome';

driver = getDriverConfig(browser);

exports.driver = driver;

exports.base_url = process.env.TEST_BASE_URL || 'https://google.com';