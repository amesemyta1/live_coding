const numbersList = [102, 0, 8, 444, 10, -4, 50, 220, 1200];

// input: callback
// output: array

// callback
// input: element, index (optional), array (optional)
// output: new element

const mapRes = numbersList.map(el => {
  const newEl = el * el;
  return newEl;
});

console.log(mapRes);

// -- task 2 --

// input: callback
// output: undefined

// callback
// input: element
// output: undefined

const foreachRes = numbersList.forEach(el => {
  if (el > 0) {
    console.log(el);
  }
});

// -- task 3 --

// input: callback, acc init value (optional)
// output: number

// callback
// input: acc, element, index (optional), array (optional)
// output: new acc

const reduceRes = numbersList.reduce((acc, el) => {
  console.log('acc', acc);
  console.log('el', el);

  if (el > 100) {
    acc += el;
  }

  return acc;
}, 0);

console.log(reduceRes);
