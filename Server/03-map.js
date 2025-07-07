const orders = [
{
customerName: 'Nicolas', 
total: 60,
delivered: true,
},

{
customerName: 'Zulema', 
total: 120,
delivered: false, 
}, 

{
customerName: 'Santiago', 
total: 180, 
delivered: true, 
}, 
]
console.log('original', orders);

const totalCombination2 = orders.map (item => {
item.taxes = .19; 
return item; 
})

console.log('resul taxes compilation', totalCombination2 );



