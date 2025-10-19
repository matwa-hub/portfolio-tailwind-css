//Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Klik di luar Hamburger
window.addEventListener('click', function(e) {
    if(e.target !=hamburger && e.target !=navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// pindahkan posisi toggle sesuai mode
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            darkToggle.checked = true;
    } else {
        darkToggle.checked = false;
   }
   

// === Formspree + Popup Notifikasi ===
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form[action="https://formspree.io/f/mpwyndbk"]');
  const modal = document.getElementById("successModal");
  const closeModal = document.getElementById("closeModal");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const button = form.querySelector("button[type='submit']");
      const originalText = button.innerHTML;

      // tampilkan loading
      button.innerHTML = "Mengirim...";
      button.disabled = true;

      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { "Accept": "application/json" },
      });

      if (response.ok) {
        modal.classList.remove("hidden");
        form.reset();
      } else {
        alert("Terjadi kesalahan, coba lagi nanti ❌");
      }

      // kembalikan tombol ke keadaan semula
      button.innerHTML = originalText;
      button.disabled = false;
    });
  }

  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  }
});
