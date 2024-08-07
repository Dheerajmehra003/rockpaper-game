let userscore=0;
let compscore=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#your-score");
const compscorepara = document.querySelector("#comp-score");


const gencompchoice=()=>{
    //rock paper scissors
    const options=["rock","paper","scissors"];
    const idx = Math.floor(Math.random()*3);
    return(options[idx])
}

const drawgame=()=>{
    console.log("Game was draw");
    msg.innerText="Game draw . Play again"
       msg.style.backgroundColor="rgb(17, 8, 65)"
}

const showWinner=(userwin , userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win")
        msg.innerText=`you win your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green"
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose")
        msg.innerText=`you lose ${compchoice} beats your ${userchoice}`;
         msg.style.backgroundColor="red"
    }
}

const playgame=(userchoice)=>{
    console.log("userchoice ",userchoice)
    //generate computer choice
    const compchoice=gencompchoice();
    console.log("computerchoice",compchoice)

    if(userchoice===compchoice){
        drawgame();
    }
      else {
        let userwin = true;
       if (userchoice==="rock"){
            userwin = compchoice==="paper" ? false:true
        }
        else if (userchoice==="paper"){
            userwin = compchoice==="scissors" ? false:true
        }
        else {
            userwin = compchoice==="rock" ? false:true
        }
        showWinner(userwin , userchoice,compchoice);
}
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id")
        // console.log("choice was clicked",userchoice)
        playgame(userchoice);
    });
});
