// let throttle = require('lodash.throttle');
let inputForm = document.querySelector('.feedback-form');

inputForm.addEventListener('input', event => {
  const {
    elements: { email, message },
  } = event.currentTarget;

  localStorage.setItem('feedback-form-state', {email.value message.value});
  console.log(localStorage.getItem('feedback-form-state'));
});
