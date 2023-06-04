let variable = document.getElementById("button");
let count = 0;
// console.log(variable);
variable.addEventListener("click",function clk(){
    
    let var1 = document.getElementById("button");
    // console.log(var1);
      var1.style.color = "pink";
    var1.style.fontSize = "26px";
    if(count % 2 == 0){
    document.body.style.backgroundColor="Red";
    count++;
    }
    else{
        document.body.style.backgroundColor="Aqua";
        count++;
    }

});
