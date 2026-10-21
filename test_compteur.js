import { creerCompteur } from "./mod_compteur.js";

const c1 = creerCompteur();
console.log(c1.incrementer());  // 1
console.log(c1.incrementer());  // 2
console.log(c1.incrementer());  // 3
console.log(c1.getValeur());    // 3
console.log(c1.reset());        // 0
console.log(c1.getValeur());    // 0

// Un deuxième compteur est indépendant du premier
const c2 = creerCompteur(10);
console.log(c2.incrementer());  // 11
console.log(c1.getValeur());    // 0 (c1 n'est pas affecté)

// La variable est bien privée
console.log(c1.valeur);         // undefined