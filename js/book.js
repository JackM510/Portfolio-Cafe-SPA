// Book a Table Button
function bookingForm() {

    const name = document.getElementById('name-input').value.trim();
    const phone = document.getElementById('phone-input').value.trim();
    const dateTime = document.getElementById('dateTime-input').value.trim();
    const numPeople = document.getElementById('people-input').value.trim();
    const message = document.getElementById('message-input').value.trim();

    // Validate Name
    if (name === "") {
        alert("Name is required.");
        return
    }

    // Validate Phone Number
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Validate Date and Time
    if (dateTime === "") {
        alert("Date and Time are required.");
        return;
    }

    // Check if booking date within stores operational hours
    if (!isBookingAllowed(dateTime)) {
        return;
    }

    // Validate Number of People
    const numPattern = /^(10|[1-9])$/; // Matches numbers 1-10
    if (!numPattern.test(numPeople)) {
        alert("Please enter a number between 1 and 10.");
        return;
    }

    alert("Booking successful");
}

function isBookingAllowed(dateTimeInput) {
    const currentDateTime = new Date();
    const bookingDateTime = new Date(dateTimeInput);
    // Limit Bookings within 1 month
    const oneMonthFromNow = new Date(currentDateTime); // Create copy of current date
    oneMonthFromNow.setMonth(currentDateTime.getMonth() + 1); // Move the date ahead by 1 month
    if (bookingDateTime > oneMonthFromNow) {
        alert("Booking cannot be made 1 month ahead from todays date.");
        return false;
    }

    if (bookingDateTime < currentDateTime) {
        alert("Booking cannot be made before todays date.");
        return false;
    }
    // Check the booking is made within the stores operational hours
    const dayOfWeek = bookingDateTime.getDay();

    // Disallow bookings on Sundays 
    if (dayOfWeek === 0) {
        alert("Booking cannot be made outside of operating hours.");
        return false;
    }

    const openHours = {
        1: { start: "7:00", end: "15:00" }, // Monday
        2: { start: "7:00", end: "15:00" }, // Tuesday
        3: { start: "7:00", end: "15:00" }, // Wednesday
        4: { start: "7:00", end: "15:00" }, // Thursday
        5: { start: "7:00", end: "15:00" }, // Friday
        6: { start: "8:00", end: "15:00" }, // Saturday    
    }

    const openTime = new Date(bookingDateTime);
    const closeTime = new Date(bookingDateTime);
    const [openHour, openMinute] = openHours[dayOfWeek].start.split(":").map(Number);
    const [closeHour, closeMinute] = openHours[dayOfWeek].end.split(":").map(Number);
    openTime.setHours(openHour, openMinute, 0);
    closeTime.setHours(closeHour, closeMinute, 0);

    if (bookingDateTime < openTime || bookingDateTime > closeTime) {
        return false; // Booking is not allowed if it's outside the open hours
    }

    return true;
}