let userScore = 0;
let computerScore = 0;

let userScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('comp-score');
let msgDisplay = document.querySelector('#msg');
let checkUser = document.querySelector('#checkUser');
let checkComp = document.querySelector('#checkComp');
let action = document.querySelector('.action');

const turnSound = new Audio('turnSound.mp3');

const choices = document.querySelectorAll('.choice');

const compGame = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    checkComp.innerHTML = "Computer : " + options[randIdx].charAt(0).toUpperCase() + options[randIdx].slice(1);

    return options[randIdx];

}

const playGame = (userChoice) => {   
    console.log("User choice=",userChoice)
    const compChoice = compGame();
    console.log("comp choice =" , compChoice) 
    if (userChoice === compChoice) {
        console.log("It's a tie");
        msg.innerHTML = "It's a tie";
        msg.style.backgroundColor = "black";
    }
    else{
        let userWin = true;
        if(userChoice === 'rock'){
            userWin = compChoice === 'paper' ? false : true;

        }
        else if (userChoice === 'paper'){
            userWin = compChoice === 'scissors' ? false : true;
        }
        else{
            userWin = compChoice === 'rock' ? false : true;
        }
    if(userWin){
            console.log("User wins");
            userScore++;
            userScore_span.innerHTML = userScore;
            msg.innerHTML = "You wins";
            msg.style.backgroundColor = "green";
        }
    else{
            console.log("Computer wins");
            computerScore++;
            computerScore_span.innerHTML = computerScore;
            msg.innerHTML = "Computer wins";
            msg.style.backgroundColor = "red";
        }
        }

    }


choices.forEach(choice => {
    choice.addEventListener('click', () => {
        // add turnSound.mp3.play() here
        turnSound.play();



        const userChoice = choice.id;
        checkUser.innerHTML = "User : " + userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
        playGame(userChoice);
            })
});

const restart = () => {
   
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    msg.innerHTML = "Let's Play";
    msg.style.backgroundColor = "black";
    checkUser.innerHTML = "User ";
    checkComp.innerHTML = "Computer ";
}

action.addEventListener('click', () => {
    restart();
})