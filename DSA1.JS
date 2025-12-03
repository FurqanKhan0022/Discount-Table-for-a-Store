
function showData() {
let amount = document.getElementById("userInput").value;
dis=0;
if(isNaN(amount)){
    console.log("error entery");
}
else if(amount>=0 && amount<=5000)
{
    dis=0;
    
}
else if(amount>=5001 && amount<=7000)
{
    dis=5;
    
}
else if(amount>=7001 && amount<=9000)
{
    dis=10;
    
}
else if(amount>=9001 )
{
    dis=20;
    
}
else{
    console.log("error");
    
}
document.getElementById("outputArea").innerText = (Math.floor(amount-(dis*amount/100)));
}


        // let ans=Number(prompt("vote age"));
// if(isNaN(ans)){
//     console.log("nhi ha")
// }
// else if(ans>= 18 ) {
//     console.log("yes");
    
// }
// else{
//     console.log("no");
    
// }

// let amount = Number(prompt("enter the amount number"));
// dis=0;
// if(isNaN(amount)){
//     console.log("error entery");
// }
// else if(amount>0 && amount<5000)
// {
//     dis=0;
    
// }
// else if(amount>5001 && amount<7000)
// {
//     dis=5;
    
// }
// else if(amount>7001 && amount<9000)
// {
//     dis=10;
    
// }
// else if(amount>9001 )
// {
//     dis=20;
    
// }
// else{
//     console.log("error");
    
// }
// console.log("total discount  = ",Math.floor(amount-(dis*amount/100)));


// let greate=Number(prompt("enter the greate"));

// if(greate>=49 && greate<=60){
//     console.log("greate D");
// }
// else if(greate>=60 && greate<=70){
//     console.log("greate C");
// }
// else if(greate>=70 && greate<=80){
//     console.log("greate B");

// }
// else if(greate>=80 && greate<=100){
//     console.log("greate A");

// }

// else{
//     console.log("error");
    
// }