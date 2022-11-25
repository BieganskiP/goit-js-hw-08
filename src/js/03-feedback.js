let throttle = require('lodash.throttle');
let inputForm = document.querySelector('.feedback-form');

inputForm.addEventListener('input', event => {
  const {
    elements: { email, message },
  } = event.currentTarget;

  let storedInput = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(storedInput));
});

let storedOutput = JSON.parse(localStorage.getItem('feedback-form-state'));

if (localStorage.getItem('feedback-form-state') === null) {
  inputForm.querySelector('label > input').value = '';
  inputForm.querySelector('label > textarea').value = '';
} else {
  inputForm.querySelector('label > input').value = storedOutput.email;
  inputForm.querySelector('label > textarea').value = storedOutput.message;
}

inputForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));
  inputForm.querySelector('label > input').value = '';
  inputForm.querySelector('label > textarea').value = '';
  localStorage.removeItem('feedback-form-state');
});
