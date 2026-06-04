// ===== CART MANAGEMENT =====
let cart = JSON.parse(localStorage.getItem('luxebag_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('luxebag_wishlist') || '[]');

function saveCart() {
  localStorage.setItem('luxebag_cart', JSON.stringify(cart));
  updateCartUI();
}

function saveWishlist() {
  localStorage.setItem('luxebag_wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  showToast(`${product.name} נוסף לעגלה 🛍️`, 'gold');
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
}

function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else saveCart();
}

function toggleWishlist(productId) {
  const idx = wishlist.indexOf(productId);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast('הוסר מרשימת המשאלות');
  } else {
    wishlist.push(productId);
    const product = PRODUCTS.find(p => p.id === productId);
    showToast(`${product?.name} נוסף למשאלות ❤️`, 'gold');
  }
  saveWishlist();
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartUI() {
  const countEl = document.getElementById('cartCount');
  if (countEl) countEl.textContent = getCartCount();

  const itemsEl = document.getElementById('cartItems');
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = '<div class="cart-empty">העגלה ריקה</div>';
  } else {
    itemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img">${item.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-brand">${item.brand}</div>
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-bottom">
            <div class="cart-item-qty">
              <button onclick="updateQty(${item.id}, -1)">−</button>
              <span>${item.qty}</span>
              <button onclick="updateQty(${item.id}, +1)">+</button>
            </div>
            <span class="cart-item-price">₪${(item.price * item.qty).toLocaleString()}</span>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  const totalEl = document.getElementById('cartTotal');
  if (totalEl) totalEl.textContent = `₪${getCartTotal().toLocaleString()}`;

  // Update checkout page cart summary
  updateCheckoutSummary();
}

function updateWishlistUI() {
  const countEl = document.getElementById('wishlistCount');
  if (countEl) countEl.textContent = wishlist.length;

  // Update heart icons on page
  document.querySelectorAll('.product-wish').forEach(btn => {
    const id = parseInt(btn.dataset.id);
    if (wishlist.includes(id)) btn.classList.add('active');
    else btn.classList.remove('active');
  });
}

function updateCheckoutSummary() {
  const summaryEl = document.getElementById('checkoutItems');
  if (!summaryEl) return;
  summaryEl.innerHTML = cart.map(item => `
    <div class="summary-item">
      <span>${item.emoji} ${item.name} × ${item.qty}</span>
      <span>₪${(item.price * item.qty).toLocaleString()}</span>
    </div>
  `).join('');
  const shipping = getCartTotal() >= 299 ? 0 : 29;
  document.getElementById('summaryShipping').textContent = shipping === 0 ? 'חינם' : `₪${shipping}`;
  document.getElementById('summaryTotal').textContent = `₪${(getCartTotal() + shipping).toLocaleString()}`;
}

// Toast notification
function showToast(msg, type = '') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = `toast${type ? ' ' + type : ''}`;
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// Cart sidebar toggle
document.addEventListener('DOMContentLoaded', () => {
  const cartBtn = document.getElementById('cartBtn');
  const cartClose = document.getElementById('cartClose');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartSidebar = document.getElementById('cartSidebar');

  function openCart() {
    cartSidebar?.classList.add('open');
    cartOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeCart() {
    cartSidebar?.classList.remove('open');
    cartOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  cartBtn?.addEventListener('click', openCart);
  cartClose?.addEventListener('click', closeCart);
  cartOverlay?.addEventListener('click', closeCart);

  updateCartUI();
  updateWishlistUI();
});
