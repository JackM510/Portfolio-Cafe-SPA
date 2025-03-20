let menu = {};

// Fetch the JSON file
fetch('./data/menu.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch JSON: ${response.status}`);
        }
        return response.json(); // Parse the JSON file
    })
    .then(data => {
        menu = data.Menu; // Access the 'Menu' object from your JSON
        // Call the function for each menu category
        populateCategory("Breakfast", "menu-breakfast");
        populateCategory("Lunch", "menu-lunch");
        populateCategory("Drinks", "menu-drinks");

        // Manually trigger Bootstrap's tab logic for the default active tab
        const defaultTab = document.querySelector('a[href="#tab1"]'); // Breakfast tab
        const bootstrapTab = new bootstrap.Tab(defaultTab);
        bootstrapTab.show(); // Simulates a user clicking the Breakfast tab

    })
    .catch(error => console.error('Error:', error));


const populateCategory = (category, containerId) => {
    const container = document.getElementById(containerId);
    const items = menu[category];
  
    if (items && container) {
      // Check if the category has subcategories (like Drinks)
      if (typeof items === "object" && !Array.isArray(items)) {
        // Handle subcategories
        Object.keys(items).forEach(subcategory => {
          // Create a single column for the subcategory
          const headingColumn = document.createElement("div");
          headingColumn.classList.add("col-12", "text-center", "mb-4");
  
          // Add a heading for the subcategory
          const heading = document.createElement("h4");
          heading.classList.add("heading-underline", "mt-3", "p-3", "subcategory-heading");
          heading.textContent = subcategory;
          headingColumn.appendChild(heading);

        // Append the subcategory column to the main container
        container.appendChild(headingColumn);
  
          items[subcategory].forEach(item => {
            createMenuCard(item, container); // Reusable card creation
          });  
        });
      } else {
        // Handle categories without subcategories (like Breakfast or Lunch)
        items.forEach(item => {
          createMenuCard(item, container); // Reusable card creation
        });
      }
    }
  };
  
  
  const createMenuCard = (item, container) => {
    // Create the card container
    const card = document.createElement("div");
    card.classList.add("col-12", "card", "rounded-0", "border-0", "px-5", "menu-card");
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    // Card title (item name and price)
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title", "align-items-center");
    cardTitle.innerHTML = `
      ${item.name} <span class="menu-price float-end">${item.price}</span>
    `;

    // Dietary Span
    if (item.dietary) {
      const dietSpan = document.createElement('span');
      dietSpan.textContent = item.dietary;
      dietSpan.classList.add("badge", "diet-span");
      cardTitle.appendChild(dietSpan);
    }
  
    // Card description
    const cardDescription = document.createElement("p");
    cardDescription.classList.add("card-text");
    cardDescription.textContent = item.description;
  
    // Add badge (if exists)
    if (item.badge) {
      const badge = document.createElement("span");
      badge.textContent = item.badge;

      if (badge.textContent == 'NEW') {
        badge.classList.add("badge", "bg-success", "menu-badge");
      } else if (badge.textContent == 'POPULAR') {
        badge.classList.add("badge", "bg-warning", "menu-badge");
      }
      cardTitle.appendChild(badge);
    }
  
    // Assemble the card
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);
    card.appendChild(cardBody);
  
    // Append the card to the provided container
    container.appendChild(card);
  };