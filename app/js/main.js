'use strict';
// import * as $ from 'jquery';

const mobileWidth = 767;
let isMobile = checkWidth();

window.addEventListener('resize', () => {
    isMobile = checkWidth();
});

setTimeout(() => {
    if (!document.querySelector('.loader')) {
        return;
    }

    const loader = document.querySelector('.loader');
    if (loader.classList.contains('active')) {
        loader.classList.remove('active');

        setTimeout(() => {
            loader.parentElement.removeChild(loader);
        }, 300)
    }
}, 2500);

window.addEventListener('load', function () {

    (function loader() {
        if (!document.querySelector('.loader')) {
            return;
        }

        const loader = document.querySelector('.loader');

        if (loader.classList.contains('active')) {
            loader.classList.remove('active');
        }

        setTimeout(() => {
            loader.parentElement.removeChild(loader);
        }, 1500);

    })();

    (function popup() {
        if (!document.querySelector('.popup')) {
            return;
        }

        const popupBtns = [...document.querySelectorAll('[data-popup="popup"')];
        const popup = document.querySelector('.popup');

        popup.addEventListener('click', hidePopup);

        popupBtns.forEach(p => {
            p.addEventListener('click', showPopup);
        });

        function showPopup() {
            popup.classList.add('active');
        }

        function hidePopup(e) {
            const target = e.target;

            if (target.dataset) {
                e.preventDefault();
                popup.classList.remove('active');
            }
        }
    })();
});

function checkWidth() {
    return mobileWidth > document.documentElement.clientWidth;
}