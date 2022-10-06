const maxTemp=28,
minTemp = 15;
var tempBox = document.getElementById("TempBox").value;



function addTemp() {  
  if(maxTemp > tempBox){
    tempBox += 1;
    document.getElementById("TempBox").value = tempBox;
  }
}

function remTemp() {
  if(minTemp < tempBox){
    tempBox -= 1;
    document.getElementById("TempBox").value = tempBox;
   }
   
}