//২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে। 
// The value of a constant can't be changed through reassignment
// The value of a let can be chaned through reassisgnment.

//same name only excute var . but let and const same name are not excute. it show error.
var matter = 45;
matter = 60;

let age = 12;
age = 14;

const countryNsme = "Bangla"
countryNsme = "India"
console.log(matter, age, countryNsme);



// function constTest() {
//     const x = 1;
//     if (true) {
//         const x = 2;  // same variable!
//         console.log(x);  // 2
//     }
//     console.log(x);  // 2
// }
// constTest();

// function letTest() {
//     let x = 1;
//     if (true) {
//         let x = 2;  // different variable
//         console.log(x);  // 2
//     }
//     console.log(x);  // 1
// }

// letTest();

// function varTest() {
//     var x = 1;
//     if (true) {
//         var x = 2;  // same variable!
//         console.log(x);  // 2
//     }
//     console.log(x);  // 2
// }
// varTest();

