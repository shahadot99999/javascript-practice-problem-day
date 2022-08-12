//৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

var arr = [10, 20, 30, 40, 50, 70, 80, 90];

// find show how many elements.
var len = arr.length;
console.log(arr.length);

//change 4 th number possition
arr[3] = 45;
console.log(arr);

//adding two number
var arr1 = arr[1] + arr[2];
console.log(arr1);

//remove last  element 
// arr.pop();
// console.log(arr);
//remove specefic to last
// arr.splice(6);
// console.log(arr);

//remove specfic element but not others.
delete arr[6];
console.log(arr);