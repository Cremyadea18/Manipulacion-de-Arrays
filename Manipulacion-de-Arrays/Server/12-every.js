const numbers = [1,2,3,4,5,5,6,7,8,9,10,11,12]; 

let rta = undefined; 

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 30)
    {rta = element; 
        break;
    }
}
console.log(rta);

const rta2 = numbers.find (item => item === 5); 
console.log(rta2);

// Uso de el metodo find para encontrar un usuario dentro de un array 
//Planteamiento para encontar el usuario con el rol de moderador dentro de este objeto. 
const users = [
  { id: 1, name: "Juan", role: "admin" },
  { id: 2, name: "Maria", role: "user" },
  { id: 3, name: "Pedro", role: "user" },
  { id: 4, name: "Laura", role: "moderator" },
  { id: 5, name: "Luis", role: "user" }
];

const findModerador = users.find (user => user.role === "moderator"); 
console.log(findModerador);

// En este ejercicio usamos el metodo find para encontrar el primer producto que tiene una condicion falsa dentro del siguiente objeto. 

const productos = [
  { id: 101, nombre: "Laptop", disponible: true },
  { id: 102, nombre: "Mouse", disponible: false },
  { id: 103, nombre: "Teclado", disponible: false },
  { id: 104, nombre: "Monitor", disponible: true },
  { id: 105, nombre: "Impresora", disponible: true }
];

const productonotAvaliable = productos.find (item => item.disponible === false )
console.log(productonotAvaliable);


