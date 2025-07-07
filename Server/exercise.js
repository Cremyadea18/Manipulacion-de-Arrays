
const productData = [ 
    {
      productName: "balon",
      productprice: 250, 
      productsStock: 20, 
    }, 
    {
      productName: "basketball",
      productprice: 250, 
      productsStock: 10, 
    }, 

    {
     productName: "tennis",
     productprice: 350, 
     productsStock: 50, 
      },

      {
     productName: "baseball",
     productprice: 100, 
     productsStock: 0, 
      },

      {
        productName: "Pinpong",
        productprice: 10, 
        productsStock:7 , 
    },
  ];
  
  const newProductData = productData.map(item => ({
    ...item,
    taxitem: item.productprice * 0.19
  })); 
  
  console.log(newProductData);

//Tienes un arreglo de productos. Si un producto tiene menos de 15 unidades en stock, 
// se le aplica un descuento del 10% en el precio. Agrega una nueva propiedad llamada finalPrice que refleje
//  ese nuevo precio con o sin descuento, según el caso.//

const finalPrice = productData.map (item=> ({...item,
productDiscount: item.productsStock < 15
? item.productprice * 0.9 
: item.productprice      
 }))

 console.log(finalPrice);
  // Como hacer un objeto de prodcutDiscount //

  //Tienes un arreglo de productos con su nombre, precio y cantidad en stock. 
  // Necesitas crear un nuevo arreglo en el que cada producto tenga una nueva propiedad llamada status, que sea: 
  // Disponible" si el stock es mayor a 0. "Agotado" si el stock es 0.

  const stockProductData = productData.map (item=> ({...item, 
  productStatus: item.productsStock < 1
  ? 'Agotado'
  : 'Disponible'
  }))

  console.log(stockProductData);
  
// Crea una propiedad nueva llamada productLabel que describa el estado del producto combinando precio y stock, siguiendo esta lógica:
//Si el stock es 0 → "Agotado"
//Si el precio es mayor de 300 y el stock es menor a 10 → "Exclusivo y limitado"
//Si el precio está entre 100 y 300 → "Estándar"
//Si el precio es menor a 100 → "Económico"

const productLabel = productData.map(item => {
    if (item.productsStock < 1) {
      return 'Agotado';
    } else if (item.productsStock < 10 && item.productprice > 300) {
      return 'Exclusivo y limitado';
    } else if (item.productprice >= 100 && item.productprice <= 300) {
      return 'Estandar';
    } else if (item.productprice < 100) {
      return 'Economico';
    } else {
      return 'Sin categoría'; // Por si ningún caso aplica (buena práctica)
    }
  });
  

console.log(productLabel);

const productLabelBy = productData.map(item => {
    let label;
  
    if (item.productsStock < 1) {
      label = 'Agotado';
    } else if (item.productsStock < 10 && item.productprice > 300) {
      label = 'Exclusivo y limitado';
    } else if (item.productprice >= 100 && item.productprice <= 300) {
      label = 'Estandar';
    } else if (item.productprice < 100) {
      label = 'Economico';
    } else {
      label = 'Sin Categoria';
    }
  
    return {...item, label: label};
  });
  


console.log(productLabelBy);

