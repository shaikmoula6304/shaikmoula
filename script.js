document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const studentId = document.getElementById('studentId').value;
    const password = document.getElementById('password').value;

    if (studentId === 'student123' && password === 'password123') {
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = 'Invalid student ID or password.';
    }
});
