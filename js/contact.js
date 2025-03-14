const openingHours = {
    'Mon': '7:00 AM - 3:00 PM',
    'Tue': '7:00 AM - 3:00 PM',
    'Wed': '7:00 AM - 3:00 PM',
    'Thu': '7:00 AM - 3:00 PM',
    'Fri': '7:00 AM - 3:00 PM',
    'Sat': '8:00 AM - 3:00 PM',
    'Sun': 'Closed'
};

const today = new Date().toLocaleString('en-US', { weekday: 'short' });

const todaysHours = document.getElementById('currentDayHours');

// Display todays open hours on collapse
function showTodayHours() {

    const downArrow = document.createElement('span');
    const downIcon = document.createElement('icon');
    downIcon.classList = "bi bi-caret-down-fill";
    downArrow.appendChild(downIcon);

    const currentHours = document.createElement('span');
    currentHours.textContent = openingHours[today];
    currentHours.style = 'text-decoration: underline;';

    todaysHours.innerHTML = 'Open today ';
    todaysHours.appendChild(currentHours);
    todaysHours.innerHTML += ' ';
    todaysHours.appendChild(downArrow);
}
document.addEventListener('DOMContentLoaded', showTodayHours);

// Display open hours in a dropdown
function showHoursDropdown() {
    let count = 0;
``
    for (const day in openingHours) {
        const p = document.createElement('p');
        if (day === today) {
            const strong = document.createElement('strong');
            strong.textContent = `${day}: ${openingHours[day]}`;
            p.classList = 'text-dark';
            p.appendChild(strong);
        } else {
            p.textContent = `${day}: ${openingHours[day]}`;
        }

        if (count == 0) {
            const upArrow = document.createElement('span');
            const upIcon = document.createElement('icon');
            upIcon.classList = " bi bi-caret-up-fill";
            upArrow.appendChild(upIcon);
            p.textContent += " ";
            p.appendChild(upArrow);
        }
    

        collapseHours.appendChild(p);
        count++;
    }

    
    
}

document.addEventListener('DOMContentLoaded', showHoursDropdown);

// Event listener for when the dropdown is shown
collapseHours.addEventListener('show.bs.collapse', function () {
    todaysHours.style.display = 'none'; // Hide the <p> tag
});

// Event listener for when the dropdown is hidden (collapsed)
collapseHours.addEventListener('hide.bs.collapse', function () {
    todaysHours.style.display = 'block'; // Show the <p> tag
});

