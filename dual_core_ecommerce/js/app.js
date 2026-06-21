/* ============================================================
   DUAL-CORE E-COMMERCE HUB
   Shared JavaScript
   ============================================================ */

(function () {
  'use strict';

  // ---------- THEME MANAGEMENT ----------
  const THEME_KEY = 'dce_theme';
  const root = document.documentElement;

  function getStoredTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }

  function setStoredTheme(theme) {
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    document.querySelectorAll('[data-theme-icon]').forEach(icon => {
      icon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
    });
    document.querySelectorAll('[data-theme-label]').forEach(label => {
      label.textContent = theme === 'dark' ? 'Light' : 'Dark';
    });
  }

  function initTheme() {
    const stored = getStoredTheme();
    const theme = stored || 'dark'; // default to sci-fi dark
    applyTheme(theme);
  }

  function toggleTheme() {
    const current = root.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    setStoredTheme(next);
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.addEventListener('click', toggleTheme);
    });
  });

  // ---------- MOBILE MENU ----------
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('[data-mobile-toggle]');
    const menu = document.querySelector('[data-mobile-menu]');
    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        menu.classList.toggle('open');
        const isOpen = menu.classList.contains('open');
        toggle.querySelector('.material-symbols-outlined').textContent =
          isOpen ? 'close' : 'menu';
      });
    }
  });

  // ---------- CART STATE ----------
  const CART_KEY = 'dce_cart';

  function getCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch (e) { return []; }
  }

  function saveCart(cart) {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
    updateCartCount();
  }

  function addToCart(product) {
    const cart = getCart();
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.qty += product.qty || 1;
    } else {
      cart.push({ ...product, qty: product.qty || 1 });
    }
    saveCart(cart);
    showToast(`${product.name} added to cart`);
  }

  function removeFromCart(id) {
    const cart = getCart().filter(item => item.id !== id);
    saveCart(cart);
  }

  function updateCartQty(id, qty) {
    const cart = getCart();
    const item = cart.find(i => i.id === id);
    if (item) {
      item.qty = Math.max(1, qty);
      saveCart(cart);
    }
  }

  function cartTotal() {
    return getCart().reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  function cartCount() {
    return getCart().reduce((sum, item) => sum + item.qty, 0);
  }

  function updateCartCount() {
    document.querySelectorAll('[data-cart-count]').forEach(el => {
      el.textContent = cartCount();
    });
  }

  // ---------- TOAST ----------
  function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      toast.innerHTML = `
        <span class="material-symbols-outlined toast-icon">check_circle</span>
        <span class="toast-msg"></span>
      `;
      document.body.appendChild(toast);
    }
    toast.querySelector('.toast-msg').textContent = message;
    requestAnimationFrame(() => toast.classList.add('show'));
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  }

  window.showToast = showToast;

  // ---------- FAVORITES ----------
  const FAV_KEY = 'dce_favs';

  function getFavs() {
    try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; }
    catch (e) { return []; }
  }

  function toggleFav(id) {
    const favs = getFavs();
    const idx = favs.indexOf(id);
    if (idx >= 0) {
      favs.splice(idx, 1);
    } else {
      favs.push(id);
    }
    try { localStorage.setItem(FAV_KEY, JSON.stringify(favs)); } catch (e) {}
    return idx < 0;
  }

  function isFav(id) { return getFavs().includes(id); }

  // ---------- INTERSECTION OBSERVER FOR FADE ----------
  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    updateCartCount();
  });

  // ---------- ADD TO CART HANDLERS ----------
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-add-to-cart]');
    if (!btn) return;
    e.preventDefault();
    const data = {
      id: btn.dataset.id,
      name: btn.dataset.name,
      price: parseFloat(btn.dataset.price),
      image: btn.dataset.image,
    };
    addToCart(data);
  });

  // ---------- FAVORITE HANDLERS ----------
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-fav-toggle]');
    if (!btn) return;
    e.preventDefault();
    const id = btn.dataset.id;
    const active = toggleFav(id);
    btn.classList.toggle('active', active);
    const icon = btn.querySelector('.material-symbols-outlined');
    if (icon) icon.textContent = active ? 'favorite' : 'favorite_border';
  });

  // ---------- EXPOSE ----------
  window.DCE = {
    getCart, saveCart, addToCart, removeFromCart, updateCartQty,
    cartTotal, cartCount, showToast,
    getFavs, toggleFav, isFav,
  };

})();