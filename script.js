//your JS code here. If required.
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const identifier = document.getElementById('identifier').value.trim();
  const password = document.getElementById('password').value;

  if (!identifier || !password) {
    alert('Please fill in both fields to log in.');
    return;
  }

  // No backend in this exercise — this is where a real login
  // request (e.g. fetch('/api/login', { method: 'POST', ... }))
  // would go once there's an API to call.
  console.log('Login submitted:', { identifier, password: '••••••••' });
  alert(`Welcome back! (This is a UI demo — no real authentication yet.)`);
});

document.getElementById('create-account-btn').addEventListener('click', function (e) {
  e.preventDefault();
  // Would normally redirect: window.location.href = '/register.html';
  alert('This would redirect to the registration page.');
});