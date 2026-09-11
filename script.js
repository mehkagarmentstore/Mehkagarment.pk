/* =========================================================
   MEHKA GARMENTS — script.js
   1. Configuration
   2. Product data
   3. DOM references
   4. Utilities / error handling
   5. Product rendering
   6. Category filtering
   7. Search
   8. Product modal
   9. Color selection
   10. Size selection
   11. Quantity
   12. Cart
   13. localStorage
   14. Like / dislike
   15. Navigation
   16. Scroll animations
   17. Hero behaviour / parallax
   18. 3D card tilt
   19. Contact / WhatsApp order generation
   20. Initialization
   ========================================================= */

(function () {
  "use strict";

  /* ============ 1. CONFIGURATION ============ */
  const CONFIG = {
    brand: "MEHKA GARMENTS",
    currency: "Rs.",
    contact: {
      email: "EMAIL_HERE",
      phone: "PHONE_HERE",
      whatsappNumber: "WHATSAPP_NUMBER_HERE", // digits only, e.g. 923001234567
      address: "SHOP_ADDRESS_HERE"
    },
    storageKeys: {
      cart: "mehka_cart_v1",
      reactions: "mehka_reactions_v1"
    },
    imageBase: "assets/images/"
  };

  /* ============ 2. PRODUCT DATA ============ */
  // Centralised, data-driven product catalogue. Add more objects here to
  // extend the store — no HTML/JS structure changes required.
  const SIZE_SET_STANDARD = ["S", "M", "L", "XL"];

  const PRODUCTS = [
    // ---------- SHIRTS & T-SHIRTS ----------
    {
      id: "simple-formal-shirt",
      name: "Simple Formal Shirt",
      category: "shirts",
      price: 3200,
      salePrice: 2499,
      image: "simple-formal-shirt-white.jpg",
      description: "A tailored formal shirt in breathable cotton-blend poplin — clean lines for the office or evenings out.",
      sizes: SIZE_SET_STANDARD,
      colors: [
        { name: "White", hex: "#f5f3ee" },
        { name: "Sky Blue", hex: "#a9c4d8" },
        { name: "Charcoal", hex: "#333229" }
      ]
    },
    {
      id: "simple-check-shirt",
      name: "Simple Check Shirt",
      category: "shirts",
      price: 3600,
      salePrice: 2799,
      image: "simple-check-shirt-charcoal.jpg",
      description: "A soft-brushed check shirt with a relaxed collar — an easy layer for cooler days.",
      sizes: SIZE_SET_STANDARD,
      colors: [
        { name: "Charcoal Check", pattern: "check", hex: "#3a382f" },
        { name: "Rust Check", pattern: "check", hex: "#8a4a30" },
        { name: "Navy Check", pattern: "check", hex: "#28344a" }
      ]
    },
    {
      id: "simple-polo",
      name: "Simple Polo",
      category: "shirts",
      price: 2600,
      salePrice: 1999,
      image: "simple-polo-black.jpg",
      description: "A pique-knit polo with a clean placket — built to move and hold its shape wash after wash.",
      sizes: SIZE_SET_STANDARD,
      colors: [
        { name: "Black", hex: "#1c1b17" },
        { name: "White", hex: "#f5f3ee" },
        { name: "Olive", hex: "#5c5c3f" }
      ]
    },
    {
      id: "polo-stripe-color",
      name: "Polo Stripe Color",
      category: "shirts",
      price: 2900,
      salePrice: 2199,
      image: "polo-stripe-navy.jpg",
      description: "A striped pique polo that pairs cleanly with denim or trousers alike.",
      sizes: SIZE_SET_STANDARD,
      colors: [
        { name: "Navy / White", pattern: "stripe", s1: "#28344a", s2: "#f2efe6" },
        { name: "Black / Grey", pattern: "stripe", s1: "#1c1b17", s2: "#9a9482" }
      ]
    },
    {
      id: "simple-collar-tshirt",
      name: "Simple Collar T-Shirt",
      category: "shirts",
      price: 2400,
      salePrice: 1799,
      image: "collar-tshirt-white.jpg",
      description: "A collared tee that bridges smart and casual — soft cotton with structure where it counts.",
      sizes: SIZE_SET_STANDARD,
      colors: [
        { name: "White", hex: "#f5f3ee" },
        { name: "Black", hex: "#1c1b17" },
        { name: "Beige", hex: "#cdbd9d" }
      ]
    },

    // ---------- PANTS ----------
    {
      id: "cotton-pant",
      name: "Cotton Pant",
      category: "pants",
      price: 3800,
      salePrice: 2999,
      image: "cotton-pant-beige.jpg",
      description: "A mid-weight cotton pant with a tapered leg — a dependable everyday foundation.",
      sizes: SIZE_SET_STANDARD,
      colors: [
        { name: "Beige", hex: "#cdbd9d" },
        { name: "Olive", hex: "#5c5c3f" },
        { name: "Navy", hex: "#28344a" }
      ]
    },
    {
      id: "formal-washing-wear",
      name: "Formal Washing Wear",
      category: "pants",
      price: 4000,
      salePrice: 3199,
      image: "formal-washing-wear-charcoal.jpg",
      description: "Wash-finished formal trousers that hold a crease without feeling stiff.",
      sizes: SIZE_SET_STANDARD,
      colors: [
        { name: "Charcoal", hex: "#333229" },
        { name: "Grey", hex: "#8d897c" }
      ]
    },
    {
      id: "simple-denim",
      name: "Simple Denim",
      category: "pants",
      price: 4500,
      salePrice: 3499,
      image: "simple-denim-indigo.jpg",
      description: "A straightforward straight-fit denim in mid-weight cotton twill.",
      sizes: SIZE_SET_STANDARD,
      colors: [
        { name: "Indigo", hex: "#2f3e5c" },
        { name: "Black", hex: "#1c1b17" }
      ]
    },
    {
      id: "brushed-denim",
      name: "Brushed Denim",
      category: "pants",
      price: 4700,
      salePrice: 3699,
      image: "brushed-denim-stonewash.jpg",
      description: "Brushed-finish denim for extra softness against the skin, season after season.",
      sizes: SIZE_SET_STANDARD,
      colors: [
        { name: "Stone Wash", hex: "#a7a08c" },
        { name: "Dark Wash", hex: "#2b3142" }
      ]
    },
    {
      id: "simple-straight-denim",
      name: "Simple Straight Denim",
      category: "pants",
      price: 4600,
      salePrice: 3599,
      image: "straight-denim-jetblack.jpg",
      description: "A clean straight-leg denim with minimal detailing for a versatile fit.",
      sizes: SIZE_SET_STANDARD,
      colors: [
        { name: "Indigo", hex: "#2f3e5c" },
        { name: "Jet Black", hex: "#141310" }
      ]
    },

    // ---------- TROUSERS ----------
    {
      id: "casual-trouser",
      name: "Casual Trouser",
      category: "trousers",
      price: 3700,
      salePrice: 2899,
      image: "casual-trouser-khaki.jpg",
      description: "A relaxed trouser with a soft drape — dresses up or down with equal ease.",
      sizes: SIZE_SET_STANDARD,
      colors: [
        { name: "Khaki", hex: "#b8a67c" },
        { name: "Charcoal", hex: "#333229" },
        { name: "Navy", hex: "#28344a" }
      ]
    },
    {
      id: "china-necked-trouser",
      name: "China Necked Trouser",
      category: "trousers",
      price: 3900,
      salePrice: 3099,
      image: "china-necked-trouser-beige.jpg",
      description: "A refined trouser finish with a clean waistband detail.",
      sizes: SIZE_SET_STANDARD,
      colors: [
        { name: "Beige", hex: "#cdbd9d" },
        { name: "Black", hex: "#1c1b17" }
      ]
    },
    {
      id: "maggi-trouser",
      name: "Maggi Trouser",
      category: "trousers",
      price: 3600,
      salePrice: 2799,
      image: "maggi-trouser-olive.jpg",
      description: "Lightweight and easy-moving — a warm-weather trouser for daily wear.",
      sizes: SIZE_SET_STANDARD,
      colors: [
        { name: "Olive", hex: "#5c5c3f" },
        { name: "Grey", hex: "#8d897c" }
      ]
    },
    {
      id: "korean-trouser",
      name: "Korean Trouser",
      category: "trousers",
      price: 4100,
      salePrice: 3199,
      image: "korean-trouser-black.jpg",
      description: "A slim tapered trouser with a modern ankle break.",
      sizes: SIZE_SET_STANDARD,
      colors: [
        { name: "Black", hex: "#1c1b17" },
        { name: "Stone", hex: "#a7a08c" }
      ]
    },

    // ---------- SHORTS ----------
    {
      id: "cotton-short",
      name: "Cotton Short",
      category: "shorts",
      price: 2200,
      salePrice: 1699,
      image: "cotton-short-navy.jpg",
      description: "A breathable cotton short for warm days — clean pockets, no fuss.",
      sizes: SIZE_SET_STANDARD,
      colors: [
        { name: "Navy", hex: "#28344a" },
        { name: "Grey", hex: "#8d897c" },
        { name: "Black", hex: "#1c1b17" }
      ]
    },
    {
      id: "china-lekra-short",
      name: "China Lekra Short",
      category: "shorts",
      price: 2300,
      salePrice: 1799,
      image: "china-lekra-short-beige.jpg",
      description: "A soft woven short with a touch of stretch for all-day comfort.",
      sizes: SIZE_SET_STANDARD,
      colors: [
        { name: "Beige", hex: "#cdbd9d" },
        { name: "Olive", hex: "#5c5c3f" }
      ]
    },
    {
      id: "jersey-short",
      name: "Jersey Short",
      category: "shorts",
      price: 2100,
      salePrice: 1599,
      image: "jersey-short-black.jpg",
      description: "A jersey short built for lounging or light activity alike.",
      sizes: SIZE_SET_STANDARD,
      colors: [
        { name: "Black", hex: "#1c1b17" },
        { name: "Charcoal", hex: "#333229" }
      ]
    },
    {
      id: "hosiery-casual-shorts",
      name: "Hosiery Casual Shorts",
      category: "shorts",
      price: 1999,
      salePrice: 1499,
      image: "hosiery-casual-shorts-grey.jpg",
      description: "A soft hosiery-knit short for everyday comfort at home or out.",
      sizes: SIZE_SET_STANDARD,
      colors: [
        { name: "Grey", hex: "#8d897c" },
        { name: "Navy", hex: "#28344a" },
        { name: "Black", hex: "#1c1b17" }
      ]
    }
  ];

  const CATEGORY_LABELS = {
    shirts: "Shirts & T-Shirts",
    pants: "Pants",
    trousers: "Trousers",
    shorts: "Shorts"
  };

  /* ============ 3. DOM REFERENCES ============ */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $all = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  const dom = {
    preloader: $("#preloader"),
    header: $("#siteHeader"),
    menuToggle: $("#menuToggle"),
    mobileNav: $("#mobileNav"),
    overlay: $("#overlay"),
    searchToggle: $("#searchToggle"),
    searchBar: $("#searchBar"),
    searchInput: $("#searchInput"),
    searchClose: $("#searchClose"),
    cartToggle: $("#cartToggle"),
    cartCount: $("#cartCount"),
    cartDrawer: $("#cartDrawer"),
    cartClose: $("#cartClose"),
    cartItems: $("#cartItems"),
    cartEmpty: $("#cartEmpty"),
    cartSummary: $("#cartSummary"),
    cartTotalQty: $("#cartTotalQty"),
    cartTotalPrice: $("#cartTotalPrice"),
    featuredGrid: $("#featuredGrid"),
    shirtsGrid: $("#shirtsGrid"),
    pantsGrid: $("#pantsGrid"),
    trousersGrid: $("#trousersGrid"),
    shortsGrid: $("#shortsGrid"),
    emptyState: $("#emptyState"),
    filterBar: $(".filter-bar"),
    modal: $("#productModal"),
    modalClose: $("#modalClose"),
    modalImage: $("#modalImage"),
    modalCategory: $("#modalCategory"),
    modalTitle: $("#modalTitle"),
    modalOldPrice: $("#modalOldPrice"),
    modalSalePrice: $("#modalSalePrice"),
    modalDesc: $("#modalDesc"),
    modalColors: $("#modalColors"),
    modalColorName: $("#modalColorName"),
    modalSizes: $("#modalSizes"),
    modalQtyValue: $("#modalQtyValue"),
    modalQty: $("#modalQty"),
    modalAddToCart: $("#modalAddToCart"),
    modalLike: $("#modalLike"),
    modalDislike: $("#modalDislike"),
    modalLikeCount: $("#modalLikeCount"),
    modalDislikeCount: $("#modalDislikeCount"),
    toast: $("#toast"),
    orderForm: $("#orderForm"),
    orderFormError: $("#orderFormError"),
    contactEmail: $("#contactEmail"),
    contactEmailValue: $("#contactEmailValue"),
    contactPhone: $("#contactPhone"),
    contactPhoneValue: $("#contactPhoneValue"),
    contactWhatsapp: $("#contactWhatsapp"),
    contactWhatsappValue: $("#contactWhatsappValue"),
    contactAddressValue: $("#contactAddressValue"),
    footerEmail: $("#footerEmail"),
    footerPhone: $("#footerPhone"),
    backToTop: $("#backToTop"),
    scrollCue: $("#scrollCue"),
    heroContent: $("#heroContent"),
    hero: $("#hero"),
    year: $("#year")
  };

  /* ============ 4. UTILITIES / ERROR HANDLING ============ */
  function safe(fn, fallback) {
    try { return fn(); } catch (err) {
      console.warn("MEHKA: handled error —", err);
      return typeof fallback === "function" ? fallback(err) : fallback;
    }
  }

  function formatPrice(n) {
    const num = Number(n) || 0;
    return CONFIG.currency + " " + num.toLocaleString("en-PK");
  }

  function findProduct(id) {
    return PRODUCTS.find((p) => p.id === id) || null;
  }

  let toastTimer = null;
  function showToast(message) {
    if (!dom.toast) return;
    dom.toast.textContent = message;
    dom.toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => dom.toast.classList.remove("is-visible"), 2400);
  }

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  /* ============ 13. LOCALSTORAGE (helpers used by cart & reactions) ============ */
  const storage = {
    available: (function () {
      try {
        const t = "__mehka_test__";
        window.localStorage.setItem(t, "1");
        window.localStorage.removeItem(t);
        return true;
      } catch (e) { return false; }
    })(),
    get(key, fallback) {
      if (!storage.available) return fallback;
      return safe(() => {
        const raw = window.localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
      }, fallback);
    },
    set(key, value) {
      if (!storage.available) return false;
      return safe(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
        return true;
      }, false);
    }
  };

  /* ============ STATE ============ */
  const state = {
    cart: storage.get(CONFIG.storageKeys.cart, []), // [{cartId, productId, name, image, color, size, qty, price}]
    reactions: storage.get(CONFIG.storageKeys.reactions, {}), // { productId: { liked:bool, disliked:bool, likes:n, dislikes:n } }
    activeFilter: "all",
    searchTerm: "",
    modalProduct: null,
    modalColor: null,
    modalSize: null,
    modalQty: 1
  };

  function getReaction(productId) {
    if (!state.reactions[productId]) {
      state.reactions[productId] = { liked: false, disliked: false, likes: 0, dislikes: 0 };
    }
    return state.reactions[productId];
  }
  function saveReactions() { storage.set(CONFIG.storageKeys.reactions, state.reactions); }
  function saveCart() { storage.set(CONFIG.storageKeys.cart, state.cart); }

  /* ============ 5. PRODUCT RENDERING ============ */
  function swatchStyle(color) {
    if (color.pattern === "stripe") {
      return `--s1:${color.s1}; --s2:${color.s2};`;
    }
    return `background:${color.hex || "#ccc"};`;
  }
  function swatchClass(color) {
    if (color.pattern === "check") return "swatch swatch--check";
    if (color.pattern === "stripe") return "swatch swatch--stripe";
    return "swatch";
  }

  function buildImagePath(filename) {
    return CONFIG.imageBase + filename;
  }

  function productMediaMarkup(product) {
    const src = buildImagePath(product.image);
    return `
      <img src="${src}" alt="${product.name} — MEHKA GARMENTS" loading="lazy"
           onerror="this.onerror=null; this.style.display='none'; this.parentElement.querySelector('.product-card__placeholder').style.display='flex';">
      <div class="product-card__placeholder" style="display:none;">
        <strong>${product.name}</strong>
        <span>Image coming soon</span>
      </div>
    `;
  }

  function productCardMarkup(product) {
    const reaction = getReaction(product.id);
    const colorsHtml = product.colors.map((c, i) => `
      <button type="button" class="${swatchClass(c)}" style="${swatchStyle(c)}"
        data-color-index="${i}" data-product="${product.id}"
        aria-label="Select colour ${c.name}" title="${c.name}"></button>
    `).join("");

    const sizesHtml = product.sizes.map((s) => `
      <button type="button" class="size-btn" data-size="${s}" data-product="${product.id}">${s}</button>
    `).join("");

    return `
      <article class="product-card" data-id="${product.id}" data-category="${product.category}">
        <div class="product-card__media" data-open-modal="${product.id}">
          ${productMediaMarkup(product)}
          <span class="product-card__tag">${CATEGORY_LABELS[product.category] || product.category}</span>
        </div>
        <div class="product-card__body">
          <p class="product-card__cat">${CATEGORY_LABELS[product.category] || product.category}</p>
          <h3 class="product-card__name">${product.name}</h3>
          <div class="product-card__price">
            <span class="price price--old">${formatPrice(product.price)}</span>
            <span class="price price--sale">${formatPrice(product.salePrice)}</span>
          </div>

          <div class="swatch-row" data-role="colors">${colorsHtml}</div>
          <div class="size-row" data-role="sizes">${sizesHtml}</div>

          <div class="option-block--inline" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.9rem;">
            <div class="qty-control" data-role="qty">
              <button type="button" class="qty-btn" data-qty="dec" aria-label="Decrease quantity">&minus;</button>
              <span class="qty-value">1</span>
              <button type="button" class="qty-btn" data-qty="inc" aria-label="Increase quantity">+</button>
            </div>
            <div class="feedback-row">
              <button type="button" class="feedback-btn" data-like="${product.id}" aria-pressed="${reaction.liked}" aria-label="Like ${product.name}">
                👍<span data-like-count>${reaction.likes}</span>
              </button>
              <button type="button" class="feedback-btn" data-dislike="${product.id}" aria-pressed="${reaction.disliked}" aria-label="Dislike ${product.name}">
                👎<span data-dislike-count>${reaction.dislikes}</span>
              </button>
            </div>
          </div>

          <div class="product-card__footer">
            <button type="button" class="add-to-cart-btn" data-add-to-cart="${product.id}">Add to Cart</button>
          </div>
        </div>
      </article>
    `;
  }

  // per-card ephemeral selection state (color index / size / qty), keyed by product id + grid
  const cardSelection = {};
  function getCardSelection(productId) {
    if (!cardSelection[productId]) {
      cardSelection[productId] = { colorIndex: 0, size: null, qty: 1 };
    }
    return cardSelection[productId];
  }

  function renderGrid(container, products) {
    if (!container) return;
    if (!products.length) {
      container.innerHTML = "";
      return;
    }
    container.innerHTML = products.map(productCardMarkup).join("");
    // default-select first color visually
    products.forEach((p) => {
      const card = container.querySelector(`.product-card[data-id="${p.id}"]`);
      if (!card) return;
      const sel = getCardSelection(p.id);
      const swatches = $all(".swatch", card);
      if (swatches[sel.colorIndex]) swatches[sel.colorIndex].classList.add("is-selected");
    });
    revealObserver.observeAll(container);
    tiltObserver.attach(container);
  }

  function renderAllGrids() {
    safe(() => renderGrid(dom.shirtsGrid, PRODUCTS.filter((p) => p.category === "shirts")));
    safe(() => renderGrid(dom.pantsGrid, PRODUCTS.filter((p) => p.category === "pants")));
    safe(() => renderGrid(dom.trousersGrid, PRODUCTS.filter((p) => p.category === "trousers")));
    safe(() => renderGrid(dom.shortsGrid, PRODUCTS.filter((p) => p.category === "shorts")));
    renderFeatured();
  }

  function renderFeatured() {
    let list = PRODUCTS.slice();
    if (state.activeFilter !== "all") {
      list = list.filter((p) => p.category === state.activeFilter);
    }
    if (state.searchTerm.trim()) {
      const term = state.searchTerm.trim().toLowerCase();
      list = list.filter((p) =>
        p.name.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        (CATEGORY_LABELS[p.category] || "").toLowerCase().includes(term)
      );
    }
    renderGrid(dom.featuredGrid, list);
    if (dom.emptyState) dom.emptyState.hidden = list.length !== 0;
  }

  /* ============ 6. CATEGORY FILTERING ============ */
  function initFilters() {
    if (!dom.filterBar) return;
    dom.filterBar.addEventListener("click", (e) => {
      const chip = e.target.closest(".filter-chip");
      if (!chip) return;
      $all(".filter-chip", dom.filterBar).forEach((c) => {
        c.classList.remove("is-active");
        c.setAttribute("aria-selected", "false");
      });
      chip.classList.add("is-active");
      chip.setAttribute("aria-selected", "true");
      state.activeFilter = chip.dataset.filter;
      renderFeatured();
    });
  }

  /* ============ 7. SEARCH ============ */
  function initSearch() {
    if (!dom.searchToggle) return;
    dom.searchToggle.addEventListener("click", () => {
      const isOpen = dom.searchBar.classList.toggle("is-open");
      dom.searchToggle.setAttribute("aria-expanded", String(isOpen));
      if (isOpen) dom.searchInput.focus();
    });
    dom.searchClose.addEventListener("click", () => {
      dom.searchBar.classList.remove("is-open");
      dom.searchToggle.setAttribute("aria-expanded", "false");
    });
    dom.searchInput.addEventListener("input", (e) => {
      state.searchTerm = e.target.value;
      renderFeatured();
      if (state.searchTerm.trim()) {
        document.getElementById("shop").scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
      }
    });
  }

  /* ============ 9 & 10. COLOR / SIZE SELECTION (product cards) ============ */
  function initCardInteractions() {
    document.addEventListener("click", (e) => {
      // color swatch
      const swatchBtn = e.target.closest(".swatch");
      if (swatchBtn && swatchBtn.dataset.product) {
        const pid = swatchBtn.dataset.product;
        const card = swatchBtn.closest(".product-card");
        const idx = Number(swatchBtn.dataset.colorIndex);
        const sel = getCardSelection(pid);
        sel.colorIndex = idx;
        $all(".swatch", card).forEach((s) => s.classList.remove("is-selected"));
        swatchBtn.classList.add("is-selected");
        return;
      }

      // size button (card)
      const sizeBtn = e.target.closest(".product-card .size-btn");
      if (sizeBtn) {
        const pid = sizeBtn.dataset.product;
        const card = sizeBtn.closest(".product-card");
        const sel = getCardSelection(pid);
        sel.size = sizeBtn.dataset.size;
        $all(".size-btn", card).forEach((b) => b.classList.remove("is-selected"));
        sizeBtn.classList.add("is-selected");
        return;
      }

      // qty controls (card)
      const qtyBtn = e.target.closest(".product-card .qty-btn");
      if (qtyBtn) {
        const card = qtyBtn.closest(".product-card");
        const pid = card.dataset.id;
        const sel = getCardSelection(pid);
        const dir = qtyBtn.dataset.qty === "inc" ? 1 : -1;
        sel.qty = Math.max(1, Math.min(20, sel.qty + dir));
        const valueEl = card.querySelector(".qty-value");
        valueEl.textContent = sel.qty;
        valueEl.classList.remove("bump");
        void valueEl.offsetWidth;
        valueEl.classList.add("bump");
        return;
      }

      // like / dislike (card)
      const likeBtn = e.target.closest("[data-like]");
      if (likeBtn) { handleReaction(likeBtn.dataset.like, "like", likeBtn); return; }
      const dislikeBtn = e.target.closest("[data-dislike]");
      if (dislikeBtn) { handleReaction(dislikeBtn.dataset.dislike, "dislike", dislikeBtn); return; }

      // add to cart (card)
      const addBtn = e.target.closest("[data-add-to-cart]");
      if (addBtn) { handleAddToCartFromCard(addBtn); return; }

      // open modal
      const mediaTrigger = e.target.closest("[data-open-modal]");
      if (mediaTrigger) { openProductModal(mediaTrigger.dataset.openModal); return; }
    });
  }

  function handleAddToCartFromCard(btn) {
    const pid = btn.dataset.addToCart;
    const product = findProduct(pid);
    if (!product) return;
    const card = btn.closest(".product-card");
    const sel = getCardSelection(pid);
    const size = sel.size || product.sizes[0];
    const color = product.colors[sel.colorIndex] || product.colors[0];

    addToCart(product, color, size, sel.qty || 1);
    flyToCart(card.querySelector(".product-card__media img") || card.querySelector(".product-card__media"));

    btn.classList.add("is-added");
    const originalText = btn.textContent;
    btn.textContent = "Added ✓";
    setTimeout(() => { btn.classList.remove("is-added"); btn.textContent = originalText; }, 1100);
  }

  /* ============ 14. LIKE / DISLIKE ============ */
  function handleReaction(productId, type, btnEl) {
    const reaction = getReaction(productId);
    if (type === "like") {
      if (reaction.liked) {
        reaction.liked = false; reaction.likes = Math.max(0, reaction.likes - 1);
      } else {
        reaction.liked = true; reaction.likes += 1;
        if (reaction.disliked) { reaction.disliked = false; reaction.dislikes = Math.max(0, reaction.dislikes - 1); }
      }
    } else {
      if (reaction.disliked) {
        reaction.disliked = false; reaction.dislikes = Math.max(0, reaction.dislikes - 1);
      } else {
        reaction.disliked = true; reaction.dislikes += 1;
        if (reaction.liked) { reaction.liked = false; reaction.likes = Math.max(0, reaction.likes - 1); }
      }
    }
    saveReactions();
    syncReactionUI(productId);
    btnEl.classList.remove("pop");
    void btnEl.offsetWidth;
    btnEl.classList.add("pop");
  }

  function syncReactionUI(productId) {
    const reaction = getReaction(productId);
    $all(`[data-like="${productId}"]`).forEach((el) => {
      el.setAttribute("aria-pressed", String(reaction.liked));
      const countEl = el.querySelector("[data-like-count]") || el.querySelector("#modalLikeCount");
      if (countEl) countEl.textContent = reaction.likes;
    });
    $all(`[data-dislike="${productId}"]`).forEach((el) => {
      el.setAttribute("aria-pressed", String(reaction.disliked));
      const countEl = el.querySelector("[data-dislike-count]") || el.querySelector("#modalDislikeCount");
      if (countEl) countEl.textContent = reaction.dislikes;
    });
    if (dom.modalLike && dom.modalLike.dataset.product === productId) {
      dom.modalLike.setAttribute("aria-pressed", String(reaction.liked));
      dom.modalDislike.setAttribute("aria-pressed", String(reaction.disliked));
      dom.modalLikeCount.textContent = reaction.likes;
      dom.modalDislikeCount.textContent = reaction.dislikes;
    }
  }

  /* ============ 8. PRODUCT MODAL ============ */
  function openProductModal(productId) {
    const product = findProduct(productId);
    if (!product) return;
    state.modalProduct = product;
    const cardSel = getCardSelection(productId);
    state.modalColor = cardSel.colorIndex || 0;
    state.modalSize = cardSel.size || null;
    state.modalQty = 1;

    dom.modalImage.src = buildImagePath(product.image);
    dom.modalImage.alt = product.name + " — MEHKA GARMENTS";
    dom.modalImage.onerror = function () {
      this.onerror = null;
      this.src = "data:image/svg+xml;utf8," + encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='700'><rect width='100%' height='100%' fill='#efe9dc'/><text x='50%' y='50%' font-family='sans-serif' font-size='28' fill='#75705f' text-anchor='middle'>${product.name}</text></svg>`
      );
    };
    dom.modalCategory.textContent = CATEGORY_LABELS[product.category] || product.category;
    dom.modalTitle.textContent = product.name;
    dom.modalOldPrice.textContent = formatPrice(product.price);
    dom.modalSalePrice.textContent = formatPrice(product.salePrice);
    dom.modalDesc.textContent = product.description;

    dom.modalColors.innerHTML = product.colors.map((c, i) => `
      <button type="button" class="${swatchClass(c)}" style="${swatchStyle(c)}"
        data-modal-color-index="${i}" aria-label="Select colour ${c.name}" title="${c.name}"></button>
    `).join("");
    dom.modalSizes.innerHTML = product.sizes.map((s) => `
      <button type="button" class="size-btn" data-modal-size="${s}">${s}</button>
    `).join("");

    updateModalColorSelection();
    updateModalSizeSelection();
    dom.modalQtyValue.textContent = state.modalQty;

    dom.modalLike.dataset.product = product.id;
    dom.modalDislike.dataset.product = product.id;
    syncReactionUI(product.id);

    dom.modal.hidden = false;
    requestAnimationFrame(() => dom.modal.classList.add("is-open"));
    document.body.style.overflow = "hidden";
  }

  function updateModalColorSelection() {
    const product = state.modalProduct;
    if (!product) return;
    $all(".swatch", dom.modalColors).forEach((s, i) => s.classList.toggle("is-selected", i === state.modalColor));
    const color = product.colors[state.modalColor];
    dom.modalColorName.textContent = color ? color.name : "";
  }
  function updateModalSizeSelection() {
    $all(".size-btn", dom.modalSizes).forEach((b) => b.classList.toggle("is-selected", b.dataset.modalSize === state.modalSize));
  }

  function closeProductModal() {
    dom.modal.classList.remove("is-open");
    document.body.style.overflow = "";
    setTimeout(() => { dom.modal.hidden = true; }, 400);
  }

  function initModal() {
    dom.modalClose.addEventListener("click", closeProductModal);
    dom.modal.addEventListener("click", (e) => { if (e.target === dom.modal) closeProductModal(); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !dom.modal.hidden) closeProductModal();
      if (e.key === "Escape" && dom.cartDrawer.classList.contains("is-open")) closeCart();
    });

    dom.modalColors.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-modal-color-index]");
      if (!btn) return;
      state.modalColor = Number(btn.dataset.modalColorIndex);
      updateModalColorSelection();
    });

    dom.modalSizes.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-modal-size]");
      if (!btn) return;
      state.modalSize = btn.dataset.modalSize;
      updateModalSizeSelection();
    });

    dom.modalQty.addEventListener("click", (e) => {
      const btn = e.target.closest(".qty-btn");
      if (!btn) return;
      const dir = btn.dataset.qty === "inc" ? 1 : -1;
      state.modalQty = Math.max(1, Math.min(20, state.modalQty + dir));
      dom.modalQtyValue.textContent = state.modalQty;
      dom.modalQtyValue.classList.remove("bump");
      void dom.modalQtyValue.offsetWidth;
      dom.modalQtyValue.classList.add("bump");
    });

    dom.modalAddToCart.addEventListener("click", () => {
      const product = state.modalProduct;
      if (!product) return;
      const size = state.modalSize || product.sizes[0];
      const color = product.colors[state.modalColor] || product.colors[0];
      addToCart(product, color, size, state.modalQty);
      flyToCart(dom.modalImage);
      dom.modalAddToCart.textContent = "Added ✓";
      dom.modalAddToCart.classList.add("is-added");
      setTimeout(() => {
        dom.modalAddToCart.textContent = "Add to Cart";
        dom.modalAddToCart.classList.remove("is-added");
        closeProductModal();
      }, 700);
    });

    dom.modalLike.addEventListener("click", () => handleReaction(dom.modalLike.dataset.product, "like", dom.modalLike));
    dom.modalDislike.addEventListener("click", () => handleReaction(dom.modalDislike.dataset.product, "dislike", dom.modalDislike));
  }

  /* ============ 12. CART ============ */
  function cartVariantId(productId, colorName, size) {
    return `${productId}__${colorName}__${size}`;
  }

  function addToCart(product, color, size, qty) {
    if (!product || !color || !size) return;
    qty = Math.max(1, Math.min(50, Number(qty) || 1));
    const cartId = cartVariantId(product.id, color.name, size);
    const existing = state.cart.find((item) => item.cartId === cartId);
    if (existing) {
      existing.qty = Math.min(50, existing.qty + qty);
    } else {
      state.cart.push({
        cartId,
        productId: product.id,
        name: product.name,
        image: product.image,
        color: color.name,
        size,
        qty,
        price: product.salePrice
      });
    }
    saveCart();
    renderCart();
    bumpCartIcon();
    showToast(`${qty} × ${product.name} added to cart`);
  }

  function updateCartQty(cartId, dir) {
    const item = state.cart.find((i) => i.cartId === cartId);
    if (!item) return;
    item.qty += dir;
    if (item.qty <= 0) {
      removeCartItem(cartId);
      return;
    }
    saveCart();
    renderCart();
  }

  function removeCartItem(cartId) {
    const el = dom.cartItems.querySelector(`[data-cart-id="${CSS.escape(cartId)}"]`);
    const finish = () => {
      state.cart = state.cart.filter((i) => i.cartId !== cartId);
      saveCart();
      renderCart();
    };
    if (el && !prefersReducedMotion()) {
      el.classList.add("is-removing");
      setTimeout(finish, 280);
    } else {
      finish();
    }
  }

  function cartTotals() {
    const totalQty = state.cart.reduce((sum, i) => sum + i.qty, 0);
    const totalPrice = state.cart.reduce((sum, i) => sum + i.qty * i.price, 0);
    return { totalQty, totalPrice };
  }

  function cartItemMarkup(item) {
    return `
      <div class="cart-item" data-cart-id="${item.cartId}">
        <div class="cart-item__media">
          <img src="${buildImagePath(item.image)}" alt="${item.name}"
               onerror="this.onerror=null; this.style.background='linear-gradient(135deg,#efe9dc,#e2d9c4)'; this.style.opacity='.6'; this.src='';">
        </div>
        <div class="cart-item__info">
          <p class="cart-item__name">${item.name}</p>
          <p class="cart-item__meta">${item.color} · Size ${item.size}</p>
          <div class="cart-item__row">
            <div class="qty-control" data-cart-qty="${item.cartId}">
              <button type="button" class="qty-btn" data-cart-dir="-1" aria-label="Decrease quantity">&minus;</button>
              <span class="qty-value">${item.qty}</span>
              <button type="button" class="qty-btn" data-cart-dir="1" aria-label="Increase quantity">+</button>
            </div>
            <button type="button" class="cart-item__remove" data-cart-remove="${item.cartId}">Remove</button>
          </div>
        </div>
        <div class="cart-item__price">${formatPrice(item.price * item.qty)}</div>
      </div>
    `;
  }

  function renderCart() {
    const { totalQty, totalPrice } = cartTotals();
    dom.cartCount.textContent = totalQty;
    dom.cartCount.classList.toggle("is-visible", totalQty > 0);

    if (!state.cart.length) {
      dom.cartItems.innerHTML = "";
      dom.cartEmpty.style.display = "block";
      dom.cartSummary.style.display = "none";
      return;
    }
    dom.cartEmpty.style.display = "none";
    dom.cartSummary.style.display = "block";
    dom.cartItems.innerHTML = state.cart.map(cartItemMarkup).join("");
    dom.cartTotalQty.textContent = totalQty;
    dom.cartTotalPrice.textContent = formatPrice(totalPrice);
  }

  function bumpCartIcon() {
    dom.cartCount.classList.remove("bump");
    void dom.cartCount.offsetWidth;
    dom.cartCount.classList.add("bump");
    dom.cartToggle.style.transform = "translateY(-3px) scale(1.08)";
    setTimeout(() => { dom.cartToggle.style.transform = ""; }, 220);
  }

  function openCart() {
    dom.cartDrawer.hidden = false;
    requestAnimationFrame(() => dom.cartDrawer.classList.add("is-open"));
    dom.cartToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  function closeCart() {
    dom.cartDrawer.classList.remove("is-open");
    dom.cartToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    setTimeout(() => { dom.cartDrawer.hidden = true; }, 500);
  }

  function initCart() {
    dom.cartToggle.addEventListener("click", openCart);
    dom.cartClose.addEventListener("click", closeCart);
    dom.cartDrawer.addEventListener("click", (e) => { if (e.target === dom.cartDrawer) closeCart(); });

    dom.cartItems.addEventListener("click", (e) => {
      const qtyBtn = e.target.closest("[data-cart-dir]");
      if (qtyBtn) {
        const control = qtyBtn.closest("[data-cart-qty]");
        updateCartQty(control.dataset.cartQty, Number(qtyBtn.dataset.cartDir));
        return;
      }
      const removeBtn = e.target.closest("[data-cart-remove]");
      if (removeBtn) { removeCartItem(removeBtn.dataset.cartRemove); return; }
    });

    renderCart();
  }

  function flyToCart(sourceEl) {
    if (!sourceEl || prefersReducedMotion()) { return; }
    const cartRect = dom.cartToggle.getBoundingClientRect();
    const startRect = sourceEl.getBoundingClientRect();
    const ghost = document.createElement("div");
    ghost.className = "fly-ghost";
    const bg = sourceEl.tagName === "IMG" ? sourceEl.src : "";
    ghost.style.backgroundColor = "#e2d9c4";
    if (bg) ghost.style.backgroundImage = `url(${bg})`;
    ghost.style.left = startRect.left + "px";
    ghost.style.top = startRect.top + "px";
    ghost.style.width = Math.min(80, startRect.width) + "px";
    ghost.style.height = Math.min(80, startRect.height) + "px";
    document.body.appendChild(ghost);
    requestAnimationFrame(() => {
      ghost.style.left = cartRect.left + cartRect.width / 2 - 10 + "px";
      ghost.style.top = cartRect.top + cartRect.height / 2 - 10 + "px";
      ghost.style.width = "20px";
      ghost.style.height = "20px";
      ghost.style.opacity = "0.15";
      ghost.style.borderRadius = "50%";
    });
    setTimeout(() => ghost.remove(), 750);
  }

  /* ============ 15. NAVIGATION ============ */
  function initNavigation() {
    const heroHeight = () => (dom.hero ? dom.hero.offsetHeight : 0);

    function updateHeaderState() {
      const scrolled = window.scrollY > 30;
      dom.header.classList.toggle("is-scrolled", scrolled);
      dom.header.classList.toggle("is-hero-dark", !scrolled && window.scrollY < heroHeight() - 90);
    }
    updateHeaderState();
    window.addEventListener("scroll", () => safe(updateHeaderState), { passive: true });

    // mobile menu
    function openMobileNav() {
      dom.mobileNav.classList.add("is-open");
      dom.overlay.classList.add("is-visible");
      dom.menuToggle.classList.add("is-open");
      dom.menuToggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }
    function closeMobileNav() {
      dom.mobileNav.classList.remove("is-open");
      dom.overlay.classList.remove("is-visible");
      dom.menuToggle.classList.remove("is-open");
      dom.menuToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
    dom.menuToggle.addEventListener("click", () => {
      dom.mobileNav.classList.contains("is-open") ? closeMobileNav() : openMobileNav();
    });
    dom.overlay.addEventListener("click", closeMobileNav);

    // smooth scroll + active link + close mobile menu after nav
    $all("[data-scroll], [data-nav]").forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (!href || href.charAt(0) !== "#") return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
        closeMobileNav();
      });
    });

    if (dom.scrollCue) {
      dom.scrollCue.addEventListener("click", () => {
        document.getElementById("shop").scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
      });
    }

    // active section highlighting
    const sections = ["hero", "shop", "shirts", "pants", "trousers", "shorts", "contact"]
      .map((id) => document.getElementById(id)).filter(Boolean);
    const navLinks = $all(".nav-link");
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((l) => l.classList.remove("is-active"));
        const match = navLinks.find((l) => l.getAttribute("href") === "#" + entry.target.id);
        if (match) match.classList.add("is-active");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => sectionObserver.observe(s));

    // back to top
    dom.backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    });
  }

  /* ============ 16. SCROLL ANIMATIONS ============ */
  const revealObserver = {
    io: null,
    init() {
      this.io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            this.io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
    },
    observeAll(root) {
      $all(".product-card", root).forEach((el) => this.io.observe(el));
    }
  };

  function initGenericReveal() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.15 });
    $all(".brand-section, .contact-grid, .section__head").forEach((el) => {
      el.setAttribute("data-reveal-block", "");
      io.observe(el);
    });
  }

  /* ============ 18. 3D CARD TILT ============ */
  const tiltObserver = {
    attached: new WeakSet(),
    attach(root) {
      $all(".product-card", root).forEach((card) => {
        if (this.attached.has(card) || prefersReducedMotion()) return;
        this.attached.add(card);
        let raf = null;
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          if (raf) cancelAnimationFrame(raf);
          raf = requestAnimationFrame(() => {
            card.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateY(-4px)`;
          });
        });
        card.addEventListener("mouseleave", () => {
          if (raf) cancelAnimationFrame(raf);
          card.style.transform = "";
        });
      });
    }
  };

  /* ============ 17. HERO BEHAVIOUR / PARALLAX ============ */
  function initHero() {
    const video = document.getElementById("heroVideo");
    if (video) {
      video.addEventListener("error", () => { video.style.display = "none"; }, true);
    }

    if (prefersReducedMotion() || window.matchMedia("(pointer: coarse)").matches) return;

    let raf = null;
    dom.hero.addEventListener("mousemove", (e) => {
      const rect = dom.hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        dom.heroContent.style.transform = `rotateX(${(-y * 3).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg)`;
      });
    });
    dom.hero.addEventListener("mouseleave", () => {
      if (raf) cancelAnimationFrame(raf);
      dom.heroContent.style.transform = "";
    });
  }

  /* ============ 19. CONTACT / WHATSAPP ORDER GENERATION ============ */
  function applyContactConfig() {
    dom.contactEmailValue.textContent = CONFIG.contact.email;
    dom.contactEmail.href = "mailto:" + CONFIG.contact.email;
    dom.contactPhoneValue.textContent = CONFIG.contact.phone;
    dom.contactPhone.href = "tel:" + CONFIG.contact.phone.replace(/\s+/g, "");
    dom.contactWhatsappValue.textContent = CONFIG.contact.whatsappNumber;
    dom.contactWhatsapp.href = "https://wa.me/" + CONFIG.contact.whatsappNumber.replace(/\D/g, "");
    dom.contactAddressValue.textContent = CONFIG.contact.address;
    dom.footerEmail.textContent = CONFIG.contact.email;
    dom.footerPhone.textContent = CONFIG.contact.phone;
  }

  function generateWhatsAppOrder(customer) {
    const lines = [];
    lines.push("MEHKA GARMENTS ORDER");
    lines.push("");
    state.cart.forEach((item) => {
      lines.push("Product:");
      lines.push(item.name);
      lines.push("");
      lines.push("Color:");
      lines.push(item.color);
      lines.push("");
      lines.push("Size:");
      lines.push(item.size);
      lines.push("");
      lines.push("Quantity:");
      lines.push(String(item.qty));
      lines.push("");
      lines.push("Price:");
      lines.push(formatPrice(item.price * item.qty));
      lines.push("");
      lines.push("---");
      lines.push("");
    });
    const { totalPrice } = cartTotals();
    lines.push("Total:");
    lines.push(formatPrice(totalPrice));
    lines.push("");
    lines.push("Customer Name:");
    lines.push(customer.name || "-");
    lines.push("");
    lines.push("Phone:");
    lines.push(customer.phone || "-");
    lines.push("");
    lines.push("Address:");
    lines.push(customer.address || "-");
    if (customer.notes) {
      lines.push("");
      lines.push("Notes:");
      lines.push(customer.notes);
    }
    return lines.join("\n");
  }

  function initOrderForm() {
    dom.orderForm.addEventListener("submit", (e) => {
      e.preventDefault();
      dom.orderFormError.hidden = true;

      if (!state.cart.length) {
        dom.orderFormError.textContent = "Your cart is empty — add a product before placing an order.";
        dom.orderFormError.hidden = false;
        return;
      }

      const data = new FormData(dom.orderForm);
      const customer = {
        name: (data.get("name") || "").toString().trim(),
        phone: (data.get("phone") || "").toString().trim(),
        address: (data.get("address") || "").toString().trim(),
        notes: (data.get("notes") || "").toString().trim()
      };

      if (!customer.name || !customer.phone || !customer.address) {
        dom.orderFormError.textContent = "Please fill in your name, phone number and address.";
        dom.orderFormError.hidden = false;
        return;
      }

      const message = generateWhatsAppOrder(customer);
      const number = CONFIG.contact.whatsappNumber.replace(/\D/g, "");
      const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank", "noopener");
      showToast("Order ready — continue on WhatsApp to confirm.");
    });
  }

  /* ============ 20. INITIALIZATION ============ */
  function hidePreloader() {
    if (!dom.preloader) return;
    dom.preloader.classList.add("is-hidden");
    setTimeout(() => { dom.preloader.setAttribute("aria-hidden", "true"); dom.preloader.style.display = "none"; }, 700);
  }

  function init() {
    safe(() => { if (dom.year) dom.year.textContent = new Date().getFullYear(); });
    safe(applyContactConfig);
    safe(renderAllGrids);
    safe(renderCart);
    safe(initFilters);
    safe(initSearch);
    safe(initCardInteractions);
    safe(initModal);
    safe(initCart);
    safe(initNavigation);
    safe(initHero);
    safe(initOrderForm);
    revealObserver.init();
    safe(initGenericReveal);

    const minDelay = new Promise((res) => setTimeout(res, 900));
    const loaded = new Promise((res) => {
      if (document.readyState === "complete") res();
      else window.addEventListener("load", res, { once: true });
    });
    Promise.all([minDelay, loaded]).then(hidePreloader).catch(hidePreloader);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
