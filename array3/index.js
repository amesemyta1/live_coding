// input: array, callback
// output: array

// callback
// input: element, index (optional), array (optional)
// output: boolean

// algo
// 1. create new arr
// 2. iterate input arr
// 3. apply for every el
// 4. if true - push

const filterArrayElements = (arr, callback) => {
  const resArr = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (callback(arr[index], index, arr) === true) {
      resArr.push(arr[index]);
    }
  }

  return resArr;
};

// -- test data
const testCallback = (el, index, arr) => {
  if (el > 3) {
    return true;
  }
  return false;
};

console.log(filterArrayElements([1, 2, 2, 3, 3, -3, 4, 4, -4, 5, -5, 5], testCallback));
console.log(
  filterArrayElements(['asd', 'dsds', 'adsd', 'asd', 'asd', 'zczc', 'zxc'], el => el === 'asd'),
);
console.log(filterArrayElements([undefined, undefined, null, NaN], el => el === undefined));

function multiply(...anyName) {
  return anyName.reduce((acc, el) => acc * el);
}

console.log(multiply(10, 2, 5, 7, -2));
