const URL = "https://jsonplaceholder.typicode.com/posts/1";

// 1. Promise : une fonction qui attend un délai puis se résout
export const attendre = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(`Attente de ${ms} ms terminée`), ms);
  });

// 2. Promise avec rejet : simule un succès ou une erreur
export const verifier = (valeur) =>
  new Promise((resolve, reject) => {
    if (valeur > 0) resolve(`${valeur} est valide`);
    else reject(new Error(`${valeur} est invalide`));
  });

// 3. async/await + fetch : récupérer le post n°1
export const recupererPost = async () => {
  try {
    const reponse = await fetch(URL);
    if (!reponse.ok) throw new Error(`Erreur HTTP : ${reponse.status}`);
    const post = await reponse.json();
    return post;
  } catch (erreur) {
    console.log("Erreur :", erreur.message);
    return null;
  }
};