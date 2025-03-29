# Portfolio-Cafe-SPA

A single-page application developed using Bootstrap 5, HTML, CSS, and JavaScript, designed for the fictional cafe business 'Aroma Espresso'. This project was created as a portfolio piece to showcase a responsive and fully functional website utilising Bootstrap, CSS, and Javascript. The site was designed to provide essential information about the business and features an interactive photo gallery and menu to highlight the venue and offerings, including contact details and location, and allows users to book directly through the website.  

# Features
- **Responsive Design:** designed to work across multiple devices and browsers utilising CSS media queries and Javascript.
- **Accessibility** incorporates ARIA accessibility features, enabling impaired users to navigate using the keyboard.
- **Navbar:** contains links to each section of the website and a button to book a table. The Navbar is responsive and will collapse on smaller displays. 
- **Landing Page:** contains a responsive image and floating span that fades in when the page is loaded using CSS and Javascript.
- **About section:** contains key information about the businesses 'Specialty Coffee', 'Fresh Whole Foods', and 'Seaside Serenity'. Each section has an image and a short description.
- **Gallery section:** contains six clickable images that display a Bootstrap modal when selected. Users can navigate the modal gallery using the previous, next and close buttons.
- **Menu section:** contains an interactive menu that lists 'Breakfast', 'Lunch', and 'Drinks' items. The data for the menu is fetched from the 'menu.json' data file and is populated using 'menu.js'.
- **Contact section:** contains a Google Maps iFrame and hoverable links for the location, email address, and phone number. This section also lists today's operating hours and a clickable dropdown that details the operating hours from Mon-Sun.
- **Booking section:** contains an HTML form to secure a booking at the venue. The input is validated using the 'booking.js' file to ensure the booking is complete and made within the business operating hours.
- **Footer:** contains linked icons to the business's social media platforms.

# Installation
1. Clone the repository.
2. Run the application on your local server from 'index.php'.
**Note:** this project was created to work out of the box with minimum setup. It utilises Bootstrap 5 via a CDN and uses the 'menu.json' file to store the data for the menu instead of needing to set up a back-end database. 

