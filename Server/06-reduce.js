const elements = [1,2,3,4,5,1,2,3,4,6,7,8]

 const elementsArray = elements.reduce ( (sum,item)=>
{ if (!sum [item]) 
{sum[item]= 1;}
 else {sum [item]= sum [item] + 1 }
 return sum
},{}
 )

 console.log(elementsArray);
 
const products = [
  { name: "ball", delivered: true , price: 100},
  { name: "Shoes2", delivered: false, price: 200},
  { name: "Hat", delivered: true, price: 100 },
];

// Comprobacion de elementos entregados, con estructura boolena para su comprobacion. Aqui se hace mas directa ya que el tru genera un contador automatico

const deliverElements = products.reduce ((sum, item) => sum + item.delivered, 0)
console.log('Estos son la cantidad total de productos entregados ',deliverElements);

// En este ejercicio se crea ima cuenta de cuantos elementos tienen la propiedad delivered sumando 1 por cada elemento entregado. 
const priceOrganization = products.reduce ( (sum, item)=>
 {if (sum[item.delivered]){
  sum [item.delivered] +=1; }
else {sum [item.delivered] = 1; }
return sum; 
}, {}); 

console.log(priceOrganization);


// Contar cuanto productos fueron entregados y cuantos no, debes entregar un array de objetos que sea delivered: x; notdelivered: y. 

const deliverProducts = products.reduce ((sum, item) =>
{ if (item.delivered)
{sum.delivered += 1;}
else {sum.notdelivered += 1;}
return sum; },
{delivered:0 , notdelivered:0 }); 

console.log(deliverProducts);

// Sumatoria de todos los precios de los productos

const sumatoriaPrice = products.reduce ((sum, item )=> sum + item.price, 0 ); 
console.log('Esta es la sumatoria del total de los productos', sumatoriaPrice);

// Devuelve un unico string con los nombres de los elementos que tiene delivered true 

const deliveredArray = products.reduce ((sum, item )=>
{ if (item.delivered) 
{sum.push (item.name)}
return sum; 
}, [])

console.log(deliveredArray);

// Usa reduce para sumar la contidad total de precios y divide por la cantidad total de productos

const summaryPrices = products.reduce ((sum, item) => { return sum + item.price;},0); 

const productFinal = summaryPrices / products.length; 

console.log(productFinal);
