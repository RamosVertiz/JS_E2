// ¡Volvemos a trabajar con nuestro array de Pizzas🍕 !:

// Deberán realizar el siguiente desafio: 

// 👉 A cada Pizza, agregarle una imagen. 
// 👉 Crear un archivo HTML que contenga un card en donde se renderice el nombre, imagen, ingredientes y precio de una pizza (Estilizarlo con CSS 🎨). 
// 👉 Debajo del card tiene que haber un input y un botón. 

// Deberemos colocar un numero en el input y, al apretar el botón, deberá renderizar en el card la pizza cuyo id coincida con el numero ingresado en el input.

// 🚨 Si no coincide con ningún id, renderizar un mensaje de error.

// ¿Cuál es el desafío final?
// Deberán guardar en localStorage la última pizza buscada y renderizada, y al recargar la página será esa pizza la que se deberá mostrar en la página.


// 🆙 Entregar el link de Github , en el cual debe estar linkeado el deploy del Vercel de su aplicación (mediante Github nosotros deberíamos poder ver el Vercel vinculado a su repositorio). 

// declaro variables
const input = document.getElementById("input");
const h2 = document.getElementById("nombrePizza");
const h4 = document.getElementById("precioPizza");
const btn = document.getElementById("boton");
const p = document.getElementById("ingredientesPizza");
const foto = document.getElementById("fotoPizza");



class pizza {
    constructor(id, nombre, ingredientes, precio, foto){
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
        this.foto = foto;
    }
}
const pizzas = [
    {
    id: 1,
    nombre: 'Muzzarella',
    ingredientes: ['muzzarella', ' salsa de tomate', ' oregano.'] , 
    precio:  '$ 800',
    foto: 'fotomuzza'
    },
    {
    id: 2,
    nombre: 'Fugazzeta',
    ingredientes: ['muzzarella', ' cebolla', ' oregano.'] , 
    precio: '$ 900',
    foto: 'fotofuga'
    },
    {
    id: 3,
    nombre: 'Jamon y morrones',
    ingredientes:  ['muzzarella', ' jamon', ' morron', ' oregano.'] ,  
    precio: '$ 1000',
    foto: 'fotojym'
    },
    {
    id: 4,
    nombre: 'Rúcula',
    ingredientes:  ['muzzarella', ' rucula', ' tomates secos.'] ,  
    precio: '$ 1000',
    foto: 'fotorucula'
    },
    {
    id: 5,
    nombre: 'Napolitana',
    ingredientes: ['muzzarella', ' tomate natural', ' ajo',' parmesano.'] ,  
    precio: '$ 1000',
    foto: 'fotonapo'
    }, 
    {
    id: 6,
    nombre: 'Canchera',
    ingredientes: ['salsa de tomate', ' ajo.'],
    precio: '$ 550',
    foto: 'fotocanchera'
    }   
]

// const saveLocalStorage = (pizzas) => {
//     localStorage.setItem('menu', JSON.stringify(pizzas))
// };
// saveLocalStorage(pizzas)

// let menuPizzas = JSON.parse(localStorage.getItem('menu'));


boton.addEventListener('click', button)

function seleccion(eleccion) {
    const pizzaElegida = pizzas.filter((pizza) => pizza.id == eleccion)

    for (pizza of pizzaElegida) {
        nombrePizza.innerHTML = `${pizza.nombre}`;
        precioPizza.innerHTML = `${pizza.precio}`;
        ingredientesPizza.innerHTML = `Ingredientes: ${pizza.ingredientes}`;
        fotoPizza.innerHTML = `<img src=${pizza.foto}.jpg>`;
    }
}

function mensajeError() {

    nombrePizza.innerHTML = 'El id ' + input.value + ' es invalido. Tenes que elegir un numero entre 1 y 6';
    precioPizza.innerHTML = '';
    ingredientesPizza.innerHTML = '';
    fotoPizza.innerHTML = '';
    
}

function mensajeErrorVacio() {
    nombrePizza.innerHTML = 'Tenes que ingresar un numero';
    precioPizza.innerHTML = '';
    ingredientesPizza.innerHTML = '';
    fotoPizza.innerHTML = '';
    
}


function button(e) {
    e.preventDefault();
    const eleccion = input.value;
    if (eleccion <= pizzas.length && eleccion > 0) {
        seleccion(eleccion)
        document.getElementById("cardPizza").className = "card"
        document.getElementById("nombrePizza").className = "negro"
        
    }
    else if (eleccion == ''){
        mensajeErrorVacio()
        document.getElementById("cardPizza").className = "card"
        document.getElementById("nombrePizza").className = "rojo"
    }
    else {
        mensajeError()
        document.getElementById("cardPizza").className = "card"
        document.getElementById("nombrePizza").className = "rojo"
    }
    
    input.value = "";
    
    
}