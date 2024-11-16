


let number = Number(prompt("Кез келген сан енгізіңіз:"));


for (let i = 1; i <= number; i++) {
    
    if (i % 3 == 0 || i % 5 == 0) {
        console.log  ( "FizzBuzz" );
        break;
    }else if (i % 3 == 0 ) {
        console.log("Fizz " );
    }else if(i % 5 == 0){
        console.log ("Buzz")
    }
}