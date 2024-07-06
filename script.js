//Event listener to create open/close funtion for accordions
document.addEventListener('DOMContentLoaded', function () {
    let temp = 0;
    let button1 = document.getElementById('button1')
    let button2 = document.getElementById('button2');
    let button3 = document.getElementById('button3');
    let button4 = document.getElementById('button4');
    let div1 = document.getElementById('collapseOne');
    let div2 = document.getElementById('collapseTwo');
    let div3 = document.getElementById('collapseThree');
    let div4 = document.getElementById('collapseFour');
    let footer = document.getElementById('footer');
  
    button1.addEventListener("click", function() {
        if(temp===0) {
            div1.classList.add("show");
            temp = 1;
        } else if(temp===1){
            div1.classList.remove("show");
            temp = 0;
        } else if(temp===2) {
            div2.classList.remove("show");
            div1.classList.add("show");
            temp = 1;
        } else if(temp===3) {
            div3.classList.remove("show");
            div1.classList.add("show");
            temp = 1;
        } else if(temp===4) {
            div4.classList.remove("show");
            div1.classList.add("show");
            temp = 1;
        }

        if(temp===0) {
            footer.classList.add('position-value');
        }
        else {
            footer.classList.remove('position-value');
        }
    });
    button2.addEventListener("click", function() {
        if(temp===0) {
            div2.classList.add("show");
            temp = 2;
        } else if(temp===1){
            div1.classList.remove("show");
            div2.classList.add("show");
            temp = 2;
        } else if(temp===2) {
            div2.classList.remove("show");
            temp = 0;
        } else if(temp===3) {
            div3.classList.remove("show");
            div2.classList.add("show");
            temp = 2;
        } else if(temp===4) {
            div4.classList.remove("show");
            div2.classList.add("show");
            temp = 2;
        }

        if(temp===0) {
            footer.classList.add('position-value');
        }
        else {
            footer.classList.remove('position-value');
        }
    });
    button3.addEventListener("click", function() {
        if(temp===0) {
            div3.classList.add("show");
            temp = 3;
        } else if(temp===1){
            div1.classList.remove("show");
            div3.classList.add("show");
            temp = 3;
        } else if(temp===2) {
            div2.classList.remove("show");
            div3.classList.add("show");
            temp = 3;
        } else if(temp===3) {
            div3.classList.remove("show");
            temp = 0;
        } else if(temp===4) {
            div4.classList.remove("show");
            div3.classList.add("show");
            temp = 3;
        }

        if(temp===0) {
            footer.classList.add('position-value');
        }
        else {
            footer.classList.remove('position-value');
        }
    });
    button4.addEventListener("click", function() {
        if(temp===0) {
            div4.classList.add("show");
            temp = 4;
        } else if(temp===1){
            div1.classList.remove("show");
            div4.classList.add("show");
            temp = 4;
        } else if(temp===2) {
            div2.classList.remove("show");
            div4.classList.add("show");
            temp = 4;
        } else if(temp===3) {
            div3.classList.remove("show");
            div3.classList.add("show");
            temp = 4;
        } else if(temp===4) {
            div4.classList.remove("show");
            temp = 0;
        }

        if(temp===0) {
            footer.classList.add('position-value');
        }
        else {
            footer.classList.remove('position-value');
        }
    });
      if(div1.classList.contains('show') || div2.classList.contains('show') || div3.classList.contains('show') || div4.classList.contains('show')) {
        console.log("0");
        footer.classList.remove('position-value');
      } else {
        console.log("1");
        footer.classList.add('position-value');
      }
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
        event.preventDefault();
        const url = button.getAttribute("href");
        if (url.startsWith("mailto:")) {
        window.location.href = url;
        } else {
        window.open(url, "_blank");
        }
        });
        });
        });

        