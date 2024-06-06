const anio = document.querySelector('.anio');
const anioActual = new Date();
anio.textContent = anioActual.getFullYear();

// verificación form
const form = document.querySelector('.form');
const btn = document.querySelector('.form .btn')
let verificado = {
    nombre: '',
    tel: '',
    email: '',
    terminos: '',
    asunto: 'consulta'
}

form.addEventListener('focusout', verificar);
btn.addEventListener('click', (e) => {
    e.preventDefault();
    enviar()
} )

// funciones

function verificar(e) {
    let type = e.target.id;

    switch (type) {
        case 'name':
            nombre(e.target)
            break;
        case 'tel':
            tel(e.target)
            break;
        case 'email':
            email(e.target)
            break;
        case 'terminos':
            terminos(e.target)
            break;
        case 'asunto':
            if(e.target.value!= '') {
                verificado.asunto = e.target.value;
            }
            break;
    
        default:

            break;
    }

    if(!Object.values(verificado).includes('')){
        btn.classList.remove('disabled');
        btn.disabled = false;
    } else {
        btn.disabled = true;
        btn.classList.add('disabled')
    }

}

function nombre(e) {
    const nombre = e.value;
    if (nombre.trim() === '') {
            alert(e, 'error')
            verificado.nombre = ''
        } else {
            alert(e, 'success')
            verificado.nombre = 'ok'
        }
    }


function tel(e) {
    if (e.value === '' || e.value.length < 10) {
        alert(e,'error')
        verificado.tel = ''
    } else if (isNaN(Number(e.value))) {
        alert(e, 'error')
        verificado.tel = ''
    } else {
        alert(e, 'success')
        verificado.tel = 'ok'
    }
}

function email(e) {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
  if(!regex.test(e.value) || e.value.trim() === ''){
    alert(e, 'error')
    verificado.email = ''
  } else {
    alert(e, 'success')
    verificado.email = 'ok'
  }
}

function terminos(e) {
    if (!e.checked) {
        alert(e, 'error')
        verificado.terminos = ''
    } else {
        alert (e, 'success')
        verificado.terminos = 'ok'
    }
}

function alert(e, tipo) {
    eliminarAlert(e);
    const padre = e.parentElement;
    const icon = document.createElement('I');
    icon.classList.add('fa-solid', 'fa-circle-check', `${tipo}`);
    padre.appendChild(icon);
}

function eliminarAlert(e) {
    if (e.nextElementSibling) {
        e.nextElementSibling.remove()
    }
}

function enviar() {
    form.classList.add('enviando')
    console.log(verificado);

    verificado = {
        nombre: '',
        tel: '',
        email: '',
        terminos: '',
        asunto: 'consulta'
    }
    setTimeout(() => {
        form.classList.remove('enviando')
        form.reset()
        const i = form.querySelectorAll('.fa-solid');
        i.forEach(element => {
            element.remove()
        });
        btn.classList.add('disabled')
        btn.disabled = true;
    }, 1800);
    
    
}

// desde servicios
const servicios = document.querySelectorAll('.flip-card__back .btn');
servicios.forEach(btn => {
    btn.addEventListener('click', (e)=> {
        console.log(e.target);
        const asunto = e.target.parentElement.parentElement.firstElementChild.firstElementChild.textContent;
        verificado.asunto = asunto;
        const inputAsunto = document.querySelector('#asunto');
        inputAsunto.value = asunto.toUpperCase();
    })
    
});



// FAQS
const arrows = document.querySelectorAll('.faqs .pregunta .fa-solid')

arrows.forEach(arrow => {
    arrow.addEventListener('click', mostrar)
});

function mostrar(e) {
    const item = e.target.parentElement.parentElement;
    const respuesta =item.lastElementChild;
    const icon = item.firstElementChild.lastElementChild;

    respuesta.classList.toggle("hidden");
    icon.classList.toggle("fa-angle-down")
    icon.classList.toggle("fa-angle-up")
}