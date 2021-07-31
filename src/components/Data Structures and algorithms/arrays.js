//Arrays in JavaScript 
//An array is a special variable that can hold more than one value at a time



//Creating an Array
const cars = ["Saab","Volvo","BMW"]; 
//using the new keyword

//const cars = new Array("Saab","Volvo","BMW"); 
document.getElementById("demo").innerHTML = cars; 
console.log("Hello"); 

//Obect 
//Arrays are specialised types of objects
const person = {
    firstName:"John",
    lastName:"Doe",
    age:46
}; 

//Arrays Properties and Methods
cars.length//returns the number of element 
cars.sort() //Sorts the Array

//Looping through the array
//We can also use the forEach method in the for loop place
const fruit = ["Banana","Orange","Apple","Mango"]; 
let fruitLen = fruit.length; 
let text = "<ul>"; 
for(let i=0; i<fruitLen;i++){
    text += "<li>" +fruit[i] +"</li>"; 
} 
text += "</ul>";

document.getElementById("MyArrays").innerHTML = text; 

//Adding Array Elements 
//easiest way is to use the push() method
const fruits = ["Banana","Orange","Apple"]; 
fruits.push("Lemon"); 
console.log(fruits); 

//Diiference between Arrays and Objects
//Arrays use numbered indexes 
//Objects use named indexes
//in JavaScript you do not have to use the new 