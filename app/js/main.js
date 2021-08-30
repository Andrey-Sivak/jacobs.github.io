'use strict';
import * as $ from 'jquery';
import './slick.min';

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

        const popupBtns = [...document.querySelectorAll('.recipes__item')];
        const popups = [...document.querySelectorAll('.popup')];

        popups.forEach(p => {
            p.addEventListener('click', hidePopup);
        });

        popupBtns.forEach(p => {
            p.addEventListener('click', showPopup);
        });

        function showPopup() {
            const id = this.dataset.modal;
            const popup = document.querySelector(`.popup[data-popup="${id}"]`);

            popup.classList.add('active');
            document.body.classList.add('no-scrolling');
        }

        function hidePopup(e) {
            const target = e.target;

            if (target.dataset.close) {
                e.preventDefault();
                const popup = document.querySelector('.popup.active');
                popup.classList.remove('active');
                document.body.classList.remove('no-scrolling');
            }
        }
    })();

    (function headerSlider() {
        if (!document.querySelector('.header__jars')) {
            return;
        }

        const sliderSelector = '.header__jars';

        if (isMobile) {
            initSlider(sliderSelector);
        }

        window.addEventListener('resize', function (e) {
            if (isMobile && !document.querySelector(`${sliderSelector}.slick-slider`)) {
                initSlider(sliderSelector);
                return;
            }

            if (!isMobile && document.querySelector('.slick-slider')) {
                destroySlider(sliderSelector);
            }
        });

        function initSlider(slider) {
            $(slider).slick({
                infinite: true,
                slidesToShow: 1,
                swipeToSlide: true,
                prevArrow: '<span class="header__jars_arrow lt"></span>',
                nextArrow: '<span class="header__jars_arrow rt"></span>',
            })
        }

        function destroySlider(slider) {
            $(slider).slick('unslick');
        }
    })();

    (function ricepsSlider() {
        if (!document.querySelector('.recipes')) {
            return;
        }

        const sliderSelector = '.recipes';

        if (isMobile) {
            initSlider(sliderSelector);
        }

        window.addEventListener('resize', function (e) {
            if (isMobile && !document.querySelector(`${sliderSelector}.slick-slider`)) {
                initSlider(sliderSelector);
                return;
            }

            if (!isMobile && document.querySelector('.slick-slider')) {
                destroySlider(sliderSelector);
            }
        });

        function initSlider(slider) {
            $(slider).slick({
                infinite: true,
                slidesToShow: 1,
                prevArrow: '<span class="recipes__arrow lt"></span>',
                nextArrow: '<span class="recipes__arrow rt"></span>',
            })
        }

        function destroySlider(slider) {
            $(slider).slick('unslick');
        }
    })();
});

function checkWidth() {
    return mobileWidth > document.documentElement.clientWidth;
}