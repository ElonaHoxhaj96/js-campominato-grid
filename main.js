// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.Ogni cella ha un numero progressivo, da 1 a 100.Ci saranno quindi 10 caselle per ognuna delle 10 righe.Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// seleziono il mio contenitore in HTML e creo un bottone che mi generi una griglia
const tagBottone = document.getElementById("bt_genera");
const griglia = document.getElementById("griglia");

//creo il bottone all'interno del contenitore che ho precedentemente selezionato in pagina
const bottone = document.createElement("button")
bottone.innerHTML = 'GENERA GRIGLIA';
tagBottone.append(bottone);
//Creo una funzione che al click del bottone mi generi 100 box 

    //creo un ciclo per 100 volte 
for (let i = 1; i <= 100; i++){
    console.log(i);
    //creo un blocco con gli elementi per le box 
    const square = document.createElement('div');
    square.classList.add("box");
    console.log(square);
    //aggiungo il blocco alla mia griglia
    griglia.append(square); 
    square.innerHTML += i;
    //aggiungiamo l'evento click al box che cambierà colore
    square.addEventListener('click',
        function () {
            square.classList.toggle('clicked');
        }


    )
}
