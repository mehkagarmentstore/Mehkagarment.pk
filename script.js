/* =========================================================
   MEHKA GARMENTS — FINAL SCRIPT
   Premium Men's Fashion Website
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     PRELOADER
  ========================================================= */

  const pageLoader = document.getElementById("pageLoader");

  window.addEventListener("load", () => {
    setTimeout(() => {
      pageLoader?.classList.add("hidden");
      document.body.classList.remove("no-scroll");
    }, 700);
  });


  /* =========================================================
     YEAR
  ========================================================= */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* =========================================================
     HEADER SCROLL
  ========================================================= */

  const header = document.querySelector(".site-header");

  const updateHeader = () => {
    if (!header) return;

    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();


  /* =========================================================
     PRODUCT DATA
     Selected Mehka Garments Collection
  ========================================================= */

  const pantsProducts = [
    {
      name: "Premium Cotton Pant",
      type: "COTTON PANT",
      price: 2800,
      oldPrice: 3100,
      image: "assets/images/cotton-pant.jpg",
      colors: [
        ["Black", "#111111"],
        ["Beige", "#b7aa96"],
        ["Olive", "#59634f"],
        ["Navy", "#273a52"]
      ]
    },
    {
      name: "Formal Washing Wear Pant",
      type: "FORMAL WASHING WEAR",
      price: 3000,
      oldPrice: 3300,
      image: "assets/images/formal-washing-wear.jpg",
      colors: [
        ["Black", "#111111"],
        ["Grey", "#777777"],
        ["Charcoal", "#393939"],
        ["Navy", "#26384d"]
      ]
    },
    {
      name: "Classic Simple Denim",
      type: "SIMPLE DENIM",
      price: 3200,
      oldPrice: 3500,
      image: "assets/images/simple-denim.jpg",
      colors: [
        ["Dark Blue", "#26394b"],
        ["Light Blue", "#7890a5"],
        ["Black", "#111111"]
      ]
    },
    {
      name: "Premium Brushed Denim",
      type: "BRUSHED DENIM",
      price: 3400,
      oldPrice: 3700,
      image: "assets/images/brushed-denim.jpg",
      colors: [
        ["Dark Blue", "#29394b"],
        ["Black", "#111111"],
        ["Grey", "#666666"]
      ]
    },
    {
      name: "Straight Fit Denim",
      type: "SIMPLE STRAIGHT DENIM",
      price: 3300,
      oldPrice: 3600,
      image: "assets/images/simple-straight-denim.jpg",
      colors: [
        ["Black", "#111111"],
        ["Blue", "#4f6b83"],
        ["Dark Grey", "#414141"]
      ]
    }
  ];


  const trouserProducts = [
    {
      name: "Essential Casual Trouser",
      type: "CASUAL TROUSER",
      price: 2700,
      oldPrice: 3000,
      image: "assets/images/casual-trouser.jpg",
      colors: [
        ["Black", "#111111"],
        ["Khaki", "#a89a82"],
        ["Olive", "#59634f"],
        ["Navy", "#293b52"]
      ]
    },
    {
      name: "China Naked Trouser",
      type: "CHINA NAKED TROUSER",
      price: 2850,
      oldPrice: 3150,
      image: "assets/images/china-naked-trouser.jpg",
      colors: [
        ["Black", "#111111"],
        ["Cream", "#ddd4c4"],
        ["Grey", "#737373"],
        ["Navy", "#283a52"]
      ]
    },
    {
      name: "Premium Maggi Trouser",
      type: "MAGGI TROUSER",
      price: 2900,
      oldPrice: 3200,
      image: "assets/images/maggi-trouser.jpg",
      colors: [
        ["Black", "#111111"],
        ["Dark Grey", "#424242"],
        ["Beige", "#b5a58e"]
      ]
    },
    {
      name: "Korean Fit Trouser",
      type: "KOREAN TROUSER",
      price: 3100,
      oldPrice: 3400,
      image: "assets/images/korean-trouser.jpg",
      colors: [
        ["Black", "#111111"],
        ["Charcoal", "#3d3d3d"],
        ["Cream", "#ded6c7"],
        ["Olive", "#59634f"]
      ]
    }
  ];


  const shortsProducts = [
    {
      name: "Premium Cotton Short",
      type: "COTTON SHORT",
      price: 1900,
      oldPrice: 2200,
      image: "assets/images/cotton-short.jpg",
      colors: [
        ["Black", "#111111"],
        ["White", "#ffffff"],
        ["Beige", "#b9ab96"],
        ["Olive", "#59634f"]
      ]
    },
    {
      name: "China Lakera Short",
      type: "CHINA LAKERA SHORT",
      price: 2000,
      oldPrice: 2300,
      image: "assets/images/china-lakera-short.jpg",
      colors: [
        ["Black", "#111111"],
        ["Grey", "#707070"],
        ["Navy", "#283a52"],
        ["Khaki", "#a99b83"]
      ]
    },
    {
      name: "Premium Jersey Short",
      type: "JERSEY SHORT",
      price: 1800,
      oldPrice: 2100,
      image: "assets/images/jersey-short.jpg",
      colors: [
        ["Black", "#111111"],
        ["Grey", "#737373"],
        ["Navy", "#283a52"],
        ["Maroon", "#712f35"]
      ]
    },
    {
      name: "Hosiery Casual Short",
      type: "HOSIERY CASUAL SHORTS",
      price: 1700,
      oldPrice: 2000,
      image: "assets/images/hosiery-casual-shorts.jpg",
      colors: [
        ["Black", "#111111"],
        ["White", "#ffffff"],
        ["Grey", "#777777"],
        ["Olive", "#59634f"]
      ]
    }
  ];


  /* =========================================================
     PRODUCT CARD GENERATOR
  ========================================================= */

  function createProductCard(product) {

    const article = document.createElement("article");

    article.className = "product-card generated-card";

    article.dataset.product = product.name;
    article.dataset.price = product.price;

    const colorButtons = product.colors.map((color, index) => {
      return `
        <button
          class="color-dot ${index === 0 ? "active" : ""}"
          style="background:${color[1]}"
          data-color="${color[0]}"
          aria-label="${color[0]}"
          title="${color[0]}"
          type="button"
        ></button>
      `;
    }).join("");

    article.innerHTML = `
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
            ${colorButtons}
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

        <div class="votes">

          <button
            type="button"
            class="like-button"
          >
            👍
            <span>0</span>
          </button>

          <button
            type="button"
            class="dislike-button"
          >
            👎
            <span>0</span>
          </button>

        </div>

      </div>
    `;

    return article;
  }


  /* =========================================================
     RENDER PRODUCTS
  ========================================================= */

  function renderProducts() {

    const pantsGrid = document.getElementById("pantsGrid");
    const trousersGrid = document.getElementById("trousersGrid");
    const shortsGrid = document.getElementById("shortsGrid");

    if (pantsGrid) {
      pantsGrid.innerHTML = "";

      pantsProducts.forEach(product => {
        pantsGrid.appendChild(createProductCard(product));
      });
    }

    if (trousersGrid) {
      trousersGrid.innerHTML = "";

      trouserProducts.forEach(product => {
        trousersGrid.appendChild(createProductCard(product));
      });
    }

    if (shortsGrid) {
      shortsGrid.innerHTML = "";

      shortsProducts.forEach(product => {
        shortsGrid.appendChild(createProductCard(product));
      });
    }
  }

  renderProducts();


  /* =========================================================
     CART
  ========================================================= */

  let cart = [];

  const bagButton = document.getElementById("bagButton");
  const bagCount = document.getElementById("bagCount");

  const cartDrawer = document.getElementById("cartDrawer");
  const closeCart = document.getElementById("closeCart");

  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  const toast = document.getElementById("toast");


  /* =========================================================
     TOAST
  ========================================================= */

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


  /* =========================================================
     OPEN CART
  ========================================================= */

  function openCart() {

    if (!cartDrawer) return;

    cartDrawer.classList.add("open");
    cartDrawer.setAttribute("aria-hidden", "false");

    document.body.classList.add("no-scroll");
  }


  /* =========================================================
     CLOSE CART
  ========================================================= */

  function closeCartDrawer() {

    if (!cartDrawer) return;

    cartDrawer.classList.remove("open");
    cartDrawer.setAttribute("aria-hidden", "true");

    document.body.classList.remove("no-scroll");
  }


  bagButton?.addEventListener("click", openCart);

  closeCart?.addEventListener("click", closeCartDrawer);


  cartDrawer?.addEventListener("click", event => {

    if (event.target === cartDrawer) {
      closeCartDrawer();
    }

  });


  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
      closeCartDrawer();
    }

  });


  /* =========================================================
     CART UPDATE
  ========================================================= */

  function updateCart() {

    const totalItems = cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    const totalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    if (bagCount) {
      bagCount.textContent = totalItems;
    }

    if (cartTotal) {
      cartTotal.textContent =
        `Rs. ${totalPrice.toLocaleString()}`;
    }

    if (!cartItems) return;

    if (cart.length === 0) {

      cartItems.innerHTML = `
        <p>
          Your bag is empty.
        </p>
      `;

      return;
    }


    cartItems.innerHTML = cart.map((item, index) => {

      return `
        <div class="cart-item">

          <img
            class="cart-item-image"
            src="${item.image}"
            alt="${item.name}"
          />

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
              class="remove-item"
              type="button"
              data-index="${index}"
            >
              Remove
            </button>

          </div>

          <div class="cart-item-price">
            Rs. ${(item.price * item.quantity).toLocaleString()}
          </div>

        </div>
      `;

    }).join("");


    cartItems
      .querySelectorAll(".remove-item")
      .forEach(button => {

        button.addEventListener("click", () => {

          const index = Number(button.dataset.index);

          cart.splice(index, 1);

          updateCart();

          showToast("Item removed");

        });

      });

  }


  /* =========================================================
     PRODUCT INTERACTIONS
  ========================================================= */

  function setupProductInteractions() {

    const products =
      document.querySelectorAll(".product-card");


    products.forEach(card => {

      /* -----------------------------
         COLOUR
      ----------------------------- */

      const colorButtons =
        card.querySelectorAll(".color-dot");

      colorButtons.forEach(button => {

        button.addEventListener("click", () => {

          colorButtons.forEach(item => {
            item.classList.remove("active");
          });

          button.classList.add("active");

        });

      });


      /* -----------------------------
         SIZE
      ----------------------------- */

      const sizeButtons =
        card.querySelectorAll(".size-btn");

      sizeButtons.forEach(button => {

        button.addEventListener("click", () => {

          sizeButtons.forEach(item => {
            item.classList.remove("active");
          });

          button.classList.add("active");

        });

      });


      /* -----------------------------
         QUANTITY
      ----------------------------- */

      const minus =
        card.querySelector(".qty-minus");

      const plus =
        card.querySelector(".qty-plus");

      const value =
        card.querySelector(".qty-value");


      let quantity = 1;


      minus?.addEventListener("click", () => {

        if (quantity > 1) {
          quantity--;
        }

        value.textContent = quantity;

      });


      plus?.addEventListener("click", () => {

        if (quantity < 20) {
          quantity++;
        }

        value.textContent = quantity;

      });


      /* -----------------------------
         ADD TO BAG
      ----------------------------- */

      const addButton =
        card.querySelector(".add-button");


      addButton?.addEventListener("click", () => {

        const productName =
          card.dataset.product;

        const price =
          Number(card.dataset.price);

        const image =
          card.querySelector("img")?.src || "";

        const activeColor =
          card.querySelector(".color-dot.active");

        const activeSize =
          card.querySelector(".size-btn.active");


        const color =
          activeColor?.dataset.color || "Default";

        const size =
          activeSize?.dataset.size || "M";


        const existingItem =
          cart.find(item =>
            item.name === productName &&
            item.color === color &&
            item.size === size
          );


        if (existingItem) {

          existingItem.quantity += quantity;

        } else {

          cart.push({
            name: productName,
            price: price,
            image: image,
            color: color,
            size: size,
            quantity: quantity
          });

        }


        updateCart();

        showToast(`${productName} added to bag`);

        addButton.textContent = "Added ✓";

        setTimeout(() => {
          addButton.textContent = "Add to Bag";
        }, 1400);

      });


      /* -----------------------------
         LIKE
      ----------------------------- */

      const likeButton =
        card.querySelector(".like-button");

      const likeCount =
        likeButton?.querySelector("span");


      likeButton?.addEventListener("click", () => {

        let count =
          Number(likeCount.textContent);

        if (likeButton.classList.contains("active")) {

          count--;

          likeButton.classList.remove("active");

        } else {

          count++;

          likeButton.classList.add("active");

        }

        likeCount.textContent = count;

      });


      /* -----------------------------
         DISLIKE
      ----------------------------- */

      const dislikeButton =
        card.querySelector(".dislike-button");

      const dislikeCount =
        dislikeButton?.querySelector("span");


      dislikeButton?.addEventListener("click", () => {

        let count =
          Number(dislikeCount.textContent);

        if (dislikeButton.classList.contains("active")) {

          count--;

          dislikeButton.classList.remove("active");

        } else {

          count++;

          dislikeButton.classList.add("active");

        }

        dislikeCount.textContent = count;

      });


      /* -----------------------------
         IMAGE CLICK
      ----------------------------- */

      const image =
        card.querySelector(".product-image img");


      image?.addEventListener("click", () => {

        if (!image.src) return;

        openImageViewer(
          image.src,
          image.alt
        );

      });

    });

  }

  setupProductInteractions();


  /* =========================================================
     PRODUCT IMAGE VIEWER
  ========================================================= */

  function openImageViewer(src, alt) {

    const viewer =
      document.createElement("div");

    viewer.className = "image-viewer";

    viewer.innerHTML = `
      <div class="image-viewer-backdrop"></div>

      <button
        type="button"
        class="image-viewer-close"
        aria-label="Close image"
      >
        ×
      </button>

      <img
        src="${src}"
        alt="${alt}"
        class="image-viewer-image"
      />
    `;


    const viewerStyle =
      document.createElement("style");

    viewerStyle.textContent = `
      .image-viewer {
        position: fixed;
        inset: 0;
        z-index: 6000;
        display: grid;
        place-items: center;
        padding: 25px;
      }

      .image-viewer-backdrop {
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,.88);
        backdrop-filter: blur(12px);
      }

      .image-viewer-image {
        position: relative;
        z-index: 2;
        max-width: min(92vw, 900px);
        max-height: 90vh;
        width: auto;
        height: auto;
        object-fit: contain;
        border-radius: 10px;
        box-shadow: 0 30px 80px rgba(0,0,0,.4);
        animation: imageViewerIn .45s cubic-bezier(.22,1,.36,1);
      }

      .image-viewer-close {
        position: absolute;
        z-index: 3;
        top: 20px;
        right: 25px;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: white;
        color: black;
        font-size: 28px;
      }

      @keyframes imageViewerIn {
        from {
          opacity: 0;
          transform: scale(.92);
        }

        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    `;

    document.head.appendChild(viewerStyle);
    document.body.appendChild(viewer);

    document.body.classList.add("no-scroll");


    const closeViewer = () => {

      viewer.remove();
      viewerStyle.remove();

      document.body.classList.remove("no-scroll");

    };


    viewer
      .querySelector(".image-viewer-close")
      .addEventListener("click", closeViewer);


    viewer
      .querySelector(".image-viewer-backdrop")
      .addEventListener("click", closeViewer);


    document.addEventListener(
      "keydown",
      function escapeHandler(event) {

        if (event.key === "Escape") {

          closeViewer();

          document.removeEventListener(
            "keydown",
            escapeHandler
          );

        }

      }
    );

  }


  /* =========================================================
     REVEAL ANIMATIONS
  ========================================================= */

  const revealElements =
    document.querySelectorAll(".reveal");


  const revealObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            revealObserver.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12
      }
    );


  revealElements.forEach(element => {
    revealObserver.observe(element);
  });


  /* =========================================================
     PRODUCT CARD STAGGER
  ========================================================= */

  const productCards =
    document.querySelectorAll(".product-card");


  const productObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            productObserver.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.08
      }
    );


  productCards.forEach(card => {
    productObserver.observe(card);
  });


  /* =========================================================
     HERO VIDEO
  ========================================================= */

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
          document.visibilityState === "visible"
        ) {
          playVideo();
        }

      }
    );

  }


  /* =========================================================
     SMOOTH ANCHOR NAVIGATION
  ========================================================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

      link.addEventListener("click", event => {

        const targetId =
          link.getAttribute("href");

        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }


        const target =
          document.querySelector(targetId);

        if (!target) return;


        event.preventDefault();


        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      });

    });


  /* =========================================================
     WHATSAPP CHECKOUT
  ========================================================= */

  const checkoutButton =
    document.getElementById("checkoutButton");


  checkoutButton?.addEventListener(
    "click",
    () => {

      if (cart.length === 0) {

        showToast("Your bag is empty");

        return;
      }


      let message =
        "Assalam-o-Alaikum, Mehka Garments.%0A%0A";

      message +=
        "*New Order*%0A%0A";


      cart.forEach((item, index) => {

        message +=
          `${index + 1}. ${item.name}%0A`;

        message +=
          `Colour: ${item.color}%0A`;

        message +=
          `Size: ${item.size}%0A`;

        message +=
          `Quantity: ${item.quantity}%0A`;

        message +=
          `Price: Rs. ${(item.price * item.quantity).toLocaleString()}%0A%0A`;

      });


      const total =
        cart.reduce(
          (sum, item) =>
            sum + item.price * item.quantity,
          0
        );


      message +=
        `*Total: Rs. ${total.toLocaleString()}*%0A%0A`;

      message +=
        "Please confirm my order.";


      /*
        IMPORTANT:
        Replace the number below with
        your real WhatsApp number.

        Format:
        923001234567

        No + sign.
        No spaces.
      */

      const whatsappNumber =
        "92XXXXXXXXXX";


      const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${message}`;


      window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
      );

    }
  );


  /* =========================================================
     IMAGE ERROR HANDLING
  ========================================================= */

  document
    .querySelectorAll(".product-image img")
    .forEach(image => {

      image.addEventListener(
        "error",
        () => {

          image.style.display = "none";

        }
      );

    });


  /* =========================================================
     INITIAL CART
  ========================================================= */

  updateCart();


  /* =========================================================
     FINAL READY
  ========================================================= */

  console.log(
    "MEHKA GARMENTS — Website loaded successfully."
  );

});
