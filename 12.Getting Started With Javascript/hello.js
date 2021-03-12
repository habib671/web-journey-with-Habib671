//Variable in Js:
// console.log(7);
// var seenAfter = 21;
// console.log(seenAfter);
// console.log(typeof seenAfter);

// var string = "md ahsan habib";
// var boolean = true;

// var name = "ulala";
// var promise = "I promise I will work HARD to become a programmer";

// console.log(promise.toLowerCase());
// console.log(promise.toUpperCase());
// console.log(promise.indexOf("Hard"));
// console.log(promise.indexOf("HARD"));
// console.log(promise.split(" "));

//Integer float parseInt parseFloat type conversion:
// var number1 = 25;
// var number2 = "25.5";

// console.log(number1 + number2);
// number2 = +number2;
// console.log(number1 + number2);
// number2 = parseFloat(number2);
// console.log(number1 + number2);
// number2 = parseInt(number2);
// console.log(number1 + number2);
// number1 = "" + number1;
// console.log(number1);
// console.log(typeof number1);

// var num1 = 0.1;
// var num2 = 0.2;
// var total = num1 + num2;
// total = total.toFixed(1);
// console.log(total);

//Mathematical Operations in JS:
// var price1 = 25;
// var price2 = 50;
// var result = price1 + price2;
// console.log(result);
// price2 = "50";
// var result = price1 + price2;
// console.log(result);
// var name1 = "Ahsan";
// var name2 = "Habib";
// var fullName = name1 + name2;
// console.log(fullName);
// var fullName = name1 + " " + name2;
// console.log(fullName);

//Math absolute round fllor ceil random:

//absolute:
// var number = -5;
// console.log(number);
// var absoluteNumber = Math.abs(number);
// console.log(absoluteNumber);

//round:
// var number2 = 5.5123;
// var roundNumber = Math.round(number2);
// console.log(roundNumber);
// number2 = 5.49999;
// var roundNumber = Math.round(number2);
// console.log(roundNumber);

//ceil:

// var num1 = 5.0;
// console.log(Math.ceil(num1));
// num1 = 5.001;
// console.log(Math.ceil(num1));

//floor:

// var num2 = 5.0;
// console.log(Math.floor(num2));
// num2 = 5.001;
// console.log(Math.floor(num2));
// num2 = 5.9999;
// console.log(Math.floor(num2));

//random:
//always 0 t 1 er moddhe number asbe:
// var result = Math.random() * 100;
// console.log(Math.round(result));

//Make conditional decision, If-else, comparison:

// var biscuitPrice = 12;
// if (biscuitPrice < 10) {
//   console.log("I will eat the buiscuit");
// } else {
//   console.log("Khali cha is better");
// }

// var jobPaiso = true;
// var savingAmount = 500000;
// if (jobPaiso == true && savingAmount > 200000) {
//   console.log("asho tomar jonne paatri khuji");
// } else {
//   console.log("Tor kopale bia naire pagla");
// }

// Javascript Date Timezone:

var date = new Date("1971-12-16");
console.log(date.getDay);
