export default function () {
    const burgerMenu = document.querySelector(".mobile-nav")
    const mobileMenu = document.querySelector(".mobile-menu")

    burgerMenu.addEventListener("click", function () {
        mobileMenu.classList.toggle("visible")
    })
}