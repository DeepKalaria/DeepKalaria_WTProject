function validateSignup(event) {
    event.preventDefault();
    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;

    if (newUsername === "" || newPassword === "") {
        alert("Please fill in all fields for signup.");
        return false;
    }

    alert("Signup successful!");
    // Uncomment to submit the form if validation passes
    // document.getElementById("signup-form").submit(); 
}
