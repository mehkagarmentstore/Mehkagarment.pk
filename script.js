/* =========================================================
   MEHKA GARMENTS — FINAL PRODUCT SCRIPT
   Images: assets/images/
========================================================= */

const CONFIG = {
  imageBase: "assets/images/",
  heroVideo: "assets/videos/hero_video.mp4",

  contact: {
    email: "EMAIL_HERE",
    phone: "PHONE_HERE",
    whatsapp: "WHATSAPP_NUMBER_HERE",
    address: "SHOP_ADDRESS_HERE"
  }
};

/* =========================================================
   EXACT IMAGE FILES FROM YOUR GITHUB FOLDER
========================================================= */

const IMAGES = {
  formalWhite: "signature-formal-shirt-white.jpg",
  formalBlack: "signature-formal-shirt-black.jpg",
  formalOlive: "signature-formal-shirt-olive.jpg",
  formalSky: "signature-formal-shirt-sky-blue.jpg",

  checkBlack: "premium-check-shirt-black-ivory-stripe.jpg",
  checkIvory: "premium-check-shirt-ivory-sand.jpg",
  checkNavy: "premium-check-shirt-midnight-navy.jpg",
  checkBurgundy: "premium-check-shirt-navy-burgundy.jpg",
  checkSlate: "premium-check-shirt-slate-blue.jpg",

  poloBlack: "simple-polo-jet-black.jpg",
  poloWine: "simple-polo-burgendy-wine.jpg",
  poloGreen: "simple-polo-deep-forest-green.jpg",
  poloTeal: "simple-polo-ocean-teal-blue.jpg",
  poloBrown: "simple-polo-rich-mocha-brown.jpg",

  stripeClassic: "classic-contrast-polo.jpg",
  stripeExecutive: "executive-stripe-polo.jpg",
  stripeHeritage: "heritage-stripe-polo.jpg",
  stripeSignature: "signature-stripe-polo.jpg",
  stripeUrban: "urban-luxe-stripe-polo.jpg",

  tshirtWhite: "essential-collar-tshirt-white.jpg",
  tshirtBlack: "essential-collar-tshirt-black.jpeg",
  tshirtBrown: "essential-collar-tshirt-mocha-brown.jpg",
  tshirtNavy: "essential-collar-tshirt-navy-blue.jpg",
  tshirtGreen: "essential-collar-tshirt-sage-green.jpg",

  denimBlue: "primium-brushed-denim-blue.jpg",
  denimDarkBlue: "primium-brushed-denim-dark-blue.jpg",
  denimDarkGrey: "primium-brushed-denim-dark-grey.jpg",
  denimGrey: "primium-brushed-denim-grey.jpg",
  denimLightBlue: "primium-brushed-denim-light-blue.jpg",

  essentialBlack: "jet-black-essential.jpg",
  essentialOlive: "olive-green-essential.jpg",
  essentialGrey: "poder-light-grey.jpg",
  essentialSilver: "silver-grey-essential.jpg"
};

function image(filename) {
  return CONFIG.imageBase + filename;
}

/* =========================================================
   PRODUCTS
========================================================= */

const PRODUCTS = [

  /* ---------------- SHIRTS ---------------- */

  {
    id: "formal-shirt",
    name: "Simple Formal Shirt",
    category: "shirts",
    label: "Formal Shirt",
    price: 2999,
    salePrice: 2499,
    image: image(IMAGES.formalWhite),
    description: "A clean premium formal shirt designed for a sharp everyday look.",
    colors: [
      { name: "White", image: image(IMAGES.formalWhite) },
      { name: "Black", image: image(IMAGES.formalBlack) },
      { name: "Olive", image: image(IMAGES.formalOlive) },
      { name: "Sky Blue", image: image(IMAGES.formalSky) }
    ]
  },

  {
    id: "check-shirt",
    name: "Simple Check Shirt",
    category: "shirts",
    label: "Check Shirt",
    price: 3199,
    salePrice: 2699,
    image: image(IMAGES.checkBlack),
    description: "Premium checks with a refined modern fit.",
    colors: [
      { name: "Black Ivory", image: image(IMAGES.checkBlack), pattern: "checks" },
      { name: "Ivory Sand", image: image(IMAGES.checkIvory), pattern: "checks" },
      { name: "Midnight Navy", image: image(IMAGES.checkNavy), pattern: "checks" },
      { name: "Navy Burgundy", image: image(IMAGES.checkBurgundy), pattern: "checks" },
      { name: "Slate Blue", image: image(IMAGES.checkSlate), pattern: "checks" }
    ]
  },

  {
    id: "simple-polo",
    name: "Simple Polo",
    category: "shirts",
    label: "Polo",
    price: 2499,
    salePrice: 2199,
    image: image(IMAGES.poloBlack),
    description: "A versatile premium polo made for effortless everyday style.",
    colors: [
      { name: "Jet Black", image: image(IMAGES.poloBlack) },
      { name: "Burgundy Wine", image: image(IMAGES.poloWine) },
      { name: "Deep Forest Green", image: image(IMAGES.poloGreen) },
      { name: "Ocean Teal Blue", image: image(IMAGES.poloTeal) },
      { name: "Rich Mocha Brown", image: image(IMAGES.poloBrown) }
    ]
  },

  {
    id: "stripe-polo",
    name: "Polo Stripe Color",
    category: "shirts",
    label: "Stripe Polo",
    price: 2799,
    salePrice: 2399,
    image: image(IMAGES.stripeClassic),
    description: "Statement stripe polos with a clean premium silhouette.",
    colors: [
      { name: "Classic Contrast", image: image(IMAGES.stripeClassic), pattern: "stripes" },
      { name: "Executive Stripe", image: image(IMAGES.stripeExecutive), pattern: "stripes" },
      { name: "Heritage Stripe", image: image(IMAGES.stripeHeritage), pattern: "stripes" },
      { name: "Signature Stripe", image: image(IMAGES.stripeSignature), pattern: "stripes" },
      { name: "Urban Luxe", image: image(IMAGES.stripeUrban), pattern: "stripes" }
    ]
  },

  {
    id: "collar-tshirt",
    name: "Simple Collar T-Shirt",
    category: "shirts",
    label: "Collar T-Shirt",
    price: 2299,
    salePrice: 1999,
    image: image(IMAGES.tshirtWhite),
    description: "A clean collar T-shirt with a polished casual finish.",
    colors: [
      { name: "White", image: image(IMAGES.tshirtWhite) },
      { name: "Black", image: image(IMAGES.tshirtBlack) },
      { name: "Mocha Brown", image: image(IMAGES.tshirtBrown) },
      { name: "Navy Blue", image: image(IMAGES.tshirtNavy) },
      { name: "Sage Green", image: image(IMAGES.tshirtGreen) }
    ]
  },

  /* ---------------- PANTS ---------------- */

  {
    id: "cotton-pant",
    name: "Cotton Pant",
    category: "pants",
    label: "Cotton Pant",
    price: 2999,
    salePrice: 2499,
    image: image(IMAGES.essentialOlive),
    description: "Comfortable cotton trousers with a clean office-ready silhouette.",
    colors: [
      { name: "Olive", image: image(IMAGES.essentialOlive) },
      { name: "Black", image: image(IMAGES.essentialBlack) },
      { name: "Light Grey", image: image(IMAGES.essentialGrey) },
      { name: "Silver Grey", image: image(IMAGES.essentialSilver) }
    ]
  },

  {
    id: "formal-washing-wear",
    name: "Formal Washing Wear",
    category: "pants",
    label: "Washing Wear",
    price: 3299,
    salePrice: 2799,
    image: image(IMAGES.essentialGrey),
    description: "A refined washing-wear trouser for smart everyday dressing.",
    colors: [
      { name: "Light Grey", image: image(IMAGES.essentialGrey) },
      { name: "Silver Grey", image: image(IMAGES.essentialSilver) },
      { name: "Black", image: image(IMAGES.essentialBlack) }
    ]
  },

  {
    id: "simple-denim",
    name: "Simple Denim",
    category: "pants",
    label: "Denim",
    price: 3499,
    salePrice: 2999,
    image: image(IMAGES.denimBlue),
    description: "Everyday denim with a clean modern fit.",
    colors: [
      { name: "Blue", image: image(IMAGES.denimBlue) },
      { name: "Dark Blue", image: image(IMAGES.denimDarkBlue) },
      { name: "Grey", image: image(IMAGES.denimGrey) }
    ]
  },

  {
    id: "brushed-denim",
    name: "Brushed Denim",
    category: "pants",
    label: "Brushed Denim",
    price: 3699,
    salePrice: 3199,
    image: image(IMAGES.denimBlue),
    description: "Soft brushed denim with a premium everyday finish.",
    colors: [
      { name: "Blue", image: image(IMAGES.denimBlue) },
      { name: "Dark Blue", image: image(IMAGES.denimDarkBlue) },
      { name: "Dark Grey", image: image(IMAGES.denimDarkGrey) },
      { name: "Grey", image: image(IMAGES.denimGrey) },
      { name: "Light Blue", image: image(IMAGES.denimLightBlue) }
    ]
  },

  {
    id: "straight-denim",
    name: "Simple Straight Denim",
    category: "pants",
    label: "Straight Denim",
    price: 3599,
    salePrice: 3099,
    image: image(IMAGES.denimDarkBlue),
    description: "Straight-fit denim built for a timeless everyday look.",
    colors: [
      { name: "Dark Blue", image: image(IMAGES.denimDarkBlue) },
      { name: "Blue", image: image(IMAGES.denimBlue) },
      { name: "Grey", image: image(IMAGES.denimGrey) }
    ]
  },

  /* ---------------- TROUSERS ---------------- */

  {
    id: "casual-trouser",
    name: "Casual Trouser",
    category: "trousers",
    label: "Casual Trouser",
    price: 2999,
    salePrice: 2499,
    image: image(IMAGES.essentialBlack),
    description: "A versatile casual trouser for clean everyday outfits.",
    colors: [
      { name: "Black", image: image(IMAGES.essentialBlack) },
      { name: "Olive", image: image(IMAGES.essentialOlive) },
      { name: "Grey", image: image(IMAGES.essentialGrey) }
    ]
  },

  {
    id: "china-necked-trouser",
    name: "China Necked Trouser",
    category: "trousers",
    label: "China Necked",
    price: 3099,
    salePrice: 2599,
    image: image(IMAGES.essentialOlive),
    description: "A sharp casual silhouette with a modern tapered finish.",
    colors: [
      { name: "Olive", image: image(IMAGES.essentialOlive) },
      { name: "Black", image: image(IMAGES.essentialBlack) },
      { name: "Grey", image: image(IMAGES.essentialGrey) }
    ]
  },

  {
    id: "maggi-trouser",
    name: "Maggi Trouser",
    category: "trousers",
    label: "Maggi Trouser",
    price: 3199,
    salePrice: 2699,
    image: image(IMAGES.essentialGrey),
    description: "Comfort-focused trousers with a clean modern appearance.",
    colors: [
      { name: "Light Grey", image: image(IMAGES.essentialGrey) },
      { name: "Black", image: image(IMAGES.essentialBlack) },
      { name: "Olive", image: image(IMAGES.essentialOlive) }
    ]
  },

  {
    id: "korean-trouser",
    name: "Korean Trouser",
    category: "trousers",
    label: "Korean Trouser",
    price: 3299,
    salePrice: 2799,
    image: image(IMAGES.essentialBlack),
    description: "A contemporary Korean-inspired trouser silhouette.",
    colors: [
      { name: "Black", image: image(IMAGES.essentialBlack) },
      { name: "Olive", image: image(IMAGES.essentialOlive) },
      { name: "Silver Grey", image: image(IMAGES.essentialSilver) }
    ]
  },

  /* ---------------- SHORTS ---------------- */

  {
    id: "cotton-short",
    name: "Cotton Short",
    category: "shorts",
    label: "Cotton Short",
    price: 1999,
    salePrice: 1699,
    image: image(IMAGES.essentialOlive),
    description: "Lightweight cotton shorts for comfortable everyday wear.",
    colors: [
      { name: "Olive", image: image(IMAGES.essentialOlive) },
      { name: "Black", image: image(IMAGES.essentialBlack) },
      { name: "Grey", image: image(IMAGES.essentialGrey) }
    ]
  },

  {
    id: "china-lekra-short",
    name: "China Lekra Short",
    category: "shorts",
    label: "Lekra Short",
    price: 2199,
    salePrice: 1899,
    image: image(IMAGES.essentialBlack),
    description: "Clean casual shorts designed for easy movement.",
    colors: [
      { name: "Black", image: image(IMAGES.essentialBlack) },
      { name: "Olive", image: image(IMAGES.essentialOlive) },
      { name: "Grey", image: image(IMAGES.essentialGrey) }
    ]
  },

  {
    id: "jersey-short",
    name: "Jersey Short",
    category: "shorts",
    label: "Jersey Short",
    price: 2099,
    salePrice: 1799,
    image: image(IMAGES.essentialBlack),
    description: "Relaxed jersey shorts made for casual comfort.",
    colors: [
      { name: "Black", image: image(IMAGES.essentialBlack) },
      { name: "Grey", image: image(IMAGES.essentialGrey) }
    ]
  },

  {
    id: "hosiery-short",
    name: "Hosiery Casual Shorts",
    category: "shorts",
    label: "Hosiery Shorts",
    price: 1899,
    salePrice: 1599,
    image: image(IMAGES.essentialGrey),
    description: "Soft casual hosiery shorts for everyday comfort.",
    colors: [
      { name: "Grey", image: image(IMAGES.essentialGrey) },
      { name: "Black", image: image(IMAGES.essentialBlack) }
    ]
  }

];

/* =========================================================
   STATE
========================================================= */

let cart = JSON.parse(localStorage.getItem("mehkaCart") || "[]");
let currentProduct = null;
let currentColor = 0;
let currentSize = "M";
let currentQty = 1;

const SIZES = ["S", "M", "L", "XL"];

/* =========================================================
   DOM HELPERS
========================================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function money(value) {
  return `Rs. ${Number(value).toLocaleString("en-PK")}`;
}

/* =========================================================
   PRODUCT CARD
========================================================= */

function productCard(product) {

  const firstColor = product.colors?.[0];
  const productImage = firstColor?.image || product.image;

  const swatches = (product.colors || []).map((color, index) => {

    let extraClass = "";

    if (color.pattern === "checks") extraClass = " swatch--checks";
    if (color.pattern === "stripes") extraClass = " swatch--stripes";

    return `
      <button
        type="button"
        class="product-card__swatch${extraClass}${index === 0 ? " is-active" : ""}"
        data-product="${product.id}"
        data-color="${index}"
        title="${color.name}"
        aria-label="${color.name}"
        style="background-image:url('${color.image}')">
      </button>
    `;
  }).join("");

  return `
    <article class="product-card" data-product-id="${product.id}" data-category="${product.category}">

      <div class="product-card__media">

        <button
          type="button"
          class="product-card__image-button"
          data-product-open="${product.id}"
          aria-label="View ${product.name}"
        >
          <img
            class="product-card__image"
            src="${productImage}"
            alt="${product.name}"
            loading="lazy"
            decoding="async"
            onerror="this.classList.add('image-error'); this.parentElement.classList.add('has-image-error');"
          >

          <span class="product-card__image-fallback">
            ${product.name}
          </span>
        </button>

        <span class="product-card__badge">NEW</span>

        <div class="product-card__quick">
          <button type="button" class="product-card__quick-btn" data-product-open="${product.id}">
            View
          </button>
        </div>

      </div>

      <div class="product-card__body">

        <p class="product-card__category">${product.label}</p>

        <h3 class="product-card__title">
          <button type="button" data-product-open="${product.id}">
            ${product.name}
          </button>
        </h3>

        <div class="product-card__price">
          <span class="price price--old">${money(product.price)}</span>
          <span class="price price--sale">${money(product.salePrice)}</span>
        </div>

        <div class="product-card__colors">
          ${swatches}
        </div>

        <div class="product-card__bottom">

          <button
            type="button"
            class="btn btn--dark product-card__add"
            data-add-product="${product.id}"
          >
            Add to Cart
          </button>

          <div class="product-card__feedback">

            <button
              type="button"
              class="feedback-btn"
              data-like-product="${product.id}"
              aria-label="Like ${product.name}"
            >
              👍
            </button>

            <button
              type="button"
              class="feedback-btn"
              data-dislike-product="${product.id}"
              aria-label="Dislike ${product.name}"
            >
              👎
            </button>

          </div>

        </div>

      </div>

    </article>
  `;
}

/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts() {

  const featured = $("#featuredGrid");
  const shirts = $("#shirtsGrid");
  const pants = $("#pantsGrid");
  const trousers = $("#trousersGrid");
  const shorts = $("#shortsGrid");

  if (featured) {
    featured.innerHTML = PRODUCTS.map(productCard).join("");
  }

  if (shirts) {
    shirts.innerHTML = PRODUCTS
      .filter(p => p.category === "shirts")
      .map(productCard)
      .join("");
  }

  if (pants) {
    pants.innerHTML = PRODUCTS
      .filter(p => p.category === "pants")
      .map(productCard)
      .join("");
  }

  if (trousers) {
    trousers.innerHTML = PRODUCTS
      .filter(p => p.category === "trousers")
      .map(productCard)
      .join("");
  }

  if (shorts) {
    shorts.innerHTML = PRODUCTS
      .filter(p => p.category === "shorts")
      .map(productCard)
      .join("");
  }

  initProductImages();
}

/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

function initProductImages() {

  $$(".product-card__image").forEach(img => {

    img.addEventListener("load", () => {
      img.classList.add("image-loaded");
    });

    img.addEventListener("error", () => {
      console.error("MEHKA IMAGE FAILED:", img.src);

      const button = img.closest(".product-card__image-button");

      if (button) {
        button.classList.add("has-image-error");
      }
    });

  });
}

/* =========================================================
   OPEN PRODUCT MODAL
========================================================= */

function openProduct(productId) {

  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) return;

  currentProduct = product;
  currentColor = 0;
  currentSize = "M";
  currentQty = 1;

  const modal = $("#productModal");

  if (!modal) return;

  $("#modalTitle").textContent = product.name;
  $("#modalCategory").textContent = product.label;
  $("#modalDesc").textContent = product.description;

  $("#modalOldPrice").textContent = money(product.price);
  $("#modalSalePrice").textContent = money(product.salePrice);

  updateModalImage();
  renderModalColors();
  renderModalSizes();
  updateModalQty();

  modal.hidden = false;
  document.body.classList.add("modal-open");

  requestAnimationFrame(() => {
    modal.classList.add("is-open");
  });
}

function closeProduct() {

  const modal = $("#productModal");

  if (!modal) return;

  modal.classList.remove("is-open");

  setTimeout(() => {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  }, 250);
}

/* =========================================================
   MODAL IMAGE
========================================================= */

function updateModalImage() {

  if (!currentProduct) return;

  const color = currentProduct.colors?.[currentColor];

  const src = color?.image || currentProduct.image;

  const img = $("#modalImage");

  if (!img) return;

  img.src = src;
  img.alt = `${currentProduct.name} - ${color?.name || ""}`;

  console.log("MEHKA MODAL IMAGE:", src);
}

/* =========================================================
   MODAL COLORS
========================================================= */

function renderModalColors() {

  const container = $("#modalColors");

  if (!container || !currentProduct) return;

  container.innerHTML = currentProduct.colors.map((color, index) => {

    let extraClass = "";

    if (color.pattern === "checks") extraClass = " swatch--checks";
    if (color.pattern === "stripes") extraClass = " swatch--stripes";

    return `
      <button
        type="button"
        class="swatch${extraClass}${index === currentColor ? " is-active" : ""}"
        data-modal-color="${index}"
        title="${color.name}"
        style="background-image:url('${color.image}')">
      </button>
    `;

  }).join("");

  const name = $("#modalColorName");

  if (name) {
    name.textContent =
      currentProduct.colors[currentColor]?.name || "";
  }
}

/* =========================================================
   MODAL SIZES
========================================================= */

function renderModalSizes() {

  const container = $("#modalSizes");

  if (!container) return;

  container.innerHTML = SIZES.map(size => `
    <button
      type="button"
      class="size-btn${size === currentSize ? " is-active" : ""}"
      data-modal-size="${size}"
    >
      ${size}
    </button>
  `).join("");
}

/* =========================================================
   QUANTITY
========================================================= */

function updateModalQty() {

  const value = $("#modalQtyValue");

  if (value) {
    value.textContent = currentQty;
  }
}

/* =========================================================
   CART
========================================================= */

function saveCart() {
  localStorage.setItem("mehkaCart", JSON.stringify(cart));
}

function addToCart(product, colorIndex = 0, size = "M", quantity = 1) {

  const color = product.colors?.[colorIndex];

  const key = `${product.id}-${colorIndex}-${size}`;

  const existing = cart.find(item => item.key === key);

  if (existing) {

    existing.quantity += quantity;

  } else {

    cart.push({
      key,
      id: product.id,
      name: product.name,
      price: product.salePrice,
      image: color?.image || product.image,
      color: color?.name || "Default",
      size,
      quantity
    });

  }

  saveCart();
  renderCart();

  showToast(`${product.name} added to cart`);

  animateCartButton();
}

function removeCartItem(key) {

  cart = cart.filter(item => item.key !== key);

  saveCart();
  renderCart();
}

function changeCartQuantity(key, amount) {

  const item = cart.find(item => item.key === key);

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    removeCartItem(key);
    return;
  }

  saveCart();
  renderCart();
}

function cartTotals() {

  return cart.reduce((total, item) => {

    total.qty += item.quantity;
    total.price += item.price * item.quantity;

    return total;

  }, {
    qty: 0,
    price: 0
  });
}

/* =========================================================
   RENDER CART
========================================================= */

function renderCart() {

  const container = $("#cartItems");
  const empty = $("#cartEmpty");
  const summary = $("#cartSummary");

  const count = $("#cartCount");
  const totalQty = $("#cartTotalQty");
  const totalPrice = $("#cartTotalPrice");

  if (!container) return;

  if (!cart.length) {

    container.innerHTML = "";

    if (empty) empty.hidden = false;
    if (summary) summary.hidden = true;

  } else {

    if (empty) empty.hidden = true;
    if (summary) summary.hidden = false;

    container.innerHTML = cart.map(item => `
      <div class="cart-item">

        <div class="cart-item__image">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>

        <div class="cart-item__info">

          <strong>${item.name}</strong>

          <span>${item.color} · Size ${item.size}</span>

          <b>${money(item.price)}</b>

          <div class="cart-item__controls">

            <button
              type="button"
              data-cart-dec="${item.key}"
              aria-label="Decrease quantity"
            >
              −
            </button>

            <span>${item.quantity}</span>

            <button
              type="button"
              data-cart-inc="${item.key}"
              aria-label="Increase quantity"
            >
              +
            </button>

            <button
              type="button"
              class="cart-item__remove"
              data-cart-remove="${item.key}"
            >
              Remove
            </button>

          </div>

        </div>

      </div>
    `).join("");
  }

  const totals = cartTotals();

  if (count) count.textContent = totals.qty;
  if (totalQty) totalQty.textContent = totals.qty;
  if (totalPrice) totalPrice.textContent = money(totals.price);
}

/* =========================================================
   FILTER
========================================================= */

function setupFilters() {

  $$(".filter-chip").forEach(button => {

    button.addEventListener("click", () => {

      const filter = button.dataset.filter;

      $$(".filter-chip").forEach(btn => {
        btn.classList.remove("is-active");
        btn.setAttribute("aria-selected", "false");
      });

      button.classList.add("is-active");
      button.setAttribute("aria-selected", "true");

      const grid = $("#featuredGrid");

      if (!grid) return;

      let list = PRODUCTS;

      if (filter !== "all") {
        list = PRODUCTS.filter(p => p.category === filter);
      }

      grid.innerHTML = list.map(productCard).join("");

      initProductImages();
    });
  });
}

/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {

  const input = $("#searchInput");
  const empty = $("#emptyState");

  if (!input) return;

  input.addEventListener("input", () => {

    const query = input.value.trim().toLowerCase();

    const results = PRODUCTS.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.label.toLowerCase().includes(query)
    );

    const grid = $("#featuredGrid");

    if (!grid) return;

    grid.innerHTML = results.map(productCard).join("");

    if (empty) {
      empty.hidden = results.length !== 0;
    }

    initProductImages();
  });
}

/* =========================================================
   MOBILE MENU
========================================================= */

function setupMenu() {

  const toggle = $("#menuToggle");
  const nav = $("#mobileNav");
  const overlay = $("#overlay");

  if (!toggle || !nav) return;

  function closeMenu() {

    nav.classList.remove("is-open");

    if (overlay) overlay.classList.remove("is-visible");

    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", () => {

    const open = nav.classList.toggle("is-open");

    if (overlay) {
      overlay.classList.toggle("is-visible", open);
    }

    toggle.setAttribute("aria-expanded", String(open));
  });

  $$("#mobileNav a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }
}

/* =========================================================
   CART DRAWER
========================================================= */

function openCart() {

  const drawer = $("#cartDrawer");

  if (!drawer) return;

  drawer.hidden = false;

  requestAnimationFrame(() => {
    drawer.classList.add("is-open");
  });

  document.body.classList.add("drawer-open");
}

function closeCart() {

  const drawer = $("#cartDrawer");

  if (!drawer) return;

  drawer.classList.remove("is-open");

  setTimeout(() => {
    drawer.hidden = true;
    document.body.classList.remove("drawer-open");
  }, 250);
}

/* =========================================================
   CART BUTTON
========================================================= */

function animateCartButton() {

  const button = $("#cartToggle");

  if (!button) return;

  button.classList.remove("cart-pop");

  requestAnimationFrame(() => {
    button.classList.add("cart-pop");
  });

  setTimeout(() => {
    button.classList.remove("cart-pop");
  }, 500);
}

/* =========================================================
   TOAST
========================================================= */

let toastTimer;

function showToast(message) {

  const toast = $("#toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("is-visible");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

/* =========================================================
   CONTACT
========================================================= */

function setupContact() {

  const email = CONFIG.contact.email;
  const phone = CONFIG.contact.phone;
  const whatsapp = CONFIG.contact.whatsapp;
  const address = CONFIG.contact.address;

  const emailValue = $("#contactEmailValue");
  const phoneValue = $("#contactPhoneValue");
  const whatsappValue = $("#contactWhatsappValue");
  const addressValue = $("#contactAddressValue");

  if (emailValue) emailValue.textContent = email;
  if (phoneValue) phoneValue.textContent = phone;
  if (whatsappValue) whatsappValue.textContent = whatsapp;
  if (addressValue) addressValue.textContent = address;

  const emailLink = $("#contactEmail");

  if (emailLink && email !== "EMAIL_HERE") {
    emailLink.href = `mailto:${email}`;
  }

  const phoneLink = $("#contactPhone");

  if (phoneLink && phone !== "PHONE_HERE") {
    phoneLink.href = `tel:${phone.replace(/\s/g, "")}`;
  }

  const whatsappLink = $("#contactWhatsapp");

  if (whatsappLink && whatsapp !== "WHATSAPP_NUMBER_HERE") {
    whatsappLink.href =
      `https://wa.me/${whatsapp.replace(/\D/g, "")}`;
  }

  const footerEmail = $("#footerEmail");
  const footerPhone = $("#footerPhone");

  if (footerEmail) footerEmail.textContent = email;
  if (footerPhone) footerPhone.textContent = phone;
}

/* =========================================================
   ORDER FORM
========================================================= */

function setupOrderForm() {

  const form = $("#orderForm");

  if (!form) return;

  form.addEventListener("submit", event => {

    event.preventDefault();

    const error = $("#orderFormError");

    if (!cart.length) {

      if (error) {
        error.hidden = false;
        error.textContent =
          "Please add at least one product to your cart first.";
      }

      return;
    }

    const name = $("#custName")?.value.trim();
    const phone = $("#custPhone")?.value.trim();
    const address = $("#custAddress")?.value.trim();
    const notes = $("#custNotes")?.value.trim();

    if (!name || !phone || !address) {

      if (error) {
        error.hidden = false;
        error.textContent =
          "Please complete your name, phone number and delivery address.";
      }

      return;
    }

    if (error) error.hidden = true;

    const items = cart.map(item =>
      `• ${item.name} | ${item.color} | Size ${item.size} | Qty ${item.quantity} | ${money(item.price * item.quantity)}`
    ).join("\n");

    const totals = cartTotals();

    const message =
`MEHKA GARMENTS ORDER

Name: ${name}
Phone: ${phone}
Address: ${address}

ORDER:
${items}

Total Items: ${totals.qty}
Total: ${money(totals.price)}

Notes: ${notes || "None"}`;

    const number = CONFIG.contact.whatsapp.replace(/\D/g, "");

    if (!number) {

      if (error) {
        error.hidden = false;
        error.textContent =
          "Please add your WhatsApp number in CONFIG.contact first.";
      }

      return;
    }

    const url =
      `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  });
}

/* =========================================================
   MODAL EVENTS
========================================================= */

function setupModal() {

  document.addEventListener("click", event => {

    const openButton = event.target.closest("[data-product-open]");

    if (openButton) {

      const id = openButton.dataset.productOpen;

      openProduct(id);

      return;
    }

    const colorButton =
      event.target.closest("[data-modal-color]");

    if (colorButton && currentProduct) {

      currentColor =
        Number(colorButton.dataset.modalColor);

      updateModalImage();
      renderModalColors();

      return;
    }

    const sizeButton =
      event.target.closest("[data-modal-size]");

    if (sizeButton) {

      currentSize = sizeButton.dataset.modalSize;

      renderModalSizes();

      return;
    }

    const qtyButton =
      event.target.closest("[data-qty]");

    if (qtyButton) {

      if (qtyButton.dataset.qty === "inc") {
        currentQty++;
      }

      if (qtyButton.dataset.qty === "dec") {
        currentQty = Math.max(1, currentQty - 1);
      }

      updateModalQty();
    }
  });

  $("#modalClose")?.addEventListener("click", closeProduct);

  $("#productModal")?.addEventListener("click", event => {

    if (event.target === $("#productModal")) {
      closeProduct();
    }
  });

  $("#modalAddToCart")?.addEventListener("click", () => {

    if (!currentProduct) return;

    addToCart(
      currentProduct,
      currentColor,
      currentSize,
      currentQty
    );

    closeProduct();
  });
}

/* =========================================================
   CART EVENTS
========================================================= */

function setupCartEvents() {

  $("#cartToggle")?.addEventListener("click", openCart);

  $("#cartClose")?.addEventListener("click", closeCart);

  document.addEventListener("click", event => {

    const inc = event.target.closest("[data-cart-inc]");

    if (inc) {
      changeCartQuantity(inc.dataset.cartInc, 1);
      return;
    }

    const dec = event.target.closest("[data-cart-dec]");

    if (dec) {
      changeCartQuantity(dec.dataset.cartDec, -1);
      return;
    }

    const remove =
      event.target.closest("[data-cart-remove]");

    if (remove) {
      removeCartItem(remove.dataset.cartRemove);
      return;
    }

    const add =
      event.target.closest("[data-add-product]");

    if (add) {

      const product =
        PRODUCTS.find(p => p.id === add.dataset.addProduct);

      if (product) {
        addToCart(product, 0, "M", 1);
      }
    }
  });

  $("#cartCheckoutBtn")?.addEventListener("click", () => {
    closeCart();
  });
}

/* =========================================================
   PRODUCT SWATCH EVENTS
========================================================= */

function setupProductSwatches() {

  document.addEventListener("click", event => {

    const swatch =
      event.target.closest("[data-product][data-color]");

    if (!swatch) return;

    const productId = swatch.dataset.product;
    const colorIndex = Number(swatch.dataset.color);

    const product =
      PRODUCTS.find(p => p.id === productId);

    if (!product) return;

    const card =
      swatch.closest(".product-card");

    if (!card) return;

    const img =
      card.querySelector(".product-card__image");

    const color =
      product.colors[colorIndex];

    if (img && color?.image) {
      img.src = color.image;
    }

    card
      .querySelectorAll("[data-color]")
      .forEach(btn => btn.classList.remove("is-active"));

    swatch.classList.add("is-active");
  });
}

/* =========================================================
   HERO VIDEO
========================================================= */

function setupHeroVideo() {

  const video = $("#heroVideo");

  if (!video) return;

  video.muted = true;

  const play = () => {
    video.play().catch(() => {});
  };

  play();

  video.addEventListener("canplay", play);
}

/* =========================================================
   PRELOADER
========================================================= */

function setupPreloader() {

  const preloader = $("#preloader");

  if (!preloader) return;

  window.addEventListener("load", () => {

    setTimeout(() => {

      preloader.classList.add("is-loaded");

      setTimeout(() => {
        preloader.remove();
      }, 700);

    }, 400);
  });
}

/* =========================================================
   YEAR
========================================================= */

function setupYear() {

  const year = $("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

/* =========================================================
   BACK TO TOP
========================================================= */

function setupBackToTop() {

  $("#backToTop")?.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });
}

/* =========================================================
   SMOOTH SCROLL
========================================================= */

function setupSmoothScroll() {

  $$("[data-scroll]").forEach(link => {

    link.addEventListener("click", event => {

      const href = link.getAttribute("href");

      if (!href || !href.startsWith("#")) return;

      const target = document.querySelector(href);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });
}

/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    closeProduct();
    closeCart();

  }

});

/* =========================================================
   DEBUG — IMAGE CHECK
========================================================= */

function debugProductImages() {

  console.log(
    "%c MEHKA GARMENTS IMAGE TEST ",
    "background:#171512;color:#fff;padding:8px;font-weight:bold;"
  );

  PRODUCTS.forEach(product => {

    const src =
      product.colors?.[0]?.image || product.image;

    const test = new Image();

    test.onload = () => {
      console.log("✓ MEHKA IMAGE OK:", product.name, src);
    };

    test.onerror = () => {
      console.error("✗ MEHKA IMAGE MISSING:", product.name, src);
    };

    test.src = src;
  });
}

/* =========================================================
   START
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  renderProducts();

  renderCart();

  setupFilters();
  setupSearch();
  setupMenu();
  setupModal();
  setupCartEvents();
  setupProductSwatches();

  setupHeroVideo();
  setupPreloader();

  setupContact();
  setupOrderForm();

  setupYear();
  setupBackToTop();
  setupSmoothScroll();

  debugProductImages();

  console.log(
    "%c MEHKA GARMENTS READY ✓ ",
    "background:#171512;color:white;padding:8px 14px;font-weight:bold;"
  );

});
