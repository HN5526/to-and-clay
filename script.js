// ====================== PRODUCTS ======================
const products = [
  {
    id: 1,
    name: {
      en: "Scented Tulip Bouquet Candle Pot",
      ar: "قدح شمعة بباقة من زهور التوليب المعطرة",
      fr: "Pot de bougie bouquet de tulipes parfumées",
      es: "Maceta de Vela con Ramo de Tulipanes Aromáticos"
    },
    price: 120,
    images: [
      "images/ScentedTulipBouquetCandlePot.png",
      "images/ScentedTulipBouquetCandlePot3.png"
    ]
  },
  {
    id: 2,
    name: {
      en: "Scented Floral Candle Frame",
      ar: "إطار شمعة زهرية معطرة",
      fr: "Cadre de bougie florale parfumée",
      es: "Marco de Vela Floral Perfumada"
    },
    price: 200,
    images: ["images/ScentedFloralCandleFrame.png"]
  },
  {
    id: 3,
    name: {
      en: "Boho Botanical Vase",
      ar: "مزهرية بوهيمية",
      fr: "Vase Botanique Bohème",
      es: "Jarrón Botánico Bohemio"
    },
    price: 100,
    images: ["images/BohoDriedBotanicalVase.png"]
  },
  {
    id: 4,
    name: {
      en: "Pearlescent Ceramic Bakhoor Burner",
      ar: "موقد بخور سيراميك لؤلؤي",
      fr: "Brûleur de Bakhoor en Céramique Nacrée",
      es: "Quemador de Bakhoor de Cerámica Nacarada"
    },
    price: 35,
    images: ["images/PearlescentCeramicBakhoorBurner.png"]
  },
  {
    id: 5,
    name: {
      en: "Floral Candle & Decor Set in all colours",
      ar: "طقم شموع وزينة زهرية بجميع الألوان",
      fr: "Ensemble de bougie et décoration florale en toutes les couleurs",
      es: "Set de vela y decoración floral en todos los colores"
    },
    price: 400,
    images: ["images/FloralCandle&DecorSet.jpg"]
  },
  {
    id: 6,
    name: {
      en: "Pink Dhalia Candle on Pearl Beaded Tray",
      ar: "شمعة داليا وردية على صينية مزيّنة باللؤلؤ",
      fr: "Bougie Dahlia sur plateau perlé",
      es: "Vela de Dalia en Bandeja de Perlas"
    },
    price: 35,
    images: [
      "images/PinkDhaliaCandleonPearlBeadedTray.jpg",
      "images/PinkDhaliaCandleonPearlBeadedTray2.jpg"
    ]
  },
  {
    id: 7,
    name: {
      en: "Pink Rose Candle on Pearl Beaded Tray",
      ar: "شمعة وردية على صينية مرصعة باللؤلؤ",
      fr: "Bougie rose sur plateau perlé",
      es: "Vela de rosa rosa sobre bandeja con cuentas de perla"
    },
    price: 35,
    images: ["images/PinkRoseCandleonPearlBeadedTray.jpg"]
  },
  {
    id: 8,
    name: {
      en: "Flower Candle Arrangement in all colours",
      ar: "ترتيب شموع الأزهار بجميع الألوان",
      fr: "Arrangement de bougies florales dans toutes les couleurs",
      es: "Arreglo de velas con flores en todos los colores"
    },
    price: 120,
    images: ["images/PurpleFlowerCandleArrangment.jpg"]
  },
  {
    id: 9,
    name: {
      en: "Starfish Seashell Candle",
      ar: "شمعة صدفة ونجمة البحر",
      fr: "Bougie Étoile de Mer et Coquillage",
      es: "Vela de Concha de Estrella de Mar"
    },
    price: 30,
    images: ["images/StarfishSeashellCandle.jpg"]
  },
  {
    id: 10,
    name: {
      en: "Leaf-Shaped Candle",
      ar: "شمعة على شكل ورقة",
      fr: "Bougie en forme de feuille",
      es: "Vela en forma de hoja"
    },
    price: 30,
    images: ["images/Leaf-ShapedCandle.jpg"]
  },
  {
    id: 11,
    name: {
      en: "Crescent Moon Candle Vase",
      ar: "مزهرية شمعة الهلال",
      fr: "Vase bougie lune en croissant",
      es: "Jarrón de Vela Luna Creciente"
    },
    price: 60,
    images: ["images/CrescentMoonCandleVase.jpg"]
  },
  {
    id: 12,
    name: {
      en: "Star-Shaped Flower Candle",
      ar: "شمعة على شكل زهرة نجمية",
      fr: "Bougie en forme de fleur étoilée",
      es: "Vela en forma de flor de estrella"
    },
    price: 30,
    images: ["images/Star-ShapedFlowerCandle.jpg"]
  },
  {
    id: 13,
    name: {
      en: "Mini Flower Candle & Dried Floral Vase",
      ar: "شمعة زهرية صغيرة ووعاء زهور مجففة",
      fr: "Mini bougie fleur et vase de fleurs séchées",
      es: "Mini Vela de Flor y Florero con Flores Secas"
    },
    price: 60,
    images: ["images/MiniFlowerCandle&DriedFloralVase.jpg"]
  },
  {
    id: 14,
    name: {
      en: "Flower Scented Candle Pot",
      ar: "وعاء شمعة معطر بالزهور",
      fr: "Pot de Bougie Parfumée aux Fleurs",
      es: "Maceta de Vela con Aroma a Flores"
    },
    price: 45,
    images: ["images/FlowerScentedCandlePot.jpg"]
  },
  {
    id: 15,
    name: {
      en: "Pink Ceramic Perfumed Candle",
      ar: "شمعة عطرية سيراميكية وردية",
      fr: "Bougie parfumée en céramique rose",
      es: "Vela perfumada de cerámica rosa"
    },
    price: 40,
    images: ["images/PinkCeramicPerfumedCandle.jpg"]
  },
  {
    id: 16,
    name: {
      en: "Gold-Rimmed Eggshell Bowl",
      ar: "وعاء قشر البيض بحافة من الذهب",
      fr: "Bol en coquille d'œuf bordé d'or",
      es: "Bol de cáscara de huevo con borde dorado"
    },
    price: 100,
    images: ["images/Gold-RimmedEggshellBowl.png"]
  },
  {
    id: 17,
    name: {
      en: "Gold-Lined Eggshell Bowl with Floral Candle Arrangement",
      ar: "وعاء قشرة بيض مبطن بالذهب مع ترتيب شموع زهرية",
      fr: "Bol en coquille d'œuf à bord doré avec arrangement de bougies fleuri",
      es: "Tazón de cáscara de huevo con borde dorado y arreglo de velas florales"
    },
    price: 180,
    images: ["images/Gold-LinedEggshellBowlwithFloralCandleArrangement.png"]
  },
  {
    id: 18,
    name: {
      en: "Ceramic Tray Set",
      ar: "طقم صواني سيراميك",
      fr: "Ensemble de plateaux en céramique",
      es: "Juego de bandejas de cerámica"
    },
    price: 100,
    images: ["images/CeramicTraySet.png"]
  },
  {
    id: 19,
    name: {
      en: "Gold-rimmed Sculpted Planter Pot",
      ar: "وعاء نباتات منحوت بحافة ذهبية",
      fr: "Pot de plantation sculpté bordé d'or",
      es: "Maceta Esculpida con Borde Dorado"
    },
    price: 120,
    images: ["images/Gold-rimmedSculptedPlanterPot.png"]
  },
  // ——— Fixed: changed `image` → `images` ———
  {
    id: 20,
    name: {
      en: "Floral Candle & Decor Set in different colours",
      ar: "طقم شموع وزينة زهرية بألوان مختلفة",
      fr: "Ensemble de bougie et décoration florale en différentes couleurs",
      es: "Set de vela y decoración floral en diferentes colores"
    },
    price: 400,
    images: ["images/FloralCandle&DecorSet1.png"]
  },
  {
    id: 21,
    name: {
      en: "Flower Candle Collection on Round Tray",
      ar: "مجموعة شموع الزهور على صينية دائرية",
      fr: "Collection de bougies florales sur plateau rond",
      es: "Colección de velas de flores en bandeja redonda"
    },
    price: 200,
    images: ["images/FlowerCandleCollectiononRoundTray.png"]
  },
  {
    id: 22,
    name: {
      en: "Taper Candle with Ribbon Bow Base in all colours",
      ar: "شمعة مخروطية بقاعدة ربطة شريط بجميع الألوان",
      fr: "Bougie torsadée avec base à nœud ruban dans toutes les couleurs",
      es: "Vela Cónica con Base de Lazo de Cinta en todos los colores"
    },
    price: 40,
    images: ["images/TaperCandlewithRibbonBowBase.jpg"]
  },
  {
    id: 23,
    name: {
      en: "Glass Ocean Blue Gel Candle",
      ar: "شمعة جل زرقاء كالزجاج",
      fr: "Bougie en gel bleu océan",
      es: "Vela de gel azul océano"
    },
    price: 40,
    images: ["images/GlassOceanBlueGelCandleonPearlTrayBase.png"]
  },
  {
    id: 24,
    name: {
      en: "Layered Glass Candle colours by choice",
      ar: "شمعة زجاجية متعددة بألوان حسب الاختيار",
      fr: "Bougie en verre superposé, couleurs au choix",
      es: "Vela de vidrio en capas, colores a elección"
    },
    price: 40,
    images: ["images/LayeredGlassCandlewithPearlBase.png"]
  },
  {
    id: 25,
    name: {
      en: "Botanical Glass Candle with Dried Roses",
      ar: "شمعة زجاجية نباتية مع ورود مجففة",
      fr: "Bougie en verre botanique avec roses séchées",
      es: "Vela de vidrio botánico con rosas secas"
    },
    price: 40,
    images: ["images/BotanicalGlassCandlewithDriedRoses&PearlBase.png"]
  },
  {
    id: 26,
    name: {
      en: "Heart-Shaped Pearl Tray",
      ar: "صينية لؤلؤية على شكل قلب",
      fr: "Plateau en perles en forme de cœur",
      es: "Bandeja de perlas en forma de corazón"
    },
    price: 20,
    images: ["images/Heart-ShapedPearlTray.png"]
  }
];

// ====================== TRANSLATIONS ======================
const translations = {
  en: {
    storeTitle: "TO & CLAY",
    addToCart: "Add to Cart",
    yourCart: "Your Cart",
    total: "Total",
    checkout: "Checkout with WhatsApp",
    close: "Close",
    emptyCart: "Your cart is empty",
    heroEyebrow: "Handmade",
    heroTitle: "Made slowly.<br>Made to be cherished.",
    heroSubtitle: "Handcrafted ceramics, sculptural home pieces, and scented candles, thoughtfully made with an expressive, considered touch.",
    heroBtn: "Explore the Collection",
    collectionTitle: "For the table, the shelf, and the moments in between."
  },
  ar: {
    storeTitle: "TO & CLAY",
    addToCart: "أضف إلى السلة",
    yourCart: "سلتك",
    total: "المجموع",
    checkout: "إتمام الطلب عبر واتساب",
    close: "إغلاق",
    emptyCart: "سلتك فارغة",
    heroEyebrow: "صُنع يدويًا",
    heroTitle: "اجعل منزلك أكثر جمالًا،<br>قطعةً تلو الأخرى.",
    heroSubtitle: "خزفيات وقطع ديكور وشموع معطّرة مصنوعة يدويًا، بتفاصيل مدروسة لتجعل لحظاتك اليومية أكثر جمالًا.",
    heroBtn: "استكشف المجموعة",
    collectionTitle: "للطاولة، وللرف، وللحظات التي بينهما."
  },
  fr: {
    storeTitle: "TO & CLAY",
    addToCart: "Ajouter au panier",
    yourCart: "Votre panier",
    total: "Total",
    checkout: "Commander via WhatsApp",
    close: "Fermer",
    emptyCart: "Votre panier est vide",
    heroEyebrow: "Fait main",
    heroTitle: "Des pièces uniques,<br>créées avec intention.",
    heroSubtitle: "Des pièces uniques en céramique et des créations parfumées, imaginées avec passion pour embellir les petits moments du quotidien.",
    heroBtn: "Explorer la collection",
    collectionTitle: "Pour la table, l’étagère, et les moments entre les deux."
  },
  es: {
    storeTitle: "TO & CLAY",
    addToCart: "Añadir al carrito",
    yourCart: "Tu carrito",
    total: "Total",
    checkout: "Pedir por WhatsApp",
    close: "Cerrar",
    emptyCart: "Tu carrito está vacío",
    heroEyebrow: "Hecho a mano",
    heroTitle: "Haz de tu hogar un lugar especial.",
    heroSubtitle: "Piezas artesanales únicas, cerámicas y velas perfumadas diseñadas para aportar calidez, belleza y personalidad a cada espacio.",
    heroBtn: "Explorar la colección",
    collectionTitle: "Para la mesa, el estante, y los momentos intermedios."
  }
};

// ====================== STATE ======================
let currentLang = "en";
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentLightboxImages = [];
let currentLightboxIndex = 0;

// ====================== HELPERS ======================
function getProductImages(product) {
  // Support both old `image` and correct `images`
  if (Array.isArray(product.images) && product.images.length) {
    return product.images;
  }
  if (product.image) {
    return [product.image];
  }
  return [];
}

// ====================== FUNCTIONS ======================
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  const storeTitle = document.getElementById("store-title");
  if (storeTitle) storeTitle.textContent = translations[lang].storeTitle;

  const heroEyebrow = document.getElementById("hero-eyebrow");
  const heroTitle = document.getElementById("hero-title");
  const heroSubtitle = document.getElementById("hero-subtitle");
  const heroBtn = document.getElementById("hero-btn");

  if (heroEyebrow) heroEyebrow.textContent = translations[lang].heroEyebrow;
  if (heroTitle) heroTitle.innerHTML = translations[lang].heroTitle;
  if (heroSubtitle) heroSubtitle.textContent = translations[lang].heroSubtitle;
  if (heroBtn) heroBtn.textContent = translations[lang].heroBtn;

  const collectionTitle = document.getElementById("collection-title");
  if (collectionTitle) collectionTitle.textContent = translations[lang].collectionTitle;

  renderProducts();
  updateCartUI();
}

function renderProducts() {
  const container = document.getElementById("products-grid");
  if (!container) return;

  container.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";

    const imgs = getProductImages(product);
    let imagesHTML = "";

    if (imgs.length === 0) {
      imagesHTML = `<div class="product-images" style="min-height:240px;display:flex;align-items:center;justify-content:center;color:#aaa;">No image</div>`;
    } else if (imgs.length === 1) {
      imagesHTML = `
        <div class="product-images">
          <img src="${imgs[0]}"
               alt="${product.name[currentLang]}"
               class="single-img"
               onclick='openLightbox("${imgs[0]}", ${JSON.stringify(imgs)})'
               style="cursor: zoom-in;">
        </div>
      `;
    } else {
      imagesHTML = `<div class="product-images">`;
      imgs.forEach((img, index) => {
        imagesHTML += `
          <img src="${img}"
               alt="${product.name[currentLang]}"
               class="${index === 0 ? "main-img" : "second-img"}"
               onclick='openLightbox("${img}", ${JSON.stringify(imgs)})'
               style="cursor: zoom-in;">
        `;
      });
      imagesHTML += `</div>`;
    }

    // Check if this product is already in the cart
    const cartItem = cart.find(item => item.id === product.id);
    let actionHTML = "";

    if (cartItem) {
      // Product is in cart → show quantity controls
      actionHTML = `
        <div class="quantity-controls">
          <button class="qty-btn" onclick="decreaseQuantity(${product.id})">−</button>
          <span class="qty-number">${cartItem.quantity}</span>
          <button class="qty-btn" onclick="increaseQuantity(${product.id})">+</button>
        </div>
      `;
    } else {
      // Product not in cart → show Add to Cart button
      actionHTML = `
        <button onclick="addToCart(${product.id})">${translations[currentLang].addToCart}</button>
      `;
    }

    div.innerHTML = `
      ${imagesHTML}
      <h3>${product.name[currentLang]}</h3>
      <p>${product.price} MAD</p>
      ${actionHTML}
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();
  renderProducts(); // ← important: re-render cards so the controls appear
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
  renderProducts(); // ← re-render cards
}

function increaseQuantity(id) {
  const item = cart.find(item => item.id === id);
  if (item) {
    item.quantity += 1;
    saveCart();
    updateCartUI();
    renderProducts();
  }
}

function decreaseQuantity(id) {
  const item = cart.find(item => item.id === id);
  if (!item) return;

  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    // quantity becomes 0 → remove completely
    cart = cart.filter(i => i.id !== id);
  }

  saveCart();
  updateCartUI();
  renderProducts();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartUI() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");
  const cartTitle = document.getElementById("cart-title");
  const checkoutBtn = document.getElementById("checkout-btn");
  const closeBtn = document.getElementById("close-btn");
  const totalText = document.getElementById("total-text");

  if (cartTitle) cartTitle.textContent = translations[currentLang].yourCart;
  if (checkoutBtn) checkoutBtn.textContent = translations[currentLang].checkout;
  if (closeBtn) closeBtn.textContent = translations[currentLang].close;
  if (totalText) totalText.textContent = translations[currentLang].total;

  if (!cartItems) return;

  cartItems.innerHTML = "";
  let total = 0;
  let count = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = `<p>${translations[currentLang].emptyCart}</p>`;
  } else {
    cart.forEach(item => {
      total += item.price * item.quantity;
      count += item.quantity;

      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <div class="cart-item-left">
          <div class="cart-item-name">${item.name[currentLang]}</div>
          <div class="cart-item-price">${item.price * item.quantity} MAD</div>
        </div>

        <div class="quantity-controls cart-qty">
          <button class="qty-btn" onclick="decreaseQuantity(${item.id})">−</button>
          <span class="qty-number">${item.quantity}</span>
          <button class="qty-btn" onclick="increaseQuantity(${item.id})">+</button>
        </div>
      `;
      cartItems.appendChild(div);
    });
  }

  if (cartCount) cartCount.textContent = count;
  if (cartTotal) cartTotal.textContent = total;
}

function toggleCart() {
  const cartEl = document.getElementById("cart");
  if (cartEl) cartEl.classList.toggle("hidden");
}

function checkout() {
  if (cart.length === 0) {
    alert(translations[currentLang].emptyCart);
    return;
  }

  const phoneNumber = currentLang === "ar" ? "212696163582" : "34603423236";

  let message = "";
  if (currentLang === "ar") {
    message = "مرحبًا، أود طلب المنتجات التالية من TO & Clay:%0A%0A";
  } else if (currentLang === "fr") {
    message = "Bonjour, je souhaite commander les produits suivants de TO & Clay :%0A%0A";
  } else if (currentLang === "es") {
    message = "Hola, me gustaría pedir los siguientes productos de TO & Clay:%0A%0A";
  } else {
    message = "Hello, I would like to order the following products from TO & Clay:%0A%0A";
  }

  let total = 0;
  cart.forEach(item => {
    const lineTotal = item.price * item.quantity;
    total += lineTotal;
    message += `• ${item.name[currentLang]} × ${item.quantity} = ${lineTotal} MAD%0A`;
  });

  message += `%0ATotal: ${total} MAD`;

  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}

function scrollToProducts() {
  const section = document.getElementById("products");
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

// ====================== LIGHTBOX ======================
function openLightbox(src, imagesArray = null) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (imagesArray && imagesArray.length > 0) {
    currentLightboxImages = imagesArray;
    currentLightboxIndex = imagesArray.indexOf(src);
    if (currentLightboxIndex === -1) currentLightboxIndex = 0;
  } else {
    currentLightboxImages = [src];
    currentLightboxIndex = 0;
  }

  lightboxImg.src = currentLightboxImages[currentLightboxIndex];
  lightbox.classList.add("active");

  if (currentLightboxImages.length <= 1) {
    lightbox.classList.add("single-image");
  } else {
    lightbox.classList.remove("single-image");
  }

  document.body.style.overflow = "hidden";
}

function changeLightboxImage(direction) {
  if (currentLightboxImages.length <= 1) return;

  currentLightboxIndex += direction;

  if (currentLightboxIndex < 0) {
    currentLightboxIndex = currentLightboxImages.length - 1;
  } else if (currentLightboxIndex >= currentLightboxImages.length) {
    currentLightboxIndex = 0;
  }

  document.getElementById("lightbox-img").src = currentLightboxImages[currentLightboxIndex];
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === this) closeLightbox();
    });
  }
});

// ====================== START ======================
setLanguage("en");