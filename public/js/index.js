const toggle = document.querySelector('#toggle')
const menuList = document.querySelector('#menu-list')


toggle.addEventListener('click', () => {
    console.log('work')
    menuList.classList.toggle('menu-list')
})