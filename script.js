document.addEventListener("DOMContentLoaded", () => {
    let signupBtn = document.getElementById("signupBtn");
    let loginBtn = document.getElementById("loginBtn");
    // let logoutBtn = document.getElementById("logoutBtn");
    let loginForm = document.getElementById("login-form");

    if (signupBtn) {
        signupBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "./login.html";
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            console.log("Form submitted, event type:", e.type);
            window.location.href = "https://kbiz-livid.vercel.app/";
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "./signup.html";
        });
    }
});