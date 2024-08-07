/*------------------------------
#For the header
/-----------------------------*/
jQuery(function ($) {
    const $header = $('.header');
    $(window).scroll(function (event) {
        const $current = $(this).scrollTop();
        if ($current > 160) {
            $header.addClass('header-color');
        } else {
            $header.removeClass('header-color');
        }
    });
});

/*------------------------------
#For our counter
/-----------------------------*/

document.addEventListener('DOMContentLoaded', startValueAnimation);

function startValueAnimation() {
    let valueDisplays = document.querySelectorAll('.num');
    let interval = 4000;

    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute('data-Val'));
        let decimalPart = endValue % 1;
        let steps = Math.floor(endValue);
        let stepDuration = interval / steps;
        let counter = setInterval(function () {
            if (startValue < steps) {
                startValue += 1;
                valueDisplay.textContent = startValue;
            } else if (startValue === steps && decimalPart > 0) {
                startValue += decimalPart;
                valueDisplay.textContent = endValue.toFixed(1);
            } else {
                clearInterval(counter);
            }
        }, stepDuration);
    });
}

/*------------------------------
#For Testimonials
/-----------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial-item');
    const circles = document.querySelectorAll('.circle');
    const prevButton = document.querySelector('button.prev');
    const nextButton = document.querySelector('button.next');
    let currentIndex = 0;

    function showItem(index) {
        testimonials[currentIndex].style.display = 'none';
        circles[currentIndex].classList.remove('active');
        testimonials[index].style.display = 'block';
        circles[index].classList.add('active');
        currentIndex = index;
    }

    function showNextItem() {
        const nextIndex = (currentIndex + 1) % testimonials.length;
        showItem(nextIndex);
    }

    function showPreviousItem() {
        const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showItem(prevIndex);
    }

    function goToItem(index) {
        showItem(index);
    }

    testimonials.forEach((item, index) => {
        if (index !== currentIndex) {
            item.style.display = 'none';
        }
    });

    circles.forEach((circle, index) => {
        circle.addEventListener('click', () => {
            goToItem(index);
        });
    });

    prevButton.addEventListener('click', showPreviousItem);
    nextButton.addEventListener('click', showNextItem);

    setInterval(showNextItem, 9000);
});

/*------------------------------
#Up icon
/-----------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    const scrollUp = document.querySelector('.scrollUp');
    const homePageHeight = window.innerHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > homePageHeight) {
            scrollUp.style.display = 'block';
        } else {
            scrollUp.style.display = 'none';
        }
    });

    scrollUp.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

/*----------------------------------
#Select size
----------------------------------*/

function updateButtonText(content) {
    const checkboxes = content.querySelectorAll('input[type="checkbox"]:checked');
    const selectedValues = Array.from(checkboxes).map(cb => cb.nextSibling.textContent.trim());

    const button = content.previousElementSibling;
    if (selectedValues.length > 0) {
        button.textContent = selectedValues.join(', ');
    } else {
        button.textContent = button.id === 'size-btn' ? 'Select Sizes' : 'Select Colors';
    }
}

window.onclick = function (event) {
    if (!event.target.matches('.dropdown-btn')) {
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
};
