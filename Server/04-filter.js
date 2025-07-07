const words = ['spray', 'limit', 'elite', 'exuberant']; 

const newArray = [];

for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length <= 6) { newArray.push (item); 
    }
}

console.log('Nuevo Array', newArray);
console.log('Array Primario', words);

 const filterMethod = words.filter (item=> item.length <= 6)
 console.log('Metodo Filtro', filterMethod );

 // Usando el metodo filter crear una variable que tenga todas las ordenes de compra que hayan sido entregadas de este array 
 
 const productData = [ 
    {
      productName: "balon",
      productprice: 250, 
      productsStock: 20, 
      delivered: true,
    }, 
    {
      productName: "basketball",
      productprice: 250, 
      productsStock: 10, 
      delivered: false, 
    }, 

    {
     productName: "tennis",
     productprice: 350, 
     productsStock: 50, 
     delivered: false,
      },

      {
     productName: "baseball",
     productprice: 100, 
     productsStock: 0, 
     delivered: true, 
      },

      {
        productName: "Pinpong",
        productprice: 10, 
        productsStock:7 , 
        delivered: true, 
    },
  ];
// El metodo filter cuando se aplica a un booleano por default incluye los valores boleanos true y excluye los valores false, como se muesta en este caso
  const productDelivered = productData.filter (item => item.delivered )
  console.log("Objeto de productos entregados", productDelivered);
  
// Si quisieramos que este metodo hiciera lo contrario y incluyera los valores booleanos false se podria expresar de la siguiente manera

 const productNotdelivered = productData.filter (item => !item.delivered )
 console.log("Lista de productos no entregados ", productNotdelivered);

 // Recuerda que este valor ! negacion logica. 
  // Usando el mismo array filta todos los products que tengan las siguientes condiciones, No han sido entregados, tienen mas de 15 unidades en stock y cuesten mas de 200

  const problematicProducts = productData.filter  (item=>(!item.delivered) && 
  (item.productsStock > 15) && (item.productprice > 200))

  console.log("Productos que cumplen con las condiciones de precio, stock y entregado", problematicProducts);
  

  // Ejercicio usando el metodo filter, crear un filtro por medio de query, para busqueda por nombre 

  const search = (query) => {
    return productData.filter (item=> {return item.productName.includes(query)})
  }

  console.log(search ('baseball'));

  const arrayFilter = productData.filter (item => {
    if (item.delivered === false 
      && item.productprice < 300 
      && item.productsStock > 0
    )
    return item
  })
  

  