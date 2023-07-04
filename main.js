// parte principal donde se pide que quiere hacer el usuario, todo con numeros y se repite hasta que el usuario ingrese 0
// let menuE = false;
//     do {
//         let prodI = parseInt(prompt(`Enter the action using a number 
//     0 - Exit the menu 
//     1 - I have a discount coupon `));

//         if (prodI === 0 || prodI === 1) {
//             switch (prodI) {
//                 case 1:
//                     codeOff();
//                     break;
//                 case 0:
//                     alert(`Have a good day, thank you.`);
//                     menuE = true;
//                     break;
//             }
//         } else {
//             alert(`Invalid input. Please enter a valid number.`);
//         }
//     }
//     while (!menuE);

// funcion que da codigo de descuento si ingresa 12345678

function codeOff() {
    const codeValid = 12345678;
    let attempts = 0;

    while (attempts < 5) {
        let codeIngresado = parseInt(prompt("Enter the discount code:"));

        if (codeIngresado === codeValid) {
            alert("Valid code. You have a 20% discount.");
            break;
        }

        attempts++;
        alert("Invalid code. Attempt " + attempts + " of 5.");
    }
    if (attempts === 5) {
        alert("You have reached the maximum number of allowed attempts.");
    }
}

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
    },
    {
        imagen: "assets/mouse-logitech-305.jpg",
        nombre: "Mouse Logitech G305",
        precio: "21000",
        fabric: "logitech",
    },
    {
        imagen: "assets/headset-zeus.jpg",
        nombre: "Headset Redragon Zeus",
        precio: "35000",
        fabric: "redragon",
    },
    {
        imagen: "assets/headset-i-g733.jpg",
        nombre: "Headset logitech G733",
        precio: "95000",
        fabric: "logitech",
    },
    {
        imagen: "assets/headset-l-g432.jpg",
        nombre: "Headset Logitech G432",
        precio: "42999",
        fabric: "logitech",
    },
    {
        imagen: "assets/headset-g435.jpg",
        nombre: "Headset Logitech G435",
        precio: "30999",
        fabric: "logitech",
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
    }