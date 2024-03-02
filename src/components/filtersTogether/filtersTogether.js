import { games, showGames } from "../games/games.js";
import { noResults } from "../noResults/noResults.js";

// crear function para hacer funcionar el select y el input juntos
const gamesContainer = document.querySelector('.products');
export function filtersTogether() {
  const selectFirstFilter = document.querySelector('.select-seller');
  const inputSecondFilter = document.querySelector('.input-price');
  // crear VAR con el value del select y del input
  const selectSeller = selectFirstFilter.value;
  const priceOfUser = inputSecondFilter.value;
  // crear VAR para filtrar array => con vendedores (TODOS o los de cada game) y con precio (de cada juego o del introducido en el input) y hacer return con ambas VAR
  const filtersTogether = games.filter((game) => {
    const filterSelectGames = selectSeller === 'TODOS' || game.seller === selectSeller;
    const filterForPrice = game.price < priceOfUser;
    return filterSelectGames && filterForPrice;
  })
  gamesContainer.innerHTML = "";

  if (priceOfUser < 19.95) {
    noResults();
  };

  filtersTogether.forEach((game) => {
    const gameInfo = showGames(game);
    gamesContainer.appendChild(gameInfo);
  });
};