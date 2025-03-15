const menu = {
    Breakfast: {
        'BREAKY CLASSICS': [
            { name: "AVOCADO SMASH", description: "avocado, feta, mint & lemon on seeded toast w/ poached eggs", price: "$21.0"},
            { name: "Smashed Avo", description: "Fluffy pancakes with syrup", price: "$8.50"},
            { name: "Smashed Avo", description: "Fluffy pancakes with syrup", price: "$8.50"},
            { name: "Smashed Avo", description: "Fluffy pancakes with syrup", price: "$8.50"},
            { name: "Smashed Avo", description: "Fluffy pancakes with syrup", price: "$8.50"},
            { name: "GRAND BREKKIE", description: "poached eggs on sourdough with avocado, spinach, mushroom, grilled tomato, hash brown & relish", price: "$26.0", badge: "Popular"}
        ],
        'BREAKY BOWLS': [
            { name: "ACAI BOWL", description: "blueberry, banana, acai & organic almond milk w/ granola, strawberry, buckinis & coconut", price: "$17.0"},
            { name: "GOLDEN OATS", description: "mango soaked oats, yellow kiwifruit, dragon fruit, mango, toasted coconut & passionfruit yoghurt", price: "$19"}
        ],
        'WAFFLES & PANCAKES': [
            { name: "BLUEBERRY WAFFLES", description: "Fluffy pancakes with syrup", price: "$21.0", badge: "Popular" },
            { name: "Chocolate Waffles", description: "with honeycomb, passionfruit icecream, chocolate flakes & chocolate drizzle", price: "$22.0", badge: "Popular" },
            { name: "MATCHA PANCAKES", description: "fluffy pancakes with blueberries, blackberries, strawberries, berry puree, nuts", price: "$25.0", badge: "Popular" }
        ]   
    },       
    Lunch: {
        'LUNCH GO-TO': [
            { name: "Smashed Avo", description: "Fluffy pancakes with syrup", price: "$8.50"},
            { name: "Smashed Avo", description: "Fluffy pancakes with syrup", price: "$8.50"},
            { name: "Smashed Avo", description: "Fluffy pancakes with syrup", price: "$8.50"},
            { name: "Smashed Avo", description: "Fluffy pancakes with syrup", price: "$8.50"},
            { name: "Smashed Avo", description: "Fluffy pancakes with syrup", price: "$8.50"},
            { name: "The Big Breakfast", description: "Fluffy pancakes with syrup", price: "$8.50"}
        ],
        'BOWLS': [
            { name: "Matcha Pancakes", description: "Fluffy pancakes with syrup", price: "$8.50"},
            { name: "Pancakes", description: "Fluffy pancakes with syrup", price: "$8.50"}
        ],
        'SALADS': [
            { name: "SUPERFOOD SALAD", description: "kale, broccoli, avocado, quinoa, pearl cous cous, pomegranate & seeds w/ mustard dressing", price: "$19.0" },
            { name: "Pancakes", description: "Fluffy pancakes with syrup", price: "$8.50", badge: "Popular" }
        ]  
    },       
    Drinks: {
        "COFFEE": [
          { name: "Latte", description: "Smooth coffee with milk", price: "$4.00", badge: "New" },
          { name: "Iced Coffee", description: "Smooth coffee with milk", price: "$4.00", badge: "New" },
          { name: "Latte", description: "Smooth coffee with milk", price: "$4.00", badge: "New" },
          { name: "Espresso", description: "Strong black coffee", price: "$3.00" }
        ],
        'FRESH JUICES': [
          { name: "Orange Juice", description: "Freshly squeezed orange juice", price: "$3.00" },
          { name: "Orange Juice", description: "Freshly squeezed orange juice", price: "$3.00" },
          { name: "ANTI VIRUS", description: "pineapple, orange, ginger, lemon, carrot", price: "$3.00" },
          { name: "SUPER DETOX", description: "carrot, celery, lemon, ginger, kale", price: "$3.00" },
          { name: "Apple Juice", description: "Fresh apple juice", price: "$3.00" }
        ],
        SMOOTHIES: [
          { name: "Berrylicious", description: "strawberries, blueberries, raspberries, goji berries, acai berries", price: "$5.00" },
          { name: "PASSION", description: "passionfruit, mango, goji berries, mango sorbet", price: "$5.00" },
          { name: "BERRYLICIOUS", description: "Mixed berry smoothie", price: "$5.00" },
          { name: "MANGO REFRESH", description: "mango, mango sorbet", price: "$5.00" }
        ]
    }
  };
  


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
    // Create the card container (no column classes here)
    const card = document.createElement("div");
    card.classList.add("col-12", "col-md-6", "card", "rounded-0", "border-0", "px-5", "menu-card"); // Removed "col-12" and "col-md-6"
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    // Card title (item name and price)
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = `
      ${item.name} <span class="float-end">${item.price}</span>
    `;
  
    // Card description
    const cardDescription = document.createElement("p");
    cardDescription.classList.add("card-text");
    cardDescription.textContent = item.description;
  
    // Add badge (if exists)
    if (item.badge) {
      const badge = document.createElement("span");
      badge.classList.add("badge", "bg-warning", "ms-2", "menu-badge");
      badge.textContent = item.badge;
      cardTitle.appendChild(badge);
    }
  
    // Assemble the card
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);
    card.appendChild(cardBody);
  
    // Append the card to the provided container
    container.appendChild(card);
  };
  
  

    // Call the function for each menu category
    populateCategory("Breakfast", "menu-breakfast");
    populateCategory("Lunch", "menu-lunch");
    populateCategory("Drinks", "menu-drinks");

    // Manually trigger Bootstrap's tab logic for the default active tab
    const defaultTab = document.querySelector('a[href="#tab1"]'); // Breakfast tab
    const bootstrapTab = new bootstrap.Tab(defaultTab);
    bootstrapTab.show(); // Simulates a user clicking the Breakfast tab