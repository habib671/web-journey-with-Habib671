function addNumbers(num1, num2) {
  var sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    const num = arguments[i];
    // console.log(num);
    sum = sum + num;
  }
  return sum;
}

var result = addNumbers(3, 5, 8, 15, 29, 23);
console.log(result);
