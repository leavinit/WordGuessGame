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


//GAME STATE CLASS (Contains all methods and properties for the game)

class  state {

    constructor(){
        this.playing = false;
        
        var target = document.getElementById("guessesLeftDiv");
        target.textContent = "PRESS ANY KEY TO BEGIN";

        this.getNewWord();
        this.displayBoard();
        this.remainingGuesses = 10;
        // document.getElementById("guessesLeftDiv").textContent = 
        //     "REMAINING GUESSES: " + this.remainingGuesses;
    }
//VARS
    //See if the game is started
    playing = false;
    //list of pontential words to guess (might want to generate this list dynamically in the future)
    words = ["hello", "goodbye", "feather", "color", "gone", "arrive"];

    //wins total (this session)
    wins = 0;
    //losses total
    losses = 0;
    //the word to guess
    word =  "";
    //letters guessed
    alreadyGuessed = "";
    //correct guesses
    correctGuesses  = "";
    //guesses remaining
    remainingGuesses = 10;




//METHODS
    //Display "press any key to start"
    startGame = function(guess){
                
        console.log(this.word);
        this.processGuess(guess);
        this.displayBoard();

    };
    //Fetch a new word
    getNewWord = function(){
        this.word = this.words.shift();
        console.log("REMAINING WORDS: " + this.words);
    };
    
    //Display game board (empty spaces for unguessed letters)
    displayBoard = function(){
        var board = "";
        var timesCorrect = 0;
        console.log("Correct guesses =" + this.correctGuesses)
        for (let i in this.word){
            //If letter is in correct guesses, print the letter
            if (this.correctGuesses.includes(this.word[i])){
                board += "   " + this.word[i] + "   ";
                timesCorrect ++;
                //ESSENTIAL CHECK TO VERIFY CORRECT GUESS
                if (timesCorrect == this.word.length){
                    document.getElementById("guessesLeftDiv").textContent = 
                        "YOU WIN, CONGRATS!! ";
                    this.wins++;
                    console.log (this.wins + "= wins");
                    document.getElementById("winsLossesDiv").textContent =
                    "Wins: " + this.wins +" Losses:  "+this.losses;
                    //Reset game with empty board
                    this.resetGame();
                }
            }
            else {
                //Else print the blank space
                board += "  ___  ";
                
            }
            
        }
        console.log(board);        
        var target = document.getElementById("boardDiv");
        target.textContent = board;
    };
    
    //Display guess, takes a letter guessed as an input
    processGuess = function(guess){
        console.log("Guessed letter: " + guess)
        console.log("GUESSED LETTERS: " + this.alreadyGuessed);
        
        //Check for repeat guesses
        if (this.alreadyGuessed.includes(guess)){
            document.getElementById("guessedDiv").textContent =
            "ALREADY GUESSED THAT TRY AGAIN" ;
            console.log("ALREADY GUESSED THAT TRY AGAIN LETTERS GUESSED: "+
            this.alreadyGuessed);
        }
        else {
            //Update list of letters already guessed
            this.alreadyGuessed += guess;
            document.getElementById("guessedDiv").textContent =
            "ALREADY GUESSED LETTERS :" + this.alreadyGuessed; 
            console.log("ALREADY GUESSED LETTERS :" + this.alreadyGuessed);
        }

        //Check if letter guessed is in word to guess
        if (this.word.includes(guess)){
            console.log("GUESS WAS IN THE WORD");
            //Update string of correct guesses
            this.correctGuesses += guess;
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
                document.getElementById("guessesLeftDiv").textContent = 
                "REMAINING GUESSES: " + this.remainingGuesses;

            }
            else {
                console.log("Game OVER"); //GAME IS OVER testing
                document.getElementById("guessesLeftDiv").textContent = "GAME OVER TRY AGAIN";
                this.losses++;
                console.log (this.losses + "= losses");
                document.getElementById("winsLossesDiv").textContent =
                    "Wins: " + this.wins +" Losses:  "+this.losses;
                this.resetGame();
            }
            
        }
        
    }
    //function to reset the game and start again w/ a new word

    resetGame = function(){

        // //wins total (this session)
        // this.wins = 0;
        // //losses total
        // this.losses = 0;
        //the word to guess
        this.word =  "";
        //letters guessed
        this.alreadyGuessed = "";
        //correct guesses
        this.correctGuesses  = "";
        //guesses remaining
        this.remainingGuesses = 10;
        this.playing = false;
        var target = document.getElementById("guessesLeftDiv");
        target.textContent = "PRESS ANY KEY TO BEGIN";

        
        this.getNewWord();
        this.displayBoard();
                
    }

}

game = new state;    
document.getElementById("gameDiv").textContent= "WORD GUESS GAME" ;
$("body").keyup(
    function(event){
        //event.which is a keycode, and needs to be translated
        key_pressed = String.fromCharCode(event.which).toLowerCase();
        if(game.playing){        
            game.startGame(key_pressed);
        }
        else{
            game.displayBoard();
            game.playing = true;
            document.getElementById("guessesLeftDiv").textContent = 
                "REMAINING GUESSES: " + game.remainingGuesses;

        }
    }
);
 



