// ========== ПОПУЛЯРНЫЕ ПОЗИЦИИ (ДЛЯ ГЛАВНОЙ) ==========
const popularItems = [
    {
	id: 1,
        name: "Мокко",
        description: "Эспрессо с шоколадом и молоком",
        price: "8 BYN",
        image: "images/pexels-angela-khebou-259135285-15455285-750.jpg_11zon.webp",
	ingredients: "Эспрессо, молоко, шоколадный сироп, шоколадная крошка",
	nutrition: "~180 ккал, белки 6 г, жиры 7 г, углеводы 24 г ",
    },
    {
	id: 2,
        name: "Смузи из киви",
        description: "Легкий летний напиток",
        price: "10 BYN",
        image: "images/smuzi_s_kiwi.webp",
	ingredients: "Киви, банан, йогурт, мороженное пломбир",
	nutrition: "~100 ккал, белки 2 г, жиры 1 г, углеводы 22 г",
    },
    {
	id: 3,
        name: "Круассан - сендвич",
        description: "Солёный, сытный, с хрустящей корочкой",
        price: "12 BYN",
        image: "images/krevoodnph0mbphpb7d52pgwe97trxea.webp",
	ingredients: "",
	nutrition: "",
    },
    {
	id: 4,
        name: "Брауни с орехами",
        description: "Шоколадное пирожное с орехами",
        price: "10 BYN",
        image: "images/p_O.jpg",
	ingredients: "Шоколад, масло, яйца, мука, сахар, молоко, грецкие и лесные орехи",
	nutrition: "~500 ккал, белки 8 г, жиры 30 г, углеводы 50 г",
    },
    {
	id: 5,
        name: "Чизкейк c фисташкой",
        description: "Нежный творожный десерт с фисташкой",
        price: "10 BYN",
        image: "images/pistachio-cheesecake-1.jpg",
	ingredients: "Сливочный сыр, сахар, яйца, сливки, фисташки, фисташковаяя паста",
	nutrition: "~370 ккал, белки 10 г, жиры 26 г, углеводы 26 г",

    }
];

// -----------ВСЁ МЕНЮ С КАТЕГОРИЯМИ---------------
const menuItems = [
    // Горячие напитки
    {   
	id: 101,
	name: "Латте", 
 	description: "Нежный кофе с воздушной молочной пенкой", 
	price: "6.5", 
	image: "images/latte.jpg", 
	category: "hot",
	ingredients: "Эспрессо, вспененное молоко",
        nutrition: "~130 ккал | белки 6 г, жиры 6 г, углеводы 11 г",
    },
    {   
	id: 102,
	name: "Латте с какао", 
   	description: "Нежный кофе с какао", 
	price: "8", 
	image: "images/images.jpg", 
	category: "hot",
	ingredients:"Эспрессо, молоко, какао-порошок",
	nutrition: "~150 ккал, белки 6 г, жиры 6 г, углеводы 16 г",
    },
    {   
	id: 103,
	name: "Мокко", 
	description: "Эспрессо с шоколадом и молоком", 
	price: "8", 
	image: "images/pexels-angela-khebou-259135285-15455285-750.jpg_11zon.webp",
	category: "hot",
	ingredients: "Эспрессо, молоко, шоколадный сироп",
	nutrition: "~180 ккал, белки 6 г, жиры 7 г, углеводы 24 г ",
    },
    { 
	id: 104,
	name: "Капучино",
	description: "Классический итальянский рецепт",
	price: "5.5", 
	image: "https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg?w=400&h=300&fit=crop", 
	category: "hot",
	ingredients: "Эспрессо, молоко, молочная пенка",
	nutrition: "~110 ккал, белки 6 г, жиры 6 г, углеводы 8 г",
    },
    { 
	id: 105,
	name: "Американо", 
	description: "Некрепкий эспрессо", 
	price: "6", 
	image: "images/americano_kofe_(1).jpg", 
	category: "hot",
	ingredients: "Эспрессо, горячая вода",
	nutrition: "~15 ккал, белки 1 г, жиры 0 г, углеводы 1 г",
    },


    // Холодные напитки
    { 
	id: 106,
	name: "Смузи из киви", 
	description: "Легкий летний напиток", 
	price: "10", 
	image: "images/smuzi_s_kiwi.webp", 
	category: "cold",
	ingredients: "Киви, банан, йогурт, мороженное пломбир",
	nutrition: "~100 ккал, белки 2 г, жиры 1 г, углеводы 22 г",
    },
    { 
	id: 107,
	name: "Смузи из ягод", 
	description: "Натуральный летний напиток", 
	price: "10", 
	image: "images/images_cms-image-000103746.jpg", 
	category: "cold",
	ingredients: "Смесь ягод (малина, ежевика, голубика, земляника), банан, йогурт, мороженное пломбир",
	nutrition: "~110 ккал, белки 3 г, жиры 2 г, углеводы 22 г",
    },


    // Десерты
    { 
	id: 108,
	name: "Брауни", 
	description: "Шоколадное пирожное", 
	price: "8", 
	image: "images/brauni-2.jpg", 
	category: "dessert",
	ingredients: "Шоколад, сливочное масло, яйца, мука, сахар, молоко",
	nutrition: "~450 ккал, белки 6 г, жиры 25 г, углеводы 50 г",
    },
    { 
	id: 109,
	name: "Брауни с орехами", 
	description: "Шоколадное пирожное с орехами", 
	price: "10", 
	image: "images/p_O.jpg",
	category: "dessert",
	ingredients: "Шоколад, масло, яйца, мука, сахар, молоко, грецкие и лесные орехи",
	nutrition: "~500 ккал, белки 8 г, жиры 30 г, углеводы 50 г",
    },
    { 
	id: 110,
	name: "Брауни с вишней", 
	description: "Шоколадное пирожное с вишней", 
	price: "11", 
	image: "images/Brauni-s-vishnej-500x350.jpg", 
	category: "dessert",
	ingredients: "Шоколад, масло, яйца, мука, сахар, молоко, вишня, вишневый сироп",
	nutrition: "~430 ккал, белки 7 г, жиры 23 г, углеводы 50 г", 
    },
    { 
	id: 111,
	name: "Чизкейк", 
	description: "Нежный творожный десерт", 
	price: "7.5",
	image: "images/cheesecake.jpg", 
	category: "dessert",
	ingredients: "Сливочный сыр, сахар, яйца, сливки, печенье",
	nutrition: "~340 ккал, белки 6 г, жиры 24 г, углеводы 25 г",
    },
    { 
	id: 112,
	name: "Чизкейк c ягодами", 
	description: "Нежный творожный десерт с ягодным соусом", 
	price: "8", 
	image: "images/strawberry_cheesecake_01.webp", 
	category: "dessert",
	ingredients: "Сливочный сыр, сахар, яйца, сливки, малина, земляника, ягодный топпинг",
	nutrition: "~320 ккал, белки 6 г, жиры 22 г, углеводы 28 г",
    },
    { 
	id: 113,
	name: "Чизкейк c маковой прослойкой", 
	description: "Нежный творожный десерт с маком", 
	price: "8", 
	image: "images/chizkeik-s-makovoi-prosloikoi.jpg", 
	category: "dessert",
	ingredients: "Сливочный сыр, сахар, яйца, сливки, мак, топпинг с корицей",
	nutrition: "~340 ккал, белки 8 г, жиры 25 г, углеводы 27 г", 
    },
    { 
	id: 114,
	name: "Чизкейк c фисташкой", 
	description: "Нежный творожный десерт с фисташкой", 
	price: "10", 
	image: "images/pistachio-cheesecake-1.jpg", 
	category: "dessert",
	ingredients: "Сливочный сыр, сахар, яйца, сливки, фисташки, фисташковаяя паста",
	nutrition: "~370 ккал, белки 10 г, жиры 26 г, углеводы 26 г",
    },
    { 
	id: 115,
	name: "Круассан", 
	description: "Сливочный, слоёный, с хрустящей корочкой", 
	price: "6", 
	image: "images/6329ae33ae41231f78e6c511_Polyakovfoto_Simple Coffee17874.jpg", 
	category: "dessert",
	ingredients: "Мука, сливочное масло, сахар, дрожжи, яйца, молоко",
	nutrition: "~400 ккал, белки 7 г, жиры 22 г, углеводы 45 г ",
    },
    {	id: 116,
	name: "Круассан с шоколадом", 
	description: "Слоёный, шоколадный, с хрустящей корочкой", 
	price: "8", 
	image: "images/photo_313986.jpg", 
	category: "dessert",
	ingredients: "Мука, сливочное масло, сахар, дрожжи, яйца, молоко, шоколадная паста",
	nutrition: "~450 ккал, белки 8 г, жиры 25 г, углеводы 48 г", 
    },


    // Круассаны (сэндвичи)
    { 
	id: 117,
	name: "Круассан - сэндвич", 
	description: "Солёный, сытный, с хрустящей корочкой", 
	price: "12", 
	image: "images/krevoodnph0mbphpb7d52pgwe97trxea.webp", 
	category: "sandwich",
	ingredients: "Круассан, ветчина, сыр, листья салата, помидор, соус цезарь",
	nutrition: "~480 ккал, белки 20 г, жиры 28 г, углеводы 38 г",
    }
];



// ========== ОТЗЫВЫ ==========
const reviews = [
    { name: "Анна", date: "15 мая 2026", rating: 5, text: "Очень уютно! Латте потрясающий, круассаны свежие. Обязательно вернусь.", avatar: "👩‍🦰" },
    { name: "Дмитрий", date: "10 мая 2026", rating: 4, text: "Отличный кофе, приятная атмосфера. Немного долго готовили, но простительно.", avatar: "👨" },
    { name: "Елена", date: "5 мая 2026", rating: 5, text: "Брауни с вишней — восторг! Персонал вежливый, интерьер расслабляет.", avatar: "👩" },
    { name: "Максим", date: "28 апреля 2026", rating: 5, text: "Смузи из киви — находка для летнего дня. Круассан-сэндвич сытный.", avatar: "🧑" }
];



let userReviews = JSON.parse(localStorage.getItem('userReviews')) || [];

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, m => m === '&' ? '&amp;' : m === '<' ? '&lt;' : '&gt;');
}
function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card';
    let stars = '';
    for (let i = 0; i < 5; i++) stars += i < review.rating ? '★' : '☆';
    card.innerHTML = `
        <div class="review-header">
            <div class="review-avatar">${escapeHtml(review.avatar || '👤')}</div>
            <div class="review-info">
                <h3>${escapeHtml(review.name)}</h3>
                <div class="review-date">${escapeHtml(review.date)}</div>
                <div class="review-rating">${stars}</div>
            </div>
        </div>
        <div class="review-text">${escapeHtml(review.text)}</div>
    `;
    return card;
}
function renderReviews() {
    const container = document.getElementById('reviewsGrid');
    if (!container) return;
    container.innerHTML = '';
    [...userReviews].reverse().forEach(r => container.appendChild(createReviewCard(r)));
    staticReviews.forEach(r => container.appendChild(createReviewCard(r)));
}
function initReviewForm() {
    const form = document.getElementById('newReviewForm');
    if (!form) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('reviewName').value.trim();
        const rating = parseInt(document.getElementById('reviewRating').value);
        const text = document.getElementById('reviewText').value.trim();
        if (!name || !text) return alert('Заполните имя и отзыв');
        userReviews.push({ name, rating, text, date: new Date().toLocaleDateString(), avatar: '👤' });
        localStorage.setItem('userReviews', JSON.stringify(userReviews));
        renderReviews();
        form.reset();
        alert('Спасибо за отзыв!');
    });
}

// ========== КОРЗИНА ==========
function getCart() { return JSON.parse(localStorage.getItem('cart')) || []; }
function saveCart(cart) { localStorage.setItem('cart', JSON.stringify(cart)); }
function addToCart(id, name, price, image) {
    let cart = getCart();
    const existing = cart.find(item => item.id === id);
    if (existing) existing.quantity += 1;
    else cart.push({ id, name, price, image, quantity: 1 });
    saveCart(cart);
    alert(`"${name}" добавлен в корзину`);
}
function removeFromCart(id) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== id);
    saveCart(cart);
    if (document.getElementById('cartContainer')) renderCart();
}
function updateQuantity(id, delta) {
    let cart = getCart();
    const item = cart.find(item => item.id === id);
    if (item) {
        const newQty = item.quantity + delta;
        if (newQty >= 1) item.quantity = newQty;
        else cart = cart.filter(i => i.id !== id);
        saveCart(cart);
        if (document.getElementById('cartContainer')) renderCart();
    }
}
function renderCart() {
    const container = document.getElementById('cartContainer');
    if (!container) return;
    const cart = getCart();
    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align:center;">Корзина пуста. Перейдите в <a href="menu.html">меню</a>.</p>';
        document.getElementById('cartTotal').innerHTML = '';
        return;
    }
    let total = 0;
    let html = '<div class="cart-items">';
    cart.forEach(item => {
        total += item.price * item.quantity;
        html += `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" style="width:80px; height:80px; object-fit:cover; border-radius:12px;">
                <div class="cart-item-details"><h3>${escapeHtml(item.name)}</h3><p>${item.price} BYN</p></div>
                <div class="cart-item-actions">
                    <button class="cart-qty-btn" data-id="${item.id}" data-delta="-1">-</button>
                    <span class="cart-qty">${item.quantity}</span>
                    <button class="cart-qty-btn" data-id="${item.id}" data-delta="1">+</button>
                    <button class="cart-remove-btn" data-id="${item.id}">🗑️</button>
                </div>
                <div class="cart-item-total">${(item.price * item.quantity).toFixed(2)} BYN</div>
            </div>
        `;
    });
    html += '</div>';
    container.innerHTML = html;
    document.getElementById('cartTotal').innerHTML = `<h3>Итого: ${total.toFixed(2)} BYN</h3>`;
    document.querySelectorAll('.cart-qty-btn').forEach(btn => {
        btn.addEventListener('click', () => updateQuantity(parseInt(btn.dataset.id), parseInt(btn.dataset.delta)));
    });
    document.querySelectorAll('.cart-remove-btn').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
    });
}
function clearCart() {
    if (confirm('Оформить заказ? Корзина будет очищена.')) {
        localStorage.removeItem('cart');
        if (document.getElementById('cartContainer')) renderCart();
        alert('Спасибо за заказ! Мы свяжемся с вами.');
    }
}

// ========== ФУНКЦИИ ОТРИСОВКИ МЕНЮ ==========
function renderPopular() {
    const grid = document.getElementById('popularGrid');
    if (!grid) return;
    grid.innerHTML = '';
    popularItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.dataset.name = item.name;
        card.dataset.description = item.description;
        card.dataset.ingredients = item.ingredients || "Информация отсутствует";
        card.dataset.nutrition = item.nutrition || "Информация отсутствует";
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => { if (!e.target.closest('.add-to-cart-btn')) openModal(card); });
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width:100%; height:180px; object-fit:cover; border-radius:20px 20px 0 0;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div style="background-color:#DCC9A9; height:180px; display:none; align-items:center; justify-content:center; border-radius:20px 20px 0 0;">
                <span style="font-size:1.5rem; font-weight:bold; color:#4E6851;">${item.name}</span>
            </div>
            <div style="padding:15px;">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span class="price">${item.price} BYN</span>
                <button class="add-to-cart-btn" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}" data-image="${item.image}">🛒 В корзину</button>
            </div>
        `;
        grid.appendChild(card);
    });
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(parseInt(btn.dataset.id), btn.dataset.name, parseFloat(btn.dataset.price), btn.dataset.image);
        });
    });
}

function renderMenuByCategory(category = "all") {
    const grid = document.getElementById('menuGrid');
    if (!grid) return;
    let itemsToShow = category === "all" ? menuItems : menuItems.filter(item => item.category === category);
    grid.innerHTML = '';
    itemsToShow.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.dataset.name = item.name;
        card.dataset.description = item.description;
        card.dataset.ingredients = item.ingredients || "Информация отсутствует";
        card.dataset.nutrition = item.nutrition || "Информация отсутствует";
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => { if (!e.target.closest('.add-to-cart-btn')) openModal(card); });
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width:100%; height:180px; object-fit:cover; border-radius:20px 20px 0 0;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div style="background-color:#DCC9A9; height:180px; display:none; align-items:center; justify-content:center; border-radius:20px 20px 0 0;">
                <span style="font-size:1.5rem; font-weight:bold; color:#4E6851;">${item.name}</span>
            </div>
            <div style="padding:15px;">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span class="price">${item.price} BYN</span>
                <button class="add-to-cart-btn" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}" data-image="${item.image}">🛒 В корзину</button>
            </div>
        `;
        grid.appendChild(card);
    });
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(parseInt(btn.dataset.id), btn.dataset.name, parseFloat(btn.dataset.price), btn.dataset.image);
        });
    });
}

function initFilters() {
    const container = document.getElementById('filterButtons');
    if (!container) return;
    const categories = [
        { key: "all", label: "Все" },
        { key: "hot", label: "☕ Горячие напитки" },
        { key: "cold", label: "🥤 Холодные напитки" },
        { key: "dessert", label: "🍰 Десерты" },
        { key: "sandwich", label: "🥐 Круассан-сэндвич" }
    ];
    container.innerHTML = '';
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.textContent = cat.label;
        btn.classList.add('filter-btn');
        if (cat.key === 'all') btn.classList.add('active');
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenuByCategory(cat.key);
        });
        container.appendChild(btn);
    });
}

// ========== МОДАЛЬНОЕ ОКНО ==========
let modal, overlay, modalTitle, modalDescription, modalIngredients, modalNutrition;
function createModal() {
    overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:999; display:none;';
    document.body.appendChild(overlay);
    modal = document.createElement('div');
    modal.style.cssText = 'position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); background:#FFF9F5; padding:20px; border-radius:20px; z-index:1000; width:90%; max-width:500px; display:none; box-shadow:0 5px 20px rgba(0,0,0,0.3); max-height:80vh; overflow-y:auto; font-family:Inter, sans-serif;';
    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = 'float:right; font-size:28px; font-weight:bold; cursor:pointer; color:#aaa;';
    closeBtn.onmouseover = () => closeBtn.style.color = '#AC5045';
    closeBtn.onmouseout = () => closeBtn.style.color = '#aaa';
    closeBtn.onclick = () => { modal.style.display = 'none'; overlay.style.display = 'none'; };
    modal.appendChild(closeBtn);
    modalTitle = document.createElement('h2');
    modalTitle.style.color = '#4E6851';
    modalTitle.style.marginTop = '0';
    modal.appendChild(modalTitle);
    modalDescription = document.createElement('p');
    modalDescription.style.cssText = 'color:#5a4a3c; font-style:italic; margin-bottom:15px;';
    modal.appendChild(modalDescription);
    const ingrTitle = document.createElement('h3');
    ingrTitle.textContent = 'Состав';
    ingrTitle.style.color = '#AC5045';
    modal.appendChild(ingrTitle);
    modalIngredients = document.createElement('p');
    modal.appendChild(modalIngredients);
    const nutrTitle = document.createElement('h3');
    nutrTitle.textContent = 'Пищевая ценность (КБЖУ)';
    nutrTitle.style.color = '#AC5045';
    modal.appendChild(nutrTitle);
    modalNutrition = document.createElement('p');
    modal.appendChild(modalNutrition);
    document.body.appendChild(modal);
    overlay.onclick = () => { modal.style.display = 'none'; overlay.style.display = 'none'; };
}
function openModal(card) {
    if (!modal) createModal();
    modalTitle.textContent = card.dataset.name;
    modalDescription.textContent = card.dataset.description || '';
    modalIngredients.textContent = card.dataset.ingredients || 'Информация отсутствует';
    modalNutrition.textContent = card.dataset.nutrition || 'Информация отсутствует';
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

// ========== БУРГЕР-МЕНЮ ==========
function initBurger() {
    const burger = document.getElementById('burgerBtn');
    const nav = document.getElementById('navMenu');
    if (!burger || !nav) return;
    burger.addEventListener('click', () => nav.classList.toggle('active'));
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('active'));
    });
}

// ========== ФОРМА ОБРАТНОЙ СВЯЗИ ==========
function initForm() {
    const form = document.getElementById('feedbackForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Спасибо! Ваше сообщение отправлено.');
            form.reset();
        });
    }
}

// ========== КНОПКА "НАВЕРХ" ==========
function initScrollTop() {
    const btn = document.getElementById('scrollTopBtn');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.style.display = window.scrollY > 300 ? 'flex' : 'none';
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========
document.addEventListener('DOMContentLoaded', () => {
    const hasPopularGrid = document.getElementById('popularGrid');
    const hasMenuGrid = document.getElementById('menuGrid');
    const hasReviewsGrid = document.getElementById('reviewsGrid');
    const hasCartContainer = document.getElementById('cartContainer');

    if (hasCartContainer) {
        renderCart();
        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) checkoutBtn.addEventListener('click', clearCart);
        initBurger();
        initForm();
        initScrollTop();
        return;
    }

    if (hasPopularGrid && !hasMenuGrid) renderPopular();
    else if (hasMenuGrid) { initFilters(); renderMenuByCategory('all'); }
    else if (hasReviewsGrid) { renderReviews(); initReviewForm(); }

    initBurger();
    initForm();
    initScrollTop();
});