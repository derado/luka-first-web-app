function sum() {
    var numbers =document.getElementById('numbers');
    var lines=numbers.value.split("\n");

    var total = 0;
    var number;
    
    for (var i=0; i< lines.length; i++) {
        if (lines[i].length > 0){ 
            number = parseInt(lines[i]);
            
            total = total + number;
            
        }
        
    }

    document.getElementById("result").innerHTML = total;

}

