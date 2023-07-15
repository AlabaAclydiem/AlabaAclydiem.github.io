let element = document.getElementById("cloud")
let text_element = document.getElementById("cloud_text")
let op = 0.01;
let fadeIn = setInterval(() => {
    if (op >= 1) {
        clearInterval(fadeIn);
    }
    element.style.opacity = op;
    text_element.style.opacity = op;
    op += op * 0.1;
}, 30);

