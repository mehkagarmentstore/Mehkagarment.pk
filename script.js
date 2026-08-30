/* =========================================================
   MEHKA GARMENTS — FINAL PRODUCT SCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     YEAR
  ========================= */

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();


  /* =========================
     HEADER
  ========================= */

  const header = document.querySelector(".site-header");

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


  /* =========================
     PRODUCT DATA
  ========================= */

  const products = [

    /* ---------- FORMAL SHIRT ---------- */

    {
      name: "Signature Formal Shirt",
      type: "FORMAL SHIRT",
      price: 3200,
      oldPrice: 3500,
      image: "assets/images/signature-formal-shirt-black.jpg",
      colors: [
        ["Black", "#111111", "assets/images/signature-formal-shirt-black.jpg"],
        ["Olive", "#59634f", "assets/images/signature-formal-shirt-olive.jpg"],
        ["Sky Blue", "#9bb7c9", "assets/images/signature-formal-shirt-sky-blue.jpg"],
        ["White", "#ffffff", "assets/images/signature-formal-shirt-white.jpg"]
      ]
    },

    /* ---------- CHECK SHIRT ---------- */

    {
      name: "Premium Check Shirt",
      type: "CHECK SHIRT",
      price: 3300,
      oldPrice: 3600,
      image: "assets/images/premium-check-shirt-black-ivory-stripe.jpg",
      colors: [
        ["Black Ivory", "#222222", "assets/images/premium-check-shirt-black-ivory-stripe.jpg"],
        ["Ivory Sand", "#d8cdbb", "assets/images/premium-check-shirt-ivory-sand.jpg"],
        ["Midnight Navy", "#17263a", "assets/images/premium-check-shirt-midnight-navy.jpg"],
        ["Navy Burgundy", "#303d50", "assets/images/premium-check-shirt-navy-burgundy.jpg"],
        ["Slate Blue", "#617589", "assets/images/premium-check-shirt-slate-blue.jpg"]
      ]
    },

    /* ---------- SIMPLE POLO ---------- */

    {
      name: "Essential Contrast Polo",
      type: "SIMPLE POLO",
      price: 2800,
      oldPrice: 3100,
      image: "assets/images/classic-contrast-polo.jpg",
      colors: [
        ["Classic Contrast", "#222222", "assets/images/classic-contrast-polo.jpg"],
        ["Jet Black", "#111111", "assets/images/simple-polo-jet-black.jpg"],
        ["Deep Forest", "#284536", "assets/images/simple-polo-deep-forest-green.jpg"],
        ["Ocean Teal", "#247681", "assets/images/simple-polo-ocean-teal-blue.jpg"],
        ["Rich Mocha", "#654936", "assets/images/simple-polo-rich-mocha-brown.jpg"],
        ["Burgendy Wine", "#6e3037", "assets/images/simple-polo-burgendy-wine.jpg"]
      ]
    },

    /* ---------- STRIPE POLO ---------- */

    {
      name: "Executive Stripe Polo",
      type: "STRIPE POLO",
      price: 2900,
      oldPrice: 3200,
      image: "assets/images/executive-stripe-polo.jpg",
      colors: [
        ["Executive Stripe", "#333333", "assets/images/executive-stripe-polo.jpg"],
        ["Heritage Stripe", "#39485a", "assets/images/heritage-stripe-polo.jpg"],
        ["Signature Stripe", "#454545", "assets/images/signature-stripe-polo.jpg"],
        ["Urban Luxe", "#303030", "assets/images/urban-luxe-stripe-polo.jpg"]
      ]
    },

    /* ---------- ESSENTIAL T-SHIRT ---------- */

    {
      name: "Essential Collar T-Shirt",
      type: "COLLAR T-SHIRT",
      price: 2500,
      oldPrice: 2800,
      image: "assets/images/jet-black-essential.jpg",
      colors: [
        ["Jet Black", "#111111", "assets/images/jet-black-essential.jpg"],
        ["Olive Green", "#59634f", "assets/images/olive-green-essential.jpg"],
        ["Silver Grey", "#999999", "assets/images/silver-grey-essential.jpg"],
        ["Powder Light Grey", "#c4c4c0", "assets/images/poder-light-grey.jpg"]
      ]
    },

    /* ---------- BRUSHED DENIM ---------- */

    {
      name: "Premium Brushed Denim",
      type: "BRUSHED DENIM",
      price: 3400,
      oldPrice: 3700,
      image: "assets/images/premium-brushed-denim-blue.jpg",
      colors: [
        ["Blue", "#4f6b83", "assets/images/premium-brushed-denim-blue.jpg"],
        ["Dark Blue", "#29394b", "assets/images/premium-brushed-denim-dark-blue.jpg"],
        ["Dark Grey", "#414141", "assets/images/premium-brushed-denim-dark-grey.jpg"],
        ["Grey", "#666666", "assets/images/premium-brushed-denim-grey.jpg"],
        ["Light Blue", "#7890a5", "assets/images/premium-brushed-denim-light-blue.jpg"]
      ]
    }

  ];


  /* =========================
     CREATE CARD
  ========================= */

  function createProductCard(product) {

    const card = document.createElement("article");

    card.className = "product-card generated-card";

    card.dataset.product = product.name;
    card.dataset.price = product.price;

    const colors = product.colors.map(
      (color, index) => `
        <button
          type="button"
          class="color-dot ${index === 0 ? "active" : ""}"
          style="background:${color[1]}"
          data-color="${color[0]}"
          data-image="${color[2]}"
          title="${color[0]}"
          aria-label="${color[0]}"
        ></button>
      `
    ).join("");

    card.innerHTML = `

      <div class="product-image">

        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >

        <span class="image-placeholder">
          PRODUCT IMAGE
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
            ${colors}
          </div>

          <div class="option-label">
            SIZE
          </div>

          <div class="sizes">

            <button type="button" class="size-btn" data-size="S">S</button>

            <button type="button" class="size-btn active" data-size="M">M</button>

            <button type="button" class="size-btn" data-size="L">L</button>

            <button type="button" class="size-btn" data-size="XL">XL</button>

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

        </div>

        <button
          type="button"
          class="add-button"
        >
          Add to Bag
        </button>

      </div>
    `;

    return card;
  }


  /* =========================
     RENDER
  ========================= */

  const pantsGrid =
    document.getElementById("pantsGrid");

  const trousersGrid =
    document.getElementById("trousersGrid");

  const shortsGrid =
    document.getElementById("shortsGrid");


  /*
     Put the available verified products
     into the existing product areas.
  */

  const grids = [
    pantsGrid,
    trousersGrid,
    shortsGrid
  ].filter(Boolean);


  if (grids.length) {

    grids.forEach(grid => {
      grid.innerHTML = "";
    });

    products.forEach((product, index) => {

      const grid =
        grids[index % grids.length];

      grid.appendChild(
        createProductCard(product)
      );

    });

  }


  /* =========================
     PRODUCT INTERACTIONS
  ========================= */

  document
    .querySelectorAll(".product-card")
    .forEach(card => {

      /* COLOUR */

      const image =
        card.querySelector(".product-image img");

      const colorButtons =
        card.querySelectorAll(".color-dot");

      colorButtons.forEach(button => {

        button.addEventListener("click", () => {

          colorButtons.forEach(btn =>
            btn.classList.remove("active")
          );

          button.classList.add("active");

          const newImage =
            button.dataset.image;

          if (newImage && image) {

            image.style.opacity = "0";

            setTimeout(() => {

              image.src = newImage;

              image.onload = () => {
                image.style.opacity = "1";
              };

            }, 150);

          }

        });

      });


      /* SIZE */

      const sizeButtons =
        card.querySelectorAll(".size-btn");

      sizeButtons.forEach(button => {

        button.addEventListener("click", () => {

          sizeButtons.forEach(btn =>
            btn.classList.remove("active")
          );

          button.classList.add("active");

        });

      });


      /* QUANTITY */

      let quantity = 1;

      const qtyValue =
        card.querySelector(".qty-value");

      card
        .querySelector(".qty-minus")
        ?.addEventListener("click", () => {

          if (quantity > 1) {
            quantity--;
          }

          qtyValue.textContent = quantity;

        });


      card
        .querySelector(".qty-plus")
        ?.addEventListener("click", () => {

          if (quantity < 20) {
            quantity++;
          }

          qtyValue.textContent = quantity;

        });


      /* IMAGE VIEWER */

      image?.addEventListener("click", () => {

        const viewer =
          document.createElement("div");

        viewer.style.cssText = `
          position:fixed;
          inset:0;
          z-index:99999;
          background:rgba(0,0,0,.9);
          display:flex;
          align-items:center;
          justify-content:center;
          padding:25px;
        `;

        viewer.innerHTML = `

          <button
            type="button"
            style="
              position:absolute;
              top:20px;
              right:25px;
              width:45px;
              height:45px;
              border:0;
              border-radius:50%;
              font-size:28px;
              background:white;
              color:black;
              cursor:pointer;
            "
          >
            ×
          </button>

          <img
            src="${image.src}"
            alt="${image.alt}"
            style="
              max-width:92vw;
              max-height:90vh;
              object-fit:contain;
              border-radius:10px;
            "
          >

        `;

        document.body.appendChild(viewer);

        viewer
          .querySelector("button")
          .addEventListener(
            "click",
            () => viewer.remove()
          );

        viewer.addEventListener(
          "click",
          event => {

            if (event.target === viewer) {
              viewer.remove();
            }

          }
        );

      });


      /* ADD TO BAG */

      card
        .querySelector(".add-button")
        ?.addEventListener("click", () => {

          const button =
            card.querySelector(".add-button");

          button.textContent =
            "Added ✓";

          setTimeout(() => {
            button.textContent =
              "Add to Bag";
          }, 1400);

        });

    });


  /* =========================
     REVEAL ANIMATION
  ========================= */

  const revealObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

            revealObserver.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.08
      }
    );


  document
    .querySelectorAll(".reveal, .product-card")
    .forEach(element => {

      revealObserver.observe(element);

    });


  /* =========================
     HERO VIDEO
  ========================= */

  const heroVideo =
    document.getElementById("heroVideo");

  if (heroVideo) {

    heroVideo.muted = true;

    heroVideo.play().catch(() => {});

  }


  /* =========================
     ESCAPE
  ========================= */

  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {

        document
          .querySelectorAll(
            '[style*="z-index:99999"]'
          )
          .forEach(element =>
            element.remove()
          );

      }

    }
  );


  console.log(
    "MEHKA GARMENTS — FINAL PRODUCT SCRIPT LOADED"
  );

});
