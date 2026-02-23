const form = document.getElementById("signupForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const mobile = document.getElementById("mobile");
const email = document.getElementById("email");
const password = document.getElementById("password");
const terms = document.getElementById("terms");
const togglePassword = document.getElementById("togglePassword");

const errors = {
  firstNameError: document.getElementById("firstNameError"),
  lastNameError: document.getElementById("lastNameError"),
  mobileError: document.getElementById("mobileError"),
  emailError: document.getElementById("emailError"),
  passwordError: document.getElementById("passwordError"),
  termsError: document.getElementById("termsError"),
};

/* Show / hide password */
togglePassword.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
  togglePassword.classList.toggle("fa-eye-slash");
});

/* Validation */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  Object.values(errors).forEach(err => err.textContent = "");

  if (firstName.value.trim() === "") {
    errors.firstNameError.textContent = "First name required";
    valid = false;
  }

  if (lastName.value.trim() === "") {
    errors.lastNameError.textContent = "Last name required";
    valid = false;
  }

  if (!/^\d{10}$/.test(mobile.value)) {
    errors.mobileError.textContent = "Enter valid 10-digit mobile number";
    valid = false;
  }

  if (!email.value.includes("@")) {
    errors.emailError.textContent = "Enter valid email address";
    valid = false;
  }

  if (password.value.length < 6) {
    errors.passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  }

  if (!terms.checked) {
    errors.termsError.textContent = "You must agree to the terms";
    valid = false;
  }

  if (valid) {
    alert("Signup successful!");
    form.reset();
  }
});
