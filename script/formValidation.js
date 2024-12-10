const signupForm = document.querySelector('.signUpForm');
const userEmail = document.querySelector('#emailId');
const errorMessage = document.querySelector('#error');
const successMessage = document.querySelector('#success');
const userForm = document.querySelector('.userform');

let prevEmailValue = '';

const signForm = function (event) {
  event.preventDefault();

  const emailValue = userEmail.value.trim();

  if (emailValue === prevEmailValue) {
    errorMessage.textContent = 'This email already exists in our records';
    successMessage.textContent = '';
    errorMessage.className = 'error';
    userForm.style.height = '212px';
  } else {
    prevEmailValue = emailValue;
    successMessage.textContent =
      'Thank you! You have been added to our records';
    errorMessage.textContent = '';
    successMessage.className = 'success';
    userForm.style.height = '228px';
  }
  userEmail.value = '';
};

signupForm.addEventListener('submit', signForm);
