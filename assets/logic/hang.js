window.onload = function(){

  var WORDS = ['arryn', 'frey', 'greyjoy', 'lannister', 'stark', 'targaryen',   'baratheon', 'tyrell','bolton', 'daenerys', 'dragonglass', 'snow', 'winter', 'little finger', 'dothraki'];

  // getWord stores the word we want the player to guess
  var getWord="";
  // answerMyWord stores the answers (starting with blanks and gradually filled in)
  var answerMyWord = [];
// hold the number of letters in each word
  var blanks = 0;

  var rightWrong = []; //stores right or wrong answers
  var wrongGuess = []; // stores wrong guesses
  var winCounter = 0; // counts number of wins
  var loseCounter = 1; // counts total losses 
  var totGuesses = 9;// totGuesses of 9 lives

  function startGame(){
    totGuesses = 9;
    rightWrong = []; //makes the word empty
    wrongGuess = []; //makes empty at start

        getWord = WORDS[Math.floor(Math.random() * WORDS.length)];

        answerMyWord = getWord.split(" ");
        blanks = answerMyWord.length;
        console.log(getWord);
        console.log(blanks);
//
        for (var i = 0; i < blanks; i++) {
          rightWrong.push(" ");
        }
        console.log(rightWrong);
        document.getElementById('word-blank').innerHTML = rightWrong.join(" ");
	      document.getElementById('guesses-left').innerHTML = totGuesses;
        document.getElementById('wrong-guesses').innerHTML = wrongGuess.join(" ");
      };

      function checkLetters(letter){ //this function provides input from the user
            var letterInWord = false;
            // A conditional statement to determine if the letter the user picked is in the word.
          for(var i = 0; i < blanks; i++){
              if (getWord[i] === letter){
                  letterInWord = true;
              }
          }
          // Only applicable if above condition is true
          if(letterInWord){
            for (i = 0; i < blanks; i++) {
                if (getWord[i] === letter) {
                  rightWrong[i] = letter;
          }
          console.log("inside our checkletter function", rightWrong);
      }
          } else {
            totGuesses --;
            wrongGuess.push(letter);

          }
              console.log("our wrong guesses inside our checkletter function", wrongGuess);
  };

  function compeleteGame() {
    document.getElementById('word-blank').innerHTML = rightWrong.join(" ");
    document.getElementById('guesses-left').innerHTML = totGuesses;
    document.getElementById('wrong-guesses').innerHTML = wrongGuess.join(" ");


        console.log(answerMyWord);
        console.log(rightWrong);
        if (answerMyWord.join(" ") === rightWrong.join(" ")) {
          winCounter++;
          alert ("You have won!");
          document.getElementById('win-counter').innerHTML = winCounter;
          startGame();
        } else if (totGuesses === 0) {
          document.getElementById('loss-counter').innerHTML = loseCounter ++;
          document.getElementById('wrong-guesses').innerHTML = " ";
          alert("You ran out of guesses");
          playButton.style.visibility = "visible";

        }
  };

    startGame();

    document.onkeyup = function(){

       var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
       console.log("this is the letter we type", letterGuessed);
       checkLetters(letterGuessed);
       compeleteGame();

};

      var reloadPage = function() {
         var playButton = document.getElementById('play');
         playButton.style.visibility = "hidden";
         startGame();
       }
}
