const contenedorComentarios = document.getElementById('contenedorComentarios');
function crearComentarioEstructura(nombre, comentario) {
    // Crea la estructura del comentario
    const comentarioDiv = document.createElement('div');
    comentarioDiv.classList.add('media', 'mt-3');

    const mediaBodyDiv = document.createElement('div');
    mediaBodyDiv.classList.add('media-body');

    const nombreH5 = document.createElement('h5');
    nombreH5.classList.add('mt-0');
    nombreH5.textContent = nombre;

    const comentarioP = document.createElement('p');
    comentarioP.textContent = comentario;

    mediaBodyDiv.append(nombreH5, comentarioP);
    comentarioDiv.append(mediaBodyDiv);

    return comentarioDiv;
}

function agregarComentario() {
    const nombre = document.getElementById('nombreUsuario').value;
    const comentario = document.getElementById('comentarioUsuario').value;    
    const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

    // Crea un nuevo comentario
    const nuevoComentario = {
        nombre: nombre,
        comentario: comentario
    };
    comentarios.push(nuevoComentario);

    localStorage.setItem('comentarios', JSON.stringify(comentarios));

    //Creamos y agregamos al dom la estructura del comentario
    const comentarioDiv = crearComentarioEstructura(nombre, comentario);
    contenedorComentarios.appendChild(comentarioDiv);
    
}

// Función para cargar los comentarios desde el localStorage cuando cargue el DOM
function cargarComentarios() {
    const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

    comentarios.forEach(comentario => {
        const comentarioDiv = crearComentarioEstructura(comentario.nombre, comentario.comentario);
        contenedorComentarios.appendChild(comentarioDiv);
    });
}


document.addEventListener('DOMContentLoaded', cargarComentarios);

document.addEventListener('DOMContentLoaded', () => {
    const url = new URL(location.href);  
    const idviaje = url.searchParams.get('id'); 

    
    const arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];
    const viaje = arrayProductos.find(item => item.id == idviaje); 

    if (viaje) {
        updateProduct(viaje);
    } else {
        console.error('Producto no encontrado');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const url = new URL(location.href);  
    const idviaje = url.searchParams.get('id'); 

   
    const arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];
    const viaje = arrayProductos.find(item => item.id == idviaje); 

    if (viaje) {
        updateProduct(viaje);
    } else {
        console.error('Producto no encontrado');
    }
});

function updateProduct(viaje) {
    document.getElementById('nombre').innerText = viaje.nombre;
    document.getElementById('categoria').innerText = viaje.categoria;
    document.getElementById('precio').innerText = viaje.precio;
    document.getElementById('descripcion').innerText = viaje.descripcion;

    let lista = `<ul>
        <li>Fecha de salida: ${viaje.fecha_de_salida}</li>
        <li>Fecha de regreso: ${viaje.fecha_de_regreso}</li>
        <li>Alojamiento: ${viaje.alojamiento}</li>
    </ul>`;

    const CONT_LIST = document.getElementById('contlist');
    CONT_LIST.innerHTML = lista
    // CONT_LIST.append(lista)

    //Cambiar imagen
    const DINAMIC_IMG = document.querySelector('#productImageDisplay')
    DINAMIC_IMG.src = viaje.imagen;

}
function clearBox(){
    document.getElementById('nombreUsuario').value = '' 
    document.getElementById('comentarioUsuario').value = ''
}
const AGREGAR_COMENT = document.getElementById('coment-btn')
AGREGAR_COMENT.addEventListener('click', clearBox())

document.addEventListener('DOMContentLoaded', () => {
    const btnContactoAsesor = document.getElementById('contacto-asesor');

    btnContactoAsesor.addEventListener('click', () => {
        const numeroTelefono = '543816817725'; 
        const mensaje = encodeURIComponent('Hola, estoy interesado en obtener más información sobre el viaje');
        const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensaje}`;
        
        window.open(urlWhatsApp, '_blank'); 
    });
});
