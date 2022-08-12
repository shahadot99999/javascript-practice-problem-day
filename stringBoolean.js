// ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো।

var bool = true;
function isBoolean() {

    if (typeof bool === 'boolean') {
        console.log('✅ type is boolean');
    } else if (typeof bool === 'string') {
        console.log('✅ type is string');
    }
    else {
        console.log('✅ type is number');
    }
}

isBoolean();
