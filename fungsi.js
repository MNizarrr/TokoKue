function openWhatsAppWithTemplateDiana() {
    const phone = "6285777847477";
    const template = `Halo, saya ingin memesan produk berikut:

    Nama Produk: 
    Harga: 
    Jumlah: 
    Varian:
    Alamat:
    Metode Bayar:

    Apakah ready stock? Terima kasih.`;
    
    const encodedTemplate = encodeURIComponent(template);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedTemplate}`;
    window.location.href = whatsappUrl; 
}

function openWhatsAppWithTemplateAjeng() {
    const phone = "6285778458399";
    const template = `Halo, saya ingin memesan produk berikut:

    Nama Produk: 
    Harga: 
    Jumlah: 
    Varian:
    Alamat:
    Metode Bayar:

    Apakah ready stock? Terima kasih.`;
    
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


            // Form submission handling
            document.getElementById('emailForm').addEventListener('submit', function(e) {
                e.preventDefault();
                
                const form = e.target;
                const formData = new FormData(form);
                const submitBtn = form.querySelector('button[type="submit"]');
                
                // Change button text
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
                submitBtn.disabled = true;
                
                // Using Formspree.io for email handling
                fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    if (response.ok) {
                        alert('Pesan berhasil dikirim! Kami akan segera menghubungi Anda.');
                        form.reset();
                    } else {
                        throw new Error('Network response was not ok');
                    }
                })
                .catch(error => {
                    alert('Terjadi kesalahan. Silahkan coba lagi atau hubungi kami melalui media sosial.');
                    console.error('Error:', error);
                })
                .finally(() => {
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Kirim Pesan';
                    submitBtn.disabled = false;
                });
            });