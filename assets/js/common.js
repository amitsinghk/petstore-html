document.addEventListener("DOMContentLoaded", function() {

    // Left Menu
    const lftMenuLists = document.querySelectorAll('.list'); 
    
    lftMenuLists.forEach(lftMenuList => {
        lftMenuList.addEventListener('click', () => {
            const nextSibling = lftMenuList.nextElementSibling;

            if (nextSibling && nextSibling.classList.contains('subListMenu')) {
                lftMenuList.classList.toggle('list-open');
                nextSibling.classList.toggle('subListMenu-open');
            }
        });
    });

    // Menu click to open  
    const siteNavLink = document.querySelector('.site-nav__link'); 
    const transBg = document.querySelector('.transBg');
    const drawer  = document.querySelector('.drawer ');
    const drawerclose = document.querySelector('.drawer__close-button');

    siteNavLink.addEventListener('click', () => {
        transBg.classList.add('transBg-show');
        drawer.classList.add('drawer-open');
    });


     // Menu Close  

    transBg.addEventListener('click', () => {
        transBg.classList.remove('transBg-show');
        drawer.classList.remove('drawer-open');
    });

    drawerclose.addEventListener('click', () => {
        transBg.classList.remove('transBg-show');
        drawer.classList.remove('drawer-open');
    });


    // click to thumbnails images and show in big size
    const thumbnails = document.querySelectorAll('.product-thumb-img-list img');
    const bigImg = document.querySelector('.product-bigImg img');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Update the src of the big image
            bigImg.src = this.src;

            // Remove 'select' class from all thumbnails
            thumbnails.forEach(img => img.parentElement.classList.remove('select'));

            // Add 'select' class to the clicked thumbnail
            this.parentElement.classList.add('select');
        });
    });


    // header animation
    const siteHeader = document.querySelector('.site-header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 200) {
            siteHeader.classList.add('site-header-fixed');
        } else if (currentScrollY < 90) {
            siteHeader.classList.remove('site-header-fixed');
        }

        lastScrollY = currentScrollY;
    });


    

});