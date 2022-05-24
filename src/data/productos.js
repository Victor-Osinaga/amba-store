const productos = 
[
  {
    id: 1,
    titulo: "Labial Liquido Maybelline",
    img: "https://farmacityar.vteximg.com.br/arquivos/ids/212117-600-600/222118_labial-liquido-maybelline-superstay-matte-ink-x-5-ml_imagen-1.jpg?v=637612685392970000",
    precio: 1500,
    categoria: "Labiales",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 35
  },
  {
    id: 2,
    titulo: "Sombras Marca",
    img: "https://e7.pngegg.com/pngimages/407/655/png-clipart-eye-shadow-cosmetics-make-up-eyelash-extensions-makeup-palette-cosmetics-color.png",
    precio: 600,
    categoria: "Rostro",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 15
  },
  {
    id: 3,
    titulo: "Sombras Marca",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9TUTuzPBuhlZEkVEBt0s7n8WPxSMC92OYGkh9tCLYMizCw24v-Aedr-SX8mGinBO1K6o&usqp=CAU",
    precio: 300,
    categoria: "Rostro",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 60
  },
  {
    id: 4,
    titulo: "Delineador Marca",
    img: "https://www.maybelline.pe/~/media/mny/latam/peru/consejos-de-maquillaje/artp1d.jpg?la=es-pe&h=350&w=350&hash=4C065AD7E0034E5622B9D6F19865B64FEA816F9C",
    precio: 1420,
    categoria: "Ojos",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 55
  },
  {
    id: 5,
    titulo: "Esmalte Marca",
    img: "https://www.crystalnailstienda.es/img/cms/CoolTopGel_15ml.png",
    precio: 1250,
    categoria: "Unias",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 45
  },
  {
    id: 6,
    titulo: "Mascara Marca",
    img: "https://imagenes.elpais.com/resizer/kJafqd5ZfyF6HiMioorSgMLT9yQ=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/4CGILPGLIA2FPNNDALPLTKAA3E.jpg",
    precio: 500,
    categoria: "Ojos",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 50
  },
  {
    id: 7,
    titulo: "Sombras Marca",
    img: "https://i.pinimg.com/564x/12/d4/03/12d403cf4e430b0274751c216863fa75.jpg",
    precio: 850,
    categoria: "Rostro",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 30
  },
  {
    id: 8,
    titulo: "Esmalte Vogue",
    img: "https://www.cosmeticosvogue.com.ar/-/media/Feature/Products/UNAS/DETALLE/Esmalte-De-Uas-Fantastic/Agraz/Esmalte-de-Uas-FantasticAgraz7702433298568600x600Cerrado.jpg",
    precio: 2000,
    categoria: "Unias",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 20
  },
  {
    id: 9,
    titulo: "Delineador Marca",
    img: "https://smoda.elpais.com/wp-content/uploads/2019/03/RollerLiner_black_open_no_reflection_cmyk.jpg",
    precio: 1250,
    categoria: "Ojos",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 15
  },
  {
    id: 10,
    titulo: "Labial Marca",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Lapiz_labial.jpg/200px-Lapiz_labial.jpg",
    precio: 1000,
    categoria: "Labiales",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 15
  },
  {
    id: 11,
    titulo: "Esmalte Marca",
    img: "https://lasmargaritas.vteximg.com.br/arquivos/ids/1405020-1000-1000/Esmalte-Color-Gel-UV-LED-Semipermanente-Meline.jpg?v=637871091248570000",
    precio: 700,
    categoria: "Unias",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 20
  },
  {
    id: 12,
    titulo: "Limpiador de Brochas Marca",
    img: "https://imagenes.elpais.com/resizer/FPv8-0cY4pDaC1z_zSIOWqxCcI4=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/BPAF6ACZG3XD6IBDUGCHTSZJK4.jpg",
    precio: 800,
    categoria: "Ojos",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 20
  },
  {
    id: 13,
    titulo: "Sombras Marca",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkF_CKj_B104JTm-428NOmfLSFL5cOv0y6oI8vpXwkAgsOKLseY76n8d7CDezrFSjwXfM&usqp=CAU",
    precio: 450,
    categoria: "Rostro",
    descripcion: "El Agua Micelar Bifásica remueve el maquillaje a prueba de agua con un algodón. Limpia, desmaquilla y nutre la piel. Con aceite de Argán que nutre y reconforta la piel.",
    stock: 41
  },
  {
    id: 14,
    titulo: "Labial Marca",
    img: "https://static.mujerhoy.com/www/multimedia/202112/13/media/cortadas/Labiales-Navidad-Urban-Decay-kqrH--900x900@MujerHoy.jpeg",
    precio: 350,
    categoria: "Labiales",
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