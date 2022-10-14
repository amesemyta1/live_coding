const formElem = document.querySelector('.login-form');

const serverUrl = 'https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users';

function createUserHandler(event) {
  event.preventDefault();

  // read form

  const user = {
    email: 'luboy@user.com',
    name: 'Aleksandr',
    password: 'qwe',
  };

  console.log(JSON.stringify(user));

  fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => alert(data))
    .catch(e => alert('error: ', e));

  // input: (onFulfilled[, onRejected])
  // output: Promise
  console.log('done');
}

formElem.addEventListener('submit', createUserHandler);
