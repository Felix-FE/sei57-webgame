// VARIABLES

// Element collector
const gridP = document.querySelector('#playerGrid')
const gridC = document.querySelector('#computerGrid')

const cellsPlayer = []
const cellsComp = []

const playerShips = [
  {
    shipClass: 'destroyer',
    shipLocation: [],
    shipDamage: [],
    shipAssignCommandH: function(e){
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value'))])
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value')) + 1])
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value')) - 1])
    },
    shipAssignCommandV: function(e){
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value'))])
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value')) + 10])
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value')) - 10])
    },
  },
  {
    shipClass: 'destroyer',
    shipLocation: [],
    shipDamage: [],
    shipAssignCommandH: function(e){
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value'))])
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value')) + 1])
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value')) - 1])
    },
    shipAssignCommandV: function(e){
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value'))])
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value')) + 10])
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value')) - 10])
    },
  },
  {
    shipClass: 'Carrier',
    shipLocation: [],
    shipDamage: [],
    shipAssignCommandH: function(e){
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value'))])
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value')) + 1])
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value')) + 2])
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value')) - 1])
    },
    shipAssignCommandV: function(e){
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value'))])
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value')) + 10])
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value')) + 20])
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value')) - 10])
    },
  },
  {
    shipClass: 'cruiser',
    shipLocation: [],
    shipDamage: [],
    shipAssignCommandH: function(e){
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value'))])
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value')) + 1])
    },
    shipAssignCommandV: function(e){
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value'))])
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value')) + 10])
    },
  },
  {
    shipClass: 'corvette',
    shipLocation: [],
    shipDamage: [],
    shipAssignCommandH: function(e){
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value'))])
    },
    shipAssignCommandV: function(e){
      selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value'))])
    },
  }
]


let shipIndex = 0


const compShips = [
  {
    shipClass: 'destroyer',
    shipLocation: [],
    shipDamage: [],
    shipAssignCommandH: function(currentRandS){
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value'))])
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value')) + 1])
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value')) - 1])
    },
    shipAssignCommandV: function(currentRandS){
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value'))])
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value')) + 10])
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value')) - 10])
    },
  },
  {
    shipClass: 'destroyer',
    shipLocation: [],
    shipDamage: [],
    shipAssignCommandH: function(currentRandS){
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value'))])
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value')) + 1])
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value')) - 1])
    },
    shipAssignCommandV: function(currentRandS){
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value'))])
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value')) + 10])
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value')) - 10])
    },
  },
  {
    shipClass: 'Carrier',
    shipLocation: [],
    shipDamage: [],
    shipAssignCommandH: function(currentRandS){
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value'))])
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value')) + 1])
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value')) + 2])
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value')) - 1])
    },
    shipAssignCommandV: function(currentRandS){
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value'))])
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value')) + 10])
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value')) + 20])
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value')) - 10])
    },
  },
  {
    shipClass: 'cruiser',
    shipLocation: [],
    shipDamage: [],
    shipAssignCommandH: function(currentRandS){
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value'))])
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value')) + 1])
    },
    shipAssignCommandV: function(currentRandS){
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value'))])
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value')) + 10])
    },
  },
  {
    shipClass: 'corvette',
    shipLocation: [],
    shipDamage: [],
    shipAssignCommandH: function(currentRandS){
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value'))])
    },
    shipAssignCommandV: function(currentRandS){
      selectionSetComp.push(cellsComp[parseFloat(currentRandS.getAttribute('value'))])
    },
  }
]

const invalidCellsPlayer = []

// Element variables
const cellWidth = 10
const totalCells = cellWidth * cellWidth
// Set-up Functions

function createGrid() {
  for (let i = 0; i < totalCells; i++){
    const gridCell = document.createElement('div')
    const cellIndex = document.createElement('h1')
    const cellText = document.createTextNode(i)
    gridCell.setAttribute('value', i)
    cellIndex.appendChild(cellText)
    gridP.appendChild(gridCell)
    gridCell.appendChild(cellIndex)
    cellsPlayer.push(gridCell)


    const gridCellComp = document.createElement('div')
    const cellIndexComp = document.createElement('h1')
    const cellTextComp = document.createTextNode(i)
    gridCellComp.setAttribute('value', i)
    cellIndexComp.appendChild(cellTextComp)
    gridC.appendChild(gridCellComp)
    gridCellComp.appendChild(cellIndexComp)
    cellsComp.push(gridCellComp)
  }

}
const rowArray = []

// Create the row array for collision checking

function rowAssignment(){
  for (let rowNum = 0; rowNum < 10; rowNum++){
    const currentArray = []
    for (let divIndex = 0; divIndex < 10; divIndex++){
      currentArray.push(cellsPlayer[parseInt(`${rowNum}${divIndex}`)])
    }
    rowArray.push(currentArray)
  }
  console.log(rowArray)
}

// Create the column array for collision detection

const columnArray = []

function columnAssignment(){
  for (let columnNum = 0; columnNum < 10; columnNum++){
    const currentArray = []
    for (let divIndex = 0; divIndex < 10; divIndex++){
      currentArray.push(cellsPlayer[parseInt(`${divIndex}${columnNum}`)])
    }
    columnArray.push(currentArray)
  }
  console.log(columnArray)
}

// comp row Assignment

const rowArrayComp = []

function rowAssignmentComp(){
  for (let rowNum = 0; rowNum < 10; rowNum++){
    const currentArray = []
    for (let divIndex = 0; divIndex < 10; divIndex++){
      currentArray.push(cellsComp[parseInt(`${rowNum}${divIndex}`)])
    }
    rowArrayComp.push(currentArray)
  }
  console.log(rowArrayComp)
}

// Create the column array for collision detection

const columnArrayComp = []

function columnAssignmentComp(){
  for (let columnNum = 0; columnNum < 10; columnNum++){
    const currentArray = []
    for (let divIndex = 0; divIndex < 10; divIndex++){
      currentArray.push(cellsComp[parseInt(`${divIndex}${columnNum}`)])
    }
    columnArrayComp.push(currentArray)
  }
  console.log(columnArrayComp)
}





let directionSelection = 'V'

let selectionSet = []

let selectionSetPossible = null


function playerSelection(e){
  
  selectionSet.forEach(cell => {
    if (cell !== undefined){ 
      cell.classList.remove('selectedValid')
    }
  })

  selectionSet = []
  selectionSetPossible = true

  if (shipIndex <= 4){
    if (directionSelection === 'H'){

      playerShips[shipIndex].shipAssignCommandH(e)
      
      if (parseFloat(e.target.getAttribute('value')) < 10){
        selectionSet.forEach(element => {if (rowArray[0].includes(element) === false || invalidCellsPlayer.includes(element)){
          selectionSetPossible = false}})
      } else if (parseFloat(e.target.getAttribute('value')) < 20){
        selectionSet.forEach(element => {if (rowArray[1].includes(element) === false || invalidCellsPlayer.includes(element)){
          selectionSetPossible = false}})
      } else if (parseFloat(e.target.getAttribute('value')) < 30){
        selectionSet.forEach(element => {if (rowArray[2].includes(element) === false || invalidCellsPlayer.includes(element)){
          selectionSetPossible = false}})
      } else if (parseFloat(e.target.getAttribute('value')) <40){
        selectionSet.forEach(element => {if (rowArray[3].includes(element) === false || invalidCellsPlayer.includes(element)){
          selectionSetPossible = false}})
      } else if (parseFloat(e.target.getAttribute('value')) < 50){
        selectionSet.forEach(element => {if (rowArray[4].includes(element) === false || invalidCellsPlayer.includes(element)){
          selectionSetPossible = false}})
      } else if (parseFloat(e.target.getAttribute('value')) < 60){
        selectionSet.forEach(element => {if (rowArray[5].includes(element) === false || invalidCellsPlayer.includes(element)){
          selectionSetPossible = false}})
      } else if (parseFloat(e.target.getAttribute('value')) < 70){
        selectionSet.forEach(element => {if (rowArray[6].includes(element) === false || invalidCellsPlayer.includes(element)){
          selectionSetPossible = false}})
      } else if (parseFloat(e.target.getAttribute('value')) < 80){
        selectionSet.forEach(element => {if (rowArray[7].includes(element) === false || invalidCellsPlayer.includes(element)){
          selectionSetPossible = false}})
      } else if (parseFloat(e.target.getAttribute('value')) < 90){
        selectionSet.forEach(element => {if (rowArray[8].includes(element) === false || invalidCellsPlayer.includes(element)){
          selectionSetPossible = false}})
      } else if (parseFloat(e.target.getAttribute('value')) < 100){
        selectionSet.forEach(element => {if (rowArray[9].includes(element) === false || invalidCellsPlayer.includes(element)){
          selectionSetPossible = false}})
      }

    } else if (directionSelection === 'V'){

      playerShips[shipIndex].shipAssignCommandV(e)

      if ((parseFloat(e.target.getAttribute('value')) % 10) === 0){
        selectionSet.forEach(element => {if (columnArray[0].includes(element) === false || invalidCellsPlayer.includes(element)){
          selectionSetPossible = false}})
      } else if ((parseFloat(e.target.getAttribute('value')) % 10) === 1){
        selectionSet.forEach(element => {if (columnArray[1].includes(element) === false || invalidCellsPlayer.includes(element)){
          selectionSetPossible = false}})
      } else if ((parseFloat(e.target.getAttribute('value')) % 10) === 2){
        selectionSet.forEach(element => {if (columnArray[2].includes(element) === false || invalidCellsPlayer.includes(element)){
          selectionSetPossible = false}})
      } else if ((parseFloat(e.target.getAttribute('value')) % 10) === 3){
        selectionSet.forEach(element => {if (columnArray[3].includes(element) === false || invalidCellsPlayer.includes(element)){
          selectionSetPossible = false}})
      } else if ((parseFloat(e.target.getAttribute('value')) % 10) === 4){
        selectionSet.forEach(element => {if (columnArray[4].includes(element) === false || invalidCellsPlayer.includes(element)){
          selectionSetPossible = false}})
      } else if ((parseFloat(e.target.getAttribute('value')) % 10) === 5){
        selectionSet.forEach(element => {if (columnArray[5].includes(element) === false || invalidCellsPlayer.includes(element)){
          selectionSetPossible = false}})
      } else if ((parseFloat(e.target.getAttribute('value')) % 10) === 6){
        selectionSet.forEach(element => {if (columnArray[6].includes(element) === false || invalidCellsPlayer.includes(element)){
          selectionSetPossible = false}})
      } else if ((parseFloat(e.target.getAttribute('value')) % 10) === 7){
        selectionSet.forEach(element => {if (columnArray[7].includes(element) === false || invalidCellsPlayer.includes(element)){
          selectionSetPossible = false}})
      } else if ((parseFloat(e.target.getAttribute('value')) % 10) === 8){
        selectionSet.forEach(element => {if (columnArray[8].includes(element) === false || invalidCellsPlayer.includes(element)){
          selectionSetPossible = false}})
      } else if ((parseFloat(e.target.getAttribute('value')) % 10) === 9){
        selectionSet.forEach(element => {if (columnArray[9].includes(element) === false || invalidCellsPlayer.includes(element)){
          selectionSetPossible = false}})
      }
    } 
    if (selectionSetPossible === true){
      selectionSet.forEach(cell => {
        if (cell !== undefined){
          cell.classList.add('selectedValid')
        }
      })
    }
  }  
}
  
function rotateShip(e){
  if (e.key === 'r'){
    if (directionSelection === 'V'){
      directionSelection = 'H'
    } else {
      directionSelection = 'V'
    }
  }
}



function deployShip(){
  if (shipIndex <= 5 && selectionSetPossible === true){
    selectionSet.forEach(cell => {
      playerShips[shipIndex].shipLocation.push(cell)
      invalidCellsPlayer.push(cell)
      cell.classList.add('shipDeployed')
    })
    shipIndex += 1
    if (shipIndex === 5){
      console.log('you are ready')
      cellsComp.forEach(cell => cell.addEventListener('click',playerPick))
      playerTurn  = true
    }
  }
} 

createGrid()
rowAssignment()
columnAssignment()
rowAssignmentComp()
columnAssignmentComp()

cellsPlayer.forEach(cell => cell.addEventListener('mouseover', playerSelection))
document.addEventListener('keyup', rotateShip)
document.addEventListener('click', deployShip)


// Testing and Initialisation

let selectionSetComp = []


const invalidCellsComp = []


function randSelection(){
  return cellsComp[Math.floor(Math.random() * 100)]
}

function randDirection(){
  return Math.floor(Math.random() * 2)
}

function computerSelection(){
  
  compShips.forEach(ship => {
    console.log(ship.shipClass)
    selectionSetComp = []
    let selectionSetPossibleComp = false

    while (selectionSetPossibleComp === false){
      selectionSetComp = []
      const currentRandS = randSelection()
      const currentRandD = randDirection()

      if (currentRandD === 0){
        ship.shipAssignCommandH(currentRandS)
        console.log(selectionSetComp)
        if (parseFloat(currentRandS.getAttribute('value')) < 10){
          if ( !(selectionSetComp.some(element => invalidCellsComp.includes(element) )) === (selectionSetComp.every(element => rowArrayComp[0].includes(element) ))){selectionSetPossibleComp = true}
        } else if (parseFloat(currentRandS.getAttribute('value')) < 20){
          if ( !(selectionSetComp.some(element => invalidCellsComp.includes(element) )) === (selectionSetComp.every(element => rowArrayComp[1].includes(element) ))){selectionSetPossibleComp = true}
        } else if (parseFloat(currentRandS.getAttribute('value')) < 30){
          if ( !(selectionSetComp.some(element => invalidCellsComp.includes(element) )) === (selectionSetComp.every(element => rowArrayComp[2].includes(element) ))){selectionSetPossibleComp = true}
        } else if (parseFloat(currentRandS.getAttribute('value')) < 40){
          if ( !(selectionSetComp.some(element => invalidCellsComp.includes(element) )) === (selectionSetComp.every(element => rowArrayComp[3].includes(element) ))){selectionSetPossibleComp = true}
        } else if (parseFloat(currentRandS.getAttribute('value')) < 50){
          if ( !(selectionSetComp.some(element => invalidCellsComp.includes(element) )) === (selectionSetComp.every(element => rowArrayComp[4].includes(element) ))){selectionSetPossibleComp = true}
        } else if (parseFloat(currentRandS.getAttribute('value')) < 60){
          if ( !(selectionSetComp.some(element => invalidCellsComp.includes(element) )) === (selectionSetComp.every(element => rowArrayComp[5].includes(element) ))){selectionSetPossibleComp = true}
        } else if (parseFloat(currentRandS.getAttribute('value')) < 70){
          if ( !(selectionSetComp.some(element => invalidCellsComp.includes(element) )) === (selectionSetComp.every(element => rowArrayComp[6].includes(element) ))){selectionSetPossibleComp = true}
        } else if (parseFloat(currentRandS.getAttribute('value')) < 80){
          if ( !(selectionSetComp.some(element => invalidCellsComp.includes(element) )) === (selectionSetComp.every(element => rowArrayComp[7].includes(element) ))){selectionSetPossibleComp = true}
        } else if (parseFloat(currentRandS.getAttribute('value')) < 90){
          if ( !(selectionSetComp.some(element => invalidCellsComp.includes(element) )) === (selectionSetComp.every(element => rowArrayComp[8].includes(element) ))){selectionSetPossibleComp = true}
        } else if (parseFloat(currentRandS.getAttribute('value')) < 100){
          if ( !(selectionSetComp.some(element => invalidCellsComp.includes(element) )) === (selectionSetComp.every(element => rowArrayComp[9].includes(element) ))){selectionSetPossibleComp = true}
        }

      } else if (currentRandD === 1){
        ship.shipAssignCommandV(currentRandS)
        console.log(selectionSetComp)
        if (parseFloat(currentRandS.getAttribute('value') % 10) === 0){                             
          if ( !(selectionSetComp.some(element => invalidCellsComp.includes(element) )) === (selectionSetComp.every(element => columnArrayComp[0].includes(element) ))){selectionSetPossibleComp = true}
        } else if (parseFloat(currentRandS.getAttribute('value') % 10) === 1){
          if ( !(selectionSetComp.some(element => invalidCellsComp.includes(element) )) === (selectionSetComp.every(element => columnArrayComp[1].includes(element) ))){selectionSetPossibleComp = true}
        } else if (parseFloat(currentRandS.getAttribute('value') % 10) === 2){
          if ( !(selectionSetComp.some(element => invalidCellsComp.includes(element) )) === (selectionSetComp.every(element => columnArrayComp[2].includes(element) ))){selectionSetPossibleComp = true}
        } else if (parseFloat(currentRandS.getAttribute('value') % 10) === 3){
          if ( !(selectionSetComp.some(element => invalidCellsComp.includes(element) )) === (selectionSetComp.every(element => columnArrayComp[3].includes(element) ))){selectionSetPossibleComp = true}
        } else if (parseFloat(currentRandS.getAttribute('value') % 10) === 4){
          if ( !(selectionSetComp.some(element => invalidCellsComp.includes(element) )) === (selectionSetComp.every(element => columnArrayComp[4].includes(element) ))){selectionSetPossibleComp = true}
        } else if (parseFloat(currentRandS.getAttribute('value') % 10) === 5){
          if ( !(selectionSetComp.some(element => invalidCellsComp.includes(element) )) === (selectionSetComp.every(element => columnArrayComp[5].includes(element) ))){selectionSetPossibleComp = true}
        } else if (parseFloat(currentRandS.getAttribute('value') % 10) === 6){
          if ( !(selectionSetComp.some(element => invalidCellsComp.includes(element) )) === (selectionSetComp.every(element => columnArrayComp[6].includes(element) ))){selectionSetPossibleComp = true}
        } else if (parseFloat(currentRandS.getAttribute('value') % 10) === 7){
          if ( !(selectionSetComp.some(element => invalidCellsComp.includes(element) )) === (selectionSetComp.every(element => columnArrayComp[7].includes(element) ))){selectionSetPossibleComp = true}
        } else if (parseFloat(currentRandS.getAttribute('value') % 10) === 8){
          if ( !(selectionSetComp.some(element => invalidCellsComp.includes(element) )) === (selectionSetComp.every(element => columnArrayComp[8].includes(element) ))){selectionSetPossibleComp = true}
        } else if (parseFloat(currentRandS.getAttribute('value') % 10) === 9){
          if ( !(selectionSetComp.some(element => invalidCellsComp.includes(element) )) === (selectionSetComp.every(element => columnArrayComp[9].includes(element) ))){selectionSetPossibleComp = true}
        }
      }
      console.log(selectionSetPossibleComp)     
    }
    selectionSetComp.forEach(cell => {
      if (cell !== undefined){
        ship.shipLocation.push(cell)
        cell.classList.add('shipDeployed')
        invalidCellsComp.push(cell)
        
      }
    })
  })
}

computerSelection()

let playerTurn = null

let playerShipsHit = 0
let compShipsHit = 0

let previousMoveComp = null
let previousMoveHit = false

const selectedSquaresComp = []
const selectedSquaresPlayer = []

function randSelectionPlayer(){
  return cellsPlayer[Math.floor(Math.random() * 100)]
}

// let originalHit = []

const Rvalue = 1
const Lvalue = 1
const Uvalue = 10
const Dvalue = 10

let foundShip = []
let directionAttempt = 0


function computerMove(){
  let canMove = false
  let currentRand = null
  
  if (previousMoveHit === false){

    while (canMove === false && selectedSquaresComp.length < 100){
      currentRand = randSelectionPlayer()
      console.log(currentRand)
      if (selectedSquaresComp.includes(currentRand) === false){
        canMove = true
      }
    }
    if (String(currentRand.classList) === 'shipDeployed'){
      selectedSquaresComp.push(currentRand)
      currentRand.classList.add('shipHit')
      playerTurn = true
      previousMoveHit = true
      previousMoveComp = currentRand
      foundShip.push(cellsPlayer[parseFloat(previousMoveComp.getAttribute('value')) + Rvalue])
      foundShip.push(cellsPlayer[parseFloat(previousMoveComp.getAttribute('value')) + Dvalue])
      foundShip.push(cellsPlayer[parseFloat(previousMoveComp.getAttribute('value')) - Lvalue])
      foundShip.push(cellsPlayer[parseFloat(previousMoveComp.getAttribute('value')) - Uvalue])
    } else {
      currentRand.classList.add('shipHit')
      selectedSquaresComp.push(currentRand)
      playerTurn = true
      canMove = false
    }
    
  } else if (previousMoveHit === true) {

    while (canMove === false && selectedSquaresComp.length < 100){
      currentRand = randSelectionPlayer()
      console.log(currentRand)
      if (selectedSquaresComp.includes(currentRand) === false){
        canMove = true
      }
    }

    console.log('pooopy')
    if (directionAttempt === 0){

      if (selectedSquaresComp.includes(foundShip[0]) === false){
        if (String(foundShip[0].classList) === 'shipDeployed'){
          foundShip[0].classList.add('shipHit')
          selectedSquaresComp.push(foundShip[0])
          previousMoveComp = foundShip[0]
          playerTurn = true
          directionAttempt = 1
          previousMoveHit = true
        } else {
          foundShip[0].classList.add('shipHit')
          selectedSquaresComp.push(foundShip[0])
          previousMoveComp = foundShip[0]
          playerTurn = true
        }

      } else if (selectedSquaresComp.includes(foundShip[1]) === false){
        if (String(foundShip[1].classList) === 'shipDeployed'){
          foundShip[1].classList.add('shipHit')
          selectedSquaresComp.push(foundShip[1])
          previousMoveComp = foundShip[1]
          playerTurn = true
          directionAttempt = 4
          previousMoveHit = true
        } else {
          foundShip[1].classList.add('shipHit')
          selectedSquaresComp.push(foundShip[1])
          previousMoveComp = foundShip[1]
          playerTurn = true
        }

      } else if (selectedSquaresComp.includes(foundShip[2]) === false){
        if (String(foundShip[2].classList) === 'shipDeployed'){
          foundShip[2].classList.add('shipHit')
          selectedSquaresComp.push(foundShip[2])
          previousMoveComp = foundShip[2]
          playerTurn = true
          directionAttempt = 2
          previousMoveHit = true
        } else {
          foundShip[2].classList.add('shipHit')
          selectedSquaresComp.push(foundShip[2])
          previousMoveComp = foundShip[2]
          playerTurn = true
        }

      } else if (selectedSquaresComp.includes(foundShip[3]) === false){
        if (String(foundShip[3].classList) === 'shipDeployed'){
          foundShip[3].classList.add('shipHit')
          selectedSquaresComp.push(foundShip[3])
          previousMoveComp = foundShip[3]
          playerTurn = true
          directionAttempt = 3
          previousMoveHit = true
        } else {
          foundShip[3].classList.add('shipHit')
          selectedSquaresComp.push(foundShip[3])
          previousMoveComp = foundShip[3]
          playerTurn = true
          previousMoveHit = false
        }

      } else {
        selectedSquaresComp.push(currentRand)
        currentRand.classList.add('shipHit')
        playerTurn = true
        previousMoveComp = currentRand
      }
    } else if (directionAttempt === 1){
      const nextValueR = cellsPlayer[parseFloat(previousMoveComp.getAttribute('value')) + Rvalue]
      if (selectedSquaresComp.includes(nextValueR) === false &&  nextValueR !== undefined){
        if (String(nextValueR.classList) === 'shipDeployed'){
          nextValueR.classList.add('shipHit')
          selectedSquaresComp.push(nextValueR)
          previousMoveComp = nextValueR
          playerTurn = true
          previousMoveHit = true
        } else {
          console.log('cheese')
          nextValueR.classList.add('shipHit')
          selectedSquaresComp.push(nextValueR)
          foundShip = []
          directionAttempt = 0
          previousMoveHit = false
          playerTurn = true
        }
      } else {
        selectedSquaresComp.push(currentRand)
        currentRand.classList.add('shipHit')
        playerTurn = true
        previousMoveComp = currentRand
      }
    } else if (directionAttempt === 2){
      const nextValueL = cellsPlayer[parseFloat(previousMoveComp.getAttribute('value')) - Lvalue]
      if (selectedSquaresComp.includes(nextValueL) === false &&  nextValueL !== undefined){
        if (String(nextValueL.classList) === 'shipDeployed'){
          nextValueL.classList.add('shipHit')
          selectedSquaresComp.push(nextValueL)
          previousMoveComp = nextValueL
          playerTurn = true
          previousMoveHit = true
        } else {
          console.log('cheese')
          nextValueL.classList.add('shipHit')
          selectedSquaresComp.push(nextValueL)
          foundShip = []
          directionAttempt = 0
          previousMoveHit = false
          playerTurn = true
        }
      } else {
        selectedSquaresComp.push(currentRand)
        currentRand.classList.add('shipHit')
        playerTurn = true
        previousMoveComp = currentRand
      }

    } else if (directionAttempt === 3){
      const nextValueU = cellsPlayer[parseFloat(previousMoveComp.getAttribute('value')) - Uvalue]
      if (selectedSquaresComp.includes(nextValueU) === false &&  nextValueU !== undefined){
        if (String(nextValueU.classList) === 'shipDeployed'){
          console.log('hello my lovelies')
          nextValueU.classList.add('shipHit')
          selectedSquaresComp.push(nextValueU)
          previousMoveComp = nextValueU
          playerTurn = true
          previousMoveHit = true
        } else {
          console.log('cheese')
          nextValueU.classList.add('shipHit')
          selectedSquaresComp.push(nextValueU)
          foundShip = []
          directionAttempt = 0
          previousMoveHit = false
          playerTurn = true
        }
      } else {
        selectedSquaresComp.push(currentRand)
        currentRand.classList.add('shipHit')
        playerTurn = true
        previousMoveComp = currentRand
      }

    } else if (directionAttempt === 4){
      const nextValueD = cellsPlayer[parseFloat(previousMoveComp.getAttribute('value')) + Dvalue]
      if (selectedSquaresComp.includes(nextValueD) === false  &&  nextValueD !== undefined){
        console.log('hello my lovelies')
        if (String(nextValueD.classList) === 'shipDeployed'){
          nextValueD.classList.add('shipHit')
          selectedSquaresComp.push(nextValueD)
          previousMoveComp = nextValueD
          playerTurn = true
          previousMoveHit = true
        } else {
          console.log('cheese')
          nextValueD.classList.add('shipHit')
          selectedSquaresComp.push(nextValueD)
          foundShip = []
          directionAttempt = 0
          previousMoveHit = false
          playerTurn = true
        }
      } else {
        selectedSquaresComp.push(currentRand)
        currentRand.classList.add('shipHit')
        playerTurn = true
        previousMoveComp = currentRand
      }

    }

  }
}



if(previousMoveHit === true &&  startChain === true){
  if(compShips)
}

// if (playerShips[0].shipLocation.includes(currentRand)){
//   currentRand.classList.add('shipHit')
//   playerShips[0].shipDamage.push(currentRand)
//   selectedSquaresComp.push(currentRand)
//   playerTurn = true
//   canMove = false
//   previousMoveHit = true
//   previousMoveComp = `${currentRand}`
//   if (playerShips[0].shipDamage.length === 3){
//     playerShipsHit += 1
//     console.log(playerShipsHit)
//     playerShips[0].shipLocation.array.forEach(element => element.classList.add('shipSunk'))
//   }
// } else if (playerShips[1].shipLocation.includes(currentRand)){
//   currentRand.classList.add('shipHit')
//   playerShips[1].shipDamage.push(currentRand)
//   selectedSquaresComp.push(currentRand)
//   playerTurn = true
//   canMove = false
//   previousMoveHit = true
//   previousMoveComp = `${currentRand}`
//   if (playerShips[1].shipDamage.length === 4){
//     playerShipsHit += 1
//     console.log(playerShipsHit)
//     playerShips[1].shipLocation.array.forEach(element => element.classList.add('shipSunk'));
//   }
// } else if (playerShips[2].shipLocation.includes(currentRand)){
//   currentRand.classList.add('shipHit')
//   playerShips[2].shipDamage.push(currentRand)
//   selectedSquaresComp.push(currentRand)
//   playerTurn = true
//   canMove = false
//   previousMoveHit = true
//   previousMoveComp = `${currentRand}`
//   if (playerShips[2].shipDamage.length === 2){
//     playerShipsHit += 1
//     console.log(playerShipsHit)
//     playerShips[2].shipLocation.array.forEach(element => element.classList.add('shipSunk'));
    
//   }
// } else if (playerShips[3].shipLocation.includes(currentRand)){
//   currentRand.classList.add('shipHit')
//   playerShips[3].shipDamage.push(currentRand)
//   selectedSquaresComp.push(currentRand)
//   playerTurn = true
//   canMove = false
//   previousMoveComp = `${currentRand}`
//   previousMoveHit = true
//   if (playerShips[3].shipDamage.length === 1){
//     playerShipsHit += 1
//     console.log(playerShipsHit)
//     playerShips[3].shipLocation.array.forEach(element => element.classList.add('shipSunk'));
    
//   }

// else if (previousMoveHit === true) {
//   console.log('next loop is working')
//   if (directionAttempt === 0){
//     const nextValueR = cellsPlayer[parseFloat(previousMoveComp.getAttribute('value')) + Rvalue]
//     if (selectedSquaresComp.includes(nextValueR) === false){
//       console.log('yeeeeeeees')
//       if (String(nextValueR.classList) === 'shipDeployed'){
//         selectedSquaresComp.push(nextValueR)
//         console.log('here')
//         nextValueR.classList.add('shipHit')
//         Rvalue += 1
//         playerTurn = true
//       } else {
//         selectedSquaresComp.push(nextValueR)
//         nextValueR.classList.add('shipHit')
//         directionAttempt += 1
//         playerTurn = true
//       }
//     } else {previousMoveHit = false
//       console.log('haaaaaaaaaaa')} 









function playerPick(e){

  if (playerTurn === true){
    if (compShips[0].shipLocation.includes(e.target)){
      e.target.classList.add('shipHit')
      compShips[0].shipDamage.push(e.target)
      computerMove()
      console.log(playerTurn)
      if (compShips[0].shipDamage.length === 3){
        compShipsHit += 1
        console.log(compShipsHit)
        compShips[0].shipLocation.array.forEach(element => element.classList.add('shipSunk'));
        
      }
    } else if (compShips[1].shipLocation.includes(e.target)){
      e.target.classList.add('shipHit')
      compShips[1].shipDamage.push(e.target)
      computerMove()
      console.log(playerTurn)
      if (compShips[1].shipDamage.length === 3){
        compShipsHit += 1
        console.log(compShipsHit)
        compShips[1].shipLocation.array.forEach(element => element.classList.add('shipSunk'));
          
      }
      
    } else if (compShips[2].shipLocation.includes(e.target)){
      e.target.classList.add('shipHit')
      compShips[2].shipDamage.push(e.target)
      computerMove()
      console.log(playerTurn)
      if (compShips[2].shipDamage.length === 4){
        compShipsHit += 1
        console.log(compShipsHit)
        compShips[2].shipLocation.array.forEach(element => element.classList.add('shipSunk'));
        
      }
    } else if (compShips[3].shipLocation.includes(e.target)){
      e.target.classList.add('shipHit')
      compShips[3].shipDamage.push(e.target)
      computerMove()
      console.log(playerTurn)
      if (compShips[3].shipDamage.length === 2){
        compShipsHit += 1
        console.log(compShipsHit)
        compShips[3].shipLocation.array.forEach(element => element.classList.add('shipSunk'));
        
      }
    } else if (compShips[4].shipLocation.includes(e.target)){
      e.target.classList.add('shipHit')
      compShips[4].shipDamage.push(e.target)
      computerMove()
      console.log(playerTurn)
      if (compShips[4].shipDamage.length === 1){
        compShipsHit += 1
        console.log(compShipsHit)
        compShips[4].shipLocation.array.forEach(element => element.classList.add('shipSunk'));
        
      }
    } else {
      e.target.classList.add('shipHit')
      console.log('missed!')
      playerTurn = false
      computerMove()
    }
  }
}


if (compShipsHit === 4){
  playerTurn = null
  cellsPlayer.forEach(cell => cell.classList.add('shipHit'))
  cellsComp.forEach(cell => cell.classList.add('shipHit'))
} else if (playerShipsHit === 4){
  playerTurn = null
  cellsPlayer.forEach(cell => cell.classList.add('shipHit'))
  cellsComp.forEach(cell => cell.classList.add('shipHit'))
}
