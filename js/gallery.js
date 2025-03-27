 // Select modal elements
 const modal = document.getElementById('galleryModal');
 const modalImage = document.getElementById('modalImage');
 const thumbnails = document.querySelectorAll('.gallery-img');
 const prevButton = document.getElementById('prevImage');
 const nextButton = document.getElementById('nextImage');

 let currentIndex = 0;

 const modalTitle = document.getElementById('modalTitle'); 

 // Open modal with the clicked image or enter key
 thumbnails.forEach((thumbnail, index) => {
     thumbnail.addEventListener('click', () => {
         currentIndex = index;
         updateModalImage();
     });

     thumbnail.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            currentIndex = index;
            updateModalImage();
            const modalInstance = new bootstrap.Modal(modal);
            modalInstance.show();
        }
    });
 });

 // Update the modal image based on the current index
 function updateModalImage() {
     modalImage.src = thumbnails[currentIndex].src;
     modalTitle.innerHTML = currentIndex+1 + ' / ' + thumbnails.length;
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
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : thumbnails.length - 1;
            updateModalImage();
        } else if (event.key === 'ArrowRight') {
            // Navigate to next image
            currentIndex = (currentIndex < thumbnails.length - 1) ? currentIndex + 1 : 0;
            updateModalImage();
        } else if (event.key === 'Escape') {
            // Close the modal with Esc key
            const modalInstance = bootstrap.Modal.getInstance(modal);
            modalInstance.hide();
        }
    }
});