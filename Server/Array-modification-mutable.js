const productosNuevos = [
    {nombre: "Pizza", precio: 250, provedor: "Genos Pizza" }, 
     {nombre: "Hamburgesa", precio: 400, provedor: "Corral" }, 
      {nombre: "Salchipapa", precio: 200, provedor: "El Perrote" }, 
      {nombre: "Hamburgesa", precio: 450, provedor: "McDonalds"}, 
]; 


const updatedInformation = {
    id: "Salchipapa", 
    changes : {
    price: 2000, 
    description: "Este es una nueva descripcion de producto donde te contamos de que se trata esta nueva vaeridad", 
    }
}