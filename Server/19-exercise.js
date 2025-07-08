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


  // Primer ejercicio de practica, crear un array donde todos los elementos que tengan deliver true hagan parte. 
  
  const deliveredProducts = productData.filter (item => {
  if (item.delivered === true) 
  return item}); 
  console.log(deliveredProducts);

  // Crear un array con los product price que se encuentran dentro de deliveredproducts 

  const onlyDelivered = deliveredProducts.map (item => item.productprice); 
  console.log(onlyDelivered);

  const sumTotal = deliveredProducts.reduce ((sum, item) => {
  return sum + item.productprice}, 0); 
  console.log("Resultado de la sumatoria de los elementos product price", sumTotal);
    
  
  

