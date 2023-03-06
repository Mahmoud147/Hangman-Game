// Mahmoud Hamed  3- (JS)

// letters 
const letters = "abcdefghijklmonpqrstuvwxyz";

// Get Array From Letters
let lettersArray = Array.from(letters);

// Select Letters Container 
let lettersContainer = document.querySelector(".letters");

// Generate Lerrers 
lettersArray.forEach(letter => {

    // Create Span 
    let span = document.createElement("span");

    // Create Letter Text Node 
    let theLetter = document.createTextNode(letter);

    // Append The Letter To Span 
    span.appendChild(theLetter);

    // Add Class On Span 
    span.className = "letter-box";

    // Append Span To The Letters Container 
    lettersContainer.appendChild(span);
});

// Object Of Words + Categories 
const words = {
    programming: ["html", "css", "Javascript", "php"],
    movies: ["shooter", "the outfit", "gladiator"],
    people: ["will smith", "johnny depp", "tom cruise"],
    countries: ["egypt", "qatar", "kuwait"],
}

//  Get Random Property 
let allKeys = Object.keys(words);
let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomVV = randomPropValue[randomValueNumber];


// Set Category Info 
document.querySelector(".row .category span").innerHTML = randomPropName;

// Select Letters Guess Element 
let lettersGuess = document.querySelector(".letters-guess");

// Convert Chosen Word To Array 
let lettersAndSpace = Array.from(randomVV);
// Create Spans Depened On Word
lettersAndSpace.forEach(letter => {
    // Create Empty Span 
    let emptySpan = document.createElement("span");
    
    // Append Span To The Letters Guess Container
    lettersGuess.appendChild(emptySpan); 
});

// Selectt Guess Spans 
let guessSpans = document.querySelectorAll(".letters-guess span");

// Set Wrong Attempts 
let wrongAttempts = 0;

// Select The Draw Element  
let theDraw = document.querySelector(".hangman-draw");
// Handle Clicking On Letters 
document.addEventListener("click", (e) => {
    // Set The Chose Status 
    let theStatus = false;

    if(e.target.className === 'letter-box'){

        e.target.classList.add("clicked");

        let theClickedLetter = e.target.innerHTML.toLowerCase();

        let theChosenWord = Array.from(randomVV.toLowerCase());
        
        theChosenWord.forEach((wordLetter, wordIndex) => {

            if(theClickedLetter == wordLetter){
                theStatus = true;
                guessSpans.forEach((span, spanIndex) => {
                    if (wordIndex === spanIndex){
                        span.innerHTML = theClickedLetter;
                    }
                });
            }
        });
        
        if (theStatus !== true ) {
            wrongAttempts++;
            theDraw.classList.add(`wrong-${ wrongAttempts}`);

            document.getElementById("fail").play();

            if (wrongAttempts === 8){
                endGame();
                lettersContainer.classList.add("finished");
            }

        }else {
            document.getElementById("success").play();
        }
    }
});

// End Game Function 
function endGame() {
    let div = document.createElement("div");
    let p = document.createElement("p")
    let divText = document.createTextNode(`Game Over ,The Word Is ${randomVV}`);
    p.appendChild(divText);
    div.appendChild(p);
    p.className = 'pur'
    div.className = 'over';
    document.body.appendChild(div);
};