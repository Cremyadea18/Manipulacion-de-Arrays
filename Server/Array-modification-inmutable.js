

const productos = [
    {nombre: "Pizza", precio: 250, provedor: "Genos Pizza" }, 
     {nombre: "Hamburgesa", precio: 400, provedor: "Corral" }, 
      {nombre: "Salchipapa", precio: 200, provedor: "El Perrote" }, 
      {nombre: "Hamburgesa", precio: 450, provedor: "McDonalds"}, 
]; 

// Ejemplo de metodo mutable con el uso de Push 
const listOfProducts = []; 
const filterProducts = productos.find (item => item.nombre === "Hamburgesa");
if (filterProducts) { listOfProducts.push (filterProducts)}; 
console.log(listOfProducts);

// New array de productos

const productosNuevos = [
    {nombre: "Pizza", precio: 250, provedor: "Genos Pizza" }, 
     {nombre: "Hamburgesa", precio: 400, provedor: "Corral" }, 
      {nombre: "Salchipapa", precio: 200, provedor: "El Perrote" }, 
      {nombre: "Hamburgesa", precio: 450, provedor: "McDonalds"}, 
]; 

// informacion que necesitamos actualizar en el array original 
const updatedInformation = {
    id: "Salchipapa", 
    changes : {
    price: 2000, 
    description: "Este es una nueva descripcion de producto donde te contamos de que se trata esta nueva vaeridad", 
    }
}

// En este ejercicio creamos un nuevo array de elementos modificando la informacion de producto 
// Relacionamos producto.nombre === updatedInformacion.id para relacionar las dos arrays diferentes 
// y si encuentran una coincidencia entonces lo que hacemos es actualizar los valores de producto
// Agregando la descripcion y el precio actualizado. 
// Esto es un metodo inmutable ya que creamos un nuevo array sin modificar el original

const productosActuales =  productosNuevos.map (producto => {
    if (producto.nombre === updatedInformation.id)
    {
    return {
    ...producto, 
    precio: updatedInformation.changes.price,
    description: updatedInformation.changes.description,
    }; 
    }
    return producto; 
}); 

console.log(productosActuales);




