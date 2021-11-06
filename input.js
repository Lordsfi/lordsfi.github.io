document.getElementById("btn").onclick=function(){
    var name=document.getElementById("name").value;
    var num=document.getElementById("number").value;
    var smon=document.getElementById("startmonth").value;
    var sd=document.getElementById("startday").value;
    var sh=document.getElementById("starthour").value;
    var smin=document.getElementById("startmin").value;
    var emon=document.getElementById("endmonth").value;
    var ed=document.getElementById("endday").value;
    var eh=document.getElementById("endhour").value;
    var emin=document.getElementById("endmin").value;
    var pic="https://xdgclub.com/resources/boys.jpg";;  
    document.cookie="name="+encodeURIComponent(name)+";path=crz/";
    document.cookie="num="+num+";path=crz/";
    document.cookie="photo="+pic+";path=crz/";
    document.cookie="smon="+smon+";path=crz/";
    document.cookie="sd="+sd+";path=crz/";
    document.cookie="sh="+sh+";path=crz/";
    document.cookie="smin="+smin+";path=crz/";
    document.cookie="emon="+emon+";path=crz/";
    document.cookie="ed="+ed+";path=crz/";
    document.cookie="eh="+eh+";path=crz/";
    document.cookie="emin="+emin+";path=crz/";
    window.open("crz/index.html");
}