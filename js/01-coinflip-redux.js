let coinFlip;
let amountTime = prompt("How many times do you want to try?");

for(i=0; i<=amountTime; i++){
    coinFlip=Math.round(Math.random());
        if(coinFlip===0){
            console.log("Head");
        }else if(coinFlip===1){
            console.log("Tail");
        }
}