const products = [
  {
    name: 'Licuadora/Extractor Nutribullet Pro Original 900W',
    url: 'https://nutribulletcolombia.com/product/nutribullet-900-watts/',
    imageUrl: 'img/nutribullet.jpg',
    originalPrice: 320000,
    price: 250000,
    details: [
      'ENTREGA INMEDIATA',
      'Con todos los accesorios, en caja original',
      'Como nuevo!',
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: 'Nevera Whirlpool WRW25AKTWW 257 Litros',
    url: 'https://www.whirlpool.com.co/nevera-top-mount-9-pies-cubicos-wrw25bktww/p',
    imageUrl: 'img/nevera.jpg',
    originalPrice: 1549000,
    price: 750000,
    details: [
      'ENTREGA 12 de Septiembre',
      'Congelador no frost, modalidad ahorradora',
      'Algunos arañazos menores, 100 funcional',
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: 'Juego de Alcoba, cama doble y mesas de noche',
    url: 'img/cama-collage.jpg',
    imageUrl: 'img/cama.jpg',
    price: 1500000,
    details: [
      'ENTREGA 13 de Septiembre',
      '1 cama doble, 2 mesas de noche', '200 cm largo x 145 cm largo',
      'Se entrega con 1 plumon, 2 Duvet',
      'Como nuevo!',
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: 'Mouse negro inalambrico Logitech M317',
    url: 'img/mouse-collage.jpg',
    imageUrl: 'img/mouse.jpg',
    originalPrice: 60000,
    price: 40000,
    details: [
      'ENTREGA INMEDIATA',
      'Incluye bateria y adaptador USB',
      'Excelente estado',
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: 'Teclado Inalambrico Logitech K375s',
    url: 'img/teclado-collage.jpg',
    imageUrl: 'img/teclado.jpg',
    originalPrice: 198000,
    price: 100000,
    details: [
      'ENTREGA INMEDIATA',
      'Compatible con Bluetooth o Logitech Unifying',
      'Soporte de conexion a 3 dispositivos',
      'Excelente estado'
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: 'Horno Microondas Samsung AGE83X',
    url: 'https://www.samsung.com/co/microwave-ovens/grill/microwave-oven-grill-age83x/',
    imageUrl: 'img/microondas.jpg',
    originalPrice: 459900,
    price: 180000,
    details: [
      'ENTREGA 08 de Septiembre',
      'Como nuevo!',
    ],
    state: "sold",
    purchaser: "9"
  },
  {
    name: 'PlayStation 3 con 3 controles y 6 juegos',
    url: 'img/ps3.jpg',
    imageUrl: 'img/ps3.jpg',
    originalPrice: 1380000,
    price: 350000,
    details: [
      'ENTREGA INMEDIATA',
      '256 GB de capacidad, 6 juegos, 2 controles DualShock 3 Sixaxis',
      'Cables de A/V, cable HDMI, cable de energia, cacble carga controles',
      'Excelente estado'
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: 'Audifonos Sony H900N con cancelacion de Ruido hear on 2',
    url: 'img/audifonos-sony-collage.jpg',
    imageUrl: 'img/audifonos-sony.jpg',
    originalPrice: 530000,
    price: 320000,
    details: [
      'ENTREGA INMEDIATA',
      '3 configuraciones (Cancelacion de ruido, sonido ambiente, apagado)',
      'Se entrega en caja original con funda protectora y cable de carga microUSB',
      'Plegables',
      'Buen estado'
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: 'Mueble Comoda',
    url: 'img/comoda2.jpg',
    imageUrl: 'img/comoda.jpg',
    price: 70000,
    details: [
      'ENTREGA 11 de Septiembre',
      'Comoda cafe con 3 cajones',
      '80 cm ancho x 75 cm alto x 38 cm profundo',
      'Buen estado!',
    ],
    state: "sold",
    purchaser: "2"
  },
  {
    name: 'Bicicleta Todoterreno GW negro con gris',
    url: 'img/bicicleta-gris-collage.jpg',
    imageUrl: 'img/bicicleta-gris.jpg',
    originalPrice: 900000,
    price: 670000,
    details: [
      'ENTREGA INMEDIATA',
      'Bicicleta cambios Shimano, frenos de disco GW, amortiguador frontal',
      'RIN 29',
      'Como nueva!',
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: 'Bicicleta Todoterreno GW negro con verde',
    url: 'img/bicicleta-verde-collage.jpg',
    imageUrl: 'img/bicicleta-verde.jpg',
    originalPrice: 900000,
    price: 670000,
    details: [
      'ENTREGA INMEDIATA',
      'Bicicleta cambios Shimano, frenos de disco GW, amortiguador frontal',
      'RIN 29',
      'Como nueva!',
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: 'Combo Bicicleta Todoterreno GW negro con gris, Casco Morado y Candado',
    url: 'img/bicicleta-gris-combo.jpg',
    imageUrl: 'img/bicicleta-gris-combo-collage.jpg',
    originalPrice: 1025900,
    price: 700000,
    details: [
      'ENTREGA INMEDIATA',
      'Bicicleta cambios Shimano, frenos de disco GW, amortiguador frontal, casco, candado',
      'RIN 29',
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: 'Combo Bicicleta Todoterreno GW negro con verde, Casco Morado y Candado',
    url: 'img/bicicleta-verde-combo.jpg',
    imageUrl: 'img/bicicleta-verde-combo-collage.jpg',
    originalPrice: 1025900,
    price: 700000,
    details: [
      'ENTREGA INMEDIATA',
      'Bicicleta cambios Shimano, frenos de disco GW, amortiguador frontal, casco, candado',
      'RIN 29',
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: 'Bascula Xiaomi Mi Body Composition Scale 2',
    url: 'https://www.mi.com/mx/product/mi-body-composition-scale-2/',
    imageUrl: 'img/xiaomi-scale.png',
    originalPrice: 70000,
    price: 50000,
    details: [
      'ENTREGA INMEDIATA',
      'Bascula digital Xiaomi',
      'Se integra con application de Smartphone. Peso, agua, porcentaje grasa, masa muscular/osea',
      'Como nueva!',
    ],
    state: "reserved",
    purchaser: "1"
  },
  {
    name: 'Camara Olympus E-M10 Mark III',
    url: 'https://www.facebook.com/marketplace/item/3378056672436656/',
    imageUrl: 'img/camara-olympus.jpg',
    originalPrice: 2995000,
    price: 2800000,
    details: [
      'ENTREGA INMEDIATA',
      'Camara Mirrorless con muy poco uso, perfecto estado 10/10',
      'Se entrega: Camara E-M10 Mark III plateada, Lente M. Zuiko Digital 14-42mm 3.5 a 5.6, Correa original, Bateria, Cargador, Maletin Original Olympus, Cable de datos, Tarjeta, Tarjeta Sandisk SD 16 GB',
      'Excelente estado',
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: 'Tablero en acrilico borrable doble',
    url: 'img/tablero-acrilico.jpg',
    imageUrl: 'img/tablero-acrilico.jpg',
    originalPrice: 50000,
    price: 40000,
    details: [
      'ENTREGA INMEDIATA',
      'Tablero en acrilico borrable doble',
      '40cm ancho X 60cm alto. Altura total 120cm incluye borrador de tablero y marcador',
      'Buen estado!',
    ],
    state: "sold",
    purchaser: "11"
  },
  {
    name: 'Smart TV Samsung UN48JU6100 4K 48 pulgadas',
    url: 'https://www.linio.com.co/p/televisor-samsung-48-4k-un48ju6100-led-negro-tpq4wk',
    imageUrl: 'img/tv.jpg',
    originalPrice: 1899900,
    price: 1000000,
    details: [
      'ENTREGA 11 de Septiembre',
      'Netflix/YouTube/PrimeVideo/Spotify',
      '4K, 3 puertos HDMI, Internet Wifi, TDT, Incluye control remoto',
      'Buen estado!',
    ],
    state: "sold",
    purchaser: "3"
  },
  {
    name: 'Escritorio Blanco Marfil',
    imageUrl: 'img/escritorio-blanco.jpg',
    url: 'img/escritorio-blanco-collage.jpg',
    originalPrice: 350000,
    price: 270000,
    details: [
      'ENTREGA 08 de Septiembre',
      'Profundida 60cm ancho 110cm altura 74cm',
      'Como nuevo!',
    ],
    state: "reserved",
    purchaser: "12"
  },
  {
    name: 'Escritorio Beige',
    imageUrl: 'img/escritorio-beige.jpg',
    url: 'img/escritorio-blanco-collage.jpg',
    originalPrice: 350000,
    price: 270000,
    details: [
      'ENTREGA 08 de Septiembre',
      'Profundida 60cm ancho 110cm altura 74cm',
      'Como nuevo!',
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: 'Rascador gatos 3 niveles',
    url: 'img/rascador.jpg',
    imageUrl: 'img/rascador.jpg',
    price: 90000,
    details: [
      'ENTREGA 11 de Septiembre',
      'Rascador amarillo/negro',
      'Altura 165 cm',
      'Poco uso',
    ],
    state: "sold",
    purchaser: "6"
  },
  {
    name: 'Fuente flor de agua para gatos Catit (mas repuesto) original',
    url: 'https://usa.catit.com/shop/flower-fountain/',
    imageUrl: 'img/fuente.jpg',
    originalPrice: 119000,
    price: 40000,
    details: [
      'ENTREGA 10 de Septiembre',
      'Menos de 2 años de uso, 3 litros, 3 tipos de agua, triple filtro (pelos, calcio, olores)',
      'Raspada pero 100% funcional',
    ],
    state: "reserved",
    purchaser: "4"
  },
  {
    name: 'Lavadora Secadora Samsung WD11M44733S 11.5 Kg',
    url: 'https://www.youtube.com/watch?v=KWxgPi7W1TI',
    imageUrl: 'img/lavadora.jpg',
    originalPrice: 2050000,
    price: 1700000,
    details: [
      'ENTREGA 08 de Septiembre',
      'Lavadora secadora (electrica)',
      '60 cm ancho x 85 cm alto x 65 cm profundo',
      'Como nueva! Menos de 1 año de uso',
    ],
    state: "sold",
    purchaser: "5"
  },
  {
    name: 'Tapete Gris 175cm x 120cm',
    url: 'img/tapete.jpg',
    imageUrl: 'img/tapete.jpg',
    originalPrice: 300000,
    price: 150000,
    details: [
      'ENTREGA 08 de Septiembre',
      'Tapete gris con franjas hecho en Turquia',
      'Como nuevo!',
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: 'Sofacama verde tela antiarañazos!',
    url: 'img/sofa-collage.jpg',
    imageUrl: 'img/sofa.jpg',
    originalPrice: 1400000,
    price: 1000000,
    details: [
      'ENTREGA 08 de Septiembre',
      'Realmente funciona! Tenemos 2 gatos y esta sin 1 rasguño!',
      '3 posiciones, bastante comodo. Producto colombiano',
      'Sofa: 182 cm ancho x 95 cm alto x 94 cm profundo',
      'Cama: 182 cm ancho x 60 cm alto x 65 cm profundo',
      'Como nuevo!',
    ],
    state: "sold",
    purchaser: "6"
  },
  {
    name: 'Parlante Google Home',
    url: 'https://www.xataka.com/basics/todo-que-puedes-hacer-google-home-como-configurarlo-reyes-te-han-traido-uno',
    imageUrl: 'img/google-home.jpg',
    originalPrice: 350000,
    price: 150000,
    details: [
      'ENTREGA INMEDIATA',
      'Compatible con Google Assistant, comandos en Español e Ingles',
      'Como nuevo!',
    ],
    state: "reserved",
    purchaser: "1"
  },
  {
    name: 'Parlante Google Home Mini Gris',
    url: 'https://www.xataka.com/accesorios/google-home-mini-mas-pequeno-pero-con-las-mismas-prestaciones-que-su-hermano-mayor',
    imageUrl: 'img/google-home-mini.jpg',
    originalPrice: 214000,
    price: 70000,
    details: [
      'ENTREGA INMEDIATA',
      'Compatible con Google Assistant, comandos en Español e Ingles',
      'Como nuevo!',
    ],
    state: "reserved",
    purchaser: "1"
  },
  {
    name: 'Aspiradora Robot iRobot Roomba 675',
    url: 'https://www.irobotcolombia.com/producto/roomba-675/',
    imageUrl: 'img/roomba.jpg',
    originalPrice: 1270000,
    price: 700000,
    details: [
      'ENTREGA INMEDIATA',
      'Compatible con Google Assistant, programacion desde App. 415 limpiezas realizadas',
      'Buen estado!',
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: 'Carpa 2 persona Quechua Arpenaz 2',
    url: 'img/carpa-collage.jpg',
    imageUrl: 'img/carpa.jpg',
    originalPrice: 250000,
    price: 200000,
    details: [
      'ENTREGA INMEDIATA',
      'Impermeable, blanca, 1.3 KG, Alto: 105cm - Largo: 200cm - Ancho: 120cm',
      'Como nueva!',
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: 'Maleta Camping roja',
    url: 'img/maleta-camping-collage.jpg',
    imageUrl: 'img/maleta-camping.jpg',
    originalPrice: 70000,
    price: 30000,
    details: [
      'ENTREGA INMEDIATA',
      'Roja, capacidad 70 Litros (No incluye gatos)',
      'Como nueva!',
    ],
    state: "reserved",
    purchaser: "7"
  },
  {
    name: 'Juego 2 de Sillas Bar negras',
    url: 'img/sillas-collage.jpg',
    imageUrl: 'img/sillas.jpg',
    originalPrice: 300000,
    price: 180000,
    details: [
      'ENTREGA 08 de Septiembre',
      'Sillas graduables en altura',
      'Como nuevas!',
    ],
    state: "reserved",
    purchaser: "8"
  },
  {
    name: 'Juego de Pesas 20Kg',
    url: 'img/juego-pesas-collage.jpg',
    imageUrl: 'img/juego-pesas.png',
    originalPrice: 300000,
    price: 250000,
    details: [
      'ENTREGA INMEDIATA',
      '2 barras 2Kg, 4 discos 2Kg, 8 discos 1Kg, 4 seguros',
      'Como nuevo!',
    ],
    state: "sold",
    purchaser: "9"
  },
  {
    name: 'Parlante Inalambrico Origaudio Boxanne',
    url: 'https://origaudiopromo.com/product/boxanne-wireless-speaker-white/',
    imageUrl: 'img/parlante.jpg',
    price: 20000,
    details: [
      'ENTREGA INMEDIATA',
      'Viene con cable microusb y 3.5mm',
      'Nuevo en caja!',
    ],
    state: "reserved",
    purchaser: "8"
  },
  {
    name: 'Bateria portatil 10.000 mA para celular',
    url: 'img/bateria.jpg',
    imageUrl: 'img/bateria.jpg',
    price: 25000,
    details: [
      'ENTREGA INMEDIATA',
      'Salida USB: 5V/2.0A , Wireless 5V/1.0A. Viene con cable micro USB' ,
      'Nuevo en caja!',
    ],
    state: "sold",
    purchaser: "10"
  },
  {
    name: '5 Vasos Cristar Schubert Rocks',
    url: 'https://tienda.cristar.com.co/producto/vaso-schubert-rocks/',
    imageUrl: 'img/vasos.jpg',
    originalPrice: 20000,
    price: 15000,
    details: [
      'ENTREGA INMEDIATA',
      '5 vasos de cristal para bebidas/cocteles',
      'Perfecto estado',
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: 'Sacacorchos',
    url: 'https://www.homesentry.co/p/sacacorchos-ilko-metalico/',
    imageUrl: 'img/sacacorchos.jpg',
    originalPrice: 40000,
    price: 20000,
    details: [
      'ENTREGA INMEDIATA',
      'Sacacorchos/destapador',
      'Como nuevo',
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: 'Drone DJI Mavic Air 1',
    url: 'img/drone-collage.jpg',
    imageUrl: 'img/drone.jpg',
    originalPrice: 4200000,
    price: 1900000,
    details: [
      'ENTREGA INMEDIATA',
      'Drone con sensores frontales, posteriroes, inferiores. Rango 10Km, Altura maxima 5Km, 320 gramos. Camara con estabilizador',
      'Viene con: Control con Joysticks (cables compatibles con USB-C, microUSB, Lighting (iPhone)), ',
      '3 baterias de 20 minutos, protectores de helices, cargador hasta 4 baterias, 3 pares de repuestos de helices, ',
      'adaptador carga USB, Joysticks de repuesto, cable extensor USB, estuche original rigido, Maletin Original DJI, 6 filtros (3 ND4 ND8, ND16 Y 3 polarizados)',
      'Manuales originales',
      'Excelente estado'
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: 'Candado Bicicleta 1',
    url: 'https://www.homecenter.com.co/homecenter-co/product/461884/guaya-de-seguridad-con-sistema-de-clave/461884/',
    imageUrl: 'img/candado-bicicleta-01.jpg',
    originalPrice: 35900,
    price: 25000,
    details: [
      'ENTREGA INMEDIATA',
      'Candado/Gualla con clave de 4 digitos programable',
      'Como nuevo',
    ],
    state: "reserved",
    purchaser: "7"
  },
  {
    name: 'Candado Bicicleta 2',
    url: 'https://www.homecenter.com.co/homecenter-co/product/461884/guaya-de-seguridad-con-sistema-de-clave/461884/',
    imageUrl: 'img/candado-bicicleta-02.jpg',
    originalPrice: 35900,
    price: 25000,
    details: [
      'ENTREGA INMEDIATA',
      'Candado/Gualla con clave de 4 digitos programable',
      'Como nuevo',
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: 'Mueble de TV en L',
    imageUrl: 'img/muebleTVL.jpg',
    url: 'img/muebleTVL-collage.jpg',
    originalPrice: 400000,
    price: 200000,
    details: [
      'ENTREGA 08 de Septiembre',
      '2 secciones',
      'FALTAN MEDIDAS',
      'Buen estado!',
    ],
    state: "sold",
    purchaser: "13"
  },
  {
    name: 'Casco bicicleta Morado',
    imageUrl: 'img/casco-morado.jpg',
    url: 'https://www.fortecampione.com/producto/casco-evolution-mv29-mate/',
    originalPrice: 80000,
    price: 40000,
    details: [
      'ENTREGA INMEDIATA',
      'Casco ',
      'Buen estado! Poco uso',
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: 'Casco bicicleta Azul',
    imageUrl: 'img/casco-azul.jpg',
    url: 'https://www.fortecampione.com/producto/casco-evolution-mv29-mate/',
    originalPrice: 80000,
    price: 40000,
    details: [
      'ENTREGA INMEDIATA',
      'Casco de bicicleta',
      'Buen estado! Poco uso',
    ],
    state: "reserved",
    purchaser: "7"
  },
  {
    name: "Monitor Samsung 24' Led HDMI mas brazo para escritorio",
    imageUrl: 'img/monitor-samsung.jpg',
    url: 'img/monitor-samsung-collage.jpg',
    originalPrice: 411000,
    price: 250000,
    details: [
      'ENTREGA 08 de Septiembre',
      'Link referencia Monitor https://www.mercadolibre.com.co/monitor-gamer-samsung-s24f350fh-led-24-negro-100v240v/p/MCO14946790',
      'Link referencia Brazo https://ergonomus.co/producto/brazo-monitor-flexigas-eco/',
      'Perfecto funcionamiento!(Al momento de instalar el brazo se partio en la parte trasera, daño muy inusculo que no afecta el funcionamiento)',
    ],
    state: "reserved",
    purchaser: "7"
  },
  {
    name: 'Cuello',
    url: 'img/cuello.jpg',
    imageUrl: 'img/cuello.jpg',
    originalPrice: 33240,
    price: 20000,
    details: [
      'ENTREGA INMEDIATA',
      'Un uso',
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: 'Monitor LED LG Ultrawide 25 pulgadas 25UM58 mas brazo para escritorio',
    url: 'https://www.lg.com/mx/monitores/lg-25UM58',
    imageUrl: 'img/monitor-lg.jpg',
    originalPrice: 700000,
    price: 600000,
    details: [
      'ENTREGA 08 de Septiembre',
      'Usado por menos de 2 años, Ultrawide, resolucion 2560 x 1080, 75Hz',
      'Link referencia Brazo (Estandar VESA) https://ergonomus.co/producto/brazo-monitor-flexigas-eco/',
      'Excelente estado',
    ],
    state: "reserved",
    purchaser: "1"
  },
  {
    name: 'Pesas tobillos Muñecas 2 x 1kg Domyos',
    url: 'https://www.decathlon.es/es/p/lastres-pesas-tobillos-munecas-2-x-1kg-domyos/_/R-p-152952',
    imageUrl: 'img/pesas-tobillos.jpg',
    originalPrice: 65000,
    price: 35000,
    details: [
      'ENTREGA INMEDIATA',
      'Buen estado',
    ],
    state: "available",
    purchaser: "id"
  },
  {
    name: 'Base de madera para portatil',
    url: 'https://ergonomus.co/producto/soporte-portatil-5-alturas-madera/',
    imageUrl: 'img/base-portatil.jpg',
    originalPrice: 114000,
    price: 35000,
    details: [
      'ENTREGA INMEDIATA',
      'Marca ergonomus, 5 Alturas: 5cm, 16.5cm, 20.5cm, 23.5cm y 25.5cm',
      '37.9cm de ancho x 25.5cm de profundidad x 9.5cm de alto',
      'Excelente estado',
    ],
    state: "reservada",
    purchaser: "14"
  }
]
