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
    document.cookie="name="+encodeURIComponent(name)+";path=lzf/";
    document.cookie="num="+num+";path=lzf/";
    document.cookie="smon="+smon+";path=lzf/";
    document.cookie="sd="+sd+";path=lzf/";
    document.cookie="sh="+sh+";path=lzf/";
    document.cookie="smin="+smin+";path=lzf/";
    document.cookie="emon="+emon+";path=lzf/";
    document.cookie="ed="+ed+";path=lzf/";
    document.cookie="eh="+eh+";path=lzf/";
    document.cookie="emin="+emin+";path=lzf/";
    window.open("lzf/index.html");
}