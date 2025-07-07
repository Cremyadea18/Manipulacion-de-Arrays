const totals = [1,2,3,4,5]; 
// Para el metodo reduce es importante tener un elemento acumulador que empiece por 0 y tambien necesitamos despues de la operacion agregar el estado inicial de reduce que es 0. 
let sum = 0; 
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element; }

console.log(sum);

const rta = totals.reduce ((sum, element)=> sum + element , 0)
console.log(rta);

// Calcular el precio total del todos los productos

const productData = [
  { productName: "balon", productprice: 250, productsStock: 20, delivered: true },
  { productName: "basketball", productprice: 250, productsStock: 10, delivered: false },
  { productName: "tennis", productprice: 350, productsStock: 50, delivered: false },
  { productName: "baseball", productprice: 100, productsStock: 0, delivered: true },
  { productName: "Pinpong", productprice: 10, productsStock: 7, delivered: true }
];
// Sumatoria de todos los precios de los productos. 
const totalProductPrice = productData.reduce ( (sum, item) => {
return sum + item.productprice;}, 0 ); 
console.log('Costo total sumando todos los precios de los productos', totalProductPrice);

// Sumatoria de todos los productos entregados, con el uso de boleano como cuenta antumatica. 
const productDelivered = productData.reduce ((sum, item) => {
return sum + item.delivered; }, 0); 
console.log('Cantidad de productos entregados',productDelivered);

// Sumatoria de productos no entregados desde el uso del boleano en negacion. 

const notDeliveredProducts = productData.reduce ((sum, item)=>
{ return sum + !item.delivered;}, 0);
console.log('Cantidad de productos no entregados',notDeliveredProducts);

// Cantidad total de productsStock 

const productStock = productData.reduce ((sum, item)=>{
return sum + item.productsStock;}, 0)
console.log('Cantidad total de productos en Stock', productStock);

// Usa reduce para generar un nuevo array que contenga solo los nombres de los productos entregados. 

const constDelivered = productData.reduce ((Del, item)=>
{if (item.delivered) 
{ Del.push (item.productName);}
return Del; }, [])
console.log('Nombre de productos entregados',constDelivered);

// Usa reduce para agregar a un array vacio todos los productos que no han sido entregados.

const notDeliveredcount = productData.reduce ((sum, item)=>
{ if (!item.delivered) 
  {sum.push (item.productName);}
  return sum;}, [])
  console.log('Nombre de productos no entregados', notDeliveredcount);
  

// Segun product data comprobar el numero de productos entregados y no entregados. 
 const deliveryCount = productData.reduce((acc, item)=>
  {if (item.delivered){
    acc.delivered += 1; 
  }
  else {
  acc.notDelivered += 1; 
  } 
  return acc; 
  }, {delivered:0, notDelivered:0});
console.log(deliveryCount);



