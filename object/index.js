/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

// input: obj, str, str
// output: obj

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// assign
// input: object, object
// output: object
function addPropertyV2(obj, key, value) {
  obj[key] = value;
  return Object.assign({}, obj);
}

// assign
// input: object, object
// output: object
function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

const transaction = {
  value: 170,
};

console.log(transaction);

const resultFunc1 = addPropertyV3(transaction, 'city', 'Lviv');
const resultFunc2 = addPropertyV3(resultFunc1, 'name', 'Maksim');

console.log(resultFunc1);
console.log(resultFunc2);
console.log(transaction);
