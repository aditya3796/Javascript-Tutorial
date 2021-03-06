//1. Ways to print in JavaScript
//console.log('Hello World');
//alert('Me');
//document.write('This is document write');

// //2. Javascript console API
// console.log('Hello World', 4 + 6, 'Another log');
// console.warn('This is warning');
// console.error('This is an error');

/*multi
line
comment
*/

//3. Javascript Variables
//What are variables? - Containers to store data values
var number = 34;
var number2 = 56;
// console.log(number+number2);

// 4. Data types in JavaScript
// Numbers
var num1 = 455;
var num2 = 56.76;

// String
var str1 = 'This is a string';
var str2 = "This is also a string";

// Objects
var marks = {
    ravi: 34,
    shubham: 78,
    aditya: 99.99
}
// console.log(marks);

//Booleans
var a = true;
var b = false;
// console.log(a,b);

var und;
// console.log(und);

var n = null;
// console.log(n);

/*At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

var arr = [1,2,'Aditya',4,5];

//Operators in JavaScript
//Arithmetic Operators
var a=100;
var b=10;
// console.log('The value of a+b is ',a+b);
// console.log('The value of a-b is ',a-b);
// console.log('The value of a*b is ',a*b);
// console.log('The value of a/b is ',a/b);

//Assignment Operators
var c=b;
// c+=2;
// console.log(c);

//Comparison Operators
var x=34;
var y=56;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x<y);
// console.log(x>y);

//Logical Operators

//Logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

//Logical or
// console.log(true || true);//alt+click makes multiple cursor
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

//Logical not
// console.log(!true);
// console.log(!false);

//Function in JavaScript

function avg(a,b){
    c=(a+b)/2;
    return c;
}
//DRY = Do not repeat yourself
c1=avg(4,6);
c2=avg(14,16);
// console.log(c1,c2);

//Conditionals in JavaScript
/*
var age=41;

//Single if statement
if(age>18) {
    console.log('You can drink rasna water');
}
//if - else statement
// if(age>18){
//     console.log('You can drink rasna water');
// }
// else{
//     console.log('You cannot drink rasna water');
// }

//if-else ladder
age=31;
if(age>32){
    console.log('You are not a kid');
}
else if(age>26){
    console.log('Bacche nhi rahe');
}
else if(age>22){
    console.log('Yes, Bacche nhi rahe');
}
else if(age>18){
    console.log('18 Bacche nhi rahe');
}
else{
    console.log('Bacche rahe');
}
console.log('End of ladder');*/

var arr=[1,2,3,4,5,6,7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// })
// const ac=1;
// ac++;
// ac=ac+1;
let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }
// do{
//     console.log(arr[j++]);
// }while(j<arr.length);

let myArr=['Fan','Camera',34,null,true];
//Array Methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push('Aditya');
// myArr.shift();//deletes from starting of array
// const newLen = myArr.unshift('Aditya');//add in the starting of array and newLen is storing the length of the array
// console.log(newLen);
// console.log(myArr);

//String methods in JavaScript
let myLovelyString = 'Aditya is a good boy good good';
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf('good'));
// console.log(myLovelyString.lastIndexOf('good'));

// console.log(myLovelyString.slice(0,3));
d=myLovelyString.replace('Aditya','Abhishek');
// d=d.replace('good','bad');
// console.log(d, myLovelyString);

let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

//DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
// elemClass[0].style.background='yellow';//first element of container class
elemClass[0].classList.add('bg-primary');//ading classes with properties according to us
elemClass[0].classList.add('text-success');
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
tn = document.getElementsByTagName('div');
// console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = 'This is a created paragraph';
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = 'This is a created bold';
tn[0].replaceChild(createdElement2, createdElement);

//selecting using query
// sel = document.querySelector('.container');
// console.log(sel);
// sel=document.querySelectorAll('.container');
// console.log(sel);


// function clicked(){
    // console.log('The button was clicked')
// }
// window.onload = function(){
    // console.log('The document was loaded');
// }
// Events in JavaScript
// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
//     console.log('Click on container');
// })
// firstContainer.addEventListener('mouseover',function(){
//     console.log('Mouse on container');
// })
// firstContainer.addEventListener('mouseout',function(){
//     console.log('Mouse out of container');
// })

let prevHTML=document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML=prevHTML;
    console.log('Mouse up when clicked on container');
})
firstContainer.addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> Ander </b>"
    console.log('Mouse down when clicked container');
})

// Arrow Functions
// function summ(a,b){
//     return a+b;
// }
summ = (a,b)=>{
    return a+b;
}

logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML="<b>Set timeout fired</b>"
    console.log('I am your log');
}
//SetTimeout and setinterval
// setTimeout(logKaro, 2000);
// clr=setInterval(logKaro, 2000);
// console.log(clr);//gives ID
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// JavaScript localStorage
// localStorage.setItem('name','Aditya')
// localStorage
// localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();

// Json
// obj = {name: "Aditya", length: 1, a: {this:'tha"t'}}
// jso = JSON.stringify(obj);//object is converted to JSON string
// console.log(typeof jso);
// console.log(jso);
// parsed = JSON.parse(`{"name":"Aditya","length":1,"a":{"this":"that"}}`);//string to object
// console.log(parsed);