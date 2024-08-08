const contenedorComentarios = document.getElementById('contenedorComentarios');
function crearComentarioEstructura(nombre, comentario) {
    // Crear la estructura del comentario
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

    // Recuperar los comentarios existentes del localStorage
    const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

    // Crear un nuevo comentario
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

// Cargar los comentarios al cargar la página
document.addEventListener('DOMContentLoaded', cargarComentarios);