

// Welcome message based on the time of day (home page only )
function showWelcomeMessage() {
    const messageElement = document.getElementById("welcome-message");

    
    if (messageElement === null) {
        return;
    }

    // Get the current hour (0 to 23) from the person who is visiting the wwebsite's computer
    const currentHour = new Date().getHours();
    let greeting = "";

    if (currentHour < 12) {
        greeting = "Good morning";
    } else if (currentHour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    // Put the greeting 
    messageElement.textContent = greeting + "! Thanks for stopping by.";
}

showWelcomeMessage();    // run the function when the page loads


//  Live date and time clock in the footer
function createClock() {
    const footer = document.querySelector("footer");

    if (footer === null) {
        return;
    }

    // Create a new <p> element, give it an id, and add it to the footer
    const clock = document.createElement("p");
    clock.id = "clock";
    footer.appendChild(clock);

    updateClock();                    
    setInterval(updateClock, 1000);   
}

function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();

    
    clock.textContent = now.toDateString() + " | " + now.toLocaleTimeString();
}

createClock();    // run the function when the page loads


// Dark mode / light mode 
function setupThemeToggle() {
    const header = document.querySelector("header");

    if (header === null) {
        return;
    }

    // Create the button and add it to the header
    const toggleButton = document.createElement("button");
    toggleButton.id = "theme-toggle";
    toggleButton.type = "button";
    toggleButton.textContent = "Dark mode";
    header.appendChild(toggleButton);

    // If the visitor chose dark mode on an earlier page, switch it on here too
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleButton.textContent = "Light mode";
    }

    toggleButton.addEventListener("click", toggleTheme);
}

function toggleTheme(event) {
    const toggleButton = event.target;

    // classList.toggle adds the class if it is missing, and removes it if it is there
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Light mode";
        localStorage.setItem("theme", "dark");     // remember the choice
    } else {
        toggleButton.textContent = "Dark mode";
        localStorage.setItem("theme", "light");
    }
}

setupThemeToggle();    // run the function when the page loads


// ---------- Feature 4: Back-to-top button ----------
function setupBackToTopButton() {
    // Create the button and add it to the end of the page
    const topButton = document.createElement("button");
    topButton.id = "back-to-top";
    topButton.type = "button";
    topButton.textContent = "Back to top";
    document.body.appendChild(topButton);

    topButton.addEventListener("click", scrollToTop);
    window.addEventListener("scroll", updateBackToTopButton);
}

function updateBackToTopButton() {
    const topButton = document.getElementById("back-to-top");

    // window.scrollY is how many pixels the page has been scrolled down
    if (window.scrollY > 300) {
        topButton.classList.add("visible");
    } else {
        topButton.classList.remove("visible");
    }
}

function scrollToTop() {
    window.scrollTo(0, 0);    // jump to the top-left of the page
}

setupBackToTopButton();    // run the function when the page loads


// ---------- Feature 5: Character counter for the contact message box ----------
// The most characters allowed in the message box
const MESSAGE_MAX_LENGTH = 300;

function setupCharacterCounter() {
    const messageBox = document.getElementById("message");

    // The message box only exists on the contact page
    if (messageBox === null) {
        return;
    }

    // Stop the visitor typing more than the maximum
    messageBox.maxLength = MESSAGE_MAX_LENGTH;

    // Create a paragraph for the counter and place it right under the message box
    const counter = document.createElement("p");
    counter.id = "char-counter";
    messageBox.parentNode.appendChild(counter);

    // "input" fires every time the visitor types, pastes or deletes text
    messageBox.addEventListener("input", updateCharacterCounter);
    updateCharacterCounter();
}

function updateCharacterCounter() {
    const messageBox = document.getElementById("message");
    const counter = document.getElementById("char-counter");

    // .value.length is the number of characters currently typed
    const charactersLeft = MESSAGE_MAX_LENGTH - messageBox.value.length;

    counter.textContent = charactersLeft + " of " + MESSAGE_MAX_LENGTH + " characters remaining";

    // Turn the counter into a warning when fewer than 50 characters are left
    if (charactersLeft < 50) {
        counter.classList.add("counter-warning");
    } else {
        counter.classList.remove("counter-warning");
    }
}

setupCharacterCounter();    // run the function when the page loads