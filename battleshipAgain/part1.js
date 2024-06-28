//Function used to make ships
export function Ship(length, hits, sink, name){
    this.length = length
    this.hits = hits
    this.sink = sink
    this.name = name
}

//A two through five health ship as well as the board

//Each space is one number regardless of row or column.  The board ranges from 1-100
export function Gameboard(){

const Destroyer = new Ship(2, 0, 0, 'Destroyer')
const Submarine = new Ship(3, 0, 0, 'Submarine')
const Cruiser = new Ship(3, 0, 0, 'Cruiser')
const Battleship = new Ship(4, 0, 0, 'Battleship')
const Carrier = new Ship(5, 0, 0, 'Carrier')
let coordsWithShips = []
let attackedCoords = [] 
function placeShip(shipName){
    let spaceTaker = shipName.length
    while(spaceTaker != 0){
        let occupiedSpace = prompt(`Enter the coordinate for your ship, the ${shipName.name}.  Pick ${spaceTaker} more space(s)`, 21)
        let information = [occupiedSpace, shipName]
        coordsWithShips.push(information)
        spaceTaker--
    }
    console.log(coordsWithShips)
}
placeShip(Destroyer)
placeShip(Submarine)
placeShip(Cruiser)
placeShip(Battleship)
placeShip(Carrier)
function receiveAttack(){
        
    let checker = 0
    let checkLength = coordsWithShips.length
    let attackCoords = clickedButton //THIS VARIABLE IS IN PART2 BECAUSE IT IS TIED TO AN EVENT LISTENER !!!STILL NEED TO CODE IT!!!
    if(attackedCoords.includes(attackCoords) == 1){
        console.log('This has already been attacked!')
        receiveAttack()
    }
    attackedCoords.push(attackCoords)
    function checkSpaces(){
        let hitCoord = coordsWithShips[checker][0]
        if(hitCoord == attackCoords){
            console.log(coordsWithShips)
            coordsWithShips[checker][1].hits++
            if(coordsWithShips[checker][1].hits == coordsWithShips[checker][1].length){
                coordsWithShips[checker][1].sink++
                console.log('The ship has been destroyed!  Blub, blub, blub!')
            }
        }
        else if(checker == checkLength){
            console.log('ERROR: REFER TO LOOP IN CHECKSPACES FUNCTION')
        }
        else{
            console.log(hitCoord)
            checker++
            console.log
            checkSpaces()
        }
    }
    checkSpaces()
    
}
}


//Make a player function

//STUFF IN HERE NEEDS TO BE EDITED ONCE WE GET THE UI UP TO PLAY THE GAME INSTEAD OF JUST TEST IT.


//POSSIBLE ISSUES WITH SCOPE AND IMPORT/EXPORT STATEMENTS WHEN CALLING FUNCTIONS SUCH AS PLACING SHIPS.  DO I NEED TO 
//DISREGARD TOP IN TERMS OF IT'S INSTRUCTIONS AND CHANGE SCOPE?  IS IT SUPPOSED TO BE MODIFIED?