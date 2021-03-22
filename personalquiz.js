var readlineSync = require("readline-sync");
const chalk = require("chalk");
var score=0;
//highest scores
var highScores = [
{
  name : "sneha",
  score : "8",
},
{
  name: "Komali",
  score: "8",
}
]

//questions for level 1
var questions=[
  {
  question:"Do I love travelling??",
  answer:["Yes","No"],
  right:1
  },
  {question:"I am not passionate of playing guitar",
  answer:["Yes","No"],
  right:1
  },
  {question:"I am a foodie.",
  answer:["Yes","No"],
  right:1
  },
  {question:"I am not lazy",
  answer:["Yes","No"],
  right:1
  }
  ]

//questions for level 2
  var levelTwo=[
  {
  question:"I prefer coffee over tea..",
  answer:["Yes","No"],
  right:1
  },
  {question:"I am a south Indian..",
  answer:["Yes","No"],
  right:1
  },
  {question:"I watch horror movies.",
  answer:["Yes","No"],
  right:2
  },
  {question:"I have a crush.",
  answer:["Yes","No"],
  right:1
  }
  ]

//from here game starts
function welcome()
{
var playerName = readlineSync.question("Hello there !! What is your name ??");
console.log(chalk.blue("Welcome to Yes/No quiz of mine " +chalk.green( playerName))+ (chalk.blue(" Let me know how many questions you answer correctly.")));
}
 //play function for level 1
function play(question,answer,right)
{
var useranswer = readlineSync.keyInSelect(answer);
if ((useranswer+1) === right){
score=score+1;
console.log(chalk.green("You are absolutely right!! Your score is:" +score));
} else {
score=score-1;
console.log(chalk.red("Oops!! You are Wrong.Your score is:" +score));
}
}

//function game access questions from questions function
function game()
{
for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    console.log("    ");
    console.log(chalk.yellow(currentQuestion.question));
    play(currentQuestion.question, currentQuestion.answer,currentQuestion.right);
  }
}

//shows score at end of game
function showScores() {
console.log("     ");
console.log("Results");
  console.log("YAY! You SCORED: ", score);
  
}

//it checks whether player is eligible for playing level 2 or not
function Check()
{
  if(score==4)
  {
    console.log(chalk.bgBlue("haha you knew me well !!  Answer Level 2 quickly. "));
    gameLevelTwo();
    finalcheck();
  }
  else if (score<4 && score>=2){
    console.log(chalk.red("Uff you need to know much more about me."));
    
  }
  else{
    console.log(chalk.red("oo god ...you are not my friend"));
  }
console.log("Highest scores are: ");
for(var j=0;j<highScores.length;j++)
{
var currentHighScorer = highScores[j];
console.log((currentHighScorer.name)+":"+(currentHighScorer.score))
}
}
//calling of all functions
welcome();
game();
showScores();
Check();

//checks answers for level 2 questions
function playing(question,answer,right)
{
var useranswer = readlineSync.keyInSelect(answer);
if ((useranswer+1) === right){
score=score+1;
console.log(chalk.green("You are absolutely right!! Your score is:" +score));
} 
else{
score=score-1;
console.log(chalk.red("Oops!! You are Wrong.Your score is:" +score));
}
}

//accesses level 2 questions from fucntion level2
function gameLevelTwo()
{
for (var k=0; k<levelTwo.length; k++) 
{
    var currentQuestion = levelTwo[k];
    console.log("   ")
    console.log(chalk.yellow(currentQuestion.question));
    playing(currentQuestion.question, currentQuestion.answer,currentQuestion.right);
}
}

function finalcheck()
{
  if(score==8)
  {
    console.log(chalk.bgBlue("Hurrah!! you have answered all answers correctly.Send me a screenshot so that I can add your name to highest scorer"));
  }
  else{
    console.log("You need to know much more about me");
  }
}
