// Process the book-form input data
function bookingForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    // Fetch the JSON file
    fetch('./data/hours.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch JSON: ${response.status}`);
        }
        return response.json(); // Parse the JSON file
    })
    .then(data => {
        const openingHours = data.Hours; // Access the 'Hours' object from menu.json
        validateInput(openingHours);
    })
    .catch(error => console.error('Failed to load opening hours:', error));
}

// Validate the input user input in book-form
function validateInput(openHours) {
    const name = document.getElementById('name-input').value.trim();
    const phone = document.getElementById('phone-input').value.trim();
    const dateTime = document.getElementById('dateTime-input').value.trim();
    const numPeople = document.getElementById('people-input').value.trim();
    const phonePattern = /^[0-9]{10}$/; // Phone number pattern must uses numbers 0-9 and be 10 digits
    const numPattern = /^(10|[1-9])$/; // Number of people must use numbers 0-9 and be between 1-10

    // Conditional checks for input
    if (name === "") {
        alert("A name is required.");
        return
    } else if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    } else if (!numPattern.test(numPeople)) {
        alert("Please enter a number of people between 1 and 10.");
        return;
    } else if (dateTime === "") {
        alert("A Date and Time are required.");
        return;
    } else if (!validateDAT(dateTime, openHours)) {
        return;
    } else {
        alert("Booking successful");
        document.getElementById("book-form").reset();
        return;
    }
}
    
// Validate the date and time of the booking
function validateDAT(dateTimeInput, openHours) {
    const currentDAT = new Date(); // Todays DAT
    const bookingDAT = new Date(dateTimeInput); // Booking DAT
    const bookingDay = getBookingDay(bookingDAT); // Get day of week from the bookingDAT
    const bookingDayHours = getBookingHours(bookingDay, openHours); // Get opening hours for the given day

    // Check the booking is made within 1 month of todays date
    const oneMonthFromNow = new Date(currentDAT);
    oneMonthFromNow.setMonth(currentDAT.getMonth() + 1);
    if (bookingDAT > oneMonthFromNow) {
        alert("Booking cannot be made 1 month ahead from todays date.");
        return false;
    } 
    
    // Check that the booking cannot be made before todays date
    if (bookingDAT < currentDAT) {
        alert("Booking cannot be made before todays date.");
        return false;
    }

    // Check that the bookingDAT is not made on a day when 'closed'
    if (bookingDayHours === "Closed") {
        alert("Bookings cannot be made on days when we are closed");
        return false;
    }

    // Format bookingDayHours into opening and closing time variables
    let [openingTime, closingTime] = bookingDayHours.split(" - "); // Splits into opening and closing times
    let openDAT = parseTime(new Date(bookingDAT), openingTime); // Set opening time
    let closeDAT = parseTime(new Date(bookingDAT), closingTime); // Set closing time
    const adjustedCloseDAT = adjustCloseTime(closeDAT); // Adjust closeDAT by 1 hour to limit bookings to an hour before closing
    const bookingMinutes = getBookingMinutes(bookingDAT); // Get the booking minutes from bookingDAT

    // Check that the bookingDAT is made during opening hours
    // Check that the bookingDAT is made 1 hour before closing
    // Check that the bookingDAT is made on the hour OR at 15, 30, 45 minutes past the hour
    if (bookingDAT < openDAT) {
        alert("The booking must be made during our opening hours: " + bookingDayHours);
        return false;
    } else if (bookingDAT > adjustedCloseDAT) {
        alert("The booking must be made 1 hour before we close: " + bookingDayHours);
        return false;
    } else if (bookingMinutes === false) {
        alert("Bookings must be made on the hour or 15, 30, or 45 minutes past the hour");
    } else {
        return true; // booking valid
    }
}

// Get the booking day from bookingDAT
function getBookingDay(bookingDAT) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayOfWeek = daysOfWeek[bookingDAT.getDay()];
    return dayOfWeek;
}

// Get the opening hours for the given booking day
function getBookingHours(dayOfWeek, openingHours) {
    const dayHours = openingHours[dayOfWeek];
    return dayHours;
}

// Converts the opening hours string data into a date format
function parseTime(date, timeStr) {
    const [time, modifier] = timeStr.split(" "); // Split into time and AM/PM
    let [hours, minutes] = time.split(":"); // Split into hours and minutes

    // Convert hours to 24-hour format
    if (modifier === "PM" && hours !== "12") {
        hours = parseInt(hours, 10) + 12;
    } else if (modifier === "AM" && hours === "12") {
        hours = 0;
    }

    date.setHours(hours, minutes, 0, 0); // Set hours, minutes, seconds, milliseconds
    return date;
}

// Adjust the closing time by 1 hour
function adjustCloseTime(closeDAT) {
    const adjustedCloseDAT = new Date(closeDAT);
    adjustedCloseDAT.setHours(adjustedCloseDAT.getHours() - 1);
    return adjustedCloseDAT;
}

// Bookings can only be made at 0, 15, 30, or 45 minutes past the hour.
function getBookingMinutes(bookingDAT) {
    const minutes = bookingDAT.getMinutes(); // Get minutes from booking date
    const allowedMinutes = [0, 15, 30, 45];

    // Check if the minutes are one of the allowed intervals
    if (!allowedMinutes.includes(minutes)) {
        return false; // Invalid booking time
    } else {
        return true; // Valid booking time
    }   
}