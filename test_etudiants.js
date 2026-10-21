import {
  etudiants,
  resumeEtudiant,
  admis,
  parFiliere,
  noms,
  avecMention,
} from "./mod_etudiants.js";

console.log(resumeEtudiant(etudiants[0]));   // Amine a obtenu 14/20
console.log(admis(etudiants));               // Amine, Sara, Salma
console.log(parFiliere(etudiants, "Gestion")); // Youssef, Salma
console.log(noms(etudiants));                // [ 'Amine', 'Sara', 'Youssef', 'Salma', 'Omar' ]
console.log(avecMention(etudiants));         // chaque etudiant avec sa mention