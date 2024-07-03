//Event listener to create open/close funtion for accordions
document.addEventListener('DOMContentLoaded', function () {
    var accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(function (button) {
    button.addEventListener('click', function () {
    var target = document.querySelector(button.getAttribute('data-bs-target'));
    // var isCurrentlyExpanded = button.getAttribute('aria-expanded') === 'true';
    // Close all accordion items
    accordionButtons.forEach(function (otherButton) {
    var otherTarget = document.querySelector(otherButton.getAttribute('data-bs-target'));
    if (otherButton !== button && otherButton.getAttribute('aria-expanded') === 'true') {
    otherTarget.classList.remove('show');
    otherButton.setAttribute('aria-expanded', 'false');
    }
    });
    // Toggle current accordion item
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
    //Event listener to rotate the doodads
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
    //Event listener for opening each button on a new window
    document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn-custom");
    buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
    event.preventDefault();
    const url = button.getAttribute("href");
    window.open(url, "_blank");
    });
    });
    });
    //Event listener for redirecting the button link to email Lisa with the content
    document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn-custom");
    buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const url = button.getAttribute("href");
    if (url.startsWith("mailto:")) {
    window.location.href = url; // Use location.href for mailto links
    } else {
    window.open(url, "_blank"); // Open other links in a new window
    }
    });
    });
    });