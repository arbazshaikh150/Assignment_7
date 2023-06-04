

 const incmnt = document.querySelector(".increment");
    // console.log(incmnt);
    // let increase = document.querySelector(".number");
    //  console.log(increase);
 incmnt.addEventListener("click",function inc(){
     const increase = document.querySelector(".number");
     increase.stepUp();
    //  console.log(increase);
 });


 const decmnt = document.querySelector(".decrement");
 decmnt.addEventListener("click",() => {
    let number = document.querySelector(".number");
    number.stepDown();
 });



 // Reset

 const rst = document.querySelector(".reset");

 rst.addEventListener("click", () => {
    let block = document.querySelector(".number");
    let num = document.querySelector(".number").value;
    block.stepDown(num);
 });


// function inc(){
//     let increase = document.getElementsByClassName("number");
//     console.log(increase);

// }

// increment.addEventListener("click", (event) => {
//  let number = increment.textContent;
//  increment.textcontent = number + 1;
// });



