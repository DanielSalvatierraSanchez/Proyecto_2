const games = [
  {
    name: 'Mario Party 8',
    price: 59.99,
    stars: 2,
    reviews: 52,
    seller: 'Fnac',
    image: 'https://m.media-amazon.com/images/I/71IggmkD7SL._AC_UF894,1000_QL80_.jpg'
  },
  {
    name: 'Mario Party 9',
    price: 79.99,
    stars: 3,
    reviews: 242,
    seller: 'Fnac',
    image: 'https://m.media-amazon.com/images/I/71PUvWxB9OL._AC_SL1212_.jpg'
  },
  {
    name: 'Mario Party 10',
    price: 19.95,
    stars: 4,
    reviews: 27,
    seller: 'Todo Consolas',
    image: 'https://m.media-amazon.com/images/I/81Vm1QV6EmL._AC_SL1500_.jpg'
  },
  {
    name: 'Ghostbusters',
    price: 23.65,
    stars: 2,
    reviews: 1,
    seller: 'Amazon',
    image: 'https://m.media-amazon.com/images/I/71XmSx08g-L._AC_SL1500_.jpg'
  },
  {
    name: 'Bluey',
    price: 39.9,
    stars: 3,
    reviews: 20,
    seller: 'Carrefour',
    image: 'https://m.media-amazon.com/images/I/81dN4ep48XL._AC_SL1500_.jpg'
  },
  {
    name: 'PokéPark',
    price: 29.5,
    stars: 4,
    reviews: 103,
    seller: 'Carrefour',
    image: 'https://m.media-amazon.com/images/I/91OUnE1omhL._AC_SL1500_.jpg'
  },
  {
    name: 'Wii Sports',
    price: 29.45,
    stars: 4,
    reviews: 125,
    seller: 'Todo Consolas',
    image: 'https://m.media-amazon.com/images/I/71OGN-xQa5L._AC_SL1139_.jpg'
  },
  {
    name: 'Wreck It Ralph',
    price: 26.9,
    stars: 2,
    reviews: 326,
    seller: 'Amazon',
    image: 'https://m.media-amazon.com/images/I/81yUzt+ArHL._SL1500_.jpg'
  },
  {
    name: 'Super Mario Bros.',
    price: 22.95,
    stars: 5,
    reviews: 971,
    seller: 'Stretta Music',
    image: 'https://m.media-amazon.com/images/I/71euX2WoQOL._AC_SL1500_.jpg'
  },
  {
    name: 'Mario Kart',
    price: 60,
    stars: 5,
    reviews: 284,
    seller: 'Back Market',
    image: 'https://m.media-amazon.com/images/I/81fDpO9MeTL._AC_SL1500_.jpg'
  }
  // puedes cambiar los campos de cada objeto si es necesario para tu diseño...
]

/* CREAR LAS 2 SECCIONES */
const gamesContainer = document.querySelector('.products')
const filtersContainer = document.querySelector('.filter')

/* CREAR LAS CARTAS DE PRODUCTOS E INSERTARLAS */
games.forEach((game) => {
  const gamesCard = document.createElement('div')
  gamesCard.className = 'games-card'
  gamesCard.innerHTML = `
  <img src="${game.image}" alt="${game.name}">
  <h3>${game.name}</h3>
  <p>Precio: ${game.price} €</p>
  <p>Estrellas: ${game.stars}⭐</p>
  <p>Opiniones: ${game.reviews}</p>
  <p>Vendedor: ${game.seller}</p>
  `
  gamesContainer.appendChild(gamesCard)
})

/* CREAR PRIMER FILTRO */
const h3Seller = document.createElement('h3')
h3Seller.className = 'h3-seller'
h3Seller.innerHTML = 'SELECCIONA UN VENDEDOR'
filtersContainer.appendChild(h3Seller)
const firstFilter = document.createElement('select')
firstFilter.className = 'seller-filter'
filtersContainer.appendChild(firstFilter)

/* 4️⃣ Añadiría una opción en el select que sea TODAS. */
const allOptions = document.createElement('option')
allOptions.className = 'games-card'
allOptions.innerHTML = 'TODOS'
firstFilter.appendChild(allOptions)

/* HACER BUCLE DE SELLERS, CREAR VAR DE LAS OPCIONES DEL FILTRO E INSERTAR LOS SELLERS SIN REPETIR  */
const noRepeatSellers = [];
for (const game of games) {
  if (!noRepeatSellers.includes(game.seller)) {
    noRepeatSellers.push(game.seller)
};
}

for (const noRepeatSeller of noRepeatSellers) {
  const optionSeller = document.createElement('option')
  optionSeller.innerHTML = noRepeatSeller
  firstFilter.appendChild(optionSeller)
}

/* AÑADIR addEventListener AL FILTRO PARA QUE CAMBIE "change",
1- VAR PARA SELECCIONAR SELLER (VALOR DEL FILTRO)
2- VAR FILTRAR SELECCION DE JUEGOS (tal vez algo complejo)
3- AL SELECCIONAR SELLER VACIA TODOS Y DESPUES...
4- FOREACH CREANDO VAR PARA QUE AÑADA UN DIV EXACTAMENTE IGUAL PERO SOLO CON EL VALOR DEL SELLER DE LA VAR ANTERIOR */

 firstFilter.addEventListener('change', function () {
  const selectSeller = firstFilter.value
  const filterSelectGames = games.filter((game) => game.seller === selectSeller)
  gamesContainer.innerHTML = ''

  if (selectSeller === 'TODOS') {
    showAllGames();
    return;
  }

  // 2️⃣ En caso de que realice la búsqueda en el input numérico por un valor muy bajo, que salga un mensaje de "No se han encontrado resultados"
  
  if (priceUser < 19.95) {
    const noResults = document.createElement('h3')
    noResults.className = 'no-results'
    noResults.innerHTML = 'No se han encontrado resultados'
    gamesContainer.appendChild(noResults)
  }

  filterSelectGames.forEach((game) => {
    const gameInfo = document.createElement('div')
    gameInfo.className = 'games-card'
    gameInfo.innerHTML = `
    <img src="${game.image}" alt="${game.name}">
    <h3>${game.name}</h3>
    <p>Precio: ${game.price} €</p>
    <p>Estrellas: ${game.stars}⭐</p>
    <p>Opiniones: ${game.reviews}</p>
    <p>Vendedor: ${game.seller}</p>
    `
    gamesContainer.appendChild(gameInfo)
  })
})

/* CREAR SEGUNDO FILTRO
- INPUT con class y type Y BUTTON con class, text y type */
const h3Price = document.createElement('h3')
h3Price.className = 'h3-price'
h3Price.innerHTML = 'BUSQUEDA POR PRECIO'
filtersContainer.appendChild(h3Price)

const secondFilter = document.createElement('input')
secondFilter.className = 'price-filter'
secondFilter.type = 'number'
secondFilter.min = 1

const buttonSearch = document.createElement('button')
buttonSearch.className = 'button-search'
buttonSearch.textContent = 'Buscar'
buttonSearch.type = 'submit'

/* INSERTAMOS INPUT Y BUTTON */
filtersContainer.appendChild(secondFilter)
filtersContainer.appendChild(buttonSearch)

/* SELECCIONAMOS CLASS PARA LUEGO ASIGNARLES VAR */
const inputOfPrice = document.querySelector('.price-filter')
const buttonOfSearch = document.querySelector('.button-search')

/* AÑADIR addEventListener AL BUTTON PARA QUE AL HACER "click":
1- VAR PARA SELECCIONAR PRECIO DEL USER (VALOR DEL INPUT)
2- VAR FILTRAR POR PRECIO CON < PARA SER INFERIOR AL VALOR DEL PRICE
3- AL SELECCIONAR SELLER VACIA TODOS Y DESPUES...
4- FOREACH CREANDO VAR PARA QUE AÑADA UN DIV EXACTAMENTE IGUAL PERO SOLO CON EL VALOR DEL PRICE DE LA VAR ANTERIOR */

 buttonSearch.addEventListener('click', function () {
  const priceUser = inputOfPrice.value
  const filterForPrice = games.filter((game) => game.price < priceUser)
  gamesContainer.innerHTML = ''

  filterForPrice.forEach((game) => {
    const priceInfo = document.createElement('div')
    priceInfo.className = 'games-card'
    priceInfo.innerHTML = `
    <img src="${game.image}" alt="${game.name}">
    <h3>${game.name}</h3>
    <p>Precio: ${game.price} €</p>
    <p>Estrellas: ${game.stars}⭐</p>
    <p>Opiniones: ${game.reviews}</p>
    <p>Vendedor: ${game.seller}</p>
    `
    gamesContainer.appendChild(priceInfo)
  })
})  

/* CREAR BUTTON LIMPIAR FILTROS CON class, text y type Y PINTARLO */
const buttonClean = document.createElement('button')
buttonClean.className = 'button-clean'
buttonClean.textContent = 'Limpiar Filtros'
filtersContainer.appendChild(buttonClean)

/* CREAR EVENTO AL HACER CLICK, NUEVOS FILTROS */
/* 3️⃣ Al darle a limpiar filtros, resetea bien el listado pero que limpie el valor del input y del select. */
buttonClean.addEventListener('click', () => {
  firstFilter.value = ''
  secondFilter.value = ''
  showAllGames()
})

/* CREAR FUNCION PARA MOSTRAR ELEMENTOS, CREAR BUCLE COMO ANTERIORES Y PINTAR VAR */
function showAllGames() {
  gamesContainer.innerHTML = ''

  games.forEach((game) => {
    const allGames = document.createElement('div')
    allGames.className = 'games-card'
    allGames.innerHTML = `
      <img src="${game.image}" alt="${game.name}">
      <h3>${game.name}</h3>
      <p>Precio: ${game.price} €</p>
      <p>Estrellas: ${game.stars}⭐</p>
      <p>Opiniones: ${game.reviews}</p>
      <p>Vendedor: ${game.seller}</p>
    `
    gamesContainer.appendChild(allGames)
  })
}
showAllGames()

// 1️⃣ BONUS: Realizar los dos filtros de manera conjunta. Esto se conseguiría añadiendo las dos funciones dentro de la misma. Es decir, que al filtrar por select y por input, solo salgan artículos que cumplan con los dos filtros. DEJO COMENTADOS // LAS function DE AMBOS FILTROS PARA EVITAR PROBLEMAS.
filtersContainer.addEventListener('change', function () {
  const selectSeller = firstFilter.value
  const priceUser = inputOfPrice.value

  const twoFilters = games.filter((game) => {
    const sellers = game.seller === selectSeller
    const prices = game.price <= priceUser
    return sellers && prices
  })
  gamesContainer.innerHTML = ''

  // AL SELECCIONAR 'TODOS' MUESTRA TODOS LOS VENDEDORES
  if (selectSeller === 'TODOS') {
    showAllGames();
    return;
  }

  // 2️⃣ En caso de que realice la búsqueda en el input numérico por un valor muy bajo, que salga un mensaje de "No se han encontrado resultados"
  
  if (priceUser < 19.95) {
    const noResults = document.createElement('h3')
    noResults.className = 'no-results'
    noResults.innerHTML = 'No se han encontrado resultados'
    gamesContainer.appendChild(noResults)
  }
 
  twoFilters.forEach((game) => {
    const allFilters = document.createElement('div')
    allFilters.className = 'games-card'
    allFilters.innerHTML = `
      <img src="${game.image}" alt="${game.name}">
      <h3>${game.name}</h3>
      <p>Precio: ${game.price} €</p>
      <p>Estrellas: ${game.stars}⭐</p>
      <p>Opiniones: ${game.reviews}</p>
      <p>Vendedor: ${game.seller}</p>
    `
    gamesContainer.appendChild(allFilters)
  })
})
