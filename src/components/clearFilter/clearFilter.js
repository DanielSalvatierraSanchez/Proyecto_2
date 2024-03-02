import './clearFilter.css';
import { showAllGames } from "../games/games.js";

// crear button 'Limpiar Filtros'
export function buttonClearFilters() {
  const filtersContainer = document.querySelector('.filter');
  const buttonClearFilters = document.createElement('button');
  buttonClearFilters.className = 'button-clear';
  buttonClearFilters.textContent = 'Limpiar Filtros';
  filtersContainer.appendChild(buttonClearFilters);

  // añadir event al button que al hacer "click" limpie los filtros y pinte games
  buttonClearFilters.addEventListener('click', () => {
    const gamesContainer = document.querySelector('.products');
    const selectFirstFilter = document.querySelector('.select-seller');
    const inputSecondFilter = document.querySelector('.input-price');
    gamesContainer.innerHTML = "";
    selectFirstFilter.value = "";
    inputSecondFilter.value = "";
    showAllGames();
  });
};