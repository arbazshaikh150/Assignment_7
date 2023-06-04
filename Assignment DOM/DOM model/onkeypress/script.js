let variable = document.getElementById("text");
let count = 0;
console.log(variable);
variable.addEventListener("keypress", () => {

    if(count <= 10){
    // variable.style.contentVisibility = "hidden";
    let valueVar = variable.value;
    // console.log(valueVar);
     let square = valueVar * valueVar;
    //  console.log(square);
     let appnd = document.createElement("h3");
     let breaking = document.createElement("br");
     document.body.appendChild(breaking);
    //  appnd.textContent = "First n - 1 number is " + square;
    //  appnd.style.display = "block";
    //  appnd.style.fontWeight = "500";
    //  appnd.style.position = "absolute to bottom 250px";
    //  appnd.style.p
    //  appnd.style.color = "#6736h7";
    //  document.body.appendChild(appnd);
    count++;
    }
    else{
        let appnd = document.createElement("h3");
    //  let breaking = document.createElement("br");
    //  document.body.appendChild(breaking);
      appnd.textContent = "On Pressing Number Breaking of line take place " ;
      appnd.style.display = "block";
      appnd.style.fontWeight = "500";
      appnd.style.color = "#6736h7";
      document.body.appendChild(appnd);
        count = 0;
    }

})