export const items = [
    {
      name: 'Product 1',
      image: '/img1.jpg',
       stock : [
        {
           size :  "M" ,
           color :  "black" ,
           quantityInStock : 2,
           _id : {
             $oid :  '64cd40f3b544bdc2e9388f98' 
          }
        },
        {
          size :  "M" ,
          color :  "aqua" ,
          quantityInStock : 5,
          _id : {
            $oid :  '64cd40f3b544bdc2e9388f98' 
         }
       },
        {
          size :  "L" ,
          color :  "green" ,
          quantityInStock : 5,
          _id : {
            $oid :  '64cd40f3b544bdc2e9388f98' 
         }
       },
        {
          size :  "S" ,
          color :  "pink" ,
          quantityInStock : 5,
          _id : {
            $oid :  '64cd40f3b544bdc2e9388f98' 
         }
       },
       {
        size :  "M" ,
        color :  "pink" ,
        quantityInStock : 50,
        _id : {
          $oid :  '64cd40f3b544bdc2e9388f98' 
       }
     }
      ],
      price: 29.99,
    },
    // {
    //   name: 'Product 2',
    //   image: '/img1.jpg',
    //   sizes: ['XS', 'M', 'XL'],
    //   colors: ['Black', 'White'],
    //   price: 39.99,
    // },
    // {
    //   name: 'Product 3',
    //   image: '/img1.jpg',
    //   sizes: ['S', 'L'],
    //   colors: ['Yellow', 'Purple'],
    //   price: 19.99,
    // },
    // {
    //   name: 'Product 4',
    //   image: '/img1.jpg',
    //   sizes: ['M', 'L', 'XL'],
    //   colors: ['Blue', 'Pink'],
    //   price: 49.99,
    // },
    // {
    //     name: 'Product 1',
    //     image: '/img1.jpg',
    //     sizes: ['S', 'M', 'L'],
    //     colors: ['Red', 'Blue', 'Green'],
    //     price: 29.99,
    //   },
    //   {
    //     name: 'Product 2',
    //     image: '/img1.jpg',
    //     sizes: ['XS', 'M', 'XL'],
    //     colors: ['Black', 'White'],
    //     price: 39.99,
    //   },
    //   {
    //     name: 'Product 3',
    //     image: '/img1.jpg',
    //     sizes: ['S', 'L'],
    //     colors: ['Yellow', 'Purple'],
    //     price: 19.99,
    //   },
    //   {
    //     name: 'Product 4',
    //     image: '/img1.jpg',
    //     sizes: ['M', 'L', 'XL'],
    //     colors: ['Blue', 'Pink'],
    //     price: 49.99,
    //   },
  ];

  export const cartItems = [
    {
       _id : {
         $oid :  "64cd40f3b544bdc2e9388f97" 
      },
       name :  "New Item" ,
       itemCode :  "ITEM002" ,
       category :  "Electronics" ,
       stock : [
        {
           size :  "M" ,
           color :  "Black" ,
           quantityInStock : 2,
           _id : {
             $oid :  '64cd40f3b544bdc2e9388f98' 
          }
        }
      ],
       price : 49.99,
       __v : 0
    }
  ];
  
  