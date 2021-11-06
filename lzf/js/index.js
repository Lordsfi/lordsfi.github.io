function getCookie(cname) {
    var name = cname + "=";
    var ck = document.cookie;
    var ca = ck.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
         }
         if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
         }
     }
    return "";
}
var sname=decodeURIComponent(getCookie("name"));
var num=getCookie("num");
var smon=getCookie("smon");
var sd=getCookie("sd");
var sh=getCookie("sh");
var smin=getCookie("smin");
var emon=getCookie("emon");
var ed=getCookie("ed");
var eh=getCookie("eh");
var emin=getCookie("emin");
var photo=getCookie("photo");
document.getElementById("name").innerHTML=sname;
document.getElementById("department").innerHTML="信息工程学院（研）";
document.getElementById("class").innerHTML="信研19";
document.getElementById("number").innerHTML=num;
document.getElementById("year0").innerHTML="2021";
document.getElementById("month0").innerHTML=smon;
document.getElementById("day0").innerHTML=sd;
document.getElementById("hour0").innerHTML=sh;
document.getElementById("minute0").innerHTML=smin;
document.getElementById("year1").innerHTML="2021";
document.getElementById("month1").innerHTML=emon;
document.getElementById("day1").innerHTML=ed;
document.getElementById("hour1").innerHTML=eh;
document.getElementById("minute1").innerHTML=emin;
