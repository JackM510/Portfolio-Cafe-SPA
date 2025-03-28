# Portfolio-Cafe-SPA

A single-page application developed using Bootstrap 5, HTML, CSS, and JavaScript, designed for the fictional business 'Aroma Espresso'. This project was developed as one of my portfolio pieces to showcase a responsive and fully-functional website for a Cafe business. The application has six primary sections, 

# Features
- **Responsive Design:** this application is designed to work across multiple devices and browsers utilising CSS media queries and Javascript.
- **Accessibility** this application is designed to be accessible for impaired users by using the keyboard. The tab key can be used to focus interactive elements 
- **Navbar:** the navbar contains links to each section of the website and a Bootstrap button to book a table. The navbar is also responsive and will collapse on smaller displays. 
- **Landing Page:** the landing page contains a responsive image and a floating span of the business name over the image. When the page is loaded, the landing page fades in using CSS and Javascript and also resizes on smaller displays.
- **About section:** the about section contains three sections about the business, such as their 'Specialty Coffee', 'Fresh Whole Foods', and 'Seaside Location'. Each section contains an image and a short description.
- **Gallery section:** the gallery contains six images of the fictional business and are all clickable. When an image is selected, a Bootstrap modal is displayed and the user can navigate through the gallery using the previous and next buttons. There is also a 'close' button to hide the modal. 
- **Menu section:** the menu section contains an interactive tab menu that lists 'Breakfast', 'Lunch', and 'Drinks' items. The data for the menu is fetched from the 'menu.json' data file and is populated using 'menu.js'.
- **Contact section:** the contact section contains an iFrame of a Google maps location for the business and hoverable links for the stores location, email address, and phone number. This section also contains a dropdown element which displays the business opening hours for the current day. The dropdown element can be clicked to expand/collapse the dropdown and view the business opening hours for Monday-Sunday. When the dropdown is expanded the current day while be displayed in bold text.
- **Booking section:** the booking section contains a HTML form allowing the user to book a table at the restaurant given they provide a name, phone number, date and time of the booking, number of people attending, and a message (optional). The input provided is validated using the 'booking.js' file and ensures that a name is provided, the phone number is 10 numerical digits, the date and time of the booking is made within the stores operating hours and at least an hour prior to the time they close, and that the number of people attending is between 1-10.
- **Footer:** the footer contains hoverable linked icons to the business social media platforms.

# Installation
**Note:** this application was designed to be fully-functional with minimum setup. E.g., utilising Bootstrap 5 via a CDN and using the menu.json file to store the data for the menu instead of needing to set up a back-end database. 
1. Clone the repository.
2. Run the application on your local server from 'index.php'.

# Accessibility
