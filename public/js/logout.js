const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

// Add when we have a login system to press a button to log out.
// document
//   .querySelector("#logout")
//   .addEventListener("click", logout);
