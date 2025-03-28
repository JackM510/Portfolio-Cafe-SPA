# Portfolio-Cafe-SPA

A single-page application developed using Bootstrap 5, HTML, CSS, and JavaScript, designed for the fictional business 'Aroma Espresso'. This project was developed as one of my portfolio pieces to showcase a responsive and fully-functional website for a Cafe business. The website was designed 


# Features
- **Responsive Design:** this application is designed to work across multiple devices and browser utilising CSS media conditions and Javascript. 
- **Navbar:** the navbar contains five links to each section of the website, 'Home', 'About', 'Gallery', 'Menu', 'Contact', and also includes a Bootstrap button to book a table. The navbar is responsive and will display as a collapsible navbar on smaller displays. 
- **Landing Page:** the landing page contains a responsive image of the finctional cafe and a floating span for the business name over the image. The image and span fade in when the page is loaded and the text and image resize for smaller displays.
- **About section:** the about section contains key information about the finctional business, such as their 'Specialty Coffee', 'Fresh Whole Foods', and 'Seaside Location'. This section was built using Bootstraps responsive grid system.
- **Gallery section:** the gallery contains six images of the fictional business and was built using Bootstraps grid system for a responsive design. All of the images in the gallery are clickable and are displayed in a Bootstrap modal when selected. When the Modal is displayed the user has a greater view of the image and can use the 'previous' and 'next' buttons to view the rest of the gallery. There is also a 'close' button to hide the modal. 
- **Menu section:** the menu section contains a fictional menu for the business and was built using Bootstraps nav-tabs and tab-pane classes. There are three nav-tabs, 'Breakfast', 'Lunch', and 'Drinks'. Each tab can be selected to display the respective menu which is fetched and rendered using 'menu.js'. The data for the menu is stored within 'menu.json' and fetched dynamically using Javascript.
- **Contact section:** the contact section contains an iFrame of a Google maps location of the restaurant and hoverable links for the stores location, email address, and phone number. This section also contains a dropdown element which displays the business opening hours for the current day. The dropdown element is hoverable and can be clicked to expand/collapse the dropdown to view the business opening hours for Monday-Sunday. When the dropdown is expanded the current day while be displayed in bold text.
- **Booking section:** the booking section contains a HTML form allowing the user to book a table at the restaurant given they provide a name, phone number, date and time of the booking, number of people attending, and a message (optional). The input provided is validated using the 'booking.js' file and ensures that a name is provided, the phone number is 10 numerical digits, the date and time of the booking is made within the stores operating hours and at least an hour prior to the time they close, and that the number of people attending is between 1-10.
- **Footer:** the footer contains linked icons which allow the user to navigate to view the business social media platforms.

# Installation
Note: this application was designed to be fully functional with minimum setup. E.g., utilising Bootstrap 5 via a CDN and using the menu.json file to store the data for the dynamic menu. 
**1.** Clone the repository.
**2.** Run the application on your local server from 'index.php'.

# Usage
