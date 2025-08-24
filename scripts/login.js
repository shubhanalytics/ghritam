document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "ghritam" && password === "1234") {
    localStorage.setItem("user", username);
    window.location.href = "home.html";
  } else {
    alert("Invalid credentials. Try ghritam / 1234");
  }
});
function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "testuser" && password === "12345") {
    window.location.href = "home.html"; // or whatever your home page is
  } else {
    alert("Invalid credentials");
  }
}
