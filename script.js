// Part 1: Event Handling - Light/Dark Mode Toggle
document.getElementById("toggleModeBtn").addEventListener("click", function() {
    // Toggle the dark mode class on body
    document.body.classList.toggle("dark-mode");
});

// Part 2: Counter Game
let counter = 0;
document.getElementById("incrementBtn").addEventListener("click", function() {
    // Increment counter value and update the display
    counter++;
    document.getElementById("counter").textContent = counter;
});

// Part 3: Collapsible FAQ Section
const faqToggles = document.querySelectorAll(".faq-toggle");

faqToggles.forEach(function(toggle) {
    toggle.addEventListener("click", function() {
        const content = this.nextElementSibling;
        // Toggle between showing and hiding the FAQ content
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});

// Part 4: Form Validation
const form = document.getElementById("registrationForm");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Validate name
    const nameError = document.getElementById("nameError");
    if (name.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Validate email with regular expression
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Validate password length
    const passwordError = document.getElementById("passwordError");
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // Show success or error message
    const formMessage = document.getElementById("formMessage");
    if (isValid) {
        formMessage.textContent = "Form submitted successfully!";
        formMessage.style.color = "green";
    } else {
        formMessage.textContent = "Please fix the errors and try again.";
        formMessage.style.color = "red";
    }
});

// Part 5: Tabbed Interface
const tabs = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach(function(tab) {
    tab.addEventListener("click", function() {
        const activeTab = this.dataset.tab;

        // Hide all tab contents
        tabContents.forEach(function(content) {
            content.classList.remove("active");
        });

        // Show the clicked tab content
        document.getElementById(activeTab).classList.add("active");

        // Highlight the active tab
        tabs.forEach(function(tab) {
            tab.classList.remove("active");
        });
        this.classList.add("active");
    });
});
