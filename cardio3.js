//Add All
const addAll = (...argument) => {

    const ans = argument.reduce((a, b) => a + b);

    return ans;

    // ES5
    var args = Array.prototype.slice.call(argument);
    var total = 0;
    for (var i = 0; i < args.length; i++) {
        totail += arg[i];
    }
    return total;
}

console.log(addAll(1, 2, 3, 4, 5, 10, 20));

// Sum Primes
const sumPrime = (num) => {
    let numArr = [];
    for (let i = 2; i <= num; i++) {
        numArr.push(i);
    }
    let ans = numArr.filter(num => isPrime(num)).reduce((a, b) => a + b);
    return ans
}

const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(sumPrime(100));

// Seek & Destroy
const seekAndDestroy = (arr, ...target) => {
    return arr.filter(elem => !target.includes(elem));
}

console.log(seekAndDestroy([1, 2, 3, 4, 5, "hello", "a"], 3, 4, "hello"));

//sort by height
const sortByHeight = (arr) => {
    let arr1 = [];
    let arr2 = [];
    arr.forEach((elem, i) => {
        if (elem === -1) {
            arr1.push(i);
        } else {
            arr2.push(elem);
        }
    })
    arr2.sort((a, b) => a - b);
    console.log(arr2);
    arr1.forEach((elem,i)=>arr2.splice(arr1[i],0,-1));
    return arr2;
}

console.log(sortByHeight([-1,-1,23,1,-2,-1,35,2,-1]));
