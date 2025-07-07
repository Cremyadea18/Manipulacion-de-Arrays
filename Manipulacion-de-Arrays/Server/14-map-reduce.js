

const estudiantes = [
  { nombre: "Laura", edad: 22 },
  { nombre: "Carlos", edad: 24 },
  { nombre: "Ana", edad: 21 }
];

const NombresMayuscula = estudiantes.map (item => item.nombre.toLocaleUpperCase ()); 
console.log(NombresMayuscula);

const sumaEstudiantes = estudiantes.reduce ((sum, item) => {
return sum + item.edad;}, 0); 
console.log("Suma total de todas las edades", sumaEstudiantes);
