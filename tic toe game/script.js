let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbutton");
let newb=document.querySelector("#new");
let msgc=document.querySelector(".msgc");
let msge=document.querySelector("#msge");

let turno = true;//player X,Player O

const winPattern = [
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]; 

const resetGame=()=>{
    turno=true;
    enableboxes();
    msgc.classList.add("hide");

};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turno==true)
            {
                box.innerText="O";
                turno=false;
            }
            else{
                box.innerText="X";
                turno=true;
            }
            box.disabled=true;

            checkwinner();
    });
    
});
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const disabledboxes=()=>{
    for(let box of boxes){
        box.diabled=true;
    }
};
const showWinner=(Winner)=>{
    msge.innerText=`Congratulations, Winner is`+(Winner);
    msgc.classList.remove("hide"); 
    disabledboxes();
};
const checkwinner=()=>{
    for(pattern of winPattern){
                                                                                   
        let pos1=boxes[pattern [0]].innerText;
        let pos2=boxes[pattern [1]].innerText;
        let pos3=boxes[pattern [2]].innerText;
       

        if(pos1 !="" && pos2 !="" && pos3 !="")
            {
                if (pos1===pos2&&pos2===pos3)
                    {
                        console.log("Winner",pos1);
                    }
                    showWinner(pos1);
                    disabledboxes();
    
            }
    }
};
newb.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);