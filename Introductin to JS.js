/* to create an alert by js , // to go next line without excuting the code inside chrome console = shift + enter*/
// two alerts, alert(function), (" inside this contain message or string"), ; ends the code snippet 

alert("Hey, "); 
alert("welcome to our page"); 
// this is valid too
window.alert("What's up?"); 

// prompt gives user access to enter their information 
prompt ( " Enter your name"); 

// different types of data types in JS= Numbers, string, boolean,   null, undefined, object, array, symbol

// number
console.log(4+8);

// to know the data types
typeof(9); 
typeof("Sujon"); 
typeof(true); 
console.log(typeof(9)); 


// variables var=keyword, myName= Name of the variable, Sujon= value(anything after = is the value of the variables)
var myName ="Sujon"; 
console.log(myName); 
// using var as alert field information
alert(myName); 

// to save the information user enter we can use a prompt 
var yourName= prompt("What is your name?");  
alert("Welcome to my website " + yourName); 
console.log(yourName); 

// game level var
var gameLevel = 1
gameLevel = 2; 
gameLevel = 3; 
alert( "Your level is currently: " + gameLevel); 
/* ============================================ */

// change the function in a way that a become 8 and b value will be 3
function test() {
    var a = "3";
    var b = "8";
  
    // to swap the value, we take help of a new empty var, which is c
    var c = a;  /* a bucket contains water, I pour them down inside the empty c bucket */
    a = b; /* now that a is empty, I pour down the b sands inside a bucket */
    b= c; /* now that b is null, c water can go inside the b, by doing this I swap the value of the a and b */

    console.log("a is " + a); /* a initial value was 3, but for above code snippet, it's now 8 */
    console.log("b is " + b); /* b is now 3! */
}

// ======================================
// variable naming rules 
// can't name it var
// can't begin with a nuber 
// No space
// camel casing: first word should be small letter, and begining of the second word fist letter should be capital
// it can't contain dash - sign 
// but it can contain underscore _
// ============================================

// sting rules and regulations 
// concatination 
var message = "My name is "; 
var name = "Sujon"; 
alert(message + name); 

// length 
message.length; 
// ========================================

// // twitter example telling user how many character left for them to write ; 
// 140 character in total 
var twitter = prompt("Write your tweet here: ");  

alert("You have written " + twitter.length + " characters,  you have " + 
      (140 - twitter.length) + " charaters left"); 

// ==============================================

// slice and dice 
// in this example, this function allows to get rid of the additional text more then 140 characters; 
var twitter2 = prompt("Write your tweet here: ");
alert(twitter2.slice(0, 140)); 
// ==============================================

// changin the twitter2 input to upper case 
var twitter2 = prompt("Write your tweet here: ");
twitter2 = twitter2.toUpperCase(); /* this allows me to change any information given from the user to upper case, by using toLowerCase() we can do the opposite  */
alert(twitter2.slice(0, 140)); 
// ==============================================

// this variales change the first character of the string to upper case and rest of it to the lower case 
var name= prompt("What is your name?")
// below alert first take the first letter of the string and turn it to upper case;
// + name.slice(1) add the rest of the message with the first letter except the fisrt letter itself
alert(name.slice(0,1).toUpperCase()+ name.slice(1).toLowerCase());






