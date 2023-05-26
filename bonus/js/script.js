    
//Definisco la funzione che crea una signola casella della grid
function createSquare()
{
    let square = document.createElement('div');
    
    return square;
}

//Recupero i lavori del select
let selectElement = document.getElementById('diff-pers');
//Recupero l'elemento in cui devo creare la griglia
const grid = document.getElementById('grid');

//Creo l'evento che deve accadere al click del bottone 'Genera Campo Minato'
button.addEventListener('click', function()
    {
    //Azzero il contenuto di grid
    grid.innerHTML = '';
    //Recupero il valore selezionato dall'elemento <select>
    let dif = selectElement.value;
    //Creo un if per scegliere la tabella da mostrare in base alla difficoltà scelta
    if (dif === '1') 
        {
        //Creo un ciclo for per generare tutte le caselle della griglia
            for (let i = 0; i<100; i++)
                {
                    //Creo ogni singola casella richiamando la funzione apposita
                    let square = createSquare();
                    //Aggiungo la classe square
                    square.classList.add('square');
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
            } else if (dif === '2')
                {
                    for (let i = 0; i<81; i++)
                        {
                            let square = createSquare();
                            square.classList.add('square1');
                            square.innerText = i + 1;
                            square.addEventListener('click', function()
                                {
                                    this.classList.toggle('color-change');
                                    console.log(square.innerText);
                                });
                                
                            grid.append(square);
                        }

                } else if (dif === '3')
                    {
                        for (let i = 0; i<49; i++)
                            {
                                let square = createSquare();
                                square.classList.add('square2');
                                square.innerText = i + 1;
                                square.addEventListener('click', function()
                                    {
                                        this.classList.toggle('color-change');
                                        console.log(square.innerText);
                                    });

                                grid.append(square);
                            }
                    }
                });
