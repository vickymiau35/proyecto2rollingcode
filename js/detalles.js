/* 
let nombre = (document.getElementById('nombre'))
let categoria = (document.getElementById('categoria'))
let precio = (document.getElementById('precio'))
let descripcion = (document.getElementById('descripcion'))
let opiniones = (document.getElementById('opiniones'))
const carouselInner = document.querySelector('.carousel-inner')

function updateProduct(viaje){
nombre.innerText = viaje.name;
categoria.innerText = viaje.category;
precio.innerText = viaje.price;
descripcion.innerText = viaje.description;

//Carrusel
carouselInner.innerHTML = '';
const carouselItems = viaje.images.map((image,index)=>{
    const div = document.createElement('div');
    div.classList.add('carousel-item')
    if(index===0){
        div.classList.add('active')
    }
    div.innerHTML = `<img src='${image}' class='d-block w-100' alt='${viaje.name}'>`

});
carouselItems.map((item)=>{
    carouselInner.appendChild(item)
});
}
document.addEventListener('DOMContentLoaded', ()=> {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));
    if (product) {
        updateProduct(product);
    }
});
 */
let arrayProductos = JSON.parse(localStorage.getItem("productos"))
let nombre = (document.getElementById('nombre'))
let categoria = (document.getElementById('categoria'))
let precio = (document.getElementById('precio'))
let descripcion = (document.getElementById('descripcion'))
const carouselInner = document.querySelector('.carousel-inner')
const opiniones = (document.getElementById('opiniones'))
const OPINION_NOMBRE = document.getElementById('exampleFormControlTextarea1')

    function updateProduct() {
        nombre.innerText = arrayProductos.nombre;
        categoria.innerText = arrayProductos.categoria;
        precio.innerText = arrayProductos.precio;
        descripcion.innerText = arrayProductos.descripcion;
        let lista = `<ul>
          <li>${arrayProductos.fecha_de_salida}</li>
          <li>${arrayProductos.fecha_de_regreso}</li>
          <li>${arrayProductos.alojamiento}</li>
            <ul/>`
        const CONT_LIST = document.getElementById('contlist')
        CONT_LIST.innerHTML = lista

        //Carrusel
        carouselInner.innerHTML = '';
        const carouselItems = viaje.images.map((image, index) => {
            const carouselItems = arrayProductos.imagen.map((image, index) => {
                const div = document.createElement('div');
                div.classList.add('carousel-item')
                if (index === 0) {
                    div.classList.add('active')
                }
                div.innerHTML = `<img src='${image}' class='d-block w-100' alt='${viaje.name}'>`
                div.innerHTML = `<img src='${image}' class='d-block w-100' alt='${arrayProductos.nombre}'>`

            }});
    }

    carouselItems.map((item) => {
        carouselInner.appendChild(item)
    });



document.addEventListener('DOMContentLoaded', () => {
    let url = new URL(location.href);
    let idviaje = url.searchParams.get('id');

    let viaje = arrayProductos.find((item) => item.id === idviaje);

    if (viaje) {
        updateProduct(viaje);
    }
});
