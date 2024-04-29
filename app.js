let gameSeq = [];
let userSeq = [];

let started = false;
let Level = 0;
let head2 = document.querySelector("h2");

let btns = ["yellow","red","green","purple"];

document.addEventListener("keypress",function(){
    if(started == false){
      console.log("game started");
      started = true;

      levelUp();
    }
    
  
})
function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
  btn.classList.remove("flash");
},250)
}


function userFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250)
  }
function levelUp(){
    Level++;
    head2.innerText = `Level ${Level}`;

    let ranIdx = Math.floor(Math.random() * 3);
    let randColor = btns[ranIdx];
    gameSeq.push(randColor);
   
    let randBtn = document.querySelector(`.${randColor}`);
 btnFlash(randBtn);
 

}

function checkAns(){
  let idx = Level - 1;
  if(userSeq[idx]=== gameSeq[idx]){
    console.log("same key");

  }else{
    head2.innerText = "Game Over! Press any key to restart the game.";
  }
}

function btnPress(event){
   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
  btn.addEventListener("click",btnPress);
}




