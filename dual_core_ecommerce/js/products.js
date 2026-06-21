/* ============================================================
   DUAL-CORE E-COMMERCE HUB
   Product Data (mock catalog for demo)
   ============================================================ */

const PRODUCTS = [
  {
    id: 'p1',
    name: 'Quantum Headset Pro',
    category: 'Audio',
    price: 299.00,
    oldPrice: 349.00,
    rating: 4.8,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    badge: 'New',
    colors: ['#00F0FF', '#7C3AFF', '#FF2E8C'],
    description: 'Studio-grade wireless headphones with active noise cancellation and 40-hour battery life. Engineered for crystal-clear sound in any environment.',
    sku: 'QH-PRO-001',
  },
  {
    id: 'p2',
    name: 'Nebula Smartwatch X',
    category: 'Wearables',
    price: 459.00,
    oldPrice: null,
    rating: 4.6,
    reviews: 84,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    badge: 'Best Seller',
    colors: ['#06070D', '#A9C7FF', '#C9B6FF'],
    description: 'Track your health, fitness, and productivity with a beautiful AMOLED display, 7-day battery, and titanium frame.',
    sku: 'NW-X-002',
  },
  {
    id: 'p3',
    name: 'Holographic Speaker',
    category: 'Audio',
    price: 189.00,
    oldPrice: 229.00,
    rating: 4.7,
    reviews: 56,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80',
    badge: 'Sale',
    colors: ['#E8ECFF', '#7C3AFF'],
    description: 'Floating-edge design with 360° spatial sound. Voice assistant ready and multi-room compatible.',
    sku: 'HS-360-003',
  },
  {
    id: 'p4',
    name: 'Lumen Desk Lamp',
    category: 'Living',
    price: 129.00,
    oldPrice: null,
    rating: 4.9,
    reviews: 211,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80',
    badge: null,
    colors: ['#FAFBFE', '#0D1021'],
    description: 'Adjustable color temperature, touch-sensitive controls, and a sleek aluminum arm. Perfect for late-night focus.',
    sku: 'LD-DESK-004',
  },
  {
    id: 'p5',
    name: 'Cyber Backpack 30L',
    category: 'Accessories',
    price: 159.00,
    oldPrice: 199.00,
    rating: 4.5,
    reviews: 92,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    badge: 'Sale',
    colors: ['#06070D', '#474747', '#A9C7FF'],
    description: 'Waterproof, anti-theft, and USB-charging enabled. Fits 16" laptop with padded sleeve.',
    sku: 'CB-30L-005',
  },
  {
    id: 'p6',
    name: 'Aria Air Purifier',
    category: 'Living',
    price: 249.00,
    oldPrice: null,
    rating: 4.7,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
    badge: 'Eco',
    colors: ['#FFFFFF', '#F2F4F9'],
    description: 'HEPA filter with quiet mode. Removes 99.97% of particles and auto-adjusts to air quality.',
    sku: 'AA-PUR-006',
  },
  {
    id: 'p7',
    name: 'Mech Mechanical Keyboard',
    category: 'Tech',
    price: 219.00,
    oldPrice: 249.00,
    rating: 4.8,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80',
    badge: 'Hot',
    colors: ['#06070D', '#A9C7FF', '#FF2E8C'],
    description: 'Hot-swappable switches, RGB per-key lighting, and aircraft-grade aluminum frame.',
    sku: 'MK-87-007',
  },
  {
    id: 'p8',
    name: 'Solace Aroma Diffuser',
    category: 'Living',
    price: 79.00,
    oldPrice: null,
    rating: 4.4,
    reviews: 45,
    image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?w=600&q=80',
    badge: null,
    colors: ['#FAFBFE', '#C9B6FF', '#9FE8DD'],
    description: 'Ultrasonic essential oil diffuser with 7 ambient LED colors and 8-hour runtime.',
    sku: 'SA-DIF-008',
  },
  {
    id: 'p9',
    name: 'Pulse Fitness Tracker',
    category: 'Wearables',
    price: 119.00,
    oldPrice: 149.00,
    rating: 4.3,
    reviews: 78,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&q=80',
    badge: 'Sale',
    colors: ['#FF2E8C', '#00F0FF', '#06070D'],
    description: 'Heart rate, sleep, and 30+ workout modes. 14-day battery and 5 ATM water resistance.',
    sku: 'PF-FIT-009',
  },
  {
    id: 'p10',
    name: 'Nimbus Wireless Charger',
    category: 'Tech',
    price: 49.00,
    oldPrice: null,
    rating: 4.6,
    reviews: 134,
    image: 'https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=600&q=80',
    badge: null,
    colors: ['#FFFFFF', '#06070D'],
    description: '15W fast charging pad with overheat protection. Case-friendly up to 5mm.',
    sku: 'NC-15W-010',
  },
  {
    id: 'p11',
    name: 'Aurora LED Strip 5m',
    category: 'Living',
    price: 39.00,
    oldPrice: 59.00,
    rating: 4.5,
    reviews: 256,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80',
    badge: 'Sale',
    colors: ['#00F0FF', '#7C3AFF', '#FF2E8C'],
    description: 'App-controlled RGBIC LEDs. Music sync, voice control, and easy adhesive install.',
    sku: 'AL-5M-011',
  },
  {
    id: 'p12',
    name: 'Vector Wireless Mouse',
    category: 'Tech',
    price: 89.00,
    oldPrice: null,
    rating: 4.7,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80',
    badge: 'Best Seller',
    colors: ['#06070D', '#FFFFFF', '#7C3AFF'],
    description: 'Ergonomic shape, 25K DPI sensor, and 70-day battery life. USB-C fast charging.',
    sku: 'VM-25K-012',
  },
];

const CATEGORIES = [
  { id: 'audio', name: 'Audio', count: 24, icon: 'headphones' },
  { id: 'wearables', name: 'Wearables', count: 18, icon: 'watch' },
  { id: 'living', name: 'Living', count: 32, icon: 'chair' },
  { id: 'tech', name: 'Tech', count: 41, icon: 'memory' },
  { id: 'accessories', name: 'Accessories', count: 27, icon: 'backpack' },
];

function stars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

function productCardHTML(p) {
  return `
    <article class="product-card fade-up">
      <a href="product.html?id=${p.id}" aria-label="${p.name}">
        <div class="product-image-wrap">
          ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
          <img class="product-image" src="${p.image}" alt="${p.name}" loading="lazy"/>
        </div>
      </a>
      <button class="product-fav" data-fav-toggle data-id="${p.id}" aria-label="Add to favorites">
        <span class="material-symbols-outlined">favorite_border</span>
      </button>
      <div class="product-info">
        <span class="product-category">${p.category}</span>
        <a href="product.html?id=${p.id}"><h3 class="product-title">${p.name}</h3></a>
        <div class="product-rating">
          <span class="stars">${stars(p.rating)}</span>
          <span>(${p.reviews})</span>
        </div>
        <div class="product-foot">
          <div>
            <span class="product-price mono">$${p.price.toFixed(2)}</span>
            ${p.oldPrice ? `<span class="product-price-old">$${p.oldPrice.toFixed(2)}</span>` : ''}
          </div>
          <button class="product-add"
                  data-add-to-cart
                  data-id="${p.id}"
                  data-name="${p.name}"
                  data-price="${p.price}"
                  data-image="${p.image}"
                  aria-label="Add ${p.name} to cart">
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts(container, list) {
  if (!container) return;
  container.innerHTML = list.map(productCardHTML).join('');
}
