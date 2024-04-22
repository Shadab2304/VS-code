const display = document.getElementById("display");

function calculate(input){
    display.value += input;
}

function clearAll(){
    display.value = "";
}

function displayAns(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
