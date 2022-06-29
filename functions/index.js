// func 1
function getSenseOfLife() {
  return 42;
}

// --- test data
console.log(getSenseOfLife());

//func 2
function getSquared(number) {
  return number * number;
}

console.log(getSquared(5));

//func 3
function sum(number1, number2) {
  return number1 + number2;
}

// --- test data
console.log(sum(-34));

//func 4
function printMessage(value) {
  return 'I am ' + value + ' years old';
}

console.log(printMessage(-34));
console.log(printMessage(undefined));
console.log(printMessage(25 + 8));
console.log(printMessage(null));

//func 5
const mult = (firstNum, secondNum) => firstNum * secondNum;

// --- test data
console.log(mult(-34, -76));
console.log(mult(undefined, null));

//func 6

const sumFunc = (from, to) => {
  let res = 0;

  for (let i = from; i <= to; i += 1) {
    res += i;
  }

  return res;
};

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  return sumFunc(firstFrom, firstTo) > sumFunc(secondFrom, secondTo);
}

// func 7
const square = Num => Num * Num;

// --- test data
console.log(square(-34, -76));
console.log(square(undefined, null));

//func 8
const getMagicNumber = () => 17;

// --- test data
console.log(getMagicNumber(null));
