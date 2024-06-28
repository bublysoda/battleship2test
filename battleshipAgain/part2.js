import * as part1 from './part1.js'

//DOM STUFF
let board1ID = 1
function board1Maker(){
    let boardGrab = document.querySelector('.board1')
    let buttonSquare = document.createElement('button')
    buttonSquare.setAttribute("class", "boardSpace1")
    buttonSquare.setAttribute("id", board1ID)
    buttonSquare.textContent = board1ID
    board1ID++
    boardGrab.appendChild(buttonSquare)
}
let board2ID = 1
function board2Maker(){
    let boardGrab = document.querySelector('.board2')
    let buttonSquare = document.createElement('button')
    buttonSquare.setAttribute("class", "boardSpace2")
    buttonSquare.setAttribute("id", board2ID)
    buttonSquare.textContent = board2ID
    board2ID++
    boardGrab.appendChild(buttonSquare)
}

let board1Count = 0
while(board1Count != 100){
    board1Maker()
    board1Count++}

    let board2Count = 0
while(board2Count != 100){
    board2Maker()
    board2Count++}


//THESE ARE THE EVENT LISTENERS
function startGame(){
    let buttonStart = document.querySelector('.epic')
    buttonStart.addEventListener(onclick, part1.Gameboard())
}

if(board1Count == 100 && board2Count == 100){
    startGame()
}