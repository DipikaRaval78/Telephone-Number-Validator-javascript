// function convertToRoman() {
//     var num = document.getElementById("number").value;
//     // console.log(num)
//     let result = '';
//     let romanNums = {
//       M: 1000, CM: 900, D: 500,
//       CD: 400, C: 100, XC: 90,
//       L: 50, XL: 40, X: 10,
//       IX: 9,  V: 5, IV: 4, I: 1  
//     };
//     var val = document.querySelector('#number').value;
//     val = parseInt(val);
//     for ( val in romanNums) {
        
//       for (let i = romanNums[val]; num >= i; num -= i) result += val;  }
//     // console.log(result);
//     return document.querySelector('#result').innerHTML = result;
//   }


  function telephoneCheck() {
    let str = document.getElementById("number").value;
    console.log(str)
    let result = '';
    if(/^(1?\s?\(?[0-9]{3}\)?\s?[0-9]{3}\s?[0-9]{4})$/.test(str)){
       return  document.querySelector('#result').innerHTML  = true;
     }else if(/^(1?\s?\({1}[0-9]{3}\){1}\s?[0-9]{3}\-?\s?[0-9]{4})$/.test(str)){
       return  document.querySelector('#result').innerHTML = true;
     }else if(/^(1?\s?[0-9]{3}\-?\s?[0-9]{3}\-?\s?[0-9]{4})$/.test(str)){
      return document.querySelector('#result').innerHTML = true;
     }
     else return document.querySelector('#result').innerHTML = false;
 }
 
 //telephoneCheck("555-555-5555");
 

