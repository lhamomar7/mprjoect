// ===== MAIN JS =====

function createProductCard(product) {
  const isWished = wishlist.includes(product.id);
  return `
    <div class="product-card" data-id="${product.id}" data-cat="${product.category}">
      <div class="product-img">
        <div class="img-placeholder">${product.emoji}</div>
        ${product.badge ? `<span class="product-badge${product.badge === 'מבצע' ? ' sale' : ''}">${product.badge}</span>` : ''}
        <button class="product-wish${isWished ? ' active' : ''}" data-id="${product.id}" onclick="toggleWishlist(${product.id}); updateWishlistUI();" title="הוסף למשאלות">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
      <div class="product-info">
        <div class="product-brand">${product.brand}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-bottom">
          <div class="product-price">
            ${product.oldPrice ? `<span class="old-price">₪${product.oldPrice.toLocaleString()}</span>` : ''}
            ₪${product.price.toLocaleString()}
          </div>
          <button class="add-to-cart" onclick="addToCart(${product.id})">הוסף +</button>
        </div>
      </div>
    </div>
  `;
}

// Render featured products on homepage
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('featuredGrid');
  if (grid) {
    const featured = PRODUCTS.filter(p => p.isNew || p.badge === 'מבצע').slice(0, 8);
    grid.innerHTML = featured.map(createProductCard).join('');
  }

  // Search toggle
  const searchBtn = document.getElementById('searchBtn');
  const searchBar = document.getElementById('searchBar');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchInput');

  searchBtn?.addEventListener('click', () => {
    searchBar?.classList.toggle('open');
    if (searchBar?.classList.contains('open')) searchInput?.focus();
  });
  searchClose?.addEventListener('click', () => searchBar?.classList.remove('open'));

  // Duplicate brand scroll for infinite effect
  const brandsScroll = document.querySelector('.brands-scroll');
  if (brandsScroll) {
    brandsScroll.innerHTML += brandsScroll.innerHTML;
  }

  // Wishlist btn
  document.getElementById('wishlistBtn')?.addEventListener('click', () => {
    showToast(wishlist.length === 0 ? 'רשימת המשאלות ריקה' : `${wishlist.length} פריטים ברשימת המשאלות ❤️`, 'gold');
  });
});
