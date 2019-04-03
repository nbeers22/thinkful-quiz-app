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
  usedQuestions = [];

  getQuestion(){
    // Grab random question from the question STORE and pass to setQuestion
    let randomIndex = Math.floor(Math.random() * STORE.length);
    let question    = STORE[randomIndex];

    // Remove the question from the STORE so a question cannot be repeated
    
    this.setQuestion(question);
  }

  setQuestion(questionObj){
    // Show question on the page as the next question
    let $container = $('#question-container');
    let letters    = "abcd";

    // Show the next question on the page
    $container.find('#question').text(questionObj.question);

    // Set the current question ID on the form to check the answer with later
    $container.find('form').data('question-id',questionObj.id);

    // Loop through each answer choice of the current question
    questionObj.choices.forEach( (choice,index) => {
    let answer = `<label for="${letters[index]}">
                    <input id="${letters[index]}" type="radio" name="answer" value="${choice}">
                    <span class="answer">${choice}</span>
                  </label>`

    // Prepend each choice to the form
    $('.answers').find('form').prepend(answer);
    });
  }

  static checkAnswer(id,answer){
    // find the question that was just answered by id
    let question = STORE.find( question => question.id === id );
    console.log(answer)

    if (question.answer === answer) {
      $('#answer-state').text('Correct!');

      // Increment total correct
      this.setTotalCorrect();

    }else{
      $('#answer-state').text('Wrong!')
      $('#correct-answer').text(`The correct answer was ${question.answer}`);
    }

    this.usedQuestions.push(STORE.splice(randomIndex,1));
    console.log(STORE)
    
    // if correct {
      // call setTotalCorrect to increment total correct
      // Flip card and say CORRECT!
    // }else{
      // Flip card and say incorrect. Also show question and answer
    // }

    // increment total questions asked
    this.setTotalQuestionsAsked();
  }

  getTotalCorrect(){
    // show this.totalCorrect on page
  }

  setTotalCorrect(){
    this.totalCorrect++;
  }

  getTotalQuestionsAsked(){
    
  }

  setTotalQuestionsAsked(){
    this.totalQuestionsAsked++;
  }
}

$(function(){
  $('#start').on('click',function(){
    let quiz = new Quiz;
    quiz.getQuestion();
    $(this).parent().slideUp();
    $('.quiz-container').fadeIn();

    $('#question-container').on('submit','form',function(event){
      event.preventDefault();
      
      // get the vaue of the checked radio button and submit it as the answer
      let answer = $(this).find('input[name="answer"]:checked').val();
      Quiz.checkAnswer($(this).data('question-id'),answer);
    });
  });
});

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












