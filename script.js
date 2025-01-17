window.addEventListener("load", function () {
   
    setTimeout(function () {
        document.getElementById("loading-screen").classList.add("hidden");
    }, 1000); 

    
    setTimeout(function () {
        
        const elementsToAnimate = document.querySelectorAll('.hidden');

        
        elementsToAnimate.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 500); 
        });
    }, 1000); 
});

function applyRainbowEffect(element, speed = 100) {
    const text = element.innerText;
    element.innerHTML = ""; 
    text.split("").forEach((char, i) => {
        let span = document.createElement("span");
        span.innerText = char;
        span.style.display = "inline-block";
        span.style.transition = "color 0.5s";
        element.appendChild(span);
    });

    let hue = 0;
    setInterval(() => {
        hue = (hue + 10) % 360;
        element.querySelectorAll("span").forEach((span, i) => {
            let colorHue = (hue + i * 20) % 360; 
            span.style.color = `hsl(${colorHue}, 100%, 50%)`;
        });
    }, speed);
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".rainbow-text").forEach((el) => {
        applyRainbowEffect(el, 100);
    });
});

