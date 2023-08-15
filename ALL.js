// UPPER CASE & LOWER CASE

var lorem20 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit voluptatibus dolore cupiditate? Commodi deleniti ipsa voluptate dolore consequuntur porro!';

lorem20 = lorem20.toUpperCase();  //? toUpperCase
console.log(lorem20);

lorem20 = lorem20.toLowerCase();  //? toLowerCase
console.log(lorem20);


// INDEXOF & SPLIT

var lorem10 = "Lorem, ipsum, dolor, sit, amet, consectetur, adipisicing, elit, Soluta, quo";

var sitPosition = lorem10.indexOf('sit');  //? indexOf
console.log(sitPosition);

var lorem10Split = lorem10.split('sit');  //? split
console.log(lorem10Split);


// PARSEFLOAT, PARSEINT & TYPEOF

var num = '12125.154';
var num0 = 21;
var num1 = 'BDT';

num = parseFloat(num);  //? parseFloat

num = parseInt(num);  //? parseInt
console.log(num);

var numTypeof = typeof num;  //? typeOf
console.log(numTypeof);

var total = num + num0 + num1;
console.log(total);


// ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION, MODULUS, INCREMENT & DECREMENT

var num2 = 50;
var num3 = 30;

console.log(num2 + num3); //? Addition
console.log(num2 - num3); //? Subtraction
console.log(num2 * num3); //? Multiplication
console.log(num2 / num3); //? Division
console.log(num2 % num3); //? Modulus

num3++ //? Increment
console.log(num3);

num3-- //? Decrement
console.log(num3);


// PREDEFINED - ABSOLUTE, ROUND, CEIL, FLOOR, MINI, MAX & RANDOM

var num4 = -20.554

var sum = Math.abs(num4) //? Math.Absolute
console.log(sum);

var sum0 = Math.round(num4) //? Math.Round
console.log(sum0);

var sum1 = Math.ceil(num4) //? Math.Ceil
console.log(sum1);

var sum2 = Math.floor(num4) //? Math.Floor
console.log(sum2);

var minI = Math.min(1, 2, 3, 4) //? Math.min
console.log(minI);

var max = Math.max(1, 2, 3, 4) //? Math.max
console.log(max);

var lotary = Math.random()  * 100 //? Math.Random
var lotary = Math.round(lotary)
console.log(lotary);

const people = ['raihan', 'jubayer', 'alamin', 'raz', 'nazmul']
const rendomPeople = Math.round(Math.random() * people.length - 1)
console.log(people[rendomPeople]);

let food = ['mango', 'apple', 'orange', 'milk'] 
let rendomFood = Math.round(Math.random() * food.length -1)
console.log(food[rendomFood]);


// IF STATEMENT

var x = 5
var y = 5

if (x == y){
    console.log("this is true.")
};

if (x === y){
    console.log("this is true.")
};

if (x < y){
    console.log("this is true.")
}


// LOGICAL OPERATORS: AND OR & NOT

var age = 23;

if (age >= 18 && age <= 40){
    console.log("this is true.")
};

if (age > 18 || age < 20 ){
    console.log("this is or.")
};

console.log(!(age == 23));


// IF, ELSE IF & ELSE

var time = 10;

if (time > 1 && time < 11){
    console.log("good morning")
}

else if (time > 11 && time < 15 ){
    console.log("good afternoon")
}

else if (time > 15 && time < 20){
    console.log("good night")
}

else{
    console.log("u no more")
}


// TERNARY OPERATOR

var age = 19;
var drive = age >= 18 ? 'yes drive' : 'no  drive';

console.log(drive);

var time = 11;
var drive0 = time > 1 && time < 10 ? 'good morning' : 'good afternoon';
console.log(drive0);


// SWITCH CASE

var month = 5;
switch (month) {
    case 1: console.log('january')
        
        break;
    case 2: console.log('February')
        
        break;
    case 3: console.log('march')
        
        break;
    case 4: console.log('april')
        
        break;
    case 5: console.log('may')
        
        break;
    case 6: console.log('jun')
        
        break;
    case 7: console.log('july')
        
        break;
    case 8: console.log('august')
        
        break;
    case 9: console.log('september')
        
        break;
    case 10: console.log('october')
        
        break;
    case 11: console.log('november')
        
        break;
    case 12: console.log('december')
        
        break;
        
    default: console.log('enter a valid number')
        break;
}

