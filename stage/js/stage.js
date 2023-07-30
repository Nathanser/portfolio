document.addEventListener("DOMContentLoaded", function() {
    const indicator = document.querySelector('.nav-indicator');
    const items = document.querySelectorAll('.nav-item');

    function handleIndicator(el) {
        items.forEach(item => {
            item.classList.remove('is-active');
            item.removeAttribute('style');
        });

        indicator.style.width = `${el.offsetWidth}px`;
        indicator.style.left = `${el.offsetLeft}px`;
        indicator.style.backgroundColor = el.getAttribute('active-color');

        el.classList.add('is-active');
        el.style.color = el.getAttribute('active-color');
    }

    items.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const offsetTop = target.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            handleIndicator(this);
        });

        item.classList.contains('is-active') && handleIndicator(item);
    });

    window.addEventListener("scroll", function() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        items.forEach((item, index) => {
            const target = document.querySelector(item.getAttribute("href"));
            if (
                target.offsetTop <= scrollPosition &&
                target.offsetTop + target.offsetHeight > scrollPosition
            ) {
                handleIndicator(item);
            }
        });
    });
});






const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
    items.forEach(item => {
        item.classList.remove('is-active');
        item.removeAttribute('style');
    });

    indicator.style.width = `${el.offsetWidth}px`;
    indicator.style.left = `${el.offsetLeft}px`;
    indicator.style.backgroundColor = el.getAttribute('active-color');

    el.classList.add('is-active');
    el.style.color = el.getAttribute('active-color');
}


items.forEach((item, index) => {
    item.addEventListener('click', e => {handleIndicator(e.target);});
    item.classList.contains('is-active') && handleIndicator(item);
});