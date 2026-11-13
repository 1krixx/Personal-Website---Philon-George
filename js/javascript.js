// Welcome message
function showWelcomeMessage() {
    const messageElement = document.getElementById("welcome-message");
  
    if (messageElement === null) {
        return;
    }

    // Get the current hour from the person who is visiting the website's computer
    const currentHour = new Date().getHours();
    let greeting = "";

    if (currentHour < 12) {
        greeting = "Good morning";
    } else if (currentHour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    // Put the greeting into the home page
    messageElement.textContent = greeting + "! Thanks for stopping by.";
}
showWelcomeMessage(); // run the function when the page loads
// clock
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
    setInterval(updateClock, 1000); // Update the clock every second  

function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();

    
    clock.textContent = now.toDateString() + " | " + now.toLocaleTimeString();
}

createClock();    // run the function when the page loads  
<<<<<<< Updated upstream
// back to top button
function setupBackToTopButton() {

    // Create the button and add it to the end of the page
=======

//toggling between light and dark mode
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
        localStorage.setItem("theme", "dark");   
    } else {
        toggleButton.textContent = "Dark mode";
        localStorage.setItem("theme", "light");
    }
}

setupThemeToggle();    // run the function when the page load
// back to top button
function setupBackToTopButton() {
    
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    window.scrollTo(0, 0);    //top left
=======
    window.scrollTo(0, 0);    // top left
>>>>>>> Stashed changes
}

setupBackToTopButton();    // run the function when the page loads