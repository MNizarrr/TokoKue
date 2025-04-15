function openWhatsAppWithTemplate() {
    const phone = "6285777847477";
    const template = `Halo, saya ingin memesan produk berikut:

    Nama Produk: 
    Harga: Rp 250.000ilih: [✅] Warna / [✅] Ukuran
    *Jumlah*: _
    *Varian*: (Mohon p_______
    *Alamat*: ________
    *Metode Bayar*: [✅] Transfer / [✅] COD

    Apakah ready stock? Terima kasih.`;         //harga akan di perbaiki
    
    const encodedTemplate = encodeURIComponent(template);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedTemplate}`;
    window.location.href = whatsappUrl; 
}


        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const navItems = document.querySelectorAll('.nav-links li');
        
        hamburger.addEventListener('click', () => {

            navLinks.classList.toggle('open');
            
            navItems.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            
            hamburger.classList.toggle('open');
        });