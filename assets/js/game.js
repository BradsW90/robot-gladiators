window.alert("Welcome to Robot Gladiators!");
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];

var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
  //Alert players that they are starting the round
  var promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose"
  );

  // if player choses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    while (enemyHealth > 0) {
      // Subtract the value of 'playerAttack' from the value of the 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
      enemyHealth = enemyHealth - playerAttack;

      //Log a resulting message to the console so we know that is worked.
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

      //check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }
      //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
      playerHealth = playerHealth - enemyAttack;

      //Log a resulting message to the console so we know that it worked
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

      //check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
      } else {
        window.alert(
          playerName + " still has" + playerHealth + " health left."
        );
      }
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    var quit = window.confirm("Are you sure you want to quit?");
    if (quit) {
      playerMoney = playerMoney - 2;
      window.alert(playerName + " has decided to skip the fight. Goodbye!");
    } else {
      for (i = 0; i < enemyNames.length; i++) {
        fight(enemyNames[i]);
      }
    }
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }
};

for (i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}

//Game States

//"WIN" - Player robot has defeated all enemy-robots

// * Fight all enemy-robots

// * Defeat each enemy-robot

// "LOSE" - Player robot's health is zero or less
