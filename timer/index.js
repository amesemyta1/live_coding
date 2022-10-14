function getName() {
  console.log(this);
  return 'James';
}

getName();

// const obj = {
//   run: () => {
//     console.log(obj);
//   },
// };

// obj.run();

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  startTimer() {
    console.log('startTimer context', this);

    // input: callback, number
    // output: ID
    setInterval(() => {
      console.log('callback context', this);

      this.secondsPassed += 1;
    }, 1000);

    // window.setInterval
  },
  stopTimer() {},
  getTimer() {},
  resetTimer() {},
};

// test data
timer.startTimer(); // context +

// const funcStart = timer.startTimer;
// funcStart(); // context -

// 1. func called separately
// 2. called func
// 3. nested funcrions

const asd = 'Р';
const zxc = 'P';
console.log(asd == zxc);
