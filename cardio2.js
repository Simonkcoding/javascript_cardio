// 1. Longest Word
const longestWord = (sentence) => {
    // remove non letters
    const word = sentence.toLowerCase().match(/[a-z0-9]+/gi);
    // sorted by length
    const sorted = word.sort((a, b) => {
        return b.length > a.length;
    })
    // multiple longest word
    const longestArr = sorted.filter(word => {
        return sorted[0].length === word.length;
    })

    if (longestArr.length === 1) {
        return longestArr[0];
    } else {
        return longestArr;
    }
}

console.log(longestWord("how are you doing, simon?"));

// 2. Array Chunking
const chunkArray = (arr, len) => {
    // method 1
    // let chunkedArr = [];
    // let i=0;
    // while(i<arr.length){
    //     // slice out from the index + chunk length
    //     chunkedArr.push(arr.slice(i,i+len));
    //     i+=len;
    // }

    // return chunkedArr;

    // method 2- forEach
    const chunkedArr = [];
    arr.forEach(val => {
        //get last element
        const last = chunkedArr[chunkedArr.length - 1];
        // check if there is a last and if equal to chunk length
        if (!last || last.length === len) {
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }
    });
    return chunkedArr;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6], 2));

// 3. Flatten Array
const falttenArr = (arrs) => {
    return arrs.reduce((accArr, nextArr) => {
        return accArr.concat(nextArr);
    })
}
console.log(falttenArr([[1, 2, 3], [4, 5, 6]]));

// 4. Anagrams
const isAnagram = (str1, str2) => {
    return formatStr(str1) === formatStr(str2);
}
//helper for 4
const formatStr = (str) => {
    // replace non characters with ""
    return str.replace(/[^\w]/g, "")
        .toLowerCase().split("").sort().join("");
}

console.log(isAnagram("below", "elbow"));

// 5. Letter Changes
const letterChanges = (str) => {
    let newStr = str.replace(/[a-z]/gi, char => {
        if (char === "z" || char === "Z") {
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    })

    newStr = newStr.replace(/a|e|i|o|u/gi,vowel=>{
        return vowel.toUpperCase();
    })
    return newStr;
}

console.log(letterChanges("Hello Zhere"));