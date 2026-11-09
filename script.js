const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    const isOpen=navLinks.classList.contains("active");
    menuToggle.setAttribute("aria-expanded",isOpen);
    menuToggle.textContent = isOpen ? "×" : "☰";

menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
);
});
const navItems=navLinks.querySelectorAll("a");
navItems.forEach(function(link) {
link.addEventListener("click",function(){
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent="☰";
    setAttribute("aria-label", "Open navigation menu");
});
});