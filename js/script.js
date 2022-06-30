//flip card   game.html
const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


var score = 0;   // number of correct scores at Begining Game
document.getElementById("score").innerHTML = score;
var numFalse = 0;  // number of Failler scores at Begining Game
document.getElementById("Failler").innerHTML = numFalse;
var total_Try = numFalse + score ;

// matching cards and remove click from them function
function correctCardsDisable() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  
  

  reset();
}



// not matching cards function
function wrongCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    reset();
  }, 700);
}


//reset all the variables to start again
function reset() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}


//winner display
function Winner(){
  
  document.getElementById("winner-div").style.display= "block";
  clearInterval(countdown);
  setTimeout(function(){home();},5000)
}




function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatching();
}





function checkForMatching() {
  let isMatch = firstCard.dataset.cartoon === secondCard.dataset.cartoon;

  if (isMatch == true) {
    correctCardsDisable();
    score = score + 1;                                   // increase correct scores at Playing Game
    total_Try = total_Try + 1;
    document.getElementById("score").innerHTML = score; //  number of correct scores will print

    score == 6  && minutes <= 3  && minutes >= 1   &&  Winner();
   
  }
  else {
    wrongCards();
    numFalse = numFalse + 1;                                    // decrease number of False scores at Playing  Game
    total_Try = total_Try + 1;
    document.getElementById("Failler").innerHTML = numFalse;  // number of False scores will print 
  }
  document.getElementById("total_Try").innerHTML = total_Try; 
}



// timer function
var seconds = 90;
var watch = document.getElementById('Watchs');

var countdown = setInterval(function () {

  Minute_Seconds();
}, 1000);


var minutes =0 ;
function Minute_Seconds() {
   minutes = Math.floor(seconds / 60);
  var secondReminder = seconds % 60;
  if (secondReminder < 10) {
    secondReminder = "0" + secondReminder;
  }
  watch.innerHTML = minutes + " : " + secondReminder;

  if (seconds > 0) {
    seconds = seconds - 1;  // decrease one second after every 1000 millsecind callin set interval 

  }
  else {
    clearInterval(countdown);  // stop countdown 
    watch.innerHTML = "Time Out";
    document.getElementById("parent").style.display="block";
    document.getElementById("cards").style.display="none";
  }


}


//to shuffle the card all over again each time
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();
cards.forEach(card => card.addEventListener('click', flipCard));




/////////////////////////////////////////////////

//start button in index.html page
function start() {
  window.location.href = "game.html";

}

//home button in game.html page
function home() {
  window.location.href = "home.html";
}


//vanish
function vanish() {
  document.getElementById("grand").style.display = "none";
}


//show 
function show() {
  document.getElementById("grand").style.display = "block";
}


