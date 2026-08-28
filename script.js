/* =========================================================
   MEHKA GARMENTS — FINAL SCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     PRODUCT DATA
     Future products yahan easily add kiye ja sakte hain.
  ======================================================= */

  const pantsProducts = [
    {
      name: "Essential Cotton Pant",
      type: "COTTON PANT",
      price: 3000,
      oldPrice: 3250,
      image: "assets/images/cotton-pant.jpg",
      colors: ["Black", "Beige", "Navy", "Olive"]
    },
    {
      name: "Executive Formal Wash Pant",
      type: "FORMAL WASHING WEAR",
      price: 3200,
      oldPrice: 3500,
      image: "assets/images/formal-washing-wear.jpg",
      colors: ["Black", "Charcoal", "Navy", "Khaki"]
    },
    {
      name: "Modern Classic Denim",
      type: "SIMPLE DENIM",
      price: 3500,
      oldPrice: 3800,
      image: "assets/images/simple-denim.jpg",
      colors: ["Blue", "Black", "Grey"]
    },
    {
      name: "Premium Brushed Denim",
      type: "BRUSHED DENIM",
      price: 3700,
      oldPrice: 4000,
      image: "assets/images/brushed-denim.jpg",
      colors: ["Blue", "Black", "Charcoal"]
    },
    {
      name: "Signature Straight Denim",
      type: "STRAIGHT FIT DENIM",
      price: 3600,
      oldPrice: 3900,
      image: "assets/images/straight-denim.jpg",
      colors: ["Dark Blue", "Black", "Mid Blue"]
    }
  ];


  const trouserProducts = [
    {
      name: "Modern Casual Trouser",
      type: "CASUAL TROUSER",
      price: 2800,
      oldPrice: 3100,
      image: "assets/images/casual-trouser.jpg",
      colors: ["Black", "Beige", "Olive", "Navy"]
    },
    {
      name: "Signature Chino Trouser",
      type: "CHINA NAKED TROUSER",
      price: 2900,
      oldPrice: 3200,
      image: "assets/images/china-naked-trouser.jpg",
      colors: ["Black", "Khaki", "Brown", "Navy"]
    },
    {
      name: "Premium Maggi Trouser",
      type: "MAGGI TROUSER",
      price: 3000,
      oldPrice: 3300,
      image: "assets/images/maggi-trouser.jpg",
      colors: ["Black", "Grey", "Navy"]
    },
    {
      name: "Korean Essential Trouser",
      type: "KOREAN TROUSER",
      price: 3100,
      oldPrice: 3400,
      image: "assets/images/korean-trouser.jpg",
      colors: ["Black", "Beige", "Charcoal"]
    }
  ];


  const shortsProducts = [
    {
      name: "Essential Cotton Short",
      type: "COTTON SHORT",
      price: 1900,
      oldPrice: 2150,
      image: "assets/images/cotton-short.jpg",
      colors: ["Black", "White", "Beige", "Navy"]
    },
    {
      name: "Premium China Lycra Short",
      type: "CHINA LYCRA SHORT",
      price: 2000,
      oldPrice: 2250,
      image: "assets/images/china-lycra-short.jpg",
      colors: ["Black", "Grey", "Navy"]
    },
    {
      name: "Performance Jersey Short",
      type: "JERSEY SHORT",
      price: 1800,
      oldPrice: 2050,
      image: "assets/images/jersey-short.jpg",
      colors: ["Black", "White", "Royal Blue"]
    },
    {
      name: "Everyday Hosiery Short",
      type: "HOSIERY CASUAL SHORT",
      price: 1700,
      oldPrice: 1950,
      image: "assets/images/hosiery-casual-short.jpg",
      colors: ["Black", "Grey", "Navy", "Olive"]
    }
  ];


  /* =======================================================
     COLOUR MAP
  ======================================================= */

  const colorMap = {
    White: "#ffffff",
    Black: "#111111",
    Beige: "#b9aa95",
    Olive: "#5f6854",
    Forest: "#263b2c",
    Blue: "#536d8b",
    Navy: "#263b59",
    Brown: "#80634f",
    Maroon: "#712f35",
    Green: "#315548",
    Sand: "#c3b59d",
    Grey: "#777777",
    Charcoal: "#3d3d3d",
    Khaki: "#a59572",
    "Dark Blue": "#243c5b",
    "Mid Blue": "#56708e",
    "Royal Blue": "#315d96"
  };


  /* =======================================================
     GENERATE PRODUCT CARD
  ======================================================= */

  function createProductCard(product) {

    const card = document.createElement("article");

    card.className = "product-card generated-card";

    card.dataset.product = product.name;
    card.dataset.price = product.price;


    const colorsHTML = product.colors
      .map((color, index) => {

        const bg = colorMap[color] || "#999999";

        return `
          <button
            class="color-dot ${index === 0 ? "active" : ""}"
            style="background:${bg}"
            data-color="${color}"
            aria-label="${color}"
            title="${color}"
            type="button"
          ></button>
        `;

      })
      .join("");


    card.innerHTML = `

      <div class="product-image">

        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        />

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
            ${colorsHTML}
          </div>


          <div class="option-label">
            SIZE
          </div>

          <div class="sizes">

            <button
              class="size-btn"
              data-size="S"
              type="button"
            >
              S
            </button>

            <button
              class="size-btn active"
              data-size="M"
              type="button"
            >
              M
            </button>

            <button
              class="size-btn"
              data-size="L"
              type="button"
            >
              L
            </button>

            <button
              class="size-btn"
              data-size="XL"
              type="button"
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
              aria-label="Decrease quantity"
            >
              −
            </button>

            <span class="qty-value">
              1
            </span>

            <button
              type="button"
              class="qty-plus"
              aria-label="Increase quantity"
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


        <div class="votes">

          <button
            type="button"
            class="like-button"
          >
            👍 <span>0</span>
          </button>

          <button
            type="button"
            class="dislike-button"
          >
            👎 <span>0</span>
          </button>

        </div>

      </div>
    `;


    return card;
  }


  /* =======================================================
     RENDER PRODUCT SECTIONS
  ======================================================= */

  function renderProducts(products, gridId) {

    const grid = document.getElementById(gridId);

    if (!grid) return;

    grid.innerHTML = "";

    products.forEach(product => {
      grid.appendChild(createProductCard(product));
    });

  }


  renderProducts(pantsProducts, "pantsGrid");
  renderProducts(trouserProducts, "trousersGrid");
  renderProducts(shortsProducts, "shortsGrid");


  /* =======================================================
     CART
  ======================================================= */

  let cart = [];


  const bagButton = document.getElementById("bagButton");
  const bagCount = document.getElementById("bagCount");

  const cartDrawer = document.getElementById("cartDrawer");
  const closeCart = document.getElementById("closeCart");

  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  const checkoutButton =
    document.getElementById("checkoutButton");

  const toast =
    document.getElementById("toast");


  /* =======================================================
     TOAST
  ======================================================= */

  let toastTimer;

  function showToast(message) {

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2200);

  }


  /* =======================================================
     UPDATE BAG COUNT
  ======================================================= */

  function updateBagCount() {

    const totalQuantity = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );

    if (bagCount) {
      bagCount.textContent = totalQuantity;
    }

  }


  /* =======================================================
     UPDATE CART
  ======================================================= */

  function updateCart() {

    if (!cartItems || !cartTotal) return;


    if (cart.length === 0) {

      cartItems.innerHTML = `
        <p>
          Your bag is empty.
        </p>
      `;

      cartTotal.textContent = "Rs. 0";

      updateBagCount();

      return;
    }


    let total = 0;


    cartItems.innerHTML = cart
      .map((item, index) => {

        const itemTotal =
          item.price * item.quantity;

        total += itemTotal;


        return `
          <div class="cart-item">

            <img
              class="cart-item-image"
              src="${item.image || ""}"
              alt="${item.name}"
            />

            <div class="cart-item-info">

              <h4>
                ${item.name}
              </h4>

              <p>
                Colour: ${item.color}
                <br>
                Size: ${item.size}
                <br>
                Quantity: ${item.quantity}
              </p>

              <button
                class="remove-item"
                data-index="${index}"
                type="button"
              >
                Remove
              </button>

            </div>

            <div class="cart-item-price">
              Rs. ${itemTotal.toLocaleString()}
            </div>

          </div>
        `;

      })
      .join("");


    cartTotal.textContent =
      `Rs. ${total.toLocaleString()}`;


    updateBagCount();

  }


  /* =======================================================
     OPEN CART
  ======================================================= */

  function openCart() {

    if (!cartDrawer) return;

    cartDrawer.classList.add("open");

    cartDrawer.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add("no-scroll");

  }


  /* =======================================================
     CLOSE CART
  ======================================================= */

  function closeCartDrawer() {

    if (!cartDrawer) return;

    cartDrawer.classList.remove("open");

    cartDrawer.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove("no-scroll");

  }


  /* =======================================================
     BAG BUTTON
  ======================================================= */

  if (bagButton) {

    bagButton.addEventListener(
      "click",
      openCart
    );

  }


  if (closeCart) {

    closeCart.addEventListener(
      "click",
      closeCartDrawer
    );

  }


  if (cartDrawer) {

    cartDrawer.addEventListener(
      "click",
      event => {

        if (
          event.target === cartDrawer
        ) {
          closeCartDrawer();
        }

      }
    );

  }


  /* =======================================================
     ESC KEY
  ======================================================= */

  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {
        closeCartDrawer();
      }

    }
  );


  /* =======================================================
     PRODUCT INTERACTIONS
  ======================================================= */

  document.addEventListener(
    "click",
    event => {


      /* -----------------------------------------------
         COLOUR
      ------------------------------------------------ */

      const colorButton =
        event.target.closest(".color-dot");

      if (colorButton) {

        const parent =
          colorButton.closest(".product-card");

        if (!parent) return;

        parent
          .querySelectorAll(".color-dot")
          .forEach(button => {
            button.classList.remove("active");
          });

        colorButton.classList.add("active");

        parent.dataset.selectedColor =
          colorButton.dataset.color;

        showToast(
          `${colorButton.dataset.color} selected`
        );

        return;
      }


      /* -----------------------------------------------
         SIZE
      ------------------------------------------------ */

      const sizeButton =
        event.target.closest(".size-btn");

      if (sizeButton) {

        const parent =
          sizeButton.closest(".product-card");

        if (!parent) return;

        parent
          .querySelectorAll(".size-btn")
          .forEach(button => {
            button.classList.remove("active");
          });

        sizeButton.classList.add("active");

        parent.dataset.selectedSize =
          sizeButton.dataset.size;

        return;
      }


      /* -----------------------------------------------
         PLUS
      ------------------------------------------------ */

      const plusButton =
        event.target.closest(".qty-plus");

      if (plusButton) {

        const controls =
          plusButton.closest(".quantity-controls");

        const value =
          controls.querySelector(".qty-value");

        let quantity =
          Number(value.textContent) || 1;

        quantity++;

        value.textContent = quantity;

        return;
      }


      /* -----------------------------------------------
         MINUS
      ------------------------------------------------ */

      const minusButton =
        event.target.closest(".qty-minus");

      if (minusButton) {

        const controls =
          minusButton.closest(".quantity-controls");

        const value =
          controls.querySelector(".qty-value");

        let quantity =
          Number(value.textContent) || 1;

        quantity = Math.max(
          1,
          quantity - 1
        );

        value.textContent = quantity;

        return;
      }


      /* -----------------------------------------------
         LIKE
      ------------------------------------------------ */

      const likeButton =
        event.target.closest(".like-button");

      if (likeButton) {

        const number =
          likeButton.querySelector("span");

        let count =
          Number(number.textContent) || 0;

        if (
          !likeButton.classList.contains("active")
        ) {

          count++;

          likeButton.classList.add("active");

          number.textContent = count;

        }

        return;
      }


      /* -----------------------------------------------
         DISLIKE
      ------------------------------------------------ */

      const dislikeButton =
        event.target.closest(".dislike-button");

      if (dislikeButton) {

        const number =
          dislikeButton.querySelector("span");

        let count =
          Number(number.textContent) || 0;

        if (
          !dislikeButton.classList.contains("active")
        ) {

          count++;

          dislikeButton.classList.add("active");

          number.textContent = count;

        }

        return;
      }


      /* -----------------------------------------------
         ADD TO BAG
      ------------------------------------------------ */

      const addButton =
        event.target.closest(".add-button");

      if (addButton) {

        const card =
          addButton.closest(".product-card");

        if (!card) return;


        const name =
          card.dataset.product || "Product";


        const price =
          Number(card.dataset.price) || 0;


        const selectedColor =
          card.dataset.selectedColor ||
          card.querySelector(".color-dot.active")
            ?.dataset.color ||
          "Default";


        const selectedSize =
          card.dataset.selectedSize ||
          card.querySelector(".size-btn.active")
            ?.dataset.size ||
          "M";


        const quantityElement =
          card.querySelector(".qty-value");


        const quantity =
          Number(
            quantityElement?.textContent
          ) || 1;


        const image =
          card.querySelector("img")
            ?.getAttribute("src") || "";


        const existingItem =
          cart.find(item =>
            item.name === name &&
            item.color === selectedColor &&
            item.size === selectedSize
          );


        if (existingItem) {

          existingItem.quantity += quantity;

        } else {

          cart.push({
            name,
            price,
            color: selectedColor,
            size: selectedSize,
            quantity,
            image
          });

        }


        updateCart();

        showToast(
          `${name} added to your bag`
        );


        /* Reset product quantity */

        if (quantityElement) {
          quantityElement.textContent = "1";
        }


        openCart();

        return;
      }


      /* -----------------------------------------------
         REMOVE CART ITEM
      ------------------------------------------------ */

      const removeButton =
        event.target.closest(".remove-item");

      if (removeButton) {

        const index =
          Number(removeButton.dataset.index);

        if (!Number.isNaN(index)) {

          const removed =
            cart.splice(index, 1)[0];

          updateCart();

          if (removed) {
            showToast(
              `${removed.name} removed`
            );
          }

        }

      }

    }
  );


  /* =======================================================
     WHATSAPP CHECKOUT
  ======================================================= */

  if (checkoutButton) {

    checkoutButton.addEventListener(
      "click",
      () => {

        if (cart.length === 0) {

          showToast(
            "Your bag is empty"
          );

          return;
        }


        /*
          IMPORTANT:
          Replace this with the real WhatsApp number.
          Pakistan format:
          923XXXXXXXXX
        */

        const whatsappNumber =
          "923000000000";


        let message =
          "Assalam-o-Alaikum, I would like to order:%0A%0A";


        let total = 0;


        cart.forEach((item, index) => {

          const itemTotal =
            item.price * item.quantity;

          total += itemTotal;


          message +=
            `${index + 1}. ${item.name}%0A` +
            `Colour: ${item.color}%0A` +
            `Size: ${item.size}%0A` +
            `Quantity: ${item.quantity}%0A` +
            `Price: Rs. ${itemTotal.toLocaleString()}%0A%0A`;

        });


        message +=
          `Total: Rs. ${total.toLocaleString()}`;


        const whatsappURL =
          `https://wa.me/${whatsappNumber}?text=${message}`;


        window.open(
          whatsappURL,
          "_blank",
          "noopener,noreferrer"
        );

      }
    );

  }


  /* =======================================================
     HEADER SCROLL EFFECT
  ======================================================= */

  const header =
    document.querySelector(".site-header");


  function updateHeader() {

    if (!header) return;

    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  }


  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );


  updateHeader();


  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  const revealElements =
    document.querySelectorAll(
      ".reveal, .product-card"
    );


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
        threshold: 0.08,
        rootMargin: "0px 0px -50px 0px"
      }
    );


  revealElements.forEach(element => {
    revealObserver.observe(element);
  });


  /* =======================================================
     HERO VIDEO
  ======================================================= */

  const heroVideo =
    document.getElementById("heroVideo");


  if (heroVideo) {

    heroVideo.muted = true;

    const playVideo = () => {

      const promise =
        heroVideo.play();

      if (promise !== undefined) {

        promise.catch(() => {
          /* Browser blocked autoplay */
        });

      }

    };


    playVideo();


    document.addEventListener(
      "visibilitychange",
      () => {

        if (
          document.visibilityState ===
          "visible"
        ) {
          playVideo();
        }

      }
    );

  }


  /* =======================================================
     IMAGE FALLBACK
  ======================================================= */

  document
    .querySelectorAll(".product-image img")
    .forEach(image => {

      const placeholder =
        image.parentElement
          ?.querySelector(".image-placeholder");


      function hidePlaceholder() {

        if (placeholder) {
          placeholder.style.display = "none";
        }

      }


      function showPlaceholder() {

        if (placeholder) {
          placeholder.style.display = "grid";
        }

        image.style.opacity = "0";

      }


      image.addEventListener(
        "load",
        () => {

          image.style.opacity = "1";

          hidePlaceholder();

        }
      );


      image.addEventListener(
        "error",
        showPlaceholder
      );


      if (image.complete) {

        if (image.naturalWidth > 0) {
          hidePlaceholder();
        } else {
          showPlaceholder();
        }

      }

    });


  /* =======================================================
     YEAR
  ======================================================= */

  const year =
    document.getElementById("year");


  if (year) {
    year.textContent =
      new Date().getFullYear();
  }


  /* =======================================================
     LOADER
  ======================================================= */

  const loader =
    document.getElementById("pageLoader");


  window.addEventListener(
    "load",
    () => {

      setTimeout(
        () => {

          if (loader) {
            loader.classList.add("hidden");
          }

        },
        500
      );

    }
  );


  /* =======================================================
     INITIAL CART
  ======================================================= */

  updateCart();


  console.log(
    "Mehka Garments website loaded successfully."
  );

});
