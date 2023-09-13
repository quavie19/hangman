const word = document.querySelector('.word')
const lives = document.querySelector('.lives')
const clue = document.querySelector('.clue')
const hintbutton = document.querySelector('.hint')
const resetButton = document.querySelector('.play-again')
const outcome = document.querySelector('.outcome')
let userLives = 9
const guessed =[]

// generate random word
const gameWords = ['Doctor', 'MichaelJackson', 'Prince', 'Giraffe', 'LionKing']
let result = gameWords[Math.floor(Math.random()*gameWords.length)]

console.log(result)


// I've also replaced some let with const where appropriate and removed functions like hint and randomWord which weren't really necessary.Using disabled instead of style.opacity has the same visual effect but means the event listener won't fire on buttons which have already been clicked.


for (i = 0; i < result.length; i++) {
    guessed.push('_')
}

word.innerHTML = guessed.join(' ')

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



// Play again button resets game 
resetButton.addEventListener('click', function () {
    location.reload()
})


// create stick man 

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function frame1() {
    ctx.moveTo(50, 300);
    ctx.lineTo(50, 50);
    ctx.stroke()
    ctx.closePath()
}

function frame2() {
    ctx.moveTo(50, 50)
    ctx.lineTo(150, 50)
    ctx.stroke()
    ctx.closePath()
}

function frame3() {
    // frame 3
    ctx.moveTo(150, 50)
    ctx.lineTo(150, 100)
    ctx.stroke()
    ctx.closePath()
}


function face() {
    ctx.moveTo(150, 100)
    ctx.beginPath();
    ctx.arc(150, 120, 20, 0, 2 * Math.PI);
    ctx.closePath()
    ctx.stroke()
}

function torso() {
    ctx.moveTo(150, 140)
    ctx.lineTo(150, 200)
    ctx.closePath()
    ctx.stroke()
}

function rightArm() {
    ctx.moveTo(150, 160)
    ctx.lineTo(185, 140)
    ctx.closePath()
    ctx.stroke()
}

function leftArm() {
    ctx.moveTo(150, 160)
    ctx.lineTo(115, 140)
    ctx.closePath()
    ctx.stroke()
}

function leftLeg() {
    ctx.moveTo(150, 200)
    ctx.lineTo(120, 230)
    ctx.closePath()
    ctx.stroke()
}

function rightLeg() {
    ctx.moveTo(150, 200)
    ctx.lineTo(180, 230)
    ctx.stroke()
    ctx.closePath()
}

 // You can access the element clicked using this. this.innerHTML will give the letter clicked.

// You can check if the letter is in the word using indexOf, if it returns -1 then the letter is not in the word.

// Letter buttons are lowercase but result contains a mixture of upper and lower cases. Suppose result = 'Giraffe'. If g is clicked, it will not match G. Therefore toLowerCase is used to make result lowercase so matching will succeed.


function letterHandler() {
    const letter = this.innerHTML
    const lowerResult = result.toLowerCase()
    // check if the letter is in the result
    if (lowerResult.indexOf(letter) != -1) {
        for (i = 0; i < lowerResult.length; i++) {
            // if the guessed letter matches the result, reveal it
            if (lowerResult[i] == letter) {
                guessed[i] = result[i]
            }
        }
        word.innerHTML = guessed.join(' ')
        if (guessed.join('') == result) {
            return outcome.innerHTML = 'YOU WIN'
        
        }
    }
        else {
            userLives -= 1
        if (userLives == 0) {
                leftLeg()
            return outcome.innerHTML = 'YOU LOSE!'
            }
             
            else if (userLives == 8) {
                frame1()
            }
            else if (userLives ==7) {
                frame2()
            }
            else if (userLives == 6) {
                frame3()
            }
            
            else if (userLives == 5) {
                face()
            }
            else if (userLives == 4) {
                torso()
            }
            else if (userLives == 3) {
                rightArm()
            }
            else if (userLives == 2) {
                leftArm()
            }
            else if (userLives == 1) {
                rightLeg()
            }
             lives.innerHTML = 'You have ' + userLives + ' lives!'
        }
        this.disabled = true
        this.style.opacity = '0.4'
} 
    

const letters = document.querySelectorAll('.letter')
letters.forEach(letter => {
    letter.addEventListener('click', letterHandler)
})



