//৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 

var a = 7;
var b = "bangla";

function andor() {
    if (a > 14 && b) {
        console.log("Your operator is and")
    }

    else if (a || b) {
        console.log("Your operator is or")
    }
    else {
        console.log("It is not operator.")
    }
}

andor();