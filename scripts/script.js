
const submitButton = document.querySelector('button')
const passwordFields = document.querySelectorAll("input[type='password']")


function onChange() {
    //check if both passwords are the same
    if (passwordFields[0].value === passwordFields[1].value) {
        passwordFields.forEach(field => {
            field.classList.remove('error');
        });
        submitButton.disabled = false;
    } else if(passwordFields[1].value != '') {//only if confirm password is not empty
        passwordFields.forEach(field => {
            field.classList.add('error');
        });
        submitButton.disabled = true;
    }
  }
