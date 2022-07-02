'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let lastScrollPostion = 0;
    let isVisible = true;
    const scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    

    function headerVisibleControl(isVisibleNew) {
        if (isVisibleNew == isVisible)
            return;
        
        document.querySelector('.header').classList.toggle('header__hidden');
        isVisible = isVisibleNew;
    }

    window.addEventListener('scroll', (e) => {
        var st = window.pageYOffset;
        var page = document.querySelector('body');
        console.log(page.scrollTop);
        if (page.scrollTop >= 20){
            document.querySelector('.header').classList.toggle('scrolled')
        }
        

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
    }

    function closeMenu(e) {
        menu.classList.add('menu_disabled');
    }

    buttonOpen.addEventListener('click', openMenu);
    buttonClose.addEventListener('click', closeMenu)
    overlay.addEventListener('click', closeMenu);
})