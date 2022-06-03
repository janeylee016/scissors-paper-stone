var numRoll = 0;
var numUserWin = 0;
var numComWin = 0;
var numDraws = 0;
var winPercent = 0;

var userName = "";
var mode = "";
var userInput = "";
var programInput = "";
var result = ";";

// choice of the program
var genRandomChoice = function () {
  var ranNum = Math.floor(Math.random() * 3) + 1;

  if (ranNum == 1) {
    return "scissors";
  } else if (ranNum == 2) {
    return "paper";
  } else if (ranNum == 3) {
    return "stone";
  }
};

// Draw conditions
var draw = function (programInput, userInput) {
  return (
    (programInput == "scissors" && userInput == "scissors") ||
    (programInput == "paper" && userInput == "paper") ||
    (programInput == "stone" && userInput == "stone") ||
    (programInput == "scissors" && userInput == "reverse scissors") ||
    (programInput == "paper" && userInput == "reverse paper") ||
    (programInput == "stone" && userInput == "reverse stone")
  );
};

// Winning conditions
var winner = function (programInput, userInput) {
  return (
    (programInput == "paper" && userInput == "scissors") ||
    (programInput == "stone" && userInput == "paper") ||
    (programInput == "scissors" && userInput == "stone") ||
    (programInput == "stone" && userInput == "reverse scissors") ||
    (programInput == "scissors" && userInput == "reverse paper") ||
    (programInput == "paper" && userInput == "reverse stone")
  );
};

// Define result statement
var resultOutput = function (
  flag,
  programInput,
  userInput,
  numRoll,
  numUserWin,
  numComWin,
  numDraws
) {
  if (flag == "draw") {
    return `The computer played ${programInput}. You played ${userInput}. It is a draw! <br><br> 
          Statistics: <br>
          Number of games played: ${numRoll} <br>
          You won ${numUserWin} times. <br> 
          Computer won ${numComWin} times. <br>
          Draws: ${numDraws}`;
  } else if (flag == "win") {
    return `The computer played ${programInput}. You played ${userInput}. You won! <br><br> 
          Statistics: <br>
          Number of games played: ${numRoll} <br>
          You won ${numUserWin} times. <br> 
          Computer won ${numComWin} times. <br>
          Draws: ${numDraws}`;
  } else if (flag == "lose") {
    return `The computer played ${programInput}. You played ${userInput}. The computer has won! <br><br> 
          Statistics: <br>
          Number of games played: ${numRoll} <br>
          You won ${numUserWin} times. <br> 
          Computer won ${numComWin} times. <br>
          Draws: ${numDraws}`;
  }
};

var main = function (input) {
  // if username is not set
  if (!userName) {
    // if user did not enter anything
    if (!input) {
      return "Please enter your name.";
    }
    userName = input;
    return `Hello ${userName}! <br> <br> Welcome to a game of scissors paper stone! <br><br> To begin, please enter "normal" or "reverse" to select a game mode.`;
  }

  // if game mode is not set
  if (!mode) {
    input = input.toLowerCase();
    // if user did not enter anything
    if (!input) {
      return 'Please enter "normal" or "reverse" to select a game mode.';
    }

    if (input != "normal" && input != "reverse") {
      return 'Please enter "normal" or "reverse" to select a game mode.';
    }

    mode = input;

    if (mode == "normal") {
      return "You are playing normal scissors paper stone. Please enter scissors, paper or stone.";
    } else if (mode == "reverse") {
      return "You are playing reverse scissors paper stone. Please enter reverse scissors, reverse paper, or reverse stone.";
    }
  }

  if (mode == "normal") {
    if (!userInput) {
      input = input.toLowerCase();
      if (!input) {
        return "You entered an invalid selection. Please enter scissors, paper, or stone.";
      }
      if (input != "scissors" && input != "paper" && input != "stone") {
        return "You entered an invalid selection. Please enter scissors, paper, or stone.";
      }
      if (input == "scissors" || input == "paper" || input == "stone") {
        userInput = input;
        numRoll = numRoll + 1;
        programInput = genRandomChoice();
        // programInput = "scissors";
        if (draw(programInput, userInput)) {
          numDraws += 1;
          flag = "draw";
          result = resultOutput(
            flag,
            programInput,
            userInput,
            numRoll,
            numUserWin,
            numComWin,
            numDraws
          );
          userInput = "";
          return result;
        } else if (winner(programInput, userInput)) {
          numUserWin += 1;
          flag = "win";
          result = resultOutput(
            flag,
            programInput,
            userInput,
            numRoll,
            numUserWin,
            numComWin,
            numDraws
          );
          userInput = "";
          return result;
        } else {
          numComWin += 1;
          flag = "lose";
          result = resultOutput(
            flag,
            programInput,
            userInput,
            numRoll,
            numUserWin,
            numComWin,
            numDraws
          );
          userInput = "";
          return result;
        }
      }
    }
  }

  if (mode == "reverse") {
    if (!userInput) {
      input = input.toLowerCase();
      if (!input) {
        return "Please enter reverse scissors, reverse paper, or reverse stone.";
      }
      if (
        input != "reverse scissors" &&
        input != "reverse paper" &&
        input != "reverse stone"
      ) {
        return "Please enter reverse scissors, reverse paper, or reverse stone.";
      }
      if (
        input == "reverse scissors" ||
        input == "reverse paper" ||
        input == "reverse stone"
      ) {
        userInput = input;
        numRoll = numRoll + 1;
        programInput = genRandomChoice();
        if (draw(programInput, userInput)) {
          numDraws += 1;
          flag = "draw";
          result = resultOutput(
            flag,
            programInput,
            userInput,
            numRoll,
            numUserWin,
            numComWin,
            numDraws
          );
          userInput = "";
          return result;
        } else if (winner(programInput, userInput)) {
          numUserWin += 1;
          flag = "win";
          console.log("Number of user win:", numUserWin);
          result = resultOutput(
            flag,
            programInput,
            userInput,
            numRoll,
            numUserWin,
            numComWin,
            numDraws
          );
          userInput = "";
          return result;
        } else {
          numComWin += 1;
          flag = "lose";
          result = resultOutput(
            flag,
            programInput,
            userInput,
            numRoll,
            numUserWin,
            numComWin,
            numDraws
          );
          userInput = "";
          return result;
        }
      }
    }
  }
};

/// testing codes
// var playGame = function () {
//   if (
//     userInput == "scissors" ||
//     userInput == "paper" ||
//     userInput == "stone" ||
//     userInput == "reversed scissors" ||
//     userInput == "reversed paper" ||
//     userInput == "reversed stone"
//   ) {
//     numRoll = numRoll + 1;
//     console.log("Number of plays:", numRoll);
//     var programInput = genRandomChoice();
//     // var reversedResult = reversedOutputResult(programInput, userInput);
//     // return reversedResult;
//     if (draw(programInput, input)) {
//       return `The computer played ${programInput}. You played ${userInput}. It is a draw!`;
//     } else if (winner(programInput, input)) {
//       numUserWin += 1;
//       console.log("Number of user win:", numUserWin);
//       return `The computer played ${programInput}. You played ${userInput}. You won! <br> User Won ${numUserWin} times. <br> Computer won ${numComWin} times.`;
//     } else {
//       numComWin += 1;
//       console.log("Number of com win:", numComWin);
//       return `The computer played ${programInput}. You played ${userInput}. The program has won! <br> User Won ${numUserWin} times. <br> Computer won ${numComWin} times.`;
//     }
//   } else {
//     return "Wrong input! To play normal mode, please enter scissors, paper or stone only. To play reversed mode, please enter reversed scissors, reversed paper or reversed stone only.";
//   }
// };
