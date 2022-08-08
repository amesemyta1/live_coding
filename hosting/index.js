// test();
// // testArrowFunc();
// console.log(price);

// function test() {
//   console.log('test');
// }

// // var testArrowFunc = () => {
// //   console.log('test');
// // };

// var price = 100;

// var price = 200;
// testVar();

// function testVar() {
//   console.log(price);
// }
// // var price = 200;
// // testVar();

// example 1

// console.log(message);
// var message = 'Hoisting is here!';

// // example 2

// var a = 55;
// console.log(a);

// if (a) {
//   var a = 1;

//   console.log(a);
// }

// console.log(a);

// // example 3

// var a = 77;
// console.log(a);

// function print() {
//   var a = 2;

//   console.log(a);
// }
// print();

// console.log(a);

// const createNewTask = () => {
//   const taskInputField = document.querySelector('.task-input');
//   const inputFieldValue = taskInputField.value;

//   if (inputFieldValue === '') {
//     return;
//   }

//   tasks.push({
//     text: inputFieldValue,
//     done: false,
//   });

//   taskInputField.value = '';

//   renderTasks(tasks);
// };

// const createBtn = document.querySelector('.create-task-btn');
// createBtn.addEventListener('click', createNewTask);

// const onToggleTask = e => {
//   const isCheckbox = e.target.classList.contains('list__item-checkbox');

//   if (!isCheckbox) {
//     return;
//   }

//   const taskData = tasks.find(task => task.id === e.target.dataset.id);
//   Object.assign(taskData, { done: e.target.checked });
//   renderTasks(tasks);
// };

// listElem.addEventListener('click', onToggleTask);
