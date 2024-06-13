const signupFormHandler = async (event) => {
  event.preventDefault();

//   querySelectors to add in for when we want to collect the entered username and password
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  //   Checks to make sure all fields have inputs
  if (!username || !password) {
    alert("Please fill in all fields.");
    return;
  }

//   If both username and password are present, it will then create a new user.
  if (username && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    // If successful, you will now be logged in and will be taken back to the homepage
    if (response.ok) {
      document.location.replace("/");
    } else {
      // Otherwise it will send this error message.
      alert("Unable to sign up, please try again later.");
    }
  }
};

// Add to allow a new user to be added when submitting via a sign up button.
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
