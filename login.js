const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");

/* Show / Hide password */
togglePassword.addEventListener("click", () => {
  const type = password.type === "password" ? "text" : "password";
  password.type = type;
  togglePassword.classList.toggle("fa-eye-slash");
});

/* Validation */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;
  usernameError.textContent = "";
  passwordError.textContent = "";

  if (username.value.trim() === "") {
    usernameError.textContent = "Username is required";
    valid = false;
  }

  if (password.value.trim() === "") {
    passwordError.textContent = "Password is required";
    valid = false;
  } else if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  }

  if (valid) {
    alert("Login successful!");
    form.reset();
  }
});

/* Google login (placeholder) */
document.querySelector(".google-btn").addEventListener("click", () => {
  alert("Google login clicked (connect OAuth here)");
});
