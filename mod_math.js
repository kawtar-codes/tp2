// Fonctions flechees (arrow functions)
export const addition = (a, b) => a + b;

export const soustraction = (a, b) => a - b;

export const multiplication = (a, b) => a * b;

// Le rest parameter (...) permet d'accepter un nombre variable d'arguments
export const moyenne = (...nombres) =>
  nombres.reduce((total, n) => total + n, 0) / nombres.length;

// Template string (litteral de gabarit) avec interpolation ${...}
export const formatResultat = (operation, resultat) =>
  `Le résultat de ${operation} est : ${resultat}`;

// Spread : fusion de plusieurs tableaux passes en parametre rest
export const fusionnerTableaux = (...tableaux) => tableaux.flat();

// Spread : copie d'un tableau en ajoutant un element au debut
export const ajouterEnTete = (tableau, element) => [element, ...tableau];