const email = document.getElementById("email");
const otp = document.getElementById("otp");
const newPassword = document.getElementById("newPassword");

const sendOtpBtn = document.getElementById("sendOtpBtn");
const resetBtn = document.querySelector(".reset-btn");

const otpGroup = document.querySelector(".otp-group");
const passwordGroup = document.querySelector(".password-group");
const timerText = document.getElementById("timer");

const togglePassword = document.getElementById("togglePassword");

const emailError = document.getElementById("emailError");
const otpError = document.getElementById("otpError");
const passwordError = document.getElementById("passwordError");

let countdown;

/* Send OTP */
sendOtpBtn.addEventListener("click", () => {
  emailError.textContent = "";

  if (!email.value.includes("@")) {
    emailError.textContent = "Enter a valid email address";
    return;
  }

  // Simulate OTP send
  alert("OTP sent to your email");

  sendOtpBtn.disabled = true;
  otpGroup.classList.remove("hidden");
  passwordGroup.classList.remove("hidden");
  resetBtn.classList.remove("hidden");

  startTimer(30);
});

/* Countdown timer */
function startTimer(seconds) {
  let timeLeft = seconds;
  timerText.textContent = `${timeLeft}s`;

  countdown = setInterval(() => {
    timeLeft--;
    timerText.textContent = `${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      sendOtpBtn.disabled = false;
      timerText.textContent = "Resend";
    }
  }, 1000);
}

/* Show / hide password */
togglePassword.addEventListener("click", () => {
  newPassword.type = newPassword.type === "password" ? "text" : "password";
  togglePassword.classList.toggle("fa-eye-slash");
});

/* Reset password */
document.getElementById("resetForm").addEventListener("submit", (e) => {
  e.preventDefault();

  otpError.textContent = "";
  passwordError.textContent = "";

  if (otp.value.length !== 6) {
    otpError.textContent = "Enter valid 6-digit OTP";
    return;
  }

  if (newPassword.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    return;
  }

  alert("Password reset successful!");
});
