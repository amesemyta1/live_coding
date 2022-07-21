// algo
// 1. get array of key-value - entries = [[key1, val1], [key2, val2]]
// 2. literate array of entries - on every step create new obj [{obj}, {obj}]
// 3. sort array & return it

const getCustomersList = obj =>
  Object.entries(obj)
    .map(([id, customer]) => ({ id, ...customer }))
    .sort((a, b) => a.age - b.age);

// DRAFT SOLUTION
// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map((id, customer) => {
//       // const obj = {};
//       // Object.assign(obj, { id: entry[0] });
//       // return Object.assign(obj, entry[1]);
//       return { id, ...customer };
//     })
//     .sort((a, b) => (a.age > b.age ? 1 : -1));
// console.log(getCustomersList(customers));

// ANNA
// NORM
// 1 Use destructuring
// const getCustomersList = obj => {
//   return Object.entries(obj)
//     .map(arr => ({ ...arr[1], id: arr[0] }))
//     .sort((a, b) => a.age - b.age);
// };

// ROMAN
// NORM
// use push instead concat
// use map
// rename data
// const getCustomersList = customers =>
//   Object.entries(customers)
//     .reduce((acc, [id, data]) => acc.concat({ id, ...data }), [])
//     .sort((a, b) => a.age - b.age);

// ALEXANDR
// GOOD
// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((customerFirst, customerSecond) => customerFirst.age - customerSecond.age);

// ANASTASIYA
// dont use values
// dont use index
// bad naming
// const getCustomersList = obj => {
//   // const keys = Object.keys(obj);
//   // const values = Object.values(obj);
//   return Object.keys(obj)
//     .map(key => ({ ...obj[key], id: key }))
//     .sort((a, b) => a.age - b.age);

//   // return values.map((el, index) => ({ ...el, id: keys[index] })).sort((a, b) => a.age - b.age);
// };

// OLEKSIY
// BAD
// dont use values
// dont use index
// bad naming
// remove redunt vars
// const getCustomersList = obj => {
//   const customersIdList = Object.keys(obj);

//   const resultArray = Object.values(obj)
//     .map((customerIdValue, index) => ({ ...customerIdValue, id: customersIdList[index] }))
//     .sort((a, b) => a.age - b.age);
//   return resultArray;
// };

// ALEKSANDR
// bAD
// const getCustomersList = obj => {
//   if (obj === {}) {
//     return [];
//   }

//   const keys = Object.keys(obj);
//   const arr = Object.values(obj);

//   arr.map((el, index) => {
//     el.id = keys[index];
//   });
//   arr.sort((a, b) => +a.age - +b.age);

//   console.log(arr);
//   console.log(obj);

//   return arr;
// };

// VITALIY
// BAD
// dont use shift
// fix eslint errors
// bad naming
// redundant var
// const getCustomersList = obj => {
//   const moderArr = Object.entries(obj).map(arr => {
//     let id = { id: arr.shift() };
//     return (arr[0] = { ...arr[0], ...id });
//   });

//   return moderArr.sort((a, b) => a.age - b.age);
// };

// EVGEN
// dont use
// bad naming
// const getCustomersList = customers =>
//   Object.keys(customers)
//     .reduce((resArr, key) => {
//       resArr.push({ id: key, ...customers[key] });
//       return resArr;
//     }, [])
//     .sort((a, b) => a.age - b.age);

// DIMA
// BAD
// const getCustomersList = obj => {
//   // obj is the object we want to get the keys from
//   const order = Object.entries(obj).sort((a, b) => a[1].age - b[1].age); // sort the object by age
//   const first = order.map(el => el[1]); // get the values
//   const second = order.map(el => el[0]); // get the keys
//   return first.map((el, index) => ({ ...el, id: second[index] })); // print the values and keys
// };
// test data

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-3': {
    name: 'Harry',
    age: 33,
  },
  'customer-id-4': {
    name: 'Marry',
    age: 24,
  },
};

const emptyObj = {};

const test = getCustomersList(customers);
console.log(test);
