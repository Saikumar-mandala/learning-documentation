export interface MachineCodingChallenge {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Mid' | 'Hard';
  description: string;
  requirements: string[];
  evaluationCriteria: string[];
  logicHint: string;
  timeLimit: string;
}

export const machineCodingData: MachineCodingChallenge[] = [
  {
    id: 1,
    title: "Star Rating Component",
    difficulty: "Easy",
    description: "Build a reusable Star Rating component that allows users to select a rating from 1 to 5.",
    requirements: [
      "Render 5 stars (use font-awesome or SVG).",
      "Clicking a star selects that rating.",
      "Hovering over stars should 'highlight' the stars up to the current one.",
      "Moving mouse away should restore the selection."
    ],
    evaluationCriteria: [
      "Efficient handling of mouse events (MouseEnter, MouseLeave, Click).",
      "CSS state management (Active vs Inactive stars).",
      "Reusability via props (totalStars, initialRating)."
    ],
    logicHint: "Use two states: 'rating' for the permanent selection and 'hover' for the temporary UI state.",
    timeLimit: "30-40 mins"
  },
  {
    id: 2,
    title: "Infinite Scroll / Pagination",
    difficulty: "Mid",
    description: "Implement a list that loads more items as the user scrolls to the bottom.",
    requirements: [
      "Fetch data from a mock API (e.g., JSONPlaceholder).",
      "Detect when the user is near the bottom of the list.",
      "Show a loading spinner while fetching.",
      "Prevent multiple simultaneous calls (Debouncing/Loading guard)."
    ],
    evaluationCriteria: [
      "Usage of Intersection Observer API or Scroll Event listeners.",
      "Handling edge cases (Last page reached, API error).",
      "Performance (Preventing memory leaks of listeners)."
    ],
    logicHint: "The Intersection Observer API is more performant than attaching a listener to 'window.onScroll'.",
    timeLimit: "60 mins"
  },
  {
    id: 3,
    title: "Stepper Component",
    difficulty: "Mid",
    description: "Create a multi-step checkout progress bar (Step 1 -> Step 2 -> Step 3).",
    requirements: [
      "Display progress bar with numbers/icons.",
      "Transition between steps with 'Next' and 'Previous' buttons.",
      "Ensure current step is highlighted and completed steps are marked.",
      "Handle 'Finish' state on the final step."
    ],
    evaluationCriteria: [
      "State management for 'activeStep'.",
      "Dynamic rendering of content based on step.",
      "UI/UX consistency (disabling 'Next' if current step is invalid)."
    ],
    logicHint: "Think of the steps as an array of objects. Use the index to control current view.",
    timeLimit: "45 mins"
  },
  {
    id: 4,
    title: "Nested Comments System",
    difficulty: "Hard",
    description: "Build a Reddit-style nested comments system with multi-level replies.",
    requirements: [
      "Display a list of parent comments.",
      "Ability to 'Reply' to any comment (creates a nested level).",
      "Ability to 'Delete' or 'Edit' a comment.",
      "Recursive rendering of sub-comments."
    ],
    evaluationCriteria: [
      "Recursive component design.",
      "Deep state updates (updating a comment 3 levels deep).",
      "Performance optimization for many comments."
    ],
    logicHint: "Use recursion in your React component. The state should be a tree-like object or a flattened array with parent/child IDs.",
    timeLimit: "90 mins"
  },
  {
    id: 5,
    title: "Array.map() Polyfill",
    difficulty: "Easy",
    description: "Write your own version of the .map() method from scratch.",
    requirements: [
      "Cannot use the built-in .map() method.",
      "Must handle 'this' context correctly.",
      "Must skip empty slots in the array.",
      "Should accept a callback and an optional thisArg."
    ],
    evaluationCriteria: [
      "Correct handling of edge cases (null/undefined arrays).",
      "Correct arguments passed to callback (item, index, array).",
      "Returning a new array without modifying the original."
    ],
    logicHint: "Create a function on Array.prototype and use a 'for' loop to iterate and apply the callback.",
    timeLimit: "20 mins"
  },
  {
    id: 6,
    title: "Array.filter() Polyfill",
    difficulty: "Easy",
    description: "Write your own version of the .filter() method from scratch.",
    requirements: [
      "Cannot use the built-in .filter() method.",
      "Must return a new array with items that pass the truth test.",
      "Must work on large arrays efficiently."
    ],
    evaluationCriteria: [
      "Internal implementation using for-loop.",
      "Truthiness check on callback return value.",
      "Correct callback signature."
    ],
    logicHint: "Iterate through the array; if the callback returns true for an item, push it to the new result array.",
    timeLimit: "20 mins"
  },
  {
    id: 7,
    title: "Array.reduce() Polyfill",
    difficulty: "Mid",
    description: "Write your own version of the .reduce() method from scratch.",
    requirements: [
      "Cannot use the built-in .reduce() method.",
      "Must handle cases with and without an initial value.",
      "Must throw TypeError if array is empty and no initial value."
    ],
    evaluationCriteria: [
      "Accumulator initialization logic.",
      "Sequential processing of items.",
      "Edge case handling (empty array, single item)."
    ],
    logicHint: "If no initial value, the first element becomes the accumulator and iteration starts from the second.",
    timeLimit: "30 mins"
  },
  {
    id: 8,
    title: "Multi-Category Search & Filter",
    difficulty: "Mid",
    description: "Build a product list that can be filtered by Search Text AND Multiple Categories simultaneously.",
    requirements: [
      "Search products by name.",
      "Toggle multiple categories (e.g., Electronics, Fashion).",
      "Show 'No results found' state.",
      "Efficiently combine .filter() calls."
    ],
    evaluationCriteria: [
      "Reactive UI updates based on multiple state values.",
      "Optimal filtering logic (order of filters matters).",
      "Clean UI/UX with active filter badges."
    ],
    logicHint: "Always filter from the ORIGINAL data based on all currently active filters in state.",
    timeLimit: "45 mins"
  },
  {
    id: 9,
    title: "Cart Total Calculator",
    difficulty: "Easy",
    description: "Use .reduce() to calculate the total price, tax, and item count of a shopping cart.",
    requirements: [
      "Handle quantities of items.",
      "Apply dynamic tax rate.",
      "Return an object containing total, tax, and count."
    ],
    evaluationCriteria: [
      "Effective use of .reduce() to return an object (not just a number).",
      "Accuracy of calculations.",
      "Clean code and variable naming."
    ],
    logicHint: "The initial value of reduce should be an object: { total: 0, items: 0, tax: 0 }.",
    timeLimit: "15 mins"
  },
  {
    id: 10,
    title: "Group By Utility",
    difficulty: "Mid",
    description: "Write a function using .reduce() that groups an array of objects by a specific property.",
    requirements: [
      "Group students by 'grade' or 'age'.",
      "The result should be an object where keys are property values.",
      "Must work with any generic property name."
    ],
    evaluationCriteria: [
      "Correct usage of reduce for data grouping.",
      "Handling of missing or null properties.",
      "Immutability of the original array."
    ],
    logicHint: "Check if the key exists in the accumulator; if not, initialize it as an empty array before pushing.",
    timeLimit: "25 mins"
  },
  {
    id: 11,
    title: "Flatten Nested Array",
    difficulty: "Mid",
    description: "Write a recursive function or use .reduce() to flatten an array with arbitrary depth [1, [2, [3, 4]]].",
    requirements: [
      "Flatten all levels into a single-level array.",
      "Cannot use the built-in .flat() method.",
      "Must handle deeply nested structures."
    ],
    evaluationCriteria: [
      "Correct recursive implementation.",
      "Performance on deep nesting.",
      "Handling different data types within the array."
    ],
    logicHint: "Use .reduce() combined with .concat() and recursion if an item is an Array.",
    timeLimit: "30 mins"
  },
  {
    id: 12,
    title: "API Data Transformer (map)",
    difficulty: "Easy",
    description: "Transform a complex API response into a simplified UI model used by a component.",
    requirements: [
      "Concatenate firstName and lastName into fullName.",
      "Convert ISO dates to mm/dd/yyyy format.",
      "Filter out private fields like password or ssn."
    ],
    evaluationCriteria: [
      "Clean data mapping logic.",
      "Correct date formatting.",
      "Safely extracting required fields."
    ],
    logicHint: "Use .map() to return a new object literal for each item with the transformed fields.",
    timeLimit: "20 mins"
  },
  {
    id: 13,
    title: "Deep Object Filter",
    difficulty: "Hard",
    description: "Given a deeply nested object, remove all keys that match a specific condition (e.g., null values).",
    requirements: [
      "Must recurse through objects and arrays.",
      "Must remove keys with value 'null' or 'undefined'.",
      "Return a cleaned version of the object."
    ],
    evaluationCriteria: [
      "Recursive depth handling.",
      "Correctness of cleaning logic (objects vs arrays).",
      "Preserving the structure of non-null fields."
    ],
    logicHint: "Object.entries combined with .reduce() is a powerful way to reconstruct cleaned objects.",
    timeLimit: "45 mins"
  },
  {
    id: 14,
    title: "Find Longest Word in String",
    difficulty: "Easy",
    description: "Use array methods to find the longest word in a given sentence.",
    requirements: [
      "Handle punctuation (ignore them).",
      "Correctly use split(), map(), and reduce().",
      "If multiple same-length words, return the first one."
    ],
    evaluationCriteria: [
      "Correct regex for stripping punctuation.",
      "Optimal use of reduce() to track the longest word.",
      "One-liner implementation preferred."
    ],
    logicHint: "Split by space, map to remove special chars, then reduce to compare lengths.",
    timeLimit: "10 mins"
  },
  {
    id: 15,
    title: "Chunk Array Utility",
    difficulty: "Mid",
    description: "Write a function that splits an array into chunks of a specified size [[1,2], [3,4]].",
    requirements: [
      "Handle uneven chunk sizes for the last element.",
      "Original array remains unchanged.",
      "Use .reduce() to build the final list."
    ],
    evaluationCriteria: [
      "Correct chunking logic.",
      "Concise implementation.",
      "Edge case handling (chunk size > array length)."
    ],
    logicHint: "Use reduce() and check if the last chunk in the accumulator has space; if not, create a new one.",
    timeLimit: "25 mins"
  }
];
