console.log("Welcome to TicTacToe");
const Music= new Audio('music.mp3');
const turnTune= new Audio('ting.mp3');
const gameover = new Audio('gameover.mp3'); 
let turn="X";
let isgameOver= false;

// Function to change the turn
const changeTurn = ()=>{
    return turn=== 'X'?"O": "X"; 
}

// Function to check for a win Win;
const checkWin= ()=>{
    let boxtexts=document.getElementsByClassName('boxText');
    let wins=[
        [0,1,2, 2,   5,  0, "left" , 3],
        [3,4,5, 2,   15,  0, "left" , 3],
        [6,7,8, 2,   25,  0, "left" , 3],
        [0,3,6, 5,   5,  90, "left" , 3],
        [1,4,7, -10, 5, -90, "right" , 3],
        [2,5,8, 0,   5,  -90, "right" , 3],
        [0,4,8, 5,   5,  45, "left" , 3],
        [2,4,6, 0,   5,  -45, "right" ,3]
    ];
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText)&&(boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && boxtexts[e[0]].innerText !==''){
            document.querySelector('.info').innerText= boxtexts[e[1]].innerText +" Won";
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width= "150px";
            document.querySelector('.line').style.height= `${e[7]}px`;
            document.querySelector('.line').style.transform=`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector('.line').style.transformOrigin= e[6];
            isgameOver= true;
        }
    })
}


// Game logic is starts here
let boxes= document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxtext= element.querySelector('.boxText');
    element.addEventListener('click', (e)=>{
        if(boxtext.innerText=== ""){
            boxtext.innerText= turn;
            turn =changeTurn();
            turnTune.play();
            checkWin();
            if(!isgameOver){
                document.getElementsByClassName("info")[0].innerText= "Turn for "+ turn;
            }
        }
    })
})


// ADD onclick listner to listner button
reset.addEventListener('click', (element)=>{
    let boxtexts= document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(e=>{
        e.innerText="";
    })
    turn= "X";
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width= "0px";
    document.querySelector('.line').style.height= `0px`;
    isgameOver= false;
    document.getElementsByClassName("info")[0].innerText= "Turn for "+ turn;
}) 