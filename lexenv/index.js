/* eslint-disable */

const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger1 = createMessenger();
const messanger2 = createMessenger();
messanger2.sendMessage('James');
const messanger3 = createMessenger();
run();

// GLOBAL LEX ENV
// {
//   'enviromentRecord': {
//     'message': 'Test',
//     'weight': 55,
//     'run': {
//         console.log('RUN');
//      },
//      'createMessenger': { ..},
//      'messanger': ....
//   },
//   'outherLexicalEnv': null
// }

// messanger1 LEX ENV
// {
//   'enviromentRecord': {
//      'sendMessage': 'func',
//      'setMessage': 'func',
//      'setSender': 'func',
//      'message': '...'
//      'sender': '...'
//      'object': { ... }
//    }
//   'outherLexicalEnv': GLOBAL LEX ENV
// }
