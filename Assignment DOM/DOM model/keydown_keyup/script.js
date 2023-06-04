let variable = document.getElementById("div");
// console.log(variable);
document.addEventListener("keydown",(parameterKey) => {
    variable.style.color = "blue";
    variable.innerText = parameterKey.key + " keydown";
});

// Keyup 
let variable2 = document.getElementById("div");
// console.log(variable);
document.addEventListener("keyup",(parameterKey1) => {
    variable2.style.color = "red";
    variable2.innerText = parameterKey1.key + " Keyup";
});