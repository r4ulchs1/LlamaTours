
function irArriba(pxPantalla) {
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        var botonArriba = document.getElementById('botonArriba');

        if (scroll > pxPantalla) {
            botonArriba.style.right = 20 + "px";
        } else {
            botonArriba.style.right = -100 + "px";
        }
    });
}

irArriba(500);




function scrollDestinosLeft() {
    const destinosHorizontal = document.querySelector('.destinosHorizontal');
    destinosHorizontal.scrollBy({
        left: -250,
        behavior: 'smooth'
    });
}

function scrollDestinosRight() {
    const destinosHorizontal = document.querySelector('.destinosHorizontal');
    destinosHorizontal.scrollBy({
        left: 250,
        behavior: 'smooth'
    });
}


