function cancel() {
  document.location = "/index.html";
}

function validate(event) {
  const forms = document.getElementById("login-form");
  const username = forms["uuid"].value;
  const pass = forms["upass"].value;

  event.preventDefault();
  if (username != "user")
    document.getElementById("msg-invalid-uid").innerText = "Invalid username";
  else {
    document.getElementById("msg-invalid-uid").innerText = "";
    if (pass != "user")
      document.getElementById("msg-invalid-pass").innerText =
        "Invalid password";
    else {
      document.getElementById("msg-invalid-pass").innerText = "";
      document.location = "/HTML Pages/User/user_portal.html";
    }
  }
}
