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
    answer: "2-10-1",
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
    this.totalCorrect        = totalCorrect;
    this.currentQuestion     = currentQuestion;
    this.totalQuestionsAsked = totalQuestionsAsked;
    this.usedQuestions       = usedQuestions;
  }

  getQuestion(){
    // Grab random question from the question STORE and pass to setQuestion
    let randomIndex = Math.floor(Math.random() * STORE.length);
    let question    = STORE[randomIndex];
    
    this.setQuestion(question);
  }

  setQuestion(questionObj){
    // Show question on the page as the next question
    let $container = $('#question-container');
    let letters    = "dcba";

    // Show the next question on the page
    $container.find('#question').text(questionObj.question);

    // Set the current question ID on the form to check the answer with later
    $container.find('form').data('question-id',questionObj.id);

    // Loop through each answer choice of the current question
    questionObj.choices.forEach( (choice,index) => {
      let answer = `<div><input type="radio" name="answer" value="${choice}" id="${letters[index]}" class="form-radio"><label for="${letters[index]}">${choice}</label></div>`

      // Prepend each choice to the form
      $('.answers').find('form').prepend(answer);
    });

    $('.total-asked').text(this.getTotalQuestionsAsked() + 1);
  }

  checkAnswer(id,answer){
    // find the question that was just answered by id
    let question = STORE.find( question => question.id === id );
    let questionIndex = STORE.findIndex( question => question.id === id );

    // Check is answer was correct or not
    if (question.answer == answer) {
      $('#correct-answer').addClass('hide');
      $('#answer-state').text('Correct!');
      this.increaseTotalCorrect();
    }else{
      $('#correct-answer').removeClass('hide');
      $('#answer-state').text('Wrong!')
      $('#correct-answer').text(`The correct answer was ${question.answer}`);
    }

    $('#card-front,#card-back').toggleClass('hide')

    // Remove the question from STORE and put into usedQuestions
    this.removeQuestion(questionIndex);

    // increment total questions asked and total correct answers
    this.increaseTotalQuestionsAsked();

    // Calculate score
    this.showPercent(this.calculateScore( this.getTotalQuestionsAsked(), this.getTotalCorrect() ));

    // Check if quiz is done
    this.isComplete()
  }

  isComplete(){
    if(STORE.length === 0) this.showTotals();
  }

  showTotals(){
    $('#percent').text(this.calculateScore( this.getTotalQuestionsAsked(), this.getTotalCorrect() ) + '%');
    $('#card-front,#card-back').addClass('hide');
    $('#quiz-complete').toggleClass('hide');
  }

  removeQuestion(question){
    STORE.splice(question, 1);
  }

  getTotalCorrect(){
    return this.totalCorrect;
  }

  increaseTotalCorrect(){
    this.totalCorrect += 1;
    $('#total-correct').text(this.getTotalCorrect());
  }

  getTotalQuestionsAsked(){
    return this.totalQuestionsAsked;
  }

  increaseTotalQuestionsAsked(){
    this.totalQuestionsAsked += 1;
    $('#total-asked').text(this.getTotalQuestionsAsked());
  }

  calculateScore(numOfQuestions,numOfCorrectAnswers){
    let percent = (numOfCorrectAnswers / numOfQuestions) * 100;
    return percent.toFixed();
  }

  showPercent(score){
    $('#score').text( score + "%" );
  }

  static clearAnswers(){
    $('.answers').find('form div').remove();
  }

  static reloadQuiz(){
    location.reload();
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
      
      // get the value of the checked radio button and submit it as the answer
      let answer = $(this).find('input[name="answer"]:checked').val();
      if(!answer){
        $('#error').removeClass('hide');
        return false;
      }else{
        quiz.checkAnswer( $(this).data('question-id'), answer );
        $('#error').addClass('hide');
      }
    });

    // Get another question when user clicks next question
    $('#next-question').on('click',function(){
      Quiz.clearAnswers();
      quiz.getQuestion();
      $('#card-front,#card-back').toggleClass('hide');
    });


  });
  $('#retry').click(Quiz.reloadQuiz);

});
