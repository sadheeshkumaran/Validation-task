document.getElementById("login-submit").addEventListener("click", function(event) {
    event.preventDefault();
    const enteredEmail = document.getElementById("logemail").value;
    const enteredPassword = document.getElementById("logpass1").value;

    // Password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordPattern.test(enteredPassword)) {
        document.getElementById("passwordError1").textContent = "Password must contain at least 8 characters, including one capital letter, one small letter, one number.";
        return;
    }

    // Redirect to "todo.html" without checking credentials
    window.location.href = "todo.html";
});
