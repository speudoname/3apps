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
    const floatingBtn = document.getElementById('floatingAuthBtn');
    
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
    
    // Hide floating button for logged-in users
    if (floatingBtn) {
        floatingBtn.style.display = 'none';
    }
    
    // Add logged-in class to body
    document.body.classList.add('user-logged-in');
}

function updateUIForGuest() {
    // Show auth prompts for guests
    const authPrompt = document.getElementById('authPrompt');
    const floatingBtn = document.getElementById('floatingAuthBtn');
    
    if (authPrompt) {
        authPrompt.style.display = 'block';
        authPrompt.style.visibility = 'visible';
        authPrompt.style.opacity = '1';
    }
    
    if (floatingBtn) {
        floatingBtn.style.display = 'flex';
        floatingBtn.style.visibility = 'visible';
        floatingBtn.style.opacity = '1';
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