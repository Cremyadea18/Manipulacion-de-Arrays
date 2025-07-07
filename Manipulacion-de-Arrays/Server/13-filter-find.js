// Combinacion de metodos filter y find. Con filter se crea un objeto que cumpla con la condicion y luego con find buscamos la condicion que se encuentre dentro del objeto nuevo. 

const productos = [
  { id: 1, nombre: "Camisa", categoria: "ropa", stock: 5 },
  { id: 2, nombre: "Zapatos", categoria: "calzado", stock: 0 },
  { id: 3, nombre: "Pantalón", categoria: "ropa", stock: 3 },
  { id: 4, nombre: "Sandalias", categoria: "calzado", stock: 7 },
  { id: 5, nombre: "Gorra", categoria: "accesorios", stock: 0 },
  { id: 6, nombre: "Chaqueta", categoria: "ropa", stock: 0 }
];
// Objeto con productos que tengan la categoria ropa
  const ropaCategory = productos.filter (item =>item.categoria === "ropa")
  console.log(ropaCategory);

// Buscar todos los productos que tengan un stock igual a 0 dentro del nuevo array
  const stockProduct = ropaCategory.find (item => item.stock === 0 );  
  console.log(stockProduct);

// En este ejercicio usamos el metodo filter para crear un nuevo objeto con todos los usuarios que tengan un activo true. 
  const usuarios = [
  { id: 1, nombre: "Laura", activo: true, rol: "admin" },
  { id: 2, nombre: "Carlos", activo: false, rol: "editor" },
  { id: 3, nombre: "Ana", activo: true, rol: "editor" },
  { id: 4, nombre: "David", activo: true, rol: "admin" },
  { id: 5, nombre: "Lucía", activo: false, rol: "usuario" },
  { id: 6, nombre: "Andrés", activo: true, rol: "usuario" }
];

// Se crea un objeto con todos los usuarios que tengan activo true. 
const newUsers = usuarios.filter (item => item.activo === true); 
console.log(  "Usuarios que se encuentran activos" , newUsers);

// Se busca dentro del obejo creado el usuario que tiene el rol del admin. 
const findnewUsers = newUsers.find (item => item.rol === "admin"); 
console.log("usuarios con rol admin", findnewUsers);
