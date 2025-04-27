function hasOwnProperty(obj, prop) {
  return Object.hasOwn(obj, prop);
  }

  // Example:
  const myObj = { a: 1, b: 2 };

  console.log(hasOwnProperty(myObj, 'a')); // true
  console.log(hasOwnProperty(myObj, 'c')); // false