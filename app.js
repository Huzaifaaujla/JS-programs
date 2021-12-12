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


//  function leapYear(){
//      let number=document.getElementById("num").value;
//       let ans=document.getElementById("ans1")
//       if(parseInt(number)%4==0){
//          ans.innerHTML="This Year is Leap Year"
//       }
//       else{
//          ans.innerHTML="This Year is not Leap Year"

//       }
//      }


//    function alphabat(){
//       let character=document.getElementById("num").value;
//       let ans=document.getElementById("ans1")
//       if(character>="a" && character<="z"){
//       ans.innerHTML="This is Alphabat"
//    }
//       else{
//       ans.innerHTML="error this is not alphabat"
//    }
// }


// function vowel&consonant() {
//    let character = document.getElementById("num").value;
//    let ans = document.getElementById("ans1")
//    if (character >= "a" && character <= "z" && character == "a" || character == "e" || character == "i" || character == "o" || character == "u") {
//       ans.innerHTML = "vowel Alphabat"
//    }
//    else if (character >= "a" && character <= "z") {
//       ans.innerHTML = "consonant Alphabat"
//    }
//    else {
//       ans.innerHTML = "error not Alphabat"
//    }
// }

// function alphabatchecker(){
//          let character=document.getElementById("num").value;
//          let ans=document.getElementById("ans1")
//          if(character>="a" && character<="z"){
//          ans.innerHTML="This is lower Alphabat"
//       }
//          else if(character>="A" && character<="Z"){
//          ans.innerHTML="This is uppercase alphabat"
//       }
//       else{
//          ans.innerHTML="This is not alphabat"
//       }
//    }


// function weeks(){
//          let week=document.getElementById("num").value;
//          let ans=document.getElementById("ans1")
//          if(week==1){
//             ans.innerHTML="Sunday"
//          }
//          else if(week==2){
//             ans.innerHTML="Monday"
//          }
//          else if(week==3){
//             ans.innerHTML="Tuseday"
//          }
//          else if(week==4){
//             ans.innerHTML="Wednesday"
//          }
//          else if(week==5){
//             ans.innerHTML="Thursday"
//          }
//          else if(week==6){
//             ans.innerHTML="Friday"
//          }
//          else if(week==7){
//             ans.innerHTML="Saturday"
//          }
//          else{
//          ans.innerHTML="Error Please correct"
//       }
//    }



// function Month(){
//          let Month=document.getElementById("num").value;
//          let ans=document.getElementById("ans1")
//          if(Month==1){
//             ans.innerHTML="31 days"
//          }
//          else if(Month==2){
//             ans.innerHTML="28 days"
//          }
//          else if(Month==3){
//             ans.innerHTML="31 days"
//          }
//          else if(Month==4){
//             ans.innerHTML="30 days"
//          }
//          else if(Month==5){
//             ans.innerHTML="31 days"
//          }
//          else if(Month==6){
//             ans.innerHTML="30 days"
//          }
//          else if(Month==7){
//             ans.innerHTML="31 days"
//          }
//          else if(Month==8){
//             ans.innerHTML="31 days"
//          }
//          else if(Month==9){
//             ans.innerHTML="30 days"
//          }
//          else if(Month==10){
//             ans.innerHTML="31 days"
//          }
//          else if(Month==11){
//             ans.innerHTML="30 days"
//          }
//          else if(Month==12){
//             ans.innerHTML="31 days"
//          }
//          else{
//          ans.innerHTML="Error Please correct"
//       }
//    }


// function Marks(){
//          let book1=document.getElementById("subject1").value;
//          let book2=document.getElementById("subject2").value;
//          let book3=document.getElementById("subject3").value;
//          let book4=document.getElementById("subject4").value;
//          let book5=document.getElementById("subject5").value;
//          let ans=document.getElementById("ans1");
//          let total=((parseInt(book1)+parseInt(book2)+parseInt(book3)+parseInt(book4)+parseInt(book5))/500)*100;
//          if(total>=90){
//             ans.innerHTML="Grade A";
//          }
//          else if(total>=80){
//             ans.innerHTML="Grade B";
//          }
//          else if(total>=70){
//             ans.innerHTML="Grade C";
//          }
//          else if(total>=60){
//             ans.innerHTML="Grade D";
//          }
//          else if(total>=40){
//             ans.innerHTML="Grade E";
//          }
//          else{
//             ans.innerHTML="Grade F";
//          }
// }



// function totalSalary(){
//    let salary=document.getElementById("salary").value;
//    let ans=document.getElementById("answer");
//    if(parseInt(salary)<=10000){
//       let hra=((20/100)*parseInt(salary));
//       let da=((80/100)*parseInt(salary));
//       ans.innerHTML="net Amount :"+(parseInt(salary)+parseInt(hra)+parseInt(da))
//    }
//    else if(parseInt(salary)<=20000){
//       let hra=(25/100)*parseInt(salary);
//       let da=(90/100)*parseInt(salary);
//       ans.innerHTML="net Amount :"+(parseInt(salary)+parseInt(hra)+parseInt(da))
//    }
//    else{
//       let hra=(30/100)*parseInt(salary);
//       let da=(95/100)*parseInt(salary);
//       ans.innerHTML="net Amount :"+(parseInt(salary)+parseInt(hra)+parseInt(da))
//    }

// }

// function totalBill(){
//    let Bill=document.getElementById("bill").value;
//    let ans=document.getElementById("answer");
//    if(parseInt(Bill)<=50){
//       let electricbill=(parseInt(Bill)*0.50);
//       let additinal=(20/100)*electricbill
//       ans.innerHTML="net Bill :"+(electricbill+additinal);
//    }
//    else if(parseInt(Bill)<=100){
//       let electricbill=(parseInt(Bill)*0.75);
//       let additinal=(20/100)*electricbill
//       ans.innerHTML="net Bill :"+(electricbill+additinal);
//    }
//    else if(parseInt(Bill)>=100 && parseInt(Bill)<=249){
//       let electricbill=(parseInt(Bill)*1.20);
//       let additinal=(20/100)*electricbill
//       ans.innerHTML="net Bill :"+(electricbill+additinal);
//    }
//    else if(parseInt(Bill)>=250){
//       let electricbill=(parseInt(Bill)*1.50);
//       let additinal=(20/100)*electricbill
//       ans.innerHTML="net Bill :"+(electricbill+additinal);
//    }
// }


// function checkword(){
//    let word=document.getElementById("alphabat").value;
//    let ans=document.getElementById("answer");
//    if(word>="a" && word<="z"){
//       ans.innerHTML="this alphabat"; 
//    }
//    else if(word>=0 && word<=9){
//       ans.innerHTML="this Number"; 
//    }
//    else{
//       ans.innerHTML="this special Character"; 
//    }
// }


function notecalculator(){
   let note=document.getElementById("note").value;
   let ans=document.getElementById("answer");
   if(note<=500){
      let hundred="Five Hundred note :"+Math.floor((note/500))+"<br>"+"Hundred note :"+Math.floor(note/100)+"</br>"+"50 note :"+Math.floor( ((note%100)/50) )+"</br>"+"10 note :"+Math.floor( (((note%100)%50)/10) )+"</br>"+"Five Note :"+Math.floor( ((((note%100)%50)%10)/5) );
      ans.innerHTML=hundred
   }
  else{
   let hundred="1 thousand note :"+Math.floor((note/1000))+"<br>"+"Five Hundred note :"+Math.floor( ((note%1000)/500) )+"<br>"+"Hundred note :"+Math.floor( (((note%1000)%500)/100) )+"</br>"+"50 note :"+Math.floor( ((((note%1000)%500)%100)/50) )+"</br>"+"10 note :"+Math.floor( (((((note%1000)%500)%100)%50)/10) )+"</br>"+"Five Note :"+Math.floor( ((((((note%1000)%500)%100)%50)%10)/5) );
   ans.innerHTML=hundred
  }
}