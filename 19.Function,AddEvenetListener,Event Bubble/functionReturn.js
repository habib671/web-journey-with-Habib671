function evenify(nums) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num % 2 == 0) {
      console.log(num + ": is an even number");
    } else {
      var empty_arr = [];
      for (let j = 0; j < nums.length; j++) {
        const num_odd = nums[j];
        empty_arr.push(num_odd * 2);
      }
    }
  }
  return empty_arr;
}

nums = [10, 13, 15, 18, 21];
var even_arr = evenify(nums);
console.log(even_arr);
//priya afrin ontora
