// Nav toggle (mobile)
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");
navToggle &&
navToggle.addEventListener("click", () => {
navList.classList.toggle("show");
});
// Smooth scroll for in-page anchors (if any)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
anchor.addEventListener("click", function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute("href"));
if (target) target.scrollIntoView({ behavior: "smooth" });
});
});
// Back to top button (create dynamically)
const backBtn = document.createElement("button");
backBtn.textContent = "↑";
backBtn.className = "back-to-top";
backBtn.setAttribute("aria-label", "Back to top");
document.body.appendChild(backBtn);
backBtn.style.cssText =
"position:fixed;right:1rem;bottom:1rem;padding:0.5rem 0.6rem;border-radius:8px;border:none;display:none;cursor:pointer;background:var(--primary);color:white;";
// show/hide based on scroll
window.addEventListener("scroll", () => {
if (window.scrollY > 300) backBtn.style.display = "block";
else backBtn.style.display = "none";
});
backBtn.addEventListener("click", () =>
window.scrollTo({ top: 0, behavior: "smooth" })
);
// Simple form validation (contact page)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
contactForm.addEventListener("submit", function (e) {
e.preventDefault();
const name = this.name.value.trim();
const email = this.email.value.trim();
const message = this.message.value.trim();
const msgEl = document.getElementById("formMessage");
if (!name || !email || !message) {
msgEl.textContent = "Mohon isi semua field.";
msgEl.style.color = "red";
return;
}
// simple email regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
msgEl.textContent = "Format email tidak valid.";
msgEl.style.color = "red";
return;
}
// jika lolos validasi (placeholder action)
msgEl.textContent = "Pesan berhasil dikirim (simulasi). Terima kasih!";
msgEl.style.color = "green"
this.reset();
});
}
