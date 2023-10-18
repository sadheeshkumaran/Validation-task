document.getElementById("signup-submit").addEventListener("click", function(event) {
    event.preventDefault();
    
    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("passwordError2").textContent = "";

    const name = document.getElementById("logname").value;
    const email = document.getElementById("logemail").value;
    const password = document.getElementById("logpass2").value;

    // Name validation
    const namePattern = /^[A-Z][a-zA-Z\s]*$/;

    if (!namePattern.test(name)) {
        document.getElementById("nameError").textContent = "Please enter a valid name (each word should start with a capital letter).";
        return;
    }

    // Password validation (same as in login.js)
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    if (!passwordPattern.test(password)) {
        document.getElementById("passwordError2").textContent = "Password must contain at least 8 characters, including one capital letter, one small letter, and one number.";
        return;
    }

    // Store data and redirect on success
    localStorage.setItem("username", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
   location.reload();
});
