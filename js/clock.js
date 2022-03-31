function clock(){
    var hour=document.getElementById("hour");
    var min=document.getElementById("min");
    var sec=document.getElementById("sec");

    var h=new Date().getHours();
    var m=new Date().getMinutes();
    var s=new Date().getSeconds();

    hour.innerText=h;
    min.innerText=m;
    sec.innerText=s;

}
/*
function date(){
  var Day=document.getElementById("day");
  var Month=document.getElementById("month");
  var Year=document.getElementById("year");
  var day=new Date().getDate();
  var month=new Date().getMonth();
  var year=new Date().getFullYear();
  Day.innerText=day;
  Month.innerText=month;
  Year.innerText=year;
}*/
var interval=setInterval(clock,1000);
//var intervalDate=setInterval(date,86400);