// Check authentication status and update UI
function checkAuthStatus() {
    // Check if user is logged in (from localStorage)
    const user = localStorage.getItem('user');
    
    if (user) {
        try {
            const userData = JSON.parse(user);
            updateUIForLoggedInUser(userData);
        } catch (e) {
            // Invalid user data, clear it
            localStorage.removeItem('user');
            updateUIForGuest();
        }
    } else {
        updateUIForGuest();
    }
}

function updateUIForLoggedInUser(userData) {
    const authStatus = document.getElementById('authStatus');
    const authPrompt = document.getElementById('authPrompt');
    
    if (authStatus) {
        authStatus.innerHTML = `
            <span style="color: #10b981;">✅ ${userData.email}</span>
            <button onclick="logout()" style="padding: 8px 20px; background: #ef4444; color: white; border: none; border-radius: 20px; font-weight: 600; cursor: pointer;">გასვლა</button>
        `;
    }
    
    // Hide the auth prompt banner for logged-in users
    if (authPrompt) {
        authPrompt.style.display = 'none';
    }
}

function updateUIForGuest() {
    // Default UI is already set for guests, but we can enhance it here if needed
    const authPrompt = document.getElementById('authPrompt');
    if (authPrompt) {
        authPrompt.style.display = 'block';
    }
}

function logout() {
    // Clear user data
    localStorage.removeItem('user');
    
    // Reload page to reset UI
    window.location.reload();
}

// Check auth status when page loads
document.addEventListener('DOMContentLoaded', checkAuthStatus);

// Also check when returning from auth page
window.addEventListener('storage', function(e) {
    if (e.key === 'user') {
        checkAuthStatus();
    }
});