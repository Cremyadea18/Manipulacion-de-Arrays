const productos = [
    {nombre: "Pizza", precio: 250, provedor: "Genos Pizza" }, 
     {nombre: "Hamburgesa", precio: 400, provedor: "Corral" }, 
      {nombre: "Salchipapa", precio: 200, provedor: "El Perrote" }, 
]


const elementFind = productos.find (item => item.nombre === "Pizza"); 
console.log(elementFind);

