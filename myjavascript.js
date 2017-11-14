function buttonClick(demoText) {
    var greetElement = document.getElementById("greet");
    var nameElement = document.getElementById("hello-name");

    greetElement.textContent = "Hello " + nameElement.value + " majstore";

     document.getElementById('date').innerHTML = Date();
     document.getElementById('demo').innerHTML = demoText;

     window.alert(demoText);
 }

function hideElement() {
    document.getElementById('demo2').style.display='none';
}

function showElement() {
    document.getElementById('demo2').style.display='block';
}

function onKeyPress(event) {
    console.log("Event key koji smo pritisli", event.key);

    if (event.key === "Enter") {
        buttonClick('kako si');
    }
}