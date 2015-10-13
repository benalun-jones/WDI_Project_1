window.onload = function() {

document.getElementById("play").addEventListener("click", playMusic);

var songSelect;
var whichPlayer = 1; // true is player 1, false is player 2
var player1Score = 0;
var player2Score = 0;

  function buttonCallback(event) {
    var index = Array.prototype.slice.call(buttons).indexOf(event.target);

    soundManager.stop(songSelect.filename);
    if(songSelect.answers[index].isCorrect) {
      alert("Correct!");
      if(whichPlayer == true){
        player1Score++
        var playerOne = document.getElementById('Player1').innerText = player1Score;

      } else {
        player2Score++
        document.getElementById('Player2').innerText = player2Score ;
      }
    }else {
      alert("You know NOTHING!");
    }
    CheckForWinner()
    console.log("before", whichPlayer);
    whichPlayer = whichPlayer == 1 ? 2 : 1;
    console.log("after", whichPlayer);
    alert("Player " + whichPlayer + " to Play next!")
  }

// in the dom, add some information about which player is meant to play
// create 2 variables player1Score and player2score, and increment the number of points 
// for each time they answer correctly

var buttons = document.getElementsByTagName("button");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", buttonCallback);
  //function where, if neither player has reached 4, switch player 
  //and repeat the entire process (do i need to create a function of the whole code, and get that to run again?)
}


var buttons = document.getElementsByTagName("button");
var songs = window.songs;

function playMusic(){
  var songIndex = Math.floor(Math.random()*songs.length);
  songSelect = window.songs[Math.floor(Math.random()*songs.length)];
  var sound = soundManager.createSound({
    id: songSelect.filename,
    url: songSelect.url
  });

  sound.play();

  for (var i = 0; i < buttons.length; i++) {

    buttons[i].innerHTML=songSelect.answers[i].answer;
    
    //function where, if neither player has reached 4, switch player 
    //and repeat the entire process (do i need to create a function of the whole code, and get that to run again?)
  }
}

function updateScoreBoard(){
  document.getElementById('Player1').innerText = Player1Score;
  document.getElementById('Player2').innerText = Player2Score;
  }
  

function CheckForWinner(){
    if(player1Score === 4 || player2Score === 4){
      alert("You Win!")
      location.reload();
    }
  }
} // window onload 

// function updateScoreBoard(){
//   document.getElementById('humanScore').innerText = userScore;
//   document.getElementById('computerScore').innerText = botScore;
// }


















// document.getElementsByTagName("button").addEventListener("click", stopMusic);

  // function stopMusic(){
  //   console.log('check')
  //   soundManager.stop(songSelect.filename);
  //   buttons.index()
  //   // console.log(songSelect.answers);
  // }

// var q1 = Object.create(PossibleAnswers)
// q1.answers = ['Ace Hood Flow (Skepta)', 'That’s not me (Skepta)', 'Hate Me Now (Nas)']
// q1.correctAnswer = [0];
// song1: ['Ace Hood Flow (Skepta)', 'That’s not me (Skepta)', 'Hate Me Now (Nas)']


// var q2 = Object.create(Question);
// q2.text = "How many campus's does G.A. have?";
// q2.answers = ['10', '8', '14', '9'];
// q2.correctAnswer = 2;
// questionId1: 2;
// this.questions.push(q2);




//create a function that, when an answer is clicked, will alert whether you have clicked the correct answer
//create a function that, if the correct answer is clicked, will add a counter to the player score 
//create a function that, when the player score reaches 5, the game is over and player wins




// }




