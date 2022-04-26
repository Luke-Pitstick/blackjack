function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

const roll = document.querySelector('#hit')
const stop = document.querySelector('#stand')
const wonlost = document.querySelector('#wonlost');
const play = document.querySelector('#play')

const playerCountOutput = document.querySelector('#playercount')
const dealerCountOutput = document.querySelector('#dealercount')

let playercount = 0;
let dealercount = 0;
let count = 0;

play.addEventListener('click', () => {
    if (count === 0 && count !== 10){
        
        for (let i = 0; i < 2; i++){
            playercount += getRndInteger(1, 11)
            console.log(playercount);
            dealercount += getRndInteger(1, 11)
        }

        playerCountOutput.textContent = "" + playercount;
        dealerCountOutput.textContent = "" + dealercount;
        count += 1
    }

})


roll.addEventListener('click', () => {
    if (count !== 0 && count !== 10){
        playercount += getRndInteger(1, 11);
        playerCountOutput.textContent = "" + playercount;
        
        if (playercount === 21){
            count = 10;
            wonlost.textContent = `You Won ${playercount} to ${dealercount} reload to play again`;
        }


        if (dealercount < 17){
            dealercount += getRndInteger(1, 11);
            dealerCountOutput.textContent = "" + dealercount;
        }
        else if (dealercount > 16){
            dealercount = dealercount;
            dealerCountOutput.textContent = "" + dealercount;
        }
        
        if (playercount > 21){
            count = 10;
            wonlost.textContent =`Dealer Won ${dealercount} to ${playercount} click ok to play again`;
            
        }
        
        play++;
    }
})
stop.addEventListener('click', () => {    
    if (count !== 0 && count !== 10){
        if (dealercount < 17){
            dealercount += getRndInteger(1, 11);
            dealerCountOutput.textContent = "" + dealercount;
        }
        else if (dealercount > 16){
            dealercount = dealercount;
            dealerCountOutput.textContent = "" + dealercount;
        }


        if (dealercount > playercount && dealercount < 22){
            count = 10;
            wonlost.textContent =`Dealer Won ${dealercount} to ${playercount} reload to play again`;
            
        }
        else {
            count = 10;
            wonlost.textContent = `You Won ${playercount} to ${dealercount} reload to play again`;
            
        }
    }    
})

reset.addEventListener('click', () =>{
    wonlost.textContent = ""
    playercount = 0;
    dealercount = 0;
    count = 0;
    playerCountOutput.textContent = "" + playercount;
    dealerCountOutput.textContent = "" + dealercount;

})