
let i;
for(i=1; i<=100; i++){
    if(i % 3 === 0){
        document.write(`Marco!<br>`);
    }else if (i % 5 === 0){
        document.write(`Polo!<br>`);
    }
    if (i % 3 === 0 && i % 5 === 0){
        document.write(`MarcoPolo!<br>`);
    }
}