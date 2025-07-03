// Aqui vas a poder ver como puedes unir a dos arrays diferentes sin modificar la orginal pero si creando otra nueva 
// Y tambie  vas a ver como  puedes modificar el array original
// Metodos Concat, Split operator, push

const Numbers = [ 12,22,36,48,59,70]; 
const Numberslist = [23,34,56,76,70];
//Con el metodo concat estas concadenando las primeras dos strings creando otra string nueva. 
const NewList = Numbers.concat(Numberslist); 

console.log("Primera Lista de Numeros",Numbers);
console.log( "Segunda Lista de Numeros", Numberslist);
console.log("Union de las dos listas pasadas de numeros",NewList);

// Split operator tambien te serve para concadenar dos strings creando una nueva. 
const copyNewlist = [...Numbers, ...Numberslist, ]; 
console.log("Copia usando el metodo split operator", copyNewlist);

// En estos dos metodos pasados el array inicial nunca se modifico, sin embargo si quisieras modificar el array inicial 
// puedes utilizar un metodo como este PUSH
// Recuerda que con el metodo push modificas agregando al array inicial. 

Numbers.push(20,30,40,50); 
console.log("Esta es la nueva modificacion de Numbers", Numbers);




