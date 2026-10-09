const categories = ["ENCHANTMENTS", "BLOCKS", "TOOLS"];
let currentCategory = "ENCHANTMENTS";

const shopItems = [
  {
    id: "silk_touch",
    name: "SILK TOUCH",
    level: "I",
    category: "ENCHANTMENTS",
    price: 5,
    currencyIcon: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.1/assets/minecraft/textures/item/diamond.png",
    icon: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.1/assets/minecraft/textures/item/enchanted_book.png",
    isEnchanted: true
  },
  {
    id: "unbreaking",
    name: "UNBREAKING",
    level: "III",
    category: "ENCHANTMENTS",
    price: 8,
    currencyIcon: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.1/assets/minecraft/textures/item/diamond.png",
    icon: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.1/assets/minecraft/textures/item/enchanted_book.png",
    isEnchanted: true
  },
  {
    id: "dirt_block",
    name: "DIRT",
    level: "64x",
    category: "BLOCKS",
    price: 1,
    currencyIcon: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.1/assets/minecraft/textures/item/diamond.png",
    icon: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.1/assets/minecraft/textures/block/dirt.png",
    isEnchanted: false
  },
  {
    id: "iron_ingot",
    name: "IRON INGOT",
    level: "32x",
    category: "TOOLS",
    price: 3,
    currencyIcon: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.1/assets/minecraft/textures/item/diamond.png",
    icon: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.1/assets/minecraft/textures/item/iron_ingot.png",
    isEnchanted: false
  }
];

function renderCategories() {
  const container = document.getElementById("categoryTabs");
  if (!container) return;
  container.innerHTML = "";
  
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = `tab-btn ${cat === currentCategory ? 'active' : ''}`;
    btn.innerText = cat;
    btn.onclick = () => {
      currentCategory = cat;
      renderCategories();
      renderItems();
    };
    container.appendChild(btn);
  });
}

function renderItems() {
  const grid = document.getElementById("itemsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const filteredItems = shopItems.filter(item => item.category === currentCategory);

  if (filteredItems.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: #777; font-size: 20px; padding: 40px;">V tejto kategórii nie sú žiadne položky.</div>`;
    return;
  }

  filteredItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "item-card";

    card.innerHTML = `
      <div class="item-slot">
        <img src="${item.icon}" class="item-icon" alt="${item.name}">
        ${item.isEnchanted ? '<div class="glint-effect"></div>' : ''}
      </div>
      <div class="item-title">${item.name}</div>
      <div class="item-level">${item.level || ''}</div>
      <div class="item-price-tag">
        <span class="price-value">${item.price}</span>
        <img src="${item.currencyIcon}" class="currency-icon" alt="Diamond">
      </div>
    `;

    grid.appendChild(card);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderItems();
});
