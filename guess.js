let playBtn=document.getElementsByClassName("playBtn");
let container=document.getElementsByClassName("container");
let inpValue=document.getElementById("inpValue");
const square=document.getElementsByClassName("square");
const cross=document.getElementsByClassName("cross");
let error=document.getElementsByClassName("error");
let statu=document.getElementsByClassName("statu");
let statusMsg=document.getElementById("statusMsg");
let replay=document.getElementsByClassName("replay");
let replayBtn=document.getElementsByClassName("replayBtn");
let audio=document.getElementById("playAudio");
let djk=document.getElementsByClassName("djk");

let inpValueNbr=Number(inpValue)
let attemptsLeft = 3; // Set the number of attempts

function playDisplay(){
    playBtn[0].style.display="none";
    container[0].style.display="inline-block";
};


let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber)
console.log(typeof(randomNumber));
console.log(typeof(inpValueNbr))
function guessTheNumber() {
    delError()
    let inpValueNbr = parseInt(inpValue.value);
    
    if (inpValueNbr < 0 || inpValueNbr > 10 || inpValue.value.trim()==="") {
        error[0].style.display = "flex";
        statu[0].style.display = "none";
    } else if (inpValueNbr === randomNumber) {
        statu[0].style.display = "flex";
        statusMsg.innerText = "You Won";
        replay[0].style.display="flex";
    } else {
        attemptsLeft--;
        if (attemptsLeft > 0) {
            statu[0].style.display = "flex";
            statusMsg.innerText = `You have ${attemptsLeft} attempts remaining`;
        } else {
            statu[0].style.display = "flex";
            statusMsg.innerText = "You lost";
            replay[0].style.display="flex";
        }
    }
}

function delError(){
    if (error[0].style.display = "flex"){
        error[0].style.display = "none";
    }
}

function restart(){
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attemptsLeft = 3;
    error[0].style.display = "none";
    statu[0].style.display="none";
    deleteV()
    replay[0].style.display="none";
}

function deleteV(){
    inpValue.value="";
}
