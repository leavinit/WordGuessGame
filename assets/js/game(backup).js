// Press any key to get started!

// Wins: (# of times user guessed the word correctly).

// If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.

// As the user guesses the correct letters, reveal them: m a d o _ _ a.

// Number of Guesses Remaining: (# of guesses remaining for the user).

// Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).

// After the user wins/loses the game should automatically choose another word and make the user play it.

// HARD MODE: Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
// Save your whole game and its properties in an object.
// Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.




//utitlity printing function for testing
prt = function(item){
    var targetDiv = document.getElementById("gameDiv");
    var p = document.createElement("p");
    p.textContent = item;
    targetDiv.append(p);
    // console.log('printing');  //Testing
}


//GAME STATE OBJECT (Contains all methods and properties for the game)

var  state = {
//VARS
    //See if the game is started
    playing             :   false,
    //list of pontential words to guess (might want to generate this list dynamically in the future)
    words               :   ["hello", "goodbye", "feather", "color", "gone", "arrive"],

    //wins total (this session)
    wins                :   0,
    //the word to guess
    word                :   "",
    //letters guessed
    alreadyGuessed      :   "",
    //correct guesses
    correctGuesses      :   "",
    //guesses remaining
    remainingGuesses    :   10,




//METHODS
    //Display "press any key to start"
    startGame           : function(guess){
        // Display press any key

        //Set the word for this round
        this.getNewWord();
        console.log(this.word);
        this.displayBoard();
        this.processGuess(guess);
    },
    //Fetch a new word
    getNewWord          : function(){
        this.word = this.words.shift();
        console.log("REMAINING WORDS: " + this.words);
    },
    //Display game board (empty spaces for unguessed letters)
    displayBoard        :  function(){
        board = "";
        for (i in this.word){
            //If letter is in correct guesses, print the letter
            if (this.correctGuesses.includes(this.word[i])){
                board += "   " + word[i] + "   ";
            }
            else {
                //Else print the blank space
                board += "  ___  ";
                
            }
            
        }
        //console.log("blank space"); //testing
        console.log(board);
    },
    
    //Display guess, takes a letter guessed as an input
    processGuess        : function(guess){
        console.log("Guessed letter: " + guess)
        console.log("GUESSED LETTERS: " + this.alreadyGuessed);
        
        //Check for repeat guesses
        if (this.alreadyGuessed.includes(guess)){
            console.log("ALREADY GUESSED THAT TRY AGAIN <br>LETTERS GUESSED: "+
            this.alreadyGuessed);
        }
        else {
            //Update list of letters already guessed
            this.alreadyGuessed += guess;
            console.log("ALREADY GUESSED LETTERS :" + this.alreadyGuessed);
        }

        //Check if letter guessed is in word to guess
        if (this.word.includes(guess)){
            console.log("GUESS WAS IN THE WORD");
            //Update string of correct guesses
            this.correctGuess += guess;
            console.log("Restarting");  //testing
            //Keep game going, need to add check to see if word is solved
        }
        else {
            //Guess wasnt in the word, nor already guessed, decrement remaining trys
            this.remainingGuesses -= 1;
            console.log("Not IN THE WORD");
             //If guesses remaining, keep game going
            if(this.remainingGuesses > 0){
                console.log("Restarting");  //testing
            }
            else {
                console.log("Game OVER"); //GAME IS OVER testing
            }
            
        }
        

    }
    //Update game state (letters guessed, guesses remaining, win if game won)


}




//VAR To Check Whether Game Has Started
var playing = false;
$("#body").text ("press any key");

$("body").keyup(
    function(event){
        //event.which is a keycode, and needs to be translated
        key_pressed = String.fromCharCode(event.which).toLowerCase();        
        console.log('key pressed'+ key_pressed);
        
        state.startGame(key_pressed);
    }
);
 



