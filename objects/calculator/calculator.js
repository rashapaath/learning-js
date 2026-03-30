// JS

let display = document.getElementById("display");

// Load saved value
display.value = localStorage.getItem('value') || "";

function append(evalue){
    if(display.value === "Error"){
        display.value = "";
    }
    display.value += evalue;
    localStorage.setItem('value', display.value);
}

function displayclear(){
    display.value = "";
    localStorage.setItem('value', "");
}

function calculate(){
    try{
        display.value = eval(display.value);
        localStorage.setItem('value', display.value);
    }
    catch{
        display.value = "Error";
    }
}