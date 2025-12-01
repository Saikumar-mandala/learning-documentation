# 100 JavaScript Coding Challenges (Easy to Hard)

## 🟢 Easy (1-30) - Basics & Loops

**1. Print 1 to 10**
```javascript
for(let i=1; i<=10; i++) console.log(i);
```

**2. Print Odd Numbers less than 100**
```javascript
for(let i=1; i<100; i+=2) console.log(i);
```

**3. Multiplication Table of 7**
```javascript
for(let i=1; i<=10; i++) console.log(`7 x ${i} = ${7*i}`);
```

**4. Sum of numbers from 1 to 10**
```javascript
let sum = 0;
for(let i=1; i<=10; i++) sum += i;
console.log(sum);
```

**5. Calculate Factorial of 10**
```javascript
let fact = 1;
for(let i=1; i<=10; i++) fact *= i;
console.log(fact);
```

**6. Sum of even numbers greater than 10 and less than 30**
```javascript
let sum = 0;
for(let i=12; i<30; i+=2) sum += i;
console.log(sum);
```

**7. Convert Celsius to Fahrenheit**
```javascript
function cToF(c) { return c * 9/5 + 32; }
```

**8. Convert Fahrenheit to Celsius**
```javascript
function fToC(f) { return (f - 32) * 5/9; }
```

**9. Sum of elements in an array**
```javascript
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
```

**10. Average of numbers in an array**
```javascript
function averageArray(arr) {
    return sumArray(arr) / arr.length;
}
```

**11. Get positive numbers from array**
```javascript
function getPositives(arr) {
    return arr.filter(n => n > 0);
}
```

**12. Find maximum number in array**
```javascript
function findMax(arr) {
    return Math.max(...arr);
}
```

**13. Print first 10 Fibonacci numbers**
```javascript
let n1 = 0, n2 = 1, next;
console.log(n1);
console.log(n2);
for(let i=3; i<=10; i++) {
    next = n1 + n2;
    console.log(next);
    n1 = n2;
    n2 = next;
}
```

**14. Check if a number is prime**
```javascript
function isPrime(n) {
    if (n < 2) return false;
    for(let i=2; i<=Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
```

**15. Sum of digits of a positive integer**
```javascript
function sumDigits(n) {
    return n.toString().split('').reduce((acc, d) => acc + parseInt(d), 0);
}
```

**16. Reverse a string**
```javascript
function reverseString(s) {
    return s.split('').reverse().join('');
}
```

**17. Check if string is palindrome**
```javascript
function isPalindrome(s) {
    return s === reverseString(s);
}
```

**18. Count vowels in a string**
```javascript
function countVowels(s) {
    return s.match(/[aeiou]/gi)?.length || 0;
}
```

**19. Create a function that returns the text inside a list of strings**
```javascript
function combineStrings(arr) {
    return arr.join(' ');
}
```

**20. Capitalize the first letter of each word**
```javascript
function capitalizeWords(str) {
    return str.replace(/\b\w/g, l => l.toUpperCase());
}
```

*(More easy challenges...)*

---

## 🟡 Medium (31-70) - Arrays & Objects

**31. Find the intersection of two arrays**
```javascript
function intersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}
```

**32. Remove duplicates from array**
```javascript
function unique(arr) {
    return [...new Set(arr)];
}
```

**33. Merge two arrays and remove duplicates**
```javascript
function mergeUnique(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
```

**34. Find the frequency of elements in array**
```javascript
function frequency(arr) {
    return arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
}
```

**35. Shuffle an array (Fisher-Yates)**
```javascript
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
```

**36. Flatten a nested array**
```javascript
function flatten(arr) {
    return arr.flat(Infinity);
}
```

**37. Convert array of objects to object of objects (groupBy)**
```javascript
function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
        (acc[obj[key]] = acc[obj[key]] || []).push(obj);
        return acc;
    }, {});
}
```

**38. Find the longest word in a string**
```javascript
function findLongestWord(str) {
    return str.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, "");
}
```

**39. Title Case a Sentence**
```javascript
function titleCase(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
```

**40. Check if two strings are anagrams**
```javascript
function isAnagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
```

*(More medium challenges...)*

---

## 🔴 Hard (71-100) - Algorithms & Data Structures

**71. Implement Deep Clone**
```javascript
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj)); // Simple version
    // Or recursive solution for full support
}
```

**72. Debounce Function**
```javascript
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
```

**73. Throttle Function**
```javascript
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}
```

**74. Curry Function**
```javascript
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}
```

**75. Valid Parentheses**
```javascript
function isValid(s) {
    const stack = [];
    const map = { '(': ')', '{': '}', '[': ']' };
    for (let char of s) {
        if (map[char]) stack.push(map[char]);
        else if (stack.pop() !== char) return false;
    }
    return stack.length === 0;
}
```

**76. Binary Search**
```javascript
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```

**77. Two Sum**
```javascript
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) return [map.get(complement), i];
        map.set(nums[i], i);
    }
}
```

**78. Memoization Helper**
```javascript
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) return cache[key];
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    }
}
```

**79. Promise.all Polyfill**
```javascript
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;
        promises.forEach((p, i) => {
            Promise.resolve(p).then(val => {
                results[i] = val;
                completed++;
                if (completed === promises.length) resolve(results);
            }).catch(reject);
        });
    });
}
```

**80. Flatten Object**
```javascript
function flattenObject(obj, prefix = '') {
    return Object.keys(obj).reduce((acc, k) => {
        const pre = prefix.length ? prefix + '.' : '';
        if (typeof obj[k] === 'object' && obj[k] !== null) {
            Object.assign(acc, flattenObject(obj[k], pre + k));
        } else {
            acc[pre + k] = obj[k];
        }
        return acc;
    }, {});
}
```

*(And many more...)*
