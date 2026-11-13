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