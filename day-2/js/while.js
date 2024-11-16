// let mumkindik_sany = 3

// while (mumkindik_sany > 0) {
//     let suraq = prompt("Qazaqq handygy kashan quryldy?")
    
//     if (suraq == "1465") {
//         alert("Sen durys jauap berdin!")
//         break;
//     } else {
//         mumkindik_sany--;
//         if (mumkindik_sany > 0) {
//             alert("sizde" + mumkindik_sany + "mumkindik qaldy! Qaita bagynyzdy synap koriniz")

//         } else if(mumkindik_sany == 0) {
//             alert("Sizde mumkindik qalmady! Tarih oqy!")
//         }
//     }
    
// } 


// let count= parseInt(prompt("Студенттер санын енгізіңіз:"));


// let student = 0; //нөлге тең
// let i = 1;


// while (i <= count)  {  
//     let grade = +prompt(i + "-студенттің бағасын енгізіңіз:");
//     student += grade; //бағаны бірдеңеге(короче ана берген атқа ма сондайдың ) мәніне қосу
//     i++;  
// }// студенттің санын қанша енгізсең сонша студенттің бағасын сұрайды


// let result = student / count; //барлық сандардың мәнін бір-біріне қосып жалпы санның санына бөлеміз


// alert("Студенттердің бағаларының орташа мәні: " + result); //мынау шыққан нәтиже

// let num1 = 10
// // let i = 10
// // while ( i <=40 ) {
// //     if ((i <= 30 && i >=20) && (i % 2 == 0)) {
// //         continue;
// //     }
// //     console.log(i);
// //     i++;
// // }


// let count1 =1



// while ( i1 <=20) {
//     if (( 20 >= count >=1 ) && (count % 2 ==0) ) {
//        san = count1 + count1
//         console.log(san);
        
//     } else if (( count1 >=count>=1) && (count % 2 !==0)) {
//         san = i1+i1
//         console.log(i1);
        
//     } 
// }
// sim1 = prompt("San")
// let san = 0;
// let sum = 0;

// for (let i = 1  ; i<=20 ; i++){
//       if (i % 2 === 0){
//         san += i
//       }
//       else{
//         sum+=i 
//       }
// }

// console.log("Zhup sandardyn kosyndysy " +san);
// console.log("Taq sandardyn kosyndysy" +sum);

let number = Number(prompt("Кез келген сан енгізіңіз:"));


for (let i = 1; i <= number; i++) {
    
    if (i % 3 === 0 || i % 5 === 0) {
        console.log( i );
    }
  
    if (i % 3 === 0 || i % 5 === 0 && i % 2 === 0) {
        console.log("Цикл тоқтатылды: " + i);
        break;
    }
}