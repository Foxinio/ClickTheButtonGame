function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let index = 0;
const responseArray = ["Click me!",
  "Try again!",
  "Come on, you almost did it.",
  "You're almost there, try again.",
  "Nice try, but not quite.",
  "Quit trying, DO It!",
  "You are not even trying.",
  "DO IT",
  "Man, that's just lame"];

function onButtonClicked(){
  let button = document.getElementById("change_button");
  if(button.disabled) return;
  if(index === 0){
    index = 0;
    shuffleArray(responseArray);
  }

  let nextResponse = responseArray[index];
  index = (index + 1) % responseArray.length;

  button.textContent = nextResponse;


  let containerInfo = document.getElementsByClassName("container")[0].getBoundingClientRect();
  let nextPosition = {
    x: Math.floor(Math.random()*(containerInfo.width - button.style.width - 40)+20),
    y: Math.floor(Math.random()*(containerInfo.height - button.style.height - 40)+20)
  };

  document.getElementById("endText").style.top = (containerInfo.height/2).toString()+"px";

  while(nextPosition.x > containerInfo.width - 100
    ||  nextPosition.y > containerInfo.height - 100){
    nextPosition = {
      x: Math.floor(Math.random()*(containerInfo.width - button.style.width - 40)+20),
      y: Math.floor(Math.random()*(containerInfo.height - button.style.height - 40)+20)
    };
  }

  button.style.left = nextPosition.x.toString() + "px";
  button.style.top = nextPosition.y.toString() + "px";

  if(Math.random()*100 < 10){
    setTimeout(() => { playSound(); },0);
    button.disabled = true;
    button.hidden = true;
    document.body.style.background = "black";
    setTimeout(() => {
      document.getElementById("endText").hidden = false;
    }, 1500);
  }
}

function playSound(){
  let sound = new Audio('soundbite.mp3');
  sound.volume = 0.35;
  sound.play();
  console.log("XD");
}
