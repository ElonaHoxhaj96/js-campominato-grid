// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.Ogni cella ha un numero progressivo, da 1 a 100.Ci saranno quindi 10 caselle per ognuna delle 10 righe.Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// seleziono il mio contenitore in HTML e creo un bottone che mi generi una griglia
const tagBottone = document.getElementById("bt_genera");
const griglia = document.getElementById("griglia");

//creo il bottone all'interno del contenitore che ho precedentemente selezionato in pagina
const bottone = document.createElement("button")
tagBottone.append(bottone);
bottone.innerHTML = 'GENERA GRIGLIA';
for (let i = 1; i <= 100; i++){
    console.log(i);
    
}