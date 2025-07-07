const sales = [
  { name: "Ball", delivered: true, price: 100 },
  { name: "Shoes", delivered: false, price: 200 },
  { name: "Hat", delivered: true, price: 50 },
  { name: "Ball", delivered: true, price: 150 },
  { name: "Hat", delivered: false, price: 30 },
  { name: "Shoes", delivered: true, price: 200 },
];
 //Comprobacion de la cantidad de productos entregados por nombre
const deliveredProducts = sales.reduce((sum, item) => {
  if (item.delivered) {
    if (sum[item.name]) {
      sum[item.name] += item.price;
    } else {
      sum[item.name] = item.price;
    }
  }
  return sum;
}, {});

console.log('Comprobacion de productos entregados', deliveredProducts);
//Comprobacion de productos entregados 

const onlyDelivered = sales.reduce ((sum, item) => {
if (item.delivered) 
    { sum.delivered += 1;}
return sum
}, {delivered:0})

console.log('Numero de productos entregados',onlyDelivered);


// Cantidad de productos entregados 
const productNumber = sales.reduce ((sum,item)=>
{ if (item.delivered) {
    if(sum[item.name]) {
        sum[item.name] += 1; 
    } else {
        sum[item.name] = 1;}}
    return sum 
}, {})

console.log('Clasificacion por cantidad de products entregados', productNumber);

const ganaciaProducto = sales.reduce ((sum, item) =>
{ if (item.delivered) 
{ if (sum[item.name]) {
    sum[item.name] += item.price}
}
return sum 
} , {}
)

console.log(ganaciaProducto);
