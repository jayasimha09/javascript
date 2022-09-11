// let enteredText = [];

// document.getElementById('submit').onclick = () => {
//    let name = document.getElementById('myText').value;
//     enteredText.push(name)
//     console.log(enteredText);
//     for(text in enteredText) {
//         console.log(text)
//         document.getElementById('result').innerHTML = text;
//     }
//     document.getElementById('myText').value = "";
// }


// let x = 3.35;
// console.log(Math.round(x));
// console.log(Math.floor(x));
// console.log(Math.ceil(x));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.pow(20, 3));
// console.log(Math.sqrt(x))
// console.log(Math.abs(x))

// program of Pythogorous c = squt(pow(a, 2) + pow(b, 2));

// let a;
// let b;
// let c;

// document.querySelector('#submit').onclick = () => {
//     a = document.getElementById('first').value;
//     b = document.getElementById('second').value;
//     c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//     document.getElementById('result').innerHTML = "Result: "+c;
//     document.getElementById('first').value = "";
//     document.getElementById('second').value = "";
// }

// let age;
// document.querySelector('#submit').onclick = () => {
//     age = document.getElementById('age').value;

// if(age < 18) {
//         document.getElementById('result').innerHtml = 'You have to wait to vote!'
//     }
// else if(age > 18 && age < 85) {
//     document.getElementById('result').innerHTML = 'You are Old Enough to Vote!'
// }

// else {
//     document.getElementById('result').innerHtml = 'you have done enough, you can take rest!'
// }
// }

// let Name;
// let Age;
// let male;
// let female;
// let Gender;
// let Married;

// document.querySelector('#submit').onclick = () => {
//     console.log('result: ');
//     // Name = document.getElementById('name').value;
//     // Age = document.getElementById('age').value;
//     male = document.getElementById('Male').value;
//     if(male.checked) {
//         Gender = 'Male';
//     }
//     else {
//         Gender = 'Female';
//     }
//     Married = Married.checked ? 'Yes' : 'No';
//     // console.log('Name: ', Name)
//     // document.getElementById('Name').innerHTML = Name;
//     // document.getElementById('Age').innerHTML = Age;
//     document.getElementById('Gender').innerHTML = Gender;
//     document.getElementById('Married').innerHTML = Married;
// }
// let name;
// let number;
// console.log("Before: "+name);
// console.log("Before: "+number);
// name = "Javascript";
// number = 789;
// document.getElementById('heading').innerHTML = "Hello "+ name;
// console.log("After: "+name);
// console.log("After: "+Number(name));

// -------------------------------------area-----------------------------------
// let area;
// let height;
// let width;

// height = window.prompt("Enter Height");
// width = window.prompt("Enter width");

// area = getArea(width, height);

// console.log("The area: "+area);

// function getArea(width, height) {
//     return width * height;
// }

// -------------------------Ternary Operator---------------------------------------
// let age = window.prompt("Enter your Age: ");

// console.log(age>18 ? "Your are Adult" : "You have to grow!");

//console.log("window.name: "+window.name);

// -----------------------------------------------------number.toLocaleString(locale, {options})-----------------------------------
// let number = 123456.789;

// let number1 = number.toLocaleString("en-US", {style: "currency", currency: "USD"});
// let number2 = number.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
// let number3 = number.toLocaleString("de-DE", {style: "currency", currency: "EUR"});
// console.log(number1);
// console.log(number2);
// console.log(number3);

// ----------------------------------------Arrays---------------------------------------------
//let fruits = ["Bananas", "Apples", "Pinapple", "Oranges", "Grapes"];

// fruits.push("Dragon fruit"); // adds new element to the array at the last.
// fruits.pop();  // removes the last added element.
// for(let fruit of fruits) {
//     document.getElementById("data").innerHTML = fruit;
//     console.log(fruit);
// }

// fruits.unshift("coconuts"); // adds new element at the beggining of the array.
// fruits.shift();  // removes the element at the beggining of the array.

// for(let i =0; i<= fruits.length-1; i++) {
//     console.log(fruits[i]);
// }

// fruits = fruits.sort();
// fruits = fruits.sort().reverse();

// for(let fruit of fruits) {
//     console.log(fruit);
// }

// --------------------------------------------Spread Operator---------------------------------------

// ---> Spread operator seperates the all the numbers or elements in an array.
// let numbers = [1, 5, 5, 8, 9, 12, 6, 3, 15];
// let userName = "Bro Code";

// console.log(Math.max(numbers));  // result: naN
// console.log(Math.max(...numbers)); // result: 15


// console.log(...userName);


// let arr1 = ["ram", "sai", "vinay"];
// let arr2 = ["karthik", "shanshank", "Joyson"];

// // arr1.push(arr2); // result: ["ram", "sai", "vinay", ["karthik", "shashank", "Joyson"]];
// arr1.push(...arr2); // result: ["ram", "sai", "vinay", "karthik", "shashank", "Joyson"];

// for(let arr of arr1){
//     console.log(arr);
// }



// ------------------------------rest parameter--------------------------------------------
// --> rest parameter can be used for multiple parameters added in same fucntion. (...);

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// console.log(sum(a,b, c));

// function sum(...numbers) {
//     let total = 0;
//     for(let number of numbers){
//         total += number;
//     }
//     return total;
// }


// -------------------------callback---------------------------------------------

// --> a function is passed as a argument to another function.

// sum(2, 7, displayConsole);
// sum(2, 7, displayDOM);

// function sum(x, y, callback){
//     callback(x+y);
// }

// function displayConsole(output){
//     console.log(output);
// }

// function displayDOM(output){
//     document.getElementById("data").innerHTML = output;
// }

// ----------------------------------arrays.forEach-----------------------------------------
// let students = ["Harry", "Ron", "Hermione"];

//     students.forEach(print);

// function print(output){
//     console.log(output); // Harry, Ron, Hermione
// }

//------------------------------------array.map()--------------------------------------------
// ---> executes a provided callback function once for a array element and creates a new array.

// let numbers = [1,4,6,9,13];
// let squares = numbers.map(square);
// let cubes = numbers.map(cube)

// squares.forEach(print);
// cubes.forEach(print);

// function square(element){
//     return Math.pow(element, 2);
// }

// function cube(element){
//     return Math.pow(element, 3);
// }

// function print(output){
//     console.log(output);
// }


// ----------------------------------------array.filter()---------------------------------------------
// --> creates a new array with all the elements that pass the test provided by a function.

// let ages = [18, 16, 21, 12, 34, 87];
// let Adults = ages.filter(checkAge);

// Adults.forEach(print);


// function checkAge(element){
//     return element >= 18;
// }

// function print(output){
//     console.log(output);
// }

// ------------------------------------array.reduce()----------------------------------------------------
// --> reduce method will reduce an array to a single value.

// let prices = [34, 199, 239, 43, 65, 21];
// let total = prices.reduce(checkOut);  // reduce(total, element) --> total will accumelant will be constant and element will be array to add/subtract to total.

// console.log(`The total amount will be $${total}!`);

// function checkOut(total, element){
//     return total + element;
// }

// ---------------------------------------Nested functions------------------------------------------------

// let userName = "Bro";
// let userInbox = 4;

// login();

// function login() {
//     displayUserName();
//     displayMessages();

//     function displayUserName() {
//         console.log(`Welcome ${userName}!`);
//     }

//     function displayMessages() {
//         console.log(`You have ${userInbox} new Messages!`)
//     }
// }

// ----------------------------------------------Closures---------------------------------
// --> A function with preserved and a private data, give you access to an outer function's scope from a inner fucntion.


// -----------------------------------------Map()------------------------------------------
// --> Map is an Object that holds the data in "key-value" format.

// let store = new Map([
//     ["T-shirt", 250],
//     ["Jeans", 650],
//     ["Shirt", 450],
//     ["Shoes", 600]
// ])

// store.get("Shoes"); // displays the shoes cost.
// store.set("hat", 120) // adds to the Map list
// console.log(store.has("hat")); // true
// store.delete("hat"); // deletes the hat field from Map object.
// console.log(store.has("hat")); // false
// console.log(store.size) // 4

// store.forEach((value, key) => console.log(`${key}: Rs${value}`));

// ----------------------------------OOPS-----------------------------------------------------------
// -----------------------------Objects--------------------------------------------------------------
// -> A group of properties and methods.

// const OLA = {
//     model: "S1 Pro",
//     year: 2022,
//     color: "Jet black",
//     topSpeed: 95,
//     totalKMS: 106
// }

// console.log(`The color of my ola is ${OLA.color}`);
// console.log(`The top speed of my ola is ${OLA.topSpeed} kmpr`);

// ------------------------------this--------------------------------------------------------------------
// --> 'this' is the reference of a particular Object, the object depends on immediate context.

// const Car = {
//     model: "Tiago",
//     company: "TATA",
//     color: "Midnight blue",

//     drive: function() {
//         console.log(`you are driving ${this.company} ${this.model}`)
//     }
// }

// Car.drive();

//--------------------------------Classes---------------------------------------------------
// --> 'classes' are the blueprint of creating objects.

// class Player {
//     name = "";
//     score = 0;
//     matches = 0;

//     ODI(){
//         console.log(`${this.name} have played ${this.matches} matches and scored ${this.score} runs in ODI.`)
//     }
//     Test(){
//         console.log(`${this.name} have played ${this.matches} matches and scored ${this.score} runs in Test.`)
//     }
//     T20(){
//         console.log(`${this.name} have played ${this.matches} matches and scored ${this.score} runs in T20.`)
//     }
// }

// const virat = new Player();
// virat.name = "Virat";
// virat.score = 10000;
// virat.matches = 125;
// virat.ODI();

// const sehwag = new Player();
// sehwag.name = "Sehwag";
// sehwag.matches = 109;
// sehwag.score = 12000;
// sehwag.ODI();

// -------------------------------------------Constructor------------------------------------------------
// --> "constructor" is a special method in Class which allow you to add arguments and assigns properties.

// class Vehicle {
//     constructor(name, model, type, wheels, color) {
//         this.name = name;
//         this.model = model;
//         this.type = type;
//         this.wheels = wheels;
//         this.color = color;
//     }
//     Drive() {
//         console.log(`${this.name} is driving ${this.color} colored ${this.model} ${this.type} which has ${this.wheels} wheels!`)
//     }
// }

// const TATA = new Vehicle("Vinay", "Tiago", "Car", 4, "Mignight blue");
// TATA.Drive();

// const Hundai = new Vehicle("Sainath", "Shift", "Car", 4, "Grey");
// Hundai.Drive();

// const OLA = new Vehicle("Jayasimha", "S1 Pro", "EV scooter", 2, "Jet Black");
// OLA.Drive();

// const Bajaj = new Vehicle("Amit Pal", "Pulser 150 CC", "Bike", 2, "Red");
// Bajaj.Drive();

// const Yamaha = new Vehicle("Ram", "Fasinoo", "Scooter", 2, "Blue");
// Yamaha.Drive();

// -----------------------Static keyword---------------------------------------------------------
// --> static belongs to the class not to object or properties.

// class Car {
//     static numberOfCars = 0;
//     Go() {
//         console.log("Cars are started moving!");
//         Car.numberOfCars++;
//     }
// }

// const car1 = new Car();
// const car2 = new Car();
// const car3 = new Car();
// car1.Go();
// car2.Go();
// car3.Go();

// console.log(Car.numberOfCars);

// ------------------------------Inheritance----------------------------------------------
// --> A child class can inherit the all the methods, properties of the parent class or another class.

// class Animal {
//     Alive = true;

//     eat() {
//         console.log(`This ${this.name} is eating!`);
//     }

//     sleep() {
//         console.log(`This ${this.name} is eating!`);
//     }
// }
// class Rabbit extends Animal {
//     name = "Rabbit";

//     run() {
//         console.log(`The ${this.name} is running!`);
//     }
// }

// class Fish extends Animal{
//     name="Fish";

//     swim() {
//         console.log(`This ${this.name} is Swimming!`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();

// console.log(fish.Alive);

// fish.eat();
// fish.sleep();
// fish.swim();

// --------------------------Super()----------------------------------------
// --> super() is reference of parent class and comonly used to invoke constructor of a parent class.

// class Animal {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// class Rabbit extends Animal {

//     constructor(name, age, runSpeed) {
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }
// }
// class Fish extends Animal{

//     constructor(name, age, swimSpeed){
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }
// }

// class Hawk extends Animal{

//     constructor(name, age, flySpeed){
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }
// }

// const rabbit = new Rabbit("rabbit", 2, 45);
// const fish = new Fish("fish", 3, 65);
// const hawk = new Hawk("hawk", 4, 200);


// console.log("Name: ", rabbit.name);
// console.log("Age: ",rabbit.age);
// console.log("Speed: ",rabbit.runSpeed);

// console.log("Name: ", fish.name);
// console.log("Age: ",fish.age);
// console.log("Speed: ",fish.swimSpeed);

// console.log("Name: ", hawk.name);
// console.log("Age: ",hawk.age);
// console.log("Speed: ",hawk.flySpeed);

// ----------------------------------getters & setters----------------------------------------------
// Getters --> binds the object property to a function when a property is accessed.
// Setters --> binds the object property to a function when a property is assigned.

// class Car {
//     constructor(power){
//         this._gas = 25;
//         this._power = power;
//     }
//     get power(){
//         return `${this._power}hp` 
//     }
//     get gas() {
//         return `${this._gas}L (${this._gas/50 * 100}%)`;
//     }

//     set gas(value) {
//         if(value > 50){
//             value = 50;
//         }
//         else if(value < 0){
//             value = 0;
//         }
//         this._gas = value;
//     }
// }

// const tata = new Car(345)

// tata.gas = 10;
// console.log(tata.power);
// console.log(tata.gas);

// --------------------------Anonymus Objects-----------------------------------

// class Card {
//     constructor(value, suit) {
//         this.value = value;
//         this.suit = suit;
//     }
// }

// const cards = [new Card("A", "King"),
//                 new Card("2", "King"),
//                 new Card("2", "Sperds"),
//                 new Card("9", "Joker")
//               ]

// cards.forEach(card => console.log(`${card.value} ${card.suit}`));

// -----------------------------------setTimeout()------------------------------------------
// --> It execute the function after the particular time (milliseconds).

// let timer1 = setTimeout(firstMessage, 8000);
// let timer2 = setTimeout(secondMessage, 2000);
// let timer3 = setTimeout(thirdMessage, 6000);

// function firstMessage() {
//     console.log(`Wakeup in the morning!`);
// }

// function secondMessage() {
//     console.log(`get ready for GYM and also for office!`)
// }

// function thirdMessage() {
//     console.log(`return to home from office ASAP!`)
// }

// document.getElementById("myButton").onclick = function() {

//     clearTimeout(timer1)
//     clearTimeout(timer2)
//     clearTimeout(timer3)
// }

//------------------------------setInterval()----------------------------------------------------
// --> It repeats the function after a interval of time.

// let count = 0;

// let x = window.prompt("Enter the max number?");
// x = Number(x);

// let timer = setInterval(countUp, 1000);

// function countUp() {
//         count++;
//         console.log(count);
//         if(count >= x){
//             clearInterval(timer);
//         }
// }

// ----------------------------Date Objects---------------------------------------------

// console.log(date.getFullYear());
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getMilliseconds());


// date.setFullYear(1995);
// date.setMonth(1)
// date.setDate(9);
// console.log(date);
// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString());


// setInterval(getTime, 1000);

// function getTime() {
//     let date = new Date();
//     document.getElementById('data').innerHTML = formatTime();
    
// formatTime();
// function formatTime() {
//     let hours =  date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let AmOrPm = hours >= 12 ? "PM" : "AM";

//     hours = (hours % 12) || 12;
//     return `${hours}:${minutes}:${seconds} ${AmOrPm}`
// }

// }


// document.getElementById('currentDate').onclick = function() {
 
//}

// -------------------------------Synchronous/Asynchronous--------------------------------
// --> Synchronous: code of excecution in step by step process.
// console.log("START");
// console.log("This is a Synchronous Code!");
// console.log("END");

// --> Asynchronous : code of excecution in step by step wont stop when API fetching and DB data to be fatch (only this functions wait for load and display once done!)

// console.log("START");
// setTimeout(() => console.log("This is a Asynchronous code! (waits for 1 second and displays!)"), 1000);
// console.log("END");


// -------------------------------------console.time()/timeEnd()------------------------------------
// --> console.time() is used to measure for the function or method to take time and displays.

// console.time("Response Time");
// alert("enter Ok button to check time!");
// console.timeEnd("Response Time");  // both should contain the same subject inside(eg: Response Time).

// ----------------------------------Promise()---------------------------------
// --> Promise result the asynchronus result to the synchronous result.

// let promise = new Promise((resolve, reject) => {
//     let filedLoaded = false;

//     if(filedLoaded) {
//         resolve("File Loaded!")
//     }
//     else {
//         reject("File Not Loaded!")
//     }
// });

// promise.then((result) => console.log(result))
//        .catch(error => console.log(error));

// ------------------------------Async/Await--------------------------------------------------------
// --> async:- It makes a function to return a promise.
// --> await:- It makes a function to wait for a promise.

// Method 1:-
// const fileLoad = async () => {
//     let fileUpload = await true;
//     if(fileUpload) {
//         return "File uploaded Successfully!"
//     }
//     else {
//         throw "File Upload failed!"
//     }
// }

// fileLoad().then(result => console.log(result))
//         .catch(error => console.log(error));

// Method 2:-

// const UploadFile = async () => {
//     let fileDone = true;
//     if(fileDone)
//         return "File Executed!"
//     else
//         throw "Failed!"
// }

// const display = async () => {
//     try {
//     document.getElementById('data').innerHTML = await UploadFile();
//     }
//     catch (error) {
//         document.getElementById('data').innerHTML = error;
//     }
// }

// display();

// -----------------------------------------ES6 Modules----------------------------------------

// add type="module" at <script type="module" src="index.js"></script>

// import {add, sub, square} from "./Math_Util.js";

// let a = window.prompt("Enter the Value: ");
// let b = window.prompt("Enter the another value: ");

// a = Number(a);
// b = Number(b);

// // console.log(add(a,b));
// // console.log(sub(a,b))
// console.log(square(a,b));

// ---------------------------------add/change HTML Elements-----------------------------------------
// --> HTML elements can be added or changed by 'innerHTML'(XXS vulnerable) or 'textContent'.

// // creating HTML Element:-
// const header = document.createElement("h1");
// header.textContent = "Welcome to the MyHome!";
// document.body.append(header);

// // Changing HTML Element:-
// const myList = document.querySelector("#fruit");
// const listItem = document.createElement("li");
// listItem.textContent = "Mangos";
// myList.append(listItem);

// --------------------------------changing CSS Elements------------------------------------------

// let title = document.getElementById('myTitle');
// title.style.color = "teal";
// title.style.textAlign = "center";
// document.body.style.backgroundColor = "skyblue";

//-----------------------------Events------------------------------------------------------------------

// document.getElementById("myButton").onclick = () => {
//     alert("You have clicked on button!");
// };

// document.body.onload = () => {
//     alert("You have clicked on button!");
// }

//----------------------------------------addEventListner-----------------------------------------------

// const element = document.getElementById('innerDiv');

// element.addEventListener('mouseover', changeRed);
// element.addEventListener('mouseout', changeGreen);

// function changeRed() {
//     element.style.backgroundColor = "red";
// }

// function changeGreen() {
//     element.style.backgroundColor = "lightgreen";
// }

// -------------------------------------show/hide HTML Elements---------------------------------
// let clickEvent = document.getElementById('toggle');
// let imgElement = document.getElementById('img');
// // document.getElementById('toggle').onclick = () => {
// //     imgElement.style.display = "none";
// // };

// clickEvent.addEventListener('click', () => {
//     if(imgElement.style.display == 'none') {
//         imgElement.style.display = 'block'
//     }
//     else {
//         imgElement.style.display = 'none';
//     }
// });

//--------------------------------------key presess--------------------------------------------------
// window.addEventListener('keyup', event => console.log(event.key));

//-----------------------------------window----------------------------------------------------------
//console.log(window);
// --------------------------------------cookie----------------------------------------------------
// --> used to store user saved information in name=value pair.
// --> to delete stored cookies add past date or year in below format.

  //  console.log(navigator.cookieEnabled); // if true --> we can add cookies to the browser.
    
    // document.cookie = "firstName=java; expires=wed, 1 september 2001 12:00:00 IST";
    // document.cookie = "lastName=script; expires=wed, 1 september 2001 12:00:00 IST";

    // console.log(document.cookie);












