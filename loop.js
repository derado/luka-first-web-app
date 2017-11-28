function sum() {
    var numbers = document.getElementById('numbers');
    var lines=numbers.value.split("\n");

    var total = 0;
    var number;
    
    for (var i=0; i < lines.length; i++) {
        if (lines[i].length > 0) { 
            number = parseInt(lines[i]);
            
            total = total + number;
            
        }
        
    }

    document.getElementById("result").innerHTML = total;

}

function writeLines() {

    var line_count = document.getElementById('line_count').value;
    var numbersBox = document.getElementById('numbers');
    numbersBox.value = '';

    var text = '';

    for (var i = 1; i <= line_count; i++) {
        text = text + i + '\n';
    }

    // petlja može da se izvršava i obrnutim redosledom od većeg broja ka manjem
    // for (var i = line_count; i > 0; i--) {
    //     text = text + i + '\n';
    // }

    numbersBox.value = text;

    

}