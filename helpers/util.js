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