function calculate() {
    var x, y;
    
    x = parseInt(document.getElementById("number1").value);
    y = parseInt(document.getElementById("number2").value);

    var z = x + y;    

    document.getElementById("result").innerHTML = z;
}