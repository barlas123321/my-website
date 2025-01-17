window.addEventListener("load", function () {
   
    setTimeout(function () {
        
        const elementsToAnimate = document.querySelectorAll('.hidden');

        
        elementsToAnimate.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 500); 
        });
    }, 1000); 
});

