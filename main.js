// parte principal donde se pide que quiere hacer el usuario, todo con numeros y se repite hasta que el usuario ingrese 0
let menuE = false;
    do {
        let prodI = parseInt(prompt(`Enter the action using a number 
    0 - Exit the menu 
    1 - I have a discount coupon `));

        if (prodI === 0 || prodI === 1) {
            switch (prodI) {
                case 1:
                    codeOff();
                    break;
                case 0:
                    alert(`Have a good day, thank you.`);
                    menuE = true;
                    break;
            }
        } else {
            alert(`Invalid input. Please enter a valid number.`);
        }
    }
    while (!menuE);

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
        </div>0
    `;
    category.appendChild(a);
});
}
// EJECUTAR FUNCION 
funCategory ();

const productos = [
    {
        imagen: "assets/headset.svg",
        nombre: "Headset",
        id: headset
    },
]