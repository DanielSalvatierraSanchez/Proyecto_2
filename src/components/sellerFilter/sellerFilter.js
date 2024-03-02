import './sellerFilter.css';
import { games } from "../games/games.js";
import { filtersTogether } from '../filtersTogether/filtersTogether.js';
export { createFirstFilter, noRepeatSellers};

// crear primer filtro
function createFirstFilter() {
  const filtersContainer = document.querySelector('.filter');
  // crear title
  const titleFirstFilter = document.createElement('h3');
  titleFirstFilter.className = 'title-seller';
  titleFirstFilter.textContent = 'SELECCIONA UN VENDEDOR';
  filtersContainer.appendChild(titleFirstFilter);
  // crear select
  const selectFirstFilter = document.createElement('select');
  selectFirstFilter.className = 'select-seller';
  filtersContainer.appendChild(selectFirstFilter);
  // crear option en el select que sea TODAS
  const optionAllSellers = document.createElement('option');
  optionAllSellers.className = 'all-sellers';
  optionAllSellers.textContent = 'TODOS';
  selectFirstFilter.appendChild(optionAllSellers);
};
createFirstFilter();

// crear VAR noRepeatSellers que sea un array, hago bucle forof del array games para buscar sellers y si el array no incluye un game.seller que inserte el seller del array games
function noRepeatSellers() {
  const noRepeatSellers = [];
  console.log(noRepeatSellers);
  for (const game of games) {
    if (!noRepeatSellers.includes(game.seller)) {
    noRepeatSellers.push(game.seller);
    };
  };
  // y ahora que tenemos los seller sin repetir en la VAR noRepeatSellers, hacer bucle forof para crear option e insertarla en el select
  for (const noRepeatSeller of noRepeatSellers) {
    const selectFirstFilter = document.querySelector('.select-seller');
    const optionSellers = document.createElement('option');
    optionSellers.innerHTML = noRepeatSeller;
    selectFirstFilter.appendChild(optionSellers);
  };
};

// añadir event al select que haga "change", crear VAR SELECTSELLER que contenga el valor del SELECT
// crear VAR FILTERSELECTGAMES para que del array GAMES filtre game => seller juego = valor del select
// vacio GAMECONTAINER y vacio el INPUT del precio
const selectFirstFilter = document.querySelector('.select-seller');
selectFirstFilter.addEventListener('change', () => {
  filtersTogether()
});