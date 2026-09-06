document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MEHKA GARMENTS
     FINAL WEBSITE SCRIPT
  ========================= */

  const $ = (id) => document.getElementById(id);

  /* YEAR */
  if ($("year")) {
    $("year").textContent = new Date().getFullYear();
  }

  /* =========================
     PRODUCTS — 18 TOTAL
  ========================= */

  const products = [

    /* ---------- SHIRTS ---------- */

    {
      category: "shirts",
      name: "Signature Formal Shirt",
      tag: "FORMAL SHIRT",
      price: 3200,
      oldPrice: 3500,
      colors: [
        ["Black", "assets/images/signature-formal-shirt-black.jpg"],
        ["Olive", "assets/images/signature-formal-shirt-olive.jpg"],
        ["Sky Blue", "assets/images/signature-formal-shirt-sky-blue.jpg"],
        ["White", "assets/images/signature-formal-shirt-white.jpg"]
      ]
    },

    {
      category: "shirts",
      name: "Premium Check Shirt",
      tag: "CHECK SHIRT",
      price: 3300,
      oldPrice: 3600,
      colors: [
        ["Black Ivory", "assets/images/premium-check-shirt-black-ivory-stripe.jpg"],
        ["Ivory Sand", "assets/images/premium-check-shirt-ivory-sand.jpg"],
        ["Midnight Navy", "assets/images/premium-check-shirt-midnight-navy.jpg"],
        ["Navy Burgundy", "assets/images/premium-check-shirt-navy-burgundy.jpg"],
        ["Slate Blue", "assets/images/premium-check-shirt-slate-blue.jpg"]
      ]
    },

    {
      category: "shirts",
      name: "Essential Contrast Polo",
      tag: "PREMIUM POLO",
      price: 2800,
      oldPrice: 3100,
      colors: [
        ["Jet Black", "assets/images/simple-polo-jet-black.jpg"],
        ["Forest Green", "assets/images/simple-polo-deep-forest-green.jpg"],
        ["Ocean Teal", "assets/images/simple-polo-ocean-teal-blue.jpg"],
        ["Mocha Brown", "assets/images/simple-polo-rich-mocha-brown.jpg"],
        ["Burgundy Wine", "assets/images/simple-polo-burgendy-wine.jpg"]
      ]
    },

    {
      category: "shirts",
      name: "Executive Stripe Polo",
      tag: "STRIPE POLO",
      price: 2900,
      oldPrice: 3200,
      colors: [
        ["Executive Stripe", "assets/images/executive-stripe-polo.jpg"],
        ["Heritage Stripe", "assets/images/heritage-stripe-polo.jpg"],
        ["Signature Stripe", "assets/images/signature-stripe-polo.jpg"],
        ["Urban Luxe Stripe", "assets/images/urban-luxe-stripe-polo.jpg"]
      ]
    },

    {
      category: "shirts",
      name: "Essential Collar T-Shirt",
      tag: "COLLAR T-SHIRT",
      price: 2500,
      oldPrice: 2800,
      colors: [
        ["Mocha Brown", "assets/images/essential-collar-tshirt-mocha-brown.jpg"],
        ["Sage Green", "assets/images/essential-collar-tshirt-sage-green.jpg"],
        ["Navy Blue", "assets/images/essential-collar-tshirt-navy-blue.jpg"],
        ["White", "assets/images/essential-collar-tshirt-white.jpg"],
        ["Black", "assets/images/essential-collar-tshirt-black.jpg"]
      ]
    },

    /* ---------- PANTS ---------- */

    {
      category: "pants",
      name: "Premium Cotton Pant",
      tag: "COTTON PANT",
      price: 3200,
      oldPrice: 3500,
      colors: [
        ["Jet Black", "assets/images/jet-black-essential.jpg"],
        ["Olive Green", "assets/images/olive-green-essential.jpg"],
        ["Silver Grey", "assets/images/silver-grey-essential.jpg"]
      ]
    },

    {
      category: "pants",
      name: "Formal Washing Wear",
      tag: "FORMAL WASHING WEAR",
      price: 3400,
      oldPrice: 3700,
      colors: [
        ["Dark Grey", "assets/images/premium-brushed-denim-dark-grey.jpg"],
        ["Grey", "assets/images/premium-brushed-denim-grey.jpg"],
        ["Jet Black", "assets/images/jet-black-essential.jpg"]
      ]
    },

    {
      category: "pants",
      name: "Premium Denim",
      tag: "SIMPLE DENIM",
      price: 3500,
      oldPrice: 3900,
      colors: [
        ["Classic Blue", "assets/images/premium-brushed-denim-blue.jpg"],
        ["Dark Blue", "assets/images/premium-brushed-denim-dark-blue.jpg"],
        ["Light Blue", "assets/images/premium-brushed-denim-light-blue.jpg"]
      ]
    },

    {
      category: "pants",
      name: "Premium Brushed Denim",
      tag: "PREMIUM DENIM",
      price: 3200,
      oldPrice: 3500,
      colors: [
        ["Blue", "assets/images/premium-brushed-denim-blue.jpg"],
        ["Dark Blue", "assets/images/premium-brushed-denim-dark-blue.jpg"],
        ["Dark Grey", "assets/images/premium-brushed-denim-dark-grey.jpg"],
        ["Grey", "assets/images/premium-brushed-denim-grey.jpg"],
        ["Light Blue", "assets/images/premium-brushed-denim-light-blue.jpg"]
      ]
    },

    {
      category: "pants",
      name: "Straight Fit Denim",
      tag: "SIMPLE STRAIGHT DENIM",
      price: 3500,
      oldPrice: 3900,
      colors: [
        ["Blue", "assets/images/premium-brushed-denim-blue.jpg"],
        ["Dark Blue", "assets/images/premium-brushed-denim-dark-blue.jpg"],
        ["Light Blue", "assets/images/premium-brushed-denim-light-blue.jpg"]
      ]
    },

    /* ---------- TROUSERS ---------- */

    {
      category: "trousers",
      name: "Essential Casual Trouser",
      tag: "CASUAL TROUSER",
      price: 3000,
      oldPrice: 3300,
      colors: [
        ["Black", "assets/images/jet-black-essential.jpg"],
        ["Olive", "assets/images/olive-green-essential.jpg"],
        ["Grey", "assets/images/silver-grey-essential.jpg"]
      ]
    },

    {
      category: "trousers",
      name: "China Naked Trouser",
      tag: "CHINA NAKED",
      price: 3100,
      oldPrice: 3400,
      colors: [
        ["Blue", "assets/images/premium-brushed-denim-blue.jpg"],
        ["Black", "assets/images/jet-black-essential.jpg"],
        ["Olive", "assets/images/olive-green-essential.jpg"]
      ]
    },

    {
      category: "trousers",
      name: "Premium Maggi Trouser",
      tag: "MAGGI TROUSER",
      price: 3200,
      oldPrice: 3500,
      colors: [
        ["Dark Blue", "assets/images/premium-brushed-denim-dark-blue.jpg"],
        ["Grey", "assets/images/premium-brushed-denim-grey.jpg"],
        ["Olive", "assets/images/olive-green-essential.jpg"]
      ]
    },

    {
      category: "trousers",
      name: "Korean Fit Trouser",
      tag: "KOREAN TROUSER",
      price: 3300,
      oldPrice: 3600,
      colors: [
        ["Black", "assets/images/jet-black-essential.jpg"],
        ["Slate Blue", "assets/images/premium-check-shirt-slate-blue.jpg"],
        ["Olive", "assets/images/olive-green-essential.jpg"]
      ]
    },

    /* ---------- SHORTS ---------- */

    {
      category: "shorts",
      name: "Premium Cotton Short",
      tag: "COTTON SHORT",
      price: 2200,
      oldPrice: 2500,
      colors: [
        ["Black", "assets/images/jet-black-essential.jpg"],
        ["Olive", "assets/images/olive-green-essential.jpg"],
        ["Grey", "assets/images/silver-grey-essential.jpg"]
      ]
    },

    {
      category: "shorts",
      name: "China Lakera Short",
      tag: "CHINA LAKERA",
      price: 2300,
      oldPrice: 2600,
      colors: [
        ["Blue", "assets/images/premium-brushed-denim-blue.jpg"],
        ["Black", "assets/images/jet-black-essential.jpg"],
        ["Olive", "assets/images/olive-green-essential.jpg"]
      ]
    },

    {
      category: "shorts",
      name: "Premium Jersey Short",
      tag: "JERSEY SHORT",
      price: 2100,
      oldPrice: 2400,
      colors: [
        ["Black", "assets/images/simple-polo-jet-black.jpg"],
        ["Forest Green", "assets/images/simple-polo-deep-forest-green.jpg"],
        ["Mocha Brown", "assets/images/simple-polo-rich-mocha-brown.jpg"]
      ]
    },

    {
      category: "shorts",
      name: "Hosiery Casual Short",
      tag: "HOSIERY CASUAL SHORT",
      price: 2000,
      oldPrice: 2300,
      colors: [
        ["Black", "assets/images/jet-black-essential.jpg"],
        ["Olive", "assets/images/olive-green-essential.jpg"],
        ["Burgundy", "assets/images/simple-polo-burgendy-wine.jpg"]
      ]
    }

  ];


  /* =========================
     CART
  ========================= */

  let cart = [];

  function money(value) {
    return Number(value).toLocaleString("en-PK");
  }

  function updateCart() {

    const cartItems = $("cartItems");
    const cartTotal = $("cartTotal");
    const bagCount = $("bagCount");

    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    if (bagCount) {
      bagCount.textContent = totalQty;
    }

    if (cartTotal) {
      cartTotal.textContent = `Rs. ${money(totalPrice)}`;
    }

    if (!cartItems) return;

    if (!cart.length) {
      cartItems.innerHTML = `
        <div class="empty-cart">
          <p>Your bag is empty</p>
        </div>
      `;
      return;
    }

    cartItems.innerHTML = cart.map((item, index) => `
      <div class="cart-item">

        <img
          src="${item.image}"
          alt="${item.name}"
          onerror="this.style.display='none'"
        >

        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>${item.color} · ${item.size}</p>
          <strong>Rs. ${money(item.price)}</strong>

          <div class="cart-controls">
            <button data-cart-minus="${index}">−</button>
            <span>${item.quantity}</span>
            <button data-cart-plus="${index}">+</button>
            <button data-cart-remove="${index}" class="remove-item">
              Remove
            </button>
          </div>
        </div>

      </div>
    `).join("");

    cartItems.querySelectorAll("[data-cart-minus]").forEach(button => {
      button.onclick = () => {
        const i = Number(button.dataset.cartMinus);

        if (cart[i].quantity > 1) {
          cart[i].quantity--;
        } else {
          cart.splice(i, 1);
        }

        updateCart();
      };
    });

    cartItems.querySelectorAll("[data-cart-plus]").forEach(button => {
      button.onclick = () => {
        const i = Number(button.dataset.cartPlus);
        cart[i].quantity++;
        updateCart();
      };
    });

    cartItems.querySelectorAll("[data-cart-remove]").forEach(button => {
      button.onclick = () => {
        cart.splice(Number(button.dataset.cartRemove), 1);
        updateCart();
      };
    });
  }


  /* =========================
     TOAST
  ========================= */

  function showToast(message) {

    const toast = $("toast");

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(window.mehkaToastTimer);

    window.mehkaToastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2200);
  }


  /* =========================
     IMAGE VIEWER
  ========================= */

  function openViewer(image, name) {

    const viewer = $("imageViewer");
    const viewerImage = $("viewerImage");

    if (!viewer || !viewerImage) return;

    viewerImage.src = image;
    viewerImage.alt = name;

    viewer.classList.add("active");
    document.body.classList.add("viewer-open");
  }


  function closeViewer() {

    const viewer = $("imageViewer");

    if (!viewer) return;

    viewer.classList.remove("active");
    document.body.classList.remove("viewer-open");
  }


  /* =========================
     PRODUCT CARD
  ========================= */

  function createProductCard(product) {

    const card = document.createElement("article");

    card.className = "product-card visible";

    let selectedColor = 0;
    let selectedSize = "M";
    let quantity = 1;

    const firstImage =
      product.colors[0] ? product.colors[0][1] : "";

    card.innerHTML = `

      <div class="product-image-wrap">

        <img
          class="product-image"
          src="${firstImage}"
          alt="${product.name}"
          loading="lazy"
        >

        <button
          class="image-view-btn"
          type="button"
          aria-label="View ${product.name}"
        >
          View
        </button>

        <span class="product-tag">
          ${product.tag}
        </span>

      </div>

      <div class="product-info">

        <h3>${product.name}</h3>

        <div class="price-row">
          <span class="price">
            Rs. ${money(product.price)}
          </span>

          <span class="old-price">
            Rs. ${money(product.oldPrice)}
          </span>
        </div>

        <div class="product-option">

          <span class="option-title">Color</span>

          <div class="color-options">
            ${product.colors.map((color, index) => `
              <button
                type="button"
                class="color-option ${index === 0 ? "selected" : ""}"
                data-color="${index}"
                title="${color[0]}"
              >
                <img
                  src="${color[1]}"
                  alt="${color[0]}"
                  loading="lazy"
                >
              </button>
            `).join("")}
          </div>

        </div>

        <div class="product-option">

          <span class="option-title">Size</span>

          <div class="size-options">
            ${["S", "M", "L", "XL"].map(size => `
              <button
                type="button"
                class="size-option ${size === "M" ? "selected" : ""}"
                data-size="${size}"
              >
                ${size}
              </button>
            `).join("")}
          </div>

        </div>

        <div class="product-bottom">

          <div class="quantity-control">

            <button type="button" class="qty-minus">
              −
            </button>

            <span class="qty-value">
              1
            </span>

            <button type="button" class="qty-plus">
              +
            </button>

          </div>

          <button
            type="button"
            class="add-to-bag"
          >
            Add to Bag
          </button>

        </div>

      </div>
    `;


    /* IMAGE */

    const image = card.querySelector(".product-image");

    image.addEventListener("error", () => {
      image.style.opacity = "0.35";
    });


    /* COLOR */

    card.querySelectorAll("[data-color]").forEach(button => {

      button.addEventListener("click", () => {

        selectedColor = Number(button.dataset.color);

        card.querySelectorAll("[data-color]").forEach(btn => {
          btn.classList.remove("selected");
        });

        button.classList.add("selected");

        image.src = product.colors[selectedColor][1];
      });

    });


    /* SIZE */

    card.querySelectorAll("[data-size]").forEach(button => {

      button.addEventListener("click", () => {

        selectedSize = button.dataset.size;

        card.querySelectorAll("[data-size]").forEach(btn => {
          btn.classList.remove("selected");
        });

        button.classList.add("selected");
      });

    });


    /* QUANTITY */

    const qtyValue = card.querySelector(".qty-value");

    card.querySelector(".qty-minus").addEventListener("click", () => {

      if (quantity > 1) {
        quantity--;
        qtyValue.textContent = quantity;
      }

    });


    card.querySelector(".qty-plus").addEventListener("click", () => {

      if (quantity < 20) {
        quantity++;
        qtyValue.textContent = quantity;
      }

    });


    /* VIEW IMAGE */

    card.querySelector(".image-view-btn").addEventListener("click", () => {

      openViewer(
        product.colors[selectedColor][1],
        product.name
      );

    });


    /* ADD TO BAG */

    card.querySelector(".add-to-bag").addEventListener("click", () => {

      const color = product.colors[selectedColor][0];
      const imageSrc = product.colors[selectedColor][1];

      const existing = cart.find(item =>
        item.name === product.name &&
        item.color === color &&
        item.size === selectedSize
      );

      if (existing) {
        existing.quantity += quantity;
      } else {
        cart.push({
          name: product.name,
          price: product.price,
          color,
          size: selectedSize,
          quantity,
          image: imageSrc
        });
      }

      updateCart();

      showToast(`${product.name} added to bag`);

      const drawer = $("cartDrawer");

      if (drawer) {
        drawer.classList.add("active");
      }

    });


    return card;
  }


  /* =========================
     RENDER PRODUCTS
  ========================= */

  function renderProducts() {

    const grids = {
      shirts: $("shirtsGrid"),
      pants: $("pantsGrid"),
      trousers: $("trousersGrid"),
      shorts: $("shortsGrid")
    };

    Object.values(grids).forEach(grid => {
      if (grid) {
        grid.innerHTML = "";
      }
    });

    products.forEach(product => {

      const grid = grids[product.category];

      if (!grid) return;

      try {
        grid.appendChild(createProductCard(product));
      } catch (error) {
        console.error(
          "Product render error:",
          product.name,
          error
        );
      }

    });

    console.log(
      `MEHKA GARMENTS: ${products.length} products rendered.`
    );
  }


  /* =========================
     CART DRAWER
  ========================= */

  const bagButton = $("bagButton");
  const cartDrawer = $("cartDrawer");
  const closeCart = $("closeCart");

  if (bagButton && cartDrawer) {

    bagButton.addEventListener("click", () => {
      cartDrawer.classList.add("active");
    });

  }

  if (closeCart && cartDrawer) {

    closeCart.addEventListener("click", () => {
      cartDrawer.classList.remove("active");
    });

  }


  /* =========================
     CHECKOUT WHATSAPP
  ========================= */

  const checkoutButton = $("checkoutButton");

  if (checkoutButton) {

    checkoutButton.addEventListener("click", () => {

      if (!cart.length) {
        showToast("Your bag is empty");
        return;
      }

      const whatsappNumber = "923000000000";

      let message =
        "Assalam o Alaikum Mehka Garments,%0A%0A" +
        "I want to place an order:%0A%0A";

      cart.forEach((item, index) => {

        message +=
          `${index + 1}. ${item.name}%0A` +
          `Color: ${item.color}%0A` +
          `Size: ${item.size}%0A` +
          `Quantity: ${item.quantity}%0A` +
          `Price: Rs. ${money(item.price * item.quantity)}%0A%0A`;

      });

      const total = cart.reduce(
        (sum, item) =>
          sum + item.price * item.quantity,
        0
      );

      message +=
        `Total: Rs. ${money(total)}%0A%0A` +
        "Please confirm my order.";

      window.open(
        `https://wa.me/${whatsappNumber}?text=${message}`,
        "_blank"
      );

    });

  }


  /* =========================
     IMAGE VIEWER CLOSE
  ========================= */

  const closeViewerButton = $("closeViewer");

  if (closeViewerButton) {
    closeViewerButton.addEventListener(
      "click",
      closeViewer
    );
  }

  const viewer = $("imageViewer");

  if (viewer) {

    viewer.addEventListener("click", event => {

      if (event.target === viewer) {
        closeViewer();
      }

    });

  }


  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
      closeViewer();

      if (cartDrawer) {
        cartDrawer.classList.remove("active");
      }
    }

  });


  /* =========================
     HEADER SCROLL
  ========================= */

  const header = $("siteHeader");

  window.addEventListener(
    "scroll",
    () => {

      if (!header) return;

      if (window.scrollY > 30) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }

    },
    { passive: true }
  );


  /* =========================
     HERO VIDEO
  ========================= */

  const heroVideo = $("heroVideo");

  if (heroVideo) {

    heroVideo.muted = true;

    heroVideo.play().catch(() => {
      console.log("Hero video autoplay waiting for browser.");
    });

  }


  /* =========================
     PAGE LOADER
  ========================= */

  window.addEventListener("load", () => {

    const loader = $("pageLoader");

    if (loader) {
      loader.classList.add("hidden");

      setTimeout(() => {
        loader.style.display = "none";
      }, 700);
    }

  });


  /* =========================
     INITIALIZE
  ========================= */

  renderProducts();
  updateCart();

  console.log(
    "MEHKA GARMENTS — WEBSITE READY"
  );

});
