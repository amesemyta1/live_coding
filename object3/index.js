function compareObjects(firstObj, secondObj) {
  return !Object.keys({ ...firstObj, ...secondObj }).some(key => firstObj[key] !== secondObj[key]);
}

// const compareObjectsV2 = (obj1, obj2) =>
//   Object.keys(obj1).length !== Object.keys(obj2).length
//     ? false
//     : !Object.keys(obj1).some(key => obj1[key] !== obj2[key]);

// function compareObjectsV3(obj1, obj2) {
//   const firstKey = Object.keys(obj1);
//   const secondKey = Object.keys(obj2);

//   if (firstKey.length !== secondKey.length) {
//     return false;
//   }

//   return secondKey.every(key => obj1(key) === obj2(key));
// }

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

compareObjects(obj1, obj2); // ==> false
compareObjects(obj2, obj3); // ==> false
compareObjects(obj1, obj4); // ==> true
