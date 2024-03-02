import './style.css';
import { games, showGames, showAllGames } from "./src/components/games/games.js";
import { createFirstFilter, noRepeatSellers } from "./src/components/sellerFilter/sellerFilter.js";
import { createSecondFilter } from "./src/components/priceFilter/priceFilter.js";
import { buttonClearFilters } from "./src/components/clearFilter/clearFilter.js";
import { noResults } from "./src/components/noResults/noResults.js";
import { filtersTogether } from "./src/components/filtersTogether/filtersTogether.js";
// import { start } from "./src/components/goUp/goUp.js";

showAllGames();
noRepeatSellers();
buttonClearFilters();
noResults();
filtersTogether();
// start();