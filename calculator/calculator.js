let display = document.getElementById("display");

// Load saved value on page load
display.value = localStorage.getItem('value') || "";

function appendToDisplay(evalue){
    if(display.value === "Error"){
        display.value = "";
    }
    display.value += evalue;
    localStorage.setItem('value', display.value);
}

function displayclear(){
    display.value = "";
    localStorage.setItem('value', ""); // Clears the storage properly
}

function calculate(){
    // Prevent the "undefined" bug if the user clicks '=' on an empty screen
    if(display.value === ""){
        return; 
    }

    try{
        display.value = eval(display.value);
        localStorage.setItem('value', display.value);
    }
    catch(error){
        display.value = "Error";
    }
}