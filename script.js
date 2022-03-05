var days=["Mon", "Tue","Wed", "Thur", "Fri", "Sat", "Sun"];
var maleNames=["Kwasi","Kwadwo", "wabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames=["Akosua","Adwoa", "Abenaa","Akua","Yaa", "Afua", "Ama"];
function getName(){
  var dd=parseInt(document.getElementById("day").value);
  var mm=parseInt(document.getElementById("month").value);
  var year=ParseInt(document.getElementById("year").value);
  var gender=document.getElementById("gender").value;
  var yy=parseInt(year.subStr(2, 4));
  var cc=parseInt(year.subStr(0, 2));
  var d=parseInt(((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;
  if (dd<=0||dd>31||dd==""){
  alert("Invalid date!")
  }
  else if (mm<=0||mm> 12||mm== 2 && dd>29||mm==""){
    alert("Invalid month!")
  }
  else if (year<=0||year==""){
    alert("Invalid year!")
  }
  if (gender==="male"){
    alert("Your name is " + maleNames[d]);
  }
  else if (gender==="female"){
    alert ("Your name is " + femaleNames[d]);
  }
}