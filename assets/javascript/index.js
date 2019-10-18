var quiz = function(questions) {
  let index = 0;
  return {
    questions: questions,
    app: document.querySelector("#app"),
    init: function() {
      try {
        this.loadQ();
      } catch (error) {
        this.end();
      }
    },
    loadQ: function() {
      let p = document.createElement("p");
      // this div will be the cardbody
      let divCardBody = document.createElement("div");
      divCardBody.classList.add("card-body");
      // and this div will be the container for the cardbody
      let divCard = document.createElement("div");
      divCard.classList.add("card");
      p.textContent = this.questions[index].title;
      p.setAttribute("data-question-index", index);
      divCardBody.append(p);
      divCard.append(divCardBody);
      this.questions[index].choices.forEach((element, i) => {
        let btn = document.createElement("button");
        btn.textContent = element;
        btn.setAttribute("data-index", i);
        btn.classList.add("btn", "btn-warning");
        divCardBody.append(btn);
      });
      this.app.append(divCard);
      index++;
    },
    end: function() {
      let divCard = document.createElement("div");
      divCard.classList.add("card");

      let divCardBody = document.createElement("div");
      divCardBody.classList.add("card-body");

      let form = document.createElement("form");
      let input = document.createElement("input");
      input.textContent = "Your name";
      let button = document.createElement("button");
      button.textContent = "Submit";
      button.classList.add("btn", "btn-warning");
      form.append(input, button);
      divCardBody.append(form);
      divCard.append(divCardBody);
      this.app.append(divCard);
    }
  };
};

let game = quiz(questions);
document.querySelector("#start").addEventListener("click", function() {
  game.init();
});
