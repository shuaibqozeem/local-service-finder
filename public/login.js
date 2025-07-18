document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
  const passwordElement = document.getElementById("password");
  const submitButton = document.getElementById("submit");
  const emailElement = document.getElementById("email");
  const errorElement = document.getElementById("error");
  const errorElement1 = document.getElementById("error1");
  const toggleButtonPass = document.getElementById("pass-btn");
  // const hamburgerButton = document.getElementById("hamburger");

  // Toggle password visibility
  if (toggleButtonPass) {
    toggleButtonPass.addEventListener("click", () => {
      passwordElement.type = passwordElement.type === "password" ? "text" : "password";
    });
  }

  // Login form submission
  if (submitButton) {
    submitButton.addEventListener("click", async (e) => {
      e.preventDefault();
      errorElement.innerHTML = ""; // Clear previous errors

      const emailValue = emailElement.value.trim();
      const passwordValue = passwordElement.value.trim();

      console.log("Email:", emailValue); // Log the email value
      console.log("Password:", passwordValue); // Log the password value

      try {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailValue,
            password: passwordValue,
          }),
        });

        const result = await response.json();

        if (response.ok) {
          errorElement1.innerHTML = "<p>Login successful!</p>";
          window.location.href = "/";
        } else {
          errorElement.innerHTML = `<p>${result.message}</p>`;
        }
      } catch (error) {
        console.error("Error:", error);
        errorElement.innerHTML = `<p>There was an error processing your request. Please try again.</p>`;
      }
    });
  }

  // Hamburger menu toggle
  document.getElementById('hamburger').addEventListener('click', function () {
    document.querySelector('.heading').classList.toggle('active');
  });
});
