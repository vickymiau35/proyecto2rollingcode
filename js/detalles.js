
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
