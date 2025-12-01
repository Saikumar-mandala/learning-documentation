# JavaScript Interview Questions (A to Z)

## A - Arrow Functions
**Q: What are Arrow Functions?**
A: Arrow functions are a shorter way to write functions in JavaScript. They use the `=>` syntax.
```javascript
// Old way
function add(a, b) { return a + b; }

// Arrow function
const add = (a, b) => a + b;
```
They also handle the `this` keyword differently (they don't have their own `this`).

## C - Closures
**Q: What is a Closure?**
A: A closure is when a function "remembers" the variables from outside of it, even after the outer function has finished running.
```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++; // inner remembers count from outer
    return count;
  };
}
```

## D - Destructuring
**Q: What is Destructuring?**
A: Destructuring is a way to unpack values from arrays or properties from objects into distinct variables.
```javascript
// Object
const person = { name: 'John', age: 30 };
const { name, age } = person;

// Array
const numbers = [1, 2];
const [first, second] = numbers;
```

## E - Event Loop
**Q: What is the Event Loop?**
A: JavaScript is single-threaded (can only do one thing at a time). The Event Loop is a mechanism that allows JavaScript to perform non-blocking operations (like waiting for data). It checks if the call stack is empty and then pushes tasks from the callback queue to the stack.

## H - Hoisting
**Q: What is Hoisting?**
A: Hoisting is JavaScript's behavior of moving declarations to the top of the code before execution.
- `var` variables are hoisted and initialized with `undefined`.
- `let` and `const` are hoisted but not initialized (you get an error if you use them before declaring).
- Function declarations are fully hoisted.

## L - Loops (5 Types)
**Q: What are the different types of loops in JavaScript?**
A: There are 5 main types of loops:

### 1. `for` loop
The standard loop. Best when you know how many times to loop.
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
```

### 2. `while` loop
Loops **while** a condition is true. Best when you don't know how many times to loop.
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### 3. `do...while` loop
Similar to `while`, but runs **at least once** before checking the condition.
```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

### 4. `for...of` loop (ES6)
Used for **iterables** (Arrays, Strings). It gives you the **values**.
```javascript
const colors = ['red', 'green', 'blue'];
for (const color of colors) {
  console.log(color); // "red", "green", "blue"
}
```

### 5. `for...in` loop
Used for **Objects**. It gives you the **keys** (properties).
```javascript
const person = { name: 'Alice', age: 25 };
for (const key in person) {
  console.log(key, person[key]); // "name Alice", "age 25"
}
```

**Key Difference: `for...of` vs `for...in`**
- `for...of`: Iterates over **values** (Arrays).
- `for...in`: Iterates over **keys** (Objects).

## L - Let, Const, Var
**Q: What is the difference between var, let, and const?**
A:
- **var:** Old way. Function scoped. Can be re-declared. Hoisted.
- **let:** New way (ES6). Block scoped `{ }`. Can be updated but not re-declared in the same block.
- **const:** New way (ES6). Block scoped. Cannot be updated or re-declared. Used for values that don't change.

## M - Map, Filter, Reduce
**Q: Explain Map, Filter, and Reduce with examples.**
A: These are the most important array methods in JavaScript (and React). They all create a new array (or value) and do **not** mutate the original array.

### 1. Map (`.map()`)
Creates a **new array** by applying a function to every element.
- **Use Case:** Transforming data (e.g., converting a list of objects to a list of names).
- **Returns:** A new array of the *same length*.
```javascript
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2); 
// [2, 4, 6]
```

### 2. Filter (`.filter()`)
Creates a **new array** with only elements that **pass a test** (return true).
- **Use Case:** Searching, removing items.
- **Returns:** A new array (can be smaller than original).
```javascript
const nums = [1, 2, 3, 4];
const evens = nums.filter(n => n % 2 === 0); 
// [2, 4]
```

### 3. Reduce (`.reduce()`)
Reduces an array to a **single value** (number, string, object, etc.) by executing a reducer function on each element.
- **Use Case:** Summing numbers, grouping data.
- **Syntax:** `array.reduce((accumulator, current) => { ... }, initialValue)`
```javascript
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0); 
// 10
```

**Q: What is the difference between `map` and `forEach`?**
A:
- **map:** Returns a new array. Chainable (you can call `.filter()` after it). Used when you want to transform data.
- **forEach:** Returns `undefined`. Not chainable. Used when you just want to loop (side effects like logging).

## P - Promises
**Q: What is a Promise?**
A: A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation. It's like a real-life promise: "I will give you the data later."
It has 3 states:
1. **Pending:** Still waiting.
2. **Fulfilled (Resolved):** Success, got the data.
3. **Rejected:** Failed, got an error.

## S - Spread Operator
**Q: What is the Spread Operator (...) ?**
A: It allows you to expand an array or object into individual elements.
```javascript
const oldArr = [1, 2];
const newArr = [...oldArr, 3, 4]; // [1, 2, 3, 4]
```

## T - This
**Q: What is `this`?**
A: `this` refers to the object that is currently executing the code. Its value depends on how the function is called.
- In a method, `this` refers to the object.
- In a standalone function, `this` refers to the global object (or undefined in strict mode).

## T - Type Coercion
**Q: What is Type Coercion?**
A: It is the automatic conversion of values from one data type to another.
Example: `1 + "2"` becomes `"12"` (number converted to string).
`==` performs type coercion, `===` does not.

---

# Part 2: Common Coding Challenges

**1. Reverse a String**
```javascript
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // "olleh"
```

**2. Check for Palindrome**
A palindrome is a word that reads the same backward as forward (e.g., "racecar").
```javascript
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
console.log(isPalindrome("racecar")); // true
```

**3. Find the Longest Word**
```javascript
function findLongestWord(str) {
  const words = str.split(' ');
  let longest = '';
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
```

**4. Remove Duplicates from Array**
```javascript
const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(numbers)];
console.log(unique); // [1, 2, 3, 4, 5]
```

**5. FizzBuzz**
Print numbers 1 to 100. If divisible by 3, print "Fizz". If by 5, print "Buzz". If both, "FizzBuzz".
```javascript
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}
```

**6. Sum of Array of Objects (Reduce)**
Calculate the total price of items in a shopping cart.
```javascript
const cart = [
  { item: "Book", price: 20 },
  { item: "Pen", price: 5 },
  { item: "Notebook", price: 10 }
];

const total = cart.reduce((acc, curr) => acc + curr.price, 0);
console.log(total); // 35
```

**7. Flatten an Array**
Convert a nested array into a single flat array.
```javascript
const nested = [1, [2, 3], [4, [5, 6]]];
const flat = nested.flat(Infinity);
console.log(flat); // [1, 2, 3, 4, 5, 6]
```

**8. Check for Anagram**
Two strings are anagrams if they use the same characters in the same quantity (e.g., "listen" and "silent").
```javascript
function isAnagram(str1, str2) {
  const normalize = str => str.toLowerCase().split('').sort().join('');
  return normalize(str1) === normalize(str2);
}
console.log(isAnagram("listen", "silent")); // true
```

**9. Factorial of a Number**
Calculate the factorial of a number (e.g., 5! = 5 * 4 * 3 * 2 * 1 = 120).
```javascript
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
```

**10. Find Missing Number in Array**
Find the missing number in an array of 1 to N.
```javascript
function findMissing(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
  return expectedSum - actualSum;
}
console.log(findMissing([1, 2, 4, 5, 6])); // 3
```

**11. Count Occurrences of Character**
Count how many times a specific character appears in a string.
```javascript
function countChar(str, char) {
  return str.split(char).length - 1;
}
console.log(countChar("banana", "a")); // 3
```

**12. Title Case a Sentence**
Capitalize the first letter of each word in a sentence.
```javascript
function titleCase(str) {
  return str.toLowerCase().split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}
console.log(titleCase("i love javascript")); // "I Love Javascript"
```

**13. Find Largest Number in Array**
Find the largest number in an array.
```javascript
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([10, 5, 100, 2])); // 100
```

**14. Remove Falsy Values**
Remove all falsy values (false, null, 0, "", undefined, NaN) from an array.
```javascript
function removeFalsy(arr) {
  return arr.filter(Boolean);
}
console.log(removeFalsy([7, "ate", "", false, 9])); // [7, "ate", 9]
```

**15. Truncate a String**
Truncate a string if it is longer than the given maximum string length.
```javascript
function truncateString(str, num) {
  if (str.length <= num) return str;
  return str.slice(0, num) + "...";
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); 
// "A-tisket..."
```
