'use strict';

const withdraw = function (clients, balances, client, amount) {
  if (balances[clients.indexOf(client)] - amount < 0) {
    return -1;
  }
  balances[clients.indexOf(client)] -= amount;
  return balances[clients.indexOf(client)];
};

//example 1:

//input
withdraw1(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

//output
//37
//и массив balances должен быть [1400, 37, -6]

//example 2:

//input
withdraw1(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

//output
//-1
//и массив balances должен быть [1400, 87, -6]

// BAD
// const withdraw2 = (clients, balances, client, amount) => {
//     if (balances.find((item, index) => clients.indexOf(client) === index) < amount) {
//       return -1;
//     }
//     return balances.find((item, index) => clients.indexOf(client) === index) - amount;
//   };

// BAD
// const withdraw = (clients, balances, client, amount) =>
//   balances[clients.indexOf(client)] >= amount ? (balances[clients.indexOf(client)] -= amount) : -1;

// GOOD
// const withdraw = (clients, balances, client, amount) => {
//   let clientIndex = balances[clients.indexOf(client)];
//   if (balances[clientIndex] < amount) {
//     return -1;
//   }
//   balances[clientIndex] -= amount;
//   return balances[clientIndex];
// };

// BAD
// const withdraw = (clients, balances, client, amount) => {
//     const curentClient = clients.indexOf(client);
//     const newBalance = balances[curentClient] - amount;
//     return newBalance > 0 ? newBalance : -1;
//   };

// NORM
// const withdraw = function (clients, balances, client, amount) {
//     if (balances[clients.indexOf(client)] - amount < 0) {
//       return -1;
//     }
//     balances[clients.indexOf(client)] -= amount;
//     return balances[clients.indexOf(client)];
//   };

//NORM
// const withdraw=(clients,balances,client,amount)=>{
//     let clientIndex=clients.indexOf(client);
//     return balances[clientIndex]<amount?-1:balances[clientIndex]-=amount;
// }

// DIMA
// const withdraw = (clients, balances, client, amount) => {
//     const clientBalance = balances[clients.indexOf(client)];

//     return clientBalance < amount ? -1 : clientBalance - amount;
//   };

// const withdraw = (clients, balances, client, amount) => {
//     if (balances[clients.indexOf(client)] > amount) {
//       return (balances[clients.indexOf(client)] -= amount);
//     } else {
//       return -1;
//     }
// }

// const withdraw = (clients, balances, client, amount) =>
// balances[clients.indexOf(client)] >= amount ? balances[clients.indexOf(client)] - amount : -1;

// const getRandomNumbers = (length, from, to) => {
//     const arr = new Array(length);
//     if (to - from < 1) {
//       return null;
//     }
//     return arr.fill(Math.trunc(Math.random() * (Math.ceil(to) - Math.ceil(from)) + Math.ceil(from)));
//   };
