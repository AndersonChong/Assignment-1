// Smooth Scroll Effect for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Login Form Validation
const loginForm = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
    } else {
        alert("Login successful!");
    }
});

// Skin Tier Click Alert (For demonstration purposes)
const tierBoxes = document.querySelectorAll('.tier-box');

tierBoxes.forEach(tierBox => {
    tierBox.addEventListener('click', function () {
        const tierName = this.textContent;
        alert(`You selected the ${tierName} tier!`);
    });
});

// Social Media Link Hover Effect
const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = '#ff4c00';
        link.style.color = '#111';
    });

    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = '';
        link.style.color = '#ff4c00';
    });
});
