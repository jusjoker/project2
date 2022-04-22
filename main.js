document.getElementById('rock').onclick = user;
document.getElementById('paper').onclick = user;
document.getElementById('scissors').onclick = user;

var userresults = document.getElementById('userresults')
var computerresults = document.getElementById('computerresults')
var finalresults = document.getElementById('finalresults')

const userr = document.createElement('h3');
const computer = document.createElement('h3');
const final = document.createElement('h3');

var wins = document.getElementById('Wins')
var ties = document.getElementById('Ties')
var losses = document.getElementById('Losses')

globalWins = 0
globalTies = 0
globalLosses = 0


function user(){
    var userChoice = this.id;
    userresults.appendChild(userr);
    userr.textContent = "You used: " + userChoice

    var computerChoice = Math.random();
         if (computerChoice < 0.34) {
             computerChoice = "rock";
          }else if(computerChoice <= 0.67) {
             computerChoice = "paper";
          }else{
             computerChoice = "scissors";
          };

    
    computerresults.appendChild(computer);
    computer.textContent = "Computer used: " + computerChoice

    
    finalresults.appendChild(final);
    final.textContent = (compare(userChoice, computerChoice)); 

    function compare(choice1, choice2) {
    
		    if (choice1 === choice2) {
                globalTies++;
                var globalTiesText = document.createElement('h3');
                ties.textContent = `Ties = ${globalTies}`;
                ties.appendChild(globalTiesText)
            return "The result is a tie!";
            
        }
 
        if (choice1 === "rock") {
            if (choice2 === "scissors") {
                globalWins++;
                var globalWinsText = document.createElement('h3');
                wins.textContent = `Wins = ${globalWins}`;
                wins.appendChild(globalWinsText)
                return "User wins!";
            }else{
                globalLosses++;
                var globalLossesText = document.createElement('h3');
                losses.textContent = `Losses = ${globalTies}`;
                losses.appendChild(globalLossesText)
                return "Computer wins...";
            }
				}
 
         if (choice1 === "paper") {
             if (choice2 === "rock") {
                globalWins++;
                var globalWinsText = document.createElement('h3');
                wins.textContent = `Wins = ${globalWins}`;
                wins.appendChild(globalWinsText)
                 return "User wins!";
              } else {
                    globalLosses++;
                    var globalLossesText = document.createElement('h3');
                    losses.textContent = `Losses = ${globalTies}`;
                    losses.appendChild(globalLossesText)
                    return "Computer wins...";
              }
		     }
		
		     if (choice1 === "scissors") {
             if (choice2 === "paper") {
                globalWins++;
                var globalWinsText = document.createElement('h3');
                wins.textContent = `Wins = ${globalWins}`;
                wins.appendChild(globalWinsText)
                 return "User wins!";
             } else {
                globalLosses++;
                var globalLossesText = document.createElement('h3');
                losses.textContent = `Losses = ${globalTies}`;
                losses.appendChild(globalLossesText)
                 return "Computer wins...";
            }
        }
    }
}

var globalWinsText = document.createElement('h3');
wins.textContent = `Wins = ${globalWins}`;
var globalLossesText = document.createElement('h3');
losses.textContent = `Losses = ${globalLosses}`;
var globalTiesText = document.createElement('h3');
ties.textContent = `Ties = ${globalTies}`;
