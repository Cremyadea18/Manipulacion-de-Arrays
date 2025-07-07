
// El Metodo every solo funciona con valores boleanos y te arroja una respuesta true o false para todo el objeto. 
// Si le das un objeto te va  arrojar solo una respuesta para todo el objeto completo. Basicamente te retorna la 
// respuesta con base a si la condicion se cumple en todos los elementos. 


const numbers = [1,30,49,29,10,13];

let rta = true; 
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {rta =false}}

    console.log(rta);

    const rta2 = numbers.every (item => item <= 40)
    console.log(rta2);
    

