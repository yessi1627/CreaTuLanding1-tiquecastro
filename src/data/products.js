export const products = [
  {
    id: "1",
    title: "Sombrero Oficial",
    price: 120000,
    category: "sombreros",
    stock: 10,
    description: "Sombrero oficial Yeison Jiménez",
    image: "/assets/sombrero.png",
    rating: 4
  },
  {
    id: "2",
    title: "Camiseta Negra",
    price: 90000,
    category: "ropa",
    stock: 15,
    description: "Camiseta oficial colección 2025",
    image: "/assets/camiseta.png",
    rating: 5
  },
  {
    id: "3",
    title: "Pulsera Exclusiva",
    price: 45000,
    category: "accesorios",
    stock: 20,
    description: "Accesorio exclusivo",
    image: "/assets/pulsera.png",
    rating: 3
  },
    {
    id: "3",
    title: "Pulsera Exclusiva",
    price: 45000,
    category: "accesorios",
    stock: 20,
    description: "Accesorio exclusivo",
    image: "/assets/pulsera.png",
    rating: 3
  },
    {
    id: "3",
    title: "Pulsera Exclusiva",
    price: 45000,
    category: "accesorios",
    stock: 20,
    description: "Accesorio exclusivo",
    image: "/assets/pulsera.png",
    rating: 3
  },
    {
    id: "3",
    title: "Pulsera Exclusiva",
    price: 45000,
    category: "accesorios",
    stock: 20,
    description: "Accesorio exclusivo",
    image: "/assets/pulsera.png",
    rating: 3
  },
    {
    id: "3",
    title: "Pulsera Exclusiva",
    price: 45000,
    category: "accesorios",
    stock: 20,
    description: "Accesorio exclusivo",
    image: "/assets/pulsera.png",
    rating: 3
  },
    {
    id: "3",
    title: "Pulsera Exclusiva",
    price: 45000,
    category: "accesorios",
    stock: 20,
    description: "Accesorio exclusivo",
    image: "/assets/pulsera.png",
    rating: 3
  },
    {
    id: "3",
    title: "Pulsera Exclusiva",
    price: 45000,
    category: "accesorios",
    stock: 20,
    description: "Accesorio exclusivo",
    image: "/assets/pulsera.png",
    rating: 3
  },
];
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === id));
    }, 1000);
  });
};
