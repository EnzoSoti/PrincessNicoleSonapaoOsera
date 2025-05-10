// User data storage (in a real application, this would be handled by a backend server)
const users = JSON.parse(localStorage.getItem('users')) || [];

// Session management
const sessionKey = 'userSession';

// Check if user is authenticated
function isAuthenticated() {
    return localStorage.getItem(sessionKey) !== null;
}

// Set authentication session
function setAuthSession(userData) {
    localStorage.setItem(sessionKey, JSON.stringify(userData));
}

// Clear authentication session
function clearAuthSession() {
    localStorage.removeItem(sessionKey);
}

// Handle login
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Prevent back button navigation
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function() {
        window.history.pushState(null, '', window.location.href);
    };

    // Check authentication status on page load
    if (window.location.pathname.includes('login.html') || 
        window.location.pathname.includes('register.html')) {
        if (isAuthenticated()) {
            window.location.href = 'index.html';
        }
    } else {
        if (!isAuthenticated()) {
            window.location.href = 'login.html';
        }
    }

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Here you would typically make an API call to your backend
            // For demo purposes, we'll use a simple validation
            if (email && password) {
                // Simulate successful login
                setAuthSession({ email });
                window.location.href = 'index.html';
            } else {
                alert('Invalid credentials');
            }
        });
    }

    // Handle register form submission
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }

            // Here you would typically make an API call to your backend
            // For demo purposes, we'll simulate successful registration
            if (username && email && password) {
                setAuthSession({ email, username });
                window.location.href = 'index.html';
            } else {
                alert('Please fill in all fields');
            }
        });
    }
});

// Logout function
function logout() {
    clearAuthSession();
    window.location.href = 'login.html';
} 