// 1. String Reversal
const reverseString = (str) => {

    // method 1 - build in array methods
    //return str.split("").reverse().join("");

    //method 2 - reversed for loop
    // let revStr = "";
    // for (let i = str.length; i >= 0; i--) {
    //     revStr += str.substring(i, i + 1);
    // }
    // return revStr;

    //method 3 - reduce
    return str.split("").reduce((acc, cur) => {
        return cur + acc;
    }, "")
}

console.log(reverseString("hello"));

// 2. Validate Palindromes
const isPalindrome = (str) => {
const revStr = str.split("").reverse().join("");
return str === revStr;
}

console.log(isPalindrome("racecar"));

// 3. Integer Reversal


// 4. Capitalize Letters


// 5. Find The Max Character


// 6. FizzBuzz Challenge

