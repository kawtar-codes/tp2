import {
  addition,
  soustraction,
  multiplication,
  moyenne,
  formatResultat,
  fusionnerTableaux,
  ajouterEnTete,
} from "./mod_math.js";

console.log(addition(2, 3));                         // 5
console.log(soustraction(10, 4));                    // 6
console.log(multiplication(4, 5));                   // 20
console.log(moyenne(10, 12, 14));                    // 12
console.log(formatResultat("2 + 3", addition(2, 3))); // Le resultat de 2 + 3 est : 5
console.log(fusionnerTableaux([1, 2], [3, 4], [5])); // [ 1, 2, 3, 4, 5 ]
console.log(ajouterEnTete([2, 3, 4], 1));            // [ 1, 2, 3, 4 ]