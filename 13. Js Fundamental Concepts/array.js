//array,setIndex,indexOf

var friendAge = [12, 14, 24, 23, 19];
// console.log(friendAge);
// console.log(friendAge[1]);
// console.log(friendAge[7]);
// console.log(friendAge.indexOf(141));

//Array push,pop,array length

// friendAge.push(0);
// friendAge.push(01);
// friendAge.push(02);
// friendAge.push(03);
// console.log(friendAge);
// console.log(friendAge.length);

// friendAge.pop();
// friendAge.pop();
// console.log(friendAge);
// console.log(friendAge.length);

// Array add and remove elements from the beginning and slice elements

var teaLine = ["Kalam", "Salam", "Balam"];
console.log(teaLine);
teaLine.push("Jalam");
console.log(teaLine);
teaLine.pop();
console.log(teaLine);

teaLine.shift(); //suru theke remove kore >> shift()
console.log(teaLine);

teaLine.unshift("Member", "Chairrman", "Montri", "Minister", "Fatakesto"); //suru te add korar jonne >> unshift()
console.log(teaLine);

var part = teaLine.slice(2);
console.log(part);
console.log(teaLine.slice(4));
console.log(teaLine.slice(1));
console.log(teaLine.slice(2, 5)); //(starttinIndex,endingIndex-1)
