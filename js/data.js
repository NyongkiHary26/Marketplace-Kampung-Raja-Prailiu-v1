const productsData = [
    // ==========================================
    // DATA DARI YOHANES K WANGULANGU
    // ==========================================
    {
        id: 1,
        name: "Kain Kambera",
        category: "Kain Utama (Hinggi/Lau)",
        price: 1000000,
        image: "assets/images/kain-kambera.jpg",
        motif: "Motif Mamuli dan Udang",
        makna: "Motif Mamuli dan Udang",
        pewarna: "Kombinasi / Tidak Berlaku",
        galeri: "Yohanes K Wangulangu",
        noWa: "6281237687057"
    },
    {
        id: 2,
        name: "Kain Kambera",
        category: "Kain Utama (Hinggi/Lau)",
        price: 1000000,
        image: "assets/images/kain-kambera1.jpg",
        motif: "Motif Udang dan mamuli",
        makna: "Motif Udang dan mamuli",
        pewarna: "Kombinasi / Tidak Berlaku",
        galeri: "Yohanes K Wangulangu",
        noWa: "6281237687057"
    },
    {
        id: 3,
        name: "Kain Kawuru",
        category: "Kain Utama (Hinggi/Lau)",
        price: 799998,
        image: "assets/images/kain-kawuru.jpg", // placeholder
        motif: "Motif Udang dan burung",
        makna: "Motif Udang dan burung",
        pewarna: "Kombinasi / Tidak Berlaku",
        galeri: "Yohanes K Wangulangu",
        noWa: "6281237687057"
    },
    {
        id: 4,
        name: "Selendang Kawuru",
        category: "Kain Utama (Hinggi/Lau)",
        price: 100000,
        image: "assets/images/tiara.jpg",
        motif: "motif ayam",
        makna: "motif ayam",
        pewarna: "Kombinasi / Tidak Berlaku",
        galeri: "Yohanes K Wangulangu",
        noWa: "6281237687057"
    },
    {
        id: 5,
        name: "selendang kombu",
        category: "Selendang (Tiara)",
        price: 100000,
        image: "assets/images/selendang-kombu.jpg", // placeholder
        motif: "motif tulisan",
        makna: "motif tulisan",
        pewarna: "Kombinasi / Tidak Berlaku",
        galeri: "Yohanes K Wangulangu",
        noWa: "6281237687057"
    },
    {
        id: 6,
        name: "kalumbut iwi",
        category: "Selendang (Tiara)",
        price: 499999,
        image: "assets/images/kalumbut-iwi.jpg", // placeholder
        motif: "tanpa motif",
        makna: "tanpa motif",
        pewarna: "Kombinasi / Tidak Berlaku",
        galeri: "Yohanes K Wangulangu",
        noWa: "6281237687057"
    },
    {
        id: 7,
        name: "tanduk kerbau sumba",
        category: "Aksesoris (Kalung/Gelang/Lainnya)",
        price: 1500000,
        image: "assets/images/tanduk-kerbau-sumba.jpg", // placeholder
        motif: "-",
        makna: "-",
        pewarna: "Kombinasi / Tidak Berlaku",
        galeri: "Yohanes K Wangulangu",
        noWa: "6281237687057"
    },

    // ==========================================
    // DATA DARI MARTHA HUMBANG ATA AMBU - GALERI PRAING PRAILIU
    // ==========================================
    {
        id: 8,
        name: "Kain Papanggang",
        category: "Kain Utama (Hinggi/Lau)",
        price: 4999999,
        image: "assets/images/kain-papanggang.jpg",
        motif: "-",
        makna: "Kain Sejarah Papanggang",
        pewarna: "Pewarna Alam (Mengkudu/Tarum)",
        galeri: "Martha Humbang Ata Ambu - Galeri Praing Prailiu",
        noWa: "6281338978787"
    },
    {
        id: 9,
        name: "Kain Gambar Hambba Dan Patola bunga(gambar mati)",
        category: "Kain Utama (Hinggi/Lau)",
        price: 4499999,
        image: "assets/images/kain-gambar-hambba-dan-patola-bunga.jpg",
        motif: "-",
        makna: "-",
        pewarna: "Pewarna Alam (Mengkudu/Tarum)",
        galeri: "Martha Humbang Ata Ambu - Galeri Praing Prailiu",
        noWa: "6281338978787"
    },
    {
        id: 10,
        name: "Muti Salak bukan asli",
        category: "Aksesoris (Kalung/Gelang/Lainnya)",
        price: 170000,
        image: "assets/images/muti-salak-bukan-asli.jpg",
        motif: "-",
        makna: "Rentang harga: 170000, 250000, dan yang di tangan 50000",
        pewarna: "Pewarna Alam (Mengkudu/Tarum)",
        galeri: "Martha Humbang Ata Ambu - Galeri Praing Prailiu",
        noWa: "6281338978787"
    },
    {
        id: 11,
        name: "Kain Pasola sumba barat",
        category: "Aksesoris (Kalung/Gelang/Lainnya)",
        price: 1999999,
        image: "assets/images/kain-pasola-sumba-barat.jpg",
        motif: "-",
        makna: "-",
        pewarna: "Pewarna Alam (Mengkudu/Tarum)",
        galeri: "Martha Humbang Ata Ambu - Galeri Praing Prailiu",
        noWa: "6281338978787"
    },
    {
        id: 12,
        name: "Kain Udang dengan mahang - kilimbatu kawangu",
        category: "Aksesoris (Kalung/Gelang/Lainnya)",
        price: 1250000,
        image: "assets/images/kain-udang-dengan-mahang.jpg",
        motif: "-",
        makna: "-",
        pewarna: "Kombinasi / Tidak Berlaku",
        galeri: "Martha Humbang Ata Ambu - Galeri Praing Prailiu",
        noWa: "6281338978787"
    },
    {
        id: 13,
        name: "Kain Kilimbatu udang dan patola",
        category: "Aksesoris (Kalung/Gelang/Lainnya)",
        price: 1500000,
        image: "assets/images/kain-kilimbatu-udang-dan-patola.jpg",
        motif: "-",
        makna: "-",
        pewarna: "Kombinasi / Tidak Berlaku",
        galeri: "Martha Humbang Ata Ambu - Galeri Praing Prailiu",
        noWa: "6281338978787"
    },
    {
        id: 14,
        name: "Kain Kambera",
        category: "Aksesoris (Kalung/Gelang/Lainnya)",
        price: 5000000,
        image: "assets/images/kain-kambera-martha.jpg",
        motif: "Kambiha njara (manusia berkuda), mahang",
        makna: "Kambiha njara (manusia berkuda), mahang",
        pewarna: "Pewarna Alam (Mengkudu/Tarum)",
        galeri: "Martha Humbang Ata Ambu - Galeri Praing Prailiu",
        noWa: "6281338978787"
    },
    {
        id: 15,
        name: "Tas Motif",
        category: "Aksesoris (Kalung/Gelang/Lainnya)",
        price: 250000,
        image: "assets/images/tas-motif.jpg",
        motif: "-",
        makna: "Kimia 100 dan 150",
        pewarna: "Pewarna Alam (Mengkudu/Tarum)",
        galeri: "Martha Humbang Ata Ambu - Galeri Praing Prailiu",
        noWa: "6281338978787"
    },
    {
        id: 16,
        name: "Topi",
        category: "Aksesoris (Kalung/Gelang/Lainnya)",
        price: 250000,
        image: "assets/images/topi.jpg",
        motif: "-",
        makna: "-",
        pewarna: "Pewarna Alam (Mengkudu/Tarum)",
        galeri: "Martha Humbang Ata Ambu - Galeri Praing Prailiu",
        noWa: "6281338978787"
    },
    {
        id: 17,
        name: "Anting Muti",
        category: "Aksesoris (Kalung/Gelang/Lainnya)",
        price: 50000,
        image: "assets/images/anting-muti.jpg",
        motif: "-",
        makna: "Catatan: 25-50",
        pewarna: "Pewarna Alam (Mengkudu/Tarum)",
        galeri: "Martha Humbang Ata Ambu - Galeri Praing Prailiu",
        noWa: "6281338978787"
    },
    {
        id: 18,
        name: "Gantungan Kunci",
        category: "Aksesoris (Kalung/Gelang/Lainnya)",
        price: 25000,
        image: "assets/images/gantungan-kunci.jpg",
        motif: "-",
        makna: "-",
        pewarna: "Pewarna Alam (Mengkudu/Tarum)",
        galeri: "Martha Humbang Ata Ambu - Galeri Praing Prailiu",
        noWa: "6281338978787"
    },
    {
        id: 19,
        name: "Gelang",
        category: "Aksesoris (Kalung/Gelang/Lainnya)",
        price: 25000,
        image: "assets/images/gelang.jpg",
        motif: "-",
        makna: "-",
        pewarna: "Pewarna Alam (Mengkudu/Tarum)",
        galeri: "Martha Humbang Ata Ambu - Galeri Praing Prailiu",
        noWa: "6281338978787"
    },
    {
        id: 20,
        name: "bandana",
        category: "Aksesoris (Kalung/Gelang/Lainnya)",
        price: 50000,
        image: "assets/images/bandana.jpg",
        motif: "-",
        makna: "-",
        pewarna: "Pewarna Alam (Mengkudu/Tarum)",
        galeri: "Martha Humbang Ata Ambu - Galeri Praing Prailiu",
        noWa: "6281338978787"
    },
    {
        id: 21,
        name: "Mbola happa",
        category: "Aksesoris (Kalung/Gelang/Lainnya)",
        price: 250000,
        image: "assets/images/mbola-happa.jpg",
        motif: "-",
        makna: "Rentang harga: 250000 - 600000",
        pewarna: "Pewarna Alam (Mengkudu/Tarum)",
        galeri: "Martha Humbang Ata Ambu - Galeri Praing Prailiu",
        noWa: "6281338978787"
    },

    // ==========================================
    // DATA DARI KRESENSIANA KAHI LEBA
    // ==========================================
    {
        id: 22,
        name: "Selendang dasar merah",
        category: "Selendang (Tiara)",
        price: 100000,
        image: "assets/images/selendang-dasar-merah.jpg",
        motif: "-",
        makna: "Catatan tambahan: 150000",
        pewarna: "Kombinasi / Tidak Berlaku",
        galeri: "Kresensiana Kahi Leba",
        noWa: "6285253217675"
    },
    {
        id: 23,
        name: "Topi Koboy motif sumba",
        category: "Selendang (Tiara)",
        price: 150000,
        image: "assets/images/topi-koboy-motif-sumba.jpg",
        motif: "-",
        makna: "-",
        pewarna: "Kombinasi / Tidak Berlaku",
        galeri: "Kresensiana Kahi Leba",
        noWa: "6285253217675"
    },
    {
        id: 24,
        name: "topi full motif",
        category: "Selendang (Tiara)",
        price: 249999,
        image: "assets/images/topi-full-motif.jpg",
        motif: "-",
        makna: "-",
        pewarna: "Kombinasi / Tidak Berlaku",
        galeri: "Kresensiana Kahi Leba",
        noWa: "6285253217675"
    },
    {
        id: 25,
        name: "Sarung Pahikung satu pasang",
        category: "Selendang (Tiara)",
        price: 1500000,
        image: "assets/images/sarung-pahikung.jpg",
        motif: "-",
        makna: "-",
        pewarna: "Kombinasi / Tidak Berlaku",
        galeri: "Kresensiana Kahi Leba",
        noWa: "6285253217675"
    },
    {
        id: 26,
        name: "halopa (ikat pinggang laki laki sumba)",
        category: "Selendang (Tiara)",
        price: 250000,
        image: "assets/images/halopa.jpg",
        motif: "-",
        makna: "-",
        pewarna: "Kombinasi / Tidak Berlaku",
        galeri: "Kresensiana Kahi Leba",
        noWa: "6285253217675"
    },
    {
        id: 27,
        name: "kain patola bunga",
        category: "Selendang (Tiara)",
        price: 2999999,
        image: "assets/images/kain-patola-bunga.jpg",
        motif: "-",
        makna: "-",
        pewarna: "Pewarna Alam (Mengkudu/Tarum)",
        galeri: "Kresensiana Kahi Leba",
        noWa: "6285253217675"
    },
    {
        id: 28,
        name: "dress kawuru motif bunga",
        category: "Selendang (Tiara)",
        price: 1000000,
        image: "assets/images/dress-kawuru-motif-bunga.jpg",
        motif: "-",
        makna: "-",
        pewarna: "Pewarna Alam (Mengkudu/Tarum)",
        galeri: "Kresensiana Kahi Leba",
        noWa: "6285253217675"
    },
    {
        id: 29,
        name: "Gelang motif sumba",
        category: "Aksesoris (Kalung/Gelang/Lainnya)",
        price: 25000,
        image: "assets/images/gelang-motif-sumba.jpg",
        motif: "-",
        makna: "-",
        pewarna: "Kombinasi / Tidak Berlaku",
        galeri: "Kresensiana Kahi Leba",
        noWa: "6285253217675"
    },
    {
        id: 30,
        name: "muti",
        category: "Aksesoris (Kalung/Gelang/Lainnya)",
        price: 100000,
        image: "assets/images/muti.jpg",
        motif: "-",
        makna: "150 ada mamuli",
        pewarna: "Kombinasi / Tidak Berlaku",
        galeri: "Kresensiana Kahi Leba",
        noWa: "6285253217675"
    },
    {
        id: 31,
        name: "bandana",
        category: "Aksesoris (Kalung/Gelang/Lainnya)",
        price: 50000,
        image: "assets/images/bandana-kresensiana.jpg",
        motif: "-",
        makna: "-",
        pewarna: "Kombinasi / Tidak Berlaku",
        galeri: "Kresensiana Kahi Leba",
        noWa: "6285253217675"
    }
];
// const productsData = [
//     // Data dari Yohanes K Wangulangu
//     {
//         id: 1,
//         name: "Kain Kambera",
//         category: "Kain (Hinggi)",
//         price: 1000000,
//         image: "assets/images/kain-kambera.jpg",
//         motif: "Motif Mamuli dan Udang",
//         makna: "Melambangkan simbol budaya dan kehidupan masyarakat Sumba.",
//         pewarna: "Kombinasi / Tidak Berlaku",
//         galeri: "Yohanes Ika Sumba",
//         noWa: "6281234567891"
//     },
//     {
//         id: 2,
//         name: "Kain Kawuru",
//         category: "Kain (Hinggi)",
//         price: 799998,
//         image: "assets/images/default1.jpg",
//         motif: "Motif Udang dan Burung",
//         makna: "Representasi fauna dalam motif tradisional Sumba.",
//         pewarna: "Kombinasi / Tidak Berlaku",
//         galeri: "Yohanes Ika Sumba",
//         noWa: "6281234567891"
//     },
//     {
//         id: 3,
//         name: "Selendang Kawuru",
//         category: "Selendang",
//         price: 100000,
//         image: "assets/images/tiara2.jpg",
//         motif: "Ayam",
//         makna: "Motif ayam dalam tradisi lokal.",
//         pewarna: "Kombinasi / Tidak Berlaku",
//         galeri: "Yohanes Ika Sumba",
//         noWa: "6281234567891"
//     },
//     {
//         id: 4,
//         name: "Tanduk Kerbau Sumba",
//         category: "Aksesoris & Hiasan Dinding",
//         price: 1500000,
//         image: "assets/images/default3.jpg",
//         motif: "Tidak ada",
//         makna: "Simbol status sosial dan kekayaan.",
//         pewarna: "Kombinasi / Tidak Berlaku",
//         galeri: "Yohanes Ika Sumba",
//         noWa: "6281234567891"
//     },
    
//     // Data dari Galeri Praing Prailiu (Martha Humbang Ata Ambu)
//     {
//         id: 5,
//         name: "Kain Papanggang",
//         category: "Kain (Hinggi)",
//         price: 4999999,
//         image: "assets/images/default4.jpg",
//         motif: "Sejarah Papanggang",
//         makna: "Kain sejarah yang melambangkan identitas dan silsilah.",
//         pewarna: "Alami (Mengkudu/Tarum)",
//         galeri: "Yohanes Ika Sumba",
//         noWa: "6281234567891"
//     },
//     {
//         id: 6,
//         name: "Kain Kambera",
//         category: "Aksesoris & Hiasan Dinding",
//         price: 5000000,
//         image: "assets/images/default5.jpg",
//         motif: "Manusia berkuda (kambiha njara) dan Mahang",
//         makna: "Melambangkan keperkasaan dan status sosial tinggi.",
//         pewarna: "Alami (Mengkudu/Tarum)",
//         galeri: "Yohanes Ika Sumba",
//         noWa: "6281234567891"
//     },
//     {
//         id: 7,
//         name: "Kalumbut Iwi",
//         category: "Aksesoris & Hiasan Dinding",
//         price: 500000,
//         image: "assets/images/default6.jpg",
//         motif: "Motif Sumba",
//         makna: "Produk kerajinan tangan fungsional.",
//         pewarna: "Alami (Mengkudu/Tarum)",
//         galeri: "Yohanes Ika Sumba",
//         noWa: "6281234567891"
//     },

//     // Data dari Kresensiana Kahi Leba
//     {
//         id: 8,
//         name: "Kain Patola Bunga",
//         category: "Selendang",
//         price: 2999999,
//         image: "assets/images/default7.jpg",
//         motif: "Bunga",
//         makna: "Keindahan flora dalam tenun ikat.",
//         pewarna: "Alami (Mengkudu/Tarum)",
//         galeri: "Yohanes Ika Sumba",
//         noWa: "6281234567891"   
//     },
//     {
//         id: 9,
//         name: "Sarung Pahikung",
//         category: "Sarung (Lau)",
//         price: 1500000,
//         image: "assets/images/default8.jpg",
//         motif: "Pahikung",
//         makna: "Teknik tenun ikat khas Sumba.",
//         pewarna: "Kombinasi / Tidak Berlaku",
//         galeri: "Yohanes Ika Sumba",
//         noWa: "6281234567891"   
//     },
//     {
//         id: 10,
//         name: "Muti",
//         category: "Aksesoris & Hiasan Dinding",
//         price: 100000,
//         image: "assets/images/default9.jpg",
//         motif: "Mamuli",
//         makna: "Simbol kesuburan dan rahim wanita dalam budaya Sumba.",
//         pewarna: "Kombinasi / Tidak Berlaku",
//         galeri: "Yohanes Ika Sumba",
//         noWa: "6281234567891"   
//     },
//     // Lanjutan Data dari Galeri Praing Prailiu (Martha Humbang Ata Ambu)
//     {
//         id: 11,
//         name: "Kain Gambar Hambba Dan Patola",
//         category: "Kain (Hinggi)",
//         price: 4499999,
//         image: "assets/images/default10.jpg",
//         motif: "Gambar Hambba dan Patola",
//         makna: "Motif klasik yang melambangkan sejarah dan status sosial.",
//         pewarna: "Alami (Mengkudu/Tarum)",
//         galeri: "Galeri Praing Prailiu",
//         noWa: "6281338978787"   
//     },
//     {
//         id: 12,
//         name: "Muti Salak",
//         category: "Aksesoris & Hiasan Dinding",
//         price: 170000,
//         image: "assets/images/default11.jpg",
//         motif: "Tidak ada",
//         makna: "Aksesoris tradisional Sumba.",
//         pewarna: "Kombinasi / Tidak Berlaku", // <--- SUDAH DITAMBAHKAN AGAR TIDAK CRASH
//         galeri: "Galeri Praing Prailiu",
//         noWa: "6281338978787"   
//     },
//     {
//         id: 13,
//         name: "Kain Pasola Sumba Barat",
//         category: "Aksesoris & Hiasan Dinding",
//         price: 1999999,
//         image: "assets/images/default12.jpg",
//         motif: "Pasola",
//         makna: "Menggambarkan tradisi perang-perangan berkuda khas Sumba.",
//         pewarna: "Alami (Mengkudu/Tarum)",
//         galeri: "Galeri Praing Prailiu",
//         noWa: "6281338978787"   
//     },
//     {
//         id: 14,
//         name: "Kain Udang dengan Mahang",
//         category: "Aksesoris & Hiasan Dinding",
//         price: 1250000,
//         image: "assets/images/default13.jpg",
//         motif: "Udang dan Mahang",
//         makna: "Simbol fauna yang sering ditemukan dalam tenun lokal.",
//         pewarna: "Kombinasi / Tidak Berlaku",
//         galeri: "Galeri Praing Prailiu",
//         noWa: "6281338978787"   
//     },
//     {
//         id: 15,
//         name: "Kain Kilimbatu",
//         category: "Aksesoris & Hiasan Dinding",
//         price: 1500000,
//         image: "assets/images/default14.jpg",
//         motif: "Udang dan Patola",
//         makna: "Kombinasi motif geometris dan alam.",
//         pewarna: "Kombinasi / Tidak Berlaku",
//         galeri: "Galeri Praing Prailiu",
//         noWa: "6281338978787"   
//     },
//     {
//         id: 16,
//         name: "Topi",
//         category: "Aksesoris & Hiasan Dinding",
//         price: 250000,
//         image: "assets/images/default15.jpg",
//         motif: "Tidak ada",
//         makna: "Aksesoris kepala tradisional.",
//         pewarna: "Alami (Mengkudu/Tarum)",
//         galeri: "Galeri Praing Prailiu",
//         noWa: "6281338978787"   
//     },

//     // Lanjutan Data dari Kresensiana Kahi Leba
//     {
//         id: 17,
//         name: "Selendang Dasar Merah",
//         category: "Selendang",
//         price: 100000,
//         image: "assets/images/default16.jpg",
//         motif: "Polos/Abstrak",
//         makna: "Warna merah melambangkan keberanian.",
//         pewarna: "Kombinasi / Tidak Berlaku",
//         galeri : "Kresensiana Kahi Leba",
//         noWa: "085253217675"
//     },
//     {
//         id: 18,
//         name: "Topi Koboy Motif Sumba",
//         category: "Selendang",
//         price: 150000,
//         image: "assets/images/default17.jpg",
//         motif: "Sumba",
//         makna: "Perpaduan budaya barat dan lokal.",
//         pewarna: "Kombinasi / Tidak Berlaku",
//         galeri : "Kresensiana Kahi Leba",
//         noWa: "085253217675"
//     },
//     {
//         id: 19,
//         name: "Halopa (Ikat Pinggang)",
//         category: "Selendang",
//         price: 250000,
//         image: "assets/images/default18.jpg",
//         motif: "Tradisional",
//         makna: "Kelengkapan busana laki-laki Sumba.",
//         pewarna: "Kombinasi / Tidak Berlaku",
//         galeri : "Kresensiana Kahi Leba",
//         noWa: "085253217675"
//     },
//     {
//         id: 20,
//         name: "Dress Kawuru Motif Bunga",
//         category: "Selendang",
//         price: 1000000,
//         image: "assets/images/default19.jpg",
//         motif: "Bunga",
//         makna: "Adaptasi kain tenun menjadi busana modern.",
//         pewarna: "Alami (Mengkudu/Tarum)",
//         galeri : "Kresensiana Kahi Leba",
//         noWa: "085253217675"
//     },
//     // Lanjutan Data Aksesoris dari Galeri Martha Humbang Ata Ambu
//     {
//         id: 21,
//         name: "Anting Muti",
//         category: "Aksesoris & Hiasan Dinding",
//         price: 50000,
//         image: "assets/images/default20.jpg",
//         motif: "Variasi Muti",
//         makna: "Aksesoris pelengkap busana tradisional.",
//         pewarna: "Pewarna Alam (Mengkudu/Tarum)",
//         galeri: "Galeri Praing Prailiu",
//         noWa: "6281338978787"
//     },
//     {
//         id: 22,
//         name: "Gantungan Kunci",
//         category: "Aksesoris & Hiasan Dinding",
//         price: 25000,
//         image: "assets/images/default21.jpg",
//         motif: "Tidak ada",
//         makna: "Cenderamata kerajinan tangan.",
//         pewarna: "Pewarna Alam (Mengkudu/Tarum)",
//         galeri: "Galeri Praing Prailiu",
//         noWa: "6281338978787"
//     },
//     {
//         id: 23,
//         name: "Gelang",
//         category: "Aksesoris & Hiasan Dinding",
//         price: 25000,
//         image: "assets/images/default22.jpg",
//         motif: "Tidak ada",
//         makna: "Aksesoris pergelangan tangan.",
//         pewarna: "Pewarna Alam (Mengkudu/Tarum)",
//         galeri: "Galeri Praing Prailiu",
//         noWa: "6281338978787"
//     },
//     {
//         id: 24,
//         name: "Bandana",
//         category: "Aksesoris & Hiasan Dinding",
//         price: 50000,
//         image: "assets/images/default23.jpg",
//         motif: "Tidak ada",
//         makna: "Aksesoris kepala.",
//         pewarna: "Pewarna Alam (Mengkudu/Tarum)",
//         galeri: "Galeri Praing Prailiu",
//         noWa: "6281338978787"
//     },
//     {
//         id: 25,
//         name: "Mbola Happa",
//         category: "Aksesoris & Hiasan Dinding",
//         price: 250000,
//         image: "assets/images/default124.jpg",
//         motif: "Tradisional",
//         makna: "Tas atau wadah tradisional.",
//         pewarna: "Pewarna Alam (Mengkudu/Tarum) ",
//         galeri: "Galeri Praing Prailiu",
//         noWa: "6281338978787"
//     },

//     // Lanjutan Data dari Kresensiana Kahi Leba
//     {
//         id: 26,
//         name: "Topi Full Motif",
//         category: "Selendang",
//         price: 249999,
//         image: "assets/images/default25.jpg",
//         motif: "Penuh/Full Motif",
//         makna: "Menampilkan kekayaan ragam hias Sumba.",
//         pewarna: "Kombinasi / Tidak Berlaku",
//         galeri : "Kresensiana Kahi Leba",
//         noWa: "085253217675"
//     },
//     {
//         id: 27,
//         name: "Gelang Motif Sumba",
//         category: "Aksesoris & Hiasan Dinding",
//         price: 25000,
//         image: "assets/images/default26.jpg",
//         motif: "Sumba",
//         makna: "Aksesoris tangan dengan motif khas.",
//         pewarna: "Kombinasi / Tidak Berlaku ",
//         galeri : "Kresensiana Kahi Leba",
//         noWa: "085253217675"
//     },
//     {
//         id: 28,
//         name: "Bandana",
//         category: "Aksesoris & Hiasan Dinding",
//         price: 50000,
//         image: "assets/images/bandana.jpg",
//         motif: "Tidak ada",
//         makna: "Aksesoris kepala.",
//         pewarna: "Kombinasi / Tidak Berlaku ",
//         galeri : "Kresensiana Kahi Leba",
//         noWa: "085253217675"
//     }
// ];