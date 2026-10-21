// Closure : la variable "valeur" est privée, inaccessible depuis l'extérieur
export const creerCompteur = (depart = 0) => {
  let valeur = depart;

  return {
    incrementer: () => ++valeur,
    reset: () => (valeur = depart),
    getValeur: () => valeur,
  };
};