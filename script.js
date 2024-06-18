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