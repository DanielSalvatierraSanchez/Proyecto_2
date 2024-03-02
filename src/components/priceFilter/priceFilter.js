import './priceFilter.css';
import { filtersTogether } from '../filtersTogether/filtersTogether.js';

// crear segundo filtro
export function createSecondFilter() {
  const filtersContainer = document.querySelector('.filter');
  // crear title
  const titleSecondFilter = document.createElement('h3');
  titleSecondFilter.className = 'title-price';
  titleSecondFilter.textContent = 'BUSQUEDA POR PRECIO';
  filtersContainer.appendChild(titleSecondFilter);
  // crear input
  const inputSecondFilter = document.createElement('input');
  inputSecondFilter.className = 'input-price';
  inputSecondFilter.placeholder = 'Importe';
  inputSecondFilter.type = 'number';
  inputSecondFilter.min = 1;
  inputSecondFilter.value = 100;
  filtersContainer.appendChild(inputSecondFilter);
  // crear button
  const buttonSearchPrice = document.createElement('button');
  buttonSearchPrice.className = 'button-price';
  buttonSearchPrice.textContent = 'Buscar';
  buttonSearchPrice.type = 'submit';
  filtersContainer.appendChild(buttonSearchPrice);
};
createSecondFilter();

// añadir event al button que al hacer "click" cree VAR PRICEOFUSER que contenga el valor del INPUT
// crear VAR FILTERFORPRICE para que del array GAMES filtre game => precio game < precio del INPUT
// vacio GAMECONTAINER y vacio el INPUT del precio
const buttonOfSearchPrice = document.querySelector('.button-price');
buttonOfSearchPrice.addEventListener('click', () => {
filtersTogether()
});