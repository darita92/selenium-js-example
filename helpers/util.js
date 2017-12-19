var fs = require('fs');
var {By, until} = require('selenium-webdriver');

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

class DriverTasks {
    constructor(method){
        this.method = method ? method : 'css';
    }
    changeMethod(method){
        this.method = newMethod;
    }
    findElement(query, method){
        var methodToUse = method ? method : this.method;
        var element = driver.findElement(
            By[methodToUse](query)
        );
    
        return element;
    }
    findElements(query, method){
        var methodToUse = method ? method : this.method;
        return driver.findElements(
            By[methodToUse](query)
        );
    }
    clickElement(query, method){
        var methodToUse = method ? method : this.method;
        var element = this.findElement(query, methodToUse);

        element.click();
    }
    hoverElement(query, method){
        var methodToUse = method ? method : this.method;
        var element = this.findElement(query, methodToUse);
        driver.actions().mouseMove(element).perform();
    }
    /*
    Returns a promise
    */
    getAttribute(query, attribute, method){
        var methodToUse = method ? method : this.method;
        var element = this.findElement(query);

        return element.getAttribute(attribute);
    }
    scrollTo(query, method){
        var methodToUse = method ? method : this.method;
        var element = this.findElement(query, methodToUse);
        driver.executeScript("arguments[0].scrollIntoView(false)", element);
        driver.sleep(300);
    }
}

exports.DriverTasks = DriverTasks;