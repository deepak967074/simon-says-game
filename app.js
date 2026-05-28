let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","purple","green"];
 
let started = false;
let level = 0;

let h3 = document.querySelector("h3");

// press any key to started the game 


document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

// levelUp and fless the btn

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}
// userFlesh btn

function userFlesh(btn){
    btn.classList.add("userFlesh");
    setTimeout(function() {
        btn.classList.remove("userFlesh");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randInx = Math.floor(Math.random() *3);
    let randColor = btns[randInx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

// btnPress

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h3.innerHTML = `Game Over!    Your score was <b>${level}<b/> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }

}


function btnPress(){
    let btn = this;
    userFlesh(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);

}

// restart game 

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;


}