var student = {
  id: 121,
  phone: 123,
  name: "Habib",
};
var student2 = {
  id: 111,
  phone: 123,
  name: "Shokun",
};

var phoneNo = student.phone;

console.log(phoneNo);
phoneNo = student["phone"];
console.log(phoneNo);

console.log(student);
console.log(student2);
