var sub=prompt("Enter Subject Name");
var total=prompt("Enter Total Marks");
var obt=prompt("Enter Obtained marks");
var per=(obt/total)*100;

document.getElementById("sub1").innerHTML=sub;
document.getElementById("eng_total").innerHTML=total;
document.getElementById("eng_obt").innerHTML=obt;
document.getElementById("eng_per").innerHTML=per;




var sub=prompt("Enter Subject Name");
var total=prompt("Enter Total Marks");
var obt=prompt("Enter Obtained marks");
var per=(obt%total)*100;

document.getElementById("sub2").innerHTML=sub;
document.getElementById("math_total").innerHTML=total;
document.getElementById("math_obt").innerHTML=obt;
document.getElementById("math_per").innerHTML=per;


var sub=prompt("Enter Subject Name");
var total=prompt("Enter Total Marks");
var obt=prompt("Enter Obtained marks");
var per=(obt/total)*100;

document.getElementById("sub3").innerHTML=sub;
document.getElementById("urdu_total").innerHTML=total;
document.getElementById("urdu_obt").innerHTML=obt;
document.getElementById("urdu_per").innerHTML=per;