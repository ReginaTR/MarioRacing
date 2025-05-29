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

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} rolled a die 🎲 of ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getClashPenalty() {
    return Math.random() < 0.5 ? { type: 'SHELL', value: 1 } : { type: 'BOMB', value: 2 };
}

async function getTurboBonus() {
    return Math.random() < 0.5 ? 1 : 0;
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
      let totalSkillTest1 = 0;
      let totalSkillTest2 = 0;

      if(block === "STRAIGHT"){
        totalSkillTest1 = diceResult1 + character1.VELOCITY;
        totalSkillTest2 = diceResult2 + character2.VELOCITY;

        await logRollResult(
            character1.NAME, 
            "velocity",
            diceResult1,
            character1.VELOCITY
        );
        
        await logRollResult(
            character2.NAME, 
            "velocity",
            diceResult2,
            character2.VELOCITY
        );
      }
      if(block === "TURN"){
        totalSkillTest1 = diceResult1 + character1.MANEUVERABILITY
        totalSkillTest2 = diceResult2 + character2.MANEUVERABILITY

        await logRollResult(
            character1.NAME, 
            "maneuverability",
            diceResult1,
            character1.MANEUVERABILITY
        );
        
        await logRollResult(
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

        await logRollResult(
            character1.NAME,
            "power",
            diceResult1,
            character1.POWER
        );
        
        await logRollResult(
            character2.NAME,
            "power",
            diceResult2,
            character2.POWER
        );

        if(powerResult1 > powerResult2 && character2.POINTS > 0) {
            const penalty = await getClashPenalty();
            character2.POINTS = Math.max(0, character2.POINTS - penalty.value);
            console.log(`${character1.NAME} wins! 🎆 ${character2.NAME} hit by a ${penalty.type}! Lost ${penalty.value} point(s). 🐢`);
    
            const turbo = await getTurboBonus();
            if (turbo) {
                character1.POINTS += turbo;
                console.log(`${character1.NAME} got a turbo! 🚀 +${turbo} point.`);
            }
        }

        if(powerResult2 > powerResult1 && character1.POINTS > 0) {
            const penalty = await getClashPenalty();
            character1.POINTS = Math.max(0, character1.POINTS - penalty.value);
            console.log(`${character2.NAME} wins! 🎆 ${character1.NAME} hit by a ${penalty.type}! Lost ${penalty.value} point(s). 🐢`);

            const turbo = await getTurboBonus();
            if (turbo) {
                character2.POINTS += turbo;
                console.log(`${character2.NAME} got a turbo! 🚀 +${turbo} point.`);
            }
        };

        console.log(powerResult1 === powerResult2 ? "It's a tie! No points awarded this round.": "");

      }

      //checking winner
      if (totalSkillTest1 > totalSkillTest2){
        console.log(`${character1.NAME} scored 1 point!`);
        character1.POINTS++;
      }else if(totalSkillTest2 > totalSkillTest1){
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

