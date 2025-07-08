
// Como modificar un array original agregando elementos adicionales como una modificacion del precio y una descripcion }
// El metodo usado en este cado es el metodo Objet.assign que modifica el objeto original. 


const productosNuevos = [
  { nombre: "Pizza",      precio: 250, provedor: "Genos Pizza" },
  { nombre: "Hamburguesa", precio: 400, provedor: "Corral" },
  { nombre: "Salchipapa", precio: 200, provedor: "El Perrote" },
  { nombre: "Hamburguesa", precio: 450, provedor: "McDonalds" },
];

const updatedInformation = {
  id: "Salchipapa",
  changes: {
    precio:      2000,
    descripcion: "Este es una nueva descripción de producto donde te contamos de qué se trata esta nueva variedad",
  }
};


const productoEncontrado = productosNuevos.find(producto => producto.nombre === updatedInformation.id);

if (productoEncontrado) {
  Object.assign(productoEncontrado, {
    precio:      updatedInformation.changes.precio,
    descripcion: updatedInformation.changes.descripcion
  });
}
console.log("Nuevo array:", productosNuevos);

