// Tableau d'objets : la liste des étudiants
export const etudiants = [
  { nom: "Amine", age: 20, note: 14, filiere: "Informatique" },
  { nom: "Sara", age: 22, note: 17, filiere: "Informatique" },
  { nom: "Youssef", age: 21, note: 9, filiere: "Gestion" },
  { nom: "Salma", age: 19, note: 12, filiere: "Gestion" },
  { nom: "Omar", age: 23, note: 8, filiere: "Informatique" },
];

// Destructuring : extraire nom et note d'un étudiant
export const resumeEtudiant = ({ nom, note }) => `${nom} a obtenu ${note}/20`;

// filter : garder les étudiants qui ont la moyenne (>= 10)
export const admis = (liste) => liste.filter(({ note }) => note >= 10);

// filter : garder les étudiants d'une filière donnée
export const parFiliere = (liste, filiere) =>
  liste.filter((etudiant) => etudiant.filiere === filiere);

// map : récupérer uniquement les noms
export const noms = (liste) => liste.map(({ nom }) => nom);

// map : ajouter une mention à chaque étudiant (spread + destructuring)
export const avecMention = (liste) =>
  liste.map((etudiant) => {
    const { note } = etudiant;
    const mention = note >= 16 ? "Très bien" : note >= 14 ? "Bien" : note >= 10 ? "Passable" : "Ajourné";
    return { ...etudiant, mention };
  });