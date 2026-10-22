/* Gram Bazar shared navigation: include this file on every public page. */
(() => {
  'use strict';
  const mount = document.getElementById('gb-common-nav');
  if (!mount) return;
  const isDashboard = /user-dashboard\.html$/i.test(location.pathname);
  const home = 'index.html';
  const css = `
  .gb-topline{padding:7px 5%;background:#075c32;color:#fff;font-size:12px;display:flex;justify-content:space-between;gap:12px}
  .gb-header{display:flex;align-items:center;gap:18px;padding:14px 5%;border-bottom:1px solid #e6ece7;position:sticky;top:0;background:#fff;z-index:40;box-shadow:0 3px 12px #12351b08}
  .gb-brand{display:flex;align-items:center;gap:9px;text-decoration:none;color:#18241c;font-size:22px;font-weight:850;line-height:1.05;white-space:nowrap}
  .gb-logo{background:#eaf7ed;border-radius:13px;padding:9px;font-size:22px}
  .gb-brand small{display:block;font-size:10px;font-weight:500;color:#718076;margin-top:5px}
  .gb-location{display:flex;gap:8px;align-items:center;white-space:nowrap;color:#18241c}
  .gb-pin{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:#e8f4f8}
  .gb-location small,.gb-location strong{display:block}.gb-location small{color:#718076;font-size:10px}.gb-location strong{font-size:12px;max-width:165px;overflow:hidden;text-overflow:ellipsis}
  .gb-search{display:flex;align-items:center;gap:8px;flex:1;min-width:100px;max-width:520px;background:#f4f7f4;border:1px solid #e6ece7;border-radius:12px;overflow:hidden;margin-left:auto}
  .gb-search span{padding-left:13px;font-size:20px;color:#718076}.gb-search input{flex:1;min-width:0;padding:12px 8px;border:0;background:transparent;outline:none;color:#18241c}.gb-search button{border:0;background:#168447;color:white;padding:0 16px;height:43px;font-weight:700}
  .gb-action{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid #e6ece7;background:#fff;color:#18241c;border-radius:9px;padding:9px 11px;text-decoration:none;white-space:nowrap;cursor:pointer;font:inherit;font-size:13px;font-weight:700}.gb-action:hover{background:#eaf7ed;color:#075c32}.gb-count{display:inline-grid;place-items:center;min-width:19px;height:19px;padding:0 4px;border-radius:20px;background:#168447;color:white;font-size:10px}
  .gb-categories{display:flex;gap:8px;padding:10px 5%;overflow:auto;border-bottom:1px solid #e6ece7;white-space:nowrap;background:#fff}
  .gb-cat{display:inline-flex;align-items:center;gap:6px;border:1px solid transparent;background:#fff;color:#26332a;text-decoration:none;padding:8px 13px;border-radius:25px;cursor:pointer;font:inherit;font-size:13px;white-space:nowrap}.gb-cat:hover,.gb-cat.active{background:#eaf7ed;border-color:#cdebd5;color:#075c32}
  @media(max-width:1000px){.gb-header{gap:10px;flex-wrap:wrap}.gb-brand{font-size:19px}.gb-location{display:none}.gb-search{order:5;flex-basis:100%;max-width:none;margin:0}}
  @media(max-width:650px){.gb-topline{font-size:10px;padding:7px 4%}.gb-topline span{display:none}.gb-header{padding:11px 4%;gap:7px}.gb-brand{font-size:18px;flex:1}.gb-logo{padding:6px}.gb-action{font-size:12px;padding:7px}.gb-action .gb-action-label{display:none}.gb-search{order:5}.gb-categories{padding:9px 4%}.gb-cat{font-size:12px;padding:7px 10px}}
  `;
  const style = document.createElement('style'); style.id = 'gb-common-nav-style'; style.textContent = css; document.head.appendChild(style);
  const search = isDashboard
    ? `<label class="gb-search"><span>⌕</span><input id="globalSearch" placeholder="Search orders, addresses, help..." aria-label="Search account"></label>`
    : `<form class="gb-search" id="searchForm"><span>⌕</span><input id="searchInput" placeholder="Search for rice, vegetables, daily needs..." aria-label="Search products"><button type="submit">Search</button></form>`;
  const cartId = isDashboard ? 'cartButton' : 'cartJump';
  const accountControl = isDashboard
    ? `<a class="gb-action" id="accountBtn" href="user-dashboard.html" title="My Dashboard">👤 <span class="gb-action-label">My Dashboard</span></a><button class="gb-action" id="topAvatar" data-page="personal" title="My Profile">S</button>`
    : `<a class="gb-action" id="accountBtn" href="user-dashboard.html" title="My Dashboard">👤 <span class="gb-action-label">My Dashboard</span></a>`;
  const cartControl = isDashboard
    ? `<button class="gb-action" title="Cart" id="cartButton">🛒 <span class="gb-action-label">Cart</span> <b class="gb-count" id="cartCount">0</b></button>`
    : `<a class="gb-action" href="${home}#cart" title="Cart" id="cartJump">🛒 <span class="gb-action-label">Cart</span> <b class="gb-count" id="cartCount">0</b></a>`;
  const wishlistControl = isDashboard
    ? `<button class="gb-action" data-page="wishlist" title="Wishlist">♡ <span class="gb-action-label">Wishlist</span></button>`
    : `<a class="gb-action" href="${home}#products" title="Wishlist">♡ <span class="gb-action-label">Wishlist</span></a>`;
  mount.innerHTML = `
    <div class="gb-topline"><strong>🌿 Apne Gaon Ka Bazaar, Ab Online</strong><span>Fresh products · Local shops · Farmers se seedha</span></div>
    <header class="gb-header">
      <a href="${home}" class="gb-brand"><span class="gb-logo">🌿</span><span>gram-<span style="color:#168447">bazar</span><small>Apne gaon ka bazaar</small></span></a>
      <div class="gb-location"><span class="gb-pin">📍</span><span><small>DELIVER TO</small><strong id="headerAddress">Choose your address</strong></span></div>
      ${search}
      ${accountControl}
      ${wishlistControl}
      ${cartControl}
    </header>
    <nav class="gb-categories" id="categoryNav" aria-label="Product categories">
      <a class="gb-cat active" href="${home}#products">All Products</a>
      <a class="gb-cat" href="${home}#products">🥦 Fruits & Vegetables</a>
      <a class="gb-cat" href="${home}#products">🌾 Grocery & Staples</a>
      <a class="gb-cat" href="${home}#products">🥛 Dairy & Bakery</a>
      <a class="gb-cat" href="${home}#products">🏡 Home & Kitchen</a>
      <a class="gb-cat" href="${home}#products">👕 Fashion</a>
      <a class="gb-cat" href="${home}#products">🎧 Electronics</a>
      <a class="gb-cat" href="${home}#products">🌾 Local Farmers</a>
    </nav>`;

  // Keep the existing homepage product/category scripts working with the shared header.
  if (!isDashboard) {
    // Homepage's own script handles searchForm and cartJump interactions.
  } else {
    // The dashboard page owns its account navigation; the shared cart shortcut returns to storefront.
    const address = JSON.parse(localStorage.getItem('gbdash-addresses') || '[]');
    const defaultAddress = address.find(a => a.isDefault) || address[0];
    const addressNode = document.getElementById('headerAddress');
    if (addressNode && defaultAddress) addressNode.textContent = defaultAddress.label || defaultAddress.village || 'Saved address';
  }
})();
