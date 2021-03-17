function explain_callback(name, age, task) {
  console.log(name);
  console.log(age);
  task(name);
}

function washHand(name) {
  console.log("Wash your hand, " + name);
}
function takeShower(name) {
  console.log("Take shower," + name);
}
function scrollFacebook(name) {
  console.log("Scroll Facebook, " + name);
}
explain_callback("Ahsan", 24, washHand);
explain_callback("Habib", 21, takeShower);
explain_callback("Moon", 20, scrollFacebook);
