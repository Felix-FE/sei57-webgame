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

const compShips = []

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

let directionSelection = 'V'

// let prevSelectionSet = []
let selectionSet = []

function playerSelection(e){
  
  // prevSelectionSet.forEach(cell => {
  //   cell.classList.remove('selectedValid')
  //   prevSelectionSet.shift
  // });

  selectionSet.forEach(cell => {
    if (cell !== undefined){ 
      cell.classList.remove('selectedValid')
    }
  });

  selectionSet = []
  let selectionSetPossible = true

  // selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value'))])
  // selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value')) + 1])
  // selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value')) - 1])
  
  if (directionSelection === 'H'){
    // selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value'))])
    // selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value')) + 1])
    // selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value')) - 1])
    playerShips[shipIndex].shipAssignCommandH(e)
    
    if (parseFloat(e.target.getAttribute('value')) >= 0 & parseFloat(e.target.getAttribute('value')) < 10){
      selectionSet.forEach(element => {if (rowArray[0].includes(element) === false){
        selectionSetPossible = false}})
    } else if (parseFloat(e.target.getAttribute('value')) >= 10 & parseFloat(e.target.getAttribute('value')) < 20){
      selectionSet.forEach(element => {if (rowArray[1].includes(element) === false){
        selectionSetPossible = false}})
    } else if (parseFloat(e.target.getAttribute('value')) >= 20 & parseFloat(e.target.getAttribute('value')) < 30){
      selectionSet.forEach(element => {if (rowArray[2].includes(element) === false){
        selectionSetPossible = false}})
    } else if (parseFloat(e.target.getAttribute('value')) >= 30 & parseFloat(e.target.getAttribute('value')) < 40){
      selectionSet.forEach(element => {if (rowArray[3].includes(element) === false){
        selectionSetPossible = false}})
    } else if (parseFloat(e.target.getAttribute('value')) >= 40 & parseFloat(e.target.getAttribute('value')) < 50){
      selectionSet.forEach(element => {if (rowArray[4].includes(element) === false){
        selectionSetPossible = false}})
    } else if (parseFloat(e.target.getAttribute('value')) >= 50 & parseFloat(e.target.getAttribute('value')) < 60){
      selectionSet.forEach(element => {if (rowArray[5].includes(element) === false){
        selectionSetPossible = false}})
    } else if (parseFloat(e.target.getAttribute('value')) >= 60 & parseFloat(e.target.getAttribute('value')) < 70){
      selectionSet.forEach(element => {if (rowArray[6].includes(element) === false){
        selectionSetPossible = false}})
    } else if (parseFloat(e.target.getAttribute('value')) >= 70 & parseFloat(e.target.getAttribute('value')) < 80){
      selectionSet.forEach(element => {if (rowArray[7].includes(element) === false){
        selectionSetPossible = false}})
    } else if (parseFloat(e.target.getAttribute('value')) >= 80 & parseFloat(e.target.getAttribute('value')) < 90){
      selectionSet.forEach(element => {if (rowArray[8].includes(element) === false){
        selectionSetPossible = false}})
    } else if (parseFloat(e.target.getAttribute('value')) >= 90 & parseFloat(e.target.getAttribute('value')) < 100){
      selectionSet.forEach(element => {if (rowArray[9].includes(element) === false){
        selectionSetPossible = false}})
    }

  } else if(directionSelection === 'V'){
    // selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value'))])
    // selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value')) + 10])
    // selectionSet.push(cellsPlayer[parseFloat(e.target.getAttribute('value')) - 10])

    playerShips[shipIndex].shipAssignCommandV(e)

    if((parseFloat(e.target.getAttribute('value')) % 10) === 0){
      selectionSet.forEach(element => {if (columnArray[0].includes(element) === false){
        selectionSetPossible = false}})
    } else if ((parseFloat(e.target.getAttribute('value')) % 10) === 1){
      selectionSet.forEach(element => {if (columnArray[1].includes(element) === false){
        selectionSetPossible = false}})
    } else if ((parseFloat(e.target.getAttribute('value')) % 10) === 2){
      selectionSet.forEach(element => {if (columnArray[2].includes(element) === false){
        selectionSetPossible = false}})
    } else if ((parseFloat(e.target.getAttribute('value')) % 10) === 3){
      selectionSet.forEach(element => {if (columnArray[3].includes(element) === false){
        selectionSetPossible = false}})
    } else if ((parseFloat(e.target.getAttribute('value')) % 10) === 4){
      selectionSet.forEach(element => {if (columnArray[4].includes(element) === false){
        selectionSetPossible = false}})
    } else if ((parseFloat(e.target.getAttribute('value')) % 10) === 5){
      selectionSet.forEach(element => {if (columnArray[5].includes(element) === false){
        selectionSetPossible = false}})
    } else if ((parseFloat(e.target.getAttribute('value')) % 10) === 6){
      selectionSet.forEach(element => {if (columnArray[6].includes(element) === false){
        selectionSetPossible = false}})
    } else if ((parseFloat(e.target.getAttribute('value')) % 10) === 7){
      selectionSet.forEach(element => {if (columnArray[7].includes(element) === false){
        selectionSetPossible = false}})
    } else if ((parseFloat(e.target.getAttribute('value')) % 10) === 8){
      selectionSet.forEach(element => {if (columnArray[8].includes(element) === false){
        selectionSetPossible = false}})
    } else if ((parseFloat(e.target.getAttribute('value')) % 10) === 9){
      selectionSet.forEach(element => {if (columnArray[9].includes(element) === false){
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
  
function rotateShip(e){
  if (e.key === 'r'){
    if(directionSelection === 'V'){
      directionSelection = 'H'
    }else{
      directionSelection = 'V'
    }
  }
}


function deployShip(){
  if (shipIndex <= 3 ){
    selectionSet.forEach(cell => {
      playerShips[shipIndex].shipLocation.push(cell)
    });
    console.log(playerShips[0].shipLocation)
    shipIndex += 1
    console.log(shipIndex)
  } else {
    console.log('oh fuck')
  }
}

// selectionSet.push(e.target)
//     selectionSet.push(e.target.value -= 1)
//     selectionSet.push(e.target.value += 1)

createGrid()
rowAssignment()
columnAssignment()

cellsPlayer.forEach(cell => cell.addEventListener('mouseover', playerSelection))
document.addEventListener('keyup', rotateShip)
document.addEventListener('click', deployShip)
// Testing and Initialisation



