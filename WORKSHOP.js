document.getElementById("showPassword").addEventListener("change", function() {
  const passwordField = document.getElementById("password");
  passwordField.type = this.checked ? "text" : "password";
});

document.getElementById("password").addEventListener("input", function() {
  const strengthMessage = document.getElementById("password-strength");
  const password = this.value;

  if (password.length < 6) {
      strengthMessage.textContent = "Weak password";
      strengthMessage.style.color = "red";
  } else if (password.length >= 6 && password.length < 10) {
      strengthMessage.textContent = "Moderate password";
      strengthMessage.style.color = "orange";
  } else { 
      strengthMessage.textContent = "Strong password";
      strengthMessage.style.color = "green";
  }
});
