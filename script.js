function validateLogin(username, password, callback) {
    if (username === 'admin' && password === '12345') {
        callback(true);
    } else {
        alert("Invalid username or password!")
        callback(false);
    }
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    validateLogin(user, pass, function (success) {
        if (success) {
            window.location.href = "main.html"
        }
    })
})