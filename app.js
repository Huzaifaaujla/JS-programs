// function maximum(){
//     let number1=document.getElementById("num1").value;
//     let number2=document.getElementById("num2").value;
//     let number=document.getElementById("result")
//         if(parseInt(number1)>parseInt(number2)){
//           number.innerText="The number is greater"+" "+number1 ;
//          } 
//         else{ 
//           number.innerText="The number is greater"+" "+number2 ;
//         }
// }


// function maximum3(){
//     let number1=document.getElementById("num1").value;
//     let number2=document.getElementById("num2").value;
//     let number3=document.getElementById("num3").value;
//     let number=document.getElementById("result")
//         if(parseInt(number1)>parseInt(number2) && parseInt(number1)>parseInt(number3)){
//           number.innerText="The number is greater"+" "+number1 ;
//          } 
//         else if(parseInt(number2)>parseInt(number1) && parseInt(number2)>parseInt(number3)){ 
//           number.innerText="The number is greater"+" "+number2 ;
//         }
//         else{
//             number.innerText="The number is greater"+" "+number3 ;
//         }
// }


// function checknum(){
//     let number=document.getElementById("num").value;
//     let ans=document.getElementById("ans1")
//     if(parseInt(number)==0){
//         ans.innerHTML="Number is zero"
//     }
//     else if(parseInt(number)>0){
//         ans.innerHTML="Number is postive"
//     }
//     else{
//         ans.innerHTML="Number is negitive"
//     }
// }


// function even_odd(){
//     let number=document.getElementById("num").value;
//      let ans=document.getElementById("ans1")
//      if(parseInt(number)%2==0){
//          ans.innerHTML=number+" is Even number"
//      }
//      else{
//         ans.innerHTML=number+" is Odd number"
//      }

// }
    
    

// function check(){
//     let number=document.getElementById("num").value;
//      let ans=document.getElementById("ans1")
//      if(parseInt(number)%5==0 || parseInt(number)%11==0){
//         ans.innerHTML=number+" is divisible"
//      }
//      else{
//         ans.innerHTML=number+" is not divisible"

//      }
//     }


    function leapYear(){
        let number=document.getElementById("num").value;
         let ans=document.getElementById("ans1")
         if(parseInt(number)%4==0){
            ans.innerHTML="This Year is Leap Year"
         }
         else{
            ans.innerHTML="This Year is not Leap Year"
    
         }
        }







