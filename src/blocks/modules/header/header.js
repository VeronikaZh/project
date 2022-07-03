'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let lastScrollPostion = 0;
    let isVisible = true;

    function headerVisibleControl(isVisibleNew) {
        if (isVisibleNew == isVisible){
            return;
        }
            
        
        
        document.querySelector('.header').classList.toggle('header__hidden');
        isVisible = isVisibleNew;
    }

    window.addEventListener('scroll', (e) => {
        
        var st = window.pageYOffset;

        if (st > lastScrollPostion) {
            
            // down scroll
            headerVisibleControl(false);
        } else {
            // up scroll
            headerVisibleControl(true);
        }

        lastScrollPostion = st;
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const buttonOpen = document.querySelector('.header__burger-button');
    const buttonClose = document.querySelector('.menu__close-button');
    
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.menu__grey-overlay');

    function openMenu(e) {
        console.log(e);
        menu.classList.remove('menu_disabled');
        document.querySelector('.body').classList.toggle('not-scroll');

    }

    function closeMenu(e) {
        menu.classList.add('menu_disabled');
    }

    buttonOpen.addEventListener('click', openMenu);
    buttonClose.addEventListener('click', closeMenu)
    overlay.addEventListener('click', closeMenu);
})