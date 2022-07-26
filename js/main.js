// initialising elements
const inputs = document.querySelectorAll('input');
const select = document.querySelector('select');
const txtError = document.querySelector('.txt-error p');

// storing values for each input
let formValues = {
  "inputs": [],
  "gender": "",
  "password": ""
};


//===========================================================================================================//
// EVENT LISTENERS
 //===========================================================================================================//

 /**
  * Event for input clicks.
  * Changes the input color as an active when clicked.
  */
const inputActivated = (element) => {
  const clickedElement = element.target;
  if (clickedElement != undefined) {
    clickedElement.parentElement.classList.add("active");

    if (clickedElement.parentNode.classList.contains('error')) {
      clickedElement.parentElement.classList.remove("error");
    }
  }
}

const inputError = (e) => {
  const clickedElement = e;
  if(clickedElement != undefined) {
    clickedElement.parentElement.classList.add("error");
  }
}


/**
 * Event for select input change.
 * Hides the elements as the select value changes for nationality.
 */
const selectChanged = () => {
  const muField = document.querySelector('.blockMu');
  const otherField = document.querySelector('.blockOther');

  muField.classList.add('hide');
  otherField.classList.add('hide');

  if(select.value == 'mu') {
    muField.classList.remove('hide');
  }

  if(select.value == 'other') {
    otherField.classList.remove('hide');
  }
}




window.onload = function () {
  document.addEventListener('click', (element) => {
    inputActivated(element);
  }, false);


  console.log("loaded..");
}
 //===========================================================================================================//



/**
 * Set the error message below the confirm password input
 */
const setMessage = (message, color) => {
  const errorMessage = document.querySelector('.txt-error p span');
  txtError.style.display = 'block';
  txtError.style.color = color;
  errorMessage.innerHTML = message;
}




// Checks if password matches with confirm password.
const checkPassword = () => {
  const password = document.querySelector('#password');
  const confirmPassword = document.querySelector('#confirm-password');

  if (password.value != confirmPassword.value || password.value == '' || password.value == null) {
    console.log("password mismatch", password.value, confirmPassword.value);

    inputError(password);
    inputError(confirmPassword);
    setMessage("Password does not match ..", "red");
    return false;
  }

  formValues.password = password.value;
  return true;
}



// Checks if the user accepted legal terms.
const checkLegal = () => {
  const legal = document.querySelector('.text__legal input');
  if(!legal.checked) {
    inputError(legal);
    setMessage("Please accept the terms and conditions ..", "red");
    return false;
  }

  return true;
}



// Checks if all the inputs are filled.
const checkInputs = () => {
  let isBlank = true;

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];

    if (input.value == '' || input.value == null) {
      if ((input.id == 'specify-nationality' && select.value == "mu") || (input.id == 'nic' && select.value == "other")) {
        break;
      }

      inputError(input);
      setMessage("Please fill all the fields", "red");
      isBlank = true;
    } else {
      isBlank = false;
      if(input.name != "gender"){
        formValues.inputs.push(input.value);
      }
    }
  }

  return isBlank;
}



// Checks if gender is filled.
const checkGender = () => {
  const checkMale = document.querySelector('#male');
  const checkFemale = document.querySelector('#female');

  if(!checkFemale.checked && !checkMale.checked) {
    setMessage("Please select your gender ..", "red");
    return false;
  }

  const checkedBox = document.querySelector('input[name="gender"]:checked');
  formValues.gender = checkedBox.value;

  return true;
}






/**
 * Reseting the form when clicked.
 * loops through all inputs and selects and resets them
 */
const resetForm = () => {
  inputs.forEach(input => {
    if (input.checked) {
      input.checked = false;
    }

    if (input.type !== 'submit') {
      input.value = "";
    }

    txtError.style.display = 'none';

    input.parentElement.classList.remove("active");
    input.parentElement.classList.remove("error");
  });

  formValues = {
    "inputs": [],
    "gender": "",
    "password": ""
  };
}



/**
 * Validating the form items.
 */
const validateForm = () => {
  if (!checkInputs() && checkPassword() && checkLegal() && checkGender()) {
    setMessage("Form submitted successfully !", "green");
  }

  console.log("FormValues : ", formValues);
}