const loginFormHandler = async (event) => {
  event.preventDefault();

//   querySelectors to add in for when we want to collect the entered username and password
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

//   Checks to make sure all fields have inputs
  if (!username || !password) {
    alert("Please fill in all fields.");
    return;
  }

//   If both username and password are present, it will then check the users to see if it gets a match
  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    // If a match is found it will log in and return to the homepage
    if (response.ok) {
      document.location.replace("/");
    } else {
        // otherwise it will display that one or both of username/password is incorrect
      alert("Incorrect Username or Password entered. Please try again.");
    }
  }
};

// Add in when we have a login button
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
