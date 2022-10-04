const maxTemp=28,
minTemp =15;

let tempBox = document.getElementById("TempBox");
let tempValue=  Number(tempBox.value);

function addTemp() {  
  if(maxTemp > tempValue){
    tempValue += 1;
    tempBox.value = tempValue;
  }
}

function remTemp() {
  if(minTemp < tempValue){
    tempValue -= 1;
    tempBox.value = tempValue;
   }
   
}