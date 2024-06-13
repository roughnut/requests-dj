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

// Add when we have a login system to press a button to log out. Uses an ID rather than a class, but can be changed to use either class or ID
// document
//   .querySelector("#logout")
//   .addEventListener("click", logout);
