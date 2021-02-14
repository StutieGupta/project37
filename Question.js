class Question {
    constructor(){
        this.title = createElement("h2");
        this.question = createElement("h2");
        this.option1 = createElement("h2");
        this.option2 = createElement("h2");
        this.option3 = createElement("h2");
        this.option4 = createElement("h2");
        this.button = createButton("Submit");
        this.input1 = createInput("Enter your name!");
        this.input2 = createInput("Type your option number!");
        this.yeet = createElement("h2");
        this.correct = createElement("h2")
    }

    hide(){
        this.title.hide();
        this.question.hide();
        //this.option1.hide();
        //this.option2.hide();
        //this.option3.hide();
        //this.option4.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
    }


    display(){
    this.title.html("STUTIE'S QUIZ");
    this.title.position(350,0);

    this.question.html("What is 3/7 chicken, 2/3 cat and 2/4 goat??");
    this.question.position(150,50);
    this.option1.html("1: Childbirth");
    this.option1.position(150,100);
    this.option2.html("2: Chicago");
    this.option2.position(150,150);
    this.option3.html("3: Chiffon");
    this.option3.position(450,100);
    this.option4.html("4: Chipmunk");
    this.option4.position(450,150);
    this.input1.position(140,240);
    this.input2.position(450,240)
    this.button.position(350, 300);
    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      person.answer = this.input2.value();
      person.name = this.input1.value();
      contestantCount+=1;
      person.index = contestantCount;
      person.update();
      person.updateCount(contestantCount);
      this.yeet.html("Your choice: " + person.answer)
      this.yeet.position(230, 300);
      if(person.answer==="2"){
        //fill("green");
        this.correct.html("CORRECT!!!");
        this.correct.position(300,330);
      }
      else{
        //fill("red");
        this.correct.html("WRONG!!!");
        this.correct.position(300,330);
      }
    });




}


}//end of js file