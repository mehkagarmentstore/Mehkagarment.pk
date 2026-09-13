/* =========================================================
   MEHKA GARMENT
   SCRIPT.JS
   Premium Menswear E-Commerce Frontend
   ========================================================= */


/* =========================================================
   PRODUCT DATA
   ========================================================= */

const products = [

  /* =======================================================
     SHIRTS & T-SHIRTS
     ======================================================= */

  {
    id: "signature-formal-shirt",
    section: "shirts",
    category: "Formal Shirt",
    name: "Mehka Signature Formal Shirt",
    description:
      "A refined formal shirt with a clean silhouette, premium finish and effortless executive character.",
    oldPrice: 3990,
    price: 2990,
    badge: "Signature",
    sizes: ["S", "M", "L", "XL", "XXL"],

    colors: [
      {
        name: "Onyx Black",
        image: "signature-formal-shirt-black.jpg"
      },
      {
        name: "Olive Stone",
        image: "signature-formal-shirt-olive.jpg"
      },
      {
        name: "Executive Sky",
        image: "signature-formal-shirt-sky-blue.jpg"
      },
      {
        name: "Pure White",
        image: "signature-formal-shirt-white.jpg"
      }
    ]
  },


  {
    id: "heritage-check-shirt",
    section: "shirts",
    category: "Check Shirt",
    name: "Mehka Heritage Check Shirt",
    description:
      "A sophisticated check pattern built for modern everyday dressing and polished casual looks.",
    oldPrice: 4290,
    price: 3190,
    badge: "Heritage",
    sizes: ["S", "M", "L", "XL", "XXL"],

    colors: [
      {
        name: "Black Ivory",
        image: "premium-check-shirt-black-ivory-stripe.jpg"
      },
      {
        name: "Ivory Sand",
        image: "premium-check-shirt-ivory-sand.jpg"
      },
      {
        name: "Midnight Navy",
        image: "premium-check-shirt-midnight-navy.jpg"
      },
      {
        name: "Navy Burgundy",
        image: "premium-check-shirt-navy-burgundy.jpg"
      },
      {
        name: "Slate Blue",
        image: "premium-check-shirt-slate-blue.jpg"
      }
    ]
  },


  {
    id: "essential-polo",
    section: "shirts",
    category: "Polo",
    name: "Mehka Essential Polo",
    description:
      "A clean premium polo designed for effortless styling from everyday wear to smart casual occasions.",
    oldPrice: 3490,
    price: 2590,
    badge: "Essential",
    sizes: ["S", "M", "L", "XL", "XXL"],

    colors: [
      {
        name: "Burgundy Wine",
        image: "simple-polo-burgendy-wine.jpg"
      },
      {
        name: "Deep Forest Green",
        image: "simple-polo-deep-forest-green.jpg"
      },
      {
        name: "Jet Black",
        image: "simple-polo-jet-black.jpg"
      },
      {
        name: "Ocean Teal Blue",
        image: "simple-polo-ocean-teal-blue.jpg"
      },
      {
        name: "Rich Mocha Brown",
        image: "simple-polo-rich-mocha-brown.jpg"
      }
    ]
  },


  /* -------------------------------------------------------
     STRIPE POLO
     IMPORTANT:
     Har stripe design ko separate product rakha gaya hai.
     Ye ek doosre ke colours/variants nahi hain.
     ------------------------------------------------------- */

  {
    id: "classic-contrast-polo",
    section: "shirts",
    category: "Stripe Polo",
    name: "Mehka Classic Contrast Polo",
    description:
      "A sharp contrast-stripe polo with a confident premium character and versatile everyday fit.",
    oldPrice: 3790,
    price: 2790,
    badge: "Stripe Edit",
    sizes: ["S", "M", "L", "XL", "XXL"],

    colors: [
      {
        name: "Classic Contrast",
        image: "classic-contrast-polo.jpg"
      }
    ]
  },


  {
    id: "executive-stripe-polo",
    section: "shirts",
    category: "Stripe Polo",
    name: "Mehka Executive Stripe Polo",
    description:
      "A refined stripe polo created for a clean executive-inspired casual look.",
    oldPrice: 3890,
    price: 2890,
    badge: "Stripe Edit",
    sizes: ["S", "M", "L", "XL", "XXL"],

    colors: [
      {
        name: "Executive Stripe",
        image: "executive-stripe-polo.jpg"
      }
    ]
  },


  {
    id: "heritage-stripe-polo",
    section: "shirts",
    category: "Stripe Polo",
    name: "Mehka Heritage Stripe Polo",
    description:
      "Classic stripe detailing meets a contemporary silhouette for understated premium style.",
    oldPrice: 3890,
    price: 2890,
    badge: "Stripe Edit",
    sizes: ["S", "M", "L", "XL", "XXL"],

    colors: [
      {
        name: "Heritage Stripe",
        image: "heritage-stripe-polo.jpg"
      }
    ]
  },


  {
    id: "signature-stripe-polo",
    section: "shirts",
    category: "Stripe Polo",
    name: "Mehka Signature Stripe Polo",
    description:
      "A distinctive signature stripe design made to elevate relaxed everyday dressing.",
    oldPrice: 3990,
    price: 2990,
    badge: "Signature Stripe",
    sizes: ["S", "M", "L", "XL", "XXL"],

    colors: [
      {
        name: "Signature Stripe",
        image: "signature-stripe-polo.jpg"
      }
    ]
  },


  {
    id: "urban-luxe-stripe-polo",
    section: "shirts",
    category: "Stripe Polo",
    name: "Mehka Urban Luxe Stripe Polo",
    description:
      "A modern luxury-inspired stripe polo with a confident urban finish.",
    oldPrice: 3990,
    price: 2990,
    badge: "Urban Luxe",
    sizes: ["S", "M", "L", "XL", "XXL"],

    colors: [
      {
        name: "Urban Luxe Stripe",
        image: "urban-luxe-stripe-polo.jpg"
      }
    ]
  },


  {
    id: "essential-collar-tshirt",
    section: "shirts",
    category: "Collar T-Shirt",
    name: "Mehka Essential Collar T-Shirt",
    description:
      "A premium collar T-shirt with a clean structure and easy everyday styling.",
    oldPrice: 2990,
    price: 2190,
    badge: "Essential",
    sizes: ["S", "M", "L", "XL", "XXL"],

    colors: [
      {
        name: "Jet Black",
        image: "essential-collar-tshirt-black.jpg"
      },
      {
        name: "Mocha Brown",
        image: "essential-collar-tshirt-mocha-brown.jpg"
      },
      {
        name: "Navy Blue",
        image: "essential-collar-tshirt-navy-blue.jpg"
      },
      {
        name: "Sage Green",
        image: "essential-collar-tshirt-sage-green.jpg"
      },
      {
        name: "Pure White",
        image: "essential-collar-tshirt-white.jpg"
      }
    ]
  },


  /* =======================================================
     DENIM
     ======================================================= */

  {
    id: "straight-denim",
    section: "denim",
    category: "Straight Denim",
    name: "Mehka Signature Straight Denim",
    description:
      "A structured straight-leg denim silhouette with clean proportions and everyday versatility.",
    oldPrice: 4990,
    price: 3790,
    badge: "Straight Fit",
    sizes: ["28", "30", "32", "34", "36", "38"],

    colors: [
      {
        name: "Charcoal Black",
        image: "straigt-denim-paint-charcoal-black.jpg"
      },
      {
        name: "Classic Blue",
        image: "straigt-denim-paint-classic-blue.jpg"
      },
      {
        name: "Indigo Blue",
        image: "straigt-denim-paint-indigo-blue.jpg"
      },
      {
        name: "Sky Blue",
        image: "straigt-denim-paint-sky-blue.jpg"
      }
    ]
  },


  /*
    Blast Denim aur Premium Blast Denim ke exact image
    filenames abhi supplied assets mein identify nahi hue.

    Isliye broken image dikhane ke bajaye elegant placeholder
    use kiya gaya hai. Baad mein exact filename sirf DATA
    mein add karna hoga — layout/logic change nahi hoga.
  */

  {
    id: "blast-denim",
    section: "denim",
    category: "Blast Denim",
    name: "Mehka Blast Denim",
    description:
      "A contemporary blast-finish denim designed for a stronger street-luxury statement.",
    oldPrice: 5290,
    price: 3990,
    badge: "Blast",
    sizes: ["28", "30", "32", "34", "36", "38"],

    colors: []
  },


  {
    id: "premium-blast-denim",
    section: "denim",
    category: "Premium Blast Denim",
    name: "Mehka Premium Blast Denim",
    description:
      "An elevated blast denim silhouette with a premium fashion-forward finish.",
    oldPrice: 5790,
    price: 4390,
    badge: "Premium",
    sizes: ["28", "30", "32", "34", "36", "38"],

    colors: []
  },


  {
    id: "baggy-denim",
    section: "denim",
    category: "Baggy Denim",
    name: "Mehka Wide-Leg Baggy Denim",
    description:
      "Relaxed wide-leg proportions designed for a modern oversized denim aesthetic.",
    oldPrice: 5490,
    price: 4190,
    badge: "Baggy Fit",
    sizes: ["28", "30", "32", "34", "36", "38"],

    colors: [
      {
        name: "Deep Indigo",
        image: "wide-leg-baggy-jeans-deep-indigo-blue.jpg"
      },
      {
        name: "Ice Blue",
        image: "wide-leg-baggy-jeans-ice-blue.jpg"
      },
      {
        name: "Mid Blue",
        image: "wide-leg-baggy-jeans-mid-blue.jpg"
      }
    ]
  },


  /* =======================================================
     COTTON PANTS
     ======================================================= */

  {
    id: "wash-wear-cotton",
    section: "cotton",
    category: "Cotton Wash-Wear",
    name: "Mehka Wash-Wear Cotton Pant",
    description:
      "A refined cotton pant built for comfortable daily wear with a polished finish.",
    oldPrice: 4290,
    price: 3190,
    badge: "Wash-Wear",
    sizes: ["28", "30", "32", "34", "36", "38"],

    colors: [
      {
        name: "Dark Cocoa",
        image: "washing-wear-paint-dark-cocoa.jpg"
      },
      {
        name: "Obsidian Black",
        image: "washing-wear-paint-obsidian-black.jpg"
      },
      {
        name: "Royal Navy",
        image: "washing-wear-paint-royal-navy.jpg"
      },
      {
        name: "Sage Olive",
        image: "washing-wear-paint-sage-olive.jpg"
      },
      {
        name: "Smoke Grey",
        image: "washing-wear-paint-smoke-grey.jpg"
      }
    ]
  },


  {
    id: "premium-cotton-chino",
    section: "cotton",
    category: "Premium Cotton Chino",
    name: "Mehka Premium Cotton Chino",
    description:
      "A premium chino silhouette combining clean tailoring with relaxed everyday comfort.",
    oldPrice: 4490,
    price: 3390,
    badge: "Premium Cotton",
    sizes: ["28", "30", "32", "34", "36", "38"],

    colors: [
      {
        name: "Ash Grey",
        image: "primium-cotton-chino-paint-ash-grey.jpg"
      },
      {
        name: "Ivory Cream",
        image: "primium-cotton-chino-paint-ivory-cream.jpg"
      },
      {
        name: "Olive Brown",
        image: "primium-cotton-chino-paint-olive-brown.jpg"
      },
      {
        name: "Onyx Black",
        image: "primium-cotton-chino-paint-onyx-black.jpg"
      },
      {
        name: "Sand Beige",
        image: "primium-cotton-chino-paint-sand-beige.jpg"
      }
    ]
  },


  /* =======================================================
     TROUSERS
     ======================================================= */

  {
    id: "china-leggar",
    section: "trousers",
    category: "China Leggar",
    name: "Mehka Signature China Leggar Trouser",
    description:
      "A clean modern trouser profile designed for smart everyday dressing.",
    oldPrice: 4290,
    price: 3190,
    badge: "Signature",
    sizes: ["28", "30", "32", "34", "36", "38"],

    colors: []
  },


  {
    id: "baggy-trouser",
    section: "trousers",
    category: "Baggy Trouser",
    name: "Mehka Urban Baggy Trouser",
    description:
      "A relaxed baggy trouser silhouette with contemporary proportions and urban attitude.",
    oldPrice: 4490,
    price: 3390,
    badge: "Urban Fit",
    sizes: ["28", "30", "32", "34", "36", "38"],

    colors: [
      {
        name: "Charcoal Grey",
        image: "urban-baggy-trouser-charcoal-grey.jpg"
      },
      {
        name: "Graphite Grey",
        image: "urban-baggy-trouser-graphite-grey.jpg"
      },
      {
        name: "Midnight Black",
        image: "urban-baggy-trouser-midnight-black.jpg"
      },
      {
        name: "Navy Blue",
        image: "urban-baggy-trouser-navy-blue.jpg"
      }
    ]
  },


  {
    id: "korean-trouser",
    section: "trousers",
    category: "Korean Trouser",
    name: "Mehka Korean Relaxed Trouser",
    description:
      "A relaxed Korean-inspired silhouette with clean lines and effortless modern styling.",
    oldPrice: 4590,
    price: 3490,
    badge: "Korean Fit",
    sizes: ["28", "30", "32", "34", "36", "38"],

    colors: [
      {
        name: "Forest Olive",
        image: "korean-relaxed-trouser-forest-olive.jpg"
      },
      {
        name: "Frost Grey",
        image: "korean-relaxed-trouser-frost-grey.jpg"
      },
      {
        name: "Jet Black",
        image: "korean-relaxed-trouser-jet-black.jpg"
      },
      {
        name: "Pearl White",
        image: "korean-relaxed-trouser-pearl-white.jpg"
      }
    ]
  },


  /* =======================================================
     PRINT ON DEMAND
     ======================================================= */

  {
    id: "pod-white",
    section: "pod",
    category: "Print on Demand",
    name: "Mehka Custom White Tee",
    description:
      "Premium round-neck white T-shirt ready for your artwork, logo, text or custom print.",
    oldPrice: 2490,
    price: 1890,
    badge: "Custom",
    sizes: ["S", "M", "L", "XL", "XXL"],

    colors: [
      {
        name: "White",
        image: "essential-collar-tshirt-white.jpg"
      }
    ]
  },


  {
    id: "pod-black",
    section: "pod",
    category: "Print on Demand",
    name: "Mehka Custom Black Tee",
    description:
      "Premium round-neck black T-shirt ready for your artwork, logo, text or custom print.",
    oldPrice: 2490,
    price: 1890,
    badge: "Custom",
    sizes: ["S", "M", "L", "XL", "XXL"],

    colors: [
      {
        name: "Black",
        image: "essential-collar-tshirt-black.jpg"
      }
    ]
  }

];


/* =========================================================
   POD DESIGN ASSETS
   ========================================================= */

const podDesigns = [
  {
    name: "Better Days",
    image: "better-days.jpg"
  },
  {
    name: "Motor Sport",
    image: "motor-sport.jpeg"
  },
  {
    name: "Mountain Adventure",
    image: "mountain-adventure.jpeg"
  },
  {
    name: "Shadow Anime",
    image: "shadow-anime.jpg"
  },
  {
    name: "Sunset Breeze",
    image: "sunset-breeze.jpg"
  },
  {
    name: "Swoosh Essential",
    image: "swoosh-essential.jpg"
  },
  {
    name: "Tokyo Wave",
    image: "tokyo-wave.jpg"
  }
];


/* =========================================================
   STATE
   ========================================================= */

let cart = loadStorage("mehka_cart", []);

let reactions = loadStorage("mehka_reactions", {});

let selectedProduct = null;

let selectedColorIndex = 0;

let selectedSize = null;

let selectedPodDesign = null;


/* =========================================================
   DOM
   ========================================================= */

const shirtsGrid = document.getElementById("shirtsGrid");
const denimGrid = document.getElementById("denimGrid");
const cottonGrid = document.getElementById("cottonGrid");
const trousersGrid = document.getElementById("trousersGrid");

const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");

const cartOpen = document.getElementById("cartOpen");
const cartClose = document.getElementById("cartClose");

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

const productModal = document.getElementById("productModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

const checkoutBtn = document.getElementById("checkoutBtn");

const yearElement = document.getElementById("year");


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  renderAllProducts();

  renderCart();

  setupScrollReveal();

  setupEvents();

  updateYear();

});


/* =========================================================
   STORAGE
   ========================================================= */

function loadStorage(key, fallback) {

  try {

    const saved = localStorage.getItem(key);

    return saved
      ? JSON.parse(saved)
      : fallback;

  } catch (error) {

    console.warn("Storage read failed:", error);

    return fallback;

  }

}


function saveStorage(key, value) {

  try {

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );

  } catch (error) {

    console.warn("Storage save failed:", error);

  }

}


/* =========================================================
   BASIC HELPERS
   ========================================================= */

function money(value) {

  return "Rs. " + Number(value).toLocaleString("en-PK");

}


function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


function getProduct(id) {

  return products.find(
    product => product.id === id
  );

}


function getProductImage(product, colorIndex = 0) {

  if (
    product &&
    product.colors &&
    product.colors.length &&
    product.colors[colorIndex] &&
    product.colors[colorIndex].image
  ) {

    return product.colors[colorIndex].image;

  }

  return null;

}


function getProductColorName(product, colorIndex = 0) {

  if (
    product &&
    product.colors &&
    product.colors.length &&
    product.colors[colorIndex]
  ) {

    return product.colors[colorIndex].name;

  }

  return "Standard";

}


/* =========================================================
   IMAGE FALLBACK
   ========================================================= */

function imageHTML(product, colorIndex = 0, extraClass = "") {

  const image = getProductImage(
    product,
    colorIndex
  );

  if (!image) {

    return `
      <div class="image-placeholder ${extraClass}">
        <strong>${escapeHTML(product.name)}</strong>
        <span>Image Coming Soon</span>
      </div>
    `;

  }

  return `
    <img
      src="${escapeHTML(image)}"
      alt="${escapeHTML(product.name)}"
      loading="lazy"
      onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
    >

    <div
      class="image-placeholder"
      style="display:none;"
    >
      <strong>${escapeHTML(product.name)}</strong>
      <span>Image Coming Soon</span>
    </div>
  `;

}


/* =========================================================
   RENDER ALL
   ========================================================= */

function renderAllProducts() {

  renderProducts(
    shirtsGrid,
    products.filter(
      product => product.section === "shirts"
    )
  );

  renderProducts(
    denimGrid,
    products.filter(
      product => product.section === "denim"
    )
  );

  renderProducts(
    cottonGrid,
    products.filter(
      product => product.section === "cotton"
    )
  );

  renderProducts(
    trousersGrid,
    products.filter(
      product => product.section === "trousers"
    )
  );

}


/* =========================================================
   RENDER PRODUCT GRID
   ========================================================= */

function renderProducts(container, list) {

  if (!container) return;

  container.innerHTML = "";

  list.forEach((product, index) => {

    const card = createProductCard(
      product,
      index
    );

    container.appendChild(card);

  });

}


/* =========================================================
   PRODUCT CARD
   ========================================================= */

function createProductCard(product, index = 0) {

  const card = document.createElement("article");

  card.className = "product-card";

  card.dataset.productId = product.id;

  card.style.animationDelay =
    `${Math.min(index * 0.055, .4)}s`;


  const reaction =
    reactions[product.id] || null;


  const image =
    getProductImage(product, 0);


  card.innerHTML = `

    <div class="product-image">

      ${
        product.badge
          ? `
            <span class="product-badge">
              ${escapeHTML(product.badge)}
            </span>
          `
          : ""
      }


      <div class="card-actions">

        <button
          class="card-action like-action ${
            reaction === "like"
              ? "active-like"
              : ""
          }"
          data-action="like"
          aria-label="Like product"
          title="Like"
        >
          ♥
        </button>


        <button
          class="card-action dislike-action ${
            reaction === "dislike"
              ? "active-dislike"
              : ""
          }"
          data-action="dislike"
          aria-label="Dislike product"
          title="Dislike"
        >
          ×
        </button>

      </div>


      ${
        image
          ? `
            <img
              src="${escapeHTML(image)}"
              alt="${escapeHTML(product.name)}"
              loading="lazy"
              class="main-card-image"
            >

            <div
              class="image-placeholder"
              style="display:none;"
            >
              <strong>${escapeHTML(product.name)}</strong>
              <span>Image Coming Soon</span>
            </div>
          `
          : `
            <div class="image-placeholder">
              <strong>${escapeHTML(product.name)}</strong>
              <span>Image Coming Soon</span>
            </div>
          `
      }

    </div>


    <div class="product-info">

      <div class="product-category">
        ${escapeHTML(product.category)}
      </div>


      <h3>
        ${escapeHTML(product.name)}
      </h3>


      <p class="product-description">
        ${escapeHTML(product.description)}
      </p>


      <div class="price-row">

        <span class="old-price">
          ${money(product.oldPrice)}
        </span>

        <strong class="new-price">
          ${money(product.price)}
        </strong>

      </div>


      ${
        product.colors && product.colors.length
          ? `
            <div class="color-row">

              ${product.colors.map(
                (color, colorIndex) => `
                  <button
                    class="color-dot ${
                      colorIndex === 0
                        ? "selected"
                        : ""
                    }"
                    data-color-index="${colorIndex}"
                    title="${escapeHTML(color.name)}"
                    aria-label="${escapeHTML(color.name)}"
                  >
                    <img
                      src="${escapeHTML(color.image)}"
                      alt="${escapeHTML(color.name)}"
                      loading="lazy"
                    >
                  </button>
                `
              ).join("")}

            </div>
          `
          : `
            <div class="color-row">
              <span
                style="
                  font-size:9px;
                  color:#999;
                  letter-spacing:.08em;
                  text-transform:uppercase;
                "
              >
                Image pending
              </span>
            </div>
          `
      }


      <div class="card-bottom">

        <button
          class="details-btn"
          data-action="details"
        >
          View Details
        </button>


        <button
          class="add-btn"
          data-action="add"
        >
          Add to Cart
        </button>

      </div>

    </div>

  `;


  /* -------------------------------------------------------
     COLOR SWITCH
     ------------------------------------------------------- */

  const imageElement =
    card.querySelector(".main-card-image");


  const colorButtons =
    card.querySelectorAll(".color-dot");


  colorButtons.forEach(button => {

    button.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        const colorIndex =
          Number(
            button.dataset.colorIndex
          );


        colorButtons.forEach(
          item =>
            item.classList.remove("selected")
        );


        button.classList.add("selected");


        const colorImage =
          getProductImage(
            product,
            colorIndex
          );


        if (imageElement && colorImage) {

          imageElement.src =
            colorImage;

        }

      }
    );

  });


  /* -------------------------------------------------------
     CARD ACTIONS
     ------------------------------------------------------- */

  card.querySelectorAll(
    "[data-action]"
  ).forEach(button => {

    button.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        const action =
          button.dataset.action;


        if (action === "like") {

          setReaction(
            product.id,
            "like"
          );

          refreshCardReaction(
            card,
            product.id
          );

        }


        if (action === "dislike") {

          setReaction(
            product.id,
            "dislike"
          );

          refreshCardReaction(
            card,
            product.id
          );

        }


        if (action === "details") {

          openProductModal(
            product.id
          );

        }


        if (action === "add") {

          addToCart(
            product.id,
            0,
            product.sizes[0],
            1
          );

        }

      }
    );

  });


  return card;

}


/* =========================================================
   REACTIONS
   ========================================================= */

function setReaction(productId, type) {

  if (
    reactions[productId] === type
  ) {

    delete reactions[productId];

    showToast(
      type === "like"
        ? "Like removed"
        : "Dislike removed"
    );

  } else {

    reactions[productId] = type;

    showToast(
      type === "like"
        ? "Added to liked products"
        : "Disliked"
    );

  }


  saveStorage(
    "mehka_reactions",
    reactions
  );

}


function refreshCardReaction(card, productId) {

  const reaction =
    reactions[productId] || null;


  const like =
    card.querySelector(".like-action");

  const dislike =
    card.querySelector(".dislike-action");


  if (like) {

    like.classList.toggle(
      "active-like",
      reaction === "like"
    );

  }


  if (dislike) {

    dislike.classList.toggle(
      "active-dislike",
      reaction === "dislike"
    );

  }

}


/* =========================================================
   PRODUCT MODAL
   ========================================================= */

function openProductModal(productId) {

  const product =
    getProduct(productId);


  if (!product) return;


  selectedProduct = product;

  selectedColorIndex = 0;

  selectedSize =
    product.sizes &&
    product.sizes.length
      ? product.sizes[0]
      : null;


  renderProductModal();


  productModal.classList.add("show");

  productModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );

}


function renderProductModal() {

  if (!selectedProduct) return;


  const product =
    selectedProduct;


  const image =
    getProductImage(
      product,
      selectedColorIndex
    );


  modalContent.innerHTML = `

    <div class="modal-product">

      <div class="modal-gallery">

        ${
          image
            ? `
              <img
                src="${escapeHTML(image)}"
                alt="${escapeHTML(product.name)}"
              >
            `
            : `
              <div class="image-placeholder">
                <strong>
                  ${escapeHTML(product.name)}
                </strong>
                <span>
                  Image Coming Soon
                </span>
              </div>
            `
        }

      </div>


      <div class="modal-info">

        <div class="product-category">
          ${escapeHTML(product.category)}
        </div>


        <h2>
          ${escapeHTML(product.name)}
        </h2>


        <p class="product-description">
          ${escapeHTML(product.description)}
        </p>


        <div class="modal-price">

          <strong>
            ${money(product.price)}
          </strong>

          <del>
            ${money(product.oldPrice)}
          </del>

        </div>


        ${
          product.colors &&
          product.colors.length
            ? `
              <label class="option-label">
                Colour:
                <span id="modalColorName">
                  ${escapeHTML(
                    getProductColorName(
                      product,
                      selectedColorIndex
                    )
                  )}
                </span>
              </label>

              <div class="option-buttons">

                ${product.colors.map(
                  (color, index) => `
                    <button
                      class="option-button ${
                        index === selectedColorIndex
                          ? "selected"
                          : ""
                      }"
                      data-modal-color="${index}"
                    >
                      ${escapeHTML(color.name)}
                    </button>
                  `
                ).join("")}

              </div>
            `
            : ""
        }


        ${
          product.sizes &&
          product.sizes.length
            ? `
              <label class="option-label">
                Size
              </label>

              <div class="option-buttons">

                ${product.sizes.map(
                  size => `
                    <button
                      class="option-button ${
                        size === selectedSize
                          ? "selected"
                          : ""
                      }"
                      data-modal-size="${escapeHTML(size)}"
                    >
                      ${escapeHTML(size)}
                    </button>
                  `
                ).join("")}

              </div>
            `
            : ""
        }


        <button
          class="primary-btn modal-add"
          id="modalAddToCart"
        >
          Add to Cart
          <span>→</span>
        </button>

      </div>

    </div>

  `;


  /* COLOR BUTTONS */

  modalContent.querySelectorAll(
    "[data-modal-color]"
  ).forEach(button => {

    button.addEventListener(
      "click",
      () => {

        selectedColorIndex =
          Number(
            button.dataset.modalColor
          );

        renderProductModal();

      }
    );

  });


  /* SIZE BUTTONS */

  modalContent.querySelectorAll(
    "[data-modal-size]"
  ).forEach(button => {

    button.addEventListener(
      "click",
      () => {

        selectedSize =
          button.dataset.modalSize;

        renderProductModal();

      }
    );

  });


  /* ADD */

  const modalAdd =
    document.getElementById(
      "modalAddToCart"
    );


  if (modalAdd) {

    modalAdd.addEventListener(
      "click",
      () => {

        addToCart(
          product.id,
          selectedColorIndex,
          selectedSize,
          1
        );

        closeProductModal();

      }
    );

  }

}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeProductModal() {

  productModal.classList.remove(
    "show"
  );

  productModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );


  selectedProduct = null;

}


/* =========================================================
   CART
   ========================================================= */

function addToCart(
  productId,
  colorIndex = 0,
  size = null,
  quantity = 1
) {

  const product =
    getProduct(productId);


  if (!product) return;


  if (
    !product.colors ||
    !product.colors.length
  ) {

    showToast(
      "This product image is not available yet."
    );

    return;

  }


  if (
    !size &&
    product.sizes &&
    product.sizes.length
  ) {

    size = product.sizes[0];

  }


  const color =
    getProductColorName(
      product,
      colorIndex
    );


  const existing =
    cart.find(item =>
      item.productId === productId &&
      item.colorIndex === colorIndex &&
      item.size === size
    );


  if (existing) {

    existing.quantity += quantity;

  } else {

    cart.push({

      productId,
      colorIndex,
      color,
      size,
      quantity

    });

  }


  saveStorage(
    "mehka_cart",
    cart
  );


  renderCart();


  openCart();


  showToast(
    `${product.name} added to cart`
  );

}


/* =========================================================
   CART RENDER
   ========================================================= */

function renderCart() {

  const totalItems =
    cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );


  const totalPrice =
    cart.reduce(
      (total, item) => {

        const product =
          getProduct(item.productId);

        return total +
          (
            product
              ? product.price *
                item.quantity
              : 0
          );

      },
      0
    );


  cartCount.textContent =
    totalItems;


  cartTotal.textContent =
    money(totalPrice);


  if (!cart.length) {

    cartItems.innerHTML = `

      <div class="empty-cart">

        <strong>
          Your cart is empty.
        </strong>

        <span>
          Add something you love.
        </span>

      </div>

    `;

    return;

  }


  cartItems.innerHTML = "";


  cart.forEach(
    (item, index) => {

      const product =
        getProduct(
          item.productId
        );


      if (!product) return;


      const image =
        getProductImage(
          product,
          item.colorIndex
        );


      const itemElement =
        document.createElement("div");


      itemElement.className =
        "cart-item";


      itemElement.innerHTML = `

        <div class="cart-item-image">

          ${
            image
              ? `
                <img
                  src="${escapeHTML(image)}"
                  alt="${escapeHTML(product.name)}"
                >
              `
              : `
                <div
                  class="image-placeholder"
                  style="min-height:94px;"
                >
                  <span>
                    Pending
                  </span>
                </div>
              `
          }

        </div>


        <div class="cart-item-info">

          <h4>
            ${escapeHTML(product.name)}
          </h4>


          <p>
            Colour: ${escapeHTML(item.color)}
            <br>
            Size: ${escapeHTML(item.size || "Standard")}
          </p>


          <div class="cart-item-price">
            ${money(
              product.price *
              item.quantity
            )}
          </div>


          <div class="quantity">

            <button
              data-cart-action="minus"
              data-index="${index}"
            >
              −
            </button>

            <span>
              ${item.quantity}
            </span>

            <button
              data-cart-action="plus"
              data-index="${index}"
            >
              +
            </button>

          </div>

        </div>


        <button
          class="remove-item"
          data-cart-action="remove"
          data-index="${index}"
        >
          Remove
        </button>

      `;


      cartItems.appendChild(
        itemElement
      );

    }
  );


  /* CART CONTROLS */

  cartItems.querySelectorAll(
    "[data-cart-action]"
  ).forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const index =
          Number(button.dataset.index);

        const action =
          button.dataset.cartAction;


        if (action === "plus") {

          cart[index].quantity++;

        }


        if (action === "minus") {

          cart[index].quantity--;

          if (
            cart[index].quantity <= 0
          ) {

            cart.splice(index, 1);

          }

        }


        if (action === "remove") {

          cart.splice(index, 1);

          showToast(
            "Product removed from cart"
          );

        }


        saveStorage(
          "mehka_cart",
          cart
        );


        renderCart();

      }
    );

  });

}


/* =========================================================
   CART OPEN
   ========================================================= */

function openCart() {

  document.body.classList.add(
    "cart-open"
  );

  cartDrawer.setAttribute(
    "aria-hidden",
    "false"
  );

}


/* =========================================================
   CART CLOSE
   ========================================================= */

function closeCart() {

  document.body.classList.remove(
    "cart-open"
  );

  cartDrawer.setAttribute(
    "aria-hidden",
    "true"
  );

}


/* =========================================================
   CHECKOUT
   ========================================================= */

function openCheckout() {

  if (!cart.length) {

    showToast(
      "Your cart is empty"
    );

    return;

  }


  const total =
    cart.reduce(
      (sum, item) => {

        const product =
          getProduct(item.productId);

        return sum +
          (
            product
              ? product.price *
                item.quantity
              : 0
          );

      },
      0
    );


  const checkoutModal =
    document.createElement("div");


  checkoutModal.className =
    "modal show";


  checkoutModal.id =
    "checkoutModal";


  checkoutModal.innerHTML = `

    <div class="modal-box">

      <button
        class="modal-close"
        id="checkoutClose"
      >
        ×
      </button>


      <div class="checkout-summary">

        <p class="eyebrow">
          MEHKA GARMENT / CHECKOUT
        </p>


        <h2>
          Complete your order.
        </h2>


        <div class="checkout-items">

          ${cart.map(item => {

            const product =
              getProduct(
                item.productId
              );

            if (!product) return "";

            return `

              <div class="checkout-row">

                <span>
                  ${escapeHTML(
                    product.name
                  )}
                  × ${item.quantity}
                  <br>
                  <small>
                    ${escapeHTML(item.color)}
                    / ${escapeHTML(item.size || "Standard")}
                  </small>
                </span>

                <strong>
                  ${money(
                    product.price *
                    item.quantity
                  )}
                </strong>

              </div>

            `;

          }).join("")}

        </div>


        <div class="checkout-total">

          <span>
            Total
          </span>

          <strong>
            ${money(total)}
          </strong>

        </div>


        <form
          id="checkoutForm"
          class="form-grid"
        >

          <div class="form-field">

            <label>
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
            >

          </div>


          <div class="form-field">

            <label>
              Phone
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="03XX XXXXXXX"
              required
            >

          </div>


          <div class="form-field">

            <label>
              City
            </label>

            <input
              type="text"
              name="city"
              placeholder="Your city"
              required
            >

          </div>


          <div class="form-field">

            <label>
              Area
            </label>

            <input
              type="text"
              name="area"
              placeholder="Area / locality"
              required
            >

          </div>


          <div class="form-field full">

            <label>
              Complete Address
            </label>

            <textarea
              name="address"
              placeholder="House, street, area and complete delivery address"
              required
            ></textarea>

          </div>


          <div class="form-field full">

            <label>
              Order Note
            </label>

            <textarea
              name="note"
              placeholder="Optional note..."
            ></textarea>

          </div>


          <div class="form-field full">

            <button
              type="submit"
              class="primary-btn full"
            >
              Place Order
              <span>→</span>
            </button>

          </div>

        </form>


        <p
          style="
            margin-top:15px;
            color:#999;
            font-size:9px;
            line-height:1.6;
          "
        >
          This is the front-end checkout.
          Connect your preferred order/payment service
          later to receive live orders.
        </p>

      </div>

    </div>

  `;


  document.body.appendChild(
    checkoutModal
  );


  const closeButton =
    document.getElementById(
      "checkoutClose"
    );


  closeButton.addEventListener(
    "click",
    () => {

      checkoutModal.remove();

    }
  );


  checkoutModal.addEventListener(
    "click",
    event => {

      if (
        event.target === checkoutModal
      ) {

        checkoutModal.remove();

      }

    }
  );


  const form =
    document.getElementById(
      "checkoutForm"
    );


  form.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const formData =
        new FormData(form);


      const order = {

        id:
          "MG-" +
          Date.now()
            .toString()
            .slice(-8),

        customer: {

          name:
            formData.get("name"),

          phone:
            formData.get("phone"),

          city:
            formData.get("city"),

          area:
            formData.get("area"),

          address:
            formData.get("address"),

          note:
            formData.get("note")

        },

        items: [...cart],

        total,

        createdAt:
          new Date().toISOString()

      };


      const orders =
        loadStorage(
          "mehka_orders",
          []
        );


      orders.push(order);


      saveStorage(
        "mehka_orders",
        orders
      );


      cart = [];


      saveStorage(
        "mehka_cart",
        cart
      );


      renderCart();


      checkoutModal.remove();


      closeCart();


      showToast(
        `Order ${order.id} created successfully`
      );

    }
  );

}


/* =========================================================
   POD CUSTOMIZER
   ========================================================= */

function openPodCustomizer() {

  selectedPodDesign = null;


  const podModal =
    document.createElement("div");


  podModal.className =
    "modal show";


  podModal.id =
    "podCustomizer";


  podModal.innerHTML = `

    <div class="modal-box">

      <button
        class="modal-close"
        id="podClose"
      >
        ×
      </button>


      <div class="pod-form">

        <p class="eyebrow">
          MEHKA CUSTOM STUDIO
        </p>


        <h2>
          Create your own tee.
        </h2>


        <p class="form-note">
          Choose white or black, select one of the
          available designs, or tell us what you want
          printed. You can also provide your own artwork
          when a live order system is connected.
        </p>


        <div class="form-grid">

          <div class="form-field">

            <label>
              T-Shirt Colour
            </label>

            <select id="podColour">

              <option value="pod-white">
                White
              </option>

              <option value="pod-black">
                Black
              </option>

            </select>

          </div>


          <div class="form-field">

            <label>
              Size
            </label>

            <select id="podSize">

              <option>S</option>
              <option selected>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>

            </select>

          </div>


          <div class="form-field full">

            <label>
              Choose a design
            </label>

            <div class="pod-designs">

              ${podDesigns.map(
                (design, index) => `

                  <button
                    type="button"
                    class="pod-design"
                    data-pod-design="${index}"
                    title="${escapeHTML(design.name)}"
                  >

                    <img
                      src="${escapeHTML(design.image)}"
                      alt="${escapeHTML(design.name)}"
                    >

                  </button>

                `
              ).join("")}

            </div>

          </div>


          <div class="form-field full">

            <label>
              Custom Print / Text
            </label>

            <textarea
              id="podText"
              placeholder="Write your logo, text, artwork idea or custom instructions..."
            ></textarea>

          </div>


          <div class="form-field full">

            <label>
              Artwork File
            </label>

            <input
              id="podFile"
              type="file"
              accept="image/*"
            >

            <span class="file-note">
              Artwork upload is available as a front-end
              selection. Actual file receiving requires
              a connected backend/order service.
            </span>

          </div>


          <div class="form-field full">

            <button
              type="button"
              class="primary-btn full"
              id="podAdd"
            >
              Add Custom Tee to Cart
              <span>→</span>
            </button>

          </div>

        </div>

      </div>

    </div>

  `;


  document.body.appendChild(
    podModal
  );


  /* CLOSE */

  document.getElementById(
    "podClose"
  ).addEventListener(
    "click",
    () => podModal.remove()
  );


  /* DESIGN SELECT */

  podModal.querySelectorAll(
    "[data-pod-design]"
  ).forEach(button => {

    button.addEventListener(
      "click",
      () => {

        podModal.querySelectorAll(
          "[data-pod-design]"
        ).forEach(item =>
          item.classList.remove(
            "selected"
          )
        );


        button.classList.add(
          "selected"
        );


        selectedPodDesign =
          Number(
            button.dataset.podDesign
          );

      }
    );

  });


  /* ADD POD */

  document.getElementById(
    "podAdd"
  ).addEventListener(
    "click",
    () => {

      const productId =
        document.getElementById(
          "podColour"
        ).value;


      const size =
        document.getElementById(
          "podSize"
        ).value;


      addToCart(
        productId,
        0,
        size,
        1
      );


      podModal.remove();

    }
  );

}


/* =========================================================
   EVENTS
   ========================================================= */

function setupEvents() {

  /* CART */

  cartOpen.addEventListener(
    "click",
    openCart
  );


  cartClose.addEventListener(
    "click",
    closeCart
  );


  cartOverlay.addEventListener(
    "click",
    closeCart
  );


  /* MODAL */

  modalClose.addEventListener(
    "click",
    closeProductModal
  );


  productModal.addEventListener(
    "click",
    event => {

      if (
        event.target === productModal
      ) {

        closeProductModal();

      }

    }
  );


  /* ESCAPE */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {

        closeProductModal();

        closeCart();

        const pod =
          document.getElementById(
            "podCustomizer"
          );

        if (pod) pod.remove();


        const checkout =
          document.getElementById(
            "checkoutModal"
          );

        if (checkout) {
          checkout.remove();
        }

      }

    }
  );


  /* CHECKOUT */

  checkoutBtn.addEventListener(
    "click",
    openCheckout
  );


  /* POD */

  document.querySelectorAll(
    '[data-product="pod-white"]'
  ).forEach(button => {

    button.addEventListener(
      "click",
      event => {

        event.preventDefault();

        openPodCustomizer();

      }
    );

  });


  /* FOOTER / GENERAL */

  document.querySelectorAll(
    'a[href^="#"]'
  ).forEach(link => {

    link.addEventListener(
      "click",
      event => {

        const targetId =
          link.getAttribute("href");


        if (
          targetId === "#"
        ) return;


        const target =
          document.querySelector(
            targetId
          );


        if (target) {

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      }
    );

  });

}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

function setupScrollReveal() {

  const elements =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    !("IntersectionObserver" in window)
  ) {

    elements.forEach(
      element =>
        element.classList.add(
          "visible"
        )
    );

    return;

  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

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

          }
        );

      },
      {
        threshold: .12
      }
    );


  elements.forEach(
    element =>
      observer.observe(element)
  );

}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimer = null;


function showToast(message) {

  let toast =
    document.querySelector(
      ".toast"
    );


  if (!toast) {

    toast =
      document.createElement(
        "div"
      );

    toast.className =
      "toast";

    document.body.appendChild(
      toast
    );

  }


  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  clearTimeout(
    toastTimer
  );


  toastTimer =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      2500
    );

}


/* =========================================================
   YEAR
   ========================================================= */

function updateYear() {

  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }

}


/* =========================================================
   CONSOLE INFO
   ========================================================= */

console.log(
  "MEHKA GARMENT — Premium Menswear"
);

console.log(
  `${products.length} products loaded.`
);


/* =========================================================
   END
   ========================================================= */
