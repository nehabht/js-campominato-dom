/*
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
 in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/



let limit = 0


// cambia il valore di limit e cols in base all'option del livello selezionato
// seleziona form dom


let formElement = document.querySelector("form")

let generate_grid = document.querySelector("button")

formElement.addEventListener("submit", function (event) {
    event.preventDefault()
    


    function levelchangeF(){
        
    
        let levelElement = document.getElementById("level").value;

    
        if (levelElement === "1"){
            limit = 100
            cols = 10
            console.log('easy')
            generateGrid('.cells', 'div', 'cell', limit, cols)
            generateNumbers(limit)
            
            
            
        }else if (levelElement === "2"){
            limit = 81
            cols = 9
            console.log('e')
            generateGrid('.cells', 'div', 'cell', limit, cols)
            generateNumbers(limit)
            
            
            
        }else if (levelElement === "3"){
            limit = 49
            cols = 7
            console.log('d')
            generateGrid('.cells', 'div', 'cell', limit, cols)
            generateNumbers(limit)
            
 

        }
    
        return
    }

    const levelChange = levelchangeF()
    selectElements('.cell')


})


// genero una griglia

function generateGrid(selector, tag_name, class_name, limit, cols) {
    const cellsElement = document.querySelector(selector)
    cellsElement.innerHTML = "";
  
    for (let i = 1; i <= limit; i++) {
      const cellItem = document.createElement(tag_name);
      cellItem.classList.add(class_name)
      cellsElement.append(cellItem)
    //   divido lo spazio che occupa la singola cella in base al numero di colonne
      cellItem.style.width = `calc( 100% / ${cols})`

    }
  
}


// generateGrid('.cells', 'div', 'cell', limit)


// genero i numeri da 1 a 100 per easy level

function generateNumbers(limit){
    const orderNumberList = []

    for (let i = 1; i<=limit; i++){
        orderNumberList.push(i)
        
    }

    return orderNumberList;
    
}

// console.log(generateNumbers(limit));


// appendere i numeri generati nella dom ovvero nelle singole celle


function selectElements(selector){
    const cells = document.querySelectorAll(selector);
    const numbers = generateNumbers(limit)
    const bombNumber = randomNumbersF(limit)
    console.log(bombNumber)
    console.log(numbers)
    let cell;

    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        
        // appendi il numero generato alla cella 
        const spanElement = document.createElement('span')
        spanElement.append(numbers[i])
        cell.append(spanElement)


         // cambia colore della cella al click
        cell.addEventListener('click', function () {

            console.log(this.innerText)
            console.log(bombNumber)

            

            // al click se un numero random coincide con il numero della cella, questa si colora di rosso
            // altrimenti il codice continua
            if (bombNumber.includes(parseInt(this.innerText))){
                this.classList.add('active_red');
                alert("you lose!")

            } else{
                this.classList.add('active_blu');
            }
            
            
        })
    }

    return
}

// selectElements('.cell')

// generatore di numeri causali (al posto di max metto limit)

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// creo l'array dei numeri casuali e la funzione che pusha il numero nell'array
// valore massimo da sostituire al limite 

function randomNumbersF (valore_massimo){
    const randomNumbers = [];
    

    while (randomNumbers.length !== 16){
        const randomNumber = getRandomInteger(1,valore_massimo)
        // randomNumbers.push(randomNumber)
        // pusha il numero nell'array se i numeri non sono uguali (non funziona)
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber)
        } 
    }

    return randomNumbers;
}







