const isEmpty = (string) => {
  if(string.trim() === '') return true;
  else return false;
}

const isEmail = (email) => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(email.match(regEx)) return true;
  else return false;
}

exports.validateSignupData = (newUser) => {
  let errors = {};

  if(isEmpty(newUser.email)) {
    errors.email = 'Must not be empty'
  } else if (!isEmail(newUser.email)){
    errors.email = 'Must be a valid email address'
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  }
}
