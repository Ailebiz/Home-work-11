let integer = +prompt("1-ден бастап кез-келген санға дейінгі цифрды енгізіңіз")
    let min = null;
    let max = null;
    let i = 0;
  
    
    for(  let i = 0; i <= integer; i++) {
        if(i % 5 === 0 && i !== 0){
        console.log (i);
    
        if(min === null || i < min){
          min = i;
        }
    
        if(max === null || i > max){
          max = i;
        }
        
      }
     }
    
    if(min !== null && max !== null){
      console.log ("Минималды сан:" +min );
      console.log ("Максималды сан" +max);
    } else{
      console.log ('Берілген сан аралығында 5-ке бөлінетін сан жоқ.')
    }