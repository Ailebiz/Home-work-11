

// let number = Number(prompt("Кез келген сан енгізіңіз:"));


// for (let i = 1; i <= number; i++) {
    
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//     }
   
//     if (i % 3 === 0 && i % 5 === 0 && i % 2 === 0) {
//         console.log("Цикл тоқтатылды: " + i);
//         break;
//     }
// }
let userNumber = Number(prompt("Кез келген сан енгізіңіз:"));


for (let i = 1; i <= number; i++) {
    
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
  
    if (i % 3 === 0 || i % 5 === 0 && i % 2 === 0) {
        console.log("Цикл тоқтатылды: " + i);
        break;
    }
}