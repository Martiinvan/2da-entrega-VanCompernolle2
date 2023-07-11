
const iconCarrito = document.querySelector("#imagen-carrito");

// Evento click en la imagen del carrito
function mostrarCarrito() {
    const carrito = document.querySelector("#carrito");
    carrito.classList.toggle("active");
}
document.getElementById('imagen-carrito').addEventListener('click', mostrarCarrito);

function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));

    actualizarCarrito();
}
const carritoProductos = document.querySelector("#carrito-productos");

carritoProductos.addEventListener('click', (event) => {
    if (event.target.classList.contains('borrar-producto')) {
        const productoId = parseInt(event.target.dataset.id);
        borrarProductoDelCarrito(productoId);
    }
});