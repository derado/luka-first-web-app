function calculate() {
    var x, y;
    
    x = parseFloat(document.getElementById("number1").value);
    y = parseFloat(document.getElementById("number2").value);

    var z;
    var operation = document.getElementById("operation");
      
    if (operation.value == '+') {
        z = x + y;
    } else if (operation.value == '-') {
        z = x - y;
    } else if (operation.value == '/') {
        if (y == 0 ) {
            z = "can not be divided by 0"
        } else {
            z = x / y;
        }
    } else if (operation.value == 'x') {
        z = x * y;
    } else {
        z = 'NaN';
    }

    document.getElementById("result").innerHTML = z;
}