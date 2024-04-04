document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#pendaftaran form');
    const notification = document.querySelector('#notification');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman form

        // Memeriksa apakah setiap input diisi
        const inputs = form.querySelectorAll('input[type="text"], input[type="date"], select');
        let isValid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) { // Jika input kosong atau hanya berisi spasi
                isValid = false;
            }
        });

        if (!isValid) {
            // Jika ada input yang kosong, tampilkan notifikasi
            notification.textContent = 'Pendaftaran gagal, silakan cek kembali.';
            notification.classList.add('error');
        } else {
            // Jika semua input telah diisi, tampilkan notifikasi pendaftaran berhasil
            notification.textContent = 'Selamat pendaftaran Anda berhasil!';
            notification.classList.add('success');
        }
    });
});
