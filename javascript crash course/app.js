console.log("andrew phan"[10]);
console.log("12345".length);
let str = "andrew";
console.log(str[str.length - 1]);
// console.log('123'); used to comment for codes/ explain
/**
 * this is easier
 * to comment
 * without confusing stuff
 */
const isRaining = true;
let temperature = 30;
let planet = "Uranus";
// difference between const and let is that const is constant and cannot change
temperature = temperature + 2;
console.log(temperature);

/**
 * converting temperatures
 * celsius to fahrenheit
 * f= c x 1.8 + 32
 */

let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;
console.log(fahrenheit);

let bool = "1" === 1;
// double equals checks values, triple equals checks values AND types. === should be used for more safety
// not equals/ opposite is !: != opposite of == . !== opposite of ===
console.log(bool);

let subscribed = false;
let loggedIn = true;
if (subscribed === true) {
  console.log("show video");
} else if (loggedIn === true) {
  console.log("tell user to upgrade");
} else {
  console.log("tell user to log into account");
}
// order is important

let cash = 25;
let price = 40;
let difference = cash - price;
if (cash > price) {
  console.log(`you paid extra - here's ${difference} dollars change`);
} else if (cash === price) {
  console.log("exact change");
} else {
  console.log(`you still owe ${difference * -1} dollars`);
}
/**
 * &&
 * true && true --> true
 * true && false --> false
 * false && true --> false
 * false && false --> false
 * just looks for a false value
 * ||
 * true || true --> true
 * true || false --> true
 * false || true --> true
 * false || false -->
 * looks for a true value
 */
let money = 50;
let cost = 40;
let isStoreOpen = false;
if (money >= cost && !isStoreOpen) {
  // isStoreOpen === false is the same as !isStoreOpen just cleaner
  // isStoreOpen === true is the same as isStoreOpen
  console.log("print receipt");
} else {
  console.log("falsy value");
}
/**
 * falsy values
 * falsy values considered false when converted to boolean
 * ex: undefined, null, NaN, 0, "" (empty strings), false are all falsy values
 * truthy values
 * considered true when converted to boolean
 * numbers: 10, 20 etc. "strings with stuff inside" ,{}, []
 * if statements are truthy values
 * else statements are falsy values
 * !! is used to check
 */
let val = "hi";
if (val) {
  console.log(!!val);
} else {
  console.log(!!val);
}
// turnery operators are shortcut for if else condition except cleaner

let hot = "";
hot ? console.log("you are hot") : console.log("you are ugly");

let subbed = false;
let signedIn = true;
let string = subbed || signedIn ? "show the video" : "hide the video";
console.log(string);

let dinero = 50;
let amount = 40;
let isShopOpen = true;
// 'give receipt' : 'do not give receipt'
let string1 = dinero >= amount && isShopOpen ? "give receipt" : "no receipt";
console.log(string1);
console.log(1);
console.log(2);
console.log(3);
// ^ DRY = don't repeat yourself. make it simple! it will look cleaner
// 3 types : for loop, while loop, do while loop. for loop is most used

// let count = 1;
// while (count <= 100) {
//     console.log(count);
//     count = count + 1;
// }
for (i = 0; i < 3; i++) {
  console.log(i);
}
// for (let i = 0; i < 100, i++) i++ is increments of 1 i-- is -1
/** write a for-loop that loops through 1 to 20
 * if number is divisible by 3, print "frontend"
 * if divisible by 5 print simplified
 * if both print frontend simplified
 * if neither print number
 * example
 * 1->1
 * 2->2
 * 3-> frontend
 * 4->4
 * 5->simplified
 * 6->frontend
 * 15-> frontend simplified
 * 20-> simplified
 */
for (i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} -> frontend simplified`);
  } else if (i % 3 === 0) {
    console.log(`${i} -> frontend`);
  } else if (i % 5 === 0) {
    console.log(`${i} -> simplified`);
  } else console.log(`${i} -> ${i}`);
}
// famous interview question ^^ don't forget `` or === or &&
/**
 * print out every character from string 'frontend simplified'
 * ex:
 * 'f'
 * 'r'
 * 'o'
 * ...
 * 'e'
 * 'd'
 */
let string2 = "deifilpmis dnetnorf";
console.log(string2[string2.length]);
for (i = 0; i <= 20; i++) {
  console.log(string2[string2.length - [i]]);
}
// wrong way^ but still got the same result d:
// should be i < str.length
const string3 = "frontend simplified";
for (let i = 0; i < string3.length; ++i) {
  console.log(string3[i]);
}
//more efficient and right way
//const is better for this as we are not reassigning
/**
 * dry
 * console.log('welcome andrew')
 * console.log('welcome hannah')
 * repetitive
 */
//function definition
function welcomePerson(name, lastName) {
  console.log(`welcome, ${name} ${lastName}!`);
}
//calling a function (makes it so you can see it)
welcomePerson("andrew", "phan");
welcomePerson("hannah", "senften");
welcomePerson("haley");
function sumOfTwoNumbers(num1, num2) {
  //parameter
  return num1 + num2;
  console.log("my function");
}
//return in a function supercedes
console.log(sumOfTwoNumbers(10, 20)); //argument
/**
 * converting temperatures
 * celsius to fahrenheit
 * f= c x 1.8 + 32
 * ex
 * convertCtoF(0) -> 32
 * convertCtoF(10) -> 50
 * convertCtoF(30) -> 86
 */

function conversion(celsius) {
  return celsius * 1.8 + 32;
}
console.log(conversion(0));
console.log(conversion(10));
console.log(conversion(30));

//how to use arrows
const convert = (celsius) => {
  return celsius * 1.8 + 32;
};
console.log(convert(0));
console.log(convert(10));
console.log(convert(30));

// let item1 = 20
// let item2 = 30
// let item3 = 40
// let item4 = 50
// let item5 = 100
//inefficient

let arr = [20, 30, 40, 50, 100]; //can also put in strings or booleans
console.log(arr[0]);
//first element is arr[0]
console.log(arr[2]);
console.log(arr[arr.length - 1]);
//last element is arr.length-1
arr.push(200);
//.push adds elements
//let newArr = arr.filter((element) => {
//     console.log(element);
//     if (element < 50){
//     return true;
//     }
//     //filter method needs to return true to add stuff to array
// })
// console.log(newArr);

//short method v
let newArr = arr.filter((element) => element < 50);
console.log(newArr);
//you can remove end paranthesis from the first element ONLY if you are using one thing
/**
 * filter out all fail grades
 * ex
 * [a+, a, fail] => [a+,a]
 * [fail, fail, b] => [b]
 * [fail]=> []
 */

// let array = ['a+', 'a', 'fail', 'fail', 'fail', 'b','fail'];
// let newarray = array.filter(grade => grade !='fail')
// console.log(newarray);
//my attempt^

let grades = ["a+", "a", "fail"];
let goodGrades = grades.filter((element1) => element1 !== "fail");
console.log(goodGrades);
for (let i = 0; i < grades.length; i++) {
  console.log(grades[i]);
}
/**
 * filter out all fail grades
 * this time without using array.filter
 * ex
 * [a+, a, fail] => [a+,a]
 * [fail, fail, b] => [b]
 * [fail]=> []
 */

// for (let i = 0; i < grades.length; i++){
//     console.log(grades[i-1])
// } my attempt

let greatGrades = [];
for (let i = 0; i < grades.length; ++i) {
  if (grades[i] !== "fail") {
    greatGrades.push(grades[i]);
  }
}
console.log(greatGrades);

let array1 = [1, 4, 9, 16];
let newArray1 = array1.map((element) => "undefined");
console.log(newArray1);

/**
 * turn elements in an array of dollars to cents
 * ex
 * [1, 5, 10, 3] =>[100, 500, 1000, 300]
 */

let dollararray = [1, 5, 10, 3];
let centarray = dollararray.map((element) => element * 100);
console.log(centarray);
// try question again but without map

// let centarray1 = []
// for (let i = 0; i < 10; i++){
//     if(dollararray[i] <= 10){
//         centarray1.push(dollararray[i]*100)
//     }
// }
// console.log(centarray1);
//my way
let centarray1 = [];
for (let i = 0; i < dollararray.length; i++) {
  centarray1.push(dollararray[i] * 100);
}
console.log(centarray1); //not best practice
// let userFirstName = 'andrew'
// let userLastName = 'phan'
// let userDiscordId = 'vgmirage'
// let subscriptionstatus = 'vip'
// takes up a lot of space, what if multiple users

let users = [
  {
    username: "andrew",
    email: "andrewwphan@gmail.com",
    password: "test123",
    subscriptionStatus: "vip",
    discord: "vgmirage",
    lessonsCompleted: [0, 1],
  },
  {
    username: "andrew",
    email: "andrewwphan@gmail.com",
    password: "test123",
    subscriptionStatus: "vip",
    discord: "vgmirage",
    lessonsCompleted: [0, 1],
  },
];
function login(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      console.log(users[i]);
      if (users[i].password === password) {
        console.log("log user in");
      } else {
        console.log("incorrect password");
      }
      return;
    }
  }
  console.log("incorrect email");
}
login("andrewwphan@gmail.com", "test123");

/**
 * create a register function that accepts:
 * -username
 * email
 * password
 * subscription
 * discord
 * lessons completed
 *
 * inside your register function
 * create a user object
 * push this user object onto the the users array
 */

function register(user){
  users.push(user);
}
register({
username: "andrew",
  email: "andrewwphan@gmail.com",
  password: "test123",
  subscriptionStatus: "vip",
  discord: "vgmirage",
  lessonsCompleted: [0, 1]
});
console.log(users);
//first way to access element ** class is . id is #
// chane html
document.querySelector("#title").innerHTML += 'frontend'
//second way
// document.getElementById('title')
// console.log(document.getElementById('title'));
// change css
document.querySelector("#title").style.fontSize = '16px'

function DarkMode(){
    document.querySelector('body').classList.toggle('dark-theme')
}