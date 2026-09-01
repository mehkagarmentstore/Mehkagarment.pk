/* =========================================================
   MEHKA GARMENTS — FINAL SCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     BASIC
  ======================================================= */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* =======================================================
     PAGE LOADER
  ======================================================= */

  const loader = document.getElementById("pageLoader");

  window.addEventListener("load", () => {

    setTimeout(() => {

      loader?.classList.add("hidden");

    }, 500);

  });


  /* =======================================================
     HEADER
  ======================================================= */

  const header =
    document.getElementById("siteHeader");

  function updateHeader() {

    if (!header) return;

    header.classList.toggle(
      "scrolled",
      window.scrollY > 40
    );

  }

  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );

  updateHeader();


  /* =======================================================
     IMAGE FALLBACK
  ======================================================= */

  function protectImage(image) {

    if (!image) return;

    image.addEventListener(
      "error",
      () => {

        image.classList.add("image-error");

        image.removeAttribute("src");

      }
    );

  }


  /* =======================================================
     PRODUCT DATABASE
  ======================================================= */

  const products = [

    /* =====================================================
       SHIRTS
    ===================================================== */

    {
      category: "shirts",
      name: "Signature Formal Shirt",
      type: "FORMAL SHIRT",
      price: 3200,
      oldPrice: 3500,

      colors: [
        ["Black", "#111111", "assets/images/signature-formal-shirt-black.jpg"],
        ["Olive", "#59634f", "assets/images/signature-formal-shirt-olive.jpg"],
        ["Sky Blue", "#9bb7c9", "assets/images/signature-formal-shirt-sky-blue.jpg"],
        ["White", "#ffffff", "assets/images/signature-formal-shirt-white.jpg"]
      ]
    },


    {
      category: "shirts",
      name: "Premium Check Shirt",
      type: "CHECK SHIRT",
      price: 3300,
      oldPrice: 3600,

      colors: [
        ["Black Ivory", "#222222", "assets/images/premium-check-shirt-black-ivory-stripe.jpg"],
        ["Ivory Sand", "#d8cdbb", "assets/images/premium-check-shirt-ivory-sand.jpg"],
        ["Midnight Navy", "#17263a", "assets/images/premium-check-shirt-midnight-navy.jpg"],
        ["Navy Burgundy", "#303d50", "assets/images/premium-check-shirt-navy-burgundy.jpg"],
        ["Slate Blue", "#617589", "assets/images/premium-check-shirt-slate-blue.jpg"]
      ]
    },


    {
      category: "shirts",
      name: "Essential Contrast Polo",
      type: "PREMIUM POLO",
      price: 2800,
      oldPrice: 3100,

      colors: [
        ["Classic Contrast", "#222222", "assets/images/classic-contrast-polo.jpg"],
        ["Jet Black", "#111111", "assets/images/simple-polo-jet-black.jpg"],
        ["Deep Forest", "#284536", "assets/images/simple-polo-deep-forest-green.jpg"],
        ["Ocean Teal", "#247681", "assets/images/simple-polo-ocean-teal-blue.jpg"],
        ["Rich Mocha", "#654936", "assets/images/simple-polo-rich-mocha-brown.jpg"],
        ["Burgundy Wine", "#6e3037", "assets/images/simple-polo-burgendy-wine.jpg"]
      ]
    },


    {
      category: "shirts",
      name: "Executive Stripe Polo",
      type: "STRIPE POLO",
      price: 2900,
      oldPrice: 3200,

      colors: [
        ["Executive Stripe", "#333333", "assets/images/executive-stripe-polo.jpg"],
        ["Heritage Stripe", "#39485a", "assets/images/heritage-stripe-polo.jpg"],
        ["Signature Stripe", "#454545", "assets/images/signature-stripe-polo.jpg"],
        ["Urban Luxe", "#303030", "assets/images/urban-luxe-stripe-polo.jpg"]
      ]
    },


    {
      category: "shirts",
      name: "Essential Collar T-Shirt",
      type: "COLLAR T-SHIRT",
      price: 2500,
      oldPrice: 2800,

      colors: [
        ["Jet Black", "#111111", "assets/images/jet-black-essential.jpg"],
        ["Olive Green", "#59634f", "assets/images/olive-green-essential.jpg"],
        ["Silver Grey", "#999999", "assets/images/silver-grey-essential.jpg"],
        ["Powder Light Grey", "#c4c4c0", "assets/images/poder-light-grey.jpg"]
      ]
    },


    /* =====================================================
       PANTS
    ===================================================== */

    {
      category: "pants",
      name: "Premium Cotton Pant",
      type: "COTTON PANT",
      price: 3200,
      oldPrice: 3500,

      colors: [
        ["Black", "#111111", "assets/images/jet-black-essential.jpg"],
        ["Olive", "#59634f", "assets/images/olive-green-essential.jpg"],
        ["Grey", "#666666", "assets/images/silver-grey-essential.jpg"]
      ]
    },


    {
      category: "pants",
      name: "Formal Washing Wear",
      type: "FORMAL WASHING WEAR",
      price: 3400,
      oldPrice: 3700,

      colors: [
        ["Dark Grey", "#414141", "assets/images/premium-brushed-denim-dark-grey.jpg"],
        ["Grey", "#666666", "assets/images/premium-brushed-denim-grey.jpg"],
        ["Black", "#111111", "assets/images/jet-black-essential.jpg"]
      ]
    },


    {
      category: "pants",
      name: "Premium Denim",
      type: "SIMPLE DENIM",
      price: 3500,
      oldPrice: 3900,

      colors: [
        ["Blue", "#4f6b83", "assets/images/premium-brushed-denim-blue.jpg"],
        ["Dark Blue", "#29394b", "assets/images/premium-brushed-denim-dark-blue.jpg"],
        ["Light Blue", "#7890a5", "assets/images/premium-brushed-denim-light-blue.jpg"]
      ]
    },


    {
      category: "pants",
      name: "Premium Brushed Denim",
      type: "BRUSHED DENIM",
      price: 3600,
      oldPrice: 4000,

      colors: [
        ["Blue", "#4f6b83", "assets/images/premium-brushed-denim-blue.jpg"],
        ["Dark Grey", "#414141", "assets/images/premium-brushed-denim-dark-grey.jpg"],
        ["Grey", "#666666", "assets/images/premium-brushed-denim-grey.jpg"]
      ]
    },


    {
      category: "pants",
      name: "Straight Fit Denim",
      type: "SIMPLE STRAIGHT DENIM",
      price: 3500,
      oldPrice: 3900,

      colors: [
        ["Dark Blue", "#29394b", "assets/images/premium-brushed-denim-dark-blue.jpg"],
        ["Blue", "#4f6b83", "assets/images/premium-brushed-denim-blue.jpg"],
        ["Light Blue", "#7890a5", "assets/images/premium-brushed-denim-light-blue.jpg"]
      ]
    },


    /* =====================================================
       TROUSERS
    ===================================================== */

    {
      category: "trousers",
      name: "Essential Casual Trouser",
      type: "CASUAL TROUSER",
      price: 3000,
      oldPrice: 3300,

      colors: [
        ["Black", "#111111", "assets/images/jet-black-essential.jpg"],
        ["Olive", "#59634f", "assets/images/olive-green-essential.jpg"],
        ["Grey", "#666666", "assets/images/silver-grey-essential.jpg"]
      ]
    },


    {
      category: "trousers",
      name: "China Naked Trouser",
      type: "CHINA NAKED TROUSER",
      price: 3100,
      oldPrice: 3400,

      colors: [
        ["Charcoal", "#3f3f3f", "assets/images/premium-brushed-denim-dark-grey.jpg"],
        ["Grey", "#666666", "assets/images/premium-brushed-denim-grey.jpg"],
        ["Black", "#111111", "assets/images/jet-black-essential.jpg"]
      ]
    },


    {
      category: "trousers",
      name: "Premium Maggi Trouser",
      type: "MAGGI TROUSER",
      price: 3200,
      oldPrice: 3500,

      colors: [
        ["Dark Grey", "#414141", "assets/images/premium-brushed-denim-dark-grey.jpg"],
        ["Grey", "#666666", "assets/images/premium-brushed-denim-grey.jpg"],
        ["Olive", "#59634f", "assets/images/olive-green-essential.jpg"]
      ]
    },


    {
      category: "trousers",
      name: "Korean Fit Trouser",
      type: "KOREAN TROUSER",
      price: 3300,
      oldPrice: 3600,

      colors: [
        ["Black", "#111111", "assets/images/jet-black-essential.jpg"],
        ["Slate", "#617589", "assets/images/premium-check-shirt-slate-blue.jpg"],
        ["Olive", "#59634f", "assets/images/olive-green-essential.jpg"]
      ]
    },


    /* =====================================================
       SHORTS
    ===================================================== */

    {
      category: "shorts",
      name: "Premium Cotton Short",
      type: "COTTON SHORT",
      price: 2200,
      oldPrice: 2500,

      colors: [
        ["Black", "#111111", "assets/images/jet-black-essential.jpg"],
        ["Olive", "#59634f", "assets/images/olive-green-essential.jpg"],
        ["Grey", "#666666", "assets/images/silver-grey-essential.jpg"]
      ]
    },


    {
      category: "shorts",
      name: "China Lakera Short",
      type: "CHINA LAKERA SHORT",
      price: 2300,
      oldPrice: 2600,

      colors: [
        ["Dark Grey", "#414141", "assets/images/premium-brushed-denim-dark-grey.jpg"],
        ["Black", "#111111", "assets/images/jet-black-essential.jpg"],
        ["Grey", "#666666", "assets/images/premium-brushed-denim-grey.jpg"]
      ]
    },


    {
      category: "shorts",
      name: "Premium Jersey Short",
      type: "JERSEY SHORT",
      price: 2100,
      oldPrice: 2400,

      colors: [
        ["Jet Black", "#111111", "assets/images/jet-black-essential.jpg"],
        ["Forest", "#284536", "assets/images/simple-polo-deep-forest-green.jpg"],
        ["Mocha", "#654936", "assets/images/simple-polo-rich-mocha-brown.jpg"]
      ]
    },


    {
      category: "shorts",
      name: "Hosiery Casual Short",
      type: "HOSIERY CASUAL SHORTS",
      price: 2000,
      oldPrice: 2300,

      colors: [
        ["Black", "#111111", "assets/images/jet-black-essential.jpg"],
        ["Burgundy", "#6e3037", "assets/images/simple-polo-burgendy-wine.jpg"],
        ["Teal", "#247681", "assets/images/simple-polo-ocean-teal-blue.jpg"]
      ]
    }

  ];


  /* =======================================================
     CART
  ======================================================= */

  let cart = [];


  const bagButton =
    document.getElementById("bagButton");

  const bagCount =
    document.getElementById("bagCount");

  const cartDrawer =
    document.getElementById("cartDrawer");

  const closeCart =
    document.getElementById("closeCart");

  const cartItems =
    document.getElementById("cartItems");

  const cartTotal =
    document.getElementById("cartTotal");

  const checkoutButton =
    document.getElementById("checkoutButton");


  function updateCart() {

    const count = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );

    if (bagCount) {
      bagCount.textContent = count;
    }


    if (!cartItems) return;


    if (!cart.length) {

      cartItems.innerHTML =
        "<p>Your bag is empty.</p>";

      if (cartTotal) {
        cartTotal.textContent = "Rs. 0";
      }

      return;
    }


    cartItems.innerHTML = "";


    let total = 0;


    cart.forEach((item, index) => {

      total +=
        item.price *
        item.quantity;


      const row =
        document.createElement("div");

      row.className = "cart-item";


      row.innerHTML = `

        <img
          class="cart-item-image"
          src="${item.image}"
          alt="${item.name}"
        >

        <div class="cart-item-info">

          <h4>
            ${item.name}
          </h4>

          <p>
            Colour: ${item.color}<br>
            Size: ${item.size}<br>
            Quantity: ${item.quantity}
          </p>

          <button
            type="button"
            class="remove-item"
            data-index="${index}"
          >
            Remove
          </button>

        </div>

        <div class="cart-item-price">
          Rs. ${(item.price * item.quantity).toLocaleString()}
        </div>

      `;


      cartItems.appendChild(row);

    });


    if (cartTotal) {

      cartTotal.textContent =
        `Rs. ${total.toLocaleString()}`;

    }


    cartItems
      .querySelectorAll(".remove-item")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            const index =
              Number(button.dataset.index);

            cart.splice(index, 1);

            updateCart();

          }
        );

      });

  }


  function openCart() {

    cartDrawer?.classList.add("open");

    document.body.classList.add("no-scroll");

  }


  function closeCartDrawer() {

    cartDrawer?.classList.remove("open");

    document.body.classList.remove("no-scroll");

  }


  bagButton?.addEventListener(
    "click",
    openCart
  );


  closeCart?.addEventListener(
    "click",
    closeCartDrawer
  );


  cartDrawer?.addEventListener(
    "click",
    event => {

      if (event.target === cartDrawer) {
        closeCartDrawer();
      }

    }
  );


  /* =======================================================
     WHATSAPP CHECKOUT
  ======================================================= */

  checkoutButton?.addEventListener(
    "click",
    () => {

      if (!cart.length) {

        showToast(
          "Your bag is empty"
        );

        return;

      }


      let message =
        "Assalam-o-Alaikum, I want to place an order from Mehka Garments.%0A%0A";


      cart.forEach(item => {

        message +=
          `Product: ${item.name}%0A` +
          `Colour: ${item.color}%0A` +
          `Size: ${item.size}%0A` +
          `Quantity: ${item.quantity}%0A` +
          `Price: Rs. ${item.price}%0A%0A`;

      });


      const total =
        cart.reduce(
          (sum, item) =>
            sum +
            item.price *
            item.quantity,
          0
        );


      message +=
        `Total: Rs. ${total}`;


      /*
        CHANGE THIS NUMBER TO YOUR
        REAL WHATSAPP NUMBER.
      */

      const whatsappNumber =
        "923000000000";


      window.open(
        `https://wa.me/${whatsappNumber}?text=${message}`,
        "_blank"
      );

    }
  );


  /* =======================================================
     TOAST
  ======================================================= */

  const toast =
    document.getElementById("toast");


  function showToast(message) {

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");


    clearTimeout(
      window.mehkaToastTimer
    );


    window.mehkaToastTimer =
      setTimeout(() => {

        toast.classList.remove("show");

      }, 1800);

  }


  /* =======================================================
     CREATE PRODUCT CARD
  ======================================================= */

  function createProductCard(product) {

    const card =
      document.createElement("article");


    card.className =
      "product-card";


    const firstColor =
      product.colors[0];


    card.innerHTML = `

      <div class="product-image">

        <img
          src="${firstColor[2]}"
          alt="${product.name}"
          loading="lazy"
        >

        <span class="image-placeholder">
          MEHKA GARMENTS
        </span>

      </div>


      <div class="product-info">

        <p class="product-type">
          ${product.type}
        </p>


        <h3>
          ${product.name}
        </h3>


        <div class="options">

          <div class="option-label">
            COLOUR
          </div>


          <div class="colors">

            ${product.colors.map(
              (color, index) => `

                <button
                  type="button"
                  class="color-dot ${
                    index === 0
                      ? "active"
                      : ""
                  }"
                  style="background:${color[1]}"
                  data-color="${color[0]}"
                  data-image="${color[2]}"
                  title="${color[0]}"
                  aria-label="${color[0]}"
                ></button>

              `
            ).join("")}

          </div>


          <div class="option-label">
            SIZE
          </div>


          <div class="sizes">

            <button
              type="button"
              class="size-btn"
              data-size="S"
            >
              S
            </button>

            <button
              type="button"
              class="size-btn active"
              data-size="M"
            >
              M
            </button>

            <button
              type="button"
              class="size-btn"
              data-size="L"
            >
              L
            </button>

            <button
              type="button"
              class="size-btn"
              data-size="XL"
            >
              XL
            </button>

          </div>

        </div>


        <div class="price-row">

          <span class="old-price">
            Rs. ${product.oldPrice.toLocaleString()}
          </span>

          <strong class="price">
            Rs. ${product.price.toLocaleString()}
          </strong>

        </div>


        <div class="quantity">

          <span class="option-label">
            QUANTITY
          </span>


          <div class="quantity-controls">

            <button
              type="button"
              class="qty-minus"
            >
              −
            </button>

            <span class="qty-value">
              1
            </span>

            <button
              type="button"
              class="qty-plus"
            >
              +
            </button>

          </div>

        </div>


        <button
          type="button"
          class="add-button"
        >
          Add to Bag
        </button>

      </div>

    `;


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const image =
      card.querySelector(
        ".product-image img"
      );


    const colorButtons =
      card.querySelectorAll(
        ".color-dot"
      );


    const sizeButtons =
      card.querySelectorAll(
        ".size-btn"
      );


    const qtyValue =
      card.querySelector(
        ".qty-value"
      );


    const minus =
      card.querySelector(
        ".qty-minus"
      );


    const plus =
      card.querySelector(
        ".qty-plus"
      );


    const addButton =
      card.querySelector(
        ".add-button"
      );


    let quantity = 1;

    let selectedColor =
      firstColor[0];

    let selectedSize = "M";


    /* =====================================================
       PROTECT IMAGE
    ===================================================== */

    protectImage(image);


    /* =====================================================
       COLOUR
    ===================================================== */

    colorButtons.forEach(button => {

      button.addEventListener(
        "click",
        () => {

          colorButtons.forEach(
            item =>
              item.classList.remove(
                "active"
              )
          );


          button.classList.add(
            "active"
          );


          selectedColor =
            button.dataset.color;


          const newImage =
            button.dataset.image;


          if (image && newImage) {

            image.style.opacity = "0";


            const temp =
              new Image();


            temp.onload = () => {

              image.src =
                newImage;

              image.style.opacity =
                "1";

            };


            temp.onerror = () => {

              image.style.opacity =
                "1";

            };


            temp.src =
              newImage;

          }

        }
      );

    });


    /* =====================================================
       SIZE
    ===================================================== */

    sizeButtons.forEach(button => {

      button.addEventListener(
        "click",
        () => {

          sizeButtons.forEach(
            item =>
              item.classList.remove(
                "active"
              )
          );


          button.classList.add(
            "active"
          );


          selectedSize =
            button.dataset.size;

        }
      );

    });


    /* =====================================================
       QUANTITY
    ===================================================== */

    minus?.addEventListener(
      "click",
      () => {

        if (quantity > 1) {

          quantity--;

          qtyValue.textContent =
            quantity;

        }

      }
    );


    plus?.addEventListener(
      "click",
      () => {

        if (quantity < 20) {

          quantity++;

          qtyValue.textContent =
            quantity;

        }

      }
    );


    /* =====================================================
       ADD TO BAG
    ===================================================== */

    addButton?.addEventListener(
      "click",
      () => {

        const existing =
          cart.find(item =>
            item.name === product.name &&
            item.color === selectedColor &&
            item.size === selectedSize
          );


        if (existing) {

          existing.quantity +=
            quantity;

        } else {

          cart.push({

            name:
              product.name,

            color:
              selectedColor,

            size:
              selectedSize,

            quantity:
              quantity,

            price:
              product.price,

            image:
              image?.src ||
              firstColor[2]

          });

        }


        updateCart();

        showToast(
          `${product.name} added to bag`
        );


        addButton.textContent =
          "Added ✓";


        setTimeout(() => {

          addButton.textContent =
            "Add to Bag";

        }, 1300);

      }
    );


    /* =====================================================
       IMAGE VIEWER
    ===================================================== */

    image?.addEventListener(
      "click",
      () => {

        const viewer =
          document.getElementById(
            "imageViewer"
          );

        const viewerImage =
          document.getElementById(
            "viewerImage"
          );


        if (!viewer || !viewerImage)
          return;


        viewerImage.src =
          image.src;


        viewerImage.alt =
          product.name;


        viewer.classList.add(
          "open"
        );


        viewer.setAttribute(
          "aria-hidden",
          "false"
        );

      }
    );


    return card;

  }


  /* =======================================================
     RENDER ALL PRODUCTS
  ======================================================= */

  const grids = {

    shirts:
      document.getElementById(
        "shirtsGrid"
      ),

    pants:
      document.getElementById(
        "pantsGrid"
      ),

    trousers:
      document.getElementById(
        "trousersGrid"
      ),

    shorts:
      document.getElementById(
        "shortsGrid"
      )

  };


  Object.values(grids)
    .forEach(grid => {

      if (grid) {
        grid.innerHTML = "";
      }

    });


  products.forEach(product => {

    const grid =
      grids[product.category];


    if (grid) {

      grid.appendChild(
        createProductCard(product)
      );

    }

  });


  /* =======================================================
     IMAGE VIEWER CLOSE
  ======================================================= */

  const viewer =
    document.getElementById(
      "imageViewer"
    );

  const closeViewer =
    document.getElementById(
      "closeViewer"
    );


  function closeImageViewer() {

    viewer?.classList.remove(
      "open"
    );

    viewer?.setAttribute(
      "aria-hidden",
      "true"
    );

  }


  closeViewer?.addEventListener(
    "click",
    closeImageViewer
  );


  viewer?.addEventListener(
    "click",
    event => {

      if (event.target === viewer) {
        closeImageViewer();
      }

    }
  );


  /* =======================================================
     ESCAPE
  ======================================================= */

  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {

        closeCartDrawer();

        closeImageViewer();

      }

    }
  );


  /* =======================================================
     HERO VIDEO — SAFE
  ======================================================= */

  const heroVideo =
    document.getElementById(
      "heroVideo"
    );


  if (heroVideo) {

    heroVideo.muted = true;


    heroVideo
      .play()
      .catch(() => {
        /*
          Video unavailable or autoplay blocked.
          Website continues normally.
        */
      });


    heroVideo.addEventListener(
      "error",
      () => {

        heroVideo.style.display =
          "none";

      }
    );

  }


  /* =======================================================
     REVEAL ANIMATION
  ======================================================= */

  const revealElements =
    document.querySelectorAll(
      ".reveal, .product-card"
    );


  if (
    "IntersectionObserver"
    in window
  ) {

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "visible"
              );


              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.08
        }
      );


    revealElements.forEach(
      element =>
        observer.observe(element)
    );

  } else {

    revealElements.forEach(
      element =>
        element.classList.add(
          "visible"
        )
    );

  }


  /* =======================================================
     INITIAL CART
  ======================================================= */

  updateCart();


  console.log(
    "MEHKA GARMENTS — WEBSITE READY"
  );

});
