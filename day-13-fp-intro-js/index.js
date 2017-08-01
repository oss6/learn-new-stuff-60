// => var, let, const
/*
  A variable declared with the const keyword can't be reassigned.
  Sometimes it’s useful to reassign variables.
  For example, if you’re using manual, imperative iteration rather than a more functional approach, you can iterate a counter assigned with let.
*/
const animal = 'zebra';
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// => Assign existing variables to object property keys of the same name
const a = 'a';
const oA = { a };

// - Spread operator
// const b = 'b';
// const oB = { b };

// const c = {...oA, ...oB};

// Can be done as follows:
// const d = Object.assign({}, oA, oB); => { a: 'a', b: 'b' }

// => Destructuring
const [t, u] = ['a', 'b'];

// => Default Parameter Values
const orZero = (n = 0) => n;

// => Rest and Spread
const getTail = (head, ...tail) => tail;
getTail(1, 2, 3, 4); // [2, 3, 4]


// Rest gathers individual elements together into an array.
// Spread does the opposite: it spreads the elements from an array to individual elements.
// Consider this:
const shiftToLast = (head, ...tail) => [...tail, head];
shiftToLast(1, 2, 3); // [2, 3, 1]
