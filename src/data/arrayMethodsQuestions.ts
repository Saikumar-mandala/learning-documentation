export interface MethodQuestion {
  id: number;
  text: string;
}

export interface MethodSection {
  title: string;
  questions: MethodQuestion[];
}

export interface MethodData {
  method: 'map' | 'filter' | 'reduce';
  sections: MethodSection[];
}

export const arrayMethodsQuestions: MethodData[] = [
  {
    method: 'map',
    sections: [
      {
        title: "Basic Concept Questions",
        questions: [
          { id: 1, text: "What is Array.map() in JavaScript?" },
          { id: 2, text: "Why do we use map()?" },
          { id: 3, text: "What does map() return?" },
          { id: 4, text: "Does map() modify the original array?" },
          { id: 5, text: "What is the syntax of map()?" },
          { id: 6, text: "Is map() mutable or immutable?" },
          { id: 7, text: "Can map() return a different data type?" },
          { id: 8, text: "What happens if you don’t return anything inside map()?" },
          { id: 9, text: "Is map() available on objects?" },
          { id: 10, text: "Is map() synchronous or asynchronous?" }
        ]
      },
      {
        title: "Callback & Parameters",
        questions: [
          { id: 11, text: "What parameters does the map() callback receive?" },
          { id: 12, text: "What is currentValue in map()?" },
          { id: 13, text: "What is index in map()?" },
          { id: 14, text: "What is array parameter in map()?" },
          { id: 15, text: "Is it mandatory to use all callback parameters?" },
          { id: 16, text: "What is thisArg in map()?" },
          { id: 17, text: "Can we use arrow functions with map()?" },
          { id: 18, text: "Difference between arrow function and normal function in map()" },
          { id: 19, text: "Can map() accept named functions?" },
          { id: 20, text: "How does map() handle scope?" }
        ]
      },
      {
        title: "Coding Questions (Very Common)",
        questions: [
          { id: 21, text: "Square each number in an array using map()" },
          { id: 22, text: "Convert array of strings to uppercase" },
          { id: 23, text: "Add 10 to every element in an array" },
          { id: 24, text: "Multiply each element by its index" },
          { id: 25, text: "Extract names from array of objects" },
          { id: 26, text: "Convert array of numbers to strings" },
          { id: 27, text: "Convert prices from USD to INR" },
          { id: 28, text: "Append text to each string in array" },
          { id: 29, text: "Convert boolean array to string array" },
          { id: 30, text: "Create array of lengths of strings" }
        ]
      },
      {
        title: "Object & Real-World Scenarios",
        questions: [
          { id: 31, text: "Extract specific property from array of objects" },
          { id: 32, text: "Add new property to each object using map()" },
          { id: 33, text: "Modify existing object values using map()" },
          { id: 34, text: "Rename object keys using map()" },
          { id: 35, text: "Convert API response to UI-friendly format" },
          { id: 36, text: "Create dropdown options using map()" },
          { id: 37, text: "Map over nested objects" },
          { id: 38, text: "Format date fields using map()" },
          { id: 39, text: "Add computed fields using map()" },
          { id: 40, text: "Convert backend data to frontend model" }
        ]
      },
      {
        title: "Map vs Other Methods (High Value)",
        questions: [
          { id: 41, text: "Difference between map() and forEach()" },
          { id: 42, text: "Difference between map() and filter()" },
          { id: 43, text: "Difference between map() and reduce()" },
          { id: 44, text: "map() vs for loop" },
          { id: 45, text: "When should we not use map()?" },
          { id: 46, text: "Can map() replace forEach()?" },
          { id: 47, text: "Can map() be chained with filter()?" },
          { id: 48, text: "Can map() be chained with reduce()?" },
          { id: 49, text: "map() vs while loop" },
          { id: 50, text: "map() vs for...of" }
        ]
      },
      {
        title: "Advanced & Tricky Questions",
        questions: [
          { id: 51, text: "What happens if map() returns undefined?" },
          { id: 52, text: "How does map() handle empty slots?" },
          { id: 53, text: "Does map() skip empty values?" },
          { id: 54, text: "What happens if array length changes during map()?" },
          { id: 55, text: "Can map() be stopped or broken?" },
          { id: 56, text: "How does map() behave with NaN?" },
          { id: 57, text: "Is map() shallow copy or deep copy?" },
          { id: 58, text: "Performance comparison: map() vs for loop" },
          { id: 59, text: "Can we use async/await with map()?" },
          { id: 60, text: "Why map(async fn) returns promises?" }
        ]
      },
      {
        title: "Edge Case & Output Questions",
        questions: [
          { id: 61, text: "Output of map() without return" },
          { id: 62, text: "Output of map() on empty array" },
          { id: 63, text: "Output of map() on null or undefined" },
          { id: 64, text: "Output when map() callback throws error" },
          { id: 65, text: "Output of nested map()" },
          { id: 66, text: "Conditional return inside map()" },
          { id: 67, text: "map() with sparse arrays" },
          { id: 68, text: "map() with mixed data types" },
          { id: 69, text: "map() with Math functions" },
          { id: 70, text: "map() with parseInt issue" }
        ]
      },
      {
        title: "Polyfill & Internal Working",
        questions: [
          { id: 71, text: "Write a polyfill for Array.map()" },
          { id: 72, text: "How does map() work internally?" },
          { id: 73, text: "Time complexity of map()" },
          { id: 74, text: "Space complexity of map()" },
          { id: 75, text: "Why map() is functional programming method?" },
          { id: 76, text: "Is map() pure function?" },
          { id: 77, text: "Does map() mutate object references?" },
          { id: 78, text: "map() memory behavior" },
          { id: 79, text: "map() execution order" },
          { id: 80, text: "map() callback binding" }
        ]
      },
      {
        title: "React / Frontend Interview Questions",
        questions: [
          { id: 81, text: "Why map() is used in React?" },
          { id: 82, text: "How to render list using map() in React?" },
          { id: 83, text: "Why key prop is required with map()?" },
          { id: 84, text: "What happens if key is missing?" },
          { id: 85, text: "map() inside JSX" },
          { id: 86, text: "Conditional rendering with map()" },
          { id: 87, text: "map() vs loop in React" },
          { id: 88, text: "map() performance in React" },
          { id: 89, text: "Handling empty lists in map()" },
          { id: 90, text: "map() returning null in JSX" }
        ]
      },
      {
        title: "Common Mistakes (Interview Favorite)",
        questions: [
          { id: 91, text: "Using map() instead of forEach()" },
          { id: 92, text: "Forgetting return inside map()" },
          { id: 93, text: "Mutating objects inside map()" },
          { id: 94, text: "Using map() for side effects" },
          { id: 95, text: "Using map() when no transformation is needed" },
          { id: 96, text: "Assuming map() is async" },
          { id: 97, text: "Using map() on non-array" },
          { id: 98, text: "map() inside map() misuse" },
          { id: 99, text: "Overusing map()" },
          { id: 100, text: "Wrong chaining with map()" }
        ]
      },
      {
        title: "Rapid-Fire One Liners",
        questions: [
          { id: 101, text: "Does map() modify original array?" },
          { id: 102, text: "Does map() change array length?" },
          { id: 103, text: "Can map() return object?" },
          { id: 104, text: "Can map() return array?" },
          { id: 105, text: "Can map() return promise?" },
          { id: 106, text: "Does map() skip empty elements?" },
          { id: 107, text: "Is map() chainable?" },
          { id: 108, text: "Can map() throw error?" },
          { id: 109, text: "Can map() be used on NodeList?" },
          { id: 110, text: "Is map() lazy or eager?" }
        ]
      }
    ]
  },
  {
    method: 'filter',
    sections: [
      {
        title: "Basic Concept Questions",
        questions: [
          { id: 1, text: "What is Array.filter() in JavaScript?" },
          { id: 2, text: "Why do we use filter()?" },
          { id: 3, text: "What does filter() return?" },
          { id: 4, text: "Does filter() modify the original array?" },
          { id: 5, text: "What is the syntax of filter()?" },
          { id: 6, text: "Is filter() mutable or immutable?" },
          { id: 7, text: "What type of value should filter() callback return?" },
          { id: 8, text: "What happens if filter() callback returns false?" },
          { id: 9, text: "Is filter() available on objects?" },
          { id: 10, text: "Is filter() synchronous or asynchronous?" }
        ]
      },
      {
        title: "Callback & Parameters",
        questions: [
          { id: 11, text: "What parameters does filter() callback receive?" },
          { id: 12, text: "What is currentValue in filter()?" },
          { id: 13, text: "What is index in filter()?" },
          { id: 14, text: "What is array parameter in filter()?" },
          { id: 15, text: "Is it mandatory to use all callback parameters?" },
          { id: 16, text: "What is thisArg in filter()?" },
          { id: 17, text: "Can we use arrow functions with filter()?" },
          { id: 18, text: "Difference between arrow and normal function in filter()" },
          { id: 19, text: "Can filter() accept named functions?" },
          { id: 20, text: "How does filter() handle scope?" }
        ]
      },
      {
        title: "Coding Questions (Very Common)",
        questions: [
          { id: 21, text: "Filter even numbers from an array" },
          { id: 22, text: "Filter odd numbers from an array" },
          { id: 23, text: "Filter numbers greater than 10" },
          { id: 24, text: "Filter strings with length > 5" },
          { id: 25, text: "Filter positive numbers" },
          { id: 26, text: "Remove falsy values using filter()" },
          { id: 27, text: "Filter duplicate values" },
          { id: 28, text: "Filter users above age 18" },
          { id: 29, text: "Filter valid email addresses" },
          { id: 30, text: "Filter active users from array" }
        ]
      },
      {
        title: "Object & Real-World Scenarios",
        questions: [
          { id: 31, text: "Filter objects based on property value" },
          { id: 32, text: "Filter users by role (admin/user)" },
          { id: 33, text: "Filter products by price range" },
          { id: 34, text: "Filter API response data" },
          { id: 35, text: "Filter search results dynamically" },
          { id: 36, text: "Filter completed tasks from todo list" },
          { id: 37, text: "Filter inactive records" },
          { id: 38, text: "Filter nested object arrays" },
          { id: 39, text: "Filter items based on date" },
          { id: 40, text: "Filter permissions from roles array" }
        ]
      },
      {
        title: "Filter vs Other Methods (High Value)",
        questions: [
          { id: 41, text: "Difference between filter() and map()" },
          { id: 42, text: "Difference between filter() and forEach()" },
          { id: 43, text: "Difference between filter() and reduce()" },
          { id: 44, text: "filter() vs for loop" },
          { id: 45, text: "When should we not use filter()?" },
          { id: 46, text: "Can filter() replace map()" },
          { id: 47, text: "Can filter() be chained with map()?" },
          { id: 48, text: "Can filter() be chained with reduce()?" },
          { id: 49, text: "filter() vs find()" },
          { id: 50, text: "filter() vs some() and every()" }
        ]
      },
      {
        title: "Advanced & Tricky Questions",
        questions: [
          { id: 51, text: "What happens if filter() callback returns undefined?" },
          { id: 52, text: "How does filter() handle empty slots?" },
          { id: 53, text: "Does filter() skip empty elements?" },
          { id: 54, text: "What happens if array length changes during filter()?" },
          { id: 55, text: "Can filter() be stopped early?" },
          { id: 56, text: "How does filter() behave with NaN?" },
          { id: 57, text: "Is filter() shallow copy or deep copy?" },
          { id: 58, text: "Performance comparison: filter() vs for loop" },
          { id: 59, text: "Can we use async/await with filter()?" },
          { id: 60, text: "Why filter(async fn) does not work as expected?" }
        ]
      },
      {
        title: "Edge Case & Output Questions",
        questions: [
          { id: 61, text: "Output of filter() without return" },
          { id: 62, text: "Output of filter() on empty array" },
          { id: 63, text: "Output of filter() on null or undefined" },
          { id: 64, text: "Output when filter() callback throws error" },
          { id: 65, text: "filter() with sparse arrays" },
          { id: 66, text: "filter() with mixed data types" },
          { id: 67, text: "filter() using Boolean constructor" },
          { id: 68, text: "filter() with truthy/falsy values" },
          { id: 69, text: "filter() with Math conditions" },
          { id: 70, text: "filter() with parseInt issue" }
        ]
      },
      {
        title: "Polyfill & Internal Working",
        questions: [
          { id: 71, text: "Write a polyfill for Array.filter()" },
          { id: 72, text: "How does filter() work internally?" },
          { id: 73, text: "Time complexity of filter()" },
          { id: 74, text: "Space complexity of filter()" },
          { id: 75, text: "Why filter() is functional programming method?" },
          { id: 76, text: "Is filter() pure function?" },
          { id: 77, text: "Does filter() mutate object references?" },
          { id: 78, text: "filter() memory behavior" },
          { id: 79, text: "filter() execution order" },
          { id: 80, text: "filter() callback binding" }
        ]
      },
      {
        title: "React / Frontend Interview Questions",
        questions: [
          { id: 81, text: "How is filter() used in React?" },
          { id: 82, text: "Filtering list before rendering in React" },
          { id: 83, text: "Search functionality using filter()" },
          { id: 84, text: "filter() vs conditional rendering" },
          { id: 85, text: "filter() with state updates" },
          { id: 86, text: "filter() performance in React" },
          { id: 87, text: "filter() inside JSX" },
          { id: 88, text: "Combining filter() and map() in React" },
          { id: 89, text: "Handling empty results after filter()" },
          { id: 90, text: "filter() in controlled components" }
        ]
      },
      {
        title: "Common Mistakes (Interview Favorite)",
        questions: [
          { id: 91, text: "Forgetting return in filter()" },
          { id: 92, text: "Returning non-boolean values unintentionally" },
          { id: 93, text: "Mutating array inside filter()" },
          { id: 94, text: "Using filter() for transformation" },
          { id: 95, text: "Using filter() instead of find()" },
          { id: 96, text: "Assuming filter() returns single value" },
          { id: 97, text: "Using async callback in filter()" },
          { id: 98, text: "Overusing filter()" },
          { id: 99, text: "Incorrect chaining with filter()" },
          { id: 100, text: "Filtering on undefined properties" }
        ]
      },
      {
        title: "Rapid-Fire One Liners",
        questions: [
          { id: 101, text: "Does filter() modify original array?" },
          { id: 102, text: "Does filter() change array length?" },
          { id: 103, text: "Can filter() return empty array?" },
          { id: 104, text: "Can filter() return same array?" },
          { id: 105, text: "Can filter() return object?" },
          { id: 106, text: "Does filter() skip empty elements?" },
          { id: 107, text: "Is filter() chainable?" },
          { id: 108, text: "Can filter() throw error?" },
          { id: 109, text: "Can filter() be used on NodeList?" },
          { id: 110, text: "Is filter() lazy or eager?" }
        ]
      }
    ]
  },
  {
    method: 'reduce',
    sections: [
      {
        title: "Basic Concept Questions",
        questions: [
          { id: 1, text: "What is Array.reduce() in JavaScript?" },
          { id: 2, text: "Why do we use reduce()?" },
          { id: 3, text: "What does reduce() return?" },
          { id: 4, text: "Does reduce() modify the original array?" },
          { id: 5, text: "What is the syntax of reduce()?" },
          { id: 6, text: "Is reduce() mutable or immutable?" },
          { id: 7, text: "What is an accumulator in reduce()?" },
          { id: 8, text: "What is initialValue in reduce()?" },
          { id: 9, text: "What happens if initialValue is not provided?" },
          { id: 10, text: "Is reduce() synchronous or asynchronous?" }
        ]
      },
      {
        title: "Callback & Parameters",
        questions: [
          { id: 11, text: "What parameters does reduce() callback receive?" },
          { id: 12, text: "What is accumulator in reduce()?" },
          { id: 13, text: "What is currentValue in reduce()?" },
          { id: 14, text: "What is index in reduce()?" },
          { id: 15, text: "What is array parameter in reduce()?" },
          { id: 16, text: "Is it mandatory to use all parameters?" },
          { id: 17, text: "What is the role of initialValue?" },
          { id: 18, text: "How accumulator value changes in each iteration?" },
          { id: 19, text: "Can reduce() return different data types?" },
          { id: 20, text: "How does reduce() handle scope?" }
        ]
      },
      {
        title: "Coding Questions (Very Common)",
        questions: [
          { id: 21, text: "Find sum of numbers using reduce()" },
          { id: 22, text: "Find product of numbers using reduce()" },
          { id: 23, text: "Find maximum number in array" },
          { id: 24, text: "Find minimum number in array" },
          { id: 25, text: "Count total elements in array" },
          { id: 26, text: "Flatten a nested array" },
          { id: 27, text: "Remove duplicates from array" },
          { id: 28, text: "Count occurrences of elements" },
          { id: 29, text: "Group objects by property" },
          { id: 30, text: "Convert array to object" }
        ]
      },
      {
        title: "Object & Real-World Scenarios",
        questions: [
          { id: 31, text: "Calculate total price from cart items" },
          { id: 32, text: "Group users by age" },
          { id: 33, text: "Count votes or ratings" },
          { id: 34, text: "Convert API response to map/object" },
          { id: 35, text: "Aggregate sales data" },
          { id: 36, text: "Calculate average using reduce()" },
          { id: 37, text: "Build lookup table" },
          { id: 38, text: "Merge multiple arrays into one" },
          { id: 39, text: "Transform array into tree structure" },
          { id: 40, text: "Calculate statistics from data" }
        ]
      },
      {
        title: "Reduce vs Other Methods (High Value)",
        questions: [
          { id: 41, text: "Difference between reduce() and map()" },
          { id: 42, text: "Difference between reduce() and filter()" },
          { id: 43, text: "Difference between reduce() and forEach()" },
          { id: 44, text: "reduce() vs for loop" },
          { id: 45, text: "When should we not use reduce()?" },
          { id: 46, text: "Can reduce() replace map()" },
          { id: 47, text: "Can reduce() replace filter()" },
          { id: 48, text: "Can reduce() replace both map() and filter()?" },
          { id: 49, text: "reduce() vs flatMap()" },
          { id: 50, text: "reduce() vs recursion" }
        ]
      },
      {
        title: "Advanced & Tricky Questions",
        questions: [
          { id: 51, text: "What happens if reduce() callback returns undefined?" },
          { id: 52, text: "How does reduce() handle empty arrays?" },
          { id: 53, text: "What happens if reduce() has no initialValue?" },
          { id: 54, text: "Can reduce() be stopped early?" },
          { id: 55, text: "How does reduce() behave with NaN?" },
          { id: 56, text: "Is reduce() shallow copy or deep copy?" },
          { id: 57, text: "Performance comparison: reduce() vs for loop" },
          { id: 58, text: "Can reduce() be used with async/await?" },
          { id: 59, text: "Why reduce(async fn) returns promise?" },
          { id: 60, text: "How to handle async reduce correctly?" }
        ]
      },
      {
        title: "Edge Case & Output Questions",
        questions: [
          { id: 61, text: "Output of reduce() without initialValue" },
          { id: 62, text: "Output of reduce() on empty array" },
          { id: 63, text: "Output when reduce() callback throws error" },
          { id: 64, text: "reduce() with single element array" },
          { id: 65, text: "reduce() with mixed data types" },
          { id: 66, text: "reduce() with string concatenation" },
          { id: 67, text: "reduce() with boolean values" },
          { id: 68, text: "reduce() with object accumulator" },
          { id: 69, text: "reduce() with nested arrays" },
          { id: 70, text: "reduce() with sparse arrays" }
        ]
      },
      {
        title: "Polyfill & Internal Working",
        questions: [
          { id: 71, text: "Write a polyfill for Array.reduce()" },
          { id: 72, text: "How does reduce() work internally?" },
          { id: 73, text: "Time complexity of reduce()" },
          { id: 74, text: "Space complexity of reduce()" },
          { id: 75, text: "Why reduce() is functional programming method?" },
          { id: 76, text: "Is reduce() pure function?" },
          { id: 77, text: "Does reduce() mutate object references?" },
          { id: 78, text: "reduce() memory behavior" },
          { id: 79, text: "reduce() execution order" },
          { id: 80, text: "reduce() callback binding" }
        ]
      },
      {
        title: "React / Frontend Interview Questions",
        questions: [
          { id: 81, text: "Why reduce() is used in React?" },
          { id: 82, text: "State aggregation using reduce()" },
          { id: 83, text: "Calculating totals in React components" },
          { id: 84, text: "reduce() in Redux reducers" },
          { id: 85, text: "Difference between Array.reduce() and Redux reducer" },
          { id: 86, text: "normalize data using reduce()" },
          { id: 87, text: "reduce() vs map() in React" },
          { id: 88, text: "reduce() performance in React" },
          { id: 89, text: "reduce() inside useMemo" },
          { id: 90, text: "reduce() with immutability" }
        ]
      },
      {
        title: "Common Mistakes (Interview Favorite)",
        questions: [
          { id: 91, text: "Forgetting initialValue" },
          { id: 92, text: "Mutating accumulator incorrectly" },
          { id: 93, text: "Returning wrong accumulator type" },
          { id: 94, text: "Overusing reduce()" },
          { id: 95, text: "Using reduce() when map/filter is simpler" },
          { id: 96, text: "Incorrect async reduce usage" },
          { id: 97, text: "Using reduce() for side effects" },
          { id: 98, text: "reduce() callback not returning accumulator" },
          { id: 99, text: "Confusing accumulator and currentValue" },
          { id: 100, text: "reduce() on empty array without initialValue" }
        ]
      },
      {
        title: "Rapid-Fire One Liners",
        questions: [
          { id: 101, text: "Does reduce() modify original array?" },
          { id: 102, text: "Can reduce() return object?" },
          { id: 103, text: "Can reduce() return array?" },
          { id: 104, text: "Can reduce() return number?" },
          { id: 105, text: "Can reduce() return string?" },
          { id: 106, text: "Can reduce() return promise?" },
          { id: 107, text: "Is reduce() chainable?" },
          { id: 108, text: "Can reduce() throw error?" },
          { id: 109, text: "Can reduce() be used on NodeList?" },
          { id: 110, text: "Is reduce() lazy or eager?" }
        ]
      }
    ]
  }
];
