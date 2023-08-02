const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

//q2:
//Given an array of numbers, use the filter function to create a new array containing only the even numbers.
//Input:   const numbers = [1, 2, 3, 4, 5, 6];
//Output:  [2, 4, 6]

const numbers1 = [1, 2, 3, 4, 5, 6];
const evennumbers = numbers1.filter((num1) => num1 % 2 == 0);
console.log(evennumbers);

//q3:
// Capitalize names
// Given an array of objects with 'name' properties, use the map function to create
// a new array where each name is capitalized (first letter in uppercase, rest in lowercase).

// //Input:  const people = [
//     { name: 'john', age: 28 },
//     { name: 'JANE', age: 24 },
//     { name: 'aLiCe', age: 30 },
//   ];
//   Output: [
//      { name: 'John', age: 28 },
//      { name: 'Jane', age: 24 },
//      { name: 'Alice', age: 30 },
//   ]

const people = [
  { name: "john", age: 28 },
  { name: "JANE", age: 24 },
  { name: "aLiCe", age: 30 },
];

const capitalizedNames = people.map((person) => {
  return {
    name:
      person.name.charAt(0).toUpperCase() + person.name.slice(1).toLowerCase(),
    age: person.age,
  };
});

console.log(capitalizedNames);

// Task 4: Filter objects by age
// Given an array of objects with 'name' and 'age' properties, use the filter function
// to create a new array containing only people above a certain age (e.g., 25).
// Input:  const people = [
//   { name: 'John', age: 28 },
//   { name: 'Jane', age: 24 },
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 22 },
// ];

const people1 = [
  { name: "John", age: 28 },
  { name: "Jane", age: 24 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 22 },
];

const certainAge = people1.filter((person1) => person1.age > 25);
console.log(certainAge);

// Task 5: Extracting titles from objects
// Given an array of book objects with 'title' and 'author' properties, use the map function
// to create a new array containing only the titles of the books.
// Input: const books = [
//   { title: 'Harry Potter', author: 'J.K. Rowling' },
//   { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
// ];
// Output:  ['Harry Potter', 'To Kill a Mockingbird', 'The Great Gatsby']

const books = [
  { title: "Harry Potter", author: "J.K. Rowling" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
];

const onlytitle = books.map((extract) => extract.title);
console.log(onlytitle);

// Task 6: Filter and calculate discounted prices
// Given an array of products with 'name', 'price', and 'discount' properties,
//  use the filter function to create a new array containing only the products
//  that have a discount greater than 10%. Then, use the map function to
//  calculate the discounted prices for each of those products.
// Input:
// const products = [
//   { name: 'Laptop', price: 1000, discount: 0.2 },
//   { name: 'Phone', price: 500, discount: 0.1 },
//   { name: 'Tablet', price: 300, discount: 0.05 },
//   { name: 'Headphones', price: 80, discount: 0.15 },
// ];
// Output:
// [
//  { name: 'Laptop', discountedPrice: 800 },
//  { name: 'Phone', discountedPrice: 450 },
//  { name: 'Headphones', discountedPrice: 68 },
//  ]

const products = [
  { name: "Laptop", price: 1000, discount: 0.2 },
  { name: "Phone", price: 500, discount: 0.1 },
  { name: "Tablet", price: 300, discount: 0.05 },
  { name: "Headphones", price: 80, discount: 0.15 },
];
const newProduct = products
  .filter((show) => show.discount >= 0.1)
  .map((extract) => extract.price - extract.discount * extract.price);
console.log(newProduct);
// Task 7: Extract names with more than 5 characters
// Given an array of names, use the filter function to create a new array
//  containing only the names with more than 5 characters. Then, use the map
//  function to capitalize the first letter of each of those names.
// Input:
// const names = ['john', 'emma', 'michael', 'sophia', 'alexander'];
// Output:
//  ['Michael', 'Alexander']

const names = ["john", "emma", "michael", "sophia", "alexander"];
const newNames = names
  .filter((show) => show.length > 5)
  .map((show) => show.charAt(0).toUpperCase() + show.slice(1));
console.log(newNames);

//Task 8: Filter and calculate total cost
// Given an array of orders with 'product', 'quantity', and 'price' properties,
//  use the filter function to create a new array containing only the orders
//   with quantity greater than 5. Then, use the map function to calculate the
//   total cost for each of those orders.
// Input:
// const orders = [
//   { product: 'Laptop', quantity: 2, price: 1000 },
//   { product: 'Mouse', quantity: 10, price: 25 },
//   { product: 'Keyboard', quantity: 8, price: 50 },
//   { product: 'Monitor', quantity: 3, price: 200 },
// ];
// Output:
//  [2000, 250, 400]

const orders = [
  { product: "Laptop", quantity: 2, price: 1000 },
  { product: "Mouse", quantity: 10, price: 25 },
  { product: "Keyboard", quantity: 8, price: 50 },
  { product: "Monitor", quantity: 3, price: 200 },
];
const newOrder = orders
  .filter((extract) => extract.quantity > 5)
  .map((show) => show.price * show.quantity);
console.log(newOrder);

// Task 9: Filter and extract specific properties
// Given an array of people with 'name', 'age', and 'city' properties, use the
// filter function to create a new array containing only the people who are
// above 30 years old. Then, use the map function to extract only their names.
// Input:
// const people = [
//   { name: 'John', age: 28, city: 'New York' },
//   { name: 'Jane', age: 35, city: 'Chicago' },
//   { name: 'Alice', age: 42, city: 'San Francisco' },
//   { name: 'Bob', age: 25, city: 'Seattle' },
// ];
// Output:
// ['Jane', 'Alice']

const people2 = [
  { name: "John", age: 28, city: "New York" },
  { name: "Jane", age: 35, city: "Chicago" },
  { name: "Alice", age: 42, city: "San Francisco" },
  { name: "Bob", age: 25, city: "Seattle" },
];
const newPeople = people2
  .filter((show) => show.age > 30)
  .map((show) => show.name);
console.log(newPeople);
