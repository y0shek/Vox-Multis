var browserWorking = true;

//get browser & version into String
navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\bOPR\/(\d+)/);
        if(tem!= null) return 'Opera '+tem[1];
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();

var bVer = navigator.sayswho;

//parse String into browser & version

var res = bVer.split(" ");
var ver = parseInt(res[1]);

//Check for minimum working version to mark browser outdated

if (res[0] == "Firefox") {
	if (ver<31){ browserWorking = false; }
} else if (res[0] == "Chrome") {
	if (ver<31){ browserWorking = false; }
} else if (res[0] == "Safari") {
	if (ver < 7){ browserWorking = false; }
}else if (res[0] == "Opera") {
	if (ver < 27){ browserWorking = false; }
} else if (res[0] == "IE") {
	if (ver < 10){ browserWorking = false; }
}

//Go to browser page if browser is outdated
if(!browserWorking){
    window.location="browsers.html";
}