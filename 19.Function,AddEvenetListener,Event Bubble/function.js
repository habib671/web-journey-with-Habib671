function evenify(nums) {
  if (nums % 2 == 0) {
    console.log(nums + ": is an even number");
  } else {
    console.log(nums * 2 + ": is an odd number");
  }
}

function evenify_all(nums) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    evenify(num);
  }
}
nums = [10, 14, 17, 19, 20];
evenify_all(nums);
// for (let i = 0; i < nums.length; i++) {
//   const num = nums[i];
//   evenify(num);
//     if (num % 2 == 0) {
//       console.log(num + ": is an even number");
//     } else {
//       console.log(num * 2 + ": is an odd number");
//     }
// }

friends_age = [19, 22, 23, 25, 26];
evenify_all(friends_age);
// for (let i = 0; i < friends_age.length; i++) {
//   const age = friends_age[i];
//   evenify(age);
//     if (age % 2 == 0) {
//       console.log(age + ": is an even number");
//     } else {
//       console.log(age * 2 + ": is an odd number");
//     }
// }
