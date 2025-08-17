// Security utilities for input validation and sanitization

const SecurityUtils = {
    // Sanitize HTML to prevent XSS attacks
    sanitizeHTML: function(str) {
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    },

    // Validate email format
    validateEmail: function(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email) && email.length <= 254;
    },

    // Validate password strength
    validatePassword: function(password) {
        return password.length >= 6 && password.length <= 128;
    },

    // Sanitize input for database queries
    sanitizeInput: function(input) {
        if (typeof input !== 'string') return input;
        // Remove any SQL injection attempts
        return input
            .replace(/'/g, "''")
            .replace(/;/g, '')
            .replace(/--/g, '')
            .replace(/\/\*/g, '')
            .replace(/\*\//g, '')
            .trim();
    },

    // Validate numeric input
    validateNumber: function(num, min = 0, max = Number.MAX_SAFE_INTEGER) {
        const parsed = parseFloat(num);
        return !isNaN(parsed) && parsed >= min && parsed <= max;
    },

    // Rate limiting helper
    createRateLimiter: function(maxAttempts = 5, windowMs = 60000) {
        const attempts = new Map();
        
        return function(key) {
            const now = Date.now();
            const userAttempts = attempts.get(key) || [];
            
            // Clean old attempts
            const recentAttempts = userAttempts.filter(time => now - time < windowMs);
            
            if (recentAttempts.length >= maxAttempts) {
                return false; // Rate limit exceeded
            }
            
            recentAttempts.push(now);
            attempts.set(key, recentAttempts);
            return true; // Allowed
        };
    },

    // CSRF token generation
    generateCSRFToken: function() {
        const array = new Uint8Array(32);
        crypto.getRandomValues(array);
        return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    },

    // Session timeout handler
    createSessionTimeout: function(timeoutMs = 30 * 60 * 1000, callback) {
        let timeout;
        
        const resetTimeout = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                if (callback) callback();
            }, timeoutMs);
        };
        
        // Reset on user activity
        ['mousedown', 'keydown', 'scroll', 'touchstart'].forEach(event => {
            document.addEventListener(event, resetTimeout, true);
        });
        
        resetTimeout();
        
        return {
            reset: resetTimeout,
            clear: () => clearTimeout(timeout)
        };
    }
};

// Freeze the object to prevent modifications
Object.freeze(SecurityUtils);