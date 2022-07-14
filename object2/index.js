/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
// function buildObject(keysList, valuesList) {
//   const obj = {};

//   for (let i = 0; i < keysList.length; i += 1) {
//     obj = { keysList[i]: valuesList[i] };
//   }

//   return obj;
// }

function buildObject(keysList, valuesList) {
  return keysList.reduce((obj, key, index) => {
    return { ...obj, [key]: valuesList[index] };
  }, {});
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }

console.log(result);

// function compareObjects(obj1, obj2) {
//   // put your code here
// }

// // examples
// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   age: 17,
// };

// const obj3 = {
//   name: 'Bob',
//   age: 17,
//   student: false,
// };

// const obj4 = {
//   name: 'Tom',
//   age: 17,
// };

// compareObjects(obj1, obj2); // ==> false
// compareObjects(obj2, obj3); // ==> false
// compareObjects(obj1, obj4); // ==> true
