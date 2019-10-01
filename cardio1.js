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
const reverseInt = (int) => {
    const revStr = int.toString().split("").reverse().join("");
    const revInt = parseInt(revStr) * Math.sign(int);
    return revInt;
}
console.log(reverseInt(-1234));

// 4. Capitalize Letters
const capitalizeLetter = (str) => {
    //method 1 - for loop
    // const strArr = str.toLowerCase().split(" ");
    // for (let i = 0; i < strArr.length; i++) {
    //     strArr[i] = strArr[i].substring(0, 1).toUpperCase()
    //         + strArr[i].substring(1);
    // }
    // return strArr.join(" ");

    // method 2 - map
    // return str.toLowerCase().split(" ")
    //     .map(word => {
    //       return  word[0].toUpperCase() + word.substr(1);
    //     }).join(" ");

    // method 3- replace
    return str.replace(/\b[a-z]/gi, char => {
        return char.toUpperCase();
    }) //\b = boundary , /g global, i case sensitive
}
console.log(capitalizeLetter("hello world"));

// 5. Find The Max Character
const maxChar = (str) => {
    let charMap = {};
    str.split("").forEach(char => {
        if (!charMap[char]) {
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    })
    let maxNum = 0;
    let maxChar = "";

    for (let char in charMap) {
        if (charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        };
    };
    return maxChar;
}
console.log(maxChar("javatjjjjj"));

// 6. FizzBuzz Challenge
const fizzBuzz = (int) => {
    for (let i = 1; i <= int; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(15);
