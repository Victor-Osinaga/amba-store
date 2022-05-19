const productos = 
[
  {
    id: 1,
    titulo: "Producto de Ojos",
    img: "http://www.instyle.es/medio/2018/04/10/3_0a1dd183.jpg",
    precio: 850,
    categoria: "Ojos",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 30
  },
  {
    id: 2,
    titulo: "Producto de Ojos",
    img: "http://www.instyle.es/medio/2018/04/10/3_0a1dd183.jpg",
    precio: 600,
    categoria: "Ojos",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 15
  },
  {
    id: 3,
    titulo: "Producto de Uñas",
    img: "http://www.instyle.es/medio/2018/04/10/3_0a1dd183.jpg",
    precio: 300,
    categoria: "Unias",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 60
  },
  {
    id: 4,
    titulo: "Producto de Uñas",
    img: "http://www.instyle.es/medio/2018/04/10/3_0a1dd183.jpg",
    precio: 1420,
    categoria: "Unias",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 55
  },
  {
    id: 5,
    titulo: "Producto de Rostro",
    img: "http://www.instyle.es/medio/2018/04/10/3_0a1dd183.jpg",
    precio: 1250,
    categoria: "Rostro",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 45
  },
  {
    id: 6,
    titulo: "Producto de Rostro",
    img: "http://www.instyle.es/medio/2018/04/10/3_0a1dd183.jpg",
    precio: 500,
    categoria: "Rostro",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 50
  },
  {
    id: 7,
    titulo: "Producto de Labiales",
    img: "http://www.instyle.es/medio/2018/04/10/3_0a1dd183.jpg",
    precio: 1500,
    categoria: "Labiales",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 35
  },
  {
    id: 8,
    titulo: "Producto de Labiales",
    img: "http://www.instyle.es/medio/2018/04/10/3_0a1dd183.jpg",
    precio: 2000,
    categoria: "Labiales",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 20
  },
  {
    id: 9,
    titulo: "Producto de Rostro",
    img: "http://www.instyle.es/medio/2018/04/10/3_0a1dd183.jpg",
    precio: 1250,
    categoria: "Rostro",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 15
  },
  {
    id: 10,
    titulo: "Producto de Ojos",
    img: "http://www.instyle.es/medio/2018/04/10/3_0a1dd183.jpg",
    precio: 1000,
    categoria: "Ojos",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 15
  },
  {
    id: 11,
    titulo: "Producto de Labiales",
    img: "http://www.instyle.es/medio/2018/04/10/3_0a1dd183.jpg",
    precio: 700,
    categoria: "Labiales",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 20
  },
  {
    id: 12,
    titulo: "Producto de Uñas",
    img: "http://www.instyle.es/medio/2018/04/10/3_0a1dd183.jpg",
    precio: 800,
    categoria: "Unias",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 20
  },
  {
    id: 13,
    titulo: "Producto de Labiales",
    img: "http://www.instyle.es/medio/2018/04/10/3_0a1dd183.jpg",
    precio: 450,
    categoria: "Labiales",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 41
  },
  {
    id: 14,
    titulo: "Producto de Rostro",
    img: "http://www.instyle.es/medio/2018/04/10/3_0a1dd183.jpg",
    precio: 350,
    categoria: "Rostro",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 85
  },
  {
    id: 15,
    titulo: "Producto de Rostro",
    img: "http://www.instyle.es/medio/2018/04/10/3_0a1dd183.jpg",
    precio: 250,
    categoria: "Rostro",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 50
  },
]

export default productos;