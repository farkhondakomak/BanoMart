/**
 * BanoMart - Complete Shopping Cart & Order System
 * Professional E-commerce Functionality
 */

// ==================== PRODUCT DATABASE ====================
const productsDB = [
    // Featured Products (index.html)
    { id: 1, name: "شال کشمیری", price: 250, image: "img/photo1.jpeg", category: "پوشاک" },
    { id: 2, name: "بلوز زنانه فری‌سایز", price: 250, image: "img/photo2.jpeg", category: "پوشاک" },
    { id: 3, name: "حجاب زنانه", price: 1500, image: "img/photo3.jpeg", category: "پوشاک" },
    { id: 4, name: "ساعت زنانه", price: 700, image: "img/photo4.jpeg", category: "ساعت" },
    { id: 5, name: "هدفون", price: 700, image: "img/photo5.jpeg", category: "اکسسوری" },
    { id: 6, name: "لباس خواب", price: 400, image: "img/photo6.jpeg", category: "پوشاک" },
    { id: 7, name: "پاپوش زنانه", price: 400, image: "img/photo7.jpeg", category: "کیف و کفش" },
    { id: 8, name: "لباس زنانه", price: 5000, image: "img/photo8.jpeg", category: "پوشاک" },
    { id: 9, name: "حجاب کشمیری", price: 3500, image: "img/photo9.jpeg", category: "پوشاک" },
    { id: 10, name: "ست‌تختی نخی", price: 1200, image: "img/photo10.jpeg", category: "دکوراسیون" },
    { id: 11, name: "لیپ گلاس", price: 100, image: "img/photo11.jpeg", category: "آرایشی" },
    { id: 12, name: "رژگونه", price: 100, image: "img/photo12.jpeg", category: "آرایشی" },
    { id: 13, name: "کریم دور چشم", price: 350, image: "img/photo13.jpeg", category: "آرایشی" },
    
    // Watches (watches.html)
    { id: 101, name: "ساعت زنانه کلاسیک", price: 700, image: "img/photo4.jpeg", category: "ساعت" },
    { id: 102, name: "ساعت مچی لوکس", price: 1100, image: "img/700.jpg", category: "ساعت" },
    { id: 103, name: "ساعت اسپرت", price: 500, image: "img/701.jpg", category: "ساعت" },
    { id: 104, name: "ساعت طلایی", price: 1500, image: "img/702.jpg", category: "ساعت" },
    { id: 105, name: "ساعت نقره‌ای", price: 800, image: "img/703.jpg", category: "ساعت" },
    
    // Gift Packs (gift-packs.html)
    { id: 201, name: "پک هدیه VIP زنانه", price: 4500, image: "img/600.jpg", category: "پک هدیه" },
    { id: 202, name: "پک هدیه مردانه", price: 3800, image: "img/601.jpg", category: "پک هدیه" },
    { id: 203, name: "پک خاص زنانه", price: 2200, image: "img/602.jpg", category: "پک هدیه" },
    { id: 204, name: "پک هدیه زیبا", price: 5500, image: "img/603.jpg", category: "پک هدیه" },
    { id: 205, name: "پک زیورات", price: 8500, image: "img/604.jpg", category: "پک هدیه" },
    { id: 206, name: "پک خاص", price: 3200, image: "img/605.jpg", category: "پک هدیه" },
    
    // Fragrances (fragrances.html)
    { id: 301, name: "اسپری حیاتی", price: 200, image: "img/500.jpg", category: "عطریات" },
    { id: 302, name: "عطر خمره", price: 900, image: "img/501.jpg", category: "عطریات" },
    { id: 303, name: "پک عطر", price: 500, image: "img/502.jpg", category: "عطریات" },
    { id: 304, name: "عطر جورجینا", price: 400, image: "img/503.jpg", category: "عطریات" },
    { id: 305, name: "اسپری Dove", price: 250, image: "img/504.jpg", category: "عطریات" },
    { id: 306, name: "اسپری FOGG", price: 200, image: "img/505.jpg", category: "عطریات" },
    { id: 307, name: "اسپری NIVEA", price: 200, image: "img/506.jpg", category: "عطریات" },
    { id: 308, name: "عطر Pink Dress", price: 200, image: "img/507.jpg", category: "عطریات" },
    { id: 309, name: "عطر حیات", price: 650, image: "img/508.jpg", category: "عطریات" },
    { id: 310, name: "عطر LIBRE", price: 700, image: "img/509.jpg", category: "عطریات" },
    { id: 311, name: "عطر Miss Dear", price: 350, image: "img/512.jpg", category: "عطریات" },
    
    // Decor (decor.html)
    { id: 401, name: "چراغ تری دی ۱", price: 600, image: "img/400.jpg", category: "دکوراسیون" },
    { id: 402, name: "چراغ تری دی ۲", price: 600, image: "img/401.jpg", category: "دکوراسیون" },
    { id: 403, name: "چراغ تری دی ۳", price: 600, image: "img/402.jpg", category: "دکوراسیون" },
    { id: 404, name: "آویز دیوار فانتزی ۱", price: 150, image: "img/403.jpg", category: "دکوراسیون" },
    { id: 405, name: "آویز دیوار فانتزی ۲", price: 60, image: "img/404.jpg", category: "دکوراسیون" },
    
    // Cosmetics (cosmetics.html)
    { id: 501, name: "لیپ گلاس حجم‌دهنده", price: 150, image: "img/photo11.jpeg", category: "آرایشی" },
    { id: 502, name: "رژگونه مایع شاین", price: 250, image: "img/photo12.jpeg", category: "آرایشی" },
    { id: 503, name: "سایه لبریسنی", price: 60, image: "img/305.jpg", category: "آرایشی" },
    { id: 504, name: "لیپ گلاس", price: 100, image: "img/316.jpg", category: "آرایشی" },
    { id: 505, name: "هایلتر ۱", price: 100, image: "img/320.jpg", category: "آرایشی" },
    { id: 506, name: "هایلتر ۲", price: 100, image: "img/321.jpg", category: "آرایشی" },
    { id: 507, name: "هایلتر ۳", price: 100, image: "img/322.jpg", category: "آرایشی" },
    { id: 508, name: "رژ لب پیل آف", price: 100, image: "img/323.jpg", category: "آرایشی" },
    { id: 509, name: "پلیت آرایشی", price: 700, image: "img/324.jpg", category: "آرایشی" },
    { id: 510, name: "سیروم اوردینری ۱", price: 500, image: "img/300.jpg", category: "آرایشی" },
    { id: 511, name: "پک روتین پوستی", price: 1380, image: "img/301.jpg", category: "آرایشی" },
    { id: 512, name: "دستگاه فر عربی", price: 700, image: "img/302.jpg", category: "آرایشی" },
    { id: 513, name: "سیروم مژه لانبا", price: 150, image: "img/303.jpg", category: "آرایشی" },
    { id: 514, name: "ماسک صورت بایودنس", price: 100, image: "img/304.jpg", category: "آرایشی" },
    { id: 515, name: "کرم دور چشم", price: 80, image: "img/306.jpg", category: "آرایشی" },
    { id: 516, name: "ماسک صورت یارا", price: 50, image: "img/307.jpg", category: "آرایشی" },
    { id: 517, name: "ضد آفتاب فزیکی", price: 350, image: "img/308.jpg", category: "آرایشی" },
    { id: 518, name: "ضدآفتاب سنتلا", price: 300, image: "img/309.jpg", category: "آرایشی" },
    { id: 519, name: "ضد آفتاب بیوتی", price: 250, image: "img/310.jpg", category: "آرایشی" },
    { id: 520, name: "ضد آفتاب اکسس وای", price: 350, image: "img/311.jpg", category: "آرایشی" },
    { id: 521, name: "پک کوزارکس", price: 500, image: "img/313.jpg", category: "آرایشی" },
    { id: 522, name: "پک بهداشتی بانوان", price: 450, image: "img/314.jpg", category: "آرایشی" },
    { id: 523, name: "ابرسان کلینیک", price: 350, image: "img/318.jpg", category: "آرایشی" },
    { id: 524, name: "سیروم اوردینری ۲", price: 1200, image: "img/319.jpg", category: "آرایشی" },
    { id: 525, name: "ناخن مصنوعی", price: 200, image: "img/317.jpg", category: "آرایشی" },
    
    // Bags & Shoes (bags-shoes.html)
    { id: 601, name: "کفش زنانه ۱", price: 350, image: "img/photo50.jpg", category: "کیف و کفش" },
    { id: 602, name: "کفش زنانه ۲", price: 350, image: "img/photo51.jpg", category: "کیف و کفش" },
    { id: 603, name: "کفش زنانه ۳", price: 340, image: "img/photo52.jpg", category: "کیف و کفش" },
    { id: 604, name: "کفش زنانه ۴", price: 350, image: "img/photo53.jpg", category: "کیف و کفش" },
    { id: 605, name: "کفش زنانه ۵", price: 350, image: "img/photo54.jpg", category: "کیف و کفش" },
    { id: 606, name: "کفش زنانه ۶", price: 350, image: "img/photo55.jpg", category: "کیف و کفش" },
    { id: 607, name: "کفش زنانه ۷", price: 350, image: "img/photo60.jpg", category: "کیف و کفش" },
    { id: 608, name: "کفش زنانه ۸", price: 350, image: "img/photo61.jpg", category: "کیف و کفش" },
    { id: 609, name: "کفش زنانه ۹", price: 350, image: "img/photo62.jpg", category: "کیف و کفش" },
    { id: 610, name: "کفش زنانه ۱۰", price: 350, image: "img/photo63.jpg", category: "کیف و کفش" },
    { id: 611, name: "کفش زنانه ۱۱", price: 350, image: "img/photo64.jpg", category: "کیف و کفش" },
    { id: 612, name: "کفش زنانه ۱۲", price: 350, image: "img/photo65.jpg", category: "کیف و کفش" },
    { id: 613, name: "پاپوش زنانه", price: 400, image: "img/photo7.jpeg", category: "کیف و کفش" },
    { id: 614, name: "کفش مردانه ۱", price: 2000, image: "img/photo70.jpg", category: "کیف و کفش" },
    { id: 615, name: "کفش مردانه ۲", price: 1700, image: "img/photo71.jpg", category: "کیف و کفش" },
    { id: 616, name: "کفش مردانه ۳", price: 1700, image: "img/photo72.jpg", category: "کیف و کفش" },
    { id: 617, name: "کفش مردانه ۴", price: 1800, image: "img/photo73.jpg", category: "کیف و کفش" },
    { id: 618, name: "کفش مردانه ۵", price: 2000, image: "img/photo74.jpg", category: "کیف و کفش" },
    { id: 619, name: "کفش مردانه ۶", price: 1700, image: "img/photo75.jpg", category: "کیف و کفش" },
    { id: 620, name: "کفش طفلانه ۱", price: 350, image: "img/photo100.jpg", category: "کیف و کفش" },
    { id: 621, name: "کفش طفلانه ۲", price: 350, image: "img/photo101.jpg", category: "کیف و کفش" },
    { id: 622, name: "کفش طفلانه ۳", price: 350, image: "img/photo102.jpg", category: "کیف و کفش" },
    { id: 623, name: "کفش طفلانه ۴", price: 350, image: "img/photo103.jpg", category: "کیف و کفش" },
    { id: 624, name: "کفش طفلانه ۵", price: 350, image: "img/photo104.jpg", category: "کیف و کفش" },
    { id: 625, name: "کفش طفلانه ۶", price: 350, image: "img/photo105.jpg", category: "کیف و کفش" },
    
    // Apparel (apparel.html)
    { id: 701, name: "لباس عربی ۱", price: 2000, image: "img/photo20.jpeg", category: "پوشاک" },
    { id: 702, name: "لباس عربی ۲", price: 2000, image: "img/photo21.jpeg", category: "پوشاک" },
    { id: 703, name: "پیراهن بهاری ۱", price: 1200, image: "img/photo22.jpeg", category: "پوشاک" },
    { id: 704, name: "پیراهن بهاری ۲", price: 1500, image: "img/photo23.jpeg", category: "پوشاک" },
    { id: 705, name: "لباس چرمه دوزی", price: 3000, image: "img/photo24.jpg", category: "پوشاک" },
    { id: 706, name: "مانتو جین", price: 1200, image: "img/photo25.jpg", category: "پوشاک" },
    { id: 707, name: "لباس محفلی", price: 1200, image: "img/photo8.jpeg", category: "پوشاک" },
    { id: 708, name: "حجاب کشمیری", price: 3500, image: "img/photo9.jpeg", category: "پوشاک" },
    { id: 709, name: "حجاب ساده", price: 1500, image: "img/photo3.jpeg", category: "پوشاک" },
    { id: 710, name: "لباس خواب", price: 400, image: "img/photo6.jpeg", category: "پوشاک" },
    { id: 711, name: "بلوز فری‌سایز", price: 400, image: "img/photo2.jpeg", category: "پوشاک" },
    { id: 712, name: "کت و شلوار رسمی", price: 1500, image: "img/photo30.jpg", category: "پوشاک" },
    { id: 713, name: "پیراهن کتان اسپرت", price: 1500, image: "img/photo31.jpg", category: "پوشاک" },
    { id: 714, name: "تی‌شرت نخی", price: 1500, image: "img/photo32.jpg", category: "پوشاک" },
    { id: 715, name: "شلوار جین", price: 1500, image: "img/photo33.jpg", category: "پوشاک" },
    { id: 716, name: "پلیور بافتنی", price: 1500, image: "img/photo34.jpg", category: "پوشاک" },
    { id: 717, name: "کاپشن بهاره", price: 1500, image: "img/photo35.jpg", category: "پوشاک" },
    { id: 718, name: "لباس طفلانه ۱", price: 1500, image: "img/photo90.jpg", category: "پوشاک" },
    { id: 719, name: "لباس طفلانه ۲", price: 1100, image: "img/photo91.jpg", category: "پوشاک" },
    { id: 720, name: "لباس طفلانه ۳", price: 850, image: "img/photo92.jpg", category: "پوشاک" },
    { id: 721, name: "لباس طفلانه ۴", price: 1300, image: "img/photo93.jpg", category: "پوشاک" },
    { id: 722, name: "لباس طفلانه ۵", price: 2600, image: "img/photo94.jpg", category: "پوشاک" },
    { id: 723, name: "لباس طفلانه ۶", price: 1800, image: "img/photo95.jpg", category: "پوشاک" },
    
    // Accessories (accessories.html)
    { id: 801, name: "اکسسوری ۱", price: 300, image: "img/200.jpg", category: "اکسسوری" },
    { id: 802, name: "اکسسوری ۲", price: 300, image: "img/201.jpg", category: "اکسسوری" },
    { id: 803, name: "اکسسوری ۳", price: 300, image: "img/202.jpg", category: "اکسسوری" },
    { id: 804, name: "اکسسوری ۴", price: 300, image: "img/203.jpg", category: "اکسسوری" },
    { id: 805, name: "اکسسوری ۵", price: 300, image: "img/204.jpg", category: "اکسسوری" },
    { id: 806, name: "اکسسوری ۶", price: 300, image: "img/205.jpg", category: "اکسسوری" },
    { id: 807, name: "اکسسوری ۷", price: 300, image: "img/206.jpg", category: "اکسسوری" },
    { id: 808, name: "اکسسوری ۸", price: 300, image: "img/207.jpg", category: "اکسسوری" },
    { id: 809, name: "اکسسوری ۹", price: 300, image: "img/208.jpg", category: "اکسسوری" },
    { id: 810, name: "اکسسوری ۱۰", price: 300, image: "img/209.jpg", category: "اکسسوری" }
];

// ==================== SHOPPING CART CLASS ====================
class ShoppingCart {
    constructor() {
        this.items = [];
        this.loadFromStorage();
        this.init();
    }

    init() {
        this.cacheDOM();
        this.bindEvents();
        this.updateCartUI();
    }

    cacheDOM() {
        // Cart elements
        this.cartOverlay = document.getElementById('cartOverlay');
        this.cartDrawer = document.getElementById('cartDrawer');
        this.cartBody = document.getElementById('cartBody');
        this.cartFooter = document.getElementById('cartFooter');
        this.cartEmpty = document.getElementById('cartEmpty');
        this.cartTotal = document.getElementById('cartTotal');
        this.cartClose = document.getElementById('cartClose');
        this.checkoutBtn = document.getElementById('checkoutBtn');

        // Search elements
        this.searchModal = document.getElementById('searchModal');
        this.searchClose = document.getElementById('searchClose');
        this.searchInput = document.getElementById('searchInput');
        this.searchResults = document.getElementById('searchResults');

        // Order elements
        this.orderModal = document.getElementById('orderModal');
        this.orderClose = document.getElementById('orderClose');
        this.orderForm = document.getElementById('orderForm');
        this.orderItems = document.getElementById('orderItems');
        this.orderTotal = document.getElementById('orderTotal');

        // Badges
        this.cartBadge = document.getElementById('cartBadge');
        this.cartBadgeMobile = document.getElementById('cartBadgeMobile');
    }

    bindEvents() {
        // Cart triggers
        const cartTriggers = ['cartTrigger', 'cartTriggerMobile'];
        cartTriggers.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.openCart();
                });
            }
        });

        // Search triggers
        const searchTriggers = ['searchTrigger', 'searchTriggerMobile'];
        searchTriggers.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.openSearch();
                });
            }
        });

        // Close buttons
        this.cartClose?.addEventListener('click', () => this.closeCart());
        this.cartOverlay?.addEventListener('click', () => this.closeCart());
        this.searchClose?.addEventListener('click', () => this.closeSearch());
        this.orderClose?.addEventListener('click', () => this.closeOrderModal());
        this.checkoutBtn?.addEventListener('click', () => this.openOrderModal());

        // Search input
        this.searchInput?.addEventListener('input', (e) => this.handleSearch(e.target.value));

        // Order form
        this.orderForm?.addEventListener('submit', (e) => this.handleOrderSubmit(e));

        // Close on backdrop click
        this.orderModal?.addEventListener('click', (e) => {
            if (e.target === this.orderModal) this.closeOrderModal();
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeCart();
                this.closeSearch();
                this.closeOrderModal();
            }
        });
    }

    // ==================== STORAGE ====================
    loadFromStorage() {
        try {
            const saved = localStorage.getItem('banomart_cart');
            if (saved) {
                this.items = JSON.parse(saved);
            }
        } catch (e) {
            console.warn('Could not load cart from storage');
        }
    }

    saveToStorage() {
        try {
            localStorage.setItem('banomart_cart', JSON.stringify(this.items));
        } catch (e) {
            console.warn('Could not save cart to storage');
        }
    }

    // ==================== CART OPERATIONS ====================
    addItem(product) {
        const existing = this.items.find(item => item.id === product.id);
        if (existing) {
            existing.qty++;
        } else {
            this.items.push({ ...product, qty: 1 });
        }
        this.saveToStorage();
        this.updateCartUI();
    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.saveToStorage();
        this.updateCartUI();
        this.showToast('محصول از سبد خرید حذف شد', 'success');
    }

    updateQty(id, change) {
        const item = this.items.find(item => item.id === id);
        if (!item) return;

        item.qty += change;
        if (item.qty <= 0) {
            this.removeItem(id);
        } else {
            this.saveToStorage();
            this.updateCartUI();
        }
    }

    // ==================== UI UPDATES ====================
    updateCartUI() {
        const totalItems = this.items.reduce((sum, item) => sum + item.qty, 0);
        const totalPrice = this.items.reduce((sum, item) => sum + (item.price * item.qty), 0);

        // Update badges
        const badges = [this.cartBadge, this.cartBadgeMobile].filter(Boolean);
        badges.forEach(badge => {
            badge.textContent = this.toPersianNum(totalItems);
            badge.style.display = totalItems > 0 ? 'block' : 'none';
        });

        // Update cart drawer
        if (this.items.length === 0) {
            if (this.cartEmpty) this.cartEmpty.style.display = 'block';
            if (this.cartFooter) this.cartFooter.style.display = 'none';
            const items = this.cartBody?.querySelectorAll('.cart-item');
            items?.forEach(item => item.remove());
        } else {
            if (this.cartEmpty) this.cartEmpty.style.display = 'none';
            if (this.cartFooter) this.cartFooter.style.display = 'block';
            this.renderCartItems();
        }

        // Update total
        if (this.cartTotal) {
            this.cartTotal.textContent = this.toPersianNum(totalPrice) + ' AFN';
        }
    }

    renderCartItems() {
        const existing = this.cartBody?.querySelectorAll('.cart-item');
        existing?.forEach(el => el.remove());

        this.items.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='img/logo.jpg'">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${this.toPersianNum(item.price)} AFN</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" data-action="decrease" data-id="${item.id}">-</button>
                        <span class="qty-value">${this.toPersianNum(item.qty)}</span>
                        <button class="qty-btn" data-action="increase" data-id="${item.id}">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" data-action="remove" data-id="${item.id}">
                    <i class="fas fa-trash-alt"></i>
                </button>
            `;
            
            this.cartBody?.insertBefore(itemEl, this.cartEmpty);

            itemEl.querySelectorAll('[data-action]').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(btn.dataset.id);
                    const action = btn.dataset.action;
                    if (action === 'increase') this.updateQty(id, 1);
                    else if (action === 'decrease') this.updateQty(id, -1);
                    else if (action === 'remove') this.removeItem(id);
                });
            });
        });
    }

    // ==================== MODAL CONTROLS ====================
    openCart() {
        this.cartOverlay?.classList.add('active');
        this.cartDrawer?.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeCart() {
        this.cartOverlay?.classList.remove('active');
        this.cartDrawer?.classList.remove('active');
        document.body.style.overflow = '';
    }

    openSearch() {
        this.searchModal?.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => this.searchInput?.focus(), 100);
    }

    closeSearch() {
        this.searchModal?.classList.remove('active');
        document.body.style.overflow = '';
        if (this.searchInput) this.searchInput.value = '';
        if (this.searchResults) this.searchResults.innerHTML = '';
    }

    openOrderModal() {
        this.closeCart();
        this.renderOrderSummary();
        this.orderModal?.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeOrderModal() {
        this.orderModal?.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ==================== SEARCH ====================
    handleSearch(query) {
        if (!query.trim()) {
            if (this.searchResults) this.searchResults.innerHTML = '';
            return;
        }

        const normalized = query.toLowerCase().trim();
        const results = productsDB.filter(p => 
            p.name.toLowerCase().includes(normalized) ||
            p.category.toLowerCase().includes(normalized)
        );

        this.renderSearchResults(results, query);
    }

    renderSearchResults(results, query) {
        if (!this.searchResults) return;

        if (results.length === 0) {
            this.searchResults.innerHTML = `
                <div class="search-no-results">
                    <i class="fas fa-search-minus fs-1 mb-3"></i>
                    <p>محصولی با نام "${query}" یافت نشد</p>
                </div>
            `;
            return;
        }

        this.searchResults.innerHTML = results.map(p => `
            <div class="search-result-item" data-id="${p.id}">
                <img src="${p.image}" alt="${p.name}" class="search-result-img" onerror="this.src='img/logo.jpg'">
                <div class="search-result-info">
                    <h6>${p.name}</h6>
                    <p>${this.toPersianNum(p.price)} AFN - ${p.category}</p>
                </div>
                <i class="fas fa-plus-circle text-vibrant-orange ms-auto"></i>
            </div>
        `).join('');

        this.searchResults.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const id = parseInt(item.dataset.id);
                const product = productsDB.find(p => p.id === id);
                if (product) {
                    this.addItem(product);
                    this.animateBadge();
                    this.showToast('محصول با موفقیت به سبد خرید اضافه شد!', 'success');
                    this.closeSearch();
                }
            });
        });
    }

    // ==================== ORDER ====================
    renderOrderSummary() {
        const total = this.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
        
        if (this.orderItems) {
            this.orderItems.innerHTML = this.items.map(item => `
                <div class="order-item-mini">
                    <span class="text-white">${item.name} × ${this.toPersianNum(item.qty)}</span>
                    <span class="text-vibrant-orange">${this.toPersianNum(item.price * item.qty)} AFN</span>
                </div>
            `).join('');
        }

        if (this.orderTotal) {
            this.orderTotal.textContent = this.toPersianNum(total) + ' AFN';
        }
    }

    handleOrderSubmit(e) {
        e.preventDefault();

        const name = document.getElementById('customerName')?.value.trim();
        const phone = document.getElementById('customerPhone')?.value.trim();
        const address = document.getElementById('customerAddress')?.value.trim();
        const note = document.getElementById('customerNote')?.value.trim();

        if (!name || !phone || !address) {
            this.showToast('لطفاً همه فیلدهای ضروری را پر کنید', 'error');
            return;
        }

        const phoneRegex = /^(07|0093|\+93)\d{8,9}$/;
        if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
            this.showToast('شماره تماس معتبر نیست (مثال: 0744318367)', 'error');
            return;
        }

        const total = this.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
        
        let message = `🛒 *سفارش جدید از بانومارت*%0A%0A`;
        message += `👤 *نام:* ${name}%0A`;
        message += `📱 *شماره:* ${phone}%0A`;
        message += `📍 *آدرس:* ${address}%0A%0A`;
        message += `📦 *محصولات:*%0A`;
        
        this.items.forEach(item => {
            message += `• ${item.name} - ${this.toPersianNum(item.qty)} عدد - ${this.toPersianNum(item.price * item.qty)} AFN%0A`;
        });
        
        message += `%0A💰 *جمع کل:* ${this.toPersianNum(total)} AFN%0A`;
        if (note) message += `%0A📝 *توضیحات:* ${note}`;

        const whatsappNumber = '93744318367';
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
        
        window.open(whatsappURL, '_blank');

        this.items = [];
        this.saveToStorage();
        this.updateCartUI();
        this.closeOrderModal();
        this.showToast('سفارش شما با موفقیت ثبت شد!', 'success');
    }

    // ==================== UTILITIES ====================
    toPersianNum(num) {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return num.toString().replace(/\d/g, d => persianDigits[d]);
    }

    animateBadge() {
        const badges = [this.cartBadge, this.cartBadgeMobile].filter(Boolean);
        badges.forEach(badge => {
            badge.classList.add('pulse');
            setTimeout(() => badge.classList.remove('pulse'), 500);
        });
    }

    showToast(message, type = 'success') {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `bano-toast toast-${type}`;
        
        const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
        
        toast.innerHTML = `
            <i class="fas ${icon}"></i>
            <span>${message}</span>
        `;

        container.appendChild(toast);

        // Auto remove after 2.5 seconds
        setTimeout(() => {
            toast.classList.add('hide');
            setTimeout(() => toast.remove(), 400);
        }, 2500);
    }
}

// ==================== GLOBAL FUNCTIONS ====================
function addToCart(id, name, price, image) {
    const product = productsDB.find(p => p.id === id) || { id, name, price, image, category: 'متفرقه' };
    if (window.banoCart) {
        window.banoCart.addItem(product);
        window.banoCart.animateBadge();
        window.banoCart.showToast('محصول با موفقیت به سبد خرید اضافه شد!', 'success');
    }
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize shopping cart
    window.banoCart = new ShoppingCart();

    // Global image error handler
    document.addEventListener('error', function (e) {
        if (e.target.tagName.toLowerCase() === 'img') {
            e.target.src = 'img/logo.jpg';
        }
    }, true);

    // Initialize AOS
    try {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                once: true,
                offset: 100
            });
        }
    } catch (e) {
        console.warn('AOS initialization failed:', e);
    }

    // Counter animation
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target) || 0;
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        let display = Math.ceil(current);
                        if (target >= 1000) display += '+';
                        counter.textContent = window.banoCart ? window.banoCart.toPersianNum(display) : display;
                        requestAnimationFrame(updateCounter);
                    } else {
                        let final = target;
                        if (target === 100000) final = '100K+';
                        else if (target >= 500) final = target + '+';
                        counter.textContent = window.banoCart ? window.banoCart.toPersianNum(final) : final;
                    }
                };
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.2 });

    counters.forEach(c => counterObserver.observe(c));

    // Tilt effect for hero card
    const tiltCard = document.getElementById('tilt-card');
    if (tiltCard && window.innerWidth > 991) {
        document.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const xRotation = ((clientY / innerHeight) - 0.5) * 10;
            const yRotation = ((clientX / innerWidth) - 0.5) * -10;
            tiltCard.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        });
    }

    // Back to top button
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('show', window.scrollY > 500);
        });
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId.startsWith('#')) return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse?.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });

    // Manual AOS trigger if library fails
    const aosElements = document.querySelectorAll('[data-aos]');
    if (aosElements.length > 0 && typeof AOS === 'undefined') {
        const aosObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                }
            });
        }, { threshold: 0.1 });
        aosElements.forEach(el => aosObserver.observe(el));
    }

    // Image error handlers
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'img/logo.jpg';
        });
    });
});