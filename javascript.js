console.log("Hello World")


function getComputerChoice(){
    const choices = ["kivi", "paperi","sakset"];
    const randomIndex = Math.floor(Math.random()*choices.length);
    let tietokoneenValinta = choices[randomIndex];
    console.log("tietokoneen valinta on " + tietokoneenValinta);
    return tietokoneenValinta;
}


function getHumanChoice(){
   let valinta =  prompt("Valitse kivi, paperi tai sakset:");
console.log("valintasi on: " + valinta); 
return valinta.toLowerCase(); // Muutetaan valinta pieniksi kirjaimiksi varmuuden vuoksi
}

let playerScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {

    let greeting = "";

    if (humanChoice === computerChoice) {
        greeting = "Tasapeli";
    } else if (
        (humanChoice === "kivi" && computerChoice === "sakset") ||
        (humanChoice === "paperi" && computerChoice === "kivi") ||
        (humanChoice === "sakset" && computerChoice === "paperi")
    ) {
        greeting = "Pelaaja voittaa";
        playerScore++; // Lisätään piste pelaajalle
    } else {
        greeting = "Tietokone voittaa";
        computerScore++; // Lisätään piste tietokoneelle
    }

    console.log(greeting);
    return greeting;
            }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  console.log(`Pelaajan pisteet: ${playerScore}, Tietokoneen pisteet: ${computerScore}`);