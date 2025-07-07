const pets = ["cat", "dog", "bat"]; 

let includeArray = false; 

for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === "dog") {includeArray = true ; 
        break; 
    }
    }
    console.log(includeArray);
// Este metodo includes no funciona con arrow function, unicamente se ingresa el parametro que quieres ingresar. 
// En este caso dog
const petIncludes = pets.includes ("dog"); 
console.log(petIncludes);


