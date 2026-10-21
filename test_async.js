import { attendre, verifier, recupererPost } from "./mod_async.js";

// Test Promise avec .then
attendre(1000).then((msg) => console.log(msg));

// Test Promise avec succès et échec (.then / .catch)
verifier(5).then((msg) => console.log(msg));
verifier(-1).catch((err) => console.log("Erreur :", err.message));

// Test async/await + fetch
const post = await recupererPost();
console.log(post);