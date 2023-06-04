let storeVar = document.getElementById("button");
let count = 0;
storeVar.addEventListener("mouseout", () => {
    if(count == 0){
       let parameter = document.createElement("p");
       parameter.textContent = " Hello Ladies and Gentleman , Myself Arbaz Shaikh Studying in IIT Bhilai Inviting You all to one and only Meraz ( Our techno - cultural fest )"
        parameter.style.alignSelf = "center";
        parameter.style.textAlign = "center";
        parameter.style.fontSize = "20px";
        parameter.style.fontWeight = "400";
        parameter.style.color = "#6747c2";
        parameter.style.cursor = "text";
        parameter.setAttribute("id","para")
        document.body.appendChild(parameter);
        count++;
    }
    else{
        let deleteParameter = document.getElementById("para");

        // console.log(deleteParameter);

        deleteParameter.remove(); 
        count = 0;
    }

});