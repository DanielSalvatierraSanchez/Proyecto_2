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

// asignar VAR a las 2 SECTION usando el selector QUERYSELECTOR para seleccionar la CLASS= del elemento SECTION
const gamesContainer = document.querySelector('.products')
const filtersContainer = document.querySelector('.filter')

// crear los DIV de los productos, darle CLASS=GAMES-CARD y propiedades, pintarlos dentro de GAMESCONTAINER
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

// crear primer filtro FIRSTFILTER , darle CLASS=SELLER-FILTER y su H3, pintarlos dentro de FILTERSCONTAINER
const h3Seller = document.createElement('h3')
h3Seller.className = 'h3-seller'
h3Seller.innerText = 'SELECCIONA UN VENDEDOR'
filtersContainer.appendChild(h3Seller)

const firstFilter = document.createElement('select')
firstFilter.className = 'seller-filter'
filtersContainer.appendChild(firstFilter)

// 4️⃣ Añadiría una opción en el select que sea TODAS. añadir OPTION CLASS=ALL-SELLERS y pintarlos en CLASS=FIRSTFILTER
const OptionAllSellers = document.createElement('option')
OptionAllSellers.className = 'all-sellers'
OptionAllSellers.innerText = 'TODOS'
firstFilter.appendChild(OptionAllSellers)

// crear VAR, un array NOREPEATSELLERS para poner los SELLERS y que no los repita
const noRepeatSellers = []
for (const game of games) {
  if (!noRepeatSellers.includes(game.seller)) {
    noRepeatSellers.push(game.seller)
  }
}

for (const noRepeatSeller of noRepeatSellers) {
  const optionSellers = document.createElement('option')
  optionSellers.innerHTML = noRepeatSeller
  firstFilter.appendChild(optionSellers)
}

// añadir ADDEVENTLISTENER al FIRSTFILTER para que haga "change", crear VAR que SELECTSELLER que contenga los valores del FIRSTFILTER para ello:
// 1- creamos una VAR FILTERSELECTGAMES para que del array GAMES filtre con un ( () => vendedor === sea la VAR de SELECTSELLER )
// 2- gamesContainer.innerHTML = '' indicamos que vacie GAMECONTAINER al seleccionar un SELLER ademas de vaciar el INPUT de INPUTOFPRICE (precio)
// 3- FOREACH para pintar los DIV de los GAMES

firstFilter.addEventListener('change', () => {
  const selectSeller = firstFilter.value
  const filterSelectGames = games.filter((game) => game.seller === selectSeller)
  gamesContainer.innerHTML = ''
  inputOfPrice.value = ''

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

  if (selectSeller === 'TODOS') {
    // si selecciona 'TODOS' pinta todos los productos
    showAllGames()
  }
})

// crear segundo filtro SECONDFILTER , darle CLASS=PRICE-FILTER y su H3, pintarlos dentro de FILTERSCONTAINER
// H3 con CLASS=H3-PRICE , INPUT SECONDFILTER con CLASS=PRICE-FILTER y BUTTON con CLASS=BUTTON-SEARCH-PRICE
const h3Price = document.createElement('h3')
h3Price.className = 'h3-price'
h3Price.innerText = 'BUSQUEDA POR PRECIO'

const secondFilter = document.createElement('input')
secondFilter.className = 'price-filter'
secondFilter.type = 'number'
secondFilter.min = 1

const buttonSearchPrice = document.createElement('button')
buttonSearchPrice.className = 'button-search-price'
buttonSearchPrice.innerText = 'Buscar'
buttonSearchPrice.type = 'submit'

filtersContainer.appendChild(h3Price)
filtersContainer.appendChild(secondFilter)
filtersContainer.appendChild(buttonSearchPrice)

// asignar VAR al INPUT y al BUTTON usando el selector QUERYSELECTOR para seleccionar la CLASS= del elemento INPUT Y BUTTON
const inputOfPrice = document.querySelector('.price-filter')
const buttonOfSearchPrice = document.querySelector('.button-search-price')

// añadir ADDEVENTLISTENER al BUTTON para que al hacer "click"... cree una VAR que PRICEOFUSER que contenga el valor del INPUT para ello:
// 1- creamos una VAR FILTERFORPRICE para que del array GAMES filtre (() => el precio que sea < inferior al precio que se inserte en el INPUT PRICEOFUSER )
// 2- gamesContainer.innerHTML = '' indicamos que vacie GAMECONTAINER al hacer CLICK en el BUTTON ademas de vaciar el SELECT de FIRSTFILTER (vendedores)
// 3- FOREACH para pintar los DIV de los GAMES pero solo los que coincidan con el valor del INPUT introducido en INPUTOFPRICE

buttonOfSearchPrice.addEventListener('click', () => {
  const priceOfUser = inputOfPrice.value
  const filterForPrice = games.filter((game) => game.price < priceOfUser)
  gamesContainer.innerHTML = ''
  firstFilter.value = ''

  // 2️⃣ En caso de que realice la búsqueda en el input numérico por un valor muy bajo, que salga un mensaje de "No se han encontrado resultados"
  if (priceOfUser < 19.95) {
    const noResults = document.createElement('h3')
    noResults.className = 'no-results'
    noResults.innerHTML = 'No se han encontrado resultados'
    gamesContainer.appendChild(noResults)
  }

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

// crear BUTTON 'Limpiar Filtros' con CLASS=BUTTON-CLEAR y pintarlo en FILTERCONTAINER
const buttonClearFilters = document.createElement('button')
buttonClearFilters.className = 'button-clear'
buttonClearFilters.innerText = 'Limpiar Filtros'
filtersContainer.appendChild(buttonClearFilters)

/* crear ADDEVENTLISTENER del BUTTON 'Limpiar Filtros' que al hacer CLICK limpie los filtros y pinte todos los GAMES */
/* 3️⃣ Al darle a 'Limpiar Filtros' , resetea bien el listado pero que limpie el valor del input y del select. */
buttonClearFilters.addEventListener('click', () => {
  firstFilter.value = ''
  secondFilter.value = ''
  showAllGames()
})

// crear function para pintar todos los GAMES, crear bucle igual que los anteriores y pintarlos
function showAllGames() {
  gamesContainer.innerHTML = '' // evita que se repitan infinitamente todos los GAMES cada vez que pulsemos el BUTTON 'Limpiar Filtros'

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

// 1️⃣ BONUS: Realizar los dos filtros de manera conjunta. Esto se conseguiría añadiendo las dos funciones dentro de la misma. Es decir, que al filtrar por select y por input, solo salgan artículos que cumplan con los dos filtros. // NO CONSIGO HACER FUNCIONAR LOS 2 FILTROS A LA VEZ, LE DARE UNA VUELTA MAS ADELANTE

/*
filtersContainer.addEventListener('change', () => {
  const selectSeller = firstFilter.value
  const priceOfUser = inputOfPrice.value

  const twoFiltersTogether = games.filter((game) => {
    const filterOfSellersTogether = game.seller === selectSeller
    const filterOfPricesTogether = game.price < priceOfUser
    return filterOfSellersTogether && filterOfPricesTogether
  })
  gamesContainer.innerHTML = ''

  twoFiltersTogether.forEach((game) => {
    const allFiltersTogether = document.createElement('div')
    allFilters.className = 'games-card'
    allFilters.innerHTML = `
      <img src="${game.image}" alt="${game.name}">
      <h3>${game.name}</h3>
      <p>Precio: ${game.price} €</p>
      <p>Estrellas: ${game.stars}⭐</p>
      <p>Opiniones: ${game.reviews}</p>
      <p>Vendedor: ${game.seller}</p>
    `
    gamesContainer.appendChild(allFiltersTogether)
  })
})
*/