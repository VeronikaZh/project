'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let lastScrollPostion = 0;
    let isVisible = true;
<<<<<<< Updated upstream
=======
    
>>>>>>> Stashed changes

    function headerVisibleControl(isVisibleNew) {
        if (isVisibleNew == isVisible){
            return;
        }
            
        
        
        document.querySelector('.header').classList.toggle('header__hidden');
        isVisible = isVisibleNew;
    }

    window.addEventListener('scroll', (e) => {
        
        var st = window.pageYOffset;
<<<<<<< Updated upstream
        var scroll = window.scrollTop;
        if (scroll >= 50){
            document.querySelector('.header').classList.toggle('scrolled')
        }
=======
        var page = document.querySelector('body');
        console.log(window.pageYOffset);
        
        
>>>>>>> Stashed changes

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
