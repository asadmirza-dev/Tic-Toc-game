// console.log("hi asad")
let boxes = document.querySelectorAll(".box");
let resetbtn = document.getElementById("reset-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.getElementById("msg");
let newgamebtn = document.getElementById("new-btn");

// X HU GA TU O AYI GA 
let turn0 = true 

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0 === true){
            box.innerText = "X"
            turn0= false;
        }
        else{
            box.innerText = "O"
            turn0 = true
        }
        box.disabled = true
        checkwinner()
    })
    
});
const disabledbtn = ()=>{
    for (const box of boxes) {
        box.disabled = true  
    }
}
const enablebtn = ()=>{
    for (const box of boxes) {
        box.disabled = false
        box.innerText = ""
    }
}
const showwinner = (Winner)=>{
    msg.innerText = "Congratulation winner is " + Winner
    msgcontainer.classList.remove("hide")
    disabledbtn()
}


const checkwinner = ()=>{
    for (let pattern of winpatterns) {
        let positon1 = boxes[pattern[0]].innerText
        let positon2 = boxes[pattern[1]].innerText
        let positon3 = boxes[pattern[2]].innerText
        if(positon1 != "" && positon2 != "" && positon3 != ""){
            if(positon1 === positon2 && positon2 === positon3){
                // alert("you are a winner")
                showwinner(positon1)
            }
}
        
    }
}
const restGame = ()=>{
    msgcontainer.classList.add("hide")
    turn0 = true
    enablebtn()
}
newgamebtn.addEventListener("click",restGame)
resetbtn.addEventListener("click",restGame)