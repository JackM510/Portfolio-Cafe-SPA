let openingHours = {}; // Stores the opening hours for Aroma Espresso
let today = new Date().toLocaleString('en-US', { weekday: 'short' }); // Get the current day using short format
const todaysHours = document.getElementById('contact-todays-hours');
const collapseHours = document.getElementById('contact-collapse-hours');

// Fetch the JSON file
fetch('./data/hours.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch JSON: ${response.status}`);
        }
        return response.json(); // Parse the JSON file
    })
    .then(data => {
        openingHours = data.Hours; // Access the 'Hours' object from menu.json
        showTodayHours();
        showHoursDropdown();
    })
    .catch(error => console.error('Failed to load opening hours:', error));

// Create the upwards and downwards caret icons
function createCaretIcon(direction) {
    const caretSpan = document.createElement('span');
    const caretIcon = document.createElement('icon');
    caretIcon.classList = direction === 'down' ? 'bi bi-caret-down-fill contact-hours-caret' : 'bi bi-caret-up-fill contact-hours-caret';
    caretSpan.appendChild(caretIcon);
    return caretSpan;
}

// Display todays opening hours when the dropdown is collapsed
function showTodayHours() {
    // Create a span which displays todays current hours
    const hoursSpan = document.createElement('span');
    hoursSpan.textContent = openingHours[today]; // Add todays hours as the textContent
    hoursSpan.classList.add('contact-hours-underline'); // Apply an underline style
    
    // Conditional check for Sundays as the business is closed
    if (today === 'Sun'){
        todaysHours.textContent = 'Closed on Sundays';
        todaysHours.classList.add('contact-hours-underline');
    } else {
        todaysHours.textContent = 'Open today ';
        todaysHours.appendChild(hoursSpan);
    }

    // Create the downwards caret icon
    const downSpan = createCaretIcon('down');
    todaysHours.appendChild(downSpan); // Append the downwards caret icon to contact-todays-hours
}

// Display weekly opening hours when the dropdown is expanded
function showHoursDropdown() {
    // Display each days opening hours
    for (const day in openingHours) {
        const p = document.createElement('p'); // Create a <p> tag for each day
        p.textContent = `${day}: ${openingHours[day]}`; // Append each day and opening hours as the textContent
        
        // Display today as bold text
        if (day === today) {
            p.classList.add('contact-day-bold');
        } 
        
        // If the day is monday display the upwards caret icon
        if (day === 'Mon') {
            p.id = 'contact-hours-monday';
            const upSpan = createCaretIcon('up');
            p.appendChild(upSpan); // Append the upwards caret icon next to mondays hours
        }
        
        // Append each <p> element to contact-collapse-hours
        collapseHours.appendChild(p);
    }   
}

// Hide todays hours when the dropdown is expanded
collapseHours.addEventListener('show.bs.collapse', function () {
    todaysHours.style.display = 'none';
    todaysHours.setAttribute('aria-expanded', 'false');
});

// Display todays hours when the dropdown is collapsed
collapseHours.addEventListener('hide.bs.collapse', function () {
    todaysHours.style.display = 'inline-block';
    todaysHours.setAttribute('aria-expanded', 'true');
});

// Keyboard accessibility for contact-todays-hours dropdown
todaysHours.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        todaysHours.click();
    }
});