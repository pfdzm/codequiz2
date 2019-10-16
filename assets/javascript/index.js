function quiz(questions) {
  let quiz = {};

  quiz.questions = questions;

  return quiz;
}

let quiz0 = quiz(questions);
document.querySelector("#start").addEventListener("click", function() {
  let p = document.createElement("p");
  p.textContent = quiz0.questions[0].title;
  quiz0.questions[0].choices.forEach(element => {
    let btn = document.createElement("button");
    btn.textContent = element;
    p.append(btn);
  });
  document.querySelector("#app").append(p);
});
