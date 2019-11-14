var card = $(".quiz");

// Question set
var questions = [
  {
    question: "What number?",
    answers: ["One", "Two", "3", "Four"],
    correctAnswer: "3"
  },
  {
    question: "What letter?",
    answers: ["A", "B", "c", "D"],
    correctAnswer: "c"
  },
  {
    question: "What food?",
    answers: ["Pancakes", "Waffles", "Crepes", "Bagels"],
    correctAnswer: "Crepes"
  },
  {
    question: "What place?",
    answers: ["house", "Cabin", "beach house", "tree house"],
    correctAnswer: "beach house"
  },
  {
    question: "What Phone?",
    answers: ["Iphone", "Samsung", "Google", "One PLus"],
    correctAnswer: "One Plus"
  }
];


var timer;
var game = {
  correct: 0,
  incorrect: 0,
  counter: 40,

  
  start: function() {
    timer = setInterval(game.countdown, 100);

    $(".wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );

    $(".start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>HURRY</button>");
  },
  
  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },


  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $(".wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};


$(document).on("click", ".start", function() {
  game.start();
});


