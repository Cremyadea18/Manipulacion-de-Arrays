// Flat es un metodo que te permite aplanar todos los elementos dentro de un array por ejemplo: 

const NumerosBinarios = [
    [1,2,3,4,5],
    [20,30,40,50,60],
    [12,22,44,55],
]; 

// En este caso tienes un array de arrays si quieres hacer que todas las arrays esten dentro de una sola estructura en vez de en este caso 3 
// Se utiliza este metodo

const rta = NumerosBinarios.flat(); 
console.log(rta);


// Flatmap

// Flatmap es la union del metodo Map y del metodo flat. 
// Map te devuelve la informacion dentro de un objeto: 


const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const Citas = dates.map (item => item.startDate);
console.log("Fechas de Inicio de las citas", Citas);

//Ejemplo 2 

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

const NewCalendars = Object.values(calendars).flatMap (item => item.map (date => date.startDate )); 
console.log(NewCalendars);

// Ejercicio de Map 

const users = [
{userId:1, username: "Tom", attributes : ["Nice", "Cute"]}, 
{userId:2, username: "Mike", attributes: ["Lovely"]}, 
{userId: 3, username: "Nico", attributes: ["Nice", "Cool"]}, 
]; 

// En este primer ejercicio se utiliza el metodo map para extraer la informacion del array que se encuentra dentro de users.attributes
// Creando un array con todos los elementos de users.attributes dentro de 3 arrays separados. 
const arrayInformacion = users.map (users => users.attributes); 
console.log(arrayInformacion);

// Utilizando el motodo de flat hacemos que los distintos arrays que se encuentran dentro de arrayinformacion por el metodo map
// Queden todos en el mismo array juntos.
const arrayCompleteInformation = arrayInformacion.flat(); 
console.log(arrayCompleteInformation);

// Usando el metodo flatmap unes los dos metodos, consiguiendo asi que que al extrer los diferentes arrays de user.attributes, te van a quedar 
// todos dentro de un mismo array 
const unifyArray = users.flatMap (users => users.attributes); 
console.log(unifyArray);

// Finalizacion del segundo ejercicio. 