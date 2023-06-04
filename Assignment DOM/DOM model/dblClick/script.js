let buttonTaker = document.querySelector("#button");
buttonTaker.addEventListener("dblclick",() =>{
    let storeval = document.createElement("h1");
    storeval.textContent = "Hello Everyone, I am Arbaz Shaikh Submitting this assignment on time."
    storeval.style.fontSize = "40px";
    storeval.style.textAlign = "center";
    storeval.style.display = "block";
    storeval.style.color = "black";
    storeval.style.cursor = "pointer";
    document.body.appendChild(storeval);
});
