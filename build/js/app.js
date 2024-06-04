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
    terminos: ''
}

form.addEventListener('focusout', verificar);
btn.addEventListener('click', (e) => {
    e.preventDefault();
    enviar()
} )

// funciones

function verificar(e) {
    let type = e.target.type;

    switch (type) {
        case 'text':
            nombre(e.target)
            break;
        case 'tel':
            tel(e.target)
            break;
        case 'email':
            email(e.target)
            break;
        case 'checkbox':
            terminos(e.target)
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

    verificado = {
        nombre: '',
        tel: '',
        email: '',
        terminos: ''
    }
    setTimeout(() => {
        form.classList.remove('enviando')
        form.reset()
        const i = form.querySelectorAll('.fa-regular');
        i.forEach(element => {
            element.remove()
        });
        btn.classList.add('disabled')
        btn.disabled = true;
    }, 1800);
    
    
}
