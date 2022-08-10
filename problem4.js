//৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 

var a = 10;
var b = 8;

function grather() {
    if (a > b) {
        console.log("It is a grather than value")
    }
    return;
}

grather();


// var c = 15;
// var d = 20;
function lessthan() {
    if (a < b) {
        console.log("It is a lessthan than value")
    }
    else {
        console.log("It is not a lessthan than value")
    }
    return;
}

lessthan();


function equal() {
    if (a == b) {
        console.log("It is a equal than value")
    }
    else {
        console.log("It is not a equal than value")
    }

    return;
}

equal();

function notequal() {
    if (a != b) {
        console.log("It is a not equal than value")
    }
    else {
        console.log("It is  a equal than value")
    }

    return;
}

notequal();

function lessthanqual() {
    if (a <= b) {
        console.log("It is a less than equal than value")
    }
    else {
        console.log("It is  a not less equal than value")
    }

    return;
}

lessthanqual();

function gratherthanqual() {
    if (a >= b) {
        console.log("It is a grather than equal than value")
    }
    else {
        console.log("It is  a not grather than equal value")
    }

    return;
}

gratherthanqual();


