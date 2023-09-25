
export const productos = [
  {
    id: '1',
    name: " Not Burguer XL",
    stock: 2,
    category: "comidas",
    precio: "450",
    image:
      "https://imgs.search.brave.com/NA3N071WsciD7r8adKo9da7eabUpkXMSrkhO7-3Uvr4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ndGZv/aXRzdmVnYW4uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzA3L05vdC1CdXJn/ZXItYnktTm90Q28t/c2NhbGVkLmpwZw",
  },
  {
    id: '2',
    name: "Not Chicken Mila",
    stock: 4,
    category: "comidas",
    precio: "450",
    image:
      "https://imgs.search.brave.com/exRMIOc4jV8bEqJXPccdUKOhdj_JjXaQ9XHhEXZlG-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9qdW1i/b2FyZ2VudGluYS52/dGV4YXNzZXRzLmNv/bS9hcnF1aXZvcy9p/ZHMvNzA5OTI4LTgw/MC1hdXRvP3Y9NjM3/OTI4MDQ5NjU0MTAw/MDAwJndpZHRoPTgw/MCZoZWlnaHQ9YXV0/byZhc3BlY3Q9dHJ1/ZQ",
  },
  {
    id: '3',
    name: "Not Meat Picada",
    stock: 6,
    category: "comidas",
    precio: "450",
    image: "https://cdn2.notco.com/uploads/products/NotMeat-Picada-400g.png",
  },

  {
    id: '4',
    name: "Not Milk Original",
    stock: 1,
    category: "leches",
    precio: "450",
    image: "https://cdn2.notco.com/uploads/products/1635533651995.png",
  },
  {
    id: '5',
    name: "Not Milk Baja en grasas",
    stock: 2,
    category: "leches",
    precio: "450",
    image: "https://cdn2.notco.com/uploads/products/1635534071309.png",
  },
  {
    id: '6',
    name: "Not Milk Chocolatada",
    stock: 4,
    category: "leches",
    precio: "450",
    image: "https://cdn2.notco.com/uploads/products/1635534463487.png",
  },
  {
    id: '7',
    name: "Not Milk Sin Azucares",
    stock: 6,
    category: "leches",
    precio: "450",
    image: "https://cdn2.notco.com/uploads/products/1654790586398.png",
  },

  {
    id: '8',
    name: "Not Ice Cream Chocolate",
    stock: 1,
    category: "postres",
    precio: "450",
    image:
      "https://cdn2.notco.com/uploads/products/NIC-Chocolate-330g-nueva-etiqueta.png",
  },
  {
    id: '9',
    name: "Not Ice Cream Dulce de Leche",
    stock: 2,
    category: "postres",
    precio: "450",
    image:
      "https://cdn2.notco.com/uploads/products/NIC-DDL-330g-nueva-etiqueta.png",
  },
  {
    id: '10',
    name: "Not Ice Cream Vainilla",
    stock: 4,
    category: "postres",
    precio: "450",
    image:
      "https://cdn2.notco.com/uploads/products/NIC-Banana-330g-nueva-etiqueta.png",
  },

  {
    id: '11',
    name: "GFM Bebida de Coco",
    stock: 3,
    category: "bebidas",
    precio: "450",
    image:
      "https://thefoodmarketar.vtexassets.com/arquivos/ids/155951-800-auto?v=637825347385870000&width=800&height=auto&aspect=true",
  },
  {
    id: '12',
    name: "GFM Bebida de Almendras Sabor Original",
    stock: 4,
    category: "bebidas",
    precio: "450",
    image:
      "https://thefoodmarketar.vtexassets.com/arquivos/ids/155945-800-auto?v=637825347347370000&width=800&height=auto&aspect=true",
  },
  {
    id: '13',
    name: "GFM Bebida de Almendras Sabor Vainilla",
    stock: 2,
    category: "bebidas",
    precio: "450",
    image:
      "https://imgs.search.brave.com/M1AwoHvOAsqQIC_RG3qN4wvMVNrR9URSs6vhSXX7hx8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aGVm/b29kbWFya2V0YXIu/dnRleGFzc2V0cy5j/b20vYXJxdWl2b3Mv/aWRzLzE1NTk0OS04/MDAtYXV0bz92PTYz/NzgyNTM0NzM2NzQw/MDAwMCZ3aWR0aD04/MDAmaGVpZ2h0PWF1/dG8mYXNwZWN0PXRy/dWU",
  },
];


export const getProductos = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productos);
  }, 1000);
});


export const getProductsById = (id) => {
  return new Promise((resolve) => {
    setTimeout(()=>{
    resolve(productos.find((item) => item.id === (id)))
    
    })
    
    
      })

  

  };