# Personal Website - Philon George

My name is Philon, and I'm a CST year 2 student at T.A. Marryshow Community College (TAMCC).This is my personal website which is comprised of It  four pages: Home, About, Portfolio and Contact.

Live site: https://1krixx.github.io/Personal-Website---Philon-George/

## Summary of the redesign
- New colour theme to make the website more vibrant
- More semantic tags, additional pages
- Integration of bootstrap and Font Awesome
- Layout which is responsive
- Local images renamed with an additional online image
- 

## Technologies used
HTML5, CSS3, Bootstrap 5, Font Awesome,  GitHub 

## Directory structure
- index.html, about.html, portfolio.html, contact.html (the pages)
- css/style.css (the stylesheet)
- img/ (all images)
- screenshots/ (mobile, tablet and desktop screenshots)

## How to view the website
Open the live site link above, or download the repository and open index.html in a browser.

## Responsive design
I used Bootstrap's grid so columns stack on small screens, plus CSS media queries for tablet (991px) and mobile (575px). Images use max-width 100% and height auto so they shrink to fit. On mobile the navigation links get smaller so they stay on one row.

## Image credits
- Beach photo: "Grand Anse Beach, St. George's, Grenada" by Varun Kapoor, CC BY 3.0, via Wikimedia Commons

- Background artwork: https://unsplash.com/photos/a-black-background-with-a-blue-abstract-design-OfdOEdGYiuk


## Reflection
This assignment has showed me how much actually has to go into a webpage. I can only imagine how much more time people put into websites, especially as this website is basically just html and css, without any javascript and so. Also, as AI is continuously getting better at coding, it is good how to know the old time tradition of creating html and css by scratch. Besides just appreciating the art, I am able to improve my skill with HTML and CSS by using all the different elements, and in some cases, some that werent tought in class physically. Aside from coding and designing the website, I also learnt about different functionalities in GitHub, such as creating and editing inside of a branch. A branch allows you to make changes to a code before putting it back into your main repository. This is important to prevent unreversible errors to the main code. I also realized that my web design is getting better, as in my opinion, i did major updates to my personal website compared to what it was before.

## Summary of the JavaScript enhancements
I added five JavaScript features to the existing site. All the code is in one external file, `js/javascript.js`, which is linked on every page. The buttons, the clock and the counter are created by JavaScript, and i added the relevant styles to the existing stylesheet (`css/style.css`) to style them.

## JavaScript features
1. Time-based welcome message: the home page greets the visitor with "Good morning", "Good afternoon" or "Good evening" based on their computer's clock.
2. Live date and time clock: the footer of every page shows the current date and time, updating every second.
3. Dark / light mode toggle: a button in the header switches the colour theme, and the choice is remembered on the other pages.
4. Back-to-top button: a button appears in the corner after scrolling down, and takes the visitor back to the top when clicked.
5. Character counter: the contact form message box shows how many of its 300 characters are left, and warns when fewer than 50 remain.

Screenshots
## JavaScript feature screenshots

 1. Welcome message
![Welcome message on the home page](screenshots/Welcome%20Greeting.png)

2. Live clock
![Live clock in the footer](screenshots/Live%20Time.png)

 3. Dark mode toggle
![Website in dark mode](screenshots/Dark%20Mode.png)

 4. Back-to-top button
![Back-to-top button](screenshots/Back%20to%20Top.png)

5. Character counter
![Character counter on the contact form](screenshots/Character%20Count.png)

## JavaScript reflection
For this assignment, I added five JavaScript features to my personal website which were: a time-based welcome message, a live clock, a dark mode toggle, a back-to-top button, and a character counter for the contact form. Writing each of these as its own function showed me how convenient functions are due to them being reusable

 I was surprised by some of the things JavaScript can do. I did not know it could create new HTML elements from scratch with createElement, update a clock every second with setInterval, or remember a visitor's theme choice with localStorage. Switching one class with classList.toggle to change the colours of a whole website also surprised me.

I ran into errors in the console when I first added my code, and fixing them taught me to read error messages carefully and test one feature at a time. Working on a separate Git branch and merging it with  let me experiment without risking my main code. Before this, my website only displayed content. Now it responds to the visitor. I understand that JavaScript is what makes a website interactive, and it works together with HTML and CSS. I have come to appreciate and understand it much more.