let variable = document.getElementById("button");
variable.addEventListener("mouseover", () => {
    let variable2 = document.getElementById("button");
    console.log(variable2);
    variable2.remove();
});