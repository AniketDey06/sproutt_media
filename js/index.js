const menu = document.querySelector(".menu");
const links = document.querySelector(".links");

menu.addEventListener("click",() => {
    menu.classList.toggle("active");
    links.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    menu.classList.remove("active");
    links.classList.remove("active");
}))