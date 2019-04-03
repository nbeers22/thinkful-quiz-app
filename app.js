const STORE = [
  {
    id: 1,
    question: "Who was the two-time Heisman trophy winner at Ohio State?",
    answer: "Archie Griffin",
    choices: ["Eddie George", "Archie Griffin","Orlando Pace","Tippy Dye"]
  },
  {
    id: 2,
    question: "When was the last time Ohio State won the national championship?",
    answer: 2014,
    choices: [1998,2002,2010,2014]
  },
  {
    id: 3,
    question: "Who was the Buckeyes' coach in 2007?",
    answer: "Jim Tressel",
    choices: ["Earl Bruce", "John Cooper","Urban Meyer","Jim Tressel"]
  },
  {
    id: 4,
    question: "What was John Cooper's record against Michigan?",
    answer: "1-11-1",
    choices: ["1-12-1", "1-11-1","2-10-1","2-9-1"]
  },
  {
    id: 5,
    question: "Who was the starting quarterback for Ohio State during the 2002 season?",
    answer: "Craig Krenzel",
    choices: ["Joe Germaine", "Steve Bellisari","Craig Krenzel","Todd Boeckman"]
  },
  {
    id: 6,
    question: "In 1998, Ohio State lost only 1 game. Who did they lose to?",
    answer: "Michigan State",
    choices: ["Iowa", "Wisconsin","Michigan","Michgan State"]
  },
  {
    id: 7,
    question: "Which school did John Cooper coach prior to Ohio State?",
    answer: "Arizona State",
    choices: ["Arizona State", "California","New Mexico","UNLV"]
  },
  {
    id: 8,
    question: "Which year did Woody Hayes retire",
    answer: 1978,
    choices: [1976,1977,1978,1979]
  },
  {
    id: 9,
    question: "Which Buckeye made the 'pancake' famous?",
    answer: "Orlando Pace",
    choices: ["LeCharles Bentley", "Orlando Pace","Mike Doss","Bill Cower"]
  },
  {
    id: 10,
    question: "In the 1990s, the Buckeyes had several All-Americans. Which of the following Buckeye linebackers was never an All-American in the decade?",
    answer: "Greg Bellisari",
    choices: ["Andy Katzenmoyer", "Na'il Diggs","Steve Tovar","Greg Bellisari"]
  }
]

class Quiz{
  totalCorrect = 0;
  currentQuestion = '';
  totalQuestionsAsked = 0;

  construct(){

  }

  getQuestion(){
    // Grab random question from the question STORE and pass to setQuestion
  }

  setQuestion(question){
    // Show question on the page as the next question
  }

  checkAnswer(id,answer){
    // check (do a .find()) STORE to see if answer is correct by question id
    // Call getTotalQuestionsAsked() to increment total questions
    // if correct {
      // call setTotalCorrect to increment total correct
      // Flip card and say CORRECT!
    // }else{
      // Flip card and say incorrect. Also show question and answer
    // }

  }

  getTotalCorrect(){
    // show this.totalCorrect on page
  }

  setTotalCorrect(){
    this.totalCorrect += 1;
  }

  getTotalQuestionsAsked(){
    this.totalQuestionsAsked += 1;
  }


}

// On click of button to start the quiz
// quiz = new Quiz()

// Get question

// Show question

// Check the answer on submit click

// If question answered correctly {
  // Increment questions answered correctly
// }

// Increment total questions answered incorrectly or correctly
// Increment current question number

// Show next question

// When 10 questions have been answered, show results












