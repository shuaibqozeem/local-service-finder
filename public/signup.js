// Get DOM elements
const passwordElement = document.getElementById("password");
const confirmPasswordElement = document.getElementById("confirm-password");
const submit = document.getElementById("submit");
const toggleButtonConfirm = document.getElementById("confirm-btn");
const toggleButtonpass = document.getElementById("pass-btn");
const emailElement = document.getElementById("email");
const fullNameElement = document.getElementById("fullname");
const usernameElement = document.getElementById("username");

// Toggle password visibility
toggleButtonConfirm.addEventListener("click", () => {
  const type = confirmPasswordElement.type === "password" ? "text" : "password";
  confirmPasswordElement.type = type;
});

toggleButtonpass.addEventListener("click", () => {
  const type = passwordElement.type === "password" ? "text" : "password";
  passwordElement.type = type;
});

// Form validation and submission
submit.addEventListener("click", async (e) => {
  e.preventDefault();

  const errorElement = document.getElementById("error");
  errorElement.innerHTML = ""; // Clear previous errors

  // Validation checks
  if (!validateEmail(emailElement.value)) {
    errorElement.innerHTML += "<p>Invalid email format.</p>";
    return;
  }
  if (!validateFullName(fullNameElement.value)) {
    errorElement.innerHTML += "<p>Full name should contain only letters and spaces.</p>";
    return;
  }
  if (!validateUsername(usernameElement.value)) {
    errorElement.innerHTML += "<p>Username should contain only alphanumeric characters.</p>";
    return;
  }
  if (!validatePassword(passwordElement.value)) {
    errorElement.innerHTML += "<p>Password must be at least 6 characters long.</p>";
    return;
  }
  if (passwordElement.value !== confirmPasswordElement.value) {
    errorElement.innerHTML += "<p>Your passwords do not match.</p>";
    return;
  }

  // If no errors, submit data
  try {
    const response = await fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emailElement.value,
        fullname: fullNameElement.value,
        username: usernameElement.value,
        password: passwordElement.value
      }),
    });

    const result = await response.json();
    if (response.ok) {
      alert("Signup successful");
      clearForm();
    } else {
      errorElement.innerHTML = `<p>${result.message}</p>`;
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

// Validation functions
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateFullName(fullName) {
  const re = /^[a-zA-Z\s]+$/;
  return fullName.trim() !== "" && re.test(fullName);
}

function validateUsername(username) {
  const re = /^[a-zA-Z0-9]+$/;
  return username.trim() !== "" && re.test(username);
}

function validatePassword(password) {
  return password.length >= 6;
}

// Clear form after successful submission
function clearForm() {
  emailElement.value = "";
  fullNameElement.value = "";
  usernameElement.value = "";
  passwordElement.value = "";
  confirmPasswordElement.value = "";
}
// JavaScript to toggle navigation on smaller screens
document.getElementById('hamburger').addEventListener('click', function () {
    document.querySelector('.heading').classList.toggle('active');
  });
  