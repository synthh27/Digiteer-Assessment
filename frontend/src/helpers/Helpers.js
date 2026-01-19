// EMAIL FORMAT VALIDATOR
const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// PASSWORD LENGTH VALIDATOR
const isValidPassword = (password) => password.length >= 8;

export {isValidEmail, isValidPassword};