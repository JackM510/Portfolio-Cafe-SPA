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

# Screenshots
- This project includes a 'screenshot' directory with images of the application for both desktop and mobile views, allowing for easy viewing without the need to clone or download the repository.

# Installation
**Note:** this project was created to work out of the box with minimum setup. It utilises Bootstrap 5 via a CDN and uses the 'menu.json' file to store the data for the menu instead of needing to set up a back-end database. 
1. Clone the repository.
2. Run the application on your local server from 'index.php'.
   
# Usage
1. All sections are accessible using the primary navigation bar. The Navbar will collapse on smaller displays and is accessible by selecting the collapsible icon.
2. The Navbar is sticky and will follow the user as they scroll down the page to ensure that they always have access to the Navbar.
3. Images in the gallery are hoverable and can be clicked to display a modal. The user can select the '<' and '>' icons to view the previous and next images in the gallery. There is also an 'X' icon to close the modal in the top-right corner.
4. The 'Breakfast', 'Lunch' and 'Drinks' menu tabs in the menu section can be selected to view the tab pane of menu items for each respective section.
5. The location, email, and phone number in the contact section are all hoverable links and will direct the user to a respective application when selected.
6. The input and button elements in the booking section are interactive. To make a booking, a valid name, 10-digit phone number, number of people between 1-10, and DAT are required. The date must be within 1 month of today's date and the time must be during the business operating hours and at least 1 hour before closing. The booking time must also be made on the hour or at 15, 30, or 45 minutes past the hour.

# Accessibility
- Elements in the Navbar, Contact, Book A Table, and Footer sections can be focused by pressing the 'tab' key and selected by pressing the 'enter' key. To navigate to the previous focusable element press 'shift' + 'tab'.
- Images in the photo gallery can be focused by pressing the 'tab' key and selected by pressing the 'enter' key. To navigate to the previous focusable element press 'shift' + 'tab'. If an image is selected, a modal will be visible and the user can press the 'left arrow' and 'right arrow' keys to view the next and previous images in the gallery. The 'esc' key can be used to close the modal.
- The first menu tab in the menu section ('Breakfast') can be focused using the 'tab' key, however, the user must use the 'left arrow' and 'right arrow' keys to move between the menu tabs. If 'tab' is used when the 'Breakfast' tab is focused, it will move to the next focusable element in the contact section.