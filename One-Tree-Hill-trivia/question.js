class question{

    constructor(ques, option1, option2, option3, option4, correct){
        this.ques = ques;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
        this.correct = correct;

        this.flag = false;
    }

   

    display(){
      textSize (20);
      text (this.ques, 50, 150);
      text (this.option1, 70, 200);
      text (this.option2, 70, 250);
      text (this.option3, 70, 300);
      text (this.option4, 70, 350);
      a.visible = true;
      b.visible = true;
      c.visible = true;
      d.visible = true;
    }     
    
    
    scoreUpdate(){
        if (mousePressedOver(a) && this.flag){
          if(this.correct === 1 && this.flag){
            score+= 5;
            this.flag = false;
            setTimeout(function() { 
              console.log("1000 milliseconds have elapsed");
               gameState += 1; 
            }, 1000);
          }
          else {
            score-= 2;
            this.flag = false;
            setTimeout(function() { 
              console.log("1000 milliseconds have elapsed");
               gameState += 1; 
            }, 1000);
          }
          console.log("mouseA");
        }
        else if (mousePressedOver(b) && this.flag){
          if(this.correct === 2 && this.flag){
            score+= 5;
            this.flag = false;
            setTimeout(function() { 
              console.log("1000 milliseconds have elapsed");
               gameState += 1; 
            }, 1000);
          }
          else {
            score-= 2;
            this.flag = false;
            setTimeout(function() { 
              console.log("1000 milliseconds have elapsed");
               gameState += 1; 
            }, 1000);
          }
          console.log("mouseB");
        }
        else if (mousePressedOver(c) && this.flag){
          if(this.correct === 3 && this.flag){
            score+= 5;
            this.flag = false;
            setTimeout(function() { 
              console.log("1000 milliseconds have elapsed");
               gameState += 1; 
            }, 1000);
          }
          else {
            score-= 2;
            this.flag = false;
            setTimeout(function() { 
              console.log("1000 milliseconds have elapsed");
               gameState += 1; 
            }, 1000);
          }
          console.log("mouseC");
        }
        else if (mousePressedOver(d) && this.flag){
          if(this.correct === 4 && this.flag){
            score+= 5;
            this.flag = false;
            setTimeout(function() { 
              console.log("1000 milliseconds have elapsed");
               gameState += 1; 
            }, 1000);
          }
          else {
            score-= 2;
            this.flag = false;
            setTimeout(function() { 
              console.log("1000 milliseconds have elapsed");
               gameState += 1; 
            }, 1000);
          }
          console.log("mouseD");
        }
    }
}

