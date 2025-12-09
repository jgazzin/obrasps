const anio = document.querySelector('.anio');
const anioActual = new Date();
anio.textContent = anioActual.getFullYear();

// galeria
let cat = 'reformas';
let imagenActual = 1;

let imagenes = [];

document.addEventListener('DOMContentLoaded', () => {
    mostrarImagen(imagenActual);
});

// categoria
const categorias = document.querySelectorAll('.categorias p');
categorias.forEach(item => {
    item.addEventListener('click', 
        (e) => {
        cat = e.target.dataset.cat;
        console.log(cat);
        imagenActual = 1;
        mostrarImagen(imagenActual);
    });
});


// dots
const dots = document.querySelectorAll('.dot');
dots.forEach(dot => {
    dot.addEventListener('click', 
        (e) => {
        if(dot === e.target){
            dots.forEach(d => d.classList.remove('dot_active'));                            
            
            e.target.classList.add('dot_active');

            imagenActual = e.target.dataset.img;
            console.log(imagenActual);
            mostrarImagen(imagenActual);
            return
        }
        
    });
});


// next prev
const prev = document.querySelector('#galeria .fa-angle-left');
const next = document.querySelector('#galeria .fa-angle-right');

prev.addEventListener('click', () => {
    imagenActual--;
    if(imagenActual <1) imagenActual = 3;
    const dotActual = document.querySelector(`.dot[data-img='${imagenActual}']`);
    dots.forEach(d => d.classList.remove('dot_active'));                            
    dotActual.classList.add('dot_active');
    mostrarImagen(imagenActual);
});

next.addEventListener('click', () => {
    imagenActual++;
    if(imagenActual >3) imagenActual = 1;
    const dotActual = document.querySelector(`.dot[data-img='${imagenActual}']`);
    dots.forEach(d => d.classList.remove('dot_active'));                            
    dotActual.classList.add('dot_active');
    mostrarImagen(imagenActual);
});

function mostrarImagen(num) {
   const contenedorImagen = document.querySelector('.galeria-imagenes'); 
   contenedorImagen.innerHTML = '';
   const imgNum = parseInt(num)-1;

   console.log(cat);
   console.log(num);

   const img = document.createElement('img');
   if(cat === 'reformas'){
        imagenes = [
            '1.png',
            '2.png',
            '3.png',
        ]
        img.src = `build/img/galeria/${imagenes[imgNum]}`;
        contenedorImagen.appendChild(img);
   } else if(cat === 'obras'){
        imagenes = [
            '4.png',
            '5.png',
            '6.png',
        ]
        img.src = `build/img/galeria/${imagenes[imgNum]}`;
        contenedorImagen.appendChild(img);
   } else if(cat === 'muebles'){
        imagenes = [
            '7.png',
            '8.png',
            '9.png',
        ]
        img.src = `build/img/galeria/${imagenes[imgNum]}`;
        contenedorImagen.appendChild(img);
   }
}




// FAQS
const items = document.querySelectorAll('.item');
console.log(items);
items.forEach(item => {
    const icons = item.querySelectorAll('.fa-solid');

    icons.forEach(icon => {
        icon.addEventListener('mouseover', (e) => {
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
    };
};