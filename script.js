document.addEventListener('DOMContentLoaded', function () {
    var accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(function (button) {
    button.addEventListener('click', function () {
    var target = document.querySelector(button.getAttribute('data-bs-target'));
    var isCurrentlyExpanded = button.getAttribute('aria-expanded') === 'true';
    accordionButtons.forEach(function (otherButton) {
    var otherTarget = document.querySelector(otherButton.getAttribute('data-bs-target'));
    if (otherButton !== button) {
    otherTarget.classList.remove('show');
    otherButton.setAttribute('aria-expanded', 'false');
    }
    });
    if (isCurrentlyExpanded) {
    target.classList.remove('show');
    button.setAttribute('aria-expanded', 'false');
    } else {
    target.classList.add('show');
    button.setAttribute('aria-expanded', 'true');
    }
    });
    });
    });

    
    document.addEventListener('DOMContentLoaded', function () {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    let angle1 = 0;
    let angle2 = 0;
    const speed1 = 20;
    const speed2 = 30; 
    setInterval(function () {
    angle1 += 1;
    image1.style.transform = `translate(-30%, -30%) rotate(${angle1}deg)`;
    }, speed1);
    setInterval(function () {
    angle2 += -1;
    image2.style.transform = `translate(-70%, -70%) rotate(${angle2}deg)`;
    }, speed2);
    });