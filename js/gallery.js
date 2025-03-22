 // Select modal elements
 const modal = document.getElementById('galleryModal');
 const modalImage = document.getElementById('modalImage');
 const thumbnails = document.querySelectorAll('.gallery-img');
 const prevButton = document.getElementById('prevImage');
 const nextButton = document.getElementById('nextImage');

 let currentIndex = 0;

 const modalTitle = document.getElementById('modalTitle'); 

 // Open modal with the clicked image
 thumbnails.forEach((thumbnail, index) => {
     thumbnail.addEventListener('click', () => {
         currentIndex = index;
         updateModalImage();
     });
 });

 // Update the modal image based on the current index
 function updateModalImage() {
     modalImage.src = thumbnails[currentIndex].src;
     modalTitle.innerHTML = currentIndex+1 + ' / ' + thumbnails.length;
 }

 // Navigate to the previous image
 prevButton.addEventListener('click', () => {
     if (currentIndex > 0) {
         currentIndex--;
         updateModalImage();
     } else if (currentIndex == 0) {
         currentIndex = thumbnails.length - 1;
         updateModalImage();
     }
 });

 // Navigate to the next image
 nextButton.addEventListener('click', () => {
     if (currentIndex < thumbnails.length - 1) {
         currentIndex++;
         updateModalImage();
     } else if (currentIndex == thumbnails.length - 1) {
         currentIndex = 0;
         updateModalImage();
     }
 });