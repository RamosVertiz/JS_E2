// Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior. 

// 👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 

// 👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
// 👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

// 🚨 Si no coincide con ningún id, renderizar un mensaje de error. 


// declaro variables
const input = document.getElementById("input");
const h2 = document.getElementById("nombrePizza");
const h4 = document.getElementById("precioPizza");
const btn = document.getElementById("boton");

class pizza {
    constructor(id, nombre, ingredientes, precio){
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
        
    }
}
const pizzas = [
    {
    id: 1,
    nombre: 'Muzzarella',
    ingredientes: ['muzzarella', 'salsa de tomate', 'oregano'] , 
    precio:  '$ 800',
    },
    {
    id: 2,
    nombre: 'Fugazzeta',
    ingredientes: ['muzzarella', 'cebolla', 'oregano'] , 
    precio: '$ 900',
    },
    {
    id: 3,
    nombre: 'Jamon y morron',
    ingredientes:  ['muzzarella', 'jamon', 'morron', 'oregano'] ,  
    precio: '$ 1000',
    },
    {
    id: 4,
    nombre: 'Rucula',
    ingredientes:  ['muzzarella', 'rucula', 'parmesano'] ,  
    precio: '$ 1000',
    },
    {
    id: 5,
    nombre: 'Napo',
    ingredientes: ['muzzarella', 'tomate natural', 'ajo','parmesano'] ,  
    precio: '$ 1000',
    }, 
    {
    id: 6,
    nombre: 'Canchera',
    ingredientes: ['salsa de tomate', 'ajo'],
    precio: '$ 550',
    }   
]

boton.addEventListener('click', button)

function seleccion(eleccion) {
    const pizzaElegida = pizzas.filter((pizza) => pizza.id == eleccion)
    for (pizza of pizzaElegida) {
        h2.innerHTML = `${pizza.nombre}`;
        h4.innerHTML = `${pizza.precio}`;
    }
}

function MensajeError() {

    nombrePizza.innerHTML = 'Tenes que elegir un nro entre 1 y 6';
    precioPizza.innerHTML = '';

}




function button(e) {
    e.preventDefault();
    const eleccion = input.value;
    if (eleccion <= pizzas.length && eleccion > 0) {
        seleccion(eleccion)
    }
    else {
        MensajeError()
    }
    
    input.value = ""
}