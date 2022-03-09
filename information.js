
const informationForm = document.querySelector('#informationform');
const firstname = document.querySelector('#fname');
const lastname = document.querySelector('#lname');

const email = document.querySelector('#email');
const mobile = document.querySelector('#mobile');
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const mobileError = document.querySelector('#mobile-error');
const lastnameError = document.querySelector('#lastname-error');



function validateUsername(){
  if(!firstname.validity.valid){
    firstname.classList.add('has-error');
    if(firstname.validity.tooShort){
      nameError.innerText = 'First name must be 2 length or more';
    } else {
      nameError.innerText = 'First name is required.';
    }
    return false;
  } else {
    firstname.classList.remove('has-error');
    firstname.classList.add('has-success');
    nameError.innerText = '';
    return true;
  }
}
function validateUserlastname(){
    if(!lastname.validity.valid){
      lastname.classList.add('has-error');
      if(lastname.validity.tooShort){
        lastnameError.innerText = 'Last name must be 2 length or more';
      } else {
        lastnameError.innerText = 'Last name is required.';
      }
      return false;
    } else {
      lastname.classList.remove('has-error');
      lastname.classList.add('has-success');
      lastnameError.innerText = '';
      return true;
    }
  }

function validateEmail(){
  if(!email.validity.valid){
    email.classList.add('has-error');
    if(email.validity.typeMismatch){
      emailError.innerText = 'Please enter valid email.';
    } else {
      emailError.innerText = 'Email is required.';
    }
    return false;
  } else {
    email.classList.remove('has-error');
    email.classList.add('has-success');
    emailError.innerText = '';
    return true;
  }
}



function validateMobile(){
    if(!mobile.validity.valid){
        mobile.classList.add('has-error');
        if(mobile.validity.tooShort){
            mobileError.innerText = 'Mobile number must be 13 length';
        }else{
            mobileError.innerText = 'Mobile number is required';
        }
        return false;
    }else{
    mobile.classList.remove('has-error');
    mobile.classList.add('has-success');
    mobileError.innerText = '';
    return true;
    }
}



firstname.addEventListener('input', () => {
  validateUsername();
});

email.addEventListener('input', () => {
  validateEmail();
});

mobile.addEventListener('input', () => {
    validateMobile();
  });
lastname.addEventListener('input', () => {
    validateUserlastname();
  });

const nextPage = document.querySelector('#nextpage')
nextPage.addEventListener('click', e => {
  e.preventDefault();
  const isValidname = validateUsername();
  const isValidEmail = validateEmail();
  const isValidlastname = validateUserlastname();
  const isValidMobile = validateMobile();


  if(isValidname && isValidEmail && isValidlastname && isValidMobile  ){
    dynamicModalShow('#success');
  } else {
    dynamicModalShow('#user-notification');
  }
});


// Modals
const modalEl = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal-close');



function dynamicModalShow(modalSelector){
  const modal = document.querySelector(modalSelector);
  if(modal){
    modal.classList.add('open');
    const modalCloseBtn = modal.querySelector('.modal-close')
    modalCloseBtn.addEventListener('click', () => {
      dynamicModalClose(modalSelector);
    });
  }
}

function dynamicModalClose(modalSelector) {
  const modal = document.querySelector(modalSelector);
  if(modal){
    modal.classList.remove('open');
  }
}

