// Commit new changes finally 

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
}

console.log(calendars);

// En este primer metodo se transforma el API de google a un objeto, al hacer esto ya podemos utilizar el metodo flatmap en el objeto.
const flatCalendars = Object.values (calendars); 
console.log(flatCalendars);
// En esta parte se utiliza el flatmap para extraer el array del objeto flatcalendars
const flatCalendarsValue = flatCalendars.flatMap (item => item.map (dates => dates.startDate)); 
console.log(flatCalendarsValue);

// Esta es simplificacion de los dos metodos de arriba donde se aplican faltmap y map al mismo tiempo creando el mismo resultado de las dos de arriba. 
const completeFlatValue = Object.values (calendars).flatMap (item => item.map (dates => dates.startDate)); 
console.log(completeFlatValue);


