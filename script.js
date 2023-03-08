// 2- What will be the result for these expressions?
// 5 > 4  //true
// "apple" > "pineapple" //false
// "2" > "12" //false
// undefined == null  // True
// undefined === null  //False
// null == "\n0\n"  //false
// null === +"\n0\n" //false

// 3-What are the final values of all variables a, b, c and d after the code below?
// let a = 1, b = 1;
// let c = ++a; // Ans = 2
// let d = b++; // Ans = 1

// 4-What are the values of a and x after the code below?
// let a = 2;
// let x = 1 + (a *= 2);
// ANSWER:
// The value of ( a = 4, and x = 5 ) 

// 5-Here’s a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt values).
// Why? Fix it. The result should be 3.

// let a = prompt("First number?", 1); 
// let b = prompt("Second number?", 2);
// alert(a + b); // 12
// correction
let a1 =parseInt(prompt("First number"));
let b =parseInt(prompt("Second number"));
alert(a1+b);  // correct ans
// 6- Rewrite this if using the conditional operator '?':
// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }
//By using Ternary opearator:
let result;
result="Value is " +(a1+b<4?"Below":"Over");
document.write(result);
// 7- Rewrite 'if..else' into '?'
// Rewrite if..else using multiple ternary operators '?'.
// For readability, it’s recommended to split the code into multiple lines.
// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
// Correction =
let login = prompt("Login from here");
let res;
res = (login=='Employee')?"Hello":(login=='Director')?"Greetings":(login==' ')?"No login":" ";
document.write(res);

// 8-What is the code below going to output?

// alert( null || 2 || undefined );
// Ans = 2;

// 9-What will the code below output?

// alert( alert(1) || 2 || alert(3) );
// Ans = 2:

// 10-What is this code going to show?

// alert( 1 && null && 2 );
// Ans = null;
// 11-What will this code show?

// alert( alert(1) && alert(2) );
//ANS  1 and undefined
// 12-What will the result be?

// alert( null || 2 && 3 || 4 );
// ANS 1 ,undefined, and 3

// 13-Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Correct code:
let age = prompt("write your age");
if(age>14&&age<19){
    alert("your age is in between 14 and 19");
}else{
    alert("your age is invalid");
}
// Create two variants: the first one using NOT !, the second one – without it.
// 14-Which of these alerts are going to execute?

// What will the results of the expressions be inside if(...)?

// if (-1 || 0) alert( 'first' );  (true)  This code is going to execute.
// if (-1 && 0) alert( 'second' ); (false) This code is not going to execute.
// if (null || -1 && 1) alert( 'third' ); (true) This code is going to execute.

// 15-Write the code using if..else which would correspond to the following switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }
// Correction:
let browser =prompt("Write a browser name");
if (browser=="Edge"){
    alert("You've got the Edge!");
}else if(browser=="Chrome"||browser=="Firefox"||browser=="Safari"||browser=="Opera"){
    alert("Okay we support these browsers too");
}else{
    alert( 'We hope that this page looks ok!' );
}

// 16-Rewrite the code below using a single switch statement:

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }
// Correction:
let a = +prompt('write the value', '');
switch(a){
    case 0:
        alert("0");
    break;
    case 1:
        alert("1");
        break;
    case 2:
        alert("2");
        break;
        default:
        alert('3');    
}
// let result = "pineapple".localeCompare("apple");

// if (result > 0) {
//   console.log("apple is greater than pineapple");
// } else {
//   console.log("apple is not greater than pineapple");
// }