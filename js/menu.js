let menu = {}; // Stores the menu data
// Menu styles for 'new' & 'popular' badges
const badgeStyles = {
  NEW: "bg-success",
  POPULAR: "bg-warning",
};

// Fetch the JSON file
fetch('./data/menu.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch JSON: ${response.status}`);
        }
        return response.json(); // Parse the JSON file
    })
    .then(data => {
        menu = data.Menu; // Access the 'Menu' object from menu.json
        populateCategory("Breakfast", "menu-container-breakfast");
        populateCategory("Lunch", "menu-container-lunch");
        populateCategory("Drinks", "menu-container-drinks");

        // Manually set the active menu tab to the Breakfast tab
        const defaultTab = document.getElementById('menu-link-breakfast');
        const bootstrapTab = new bootstrap.Tab(defaultTab);
        bootstrapTab.show(); // Simulates clicking the Breakfast tab

    })
    .catch(error => console.error('Error:', error));

// Populate each menu category with menu data
const populateCategory = (category, containerId) => {
  const container = document.getElementById(containerId);
  const items = menu[category];
  let subheadingCount = 0; // Determine the first subcategory and apply extra margin-top for spacing

  if (items && container) {
    // Check if the menu category has any subcategories
    if (typeof items === "object" && !Array.isArray(items)) {
      Object.keys(items).forEach(subcategory => {
        // Create a BS5 column for each subcategory
        const subcategoryColumn = document.createElement("div");
        subcategoryColumn.classList.add("col-12", "text-center", "mb-4");
        
        // Add the subheading to the subcategory div
        const heading = document.createElement("h4");
        heading.classList.add("subcategory-heading", "heading-underline", subheadingCount === 0 ? "mt-4" : "mt-3");
        heading.textContent = subcategory;
        subcategoryColumn.appendChild(heading);
        subheadingCount++;

        // Append the subcategory column to the main container
        container.appendChild(subcategoryColumn);
        // Append each subcategory item to the container
        items[subcategory].forEach(item => {
          createMenuCard(item, container);
        });  
      });
    } 
    else { // Default else statement if there is no subcategory
      items.forEach(item => {
        createMenuCard(item, container);
      });
    }
  }
};
  
// Create each menu item as a BS5 card
const createMenuCard = (item, container) => {
  // Create the card container
  const card = document.createElement("div");
  card.classList.add("col-12", "card", "menu-card");

  // Create the card body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Create the card title (holds the item name, badges and price)
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title", "align-items-center");
  cardTitle.innerHTML = `${item.name} `;

  // Create the dietary badge
  if (item.dietary) {
    const dietSpan = document.createElement('span');
    dietSpan.textContent = item.dietary;
    dietSpan.classList.add("badge", "diet-badge");
    cardTitle.appendChild(dietSpan);
  }

  // Create the 'new' & 'popular' badges
  if (item.badge && badgeStyles[item.badge]) {
    const badge = document.createElement("span");
    badge.textContent = item.badge;
    badge.classList.add("badge", badgeStyles[item.badge], "item-badge");
    cardTitle.appendChild(badge);
  }

  // Create the price span
  const priceSpan = document.createElement("span");
  priceSpan.classList.add("menu-price", "float-end");
  priceSpan.textContent = item.price;
  cardTitle.appendChild(priceSpan);

  // Card the description for each menu item
  const cardDescription = document.createElement("p");
  cardDescription.classList.add("card-text");
  cardDescription.textContent = item.description;

  // Append each card element to the card
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardDescription);
  card.appendChild(cardBody);

  // Append the card to the provided menu container
  container.appendChild(card);
}; 