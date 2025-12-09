const anio = document.querySelector('.anio');
const anioActual = new Date();
anio.textContent = anioActual.getFullYear();

// imprimir galeria
const $$galeria = document.querySelector('#galeria .galeria-imagenes');
const galeriaImgs = [
    '1.png',
    '2.png',
    '3.png',
    '5.png',
    '6.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png'
]


document.addEventListener('DOMContentLoaded', (e) => {
    imprimirGaleria(galeriaImgs);

});


function imprimirGaleria(imagenes) {
    const listado_imagenes = imagenes;
    let galeriaId = 0;
    setInterval(() => {
    $$galeria.innerHTML = '';
    const $img = document.createElement('img');
    $img.src = `build/img/galeria/${listado_imagenes[galeriaId]}`;
    $$galeria.appendChild($img);
    galeriaId++;
        if (galeriaId >= listado_imagenes.length) {
            galeriaId = 0;
        }
    
    }, 2500);
}

// FAQS: click para fijar open/close y hover para mostrar temporalmente
const items = document.querySelectorAll('.item');
console.log(items);
items.forEach(item => {
    const icons = item.querySelectorAll('.fa-solid');
    // click en la flecha o en la pregunta
    icons.forEach(icon => {
        icon.addEventListener('mouseover', (e) => {
            toggleItem(item, icon);
        });
        icon.addEventListener('mouseleave', (e) => {
            toggleItem(item, icon);
        });

    });
});


function toggleItem(item, icon) {
    const respuesta = item.querySelector('.respuesta');

    // alternar visibilidad
    respuesta.classList.toggle('hidden');

    // marcar si está abierto (permanente) o no
    const isOpen = !respuesta.classList.contains('hidden');
    icon.dataset.open = isOpen ? 'true' : 'false';

    // alternar icono (down / up)
    if (isOpen) {
        icon.classList.toggle('fa-angle-down');
        icon.classList.toggle('fa-angle-up');
    }
};