// Modal elements
 const modal = document.getElementById('gallery-modal');
 const modalTitle = document.getElementById('gallery-modal-title'); 
 const modalImage = document.getElementById('gallery-modal-img');
 const thumbnails = document.querySelectorAll('.gallery-img');
 const prevButton = document.getElementById('gallery-prev-img');
 const nextButton = document.getElementById('gallery-next-img');
 const modalInstance = new bootstrap.Modal(modal); // Instance of BS5 modal
 let currentIndex = 0; // Tracks current image in the modal

 // Open modal with the clicked image or enter key
 thumbnails.forEach((thumbnail, index) => {
     thumbnail.addEventListener('click', () => {
         currentIndex = index;
         updateModalImage();
     });

     thumbnail.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent any default action
            currentIndex = index;
            updateModalImage();
            modalInstance.show();
        }
    });
 });

 // Update the modal image based on the current index
 function updateModalImage() {
     modalImage.src = thumbnails[currentIndex].src;
     modalImage.alt = thumbnails[currentIndex].alt;
     modalTitle.innerHTML = `${currentIndex + 1} / ${thumbnails.length}`;
 }

 // Navigate to the previous image
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : thumbnails.length - 1;
    updateModalImage();
});

// Navigate to the next image
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < thumbnails.length - 1) ? currentIndex + 1 : 0;
    updateModalImage();
});

 // Handle keyboard navigation and closing
document.addEventListener('keydown', (event) => {
    if (modal.classList.contains('show')) { // Check if the modal is open
        if (event.key === 'ArrowLeft') {
            // Navigate to previous image
            event.preventDefault(); // Prevent any default action
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : thumbnails.length - 1;
            updateModalImage();
        } else if (event.key === 'ArrowRight') {
            // Navigate to next image
            event.preventDefault(); // Prevent any default action
            currentIndex = (currentIndex < thumbnails.length - 1) ? currentIndex + 1 : 0;
            updateModalImage();
        } else if (event.key === 'Escape') {
            // Close the modal with Esc key
            event.preventDefault(); // Prevent any default action
            modalInstance.hide();
        }
    }
});