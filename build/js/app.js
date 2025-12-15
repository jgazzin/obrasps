const anio = document.querySelector('.anio');
const anioActual = new Date();
anio.textContent = anioActual.getFullYear();

// galeria
let cat = 1;
let imagenActual = 1;
let obra = 1;

let imagenes = [
    {
        cat: '1',
        obra: '1',
        webp: 'webp/1.webp',
        png: '1.png',
        nombre: 'Reforma cocina - Viedma',
        año: '2016',
        proyecto: '@GDisenio',
        descripcion: 'Reforma completa de cocina en vivienda unifamiliar.'
    },
    {
        cat: '1',
        obra: '1',
        webp: 'webp/2.webp',
        png: '2.png',
        nombre: 'Reforma cocina - Viedma',
        año: '2016',
        proyecto: '@GDisenio',
        descripcion: 'Reforma completa de cocina en vivienda unifamiliar.'
    },
    {
        cat: '1',
        obra: '1',
        webp: 'webp/3.webp',
        png: '3.png',
        nombre: 'Reforma cocina - Viedma',
        año: '2016',
        proyecto: '@GDisenio',
        descripcion: 'Reforma completa de cocina en vivienda unifamiliar.'
    },
    {
        cat: '1',
        obra: '1',
        webp: 'webp/4.webp',
        png: '4.png',
        nombre: 'Reforma cocina -Viedma',
        año: '2016',
        proyecto: '@GDisenio',
        descripcion: 'Reforma completa de cocina en vivienda unifamiliar.'
    },
    {
        cat: '1',
        obra: '2',
        webp: 'webp/5.webp',
        png: '5.png',
        nombre: 'Reforma Laboratorio ISP - Bariloche',
        año: '2013',
        proyecto: '@GDisenio',
        descripcion: 'Ampliación de aula Laboratorio en Instituto secundario. Estructura de entrepiso de perfiles laminados y terminaciones.'
    },
    {
        cat: '1',
        obra: '2',
        webp: 'webp/6.webp',
        png: '6.png',
        nombre: 'Reforma Laboratorio ISP - Bariloche',
        año: '2013',
        proyecto: '@GDisenio',
        descripcion: 'Ampliación de aula Laboratorio en Instituto secundario. Estructura de entrepiso de perfiles laminados y terminaciones.'
    },
    {
        cat: '1',
        obra: '2',
        webp: 'webp/7.webp',
        png: '7.png',
        nombre: 'Reforma Laboratorio ISP - Bariloche',
        año: '2013',
        proyecto: '@GDisenio',
        descripcion: 'Ampliación de aula Laboratorio en Instituto secundario. Estructura de entrepiso de perfiles laminados y terminaciones.'
    }, 
    {
        cat: '2',
        obra: '1',
        webp: 'webp/8.webp',
        png: '8.png',
        nombre: 'Edificio Prefectura - Viedma',
        año: '2014',
        proyecto: 'Obra Pública.',
        descripcion: 'Jefatura de obra para la empresa COINAL S.A. Obra completa.'
    }, 
    {
        cat: '2',
        obra: '2',
        webp: 'webp/9.webp',
        png: '9.png',
        nombre: 'Ampliación en PA - Viedma',
        año: '2024',
        proyecto: 'Sur Seco',
        descripcion: 'Ampliación en SteelFraming de vivienda unifamiliar. Estructura de paneles, cerramientos exteriores EIFS y terminaciones interiores.'
    },
    {
        cat: '2',
        obra: '2',
        webp: 'webp/10.webp',
        png: '10.png',
        nombre: 'Ampliación en PA - Viedma',
        año: '2024',
        proyecto: 'Sur Seco',
        descripcion: 'Ampliación en SteelFraming de vivienda unifamiliar. Estructura de paneles, cerramientos exteriores EIFS y terminaciones interiores.'
    },
    {
        cat: '2',
        obra: '2',
        webp: 'webp/11.webp',
        png: '11.png',
        nombre: 'Ampliación en PA - Viedma',
        año: '2024',
        proyecto: 'Sur Seco',
        descripcion: 'Ampliación en SteelFraming de vivienda unifamiliar. Estructura de paneles, cerramientos exteriores EIFS y terminaciones interiores.'
    },
    {
        cat: '2',
        obra: '2',
        webp: 'webp/12.webp',
        png: '12.png',
        nombre: 'Ampliación en PA - Viedma',
        año: '2024',
        proyecto: 'Sur Seco',
        descripcion: 'Ampliación en SteelFraming de vivienda unifamiliar. Estructura de paneles, cerramientos exteriores EIFS y terminaciones interiores.'
    },
    {
        cat: '1',
        obra: '3',
        webp: 'webp/13.webp',
        png: '13.png',
        nombre: 'Ampliación vivienda IPPV - Viedma',
        año: '2015',
        proyecto: '@GDisenio',
        descripcion: 'Ampliación de cocina, estar y comedor en PB. Obra completa.'
    },
    {
        cat: '1',
        obra: '3',
        webp: 'webp/14.webp',
        png: '14.png',
        nombre: 'Ampliación vivienda IPPV - Viedma',
        año: '2015',
        proyecto: '@GDisenio',
        descripcion: 'Ampliación de cocina, estar y comedor en PB. Obra completa.'
    },
    {
        cat: '1',
        obra: '3',
        webp: 'webp/15.webp',
        png: '15.png',
        nombre: 'Ampliación vivienda IPPV - Viedma',
        año: '2015',
        proyecto: '@GDisenio',
        descripcion: 'Ampliación de cocina, estar y comedor en PB. Obra completa.'
    },
    {
        cat: '1',
        obra: '3',
        webp: 'webp/16.webp',
        png: '16.png',
        nombre: 'Ampliación vivienda IPPV - Viedma',
        año: '2015',
        proyecto: '@GDisenio',
        descripcion: 'Ampliación de cocina, estar y comedor en PB. Obra completa.'
    },
    {
        cat: '1',
        obra: '4',
        webp: 'webp/17.webp',
        png: '17.png',
        nombre: 'Reforma en galpón industrial - Viedma',
        año: '2024',
        proyecto: 'Sur Seco',
        descripcion: 'Estructura de entrepiso en SteelFraming.'
    },
    {
        cat: '2',
        obra: '3',
        webp: 'webp/18.webp',
        png: '18.png',
        nombre: 'Ampliación aulas ISP - Bariloche',
        año: '2019',
        proyecto: '@GDisenio',
        descripcion: 'Ampliación de aulas en Instituto secundario. Estructura de entrepiso de perfiles laminados, divisiones internas en SteelFraming y terminaciones. Obra completa.'
    },
    {
        cat: '2',
        obra: '3',
        webp: 'webp/19.webp',
        png: '19.png',
        nombre: 'Ampliación aulas ISP - Bariloche',
        año: '2019',
        proyecto: '@GDisenio',
        descripcion: 'Ampliación de aulas en Instituto secundario. Estructura de entrepiso de perfiles laminados, divisiones internas en SteelFraming y terminaciones. Obra completa.'
    },
    {
        cat: '2',
        obra: '3',
        webp: 'webp/20.webp',
        png: '20.png',
        nombre: 'Ampliación aulas ISP - Bariloche',
        año: '2019',
        proyecto: '@GDisenio',
        descripcion: 'Ampliación de aulas en Instituto secundario. Estructura de entrepiso de perfiles laminados, divisiones internas en SteelFraming y terminaciones. Obra completa.'
    },
    {
        cat: '2',
        obra: '3',
        webp: 'webp/21.webp',
        png: '21.png',
        nombre: 'Ampliación aulas ISP - Bariloche',
        año: '2019',
        proyecto: '@GDisenio',
        descripcion: 'Ampliación de aulas en Instituto secundario. Estructura de entrepiso de perfiles laminados, divisiones internas en SteelFraming y terminaciones. Obra completa.'
    },
    {
        cat: '2',
        obra: '3',
        webp: 'webp/22.webp',
        png: '22.png',
        nombre: 'Ampliación aulas ISP - Bariloche',
        año: '2019',
        proyecto: '@GDisenio',
        descripcion: 'Ampliación de aulas en Instituto secundario. Estructura de entrepiso de perfiles laminados, divisiones internas en SteelFraming y terminaciones. Obra completa.'
    },
    {
        cat: '2',
        obra: '3',
        webp: 'webp/23.webp',
        png: '23.png',
        nombre: 'Ampliación aulas ISP - Bariloche',
        año: '2019',
        proyecto: '@GDisenio',
        descripcion: 'Ampliación de aulas en Instituto secundario. Estructura de entrepiso de perfiles laminados, divisiones internas en SteelFraming y terminaciones. Obra completa.'
    },
    {
        cat: '2',
        obra: '3',
        webp: 'webp/24.webp',
        png: '24.png',
        nombre: 'Ampliación aulas ISP - Bariloche',
        año: '2019',
        proyecto: '@GDisenio',
        descripcion: 'Ampliación de aulas en Instituto secundario. Estructura de entrepiso de perfiles laminados, divisiones internas en SteelFraming y terminaciones. Obra completa.'
    },
    {
        cat: '2',
        obra: '3',
        webp: 'webp/25.webp',
        png: '25.png',
        nombre: 'Ampliación aulas ISP - Bariloche',
        año: '2019',
        proyecto: '@GDisenio',
        descripcion: 'Ampliación de aulas en Instituto secundario. Estructura de entrepiso de perfiles laminados, divisiones internas en SteelFraming y terminaciones. Obra completa.'
    },
    {
        cat: '2',
        obra: '4',
        webp: 'webp/26.webp',
        png: '26.png',
        nombre: 'Montaje estructura vivienda - El Cóndor',
        año: '2025',
        proyecto: 'Sur Seco',
        descripcion: 'Montaje de estructura en SteelFraming para vivienda unifamiliar.'
    },
    {
        cat: '2',
        obra: '4',
        webp: 'webp/27.webp',
        png: '27.png',
        nombre: 'Montaje estructura vivienda - El Cóndor',
        año: '2025',
        proyecto: 'Sur Seco',
        descripcion: 'Montaje de estructura en SteelFraming para vivienda unifamiliar.'
    },
    {
        cat: '2',
        obra: '4',
        webp: 'webp/28.webp',
        png: '28.png',
        nombre: 'Montaje estructura vivienda - El Cóndor',
        año: '2025',
        proyecto: 'Sur Seco',
        descripcion: 'Montaje de estructura en SteelFraming para vivienda unifamiliar.'
    },
    {
        cat: '3',
        obra: '1',
        webp: 'webp/29.webp',
        png: '29.png',
        nombre: 'Mobiliario cocina',
        año: '2020',
        proyecto: '@GDisenio',
        descripcion: 'Fabricación y colocación de mobiliario de cocina a medida.'
    },
    {
        cat: '3',
        obra: '2',
        webp: 'webp/30.webp',
        png: '30.png',
        nombre: 'Muebles en melamina',
        año: '2020',
        proyecto: '@GDisenio',
        descripcion: 'Muebles a medida en melamina.'
    },
    {
        cat: '3',
        obra: '2',
        webp: 'webp/31.webp',
        png: '31.png',
        nombre: 'Muebles en melamina',
        año: '2020',
        proyecto: '@GDisenio',
        descripcion: 'Muebles a medida en melamina.'
    },
    {
        cat: '3',
        obra: '3',
        webp: 'webp/32.webp',
        png: '32.png',
        nombre: 'Trabajos en hierro y madera',
        año: '-',
        proyecto: '@GDisenio',
        descripcion: 'Muebles y estructuras en hierro y madera a medida.'
    },
    {
        cat: '3',
        obra: '1',
        webp: 'webp/33.webp',
        png: '33.png',
        nombre: 'Muebles en madera',
        año: '2023',
        proyecto: '@GDisenio',
        descripcion: 'Muebles y mesada en madera a medida.'
    },
    {
        cat: '3',
        obra: '4',
        webp: 'webp/34.webp',
        png: '34.png',
        nombre: 'Trabajos en madera',
        año: '-',
        proyecto: '-',
        descripcion: 'Diseño y trabajos en madera a medida.'
    }
];
let listado = imagenes;

document.addEventListener('DOMContentLoaded', () => {
    mostrarImagen();
});


// categoria
const categorias = document.querySelectorAll('.categorias p');
categorias.forEach(item => {
    item.addEventListener('click', 
        (e) => {
        cat = e.target.dataset.cat;
        console.log(cat);
        listado = imagenes.filter( img => img.cat === cat.toString() );
        console.log(listado);
        imagenActual = 1;
        mostrarImagen();
    });
});

// next prev
const prev = document.querySelector('#galeria .fa-angle-left');
const next = document.querySelector('#galeria .fa-angle-right');

prev.addEventListener('click', () => {
    imagenActual--;
    if(imagenActual <= 0) imagenActual = listado.length;

    mostrarImagen();
});

next.addEventListener('click', () => {
    imagenActual++;
    if(imagenActual > listado.length) imagenActual = 1;

    mostrarImagen();
});


function mostrarImagen() {
   const contenedorImagen = document.querySelector('.galeria'); 
   contenedorImagen.innerHTML = '';
   const imgNum = imagenActual -1;

   const img = document.createElement('picture');
   img.setAttribute('data-cat', cat);
   img.setAttribute('data-img', imagenActual);
    img.innerHTML = `
        <source type="image/webp"
                srcset="/build/img/galeria/${listado[imgNum].webp} 1200w"
                sizes="(max-width:600px) 400px, (max-width:1200px) 800px, 1200px">
        <source type="image/png"
                srcset="/build/img/galeria/${listado[imgNum].png} 1200w"
                sizes="(max-width:600px) 400px, (max-width:1200px) 800px, 1200px">
        <img src="/build/img/galeria/${listado[imgNum].png}" alt="Descripción" loading="lazy" decoding="async">
    `;
   contenedorImagen.appendChild(img);

   // pintar dot
    const dotsGaleria = document.querySelectorAll('#galeria .dot');
    console.log(listado[imgNum].obra);
    dotsGaleria.forEach(dot => {
        dot.classList.remove('dot_active');
        if(dot.dataset.obra === listado[imgNum].obra){
            dot.classList.add('dot_active');
        }
    });

    imprimirTexto(listado[imgNum]);

    // pintar categoria
    const catsGaleria = document.querySelectorAll('#galeria .categorias p')
    catsGaleria.forEach(cat => {
        cat.classList.remove('cat_active');
        if(cat.dataset.cat === listado[imgNum].cat){
            cat.classList.add('cat_active');
        }
    });
};

function imprimirTexto(obra) {
    const contenedorTexto = document.querySelector('.textos_obras');
    contenedorTexto.innerHTML = `
        <h3>${obra.nombre}</h3>
        <p><strong>Año:</strong> ${obra.año}</p>
        <p><strong>Proyecto:</strong> ${obra.proyecto}</p>
        <i>${obra.descripcion}</i>
    `;
}

// FAQS
const items = document.querySelectorAll('.item');
items.forEach(item => {
    const icons = item.querySelectorAll('.fa-solid');

    icons.forEach(icon => {
        icon.addEventListener('click', (e) => {
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