window.onload = function() {

document.getElementById("play").addEventListener("click", playMusic);

var songSelect;
var whichPlayer = 1; // true is player 1, false is player 2
// create 2 variables player1Score and player2score, and increment the number of points 
var player1Score = 0;
var player2Score = 0;

  function buttonCallback(event) {
    var index = Array.prototype.slice.call(buttons).indexOf(event.target);
//
    soundManager.stop(songSelect.filename);
    if(songSelect.answers[index].isCorrect) {
      alert("Correct!");
      if(whichPlayer == true){
        player1Score++
        var playerOne = document.getElementById('Player1').innerText = player1Score;
        //create a function that, when an answer is clicked, will alert whether you have clicked the correct answer
      } else {
        player2Score++
        document.getElementById('Player2').innerText = player2Score ;
      }
    }else {
      alert("You know NOTHING!");
    }
    CheckForWinner()
    //this function changes which players turn it is next
    console.log("before", whichPlayer);
    whichPlayer = whichPlayer == 1 ? 2 : 1;
    console.log("after", whichPlayer);
    //and alerts the user this information
    alert("Player " + whichPlayer + " to Play next!")
  }


var buttons = document.getElementsByTagName("button");
//add an event listener to each button option that will link with the funcitons below
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", buttonCallback);
  //function where, if neither player has reached 4, switch player 
  //and repeat the entire process (do i need to create a function of the whole code, and get that to run again?)
}


var buttons = document.getElementsByTagName("button");
var songs = window.songs;

//a function that refers to the songs.js file which stores attributes of each song
//these include the filename, url and possible answers
function playMusic(){
  var songIndex = Math.floor(Math.random()*songs.length);
  songSelect = window.songs[Math.floor(Math.random()*songs.length)];
  var sound = soundManager.createSound({
    id: songSelect.filename,
    url: songSelect.url
  });
//a function that will play the song on the click of a button an the play icon
  sound.play();

  for (var i = 0; i < buttons.length; i++) {

    buttons[i].innerHTML=songSelect.answers[i].answer;
    
    
    
  }
}

//a function that links the players score log with the scoreboard on the page
function updateScoreBoard(){
  document.getElementById('Player1').innerText = Player1Score;
  document.getElementById('Player2').innerText = Player2Score;
  }
  
//function to check for winner if either player has reached 4
//an alert that will inform them if the function terms are met
function CheckForWinner(){
    if(player1Score === 4 || player2Score === 4){
      alert("You Win!")
      location.reload();
    }
  }
} 



















// document.getElementsByTagName("button").addEventListener("click", stopMusic);



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




