function bulbOn() {
    var bulbobj = document.getElementById("glow");
    bulbobj.setAttribute("class", "on");
}
function bulbOff() {
    var bulbobj = document.getElementById("glow");
    bulbobj.setAttribute("class", "off");
}

// function bulbToggle() {
//     document.getElementById("glow").classList.toggle("onoff");
//     if(btn.classList.contains("on")){
//         text.innerHTML = "ONt";
//     }
//     else{
//         text.innerHTML = "OFFt";
//     }
// }
var glow = document.getElementById("glow");
var text = document.querySelector(".text");
function bulbToggle() {
    glow.classList.toggle("onoff");
    if (glow.classList.contains("onoff")) {
        text.innerHTML = "ON";
    }
    else {
        text.innerHTML = "OFF";
    }
}

