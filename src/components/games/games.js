import './games.css';
export { games, showGames, showAllGames };
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
];
console.log(games);

// crear los ARTICLE de los productos
function showGames(game) {
  const gameCard = document.createElement('article');
  gameCard.className = 'games-card';
  gameCard.innerHTML = `
  <img src="${game.image}" alt="${game.name}">
  <h3>${game.name}</h3>
  <p>Precio: ${game.price} €</p>
  <p>Estrellas: ${game.stars}⭐</p>
  <p>Opiniones: ${game.reviews}</p>
  <p>Vendedor: ${game.seller}</p>
  `
  return gameCard;
};

function showAllGames() {
  const gamesContainer = document.querySelector('.products');
  gamesContainer.innerHTML = '';
  games.forEach((game) => {
    const allGames = showGames(game);
    gamesContainer.appendChild(allGames);
  });
};