document.querySelector("#submit").onclick = () => {
    let temp;
    temp = document.getElementById("textBox").value;
    if(document.getElementById("ctemp").checked) {
        
        temp = getCelsius(Number(temp));
        document.getElementById("result").innerHTML = temp+" degrees C";    
    }
    else if(document.getElementById("ftemp").checked) {
        temp = getFahrenheit(Number(temp));
        document.getElementById("result").innerHTML = temp+ " degrees F";    
    }
    else {
        document.getElementById("result").innerHTML = "Select any option!";
    }
}


function getCelsius(temp) {
    return (temp - 32) * (5/9);
}

function getFahrenheit(temp){
    return temp * 9/5 + 32;
}
