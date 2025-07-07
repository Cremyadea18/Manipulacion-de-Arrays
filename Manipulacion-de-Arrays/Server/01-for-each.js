const letters = ['a', 'b', 'c']; 

for (let index=0; index < letters.length; index++)
     {const element = letters [index];
    console.log('for', element);
    }

letters.forEach (item=>console.log('forEach', item)); 

const numbers = [ 2, 4,6,8,10]; 

numbers.forEach (item => console.log(item * 2))

for (let index = 0; index< numbers.length; index++) {
const number = numbers[index]; 
console.log(number * 2);}