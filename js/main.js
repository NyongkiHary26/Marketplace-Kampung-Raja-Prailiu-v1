// Konversi ke format Rupiah
const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(number);
};

let currentProducts = [...productsData];
let cart = [];

// =====================================
// RENDER PRODUK
// =====================================
function renderProducts(products) {
    const grid = document.getElementById('product-grid');
    const noMsg = document.getElementById('no-product-msg');
    
    grid.innerHTML = '';
    
    if (products.length === 0) {
        grid.classList.add('hidden');
        noMsg.classList.remove('hidden');
        return;
    }
    
    grid.classList.remove('hidden');
    noMsg.classList.add('hidden');

    products.forEach(product => {
        // Tentukan warna badge pewarna
        let badgeColor = product.pewarna.toLowerCase() === 'alami' ? 'text-green-600' : 
                         product.pewarna.toLowerCase() === 'kimia' ? 'text-red-500' : 'text-blue-500';

        const card = document.createElement('div');
        card.className = 'bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col';
        card.onclick = () => openProductModal(product.id);
        
        card.innerHTML = `
            <div class="relative h-64 overflow-hidden bg-gray-100">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                <div class="absolute top-3 right-3 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm text-gray-700">
                    ${product.category}
                </div>
            </div>
            <div class="p-5 flex flex-col flex-grow">
                <p class="text-xs text-brand font-semibold mb-1 flex items-center gap-1">
                    <i class="fa-solid fa-store"></i> ${product.galeri || 'Galeri Sumba'}
                </p>
                <div class="flex justify-between items-start mb-2">
                    <h3 class="font-bold text-gray-900 text-lg leading-tight group-hover:text-brand transition-colors">${product.name}</h3>
                </div>
                <p class="text-sm text-gray-500 mb-4 line-clamp-1">Motif: ${product.motif}</p>
                <div class="mt-auto flex items-center justify-between">
                    <span class="font-extrabold text-brand text-lg">${formatRupiah(product.price)}</span>
                    <button class="w-10 h-10 rounded-full bg-brand-lighter/30 text-brand flex items-center justify-center hover:bg-brand hover:text-white transition-colors" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// =====================================
// FILTER & SEARCH
// =====================================
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryTerm = document.getElementById('category-filter').value;

    currentProducts = productsData.filter(product => {
        const matchSearch = product.name.toLowerCase().includes(searchTerm) || product.motif.toLowerCase().includes(searchTerm);
        const matchCategory = categoryTerm === 'all' || product.category === categoryTerm;
        return matchSearch && matchCategory;
    });

    renderProducts(currentProducts);
}

// Fungsi ketika Kategori di-klik
function pilihKategori(kategori) {
    const select = document.getElementById('category-filter');
    select.value = kategori;
    filterProducts();
    
    // Scroll mulus ke bagian produk
    document.getElementById('produk').scrollIntoView({ behavior: 'smooth' });
}

// Event Listener Search
document.getElementById('searchInput').addEventListener('input', filterProducts);

// =====================================
// MODAL DETAIL PRODUK
// =====================================
let selectedProduct = null;

function openProductModal(id) {
    const product = productsData.find(p => p.id === id);
    if(!product) return;
    
    selectedProduct = product;

    // Isi Konten
    document.getElementById('modal-img').src = product.image;
    document.getElementById('modal-category').innerText = product.category;
    
    // MENAMPILKAN ASAL GALERI DI MODAL DETAIL
    const modalGaleriEl = document.getElementById('modal-galeri');
    if (modalGaleriEl) {
        modalGaleriEl.innerText = product.galeri || 'Galeri Sumba';
    }
    
    document.getElementById('modal-title').innerText = product.name;
    document.getElementById('modal-price').innerText = formatRupiah(product.price);
    
    document.getElementById('modal-pewarna').innerText = product.pewarna;
    document.getElementById('modal-motif').innerText = product.motif;
    document.getElementById('modal-makna').innerText = product.makna;

    // Aksi Tombol
    document.getElementById('btn-modal-beli').onclick = () => {
        addToCart(product.id);
        closeModal('product-modal');
    };
    
    // MENERUSKAN BELI LANGSUNG KE NOMOR WA GALERI ASAL
    document.getElementById('btn-modal-beli-langsung').onclick = () => {
        const targetWa = product.noWa || '6281234567891'; // Fallback jika noWa produk lupa diisi
        const text = `Halo, saya tertarik untuk membeli langsung: *${product.name}* seharga ${formatRupiah(product.price)}. Apakah stoknya tersedia?`;
        window.open(`https://wa.me/${targetWa}?text=${encodeURIComponent(text)}`, '_blank');
    };

    document.getElementById('btn-modal-tawar').onclick = () => {
        closeModal('product-modal');
        openTawarModal();
    };

    document.getElementById('product-modal').classList.remove('hidden');
}

// =====================================
// MODAL TAWAR HARGA
// =====================================
function openTawarModal() {
    if(!selectedProduct) return;
    document.getElementById('tawar-harga-asli').innerText = formatRupiah(selectedProduct.price);
    document.getElementById('input-tawar').value = '';
    
    // MENERUSKAN KIRIM TAWARAN KE NOMOR WA GALERI ASAL
    document.getElementById('btn-kirim-tawar').onclick = () => {
        const nominal = document.getElementById('input-tawar').value;
        if(!nominal || nominal <= 0) return alert("Masukkan nominal tawaran yang valid.");
        
        const targetWa = selectedProduct.noWa || '6281234567891'; // Fallback jika noWa produk lupa diisi
        const text = `Halo, saya tertarik dengan *${selectedProduct.name}*. Saya ingin mengajukan penawaran harga sebesar *${formatRupiah(nominal)}*. Apakah memungkinkan?`;
        window.open(`https://wa.me/${targetWa}?text=${encodeURIComponent(text)}`, '_blank');
        closeModal('tawar-modal');
    };

    document.getElementById('tawar-modal').classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

// =====================================
// SISTEM KERANJANG
// =====================================
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    sidebar.classList.toggle('hidden');
    renderCart();
}

function addToCart(id) {
    const product = productsData.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    
    if(existing) {
        existing.qty += 1;
    } else {
        cart.push({...product, qty: 1});
    }
    
    updateCartBadge();
    showToast(`Berhasil`, `${product.name} ditambahkan ke keranjang!`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartBadge();
    renderCart();
}

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    
    if (totalItems > 0) {
        badge.innerText = totalItems;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

function renderCart() {
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total');
    
    container.innerHTML = '';
    let total = 0;

    if(cart.length === 0) {
        container.innerHTML = `<div class="text-center text-gray-500 mt-10"><i class="fa-solid fa-cart-shopping text-4xl mb-3 text-gray-300"></i><p>Keranjang kosong</p></div>`;
    } else {
        cart.forEach(item => {
            total += item.price * item.qty;
            container.innerHTML += `
                <div class="flex gap-4 mb-4 pb-4 border-b border-gray-100 items-center">
                    <img src="${item.image}" class="w-16 h-16 object-cover rounded-lg">
                    <div class="flex-1">
                        <h4 class="font-bold text-sm text-gray-900 line-clamp-1">${item.name}</h4>
                        <div class="text-brand font-bold text-sm">${formatRupiah(item.price)} <span class="text-xs text-gray-400 font-normal">x${item.qty}</span></div>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="text-gray-400 hover:text-danger p-2"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
        });
    }
    totalEl.innerText = formatRupiah(total);
}

// Catatan: Checkout Keranjang tetap diarahkan ke Nomor Admin Utama (atau salah satu nomor pusat)
// karena isi keranjang bisa berisi campuran produk dari beberapa galeri sekaligus.
function checkoutWA() {
    if(cart.length === 0) return alert('Keranjang masih kosong!');
    
    let text = `*HALO, SAYA INGIN MEMESAN:*\n\n`;
    let total = 0;
    
    cart.forEach((item, index) => {
        text += `${index+1}. ${item.name} (${item.qty}x)\n   Subtotal: ${formatRupiah(item.price * item.qty)}\n`;
        total += item.price * item.qty;
    });
    
    text += `\n*Total Belanja: ${formatRupiah(total)}*`;
    window.open(`https://wa.me/6281234567891?text=${encodeURIComponent(text)}`, '_blank');
}

// =====================================
// TOAST NOTIFICATION
// =====================================
function showToast(title, msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-title').innerText = title;
    document.getElementById('toast-msg').innerText = msg;
    
    toast.classList.remove('translate-y-20', 'opacity-0');
    
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}

// Inisialisasi saat web dimuat
window.onload = () => {
    renderProducts(productsData);

    // Di bagian paling bawah main.js
window.onload = () => {
    // Pastikan ini memanggil productsData langsung
    renderProducts(productsData); 
};
};