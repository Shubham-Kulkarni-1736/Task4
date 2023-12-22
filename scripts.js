document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    console.log(username); 
    console.log(password);

    var usernamePattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[@]).{8,}$/;

    if(!usernamePattern.test(username)){
        document.getElementById('username-error').textContent = 'Invalid email format.';
    } else {
        document.getElementById('username-error').textContent = '';
    }


    if(!passwordPattern.test(password)){
        document.getElementById('password-error').textContent = 'Password should contain at least 8 characters, an uppercase letter, a number, and a special character.';
    } else {
        const correctPassword = "SmartServTest@123"; // Change this value according to your needs
        if (password === correctPassword) {
        window.location.href = "dashboard.html"; // Redirect to the dashboard page
       }
       else
        {document.getElementById('password-error').textContent = '';
        window.location.href = "login.html";}
    }
});