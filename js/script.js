// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// variabili


// funzioni

// 1. creo un oggetto che descriva uno studente
var studente = {
  nome: "Alessandro",
  cognome: "Marega",
  eta: "28"
};

// 2. stampo in console le proprietà dell'oggetto 'studente'
for (var key in studente) {
  console.log(key + ": " + studente[key]);
}
