/* =========================================================
   MEHKA GARMENTS — script.js
   ORGANIZED + FIXED IMAGE MAPPING
   ========================================================= */

(function () {
  "use strict";

  /* =========================================================
     1. CONFIGURATION
     ========================================================= */

  const CONFIG = {
    brand: "MEHKA GARMENTS",
    currency: "Rs.",

    contact: {
      email: "EMAIL_HERE",
      phone: "PHONE_HERE",
      whatsappNumber: "WHATSAPP_NUMBER_HERE",
      address: "SHOP_ADDRESS_HERE"
    },

    storageKeys: {
      cart: "mehka_cart_v1",
      reactions: "mehka_reactions_v1"
    },

    /* EXACT GitHub folder */
    imageBase: "assets/images/"
  };


  /* =========================================================
     2. IMAGE FILES
     =========================================================
     IMPORTANT:
     These names are EXACTLY the filenames you provided.
     Do not change capitalization/spelling.
     ========================================================= */

  const IMAGES = {
    /* ---------- FORMAL SHIRTS ---------- */
    formalWhite: "signature-formal-shirt-white.jpg",
    formalBlack: "signature-formal-shirt-black.jpg",
    formalOlive: "signature-formal-shirt-olive.jpg",
    formalSkyBlue: "signature-formal-shirt-sky-blue.jpg",

    /* ---------- CHECK SHIRTS ---------- */
    checkBlackIvory: "premium-check-shirt-black-ivory-stripe.jpg",
    checkIvorySand: "premium-check-shirt-ivory-sand.jpg",
    checkMidnightNavy: "premium-check-shirt-midnight-navy.jpg",
    checkNavyBurgundy: "premium-check-shirt-navy-burgundy.jpg",
    checkSlateBlue: "premium-check-shirt-slate-blue.jpg",

    /* ---------- SIMPLE POLO ---------- */
    poloBurgundy: "simple-polo-burgendy-wine.jpg",
    poloForest: "simple-polo-deep-forest-green.jpg",
    poloBlack: "simple-polo-jet-black.jpg",
    poloTeal: "simple-polo-ocean-teal-blue.jpg",
    poloMocha: "simple-polo-rich-mocha-brown.jpg",

    /* ---------- STRIPE POLOS ---------- */
    classicContrast: "classic-contrast-polo.jpg",
    executiveStripe: "executive-stripe-polo.jpg",
    heritageStripe: "heritage-stripe-polo.jpg",
    signatureStripe: "signature-stripe-polo.jpg",
    urbanLuxeStripe: "urban-luxe-stripe-polo.jpg",

    /* ---------- COLLAR T-SHIRTS ---------- */
    collarBlack: "essential-collar-tshirt-black.jpeg",
    collarBrown: "essential-collar-tshirt-mocha-brown.jpg",
    collarNavy: "essential-collar-tshirt-navy-blue.jpg",
    collarGreen: "essential-collar-tshirt-sage-green.jpg",
    collarWhite: "essential-collar-tshirt-white.jpg",

    /* ---------- ESSENTIALS ---------- */
    jetBlackEssential: "jet-black-essential.jpg",
    oliveEssential: "olive-green-essential.jpg",
    lightGreyEssential: "poder-light-grey.jpg",
    silverGreyEssential: "silver-grey-essential.jpg",

    /* ---------- BRUSHED DENIM ---------- */
    brushedBlue: "primium-brushed-denim-blue.jpg",
    brushedDarkBlue: "primium-brushed-denim-dark-blue.jpg",
    brushedDarkGrey: "primium-brushed-denim-dark-grey.jpg",
    brushedGrey: "primium-brushed-denim-grey.jpg",
    brushedLightBlue: "primium-brushed-denim-light-blue.jpg"
  };


  /* =========================================================
     3. PRODUCT DATA
     ========================================================= */

  const SIZE_SET_STANDARD = ["S", "M", "L", "XL"];

  const PRODUCTS = [

    /* =====================================================
       SHIRTS & T-SHIRTS
       ===================================================== */

    {
      id: "simple-formal-shirt",
      name: "Simple Formal Shirt",
      category: "shirts",
      price: 3200,
      salePrice: 2499,
      image: IMAGES.formalWhite,

      description:
        "A premium formal shirt with a clean modern fit, comfortable fabric and an elegant everyday finish.",

      sizes: SIZE_SET_STANDARD,

      colors: [
        {
          name: "White",
          hex: "#f5f3ee",
          image: IMAGES.formalWhite
        },
        {
          name: "Black",
          hex: "#171717",
          image: IMAGES.formalBlack
        },
        {
          name: "Olive",
          hex: "#5c6044",
          image: IMAGES.formalOlive
        },
        {
          name: "Sky Blue",
          hex: "#a9c4d8",
          image: IMAGES.formalSkyBlue
        }
      ]
    },


    {
      id: "simple-check-shirt",
      name: "Simple Check Shirt",
      category: "shirts",
      price: 3600,
      salePrice: 2799,

      image: IMAGES.checkBlackIvory,

      description:
        "A premium check shirt designed for a refined casual look with a comfortable modern fit.",

      sizes: SIZE_SET_STANDARD,

      colors: [
        {
          name: "Black / Ivory",
          pattern: "check",
          hex: "#3a382f",
          image: IMAGES.checkBlackIvory
        },
        {
          name: "Ivory / Sand",
          pattern: "check",
          hex: "#c8b99c",
          image: IMAGES.checkIvorySand
        },
        {
          name: "Midnight Navy",
          pattern: "check",
          hex: "#28344a",
          image: IMAGES.checkMidnightNavy
        },
        {
          name: "Navy / Burgundy",
          pattern: "check",
          hex: "#30384d",
          image: IMAGES.checkNavyBurgundy
        },
        {
          name: "Slate Blue",
          pattern: "check",
          hex: "#65768a",
          image: IMAGES.checkSlateBlue
        }
      ]
    },


    {
      id: "simple-polo",
      name: "Simple Polo",
      category: "shirts",
      price: 2600,
      salePrice: 1999,

      image: IMAGES.poloBlack,

      description:
        "A premium everyday polo with a clean silhouette, soft feel and modern men's fashion finish.",

      sizes: SIZE_SET_STANDARD,

      colors: [
        {
          name: "Jet Black",
          hex: "#171717",
          image: IMAGES.poloBlack
        },
        {
          name: "Burgundy Wine",
          hex: "#641f2c",
          image: IMAGES.poloBurgundy
        },
        {
          name: "Deep Forest Green",
          hex: "#294838",
          image: IMAGES.poloForest
        },
        {
          name: "Ocean Teal Blue",
          hex: "#1f5960",
          image: IMAGES.poloTeal
        },
        {
          name: "Rich Mocha Brown",
          hex: "#634a3b",
          image: IMAGES.poloMocha
        }
      ]
    },


    {
      id: "polo-stripe-color",
      name: "Polo Stripe Color",
      category: "shirts",
      price: 2900,
      salePrice: 2199,

      image: IMAGES.classicContrast,

      description:
        "A premium striped polo collection with a modern sporty-luxury appearance.",

      sizes: SIZE_SET_STANDARD,

      colors: [
        {
          name: "Classic Contrast",
          pattern: "stripe",
          s1: "#28344a",
          s2: "#f2efe6",
          image: IMAGES.classicContrast
        },
        {
          name: "Executive Stripe",
          pattern: "stripe",
          s1: "#222222",
          s2: "#a9a9a9",
          image: IMAGES.executiveStripe
        },
        {
          name: "Heritage Stripe",
          pattern: "stripe",
          s1: "#3e352d",
          s2: "#d2c3a7",
          image: IMAGES.heritageStripe
        },
        {
          name: "Signature Stripe",
          pattern: "stripe",
          s1: "#25334a",
          s2: "#e6e0d2",
          image: IMAGES.signatureStripe
        },
        {
          name: "Urban Luxe Stripe",
          pattern: "stripe",
          s1: "#262626",
          s2: "#777777",
          image: IMAGES.urbanLuxeStripe
        }
      ]
    },


    {
      id: "simple-collar-tshirt",
      name: "Simple Collar T-Shirt",
      category: "shirts",
      price: 2400,
      salePrice: 1799,

      image: IMAGES.collarWhite,

      description:
        "A clean collar T-shirt combining the comfort of a tee with a smart premium appearance.",

      sizes: SIZE_SET_STANDARD,

      colors: [
        {
          name: "White",
          hex: "#f5f3ee",
          image: IMAGES.collarWhite
        },
        {
          name: "Black",
          hex: "#171717",
          image: IMAGES.collarBlack
        },
        {
          name: "Mocha Brown",
          hex: "#684b3c",
          image: IMAGES.collarBrown
        },
        {
          name: "Navy Blue",
          hex: "#293953",
          image: IMAGES.collarNavy
        },
        {
          name: "Sage Green",
          hex: "#84927a",
          image: IMAGES.collarGreen
        }
      ]
    },


    /* =====================================================
       PANTS
       ===================================================== */

    {
      id: "cotton-pant",
      name: "Cotton Pant",
      category: "pants",
      price: 3800,
      salePrice: 2999,

      /* No matching cotton-pant file supplied */
      image: IMAGES.lightGreyEssential,

      description:
        "A clean everyday cotton pant with a comfortable modern fit.",

      sizes: SIZE_SET_STANDARD,

      colors: [
        {
          name: "Light Grey",
          hex: "#aaa79c",
          image: IMAGES.lightGreyEssential
        },
        {
          name: "Olive Green",
          hex: "#5c6044",
          image: IMAGES.oliveEssential
        },
        {
          name: "Jet Black",
          hex: "#171717",
          image: IMAGES.jetBlackEssential
        },
        {
          name: "Silver Grey",
          hex: "#a6a6a0",
          image: IMAGES.silverGreyEssential
        }
      ]
    },


    {
      id: "formal-washing-wear",
      name: "Formal Washing Wear",
      category: "pants",
      price: 4000,
      salePrice: 3199,

      image: IMAGES.silverGreyEssential,

      description:
        "A refined washing-wear style designed for a smart formal appearance.",

      sizes: SIZE_SET_STANDARD,

      colors: [
        {
          name: "Silver Grey",
          hex: "#a6a6a0",
          image: IMAGES.silverGreyEssential
        },
        {
          name: "Light Grey",
          hex: "#aaa79c",
          image: IMAGES.lightGreyEssential
        },
        {
          name: "Jet Black",
          hex: "#171717",
          image: IMAGES.jetBlackEssential
        }
      ]
    },


    {
      id: "simple-denim",
      name: "Simple Denim",
      category: "pants",
      price: 4500,
      salePrice: 3499,

      image: IMAGES.brushedBlue,

      description:
        "A versatile denim with a clean modern appearance for everyday wear.",

      sizes: SIZE_SET_STANDARD,

      colors: [
        {
          name: "Blue",
          hex: "#405776",
          image: IMAGES.brushedBlue
        },
        {
          name: "Dark Blue",
          hex: "#26374f",
          image: IMAGES.brushedDarkBlue
        }
      ]
    },


    {
      id: "brushed-denim",
      name: "Brushed Denim",
      category: "pants",
      price: 4700,
      salePrice: 3699,

      image: IMAGES.brushedBlue,

      description:
        "Soft brushed denim with a premium finish and comfortable everyday fit.",

      sizes: SIZE_SET_STANDARD,

      colors: [
        {
          name: "Light Blue",
          hex: "#8da0b5",
          image: IMAGES.brushedLightBlue
        },
        {
          name: "Blue",
          hex: "#405776",
          image: IMAGES.brushedBlue
        },
        {
          name: "Dark Blue",
          hex: "#26374f",
          image: IMAGES.brushedDarkBlue
        },
        {
          name: "Grey",
          hex: "#777875",
          image: IMAGES.brushedGrey
        },
        {
          name: "Dark Grey",
          hex: "#3d4142",
          image: IMAGES.brushedDarkGrey
        }
      ]
    },


    {
      id: "simple-straight-denim",
      name: "Simple Straight Denim",
      category: "pants",
      price: 4600,
      salePrice: 3599,

      image: IMAGES.brushedDarkBlue,

      description:
        "A clean straight denim designed for a timeless modern fit.",

      sizes: SIZE_SET_STANDARD,

      colors: [
        {
          name: "Dark Blue",
          hex: "#26374f",
          image: IMAGES.brushedDarkBlue
        },
        {
          name: "Grey",
          hex: "#777875",
          image: IMAGES.brushedGrey
        }
      ]
    },


    /* =====================================================
       TROUSERS
       ===================================================== */

    {
      id: "casual-trouser",
      name: "Casual Trouser",
      category: "trousers",
      price: 3700,
      salePrice: 2899,

      image: IMAGES.oliveEssential,

      description:
        "A relaxed premium trouser with a clean modern silhouette.",

      sizes: SIZE_SET_STANDARD,

      colors: [
        {
          name: "Olive Green",
          hex: "#5c6044",
          image: IMAGES.oliveEssential
        },
        {
          name: "Jet Black",
          hex: "#171717",
          image: IMAGES.jetBlackEssential
        },
        {
          name: "Light Grey",
          hex: "#aaa79c",
          image: IMAGES.lightGreyEssential
        }
      ]
    },


    {
      id: "china-necked-trouser",
      name: "China Necked Trouser",
      category: "trousers",
      price: 3900,
      salePrice: 3099,

      image: IMAGES.lightGreyEssential,

      description:
        "A clean and refined trouser style for smart casual dressing.",

      sizes: SIZE_SET_STANDARD,

      colors: [
        {
          name: "Light Grey",
          hex: "#aaa79c",
          image: IMAGES.lightGreyEssential
        },
        {
          name: "Black",
          hex: "#171717",
          image: IMAGES.jetBlackEssential
        }
      ]
    },


    {
      id: "maggi-trouser",
      name: "Maggi Trouser",
      category: "trousers",
      price: 3600,
      salePrice: 2799,

      image: IMAGES.oliveEssential,

      description:
        "A comfortable everyday trouser with a lightweight modern appearance.",

      sizes: SIZE_SET_STANDARD,

      colors: [
        {
          name: "Olive Green",
          hex: "#5c6044",
          image: IMAGES.oliveEssential
        },
        {
          name: "Grey",
          hex: "#777875",
          image: IMAGES.silverGreyEssential
        }
      ]
    },


    {
      id: "korean-trouser",
      name: "Korean Trouser",
      category: "trousers",
      price: 4100,
      salePrice: 3199,

      image: IMAGES.jetBlackEssential,

      description:
        "A modern tapered trouser with a clean Korean-inspired silhouette.",

      sizes: SIZE_SET_STANDARD,

      colors: [
        {
          name: "Black",
          hex: "#171717",
          image: IMAGES.jetBlackEssential
        },
        {
          name: "Grey",
          hex: "#777875",
          image: IMAGES.silverGreyEssential
        }
      ]
    },


    /* =====================================================
       SHORTS
       ===================================================== */

    {
      id: "cotton-short",
      name: "Cotton Short",
      category: "shorts",
      price: 2200,
      salePrice: 1699,

      image: IMAGES.poloBlack,

      description:
        "A clean casual short designed for comfort and warm-weather styling.",

      sizes: SIZE_SET_STANDARD,

      colors: [
        {
          name: "Black",
          hex: "#171717",
          image: IMAGES.poloBlack
        },
        {
          name: "Olive",
          hex: "#5c6044",
          image: IMAGES.oliveEssential
        },
        {
          name: "Grey",
          hex: "#777875",
          image: IMAGES.silverGreyEssential
        }
      ]
    },


    {
      id: "china-lekra-short",
      name: "China Lekra Short",
      category: "shorts",
      price: 2300,
      salePrice: 1799,

      image: IMAGES.lightGreyEssential,

      description:
        "A comfortable stretch-style casual short for everyday movement.",

      sizes: SIZE_SET_STANDARD,

      colors: [
        {
          name: "Light Grey",
          hex: "#aaa79c",
          image: IMAGES.lightGreyEssential
        },
        {
          name: "Olive",
          hex: "#5c6044",
          image: IMAGES.oliveEssential
        }
      ]
    },


    {
      id: "jersey-short",
      name: "Jersey Short",
      category: "shorts",
      price: 2100,
      salePrice: 1599,

      image: IMAGES.jetBlackEssential,

      description:
        "A soft jersey short made for relaxed everyday comfort.",

      sizes: SIZE_SET_STANDARD,

      colors: [
        {
          name: "Black",
          hex: "#171717",
          image: IMAGES.jetBlackEssential
        },
        {
          name: "Grey",
          hex: "#777875",
          image: IMAGES.silverGreyEssential
        }
      ]
    },


    {
      id: "hosiery-casual-shorts",
      name: "Hosiery Casual Shorts",
      category: "shorts",
      price: 1999,
      salePrice: 1499,

      image: IMAGES.silverGreyEssential,

      description:
        "A soft casual short with an easy fit for everyday wear.",

      sizes: SIZE_SET_STANDARD,

      colors: [
        {
          name: "Grey",
          hex: "#777875",
          image: IMAGES.silverGreyEssential
        },
        {
          name: "Black",
          hex: "#171717",
          image: IMAGES.jetBlackEssential
        }
      ]
    }

  ];


  /* =========================================================
     4. CATEGORY LABELS
     ========================================================= */

  const CATEGORY_LABELS = {
    shirts: "Shirts & T-Shirts",
    pants: "Pants",
    trousers: "Trousers",
    shorts: "Shorts"
  };


  /* =========================================================
     5. DOM REFERENCES
     ========================================================= */

  const $ = (selector, context) =>
    (context || document).querySelector(selector);

  const $all = (selector, context) =>
    Array.from((context || document).querySelectorAll(selector));

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


  /* =========================================================
     6. UTILITIES
     ========================================================= */

  function safe(fn, fallback) {
    try {
      return fn();
    } catch (error) {
      console.warn("MEHKA handled error:", error);

      if (typeof fallback === "function") {
        return fallback(error);
      }

      return fallback;
    }
  }


  function formatPrice(value) {
    const number = Number(value) || 0;

    return (
      CONFIG.currency +
      " " +
      number.toLocaleString("en-PK")
    );
  }


  function findProduct(id) {
    return PRODUCTS.find(product => product.id === id) || null;
  }


  function getImagePath(filename) {
    if (!filename) return "";

    return (
      CONFIG.imageBase +
      filename
    );
  }


  function prefersReducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    );
  }


  /* =========================================================
     7. TOAST
     ========================================================= */

  let toastTimer = null;

  function showToast(message) {
    if (!dom.toast) return;

    dom.toast.textContent = message;

    dom.toast.classList.add("is-visible");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
      dom.toast.classList.remove("is-visible");
    }, 2400);
  }


  /* =========================================================
     8. LOCAL STORAGE
     ========================================================= */

  const storage = {

    available: (() => {
      try {
        const testKey = "__mehka_test__";

        localStorage.setItem(testKey, "1");
        localStorage.removeItem(testKey);

        return true;
      } catch (error) {
        return false;
      }
    })(),

    get(key, fallback) {
      if (!storage.available) return fallback;

      return safe(() => {
        const raw = localStorage.getItem(key);

        return raw
          ? JSON.parse(raw)
          : fallback;
      }, fallback);
    },

    set(key, value) {
      if (!storage.available) return false;

      return safe(() => {
        localStorage.setItem(
          key,
          JSON.stringify(value)
        );

        return true;
      }, false);
    }
  };


  /* =========================================================
     9. STATE
     ========================================================= */

  const state = {

    cart: storage.get(
      CONFIG.storageKeys.cart,
      []
    ),

    reactions: storage.get(
      CONFIG.storageKeys.reactions,
      {}
    ),

    activeFilter: "all",
    searchTerm: "",

    modalProduct: null,
    modalColor: 0,
    modalSize: null,
    modalQty: 1
  };


  const cardSelection = {};


  function getCardSelection(productId) {

    if (!cardSelection[productId]) {

      cardSelection[productId] = {
        colorIndex: 0,
        size: null,
        qty: 1
      };

    }

    return cardSelection[productId];
  }


  function getReaction(productId) {

    if (!state.reactions[productId]) {

      state.reactions[productId] = {
        liked: false,
        disliked: false,
        likes: 0,
        dislikes: 0
      };

    }

    return state.reactions[productId];
  }


  function saveCart() {
    storage.set(
      CONFIG.storageKeys.cart,
      state.cart
    );
  }


  function saveReactions() {
    storage.set(
      CONFIG.storageKeys.reactions,
      state.reactions
    );
  }


  /* =========================================================
     10. IMAGE / SWATCH HELPERS
     ========================================================= */

  function swatchClass(color) {

    if (color.pattern === "check") {
      return "swatch swatch--check";
    }

    if (color.pattern === "stripe") {
      return "swatch swatch--stripe";
    }

    return "swatch";
  }


  function swatchStyle(color) {

    if (color.pattern === "stripe") {

      return `
        --s1:${color.s1};
        --s2:${color.s2};
      `;
    }

    return `
      background:${color.hex || "#ccc"};
    `;
  }


  function imageMarkup(product) {

    const src = getImagePath(product.image);

    return `
      <img
        src="${src}"
        alt="${product.name} — MEHKA GARMENTS"
        loading="lazy"
        decoding="async"
        onerror="this.onerror=null; this.style.display='none'; this.parentElement.querySelector('.product-card__placeholder').style.display='flex';"
      >

      <div
        class="product-card__placeholder"
        style="display:none;"
      >
        <strong>${product.name}</strong>
        <span>Image coming soon</span>
      </div>
    `;
  }


  /* =========================================================
     11. PRODUCT CARD
     ========================================================= */

  function productCardMarkup(product) {

    const reaction = getReaction(product.id);

    const colorsHtml = product.colors
      .map((color, index) => {

        return `
          <button
            type="button"
            class="${swatchClass(color)}"
            style="${swatchStyle(color)}"
            data-color-index="${index}"
            data-product="${product.id}"
            aria-label="Select colour ${color.name}"
            title="${color.name}"
          ></button>
        `;

      })
      .join("");


    const sizesHtml = product.sizes
      .map(size => {

        return `
          <button
            type="button"
            class="size-btn"
            data-size="${size}"
            data-product="${product.id}"
          >
            ${size}
          </button>
        `;

      })
      .join("");


    return `
      <article
        class="product-card"
        data-id="${product.id}"
        data-category="${product.category}"
      >

        <div
          class="product-card__media"
          data-open-modal="${product.id}"
        >

          ${imageMarkup(product)}

          <span class="product-card__tag">
            ${CATEGORY_LABELS[product.category] || product.category}
          </span>

        </div>


        <div class="product-card__body">

          <p class="product-card__cat">
            ${CATEGORY_LABELS[product.category] || product.category}
          </p>

          <h3 class="product-card__name">
            ${product.name}
          </h3>


          <div class="product-card__price">

            <span class="price price--old">
              ${formatPrice(product.price)}
            </span>

            <span class="price price--sale">
              ${formatPrice(product.salePrice)}
            </span>

          </div>


          <div
            class="swatch-row"
            data-role="colors"
          >
            ${colorsHtml}
          </div>


          <div
            class="size-row"
            data-role="sizes"
          >
            ${sizesHtml}
          </div>


          <div
            class="option-block--inline"
            style="
              display:flex;
              align-items:center;
              justify-content:space-between;
              margin-bottom:.9rem;
            "
          >

            <div
              class="qty-control"
              data-role="qty"
            >

              <button
                type="button"
                class="qty-btn"
                data-qty="dec"
                aria-label="Decrease quantity"
              >
                &minus;
              </button>

              <span class="qty-value">
                1
              </span>

              <button
                type="button"
                class="qty-btn"
                data-qty="inc"
                aria-label="Increase quantity"
              >
                +
              </button>

            </div>


            <div class="feedback-row">

              <button
                type="button"
                class="feedback-btn"
                data-like="${product.id}"
                aria-pressed="${reaction.liked}"
                aria-label="Like ${product.name}"
              >
                👍
                <span data-like-count>
                  ${reaction.likes}
                </span>
              </button>


              <button
                type="button"
                class="feedback-btn"
                data-dislike="${product.id}"
                aria-pressed="${reaction.disliked}"
                aria-label="Dislike ${product.name}"
              >
                👎
                <span data-dislike-count>
                  ${reaction.dislikes}
                </span>
              </button>

            </div>

          </div>


          <div class="product-card__footer">

            <button
              type="button"
              class="add-to-cart-btn"
              data-add-to-cart="${product.id}"
            >
              Add to Cart
            </button>

          </div>

        </div>

      </article>
    `;
  }


  /* =========================================================
     12. RENDER PRODUCTS
     ========================================================= */

  const revealObserver = {

    io: null,

    init() {

      this.io = new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "is-visible"
              );

              this.io.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -60px 0px"
        }
      );

    },


    observeAll(root) {

      if (!this.io || !root) return;

      $all(
        ".product-card",
        root
      ).forEach(card => {

        this.io.observe(card);

      });

    }
  };


  function renderGrid(container, products) {

    if (!container) return;


    if (!products.length) {

      container.innerHTML = "";

      return;
    }


    container.innerHTML =
      products
        .map(productCardMarkup)
        .join("");


    products.forEach(product => {

      const card =
        container.querySelector(
          `.product-card[data-id="${product.id}"]`
        );

      if (!card) return;


      const selection =
        getCardSelection(product.id);


      const swatches =
        $all(".swatch", card);


      if (swatches[selection.colorIndex]) {

        swatches[
          selection.colorIndex
        ].classList.add(
          "is-selected"
        );

      }


      if (selection.size) {

        const sizeButton =
          card.querySelector(
            `.size-btn[data-size="${selection.size}"]`
          );

        if (sizeButton) {

          sizeButton.classList.add(
            "is-selected"
          );

        }

      }


      const qtyValue =
        card.querySelector(
          ".qty-value"
        );

      if (qtyValue) {

        qtyValue.textContent =
          selection.qty;

      }

    });


    revealObserver.observeAll(
      container
    );

    tiltObserver.attach(
      container
    );
  }


  function renderAllGrids() {

    safe(() => {

      renderGrid(
        dom.shirtsGrid,
        PRODUCTS.filter(
          product =>
            product.category === "shirts"
        )
      );

    });


    safe(() => {

      renderGrid(
        dom.pantsGrid,
        PRODUCTS.filter(
          product =>
            product.category === "pants"
        )
      );

    });


    safe(() => {

      renderGrid(
        dom.trousersGrid,
        PRODUCTS.filter(
          product =>
            product.category === "trousers"
        )
      );

    });


    safe(() => {

      renderGrid(
        dom.shortsGrid,
        PRODUCTS.filter(
          product =>
            product.category === "shorts"
        )
      );

    });


    renderFeatured();
  }


  function renderFeatured() {

    let products =
      PRODUCTS.slice();


    if (
      state.activeFilter !== "all"
    ) {

      products =
        products.filter(
          product =>
            product.category ===
            state.activeFilter
        );

    }


    const search =
      state.searchTerm
        .trim()
        .toLowerCase();


    if (search) {

      products =
        products.filter(product => {

          return (
            product.name
              .toLowerCase()
              .includes(search)

            ||

            product.category
              .toLowerCase()
              .includes(search)

            ||

            (
              CATEGORY_LABELS[
                product.category
              ] || ""
            )
              .toLowerCase()
              .includes(search)
          );

        });

    }


    renderGrid(
      dom.featuredGrid,
      products
    );


    if (dom.emptyState) {

      dom.emptyState.hidden =
        products.length !== 0;

    }

  }


  /* =========================================================
     13. FILTER
     ========================================================= */

  function initFilters() {

    if (!dom.filterBar) return;


    dom.filterBar.addEventListener(
      "click",
      event => {

        const chip =
          event.target.closest(
            ".filter-chip"
          );

        if (!chip) return;


        $all(
          ".filter-chip",
          dom.filterBar
        ).forEach(button => {

          button.classList.remove(
            "is-active"
          );

          button.setAttribute(
            "aria-selected",
            "false"
          );

        });


        chip.classList.add(
          "is-active"
        );

        chip.setAttribute(
          "aria-selected",
          "true"
        );


        state.activeFilter =
          chip.dataset.filter;


        renderFeatured();

      }
    );

  }


  /* =========================================================
     14. SEARCH
     ========================================================= */

  function initSearch() {

    if (
      !dom.searchToggle ||
      !dom.searchBar ||
      !dom.searchInput
    ) {
      return;
    }


    dom.searchToggle.addEventListener(
      "click",
      () => {

        const open =
          dom.searchBar.classList.toggle(
            "is-open"
          );


        dom.searchToggle.setAttribute(
          "aria-expanded",
          String(open)
        );


        if (open) {

          dom.searchInput.focus();

        }

      }
    );


    if (dom.searchClose) {

      dom.searchClose.addEventListener(
        "click",
        () => {

          dom.searchBar.classList.remove(
            "is-open"
          );

          dom.searchToggle.setAttribute(
            "aria-expanded",
            "false"
          );

        }
      );

    }


    dom.searchInput.addEventListener(
      "input",
      event => {

        state.searchTerm =
          event.target.value;


        renderFeatured();


        if (
          state.searchTerm.trim()
        ) {

          const shop =
            document.getElementById(
              "shop"
            );

          if (shop) {

            shop.scrollIntoView({
              behavior:
                prefersReducedMotion()
                  ? "auto"
                  : "smooth"
            });

          }

        }

      }
    );

  }


  /* =========================================================
     15. PRODUCT INTERACTIONS
     ========================================================= */

  function initCardInteractions() {

    document.addEventListener(
      "click",
      event => {


        /* COLOR */

        const swatch =
          event.target.closest(
            ".swatch"
          );


        if (
          swatch &&
          swatch.dataset.product
        ) {

          const productId =
            swatch.dataset.product;


          const card =
            swatch.closest(
              ".product-card"
            );


          const index =
            Number(
              swatch.dataset.colorIndex
            );


          const selection =
            getCardSelection(
              productId
            );


          selection.colorIndex =
            index;


          $all(
            ".swatch",
            card
          ).forEach(button =>
            button.classList.remove(
              "is-selected"
            )
          );


          swatch.classList.add(
            "is-selected"
          );


          return;
        }


        /* SIZE */

        const sizeButton =
          event.target.closest(
            ".product-card .size-btn"
          );


        if (sizeButton) {

          const productId =
            sizeButton.dataset.product;


          const card =
            sizeButton.closest(
              ".product-card"
            );


          const selection =
            getCardSelection(
              productId
            );


          selection.size =
            sizeButton.dataset.size;


          $all(
            ".size-btn",
            card
          ).forEach(button =>
            button.classList.remove(
              "is-selected"
            )
          );


          sizeButton.classList.add(
            "is-selected"
          );


          return;
        }


        /* QUANTITY */

        const qtyButton =
          event.target.closest(
            ".product-card .qty-btn"
          );


        if (qtyButton) {

          const card =
            qtyButton.closest(
              ".product-card"
            );


          const productId =
            card.dataset.id;


          const selection =
            getCardSelection(
              productId
            );


          const direction =
            qtyButton.dataset.qty === "inc"
              ? 1
              : -1;


          selection.qty =
            Math.max(
              1,
              Math.min(
                20,
                selection.qty + direction
              )
            );


          const value =
            card.querySelector(
              ".qty-value"
            );


          if (value) {

            value.textContent =
              selection.qty;

            value.classList.remove(
              "bump"
            );

            void value.offsetWidth;

            value.classList.add(
              "bump"
            );

          }


          return;
        }


        /* LIKE */

        const like =
          event.target.closest(
            "[data-like]"
          );


        if (like) {

          handleReaction(
            like.dataset.like,
            "like",
            like
          );

          return;
        }


        /* DISLIKE */

        const dislike =
          event.target.closest(
            "[data-dislike]"
          );


        if (dislike) {

          handleReaction(
            dislike.dataset.dislike,
            "dislike",
            dislike
          );

          return;
        }


        /* ADD TO CART */

        const add =
          event.target.closest(
            "[data-add-to-cart]"
          );


        if (add) {

          handleAddToCartFromCard(
            add
          );

          return;
        }


        /* OPEN PRODUCT */

        const media =
          event.target.closest(
            "[data-open-modal]"
          );


        if (media) {

          openProductModal(
            media.dataset.openModal
          );

        }

      }
    );

  }


  /* =========================================================
     16. ADD TO CART FROM CARD
     ========================================================= */

  function handleAddToCartFromCard(button) {

    const productId =
      button.dataset.addToCart;


    const product =
      findProduct(productId);


    if (!product) return;


    const card =
      button.closest(
        ".product-card"
      );


    const selection =
      getCardSelection(
        productId
      );


    const size =
      selection.size ||
      product.sizes[0];


    const color =
      product.colors[
        selection.colorIndex
      ] ||
      product.colors[0];


    addToCart(
      product,
      color,
      size,
      selection.qty || 1
    );


    const image =
      card.querySelector(
        ".product-card__media img"
      );


    flyToCart(
      image ||
      card.querySelector(
        ".product-card__media"
      )
    );


    button.classList.add(
      "is-added"
    );


    const original =
      button.textContent;


    button.textContent =
      "Added ✓";


    setTimeout(() => {

      button.classList.remove(
        "is-added"
      );

      button.textContent =
        original;

    }, 1100);

  }


  /* =========================================================
     17. LIKE / DISLIKE
     ========================================================= */

  function handleReaction(
    productId,
    type,
    button
  ) {

    const reaction =
      getReaction(productId);


    if (type === "like") {

      if (reaction.liked) {

        reaction.liked = false;

        reaction.likes =
          Math.max(
            0,
            reaction.likes - 1
          );

      } else {

        reaction.liked = true;

        reaction.likes += 1;


        if (reaction.disliked) {

          reaction.disliked = false;

          reaction.dislikes =
            Math.max(
              0,
              reaction.dislikes - 1
            );

        }

      }

    } else {

      if (reaction.disliked) {

        reaction.disliked = false;

        reaction.dislikes =
          Math.max(
            0,
            reaction.dislikes - 1
          );

      } else {

        reaction.disliked = true;

        reaction.dislikes += 1;


        if (reaction.liked) {

          reaction.liked = false;

          reaction.likes =
            Math.max(
              0,
              reaction.likes - 1
            );

        }

      }

    }


    saveReactions();

    syncReactionUI(
      productId
    );


    button.classList.remove(
      "pop"
    );

    void button.offsetWidth;

    button.classList.add(
      "pop"
    );

  }


  function syncReactionUI(productId) {

    const reaction =
      getReaction(productId);


    $all(
      `[data-like="${productId}"]`
    ).forEach(button => {

      button.setAttribute(
        "aria-pressed",
        String(
          reaction.liked
        )
      );


      const count =
        button.querySelector(
          "[data-like-count]"
        );


      if (count) {

        count.textContent =
          reaction.likes;

      }

    });


    $all(
      `[data-dislike="${productId}"]`
    ).forEach(button => {

      button.setAttribute(
        "aria-pressed",
        String(
          reaction.disliked
        )
      );


      const count =
        button.querySelector(
          "[data-dislike-count]"
        );


      if (count) {

        count.textContent =
          reaction.dislikes;

      }

    });


    if (
      dom.modalLike &&
      dom.modalLike.dataset.product ===
        productId
    ) {

      dom.modalLike.setAttribute(
        "aria-pressed",
        String(
          reaction.liked
        )
      );


      dom.modalDislike.setAttribute(
        "aria-pressed",
        String(
          reaction.disliked
        )
      );


      if (dom.modalLikeCount) {

        dom.modalLikeCount.textContent =
          reaction.likes;

      }


      if (dom.modalDislikeCount) {

        dom.modalDislikeCount.textContent =
          reaction.dislikes;

      }

    }

  }


  /* =========================================================
     18. PRODUCT MODAL
     ========================================================= */

  function openProductModal(productId) {

    const product =
      findProduct(productId);


    if (!product || !dom.modal) {
      return;
    }


    state.modalProduct =
      product;


    const selection =
      getCardSelection(
        productId
      );


    state.modalColor =
      selection.colorIndex || 0;


    state.modalSize =
      selection.size || null;


    state.modalQty = 1;


    if (dom.modalImage) {

      dom.modalImage.src =
        getImagePath(
          product.colors[
            state.modalColor
          ]?.image ||
          product.image
        );


      dom.modalImage.alt =
        product.name +
        " — MEHKA GARMENTS";


      dom.modalImage.onerror =
        function () {

          this.onerror = null;

          this.src =
            "data:image/svg+xml;utf8," +
            encodeURIComponent(
              `
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="600"
                   height="700">

                <rect
                  width="100%"
                  height="100%"
                  fill="#efe9dc"
                />

                <text
                  x="50%"
                  y="50%"
                  font-family="sans-serif"
                  font-size="28"
                  fill="#75705f"
                  text-anchor="middle"
                >
                  ${product.name}
                </text>

              </svg>
              `
            );

        };

    }


    if (dom.modalCategory) {

      dom.modalCategory.textContent =
        CATEGORY_LABELS[
          product.category
        ] ||
        product.category;

    }


    if (dom.modalTitle) {

      dom.modalTitle.textContent =
        product.name;

    }


    if (dom.modalOldPrice) {

      dom.modalOldPrice.textContent =
        formatPrice(
          product.price
        );

    }


    if (dom.modalSalePrice) {

      dom.modalSalePrice.textContent =
        formatPrice(
          product.salePrice
        );

    }


    if (dom.modalDesc) {

      dom.modalDesc.textContent =
        product.description;

    }


    if (dom.modalColors) {

      dom.modalColors.innerHTML =
        product.colors
          .map((color, index) => {

            return `
              <button
                type="button"
                class="${swatchClass(color)}"
                style="${swatchStyle(color)}"
                data-modal-color-index="${index}"
                aria-label="Select colour ${color.name}"
                title="${color.name}"
              ></button>
            `;

          })
          .join("");

    }


    if (dom.modalSizes) {

      dom.modalSizes.innerHTML =
        product.sizes
          .map(size => {

            return `
              <button
                type="button"
                class="size-btn"
                data-modal-size="${size}"
              >
                ${size}
              </button>
            `;

          })
          .join("");

    }


    updateModalColorSelection();

    updateModalSizeSelection();


    if (dom.modalQtyValue) {

      dom.modalQtyValue.textContent =
        state.modalQty;

    }


    if (dom.modalLike) {

      dom.modalLike.dataset.product =
        product.id;

    }


    if (dom.modalDislike) {

      dom.modalDislike.dataset.product =
        product.id;

    }


    syncReactionUI(
      product.id
    );


    dom.modal.hidden = false;


    requestAnimationFrame(() => {

      dom.modal.classList.add(
        "is-open"
      );

    });


    document.body.style.overflow =
      "hidden";

  }


  function updateModalColorSelection() {

    const product =
      state.modalProduct;


    if (!product) return;


    $all(
      ".swatch",
      dom.modalColors
    ).forEach(
      (button, index) => {

        button.classList.toggle(
          "is-selected",
          index ===
            state.modalColor
        );

      }
    );


    const color =
      product.colors[
        state.modalColor
      ];


    if (dom.modalColorName) {

      dom.modalColorName.textContent =
        color
          ? color.name
          : "";

    }


    if (
      dom.modalImage &&
      color &&
      color.image
    ) {

      dom.modalImage.src =
        getImagePath(
          color.image
        );

    }

  }


  function updateModalSizeSelection() {

    if (!dom.modalSizes) return;


    $all(
      ".size-btn",
      dom.modalSizes
    ).forEach(button => {

      button.classList.toggle(
        "is-selected",
        button.dataset.modalSize ===
          state.modalSize
      );

    });

  }


  function closeProductModal() {

    if (!dom.modal) return;


    dom.modal.classList.remove(
      "is-open"
    );


    document.body.style.overflow =
      "";


    setTimeout(() => {

      dom.modal.hidden = true;

    }, 400);

  }


  function initModal() {

    if (!dom.modal) return;


    if (dom.modalClose) {

      dom.modalClose.addEventListener(
        "click",
        closeProductModal
      );

    }


    dom.modal.addEventListener(
      "click",
      event => {

        if (
          event.target ===
          dom.modal
        ) {

          closeProductModal();

        }

      }
    );


    document.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Escape" &&
          !dom.modal.hidden
        ) {

          closeProductModal();

        }


        if (
          event.key === "Escape" &&
          dom.cartDrawer &&
          dom.cartDrawer.classList.contains(
            "is-open"
          )
        ) {

          closeCart();

        }

      }
    );


    if (dom.modalColors) {

      dom.modalColors.addEventListener(
        "click",
        event => {

          const button =
            event.target.closest(
              "[data-modal-color-index]"
            );


          if (!button) return;


          state.modalColor =
            Number(
              button.dataset
                .modalColorIndex
            );


          updateModalColorSelection();

        }
      );

    }


    if (dom.modalSizes) {

      dom.modalSizes.addEventListener(
        "click",
        event => {

          const button =
            event.target.closest(
              "[data-modal-size]"
            );


          if (!button) return;


          state.modalSize =
            button.dataset.modalSize;


          updateModalSizeSelection();

        }
      );

    }


    if (dom.modalQty) {

      dom.modalQty.addEventListener(
        "click",
        event => {

          const button =
            event.target.closest(
              ".qty-btn"
            );


          if (!button) return;


          const direction =
            button.dataset.qty === "inc"
              ? 1
              : -1;


          state.modalQty =
            Math.max(
              1,
              Math.min(
                20,
                state.modalQty +
                  direction
              )
            );


          dom.modalQtyValue.textContent =
            state.modalQty;


          dom.modalQtyValue.classList.remove(
            "bump"
          );


          void dom.modalQtyValue.offsetWidth;


          dom.modalQtyValue.classList.add(
            "bump"
          );

        }
      );

    }


    if (dom.modalAddToCart) {

      dom.modalAddToCart.addEventListener(
        "click",
        () => {

          const product =
            state.modalProduct;


          if (!product) return;


          const size =
            state.modalSize ||
            product.sizes[0];


          const color =
            product.colors[
              state.modalColor
            ] ||
            product.colors[0];


          addToCart(
            product,
            color,
            size,
            state.modalQty
          );


          flyToCart(
            dom.modalImage
          );


          dom.modalAddToCart.textContent =
            "Added ✓";


          dom.modalAddToCart.classList.add(
            "is-added"
          );


          setTimeout(() => {

            dom.modalAddToCart.textContent =
              "Add to Cart";


            dom.modalAddToCart.classList.remove(
              "is-added"
            );


            closeProductModal();

          }, 700);

        }
      );

    }


    if (dom.modalLike) {

      dom.modalLike.addEventListener(
        "click",
        () =>
          handleReaction(
            dom.modalLike.dataset.product,
            "like",
            dom.modalLike
          )
      );

    }


    if (dom.modalDislike) {

      dom.modalDislike.addEventListener(
        "click",
        () =>
          handleReaction(
            dom.modalDislike.dataset.product,
            "dislike",
            dom.modalDislike
          )
      );

    }

  }


  /* =========================================================
     19. CART
     ========================================================= */

  function cartVariantId(
    productId,
    colorName,
    size
  ) {

    return (
      productId +
      "__" +
      colorName +
      "__" +
      size
    );

  }


  function addToCart(
    product,
    color,
    size,
    quantity
  ) {

    if (
      !product ||
      !color ||
      !size
    ) {
      return;
    }


    const qty =
      Math.max(
        1,
        Math.min(
          50,
          Number(quantity) || 1
        )
      );


    const cartId =
      cartVariantId(
        product.id,
        color.name,
        size
      );


    const existing =
      state.cart.find(
        item =>
          item.cartId === cartId
      );


    if (existing) {

      existing.qty =
        Math.min(
          50,
          existing.qty + qty
        );

    } else {

      state.cart.push({

        cartId,

        productId:
          product.id,

        name:
          product.name,

        image:
          color.image ||
          product.image,

        color:
          color.name,

        size,

        qty,

        price:
          product.salePrice

      });

    }


    saveCart();

    renderCart();

    bumpCartIcon();

    showToast(
      `${qty} × ${product.name} added to cart`
    );

  }


  function updateCartQty(
    cartId,
    direction
  ) {

    const item =
      state.cart.find(
        cartItem =>
          cartItem.cartId ===
          cartId
      );


    if (!item) return;


    item.qty += direction;


    if (item.qty <= 0) {

      removeCartItem(
        cartId
      );

      return;

    }


    item.qty =
      Math.min(
        50,
        item.qty
      );


    saveCart();

    renderCart();

  }


  function removeCartItem(
    cartId
  ) {

    const element =
      dom.cartItems
        ? dom.cartItems.querySelector(
            `[data-cart-id="${CSS.escape(cartId)}"]`
          )
        : null;


    const finish = () => {

      state.cart =
        state.cart.filter(
          item =>
            item.cartId !==
            cartId
        );


      saveCart();

      renderCart();

    };


    if (
      element &&
      !prefersReducedMotion()
    ) {

      element.classList.add(
        "is-removing"
      );


      setTimeout(
        finish,
        280
      );

    } else {

      finish();

    }

  }


  function cartTotals() {

    return {

      totalQty:
        state.cart.reduce(
          (sum, item) =>
            sum + item.qty,
          0
        ),

      totalPrice:
        state.cart.reduce(
          (sum, item) =>
            sum +
            item.qty *
              item.price,
          0
        )

    };

  }


  function cartItemMarkup(item) {

    return `
      <div
        class="cart-item"
        data-cart-id="${item.cartId}"
      >

        <div class="cart-item__media">

          <img
            src="${getImagePath(item.image)}"
            alt="${item.name}"
            loading="lazy"
            onerror="
              this.onerror=null;
              this.removeAttribute('src');
              this.alt='';
              this.style.background='linear-gradient(135deg,#efe9dc,#e2d9c4)';
            "
          >

        </div>


        <div class="cart-item__info">

          <p class="cart-item__name">
            ${item.name}
          </p>

          <p class="cart-item__meta">
            ${item.color} · Size ${item.size}
          </p>


          <div class="cart-item__row">

            <div
              class="qty-control"
              data-cart-qty="${item.cartId}"
            >

              <button
                type="button"
                class="qty-btn"
                data-cart-dir="-1"
                aria-label="Decrease quantity"
              >
                &minus;
              </button>

              <span class="qty-value">
                ${item.qty}
              </span>

              <button
                type="button"
                class="qty-btn"
                data-cart-dir="1"
                aria-label="Increase quantity"
              >
                +
              </button>

            </div>


            <button
              type="button"
              class="cart-item__remove"
              data-cart-remove="${item.cartId}"
            >
              Remove
            </button>

          </div>

        </div>


        <div class="cart-item__price">
          ${formatPrice(
            item.price * item.qty
          )}
        </div>

      </div>
    `;

  }


  function renderCart() {

    if (
      !dom.cartCount ||
      !dom.cartItems
    ) {
      return;
    }


    const totals =
      cartTotals();


    dom.cartCount.textContent =
      totals.totalQty;


    dom.cartCount.classList.toggle(
      "is-visible",
      totals.totalQty > 0
    );


    if (!state.cart.length) {

      dom.cartItems.innerHTML =
        "";


      if (dom.cartEmpty) {

        dom.cartEmpty.style.display =
          "block";

      }


      if (dom.cartSummary) {

        dom.cartSummary.style.display =
          "none";

      }


      return;

    }


    if (dom.cartEmpty) {

      dom.cartEmpty.style.display =
        "none";

    }


    if (dom.cartSummary) {

      dom.cartSummary.style.display =
        "block";

    }


    dom.cartItems.innerHTML =
      state.cart
        .map(cartItemMarkup)
        .join("");


    if (dom.cartTotalQty) {

      dom.cartTotalQty.textContent =
        totals.totalQty;

    }


    if (dom.cartTotalPrice) {

      dom.cartTotalPrice.textContent =
        formatPrice(
          totals.totalPrice
        );

    }

  }


  function bumpCartIcon() {

    if (!dom.cartCount) return;


    dom.cartCount.classList.remove(
      "bump"
    );


    void dom.cartCount.offsetWidth;


    dom.cartCount.classList.add(
      "bump"
    );


    if (dom.cartToggle) {

      dom.cartToggle.style.transform =
        "translateY(-3px) scale(1.08)";


      setTimeout(() => {

        dom.cartToggle.style.transform =
          "";

      }, 220);

    }

  }


  function openCart() {

    if (!dom.cartDrawer) return;


    dom.cartDrawer.hidden =
      false;


    requestAnimationFrame(() => {

      dom.cartDrawer.classList.add(
        "is-open"
      );

    });


    if (dom.cartToggle) {

      dom.cartToggle.setAttribute(
        "aria-expanded",
        "true"
      );

    }


    document.body.style.overflow =
      "hidden";

  }


  function closeCart() {

    if (!dom.cartDrawer) return;


    dom.cartDrawer.classList.remove(
      "is-open"
    );


    if (dom.cartToggle) {

      dom.cartToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }


    document.body.style.overflow =
      "";


    setTimeout(() => {

      dom.cartDrawer.hidden =
        true;

    }, 500);

  }


  function initCart() {

    if (!dom.cartToggle) return;


    dom.cartToggle.addEventListener(
      "click",
      openCart
    );


    if (dom.cartClose) {

      dom.cartClose.addEventListener(
        "click",
        closeCart
      );

    }


    if (dom.cartDrawer) {

      dom.cartDrawer.addEventListener(
        "click",
        event => {

          if (
            event.target ===
            dom.cartDrawer
          ) {

            closeCart();

          }

        }
      );

    }


    if (dom.cartItems) {

      dom.cartItems.addEventListener(
        "click",
        event => {

          const qty =
            event.target.closest(
              "[data-cart-dir]"
            );


          if (qty) {

            const control =
              qty.closest(
                "[data-cart-qty]"
              );


            updateCartQty(
              control.dataset.cartQty,
              Number(
                qty.dataset.cartDir
              )
            );


            return;

          }


          const remove =
            event.target.closest(
              "[data-cart-remove]"
            );


          if (remove) {

            removeCartItem(
              remove.dataset.cartRemove
            );

          }

        }
      );

    }


    renderCart();

  }


  /* =========================================================
     20. FLY IMAGE TO CART
     ========================================================= */

  function flyToCart(source) {

    if (
      !source ||
      !dom.cartToggle ||
      prefersReducedMotion()
    ) {
      return;
    }


    const cartRect =
      dom.cartToggle.getBoundingClientRect();


    const sourceRect =
      source.getBoundingClientRect();


    const ghost =
      document.createElement(
        "div"
      );


    ghost.className =
      "fly-ghost";


    ghost.style.backgroundColor =
      "#e2d9c4";


    if (
      source.tagName === "IMG" &&
      source.src
    ) {

      ghost.style.backgroundImage =
        `url(${source.src})`;

    }


    ghost.style.left =
      sourceRect.left +
      "px";


    ghost.style.top =
      sourceRect.top +
      "px";


    ghost.style.width =
      Math.min(
        80,
        sourceRect.width
      ) +
      "px";


    ghost.style.height =
      Math.min(
        80,
        sourceRect.height
      ) +
      "px";


    document.body.appendChild(
      ghost
    );


    requestAnimationFrame(() => {

      ghost.style.left =
        cartRect.left +
        cartRect.width / 2 -
        10 +
        "px";


      ghost.style.top =
        cartRect.top +
        cartRect.height / 2 -
        10 +
        "px";


      ghost.style.width =
        "20px";


      ghost.style.height =
        "20px";


      ghost.style.opacity =
        "0.15";


      ghost.style.borderRadius =
        "50%";

    });


    setTimeout(() => {

      ghost.remove();

    }, 750);

  }


  /* =========================================================
     21. NAVIGATION
     ========================================================= */

  function initNavigation() {

    if (!dom.header) return;


    const heroHeight =
      () =>
        dom.hero
          ? dom.hero.offsetHeight
          : 0;


    function updateHeaderState() {

      const scrolled =
        window.scrollY > 30;


      dom.header.classList.toggle(
        "is-scrolled",
        scrolled
      );


      dom.header.classList.toggle(
        "is-hero-dark",
        !scrolled &&
        window.scrollY <
          heroHeight() - 90
      );

    }


    updateHeaderState();


    window.addEventListener(
      "scroll",
      () =>
        safe(
          updateHeaderState
        ),
      {
        passive: true
      }
    );


    function closeMobileNav() {

      if (dom.mobileNav) {

        dom.mobileNav.classList.remove(
          "is-open"
        );

      }


      if (dom.overlay) {

        dom.overlay.classList.remove(
          "is-visible"
        );

      }


      if (dom.menuToggle) {

        dom.menuToggle.classList.remove(
          "is-open"
        );

        dom.menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      }


      document.body.style.overflow =
        "";

    }


    function openMobileNav() {

      if (dom.mobileNav) {

        dom.mobileNav.classList.add(
          "is-open"
        );

      }


      if (dom.overlay) {

        dom.overlay.classList.add(
          "is-visible"
        );

      }


      if (dom.menuToggle) {

        dom.menuToggle.classList.add(
          "is-open"
        );

        dom.menuToggle.setAttribute(
          "aria-expanded",
          "true"
        );

      }


      document.body.style.overflow =
        "hidden";

    }


    if (dom.menuToggle) {

      dom.menuToggle.addEventListener(
        "click",
        () => {

          if (
            dom.mobileNav &&
            dom.mobileNav.classList.contains(
              "is-open"
            )
          ) {

            closeMobileNav();

          } else {

            openMobileNav();

          }

        }
      );

    }


    if (dom.overlay) {

      dom.overlay.addEventListener(
        "click",
        closeMobileNav
      );

    }


    $all(
      "[data-scroll], [data-nav]"
    ).forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const href =
            link.getAttribute(
              "href"
            );


          if (
            !href ||
            href.charAt(0) !== "#"
          ) {
            return;
          }


          const targ
