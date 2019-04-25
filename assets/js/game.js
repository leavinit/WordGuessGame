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
    document.write("<p>"+ item + "</p></br>");
}


//GAME STATE OBJECT (Contains all methods and properties for the game)

var  state = {
//VARS
    //list of pontential words to guess (might want to generate this list dynamically in the future)
    words       :   ["hello", "goodbye", "feather", "color", "gone", "arrive"],

    //wins total (this session)
    wins        :   0,
    //the word to guess
    word        :   "",
    //letters guessed
    guessed     :   "",
    //guesses remaining
    remaining   :   10,


//METHODS
    //Display "press any key to start"
    startGame   : function(){
        // Display press any key

        //Set the word for this round
        this.getNewWord();
    },
    //Fetch a new word
    getNewWord  : function(){
        this.word = this.words.shift();
        prt("REMAINING WORDS: " + this.words);
    }
    //Display board
    
    //Display guess

    //Update game state (letters guessed, guesses remaining, win if game won)


}


state.startGame();
prt(state.word);
