import './noResults.css';

export function noResults() {
  const gamesContainer = document.querySelector('.products');
  const noResults = document.createElement('h2');
  noResults.className = 'no-results';
  noResults.textContent = 'No se han encontrado resultados';
  gamesContainer.appendChild(noResults);
};