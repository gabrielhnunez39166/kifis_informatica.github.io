(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    const menuLinks = document.querySelectorAll(".nav__link a[href^=\"#\"]")
    menuLinks.forEach(menuLinks => {
        menuLinks.addEventListener("click", function(){
            menu.classList.remove('nav__link--show')
        })
    })

})();