console.log("script.js running");
const paraOut1 = document.getElementById("output1")
const paraOut2 = document.getElementById("output2")

document.addEventListener('keydown', (event) => {
    // Get the pressed key
    const keyPressed = event.key.toLowerCase();
    paraOut1.innerHTML = "You pressed "+ keyPressed;



});