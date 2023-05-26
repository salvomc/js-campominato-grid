
//Definisco la funzione che crea una signola casella della griglia
function createSquare()
    {
        let square = document.createElement('div');
        square.classList.add('square');
        return square;
    }

//Creo l'evento che deve accadere al click del bottone 'Genera Campo Minato'    
button.addEventListener('click', function()
    {
        //Recupero l'elemento in cui devo creare la griglia
        const grid = document.getElementById('grid');
        //Azzero il contenuto di grid
        grid.innerHTML="";
        //Creo un ciclo for per generare tutte le caselle della griglia
        for (let i = 0; i<100; i++)
            {
                //Creo ogni singola casella richiamando la funzione apposita
                let square = createSquare();
                square.innerText = i + 1;
                //Creo l'evento che al click del bottone cambi il colore
                square.addEventListener('click', function()
                    {
                        this.classList.toggle('color-change');
                        console.log(square.innerText);
                    });
                //Mostro la griglia a video
                    grid.append(square);
            }
    });
    
