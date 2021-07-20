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

  if (shipIndex <= 3){
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
  if (shipIndex <= 3 && selectionSetPossible === true){
    selectionSet.forEach(cell => {
      playerShips[shipIndex].shipLocation.push(cell)
      invalidCellsPlayer.push(cell)
      cell.classList.add('shipDeployed')
    })
    shipIndex += 1
    if (shipIndex === 4){
      console.log('you are ready')
      cellsComp.forEach(cell => cell.addEventListener('click',playerPick))
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

let previousMoveComp = null
let previousMoveHit = null

function computerMove(){
  if(previousMoveComp === null){
    
  }
}


let playerTurn = true

function playerPick(e){

  if (playerTurn === true){
    if (compShips[0].shipLocation.includes(e.target)){
      e.target.classList.add('shipHit')
      compShips[0].shipDamage.push(e.target)
      playerTurn = false
      if (compShips[0].shipDamage.length === 3){
        compShips[0].shipLocation.array.forEach(element => {element.classList.add('shipSunk')});
      }
    } else if (compShips[1].shipLocation.includes(e.target)){
      e.target.classList.add('shipHit')
      compShips[1].shipDamage.push(e.target)
      playerTurn = false
      if (compShips[1].shipDamage.length === 4){
        compShips[1].shipLocation.array.forEach(element => {element.classList.add('shipSunk')});
      }
    } else if (compShips[2].shipLocation.includes(e.target)){
      e.target.classList.add('shipHit')
      compShips[2].shipDamage.push(e.target)
      playerTurn = false
      if (compShips[2].shipDamage.length === 2){
        compShips[2].shipLocation.array.forEach(element => {element.classList.add('shipSunk')});
      }
    } else if (compShips[3].shipLocation.includes(e.target)){
      e.target.classList.add('shipHit')
      compShips[3].shipDamage.push(e.target)
      playerTurn = false
      if (compShips[3].shipDamage.length === 1){
        compShips[3].shipLocation.array.forEach(element => {element.classList.add('shipSunk')});
      }
    } else {
      console.log('missed!')
      playerTurn = false
    }
  }
}


if(playerTurn === false){
  computerMove()
}
