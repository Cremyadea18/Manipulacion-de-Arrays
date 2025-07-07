// El metodo some revisa dentro de un objeto dada una condicion si es verdad o falsa, si por lo menos uno de los elementos cumple la funcion. 

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

const numbers = [1,2,3,4];

const rta = numbers.some (item=>item % 2 === 0); 
 console.log(rta);

 const datadelivered = productData.some (item => item.delivered); 
 console.log(datadelivered);
 
 