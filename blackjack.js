function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getCardValue () {
    const index = getRndInteger(0, cards.length);
    const output = cards[index];
    cards.splice(index, 1);
    return output;

}


const cards = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]



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
            playercount += getCardValue();c
            dealercount += getCardValue();
        }

        playerCountOutput.textContent = "" + playercount;
        dealerCountOutput.textContent = "" + dealercount;
        count += 1
    }

})


roll.addEventListener('click', () => {
    if (count !== 0 && count !== 10){
        playercount += getCardValue();
        playerCountOutput.textContent = "" + playercount;

        
        if (playercount === 21){
            count = 10;
            wonlost.textContent = `You Won ${playercount} to ${dealercount}`;
        }


        if (dealercount < 17){
            dealercount += getCardValue();
            dealerCountOutput.textContent = "" + dealercount;
        }
        else if (dealercount > 16){
            dealercount = dealercount;
            dealerCountOutput.textContent = "" + dealercount;
        }
        
        if (playercount > 21){
            count = 10;
            wonlost.textContent =`Dealer Won ${dealercount} to ${playercount}`;
            
        }
    }
})
stop.addEventListener('click', () => {    
    if (count !== 0 && count !== 10){
        if (dealercount < 17){
            dealercount += getCardValue();
            dealerCountOutput.textContent = "" + dealercount;
        }
        else if (dealercount > 16){
            dealercount = dealercount;
            dealerCountOutput.textContent = "" + dealercount;
        }


        if (dealercount > playercount && dealercount < 22){
            count = 10;
            wonlost.textContent =`Dealer Won ${dealercount} to ${playercount}`;
            
        }
        else {
            count = 10;
            wonlost.textContent = `You Won ${playercount} to ${dealercount}`;
            
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