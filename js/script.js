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

// 3. creo un array di oggetti 'studenti'
var studenti = [
  {
    nome: Alessandro,
    cognome: Marega,
    eta: 28
  },
  {
    nome: Mario,
    cognome: Rossi,
    eta: 30
  },
  {
    nome: Tazio,
    cognome: Nuvolari,
    eta: 65
  },
  {
    nome: Pippo,
    cognome: Sempronio,
    eta: 53
  },
];
