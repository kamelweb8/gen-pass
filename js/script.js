// Function to generate password
function generate() {
  const length = document.getElementById("length").value;
  const useUpper = document.getElementById("upper").checked;
  const useLower = document.getElementById("lower").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}<>?";

  let chars = "";
  if (useUpper) chars += upper;
  if (useLower) chars += lower;
  if (useNumbers) chars += numbers;
  if (useSymbols) chars += symbols;

  if (chars.length === 0) {
    alert("You must select at least one character type!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  document.getElementById("password").value = password;
  checkStrength(password);
}

// Function to copy password
function copyPassword() {
  const passwordField = document.getElementById("password");
  if (passwordField.value === "") {
    alert("No password to copy!");
    return;
  }
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied to clipboard ✅");
}

// Function to check password strength
function checkStrength(password) {
  const strengthBar = document.getElementById("strength-bar");
  const strengthText = document.getElementById("strength-text");

  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  // Reset classes
  strengthBar.className = "progress-bar";

  if (strength <= 2) {
    strengthBar.style.width = "33%";
    strengthBar.classList.add("bg-danger");
    strengthText.textContent = "Weak";
  } else if (strength === 3 || strength === 4) {
    strengthBar.style.width = "66%";
    strengthBar.classList.add("bg-warning");
    strengthText.textContent = "Medium";
  } else {
    strengthBar.style.width = "100%";
    strengthBar.classList.add("bg-success");
    strengthText.textContent = "Strong";
  }
}
