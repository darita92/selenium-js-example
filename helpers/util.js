var fs = require('fs');

exports.writeScreenshot = function(data, name) {
    name = name || 'ss.png';
    var screenshotPath = __dirname.replace("helpers","");
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
    var dateTime = date+' '+time;
    var screenshotRoute = screenshotPath + name + "-" + dateTime + ".png";
    fs.writeFileSync(screenshotRoute, data, 'base64');
};

function findElementByCss(cssSelector) {
    var element = driver.findElement(
        By.css(
            ".nav-dropdown--language ul li:nth-of-type(2)"
        )
    );

    return element;
};
exports.findElementByCss = findElementByCss;

exports.clickElementByCss = function(cssSelector) {
    var element = findElementByCss(cssSelector);

    element.click();
};

exports.hoverElementByCss = function(cssSelector) {
    var element = findElementByCss(cssSelector);

    driver.actions().mouseMove(element).perform();
};

exports.getAttributeByCss = function(cssSelector, attribute){
    var element = findElementByCss(cssSelector);

    return element.getAttribute(attribute);
};