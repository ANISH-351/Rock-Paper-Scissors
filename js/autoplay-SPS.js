let score = JSON.parse(localStorage.getItem('score')) ||
 {wins:0, loses:0, tie:0}

gamePoint();

let autoPlaying = false
let intervalID;

function autoPlay(){
    if(!autoPlaying){
     intervalID=setInterval(() =>{
        let playGame = final();
        finalGame(playGame);
        },1000)
        autoPlaying=true
        autoPlayButton.innerHTML='off';
    }else{
        clearInterval(intervalID)
        autoPlaying=false
        autoPlayButton.innerHTML ='On AutoPlay';
    }
    
}

document.querySelector('.stone').
addEventListener('click',()=>{
    finalGame('rock');
})

document.querySelector('.paperButton').
addEventListener('click',()=>{
    finalGame('paper');
})

document.querySelector('.scissorsButton')
.addEventListener('click',() =>{
    finalGame('scissors')
})

document.body.addEventListener('keydown',(event)=>{
    if(event.key === 'r'){
       finalGame('rock')
    }else if (event.key === 'p') {
       finalGame('paper') 
    }else if (event.key ==='s'){
       finalGame('scissors') 
    }
})

function finalGame(playGame){
    let computer=final()

let result = '';
if (playGame==='scissors'){
    if(computer === 'rock') {
   result='You Lose';
}else if(computer==='paper') {
    result='You Win';
}else if(computer==='scissors'){
    result='Tie';
}

}else if(playGame==='paper'){
if(computer === 'rock') {
   result='You Win';
}else if(computer==='paper') {
    result='Tie';
}else if(computer==='scissors'){
    result='You Lose';
}

}else if(playGame==='rock'){  
    if (computer === 'rock') {
    result = 'Tie';
} else if (computer === 'paper') {
    result = 'You Lose';
} else if (computer === 'scissors') {
    result = 'You Win';
} 
}
if(result === 'You Win'){
    score.wins += 1;
}else if(result ==='You Lose'){
    score.loses += 1;
}else if(result === 'Tie'){
    score.tie += 1;
} 

localStorage.setItem('score', JSON.stringify(score));

gamePoint();

document.querySelector('.gameResult')
.innerHTML=result;

document.querySelector('.gameMove')
.innerHTML=`You Move:  ${playGame} - ${computer} :Computer `

}
function gamePoint(){
    document.querySelector('.gameScore')
    .innerHTML=`wins:${score.wins} |Losses:${score.loses}| Tie :${score.tie}`;
}

    function final(){
    let computer ='';
 const game = Math.random()


if(game>=0 && game < 1/3){
 computer = 'rock';
} else if (game >= 1/3 && game<2/3 ) {
computer = 'paper';
}else if(game >=2/3 && game<1){
    computer = 'scissors';
}

return computer;

} 