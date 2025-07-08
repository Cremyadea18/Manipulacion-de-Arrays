// Esta es una manera de organizar un array por el valor que queramos de menor a mayor o viceversa 
// Lo unico que tienes que haces es usar el metodo sort 
// Tener dos elementos comparativos que serian  a y b 
// dentro de estos elementos agregas el elemento que quieres comparar en este caso es 
// productprice y organiza en la lista del menor al mayor. 

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

  const organizedInformation = productData.sort ((a,b) => a.productprice - b.productprice); 
  console.log(organizedInformation);
  