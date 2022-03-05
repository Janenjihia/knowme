 function show(){
  var dd=parseInt(document.getElementById("day").value);
  var mm=parseInt(document.getElementById("month").value);
  var year=document.getElementById("year").value;
  var gender=document.getElementById("gender").value;
  var maleNames=["Kwasi","Kwadwo", "wabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames=["Akosua","Adwoa", "Abenaa","Akua","Yaa", "Afua", "Ama"];
  var cc=parseInt(year.slice(0,2));
  var yy=parseInt(year.slice(2,4));
  var dayOfTheWeek=Math.ceil(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);
  if (gender==="male"){
    if (dayOfTheWeek===1){
      alert("Your Akan Name is" + maleNames[0]);
    }else if(dayOfTheWeek===2){
      alert("Your Akan name is" + maleNames[1]);
    }else if(dayOfTheWeek===3){
      alert("Your Akan name is" + maleNames[2]);
    }else if(dayOfTheWeek===4){
      alert("Your Akan name is" + maleNames[3]);
    }else if(dayOfTheWeek===5){
      alert("Your Akan name is" + maleNames[4]);
    }else if(dayOfTheWeek===6){
      alert("Your Akan name is" + maleNames[5]);
    }else if(dayOfTheWeek===7){
      alert("Your Akan name is" + maleNames[6]);
    }

  }else if (gender==="female"){
    }if (dayOfTheWeek===1){
      alert("Your Akan Name is" + femaleNames[0]);
    }else if(dayOfTheWeek===2){
      alert("Your Akan name is" + femaleNames[1]);
    }else if(dayOfTheWeek===3){
      alert("Your Akan name is" + femaleNames[2]);
    }else if(dayOfTheWeek===4){
      alert("Your Akan name is" + femaleNames[3]);
    }else if(dayOfTheWeek===5){
      alert("Your Akan name is" + femaleNames[4]);
    }else if(dayOfTheWeek===6){
      alert("Your Akan name is" + femaleNames[5]);
    }else if(dayOfTheWeek===7){
      alert("Your Akan name is" + femaleNames[6]);
    }
    if (dd<=0||dd>31||dd===""){
      alert("enter valid date");
    }else if(mm<=0||mm>12||mm==2&&dd>29||mm==="");{
      alert("Enter valid month");
    }
    }
    