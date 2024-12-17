let openMenuBtn = document.getElementById("openMenuBtn");
let closeMenuBtn = document.getElementById("closeMenuBtn");
let mobileMenu = document.getElementById("mobileMenu");

openMenuBtn.addEventListener("click", function() {
    mobileMenu.classList.remove("hidden"); 
});

closeMenuBtn.addEventListener("click", function() {
    mobileMenu.classList.add("hidden");
});
