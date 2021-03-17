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
    nome: "Alessandro",
    cognome: "Marega",
    eta: 28
  },
  {
    nome: "Mario",
    cognome: "Rossi",
    eta: 30
  },
  {
    nome: "Tazio",
    cognome: "Nuvolari",
    eta: 65
  },
  {
    nome: "Pippo",
    cognome: "Sempronio",
    eta: 53
  },
];

//4. Ciclo su tutti gli studenti e stampo per ognuno di essi, nome e cognome.
for (var i = 0; i < studenti.length; i++) {
  console.log("lo studente " + (i + 1) + " si chiama " + studenti[i]["nome"] + " " + studenti[i]["cognome"]);
}

//5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// creo un oggetto vuoto
var nuovoStudente = {};

// chiedo nome, cognome, età all'utente
var nomeUtente = prompt("inserisci il nome dello studente");
var cognomeUtente = prompt("inserisci il cognome dello studente");
var etaUtente = parseInt(prompt("inserisci l'età dello studente"));

// trasformo la prima lettera delle variabili inserite dall'utente in maiuscola
nomeUtente = nomeUtente.charAt(0).toUpperCase() + nomeUtente.slice(1);
cognomeUtente = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1);

// controllo che l'utente compili tutti i campi, che l'etaUtente sia un numero, quindi aggiungo le proprietà nome, cognome e età all'oggetto vuoto
if (nomeUtente == "" || cognomeUtente == "" || etaUtente == "") {
  alert("compila tutti i campi di 'nome', 'cognome' e 'età'");
} else {
  if (isNaN(etaUtente) == false) {
    nuovoStudente["nome"] = nomeUtente;
    nuovoStudente["cognome"] = cognomeUtente;
    nuovoStudente["eta"] = etaUtente;
  } else {
    alert("inserisci un numero per l'età");
  }
}

// aggiungo il nuovo oggetto all'array di studenti
studenti.push(nuovoStudente);

// stampo l'array con il nuovo oggetto
console.log(studenti);
