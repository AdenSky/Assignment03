let coinFlip;
let streak=0;
do{
    coinFlip=Math.round(Math.random());
    
    if(coinFlip==1){
        streak+=1;
        console.log("Head",streak);
        
    }else if(coinFlip==0){
        console.log("Tail");
    }

}
while(coinFlip=="Tail");
