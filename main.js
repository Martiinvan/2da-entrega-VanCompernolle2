
// definimos un array con todos los elementos esto me hace facil cambiar las cosas cuando no las necesite o agregue nuevas
const containerCategory = [
    {
        imagen: "assets/headset.svg",
        nombre: "Headset",
    },
    {
        imagen: "assets/keyboard.svg",
        nombre: "Keyboards",
    },
    {
        imagen: "assets/mouse.svg",
        nombre: "Mouses",
    },
    {
        imagen: "assets/mousepad.svg",
        nombre: "Mousepads",
    },
    {
        imagen: "assets/joystick.svg",
        nombre: "Joysticks",
    },
    {
        imagen: "assets/webcam.svg",
        nombre: "Webcams",
    },
]
const containerProduct= [
    {
        imagen: "assets/mouse-r-m711.jpg",
        nombre: "Mouse Redragon M177",
        precio: "9500",
        fabric: "redragon",
        id: 1,
    },
    {
        imagen: "assets/mouse-logitech-305.jpg",
        nombre: "Mouse Logitech G305",
        precio: "21000",
        fabric: "logitech",
        id: 2,
    },
    {
        imagen: "assets/headset-zeus.jpg",
        nombre: "Headset Redragon Zeus",
        precio: "35000",
        fabric: "redragon",
        id: 3,
    },
    {
        imagen: "assets/headset-i-g733.jpg",
        nombre: "Headset logitech G733",
        precio: "95000",
        fabric: "logitech",
        id: 4,
    },
    {
        imagen: "assets/headset-l-g432.jpg",
        nombre: "Headset Logitech G432",
        precio: "42999",
        fabric: "logitech",
        id: 5,
    },
    {
        imagen: "assets/headset-g435.jpg",
        nombre: "Headset Logitech G435",
        precio: "30999",
        fabric: "logitech",
        id: 6,
    },
    {
        imagen: "assets/headset-hy-cloud.jpg",
        nombre: "Headset HyperX CloudX",
        precio: "20.655",
        fabric: "HyperX",
        id: 7,
    },
    {
        imagen: "assets/keyboard-hy-alloy.jpg",
        nombre: "Keyboard HyperX Alloy Origins",
        precio: "49.999",
        fabric: "HyperX",
        id: 8,
    },
    {
        imagen: "assets/keyboard-g213.jpg",
        nombre: "Keyboard Logitech G213",
        precio: "37.999",
        fabric: "logitech",
        id: 9,
    },
    {
        imagen: "assets/mousepad-logit.jpg",
        nombre: "Mousepad Logitech G240",
        precio: "5.700",
        fabric: "logitech",
        id: 10,
    },
    {
        imagen: "assets/mousepad-red.jpg",
        nombre: "Mousepad Redragon P006",
        precio: "10.000",
        fabric: "Redragon",
        id: 11,
    },
    {
        imagen: "assets/g808.jpg",
        nombre: "Joystick Redragon G808",
        precio: "17.500",
        fabric: "Redragon",
        id: 12,
    },
    {
        imagen: "assets/g807.jpg",
        nombre: "Joystick Redragon G807",
        precio: "10.000",
        fabric: "Redragon",
        id: 13,
    },
]
// llamamos a la clase products2
const category = document.querySelector(".products2");
// definimos funcion
function funCategory () {
containerCategory.forEach((categoryItem) => {
    let a = document.createElement("a");
    a.innerHTML = `
        <div class="element">
            <img src="${categoryItem.imagen}">
            <h3>${categoryItem.nombre}</h3>
        </div>
    `;
    category.appendChild(a);
});
}
funCategory ();
const product = document.querySelector(".product");
function funProduct () {
    containerProduct.forEach((item) => {
        let a = document.createElement("a");
        a.innerHTML = `
            <div class="boxp">
                <img src="${item.imagen}">
                <h3>${item.nombre}</h3>
                <p>$${item.precio}</h3>
                <button class="agregar-carrito" data-id="${item.id}">Agregar al Carrito</button>
            </div>
        `;
        product.appendChild(a);
    });
    }
// EJECUTAR FUNCION 
funProduct ();

// MENU HAMBURGUESA

const menuBoton = document.querySelector(".menu-toggle");

menuBoton.addEventListener("click", menuToggle);
    function menuToggle () {
        const menuDesplegable = document.querySelector(".nav");
        menuDesplegable.classList.toggle("active");
        menuBoton.classList.toggle("active");
    }