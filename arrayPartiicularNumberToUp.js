//১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

var numbers = [70, 80, 82, 85, 75, 90, 65, 61]

function arr() {

    for (var i = 0; i < numbers.length; i++) {
        // inside array 80 up number show
        if (numbers[i] > 80) {
            console.log(numbers[i]);
        }

    }

}
arr();
