console.log("Line One");
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = randomNumber(40, 60);
var enemyAttack = 12;

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var fight = function (enemyName) {
  console.log("before while");
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt(
      'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
    );

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        MATH.max(0, (playerMoney = playerMoney - 10));
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    var damage = randomNumber(playerAttack - 3, playerAttack);
    enemyHealth = MATH.max(0, enemyHealth - damage);
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      // award player money for winning
      playerMoney = playerMoney + 20;
      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerHealth = MATH.max(0, playerHealth - damage);
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  } // end of while loop
}; // end of fight function

var startGame = function () {
  //reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
      fight(pickedEnemyName);
      console.log("after fight");
      // if player is still alive and we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        // ask if they want to visit store before next round
        var storeConfirm = window.confirm(
          "The fight is over, visit the store before the next round?"
        );
        // if yes take them to store
        if (storeConfirm) {
          shop();
        }
      } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
    }
  }
  startGame();
}; // end of start game function

// function to end the entire game
var endGame = function () {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerMoney +
        "."
    );
  } else {
    window.alert("You've lost your robot in battle.");
  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function () {
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars");

        //increase health and decrease money
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
        break;
      }

    case "UPGRADE":
    case "upgrade":
      if (playerMoney >= 7) {
        window.alert("Upgrading players attack by 6 for 7");

        //increase attack and decrease money
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
        break;
      }

    case "LEAVE":
    case "leave":
      window.alert("Leaving the store");

      //do nothing and leave store
      break;

    default:
      window.alert("You did not pick a valid option");
      shop();
      break;
  }
};

// function to generate a random numeric value
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random()(max - min + 1) + min);

  return value;
};

startGame();
