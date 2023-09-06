const letter = document.querySelector('.letters')
let category = document.querySelector('.category')
let word = document.querySelector('.word')
let lives = document.querySelector('.lives')
let clue = document.querySelector('.clue')
const hintbutton = document.querySelector('.hint')
const playAgainButton = document.querySelector('.play-again')



// generat random word
const gameWords = ['Doctor', 'Michael Jackson', 'Prince', 'Giraffe', 'Lion King']
let result = gameWords[Math.floor(Math.random()*gameWords.length)].split(' ').join('')

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





