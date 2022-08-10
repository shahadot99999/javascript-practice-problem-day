//৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। 

var num1 = 15;
var num2 = 3;
function adding() {
    var add = num1 + num2;
    console.log("your adding value is" + ' ' + add);
}
adding();

function subtraction() {
    var sub = num1 - num2;
    console.log("your subtract value is" + ' ' + sub);
}
subtraction();

function multiple() {
    var multi = num1 * num2;
    console.log("your multiple value is" + ' ' + multi);
}
multiple();

function divided() {
    var divid = num1 + num2;
    console.log("your divide value is" + ' ' + divid);
}
divided();

function remainder() {
    var remain = num1 % num2;
    console.log("your remain value is" + ' ' + remain);
}
remainder();