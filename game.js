b_colors = ["red","blue","green","yellow"];
chosenColor = [];
x = 1;
y = 0;
count = 0;
score = 0;
g_pattern = [];
p_pattern = [];

$(document).keypress(function(){
  nextSequence();
});


function nextSequence(){
  var r_no = Math.random()*4;
  var random_no = Math.floor(r_no);
  color = b_colors[random_no];
  g_pattern.push(color);
  $("#"+color).fadeOut(500);
  $("#"+color).fadeIn(500);
  playSound(color);
  $("h1").text("Level "+x);
  console.log(color);

}

function playSound(name){
  var sound = new Audio("sounds/"+name+".mp3");
  sound.play();
}

function animatePress(cColor){
  $("#"+cColor).addClass("pressed");
  setTimeout(function(){
    $("#"+cColor).removeClass("pressed");
  },100);

}

function check(){
  for(i=0;i<=y;i++){
    if(g_pattern[i]==p_pattern[i]){
      console.log("correct");

    }
    else{
      console.log("error");
      return 0;
    }
  }
  return 1;

}

function validation(){
  var checkC = check();
    x += 1;
    y += 1;
    count=0;
    p_pattern = [];
    if(checkC==1){
      score++;
      setTimeout(nextSequence(),4000);
    }
    else{
      $("h1").html("Game Over "+"Your Score "+score);
    }

}
$(".btn").click(function(a){
  chosenC = a.target.id;
  chosenColor.push(chosenC);
  playSound(chosenC);
  animatePress(chosenC);
  p_pattern.push(chosenC);
  count = count + 1;
  if(count==x){
    validation();
  }

});
