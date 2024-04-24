let menuContent = document.getElementById("menuContent")
let btnNav = document.getElementById("btnNav")

btnNav.addEventListener('click', () => {
    btnNav.classList.toggle("is-active")
    menuContent.classList.toggle("is-active")
})