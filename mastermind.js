/* Mastermind I - no saved turns */

/* Initialization */
//colors, code, guess, feedback -- all arrays
var colors = ['r', 'c', 'w', 'g', 'b', 'y']
var code = [];
var guess = [];
var feedback = [];
var tempcode = [];

/* Main Method */
code=setCode(code,colors);
guess=getGuess(guess);
getGuess(guess,code,feedback);
/* Functions */

/* Create the Secret Code */
function setCode(code,colors){
// function pulls from six colors to randomly fill code with four values
	for (i=0;i<4;i++){
	code[i]=colors[Math.floor(Math.random()*6)];
	}
  console.log(code);
}
/* Get the Player's Guess */
function getGuess(guess){
  for (i=0;i<4;i++){
    guess[i]=prompt("What is your guess?"+(i+1));
  }
  console.log(guess);
  return guess;
}

// function prompts player for each of four values and stores in array

/* Analyze the Guess */
function testCode(code, guess, feedback){
  tempcode = code;
// function analyzes guess against code and produces feedback
	// initialize the temporary code array (copy of code)
	// count the blacks and erase tempcode as you go - one loop
  for (g=0;g<4;g++){
    if(guess[g]==tempcode[g] && guess[g]!="") {
      feedback[g]="b";
      tempcode[g]="";
    }
  }
 
	// count the whites and erase tempcode as you go - nested loops
	// use "continue" once a match is found in the inner loop
  function code(code, guess, feedback){
    tempcode = code;
    for (c=0;c<4;c++){
      for (c=0;c<4;c++){
        if(guess[c]==tempcode[c] && guess[c]!="") {
          feedback[c]="w";
          tempcode[c]="";
          continue;
        }
      }
    }
  }
	// send the feeback to the formatter
	// console log the feedback
console.log(feedback);
}

/* Format the Feedback */
function formatFeedback(feedback) {
// function over-writes feedback to put b's first, w's second, delete the rest
	// initialize the black and white count variables
	var b = 0, w = 0;
	// count the the Bs and the Ws - one loop
	for (i=0;i<4;i++){
		if (feedback[i]=="b") {
			b++;
		}
		else if (feedback[i]=="w") {
			w++;
		}
	}
	// initialize remainder as 4 - (B+W)
	var remainder = 4 - (b+w);
	// write the B's
	for (i=0;i<b;i++){
		feedback[i]="b";
	}
	// write the W's
	for (i=0;i<w;i++){
		feedback[i]="w";
	}
	// delete the blanks (remainder) with array.pop
	for (i=0;i<remainder;i++){
		feedback.pop();
	}
	// return the new feedback array
	return feedback;
}