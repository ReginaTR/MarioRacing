const player1 = {
    NAME: "Mario",
    VELOCITY: 4,
    MANEUVERABILITY: 3,
    POWER: 3,
    POINTS: 0,
};

const player2 = {
    NAME: "Luigi",
    VELOCITY: 3,
    MANEUVERABILITY: 4,
    POWER: 4,
    POINTS: 0,
};

async function logRollResut(characterName, block, diceResult, attribute) {
    console.log(`${characterName} rolled a die 🎲 of ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock(){
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = 'STRAIGHT';
            break;
    
        case random > 0.66:
            result = 'TURN';
            break;

        default:
            result = 'CLASH';
    }
    return result;
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
      console.log(`🏁 Round ${round}`);

      //draw a block 
      let block = await getRandomBlock();
      console.log(`Block ${block}`)
    
      //roll the dice
      let diceResult1 = await rollDice()
      let diceResult2 = await rollDice()

      //skill test
      let totalSkilltest1 = 0;
      let totalSkilltest2 = 0;

      if(block === "STRAIGHT"){
        totalSkilltest1 = diceResult1 + character1.VELOCITY;
        totalSkilltest2 = diceResult2 + character2.VELOCITY;

        await logRollResut(
            character1.NAME, 
            "velocity",
            diceResult1,
            character1.VELOCITY
        );
        
        await logRollResut(
            character2.NAME, 
            "velocity",
            diceResult2,
            character2.VELOCITY
        );
      }
      if(block === "TURN"){
        totalSkilltest1 = diceResult1 + character1.MANEUVERABILITY
        totalSkilltest2 = diceResult2 + character2.MANEUVERABILITY

        await logRollResut(
            character1.NAME, 
            "maneuverability",
            diceResult1,
            character1.MANEUVERABILITY
        );
        
        await logRollResut(
            character2.NAME, 
            "maneuverability",
            diceResult2,
            character2.MANEUVERABILITY
        );
      }
      if(block === "CLASH"){
        let powerResult1 = diceResult1 + character1.POWER
        let powerResult2 = diceResult2 + character2.POWER

        console.log(`${character1.NAME} clashed ${character2.NAME}!🥊`)

        await logRollResut(
            character1.NAME,
            "power",
            diceResult1,
            character1.POWER
        );
        
        await logRollResut(
            character2.NAME,
            "power",
            diceResult2,
            character2.POWER
        );

        if(powerResult1 > powerResult2 && character2.POINTS > 0) {
            console.log(`${character1.NAME} wins! 🎆 ${character2.NAME} lost 1 point. 🐢`)
            character2.POINTS--;
        };

        if(powerResult2 > powerResult1 && character1.POINTS > 0) {
            console.log(`${character2.NAME} wins! 🎆 ${character1.NAME} lost 1 point. 🐢`)
            character1.POINTS--;
        };

        console.log(powerResult1 === powerResult2 ? "It's a tie! Not a single point lost.": "");

      }

      //checking winner
      if (totalSkilltest1 > totalSkilltest2){
        console.log(`${character1.NAME} scored 1 point!`);
        character1.POINTS++;
      }else if(totalSkilltest2 > totalSkilltest1){
        console.log(`${character2.NAME} scored 1 point!`);
        character2.POINTS++;
      }

      console.log("---------------------------------------")
    }
}

async function declareWinner(character1, character2) {
    console.log("Final result:");
    console.log(`${character1.NAME}: ${character1.POINTS} point(s).`);
    console.log(`${character2.NAME}: ${character2.POINTS} point(s).`);

    if(character1.POINTS > character2.POINTS)
        console.log(`\n${character1.NAME} wins the race! Congratulations!!! 🏆`);
    else if(character2.POINTS > character1.POINTS)
        console.log(`\n${character2.NAME} wins the race! Congratulations!!! 🏆`);
    else console.log("The race ended in a tie.")
}

(async function main() {
    console.log(`🏁🚨 Racing between ${player1.NAME} and ${player2.NAME} starting...\n`);

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
}) ()

