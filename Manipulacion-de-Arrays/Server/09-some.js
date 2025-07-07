
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

const newAppointment = {
    startDate: new Date (2021,1,1,19), 
    endDate: new Date (2021, 1,1,30), 
}; 

// En este ejercicio se hace la aclaracion que se instalo la libreria date-fns desde la terminal y usando areIntervalsOverlapping se usa
//la herramienta de la libreria para verificar fechas repetidas, intervalos de fechas que tengan un overlap con otras fechas. 
const { areIntervalsOverlapping } = require("date-fns");
const isOverlap = (newDate) => {
    return dates.some (date=> {
    return areIntervalsOverlapping (
        {start: date.startDate, end: date.endDate}, 
        {start: newDate.startDate, end: newDate.endDate}, 
    )
    })
}

console.log( isOverlap(newAppointment));
