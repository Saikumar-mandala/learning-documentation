export interface Question {
  id: number;
  question: string;
  answer: string;
  type: 'viva' | 'practical';
  interviewerTip: string;
}

export interface InterviewSection {
  topic: string;
  questions: Question[];
}

export const interviewData: InterviewSection[] = [
  {
    topic: "JS: Fundamentals",
    questions: [
      {
        id: 101,
        question: "Explain the difference between let, const, and var. What is Hoisting?",
        answer: "var is function-scoped and hoisted with 'undefined'. let and const are block-scoped and hoisted into the 'Temporal Dead Zone' (TDZ), making them inaccessible before declaration. const requires immediate initialization and cannot be reassigned.",
        type: "viva",
        interviewerTip: "Mention that 'var' attaches to the window object in a global context, which is a common source of memory leaks."
      },
      {
        id: 102,
        question: "What are the different Data Types in JavaScript? Explain the difference between null and undefined.",
        answer: "Primitives: string, number, boolean, bigint, symbol, null, undefined. Non-primitives: objects. undefined means a variable has been declared but not assigned. null is an intentional absence of value and is of type 'object' due to a legacy bug.",
        type: "viva",
        interviewerTip: "Show you know your stuff: Mention that typeof null === 'object' is a historical error in JS."
      },
      {
        id: 103,
        question: "Scenario: You need to check if a variable is an array. Why is 'typeof' not sufficient?",
        answer: "typeof [] returns 'object'. To specifically check for an array, use Array.isArray(variable) or variable instanceof Array.",
        type: "practical",
        interviewerTip: "I'm looking for Array.isArray() as the modern standard."
      },
      {
        id: 1004,
        question: "What is the Temporal Dead Zone (TDZ) in JavaScript?",
        answer: "TDZ is the period between the start of a block and the point where a variable (declared with let or const) is initialized. Accessing the variable in this zone results in a ReferenceError.",
        type: "viva",
        interviewerTip: "Explain that TDZ ensures we don't use variables before they are properly initialized."
      },
      {
        id: 1005,
        question: "How does the 'delete' operator work in JavaScript?",
        answer: "The delete operator removes a property from an object. It does not affect variables or functions. It returns true if the property was successfully deleted or if it didn't exist.",
        type: "viva",
        interviewerTip: "Mention that it shouldn't be used on arrays because it leaves 'holes' (empty slots) in the array."
      },
      {
        id: 1006,
        question: "Explain the difference between Pass by Value and Pass by Reference.",
        answer: "Primitives are passed by value (a copy is created). Objects and arrays are passed by reference (the memory address is copied). Changes to a primitive copy don't affect the original, but changes to a reference copy do.",
        type: "viva",
        interviewerTip: "Draw a mental diagram: Primitive is a box with a value, Reference is a box with a map to another box."
      },
      {
        id: 1007,
        question: "Practical: How do you shallow copy an object in JavaScript?",
        answer: "You can use the spread operator {...obj} or Object.assign({}, obj).",
        type: "practical",
        interviewerTip: "Be ready to explain why this doesn't work for nested objects (Deep Copy)."
      },
      {
        id: 1008,
        question: "What is Type Coercion? Give an example of implicit coercion.",
        answer: "Type Coercion is the automatic conversion of values from one data type to another. Example: 1 + '2' results in '12' because the number is coerced into a string.",
        type: "viva",
        interviewerTip: "Mention that '==' performs coercion, while '===' does not."
      },
      {
        id: 1009,
        question: "Why does 0.1 + 0.2 !== 0.3 in JavaScript?",
        answer: "JavaScript uses the IEEE 754 standard for floating-point math, which results in precision issues when representing certain decimal fractions in binary.",
        type: "viva",
        interviewerTip: "This is a classic 'senior' question. Mention 'BigInt' or 'toFixed()' as solutions."
      },
      {
        id: 1010,
        question: "What are Template Literals and their advantages over regular strings?",
        answer: "Template literals use backticks (``) and allow embedded expressions ${}, multi-line strings, and tagged templates.",
        type: "viva",
        interviewerTip: "Mention that it makes code much more readable than using '+' for concatenation."
      },
      {
        id: 1011,
        question: "Explain the logical operators &&, ||, and ?? (Nullish Coalescing).",
        answer: "&& returns the first falsy value or the last value. || returns the first truthy value. ?? returns the right-hand side if the left-hand side is null or undefined.",
        type: "viva",
        interviewerTip: "Highlight that ?? is safer than || when working with 0 or empty strings."
      },
      {
        id: 1012,
        question: "What is an Anonymous Function?",
        answer: "A function without a name, often used as callbacks or assigned to variables (Function Expressions).",
        type: "viva",
        interviewerTip: "Mention that arrow functions are always anonymous."
      },
      {
        id: 1013,
        question: "Practical: Write an IIFE (Immediately Invoked Function Expression).",
        answer: "(function() { console.log('I run immediately!'); })();",
        type: "practical",
        interviewerTip: "Explain that IIFEs were used to create private scopes before modules existed."
      },
      {
        id: 1014,
        question: "What is the 'arguments' object in functions?",
        answer: "It is an array-like object available within non-arrow functions that contains all the arguments passed to the function.",
        type: "viva",
        interviewerTip: "Mention that arrow functions don't have their own 'arguments' object; they use the one from the parent scope."
      },
      {
        id: 1015,
        question: "Explain the Rest Parameter syntax (...) in function arguments.",
        answer: "The rest parameter allows a function to accept an indefinite number of arguments as an array.",
        type: "viva",
        interviewerTip: "Differentiate it from the Spread operator, which expands an array."
      },
      {
        id: 1016,
        question: "What is the 'use strict' directive?",
        answer: "It enables Strict Mode, which catches common coding mistakes and prevents the use of unsafe features (e.g., using undeclared variables).",
        type: "viva",
        interviewerTip: "Mention that modules in ES6 are strictly bound by default."
      },
      {
        id: 1017,
        question: "Scenario: How do you handle deep cloning an object with functions inside?",
        answer: "Standard JSON.parse(JSON.stringify(obj)) won't work for functions. You need a recursive utility or a library like Lodash's _.cloneDeep().",
        type: "practical",
        interviewerTip: "StructuredClone() is the new native way, but it also has limitations with functions."
      },
      {
        id: 1018,
        question: "What is the difference between synchronous and asynchronous code?",
        answer: "Sync code runs line by line, blocking execution. Async code allows the program to continue running while waiting for a task (like an API call) to finish.",
        type: "viva",
        interviewerTip: "Use the 'Starbucks order' analogy: Sync is queuing for coffee, Async is getting a buzzer while you wait."
      },
      {
        id: 1019,
        question: "What is a Symbol in JavaScript?",
        answer: "A unique and immutable primitive data type used primarily as unique keys for object properties to avoid collisions.",
        type: "viva",
        interviewerTip: "Mention that Symbols are not enumerable in for...in loops."
      },
      {
        id: 1020,
        question: "Explain BigInt and why it was introduced.",
        answer: "BigInt is for numbers larger than the maximum safe integer (Number.MAX_SAFE_INTEGER). It is created by appending 'n' to a number.",
        type: "viva",
        interviewerTip: "Note that you cannot mix BigInt and regular Number types in operations."
      },
      {
        id: 1021,
        question: "What is the 'global' object in Node.js vs the browser?",
        answer: "In the browser, it is 'window'. In Node.js, it is 'global'. 'globalThis' is the universal way to access it across environments.",
        type: "viva",
        interviewerTip: "Mention globalThis to show you keep up with ES2020 features."
      },
      {
        id: 1022,
        question: "Difference between Object.seal() and Object.freeze().",
        answer: "Seal prevents adding/deleting properties but allows modifying existing ones. Freeze prevents all changes (adding, deleting, or modifying).",
        type: "viva",
        interviewerTip: "Freeze is a 'shallow' freeze; nested objects can still be changed."
      },
      {
        id: 1023,
        question: "How do you check for the existence of a property in an object?",
        answer: "Use the 'in' operator ('prop' in obj) or obj.hasOwnProperty('prop').",
        type: "practical",
        interviewerTip: "The 'in' operator also checks the prototype chain, unlike hasOwnProperty."
      },
      {
        id: 1024,
        question: "What is the 'this' keyword? Explain its behavior in arrow functions.",
        answer: "'this' refers to the object that is executing the current function. Arrow functions do not have their own 'this'; they inherit it from the surrounding lexical scope.",
        type: "viva",
        interviewerTip: "This is a top-tier interview question. Be ready for follow-up on 'bind', 'call', and 'apply'."
      },
      {
        id: 1025,
        question: "Explain the difference between .call(), .apply(), and .bind().",
        answer: ".call() and .apply() invoke a function immediately with a specified 'this'. .bind() returns a new function with a fixed 'this' to be called later.",
        type: "viva",
        interviewerTip: "Mnemonics: 'C' for Call (Comma-separated), 'A' for Apply (Array of arguments)."
      },
      {
        id: 1026,
        question: "What is the Purpose of Object.create()?",
        answer: "It creates a new object with the specified prototype object and properties.",
        type: "viva",
        interviewerTip: "It's a way to implement inheritance without classes."
      },
      {
        id: 1027,
        question: "Scenario: You have an object with many keys and want to loop through them. What are your options?",
        answer: "for...in loop, Object.keys(), Object.values(), or Object.entries().",
        type: "practical",
        interviewerTip: "Object.keys() combined with forEach is usually cleaner than a for...in loop."
      },
      {
        id: 1028,
        question: "What is the difference between a Map and an Object in JavaScript?",
        answer: "A Map can have keys of any type, remembers insertion order, and has better performance for frequent additions/removals.",
        type: "viva",
        interviewerTip: "Mention that Map has a .size property, making it easier to check length."
      },
      {
        id: 1029,
        question: "What is a Set and how is it different from an Array?",
        answer: "A Set is a collection of unique values. Unlike an array, it does not allow duplicates.",
        type: "viva",
        interviewerTip: "It's the fastest way to remove duplicates from an array: [...new Set(arr)]."
      },
      {
        id: 1030,
        question: "What is the purpose of WeakMap and WeakSet?",
        answer: "They allow garbage collection of keys (objects) if they are not referenced elsewhere. Keys must be objects.",
        type: "viva",
        interviewerTip: "They are useful for storing private data or cache that should disappear when the object does."
      },
      {
        id: 1031,
        question: "Explain the purpose of try...catch in JavaScript.",
        answer: "It allows you to test a block of code for errors, catch those errors if they occur, and handle them without crashing the script.",
        type: "viva",
        interviewerTip: "Mention that it only works for runtime errors, not syntax errors."
      },
      {
        id: 1032,
        question: "What is the 'finally' block used for?",
        answer: "The finally block executes regardless of whether an error was thrown or caught. It is typically used for cleanup (e.g., closing a connection).",
        type: "viva",
        interviewerTip: "Note that finally runs even if you 'return' inside the try or catch block."
      },
      {
        id: 1033,
        question: "Practical: Write a custom error class by extending the Error object.",
        answer: "class AppError extends Error { constructor(message) { super(message); this.name = 'AppError'; } }",
        type: "practical",
        interviewerTip: "Mention that adding custom properties like 'statusCode' makes it very useful for backend APIs."
      },
      {
        id: 1034,
        question: "How do you 'throw' an error manually?",
        answer: "Use the 'throw' keyword followed by an expression (usually an Error object): throw new Error('Something went wrong');",
        type: "viva",
        interviewerTip: "You can técnicamente throw anything (like a string), but always throw an Error object to preserve the stack trace."
      },
      {
        id: 1035,
        question: "What is a JavaScript Engine? Name the one used in Chrome/Node.js.",
        answer: "A program that executes JavaScript code. Chrome and Node.js use the V8 engine.",
        type: "viva",
        interviewerTip: "Mention JIT (Just-In-Time) compilation as the key reason JS is fast today."
      },
      {
        id: 1036,
        question: "How does Garbage Collection work in JavaScript?",
        answer: "JS automatically reclaims memory of objects that are no longer 'reachable' from the global roots via a Mark-and-Sweep algorithm.",
        type: "viva",
        interviewerTip: "Mention that circular references are no longer a problem for modern garbage collectors."
      },
      {
        id: 1037,
        question: "What is the difference between '__proto__' and 'prototype'?",
        answer: "'__proto__' is an object property that points to its prototype. 'prototype' is a property of a constructor function used to set the '__proto__' of its instances.",
        type: "viva",
        interviewerTip: "This is a confusing topic: remember '__proto__' is on instances, 'prototype' is on functions."
      },
      {
        id: 1038,
        question: "Explain Prototypal Inheritance.",
        answer: "When you try to access a property on an object, JS first looks at the object itself. If not found, it looks at its prototype (__proto__), then that prototype's prototype, until it reaches null.",
        type: "viva",
        interviewerTip: "The end of the prototype chain is always Object.prototype, then null."
      },
      {
        id: 1039,
        question: "What is the 'constructor' property of an object?",
        answer: "It is a property on the prototype that points back to the original function that created the object.",
        type: "viva",
        interviewerTip: "Note that manually overwriting a function's prototype can lose the constructor reference unless you put it back."
      },
      {
        id: 1040,
        question: "Why use 'class' if JavaScript is prototype-based?",
        answer: "Classes are 'syntactic sugar' over prototypes. They provide a much cleaner and more familiar syntax for developers coming from languages like Java or C++.",
        type: "viva",
        interviewerTip: "Clarify that classes in JS are NOT like classes in Java; they are still prototypes internally."
      },
      {
        id: 1041,
        question: "What are Getters and Setters?",
        answer: "They are accessor properties that allow you to define methods that look like regular properties when accessing or assigning values.",
        type: "viva",
        interviewerTip: "Use them to add validation logic or computed properties (e.g., fullName derived from first/last)."
      },
      {
        id: 1042,
        question: "What is the purpose of Object.defineProperty()?",
        answer: "It allows you to add or modify properties on an object with fine-grained control over descriptors (enumerable, configurable, writable).",
        type: "viva",
        interviewerTip: "This is how libraries like Vue 2 achieved reactivity via data binding."
      },
      {
        id: 1043,
        question: "Explain Function Borrowing.",
        answer: "Using a method from one object on another object using .call(), .apply(), or .bind().",
        type: "viva",
        interviewerTip: "Example: Borrowing Array.prototype.slice on the 'arguments' object."
      },
      {
        id: 1044,
        question: "What is Currying in JavaScript?",
        answer: "Transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.",
        type: "viva",
        interviewerTip: "Use it to create specialized versions of functions (e.g., a logger with a preset prefix)."
      },
      {
        id: 1045,
        question: "Practical: Write a simple multiply function using Currying.",
        answer: "const multiply = (a) => (b) => a * b; console.log(multiply(2)(3)); // 6",
        type: "practical",
        interviewerTip: "Mention that it works because of closures."
      },
      {
        id: 1046,
        question: "Difference between .slice() and .splice() for arrays.",
        answer: "slice() returns a portion of the array without modifying it. splice() changes the original array by removing/adding elements.",
        type: "viva",
        interviewerTip: "Mnemonic: 'Splice' sounds like 'Slice + Place' (it replaces things)."
      },
      {
        id: 1047,
        question: "Which array methods are used to add/remove from the front vs the end?",
        answer: "End: push/pop. Front: unshift/shift. All of these modify the original array.",
        type: "viva",
        interviewerTip: "Note that shift/unshift are slower than push/pop because they re-index every element."
      },
      {
        id: 1048,
        question: "When to use .includes() vs .indexOf()?",
        answer: "includes() returns a boolean (true/fase). indexOf() returns the index (-1 if not found).",
        type: "viva",
        interviewerTip: "includes() can handle NaN check, while indexOf() cannot."
      },
      {
        id: 1049,
        question: "Difference between .find() and .filter().",
        answer: "find() returns the first element that matches. filter() returns an array of ALL matching elements.",
        type: "viva",
        interviewerTip: "Both return undefined/empty array if no match is found."
      },
      {
        id: 1050,
        question: "Why does [1, 10, 2].sort() result in [1, 10, 2]?",
        answer: "By default, sort() converts elements to strings and compares their UTF-16 code unit values. '10' comes before '2' alphabetically.",
        type: "viva",
        interviewerTip: "Always provide a compare function: arr.sort((a, b) => a - b)."
      },
      {
        id: 1051,
        question: "How do you get the current Unix timestamp in milliseconds?",
        answer: "Use Date.now() or new Date().getTime().",
        type: "viva",
        interviewerTip: "Date.now() is faster as it doesn't create a new Date object."
      },
      {
        id: 1052,
        question: "Is Date parsing reliable across all browsers?",
        answer: "No, parsing string formats like 'MM-DD-YYYY' can be inconsistent. It is best to use ISO 8601 strings ('YYYY-MM-DDTHH:mm:ss.sssZ').",
        type: "viva",
        interviewerTip: "In production, libraries like date-fns or dayjs are highly recommended."
      },
      {
        id: 1053,
        question: "How do you generate a random integer between two values (min and max)?",
        answer: "Math.floor(Math.random() * (max - min + 1)) + min;",
        type: "practical",
        interviewerTip: "I'm looking for the use of Math.random() and Math.floor()."
      },
      {
        id: 1054,
        question: "Difference between Math.floor(), Math.ceil(), and Math.round().",
        answer: "floor rounds down. ceil rounds up. round rounds to the nearest integer.",
        type: "viva",
        interviewerTip: "Special case: 0.5 rounds up to 1."
      },
      {
        id: 1055,
        question: "Difference between Math.trunc() and Math.floor() for negative numbers.",
        answer: "trunc removes the decimal (truncate). floor rounds down. Math.trunc(-1.5) is -1, while Math.floor(-1.5) is -2.",
        type: "viva",
        interviewerTip: "Trunc is safer if you just want to strip the fractional part."
      },
      {
        id: 1056,
        question: "What are TypedArrays in JavaScript?",
        answer: "Arrays designed for handling binary data (Int8Array, Float32Array, etc.) commonly used in WebGL or audio processing.",
        type: "viva",
        interviewerTip: "Mention that they are not regular arrays and don't have all the same methods."
      },
      {
        id: 1057,
        question: "What are common causes of Memory Leaks in JavaScript?",
        answer: "Accidental global variables, forgotten timers/callbacks, and out-of-DOM references.",
        type: "viva",
        interviewerTip: "Mentioning 'Closures' can also be a cause if not used carefully."
      },
      {
        id: 1058,
        question: "Explain Polyfills vs Transpilers.",
        answer: "A polyfill adds missing functionality to older environments (e.g., adding .includes to IE). A transpiler converts syntax (e.g., ES6 to ES5).",
        type: "viva",
        interviewerTip: "Babel is a transpiler; CoreJS is a collection of polyfills."
      },
      {
        id: 1059,
        question: "Briefly explain what Babel and Webpack do.",
        answer: "Babel transpiles modern JS into backward-compatible versions. Webpack is a module bundler that combines multiple files into a single bundle.",
        type: "viva",
        interviewerTip: "Vite is the modern alternative to Webpack for faster development."
      },
      {
        id: 1060,
        question: "What is Event Delegation?",
        answer: "Instead of adding event listeners to every child, you add one listener to the parent and catch events as they bubble up.",
        type: "viva",
        interviewerTip: "It is much more memory efficient for large lists."
      },
      {
        id: 1061,
        question: "What is an Iterator in JavaScript?",
        answer: "An object that provides a .next() method, which returns an object with 'value' and 'done' properties.",
        type: "viva",
        interviewerTip: "Mention that arrays and maps are built-in iterables."
      },
      {
        id: 1062,
        question: "How do Generator Functions work?",
        answer: "They are functions that can be paused and resumed using the 'yield' keyword. They return a Generator object.",
        type: "viva",
        interviewerTip: "Generators are great for handling infinite sequences or complex sync/async flows."
      },
      {
        id: 1063,
        question: "What is a Proxy object?",
        answer: "A Proxy allows you to wrap another object and intercept operations like getting/setting properties, function calls, etc.",
        type: "viva",
        interviewerTip: "Proxies are the core of reactivity in modern frameworks like Vue 3."
      },
      {
        id: 1064,
        question: "What is the Reflect API?",
        answer: "It provides methods for interceptable JavaScript operations, often used alongside Proxies to perform default actions.",
        type: "viva",
        interviewerTip: "Reflect methods return booleans instead of throwing errors, making code cleaner."
      },
      {
        id: 1065,
        question: "Fetch API vs XMLHttpRequest (XHR).",
        answer: "Fetch is Promise-based, has a cleaner syntax, and is much easier to use for modern async flows than XHR.",
        type: "viva",
        interviewerTip: "Note that Fetch doesn't automatically throw errors on 404/500; you must check res.ok."
      },
      {
        id: 1066,
        question: "Scenario: How do you cancel a fetch request?",
        answer: "Use the AbortController API and pass its signal to the fetch call.",
        type: "practical",
        interviewerTip: "This is essential for cleaning up requests in React's useEffect."
      },
      {
        id: 1067,
        question: "What is CORS (Cross-Origin Resource Sharing)?",
        answer: "A security feature that allows a server to specify which origins are allowed to access its resources.",
        type: "viva",
        interviewerTip: "Client-side doesn't 'fix' CORS; the server must provide the correct headers."
      },
      {
        id: 1068,
        question: "Difference between LocalStorage, SessionStorage, and Cookies.",
        answer: "LocalStorage persists until cleared. SessionStorage lasts for the tab session. Cookies have small size (4KB) and are sent with every HTTP request.",
        type: "viva",
        interviewerTip: "Use LocalStorage for theme settings and Cookies for session/auth tokens."
      },
      {
        id: 1069,
        question: "What is IndexedDB?",
        answer: "A low-level API for client-side storage of significant amounts of structured data, including files/blobs.",
        type: "viva",
        interviewerTip: "It's much more powerful than LocalStorage but has a much more complex API."
      },
      {
        id: 1070,
        question: "What is Debouncing?",
        answer: "A technique that ensures a function only runs after a certain amount of time has passed since the last call.",
        type: "viva",
        interviewerTip: "Apply it to search inputs to prevent an API call on every keystroke."
      },
      {
        id: 1071,
        question: "What is Throttling?",
        answer: "Ensuring a function is called at most once in a specified time interval.",
        type: "viva",
        interviewerTip: "Use it for scroll or resize events to maintain performance."
      },
      {
        id: 1072,
        question: "Practical: Write a simple debounce function.",
        answer: "function debounce(fn, delay) { let timer; return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); }; }",
        type: "practical",
        interviewerTip: "Explain that 'timer' is preserved via closure."
      },
      {
        id: 1073,
        question: "What is the Shadow DOM?",
        answer: "A way to encapsulate HTML, CSS, and JS so it doesn't leak into or out of a web component.",
        type: "viva",
        interviewerTip: "It's the reason why <video> tags have internal buttons that you can't see in the main DOM."
      },
      {
        id: 1074,
        question: "What are Web Components?",
        answer: "A suite of technologies (Custom Elements, Shadow DOM, HTML Templates) that allow you to create reusable custom elements.",
        type: "viva",
        interviewerTip: "They are framework-agnostic and work in any browser."
      },
      {
        id: 1075,
        question: "What is the Intersection Observer API?",
        answer: "It provides a way to asynchronously observe changes in the intersection of a target element with its ancestor or the viewport.",
        type: "viva",
        interviewerTip: "Perfect for lazy loading images or infinite scrolling."
      },
      {
        id: 1076,
        question: "What is the History API?",
        answer: "It allows manipulation of the browser session history (e.g., pushState, replaceState) without a full page reload.",
        type: "viva",
        interviewerTip: "This is how Single Page Application (SPA) routing works internally."
      },
      {
        id: 1077,
        question: "How do you handle URL parameters in modern JS?",
        answer: "Use the URLSearchParams API: const params = new URLSearchParams(window.location.search);",
        type: "practical",
        interviewerTip: "It provides methods like .get(), .set(), and .has()."
      },
      {
        id: 1078,
        question: "What is a Blob in JavaScript?",
        answer: "A 'Binary Large Object' representing file-like data of immutable, raw data.",
        type: "viva",
        interviewerTip: "You can create a download link for a text string by wrapping it in a Blob."
      },
      {
        id: 1079,
        question: "Difference between .match() and .test() for Regex.",
        answer: "test() returns true/false (fast). match() returns an array of matches (slower).",
        type: "viva",
        interviewerTip: "Use .test() if you just want to validate a format like email."
      },
      {
        id: 1080,
        question: "What are Capturing Groups in Regex?",
        answer: "Using parentheses (...) to extract specific parts of a matched string.",
        type: "viva",
        interviewerTip: "Groups can be accessed later via $1, $2, etc., in replacements."
      },
      {
        id: 1081,
        question: "Explain Greedy vs Lazy matching in Regex.",
        answer: "Greedy (*) matches as much as possible. Lazy (*?) matches as little as possible.",
        type: "viva",
        interviewerTip: "Standard repeats like * and + are greedy by default."
      },
      {
        id: 1082,
        question: "What is Object.fromEntries()?",
        answer: "It transforms a list of key-value pairs (like from a Map or Object.entries) into an object.",
        type: "viva",
        interviewerTip: "It's the inverse of Object.entries()."
      },
      {
        id: 1083,
        question: "What do .flat() and .flatMap() do for arrays?",
        answer: "flat() flattens nested arrays. flatMap() maps each element and then flattens the result by one level.",
        type: "viva",
        interviewerTip: "flatMap() is more efficient than calling map() followed by flat()."
      },
      {
        id: 1084,
        question: "Optional Chaining (?.) — Why is it useful?",
        answer: "It allows reading the value of a property deep within a chain of connected objects without having to check each reference for null/undefined.",
        type: "viva",
        interviewerTip: "It helps prevent the dreaded 'Cannot read property X of undefined' error."
      },
      {
        id: 1085,
        question: "Nullish Coalescing (??) vs Logical OR (||).",
        answer: "?? only triggers for null/undefined. || triggers for any falsy value (0, empty string, false).",
        type: "viva",
        interviewerTip: "Use ?? when 0 or false are valid values you don't want to overwrite."
      },
      {
        id: 1086,
        question: "Spread operator (...) in Object literals.",
        answer: "It copies enumerable properties from one object to a new object.",
        type: "viva",
        interviewerTip: "Used for shallow merging objects or overriding specific keys."
      },
      {
        id: 1087,
        question: "What is requestAnimationFrame?",
        answer: "An API that tells the browser you wish to perform an animation and requests it to call a specified function before the next repaint.",
        type: "viva",
        interviewerTip: "It is much more performance-friendly than using setInterval for animations."
      },
      {
        id: 1088,
        question: "What is requestIdleCallback?",
        answer: "Allows scheduling low-priority work during the browser's idle periods.",
        type: "viva",
        interviewerTip: "Great for non-essential tasks like analytics or background sync."
      },
      {
        id: 1089,
        question: "How to clone an object excluding a specific property?",
        answer: "Use object destructuring with rest: const { forbidden, ...rest } = originalObj;",
        type: "practical",
        interviewerTip: "This is the cleanest 'modern' way to remove a key."
      },
      {
        id: 1090,
        question: "What is the difference between an Error and an Exception?",
        answer: "An Error is a built-in object. An Exception is what happens when you throw that error.",
        type: "viva",
        interviewerTip: "Technically, you can throw anything, but 'Exceptions' usually refer to error objects."
      },
      {
        id: 1091,
        question: "What is the Navigator object used for?",
        answer: "It contains information about the user's browser, location, language, battery status, and online/offline state.",
        type: "viva",
        interviewerTip: "Use navigator.onLine to check internet status for offline apps."
      },
      {
        id: 1092,
        question: "What is the Geolocation API?",
        answer: "It allows the user to provide their location to the web application if they give permission.",
        type: "viva",
        interviewerTip: "Always handle the 'denied' permission case gracefully."
      },
      {
        id: 1093,
        question: "What are Data URLs?",
        answer: "URLs prefixed with 'data:' that allow embedding small files (like images) directly in HTML or CSS as Base64 strings.",
        type: "viva",
        interviewerTip: "They save HTTP requests but make the file size larger (~33% increase)."
      },
      {
        id: 1094,
        question: "What is the difference between innerHTML and textContent?",
        answer: "innerHTML parses the string as HTML (can be slow and risky for XSS). textContent treats it as raw text.",
        type: "viva",
        interviewerTip: "Always use textContent when you don't need to render HTML tags."
      },
      {
        id: 1095,
        question: "What is the 'defer' attribute in <script> tags?",
        answer: "It tells the browser to download the script in parallel and execute it AFTER the DOM is fully parsed.",
        type: "viva",
        interviewerTip: "It is generally better than 'async' for scripts that depend on the DOM."
      },
      {
        id: 1096,
        question: "What is the purpose of the 'nonce' attribute in script tags?",
        answer: "A number used once (nonce) for Content Security Policy (CSP) to ensure only trusted scripts are executed.",
        type: "viva",
        interviewerTip: "Essential for protecting against XSS in high-security apps."
      },
      {
        id: 1097,
        question: "Scenario: How to check if an element is hidden in the viewport?",
        answer: "Use getBoundingClientRect() and check if height/width are 0, or use the newer Intersection Observer.",
        type: "practical",
        interviewerTip: "Intersection Observer is the most performant way."
      },
      {
        id: 1098,
        question: "What is the difference between a Task and a Microtask in the Event Loop?",
        answer: "Tasks (setTimeout) run after the rendering phase. Microtasks (Promises) run immediately after the current script and before rendering.",
        type: "viva",
        interviewerTip: "Microtasks always 'starve' the UI if they keep queuing themselves."
      },
      {
        id: 1099,
        question: "How do you detect if a browser supports a certain feature?",
        answer: "Use feature detection: if ('scrollBehavior' in document.documentElement.style) { ... }",
        type: "practical",
        interviewerTip: "Don't use UA (User Agent) sniffing; feature detection is safer."
      },
      {
        id: 1100,
        question: "Final: What makes a 'Senior' JS developer different from a 'Junior'?",
        answer: "A senior understands 'how' things work under the hood (Event Loop, Memory, Engine optimizations) and 'when' to use (or NOT use) certain features based on performance and maintainability.",
        type: "viva",
        interviewerTip: "Focus on problem-solving patterns and architecture rather than just syntax knowledge."
      }
    ]
  },
  {
    topic: "JS: Scopes & Closures",
    questions: [
      {
        id: 104,
        question: "What is a Closure? Can you give a real-world example?",
        answer: "A closure is a function that remembers the environment in which it was created, even after the parent function has finished executing. Example: Private variables or function factories.",
        type: "viva",
        interviewerTip: "Mention that closures are used in React hooks like useState to preserve state across renders."
      },
      {
        id: 105,
        question: "Problem: Write a function that creates a counter using closures.",
        answer: "function makeCounter() { let count = 0; return () => ++count; } const counter = makeCounter();",
        type: "practical",
        interviewerTip: "Explain that 'count' is encapsulated and cannot be accessed from outside."
      }
    ]
  },
  {
    topic: "JS: Asynchronous",
    questions: [
      {
        id: 106,
        question: "Explain the JS Event Loop and the difference between Microtasks and Macrotasks.",
        answer: "The Event Loop executes code, collects and processes events, and executes queued sub-tasks. Microtasks (Promises, process.nextTick) have higher priority and run before the next Macrotask (setTimeout, setInterval, I/O).",
        type: "viva",
        interviewerTip: "A senior developer knows that the browser won't repaint until the Microtask queue is empty."
      },
      {
        id: 107,
        question: "Scenario: You have multiple API calls that don't depend on each other. How do you optimize their execution?",
        answer: "Use Promise.all([request1, request2]) to run them in parallel instead of using await on each sequentially. This improves performance significantly.",
        type: "practical",
        interviewerTip: "Bonus points for mentioning Promise.allSettled if you want to handle individual failures without failing the whole set."
      }
    ]
  },
  {
    topic: "React: Hooks Deep Dive",
    questions: [
      {
        id: 2001,
        question: "Why can't we call Hooks inside loops, conditions, or nested functions?",
        answer: "React relies on the order in which Hooks are called to associate state with the correct component. Calling them conditionally or in loops breaks this order, leading to bugs.",
        type: "viva",
        interviewerTip: "Mention that React uses an internal linked list to track hooks."
      },
      {
        id: 2002,
        question: "Explain the difference between useEffect and useLayoutEffect.",
        answer: "useEffect runs asynchronously after the render is committed to the screen. useLayoutEffect runs synchronously after DOM mutations but before the browser has a chance to paint.",
        type: "viva",
        interviewerTip: "Use useLayoutEffect only when you need to measure DOM nodes before they are visible to prevent flickering."
      },
      {
        id: 2003,
        question: "Scenario: You have a useEffect that fetches data. How do you prevent memory leaks if the component unmounts?",
        answer: "Use an AbortController or a simple boolean flag in the cleanup function to ignore the result if the component is no longer mounted.",
        type: "practical",
        interviewerTip: "The AbortController is the modern, professional way to handle this."
      },
      {
        id: 2004,
        question: "What is the purpose of the dependency array in useEffect? What happens if you omit it?",
        answer: "It tells React when to re-run the effect. If omitted, the effect runs after every render. If empty [], it runs only once on mount. If it has values [prop, state], it runs whenever those values change.",
        type: "viva",
        interviewerTip: "Be careful with object/array dependencies; they are compared by reference, not value."
      },
      {
        id: 2005,
        question: "When should you use useCallback instead of just defining a function normally?",
        answer: "Only when the function is passed as a prop to a memoized child component (using React.memo) or used as a dependency in another hook.",
        type: "viva",
        interviewerTip: "Premature optimization is a red flag. Mention that useCallback itself has a small performance cost."
      },
      {
        id: 2006,
        question: "What is the difference between useMemo and React.memo()?",
        answer: "useMemo memoizes a value (the result of a computation). React.memo is a Higher Order Component that memoizes a whole component to prevent unnecessary re-renders when props haven't changed.",
        type: "viva",
        interviewerTip: "React.memo is for 'component' optimization, useMemo is for 'value/logic' optimization."
      },
      {
        id: 2007,
        question: "Practical: Write a custom hook 'useWindowSize' that returns the current width and height.",
        answer: "function useWindowSize() { const [size, setSize] = useState({ w: 0, h: 0 }); useEffect(() => { const handle = () => setSize({ w: window.innerWidth, h: window.innerHeight }); window.addEventListener('resize', handle); return () => window.removeEventListener('resize', handle); }, []); return size; }",
        type: "practical",
        interviewerTip: "Don't forget the cleanup (removeEventListener) — it's the most important part!"
      }
    ]
  },
  {
    topic: "React: Rendering & Fiber",
    questions: [
      {
        id: 2008,
        question: "What is React Fiber and how does it improve performance?",
        answer: "Fiber is the re-implementation of React's core algorithm. It allows 'Incremental Rendering' — the ability to split rendering work into chunks and spread it out over multiple frames.",
        type: "viva",
        interviewerTip: "Mention that Fiber allows React to prioritize updates based on importance (e.g., animations over data fetching)."
      },
      {
        id: 2009,
        question: "Explain the difference between Batching in React 17 vs React 18.",
        answer: "In React 17, batching only happened in React events. In React 18, 'Automatic Batching' happens for everything, including promises, timeouts, and native events.",
        type: "viva",
        interviewerTip: "Mention flushSync if you occasionally need to bypass automatic batching."
      },
      {
        id: 2011,
        question: "Explain the Reconciliation process in detail. How does React decide what to update?",
        answer: "React creates a tree of elements. When props/state change, it creates a new tree. It compares both trees from the root. If the root type is different, it tears down the old tree. If the same, it only updates the changed attributes/props and recurses on children. Keys are used to match children across renders.",
        type: "viva",
        interviewerTip: "This is a core 'senior' question. Mention that the algorithm is O(n) because of the heuristic assumptions React makes."
      },
      {
        id: 2012,
        question: "What is the Virtual DOM and why is it considered more efficient than directly updating the real DOM?",
        answer: "The VDOM is an in-memory representation of the UI. Updating the VDOM is fast. React then performs 'diffing' to find the minimal set of changes needed and applies them in a single batch to the real DOM, which is slow and expensive.",
        type: "viva",
        interviewerTip: "The efficiency comes from batching and avoiding unnecessary layout recalculations in the browser."
      }
    ]
  },
  {
    topic: "React: Performance & State",
    questions: [
      {
        id: 2013,
        question: "How do you optimize a large list in React that is causing lag during scroll or updates?",
        answer: "Use 'Windowing' or 'Virtualization' (e.g., react-window or react-virtualized) to only render the items currently visible in the viewport.",
        type: "practical",
        interviewerTip: "Mention that this significantly reduces the number of DOM nodes and improves both memory and CPU usage."
      },
      {
        id: 2014,
        question: "What is Prop Drilling and how would you solve it?",
        answer: "Prop drilling is passing data through many layers of components that don't need it. Solutions include Context API for global state, or Component Composition (passing components as props).",
        type: "viva",
        interviewerTip: "Component Composition is often under-utilized. Mention it as a clean alternative to Context."
      },
      {
        id: 2015,
        question: "When should you use Context API vs a state management library like Redux or Zustand?",
        answer: "Use Context for low-frequency updates (theme, auth user). Use Redux/Zustand for high-frequency updates, complex state logic, or when you need devtools and middleware.",
        type: "viva",
        interviewerTip: "Mention that Context can cause performance issues if not memoized correctly, as everything inside the Provider re-renders."
      },
      {
        id: 2016,
        question: "Scenario: Your app has 'state' that needs to be accessed by many sibling components. Where should this state live?",
        answer: "In the closest common parent component ('Lifting State Up') or in a global Store/Context if the distance is too large.",
        type: "practical",
        interviewerTip: "I'm checking if you know when to use local vs global state."
      }
    ]
  },
  {
    topic: "React: Advanced Patterns",
    questions: [
      {
        id: 2017,
        question: "What are Higher-Order Components (HOC) and are they still relevant in the era of Hooks?",
        answer: "HOC is a function that takes a component and returns a new component with added logic. While largely replaced by Custom Hooks, they are still useful for cross-cutting concerns like Auth wrappers or logging.",
        type: "viva",
        interviewerTip: "Hooks are generally preferred because they avoid wrapper hell and are easier to compose."
      },
      {
        id: 2018,
        question: "Explain the Render Props pattern.",
        answer: "A technique for sharing code between components using a prop whose value is a function that returns a React element.",
        type: "viva",
        interviewerTip: "Like HOCs, this is less common now but useful for certain library implementations (e.g., Formik)."
      },
      {
        id: 2019,
        question: "What is Portals in React? Give a practical use case.",
        answer: "Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. Use case: Modals, Tooltips, and Dropdowns to avoid z-index or 'overflow: hidden' issues.",
        type: "viva",
        interviewerTip: "Mention document.getElementById('portal-root') as a common implementation."
      },
      {
        id: 2020,
        question: "What is Error Boundaries and can they be implemented with functional components?",
        answer: "Error Boundaries are components that catch JavaScript errors anywhere in their child component tree. Currently, they MUST be implemented as a class component using getDerivedStateFromError or componentDidCatch.",
        type: "viva",
        interviewerTip: "Mention that libraries like 'react-error-boundary' provide a functional wrapper for this."
      }
    ]
  },
  {
    topic: "React: Practical Scenarios",
    questions: [
      {
        id: 2021,
        question: "Scenario: A component is re-rendering too often because of a complex object being passed as a prop from the parent. How do you fix it?",
        answer: "Memoize the object in the parent using useMemo so its reference doesn't change on every render. Then, wrap the child in React.memo().",
        type: "practical",
        interviewerTip: "The key here is reference equality. React.memo uses shallow comparison by default."
      },
      {
        id: 2022,
        question: "How would you implement a simple 'Search-as-you-type' feature with debouncing in React?",
        answer: "Create a local state for the input. Use a useEffect that triggers the API call. Inside the effect, set a setTimeout (e.g., 500ms) for the call. Return a cleanup function that calls clearTimeout to cancel the previous timer if the input changes again.",
        type: "practical",
        interviewerTip: "Mention that custom hooks like 'useDebounce' make this logic reusable."
      },
      {
        id: 2023,
        question: "Scenario: You need to fetch data from two separate APIs and wait for both before rendering. How do you handle it?",
        answer: "Use Promise.all() inside a useEffect to trigger both fetches concurrently. Store the results in state once both are resolved.",
        type: "practical",
        interviewerTip: "This shows you understand how to avoid 'waterfall' requests where one fetch waits for the other unnecessarily."
      },
      {
        id: 2024,
        question: "How do you handle 'stale closures' in a useEffect that uses setInterval?",
        answer: "Use the functional update form of setState (e.g., setCount(prev => prev + 1)) instead of directly referencing the state variable (count), or add the state variable to the dependency array.",
        type: "practical",
        interviewerTip: "This is a classic trap. Functional updates are almost always safer inside intervals."
      }
    ]
  },
  {
    topic: "Node.js Core: Internals",
    questions: [
      {
        id: 3001,
        question: "Explain the Node.js Event Loop in detail. What are its phases?",
        answer: "The Event Loop allows Node.js to perform non-blocking I/O operations. Its main phases are: 1. Timers (setTimeout/Interval), 2. Pending Callbacks (OS errors), 3. Idle/Prepare, 4. Poll (New I/O), 5. Check (setImmediate), 6. Close Callbacks.",
        type: "viva",
        interviewerTip: "Mention that 'process.nextTick' is not part of the event loop but runs immediately after the current operation."
      },
      {
        id: 3002,
        question: "What is Libuv and how does it handle asynchronous I/O?",
        answer: "Libuv is a multi-platform C library that provides support for asynchronous I/O. It manages the Event Loop and the Thread Pool (usually 4 threads) for heavy tasks like File I/O, DNS, and Crypto.",
        type: "viva",
        interviewerTip: "Explain that the Thread Pool is used when the OS doesn't provide an async primitive for a specific task."
      },
      {
        id: 3003,
        question: "Difference between setImmediate() and setTimeout(fn, 0)?",
        answer: "setTimeout(fn, 0) is designed to run in the 'Timers' phase, while setImmediate() is designed to run in the 'Check' phase. Inside an I/O cycle, setImmediate() always runs before setTimeout().",
        type: "viva",
        interviewerTip: "This tests if you understand the order of Event Loop phases."
      },
      {
        id: 3004,
        question: "What are Streams and why are they better than Buffers for large files?",
        answer: "Streams read data chunk-by-chunk, keeping memory usage constant. Buffers load the entire file into RAM, which causes 'heap out of memory' errors for large files.",
        type: "viva",
        interviewerTip: "Memory management is huge in backend interviews. Mention 'backpressure'."
      },
      {
        id: 3005,
        question: "Explain the 'Cluster' module and how it improves performance.",
        answer: "The Cluster module allows you to spawn multiple child processes (workers) that share the same server port. This enables Node.js to utilize all cores of a multi-core CPU.",
        type: "viva",
        interviewerTip: "Mention that for modern deployments, 'PM2' or 'Docker/K8s' is often preferred over the native Cluster module."
      }
    ]
  },
  {
    topic: "Express: Pro Architecture",
    questions: [
      {
        id: 3006,
        question: "How does Express Middleware work internally? What is the 'next()' function?",
        answer: "Middleware is a function with access to req, res, and next. Express maintains a stack of these functions. Calling next() tells Express to move to the next middleware in the stack.",
        type: "viva",
        interviewerTip: "Explain what happens if you forget to call next() or send a response (the request hangs)."
      },
      {
        id: 3007,
        question: "Scenario: How would you implement a Global Error Handling middleware in Express?",
        answer: "Define a middleware with 4 arguments: (err, req, res, next). Place it as the very last middleware in your app. use res.status(err.status || 500).json(...) to format errors.",
        type: "practical",
        interviewerTip: "I'm checking if you know that 4 arguments are mandatory for Error Middleware."
      },
      {
        id: 3008,
        question: "How do you handle 'callback hell' in older Express codebases?",
        answer: "Wrap old callbacks in Promises or use 'util.promisify', then use Async/Await syntax for cleaner code flow.",
        type: "viva",
        interviewerTip: "Mention that Express 5.x has better built-in support for rejected promises in middleware."
      },
      {
        id: 3009,
        question: "What is 'Dependency Injection' in Node.js and why use it?",
        answer: "It's a pattern where a component receives its dependencies from the outside rather than creating them itself. It makes testing (mocking) and maintenance much easier.",
        type: "viva",
        interviewerTip: "Explain how it helps in writing Unit Tests without hitting a real Database."
      }
    ]
  },
  {
    topic: "MongoDB: Advanced Patterns",
    questions: [
      {
        id: 4001,
        question: "What is an Indexing strategy in MongoDB? Explain Compound vs Partial Indexes.",
        answer: "Compound indexes cover multiple fields (e.g., { name: 1, age: -1 }). Partial indexes only index documents that meet a specific filter (e.g., only index active users), saving disk space and improving write speed.",
        type: "viva",
        interviewerTip: "Mention the 'ESR' rule (Equality, Sort, Range) for designing efficient compound indexes."
      },
      {
        id: 4002,
        question: "Explain the difference between $lookup and $graphLookup in Aggregation.",
        answer: "$lookup performs a left outer join to another collection. $graphLookup performs a recursive search on a collection, which is useful for hierarchical data (like org charts or comments).",
        type: "viva",
        interviewerTip: "Join operations are expensive in NoSQL. Explain when it's better to embed data instead of using $lookup."
      },
      {
        id: 4003,
        question: "What are MongoDB Transactions and when should you use them?",
        answer: "Transactions allow you to perform multiple operations across multiple documents or collections in an all-or-nothing (Atomicity) fashion. Use them for financial operations or complex status updates that must stay in sync.",
        type: "viva",
        interviewerTip: "Transactions have a performance cost. Always check if you can solve the problem with an atomic single-document update first."
      },
      {
        id: 4004,
        question: "How does MongoDB handle Scalability? (Replication vs Sharding)",
        answer: "Replication (Replica Sets) provides high availability and read scalability by keeping copies of data on multiple nodes. Sharding provides horizontal write scalability by partitioning data across many servers (shards).",
        type: "viva",
        interviewerTip: "Mention the 'Shard Key' and how a poor choice can lead to a 'Hot Shard' bottleneck."
      },
      {
        id: 4005,
        question: "Scenario: Your query is slow even with an index. How do you find the root cause?",
        answer: "Use the .explain('executionStats') method on the query. Look for 'COLLSCAN' (bad), 'IXSCAN' (good), and the ratio of 'totalKeysExamined' vs 'nReturned'.",
        type: "practical",
        interviewerTip: "Knowing how to use .explain() is the hallmark of a senior backend developer."
      }
    ]
  },
  {
    topic: "Backend: Practical & Security",
    questions: [
      {
        id: 5001,
        question: "Scenario: How would you prevent 'Brute Force' attacks on your Login API?",
        answer: "Use a rate-limiting middleware like 'express-rate-limit' or 'rate-limiter-flexible'. Also, implement 'Account Lockout' or 'Exponential Backoff' after X failed attempts.",
        type: "practical",
        interviewerTip: "Mention that rate limiting should ideally be done at the API Gateway level (e.g., Nginx) for better performance."
      },
      {
        id: 5002,
        question: "What is JWT vs Session-based authentication? Which is better for scaling?",
        answer: "Sessions are stored on the server (stateful), requiring session sticky nodes or a shared store like Redis. JWTs are stored on the client (stateless), making them easier to scale horizontally.",
        type: "viva",
        interviewerTip: "Mention the 'Revocation' problem with JWTs — it's hard to invalidate a token before it expires."
      },
      {
        id: 5003,
        question: "How do you detect a Memory Leak in a Node.js process?",
        answer: "Use the '--inspect' flag and Chrome DevTools to take Heap Snapshots. Look for objects that stay in memory after a request is finished. Tools like 'node-memwatch' can also help.",
        type: "practical",
        interviewerTip: "Common causes include global variables, uncleared intervals, and unclosed database connections."
      },
      {
        id: 5004,
        question: "Scenario: Your backend is CPU-intensive (e.g., Image processing). How do you handle it without blocking the Event Loop?",
        answer: "Offload the work to a 'Worker Thread', a separate 'Microservice', or a 'Background Job Queue' like BullMQ/Bull with Redis.",
        type: "practical",
        interviewerTip: "Worker Threads are good for same-machine tasks; Job Queues are better for distributed scaling."
      }
    ]
  },
  {
    topic: "Elite: System Design",
    questions: [
      {
        id: 6001,
        question: "Explain the concept of Micro-frontends. When should a team adopt this architecture?",
        answer: "Micro-frontends decompose a monolith frontend into smaller, independent apps managed by different teams. Adopt it when the codebase becomes too large for a single team, or when you need to mix different frameworks (e.g., React and Vue) in one product.",
        type: "viva",
        interviewerTip: "Mention challenges like 'Shared Dependencies' and 'Consistent UI/UX' across different apps."
      },
      {
        id: 6002,
        question: "How do you handle 'State Management' in a distributed System Design (Client-side)?",
        answer: "For Micro-frontends, use a 'shared state' via Custom Events, a lightweight shared bus, or a 'Shell' app that passes data via props. Avoid sharing a single Redux store across independent teams.",
        type: "viva",
        interviewerTip: "The goal is 'Decoupling'. If teams are tightly bound to one store, it's not a true microarchitectre."
      },
      {
        id: 6003,
        question: "Explain 'Horizontal' vs 'Vertical' Scaling for a Node/MongoDB backend.",
        answer: "Vertical scaling is adding more power (CPU/RAM) to one server. Horizontal scaling is adding more servers (Load Balanced) and using MongoDB Sharding to distribute data.",
        type: "viva",
        interviewerTip: "Mention that Vertical scaling has a hard limit, while Horizontal is theoretically infinite."
      },
      {
        id: 6004,
        question: "Scenario: Design a simplified 'YouTube' view counter. How do you handle millions of concurrent increments?",
        answer: "Don't update the DB on every click. Use a cache like Redis (INCR command). Periodically flush the counts from Redis to the main MongoDB in batches (e.g., every 1 minute).",
        type: "practical",
        interviewerTip: "This tests if you understand 'Write Buffering' to protect the database."
      }
    ]
  },
  {
    topic: "Elite: Testing Mastery",
    questions: [
      {
        id: 7001,
        question: "What is the difference between Unit, Integration, and E2E testing?",
        answer: "Unit: Tests a single function/component in isolation (Jest). Integration: Tests how multiple components/services work together. E2E: Tests the entire user flow in a real browser (Cypress/Playwright).",
        type: "viva",
        interviewerTip: "Mention the 'Testing Pyramid' — you should have many unit tests and few E2E tests."
      },
      {
        id: 7002,
        question: "How do you test a React component that makes an API call on mount?",
        answer: "Use 'jest.mock' or 'msw' (Mock Service Worker) to intercept the network request and return a fake response, then verify the UI updates correctly using React Testing Library.",
        type: "practical",
        interviewerTip: "MSW is currently considered the industry best practice over manual mocking."
      },
      {
        id: 7003,
        question: "What is TDD (Test Driven Development) and what are its phases?",
        answer: "TDD is writing tests before writing the actual code. Phases: Red (write a failing test), Green (write code to make it pass), Refactor (clean up the code).",
        type: "viva",
        interviewerTip: "TDD improves design and ensures 100% coverage, but can be slower initially."
      },
      {
        id: 7004,
        question: "Scenario: You have a function with 10 conditional branches. How do you ensure high reliability?",
        answer: "Calculate the 'Cyclomatic Complexity' and write multiple test cases covering every 'edge case' and path. If the function is too complex, break it into smaller sub-functions.",
        type: "practical",
        interviewerTip: "I'm looking for 'Edge Case Coverage' and 'Decomposition'."
      }
    ]
  },
  {
    topic: "Elite: CI/CD & Quality",
    questions: [
      {
        id: 8001,
        question: "Explain the SOLID principles in the context of React/Node development.",
        answer: "S: Single Responsibility (one component, one job). O: Open/Closed (props/composition). L: Liskov Substitution (hooks interfaces). I: Interface Segregation (small props). D: Dependency Inversion (passing props/services).",
        type: "viva",
        interviewerTip: "SOLID is the foundation of clean, maintainable code. Stick to 'S' and 'D' as they are most relevant to React."
      },
      {
        id: 8002,
        question: "What is Docker and why should a MERN developer use it?",
        answer: "Docker 'containerizes' your app, ensuring it runs exactly the same on your machine, your teammate's machine, and the production server. It avoids 'it works on my machine' bugs.",
        type: "viva",
        interviewerTip: "Mention 'Docker Compose' for running Node and Mongo together with one command."
      },
      {
        id: 8003,
        question: "What is a 'Deployment Pipeline' (CI/CD)?",
        answer: "A set of automated steps triggered on every code commit. CI (Continuous Integration) runs tests/lints. CD (Continuous Deployment) automatically deploys the code to staging/production if tests pass.",
        type: "viva",
        interviewerTip: "GitHub Actions is the most popular tool for this in the MERN ecosystem."
      }
    ]
  },
  {
    topic: "Coding: Logic & Output",
    questions: [
      {
        id: 9001,
        question: "Output: console.log(false == '0'); console.log(false === '0');",
        answer: "true, false. '==' performs type coercion (false becomes 0, '0' becomes 0). '===' checks both value and type.",
        type: "practical",
        interviewerTip: "This tests your understanding of the 'Abstract Equality Comparison Algorithm'."
      },
      {
        id: 9002,
        question: "Output: let a = [1, 2]; let b = a; b.push(3); console.log(a);",
        answer: "[1, 2, 3]. Arrays are reference types in JS. 'b' points to the same memory location as 'a'.",
        type: "practical",
        interviewerTip: "I'm checking if you understand reference vs value."
      },
      {
        id: 9003,
        question: "Logic: Write a function to check if a string is a Palindrome without using .reverse().",
        answer: "function isPal(str) { for(let i=0; i<str.length/2; i++) { if(str[i] !== str[str.length-1-i]) return false; } return true; }",
        type: "practical",
        interviewerTip: "I'm looking for a two-pointer approach or basic loop logic."
      },
      {
        id: 9004,
        question: "Output: for(var i=0; i<3; i++) { setTimeout(() => console.log(i), 1000); }",
        answer: "3, 3, 3. 'var' is function-scoped. By the time setTimeout runs, the loop has finished and 'i' is 3.",
        type: "practical",
        interviewerTip: "Ask how to fix it (use 'let' or IIFE)."
      },
      {
        id: 9005,
        question: "Logic: Remove duplicates from an array [1, 2, 2, 3] using only .reduce().",
        answer: "arr.reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], [])",
        type: "practical",
        interviewerTip: "This shows you can use reduce for more than just sums."
      },
      {
        id: 9006,
        question: "Output: console.log(typeof NaN); console.log(NaN === NaN);",
        answer: "'number', false. NaN is the only value in JS not equal to itself.",
        type: "practical",
        interviewerTip: "Standard trick question. Mention Number.isNaN() as the fix."
      },
      {
        id: 9007,
        question: "Logic: Write a function to find the first non-repeating character in a string.",
        answer: "Use a Map to count frequencies: for(char of str) map[char]++; for(char of str) if(map[char] === 1) return char;",
        type: "practical",
        interviewerTip: "Focus on O(n) time complexity."
      },
      {
        id: 9008,
        question: "Output: const obj = { a: 1 }; const b = obj; b.a = 2; console.log(obj.a);",
        answer: "2. Objects are references. Modifying 'b' modifies the original object.",
        type: "practical",
        interviewerTip: "Fundamental understanding of memory in JS."
      },
      {
        id: 9009,
        question: "Logic: How do you verify if an object is empty? ({} )",
        answer: "Object.keys(obj).length === 0 && obj.constructor === Object",
        type: "practical",
        interviewerTip: "Checking for constructor ensures it's a plain object, not a class instance."
      },
      {
        id: 9010,
        question: "Output: console.log(1 + '1' - 1);",
        answer: "10. (1 + '1' becomes '11', '11' - 1 coerces back to number, giving 10).",
        type: "practical",
        interviewerTip: "Tests knowledge of coercion priority (Plus vs Minus)."
      },
      {
        id: 9011,
        question: "Logic: Write a function to flatten a multi-dimensional array [1, [2, [3, 4]]].",
        answer: "function flat(arr) { return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flat(val) : val), []); }",
        type: "practical",
        interviewerTip: "Recursion is the key here."
      },
      {
        id: 9012,
        question: "Output: (function() { var a = b = 3; })(); console.log(typeof a, typeof b);",
        answer: "'undefined', 'number'. 'b' becomes a global variable because it's assigned without 'var/let/const'.",
        type: "practical",
        interviewerTip: "Classic scope leaking trick."
      },
      {
        id: 9013,
        question: "Logic: Swap two variables without using a temporary variable.",
        answer: "[a, b] = [b, a]; (Destructuring) or a = a + b; b = a - b; a = a - b; (Math)",
        type: "practical",
        interviewerTip: "Destructuring is the modern way."
      },
      {
        id: 9014,
        question: "Output: console.log(0.1 + 0.2 === 0.3);",
        answer: "false. Due to floating point precision errors (it's actually 0.30000000000000004).",
        type: "practical",
        interviewerTip: "Mention IEEE 754 standard."
      },
      {
        id: 9015,
        question: "Logic: Write a function to find the intersection of two arrays.",
        answer: "arr1.filter(val => arr2.includes(val))",
        type: "practical",
        interviewerTip: "Simple but common. Mention using a Set for arr2 to optimize lookups to O(1)."
      }
    ]
  }
];
