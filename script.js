let category = document.querySelector('.category')
let word = document.querySelector('.word')
let lives = document.querySelector('.lives')
let clue = document.querySelector('.clue')
const hintbutton = document.querySelector('.hint')
const playAgainButton = document.querySelector('.play-again')
let userLives = 10

// generate random word
const gameWords = ['Doctor', 'MichaelJackson', 'Prince', 'Giraffe', 'LionKing']
let result = gameWords[Math.floor(Math.random()*gameWords.length)]

console.log(result)


// create a _ for each letter that is in the word 
function randomWord() {
    let str = " ";
    for (i = 0; i < result.length; i++) {
        str = str + "_ "
    }
    return str
}
word.innerHTML = randomWord()

// Hint function. returns a clue when hint button is clicked 

function hint() {
    hintbutton.addEventListener('click', function () {
        if (result == 'MichaelJackson' || result == 'Prince') {
            return clue.innerHTML = 'Clue - Music Artist'
        }
        else if (result == 'Giraffe') {
            return clue.innerHTML = 'Clue - Animal'
        }
        else if (result == 'Doctor') {
            return clue.innerHTML = 'Clue - Occupation' 
        }
        else {
            return clue.innerHTML = 'Clue - Movie'
        }
    })
}

hint()

let newResult = result.split('')


// once letter is clicked the letter is greyed out and can no longer be clicked 
function letterGreyOut() {
    const letters = document.querySelectorAll('.letter')
    letters.forEach(letter => {
        letter.addEventListener('click', function () {
            letter.style.opacity = '0.4'
        })
    })
}

// when user clicks a letter: if letter is in word. letter appends to the place where letter is in the word.
// if letter is not in word the user loses a life 

