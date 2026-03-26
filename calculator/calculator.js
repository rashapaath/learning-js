let display=document.getElementById("display");
function append(evalue){
    display.value+=evalue;

}
function displayclear(){
    display.value="";

}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value="Error";
    }

}