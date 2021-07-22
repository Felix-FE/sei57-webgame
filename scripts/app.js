// VARIABLES

// Element collector
const carrierP = document.querySelector('.playerShips .carrieri')
const carrierC = document.querySelector('.compShips .carrieri')

const destroyerP = document.querySelector('.playerShips .destroyeri')
const destroyerC = document.querySelector('.compShips .destroyeri')

const destroyerTwoP = document.querySelector('.playerShips .destroyerTwoi')
const destroyerTwoC = document.querySelector('.compShips .destroyerTwoi')

const cruiserP = document.querySelector('.playerShips .cruiseri')
const cruiserC = document.querySelector('.compShips .cruiseri')

const corvetteP = document.querySelector('.playerShips .corvettei')
const corvetteC = document.querySelector('.compShips .corvettei')

const gridP = document.querySelector('#playerGrid')
const gridC = document.querySelector('#computerGrid')

const startButton = document.querySelector('.button')

const cellsPlayer = []
const cellsComp = []

const playerShips = [
  {
    shipClass: 'destroyer',
    shipLocation: [],
    shipDamage: 0,
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
    shipDamage: 0,
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
    shipDamage: 0,
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
    shipDamage: 0,
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
    shipDamage: 0,
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
    shipDamage: 0,
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
    shipDamage: 0,
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
    shipDamage: 0,
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
    shipDamage: 0,
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
    shipDamage: 0,
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

let selectionSet = []

let selectionSetPossible = null

const shipType = ['destroyer','destroyertwo','carrier','cruiser','corvette']
let shipTypeCount = 0

let selectionSetComp = []


const invalidCellsComp = []


function startGame() {

  let directionSelection = 'V'

  


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
        cell.style.backgroundColor = 'darkgrey'
        cell.classList.add(String(shipType[shipTypeCount]))
      })
      shipTypeCount += 1
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
          // cell.classList.add('shipDeployedi')
          // cell.style.backgroundColor = 'darkgrey'
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

    while (canMove === false && selectedSquaresComp.length < 100){
      currentRand = randSelectionPlayer()
      console.log(currentRand)
      if (selectedSquaresComp.includes(currentRand) === false){
        canMove = true
      }
    } 
    
    if (previousMoveHit === false){

      // while (canMove === false && selectedSquaresComp.length < 100){
      //   currentRand = randSelectionPlayer()
      //   console.log(currentRand)
      //   if (selectedSquaresComp.includes(currentRand) === false){
      //     canMove = true
      //   }
      // }
      if (currentRand.classList.contains('shipDeployed')){
        selectedSquaresComp.push(currentRand)
        currentRand.classList.add('shipHitSuccess')
        currentRand.style.backgroundColor = 'red'
        previousMoveHit = true
        previousMoveComp = currentRand
        foundShip.push(cellsPlayer[parseFloat(previousMoveComp.getAttribute('value')) + Rvalue])
        foundShip.push(cellsPlayer[parseFloat(previousMoveComp.getAttribute('value')) + Dvalue])
        foundShip.push(cellsPlayer[parseFloat(previousMoveComp.getAttribute('value')) - Lvalue])
        foundShip.push(cellsPlayer[parseFloat(previousMoveComp.getAttribute('value')) - Uvalue])
        console.log(`this is the set of selected: ${foundShip}`)
        playerTurn = true
        if (currentRand.classList.contains('destroyer')){
          playerShips[0].shipDamage += 1
          console.log(`the destroyer damage is: ${playerShips[0].shipDamage}`)
          if (playerShips[0].shipDamage === 3){
            previousMoveHit = false
            destroyerP.style.backgroundColor = 'red'
          }
        } else if (currentRand.classList.contains('destroyertwo')){
          playerShips[1].shipDamage += 1
          console.log(`the destroyertwo damage is: ${playerShips[1].shipDamage}`)
          if (playerShips[1].shipDamage === 3){
            previousMoveHit = false
            destroyerTwoP.style.backgroundColor = 'red'
          }
        } else if (currentRand.classList.contains('carrier')){
          playerShips[2].shipDamage += 1
          console.log(`the carrier damage is: ${playerShips[2].shipDamage}`)
          if (playerShips[2].shipDamage === 4){
            previousMoveHit = false
            carrierP.style.backgroundColor = 'red'
          }
        } else if (currentRand.classList.contains('cruiser')){
          playerShips[3].shipDamage += 1
          console.log(`the cruiser damage is: ${playerShips[3].shipDamage}`)
          if (playerShips[3].shipDamage === 2){
            previousMoveHit = false
            cruiserP.style.backgroundColor = 'red'
          }
        }else if (currentRand.classList.contains('corvette')){
          playerShips[4].shipDamage += 1
          console.log(`the corvette damage is: ${playerShips[4].shipDamage}`)
          if (playerShips[4].shipDamage === 1){
            previousMoveHit = false
            corvetteP.style.backgroundColor = 'red'
          }

        }
        
      } else {
        selectedSquaresComp.push(currentRand)
        currentRand.classList.add('shipHit')
        currentRand.style.backgroundColor = 'lightcoral'
        playerTurn = true
        canMove = false
        directionAttempt = 0
        foundShip = []
      }
      
    } else if (previousMoveHit === true) {

      // while (canMove === false && selectedSquaresComp.length < 100){
      //   currentRand = randSelectionPlayer()
      //   console.log(currentRand)
      //   if (selectedSquaresComp.includes(currentRand) === false){
      //     canMove = true
      //   }
      // }

      console.log('pooopy')
      if (directionAttempt === 0){

        if (selectedSquaresComp.includes(foundShip[0]) === false && foundShip[0] !== undefined){
          if (foundShip[0].classList.contains('shipDeployed')){
            selectedSquaresComp.push(foundShip[0])
            foundShip[0].classList.add('shipHitSuccess')
            foundShip[0].style.backgroundColor = 'red'
            previousMoveComp = foundShip[0]
            playerTurn = true
            directionAttempt = 1
            previousMoveHit = true
            if(foundShip[0].classList.contains('destroyer')){
              playerShips[0].shipDamage += 1
              console.log(`the destroyer damage is: ${playerShips[0].shipDamage}`)
              if (playerShips[0].shipDamage === 3){
                previousMoveHit = false
                destroyerP.style.backgroundColor = 'red'
              }
            }else if (foundShip[0].classList.contains('destroyertwo')){
              playerShips[1].shipDamage += 1
              console.log(`the destroyertwo damage is: ${playerShips[1].shipDamage}`)
              if (playerShips[1].shipDamage === 3){
                previousMoveHit = false
                destroyerTwoP.style.backgroundColor = 'red'
              }
            }else if (foundShip[0].classList.contains('carrier')){
              playerShips[2].shipDamage += 1
              console.log(`the carrier damage is: ${playerShips[2].shipDamage}`)
              if (playerShips[2].shipDamage === 4){
                previousMoveHit = false
                carrierP.style.backgroundColor = 'red'
              }
            }else if (foundShip[0].classList.contains('cruiser')){
              playerShips[3].shipDamage += 1
              console.log(`the cruiser damage is: ${playerShips[3].shipDamage}`)
              if (playerShips[3].shipDamage === 2){
                previousMoveHit = false
                cruiserP.style.backgroundColor = 'red'
              }
            }else if (foundShip[0].classList.contains('corvette')){
              playerShips[4].shipDamage += 1
              console.log(`the corvette damage is: ${playerShips[4].shipDamage}`)
              if (playerShips[4].shipDamage === 1){
                previousMoveHit = false
                corvetteP.style.backgroundColor = 'red'
              }
      
            }
          } else {
            selectedSquaresComp.push(foundShip[0])
            foundShip[0].classList.add('shipHit')
            foundShip[0].style.backgroundColor = 'lightcoral'
            previousMoveComp = foundShip[0]
            playerTurn = true
          }

        } else if (selectedSquaresComp.includes(foundShip[1]) === false && foundShip[1] !== undefined){
          if (foundShip[1].classList.contains('shipDeployed')){
            selectedSquaresComp.push(foundShip[1])
            foundShip[1].classList.add('shipHitSuccess')
            foundShip[1].style.backgroundColor = 'red'
            previousMoveComp = foundShip[1]
            playerTurn = true
            directionAttempt = 4
            previousMoveHit = true
            if(foundShip[1].classList.contains('destroyer')){
              playerShips[0].shipDamage += 1
              console.log(`the destroyer damage is: ${playerShips[0].shipDamage}`)
              if (playerShips[0].shipDamage === 3){
                previousMoveHit = false
                destroyerP.style.backgroundColor = 'red'
              }
            }else if (foundShip[1].classList.contains('destroyertwo')){
              playerShips[1].shipDamage += 1
              console.log(`the destroyertwo damage is: ${playerShips[1].shipDamage}`)
              if (playerShips[1].shipDamage === 3){
                previousMoveHit = false
                destroyerTwoP.style.backgroundColor = 'red'
              }
            }else if (foundShip[1].classList.contains('carrier')){
              playerShips[2].shipDamage += 1
              console.log(`the carrier damage is: ${playerShips[2].shipDamage}`)
              if (playerShips[2].shipDamage === 4){
                previousMoveHit = false
                carrierP.style.backgroundColor = 'red'
              }
            }else if (foundShip[1].classList.contains('cruiser')){
              playerShips[3].shipDamage += 1
              console.log(`the cruiser damage is: ${playerShips[3].shipDamage}`)
              if (playerShips[3].shipDamage === 2){
                previousMoveHit = false
                cruiserP.style.backgroundColor = 'red'
              }
            }else if (foundShip[1].classList.contains('corvette')){
              playerShips[4].shipDamage += 1
              console.log(`the corvette damage is: ${playerShips[4].shipDamage}`)
              if (playerShips[4].shipDamage === 1){
                previousMoveHit = false
                corvetteP.style.backgroundColor = 'red'
              }
      
            }
          } else {
            selectedSquaresComp.push(foundShip[1])
            foundShip[1].classList.add('shipHit')
            foundShip[1].style.backgroundColor = 'lightcoral'
            previousMoveComp = foundShip[1]
            playerTurn = true
          }

        } else if (selectedSquaresComp.includes(foundShip[2]) === false && foundShip[2] !== undefined){
          if (foundShip[2].classList.contains('shipDeployed')){
            selectedSquaresComp.push(foundShip[2])
            foundShip[2].classList.add('shipHitSuccess')
            foundShip[2].style.backgroundColor = 'red'
            previousMoveComp = foundShip[2]
            playerTurn = true
            directionAttempt = 2
            previousMoveHit = true
            if(foundShip[2].classList.contains('destroyer')){
              playerShips[0].shipDamage += 1
              console.log(`the destroyer damage is: ${playerShips[0].shipDamage}`)
              if (playerShips[0].shipDamage === 3){
                previousMoveHit = false
                destroyerP.style.backgroundColor = 'red'
              }
            }else if (foundShip[2].classList.contains('destroyertwo')){
              playerShips[1].shipDamage += 1
              console.log(`the destroyertwo damage is: ${playerShips[1].shipDamage}`)
              if (playerShips[1].shipDamage === 3){
                previousMoveHit = false
                destroyerTwoP.style.backgroundColor = 'red'
              }
            }else if (foundShip[2].classList.contains('carrier')){
              playerShips[2].shipDamage += 1
              console.log(`the carrier damage is: ${playerShips[2].shipDamage}`)
              if (playerShips[2].shipDamage === 4){
                previousMoveHit = false
                carrierP.style.backgroundColor = 'red'
              }
            }else if (foundShip[2].classList.contains('cruiser')){
              playerShips[3].shipDamage += 1
              console.log(`the cruiser damage is: ${playerShips[3].shipDamage}`)
              if (playerShips[3].shipDamage === 2){
                previousMoveHit = false
                cruiserP.style.backgroundColor = 'red'
              }
            }else if (foundShip[2].classList.contains('corvette')){
              playerShips[4].shipDamage += 1
              console.log(`the corvette damage is: ${playerShips[4].shipDamage}`)
              if (playerShips[4].shipDamage === 1){
                previousMoveHit = false
                corvetteP.style.backgroundColor = 'red'
              }
      
            }
          } else {
            selectedSquaresComp.push(foundShip[2])
            foundShip[2].classList.add('shipHit')
            foundShip[2].style.backgroundColor = 'lightcoral'
            previousMoveComp = foundShip[2]
            playerTurn = true
          }

        } else if (selectedSquaresComp.includes(foundShip[3]) === false && foundShip[3] !== undefined){
          if (foundShip[3].classList.contains('shipDeployed')){
            selectedSquaresComp.push(foundShip[3])
            foundShip[3].classList.add('shipHitSuccess')
            foundShip[3].style.backgroundColor = 'red'
            previousMoveComp = foundShip[3]
            playerTurn = true
            directionAttempt = 3
            previousMoveHit = true
            if(foundShip[3].classList.contains('destroyer')){
              playerShips[0].shipDamage += 1
              console.log(`the destroyer damage is: ${playerShips[0].shipDamage}`)
              if (playerShips[0].shipDamage === 3){
                previousMoveHit = false
                destroyerP.style.backgroundColor = 'red'
              }
            }else if (foundShip[3].classList.contains('destroyertwo')){
              playerShips[1].shipDamage += 1
              console.log(`the destroyertwo damage is: ${playerShips[1].shipDamage}`)
              if (playerShips[1].shipDamage === 3){
                previousMoveHit = false
                destroyerTwoP.style.backgroundColor = 'red'
              }
            }else if (foundShip[3].classList.contains('carrier')){
              playerShips[2].shipDamage += 1
              console.log(`the carrier damage is: ${playerShips[2].shipDamage}`)
              if (playerShips[2].shipDamage === 4){
                previousMoveHit = false
                carrierP.style.backgroundColor = 'red'
              }
            }else if (foundShip[3].classList.contains('cruiser')){
              playerShips[3].shipDamage += 1
              console.log(`the cruiser damage is: ${playerShips[3].shipDamage}`)
              if (playerShips[3].shipDamage === 2){
                previousMoveHit = false
                cruiserP.style.backgroundColor = 'red'
              }
            }else if (foundShip[3].classList.contains('corvette')){
              playerShips[4].shipDamage += 1
              console.log(`the corvette damage is: ${playerShips[4].shipDamage}`)
              if (playerShips[4].shipDamage === 1){
                previousMoveHit = false
                corvetteP.style.backgroundColor = 'red'
              }
      
            }
          } else {
            selectedSquaresComp.push(foundShip[3])
            foundShip[3].classList.add('shipHit')
            foundShip[3].style.backgroundColor = 'lightcoral'
            previousMoveComp = foundShip[3]
            playerTurn = true
          }

        } else {
          selectedSquaresComp.push(currentRand)
          currentRand.classList.add('shipHit')
          foundShip[3].style.backgroundColor = 'lightcoral'
          playerTurn = true
          previousMoveComp = currentRand
          previousMoveHit = false
          foundShip = []
        }
      } else if (directionAttempt === 1){
        const nextValueR = cellsPlayer[parseFloat(previousMoveComp.getAttribute('value')) + Rvalue]
        if (selectedSquaresComp.includes(nextValueR) === false &&  nextValueR !== undefined){
          if (nextValueR.classList.contains('shipDeployed')){
            console.log('hello my lovelies')
            selectedSquaresComp.push(nextValueR)
            nextValueR.classList.add('shipHitSuccess')
            nextValueR.style.backgroundColor = 'red'
            previousMoveComp = nextValueR
            playerTurn = true
            previousMoveHit = true
            if(nextValueR.classList.contains('destroyer')){
              playerShips[0].shipDamage += 1
              console.log(`the destroyer damage is: ${playerShips[0].shipDamage}`)
              if (playerShips[0].shipDamage === 3){
                previousMoveHit = false
                directionAttempt = 0
                foundShip = []
                destroyerP.style.backgroundColor = 'red'
              }
            }else if (nextValueR.classList.contains('destroyertwo')){
              playerShips[1].shipDamage += 1
              console.log(`the destroyertwo damage is: ${playerShips[1].shipDamage}`)
              if (playerShips[1].shipDamage === 3){
                previousMoveHit = false
                directionAttempt = 0
                foundShip = []
                destroyerTwoP.style.backgroundColor = 'red'
              }
            }else if (nextValueR.classList.contains('carrier')){
              playerShips[2].shipDamage += 1
              console.log(`the carrier damage is: ${playerShips[2].shipDamage}`)
              if (playerShips[2].shipDamage === 4){
                previousMoveHit = false
                directionAttempt = 0
                foundShip = []
                carrierP.style.backgroundColor = 'red'
              }
            }else if (nextValueR.classList.contains('cruiser')){
              playerShips[3].shipDamage += 1
              console.log(`the cruiser damage is: ${playerShips[3].shipDamage}`)
              if (playerShips[3].shipDamage === 2){
                previousMoveHit = false
                directionAttempt = 0
                foundShip = []
                cruiserP.style.backgroundColor = 'red'
              }
            }else if (nextValueR.classList.contains('corvette')){
              playerShips[4].shipDamage += 1
              console.log(`the corvette damage is: ${playerShips[4].shipDamage}`)
              if (playerShips[4].shipDamage === 1){
                previousMoveHit = false
                directionAttempt = 0
                foundShip = []
                corvetteP.style.backgroundColor = 'red'
              }
            }
          } else {
            console.log('cheese')
            selectedSquaresComp.push(nextValueR)
            nextValueR.classList.add('shipHit')
            nextValueR.style.backgroundColor = 'lightcoral'
            foundShip = []
            directionAttempt = 0
            previousMoveHit = false
            playerTurn = true
          }
        } else {
          selectedSquaresComp.push(currentRand)
          currentRand.classList.add('shipHit')
          nextValueR.style.backgroundColor = 'lightcoral'
          playerTurn = true
          previousMoveComp = currentRand
          previousMoveHit = false
          foundShip = []
          directionAttempt = 0
        }
      } else if (directionAttempt === 2){
        const nextValueL = cellsPlayer[parseFloat(previousMoveComp.getAttribute('value')) - Lvalue]
        if (selectedSquaresComp.includes(nextValueL) === false &&  nextValueL !== undefined){
          if (nextValueL.classList.contains('shipDeployed')){
            console.log('hello my lovelies')
            selectedSquaresComp.push(nextValueL)
            nextValueL.classList.add('shipHitSuccess')
            nextValueL.style.backgroundColor = 'red'
            previousMoveComp = nextValueL
            playerTurn = true
            previousMoveHit = true
            if(nextValueL.classList.contains('destroyer')){
              playerShips[0].shipDamage += 1
              console.log(`the destroyer damage is: ${playerShips[0].shipDamage}`)
              if (playerShips[0].shipDamage === 3){
                previousMoveHit = false
                directionAttempt = 0
                foundShip = []
                destroyerP.style.backgroundColor = 'red'
              }
            }else if (nextValueL.classList.contains('destroyertwo')){
              playerShips[1].shipDamage += 1
              console.log(`the destroyertwo damage is: ${playerShips[1].shipDamage}`)
              if (playerShips[1].shipDamage === 3){
                previousMoveHit = false
                directionAttempt = 0
                foundShip = []
                destroyerTwoP.style.backgroundColor = 'red'
              }
            }else if (nextValueL.classList.contains('carrier')){
              playerShips[2].shipDamage += 1
              console.log(`the carrier damage is: ${playerShips[2].shipDamage}`)
              if (playerShips[2].shipDamage === 4){
                previousMoveHit = false
                directionAttempt = 0
                foundShip = []
                carrierP.style.backgroundColor = 'red'
              }
            }else if (nextValueL.classList.contains('cruiser')){
              playerShips[3].shipDamage += 1
              console.log(`the cruiser damage is: ${playerShips[3].shipDamage}`)
              if (playerShips[3].shipDamage === 2){
                previousMoveHit = false
                directionAttempt = 0
                foundShip = []
                cruiserP.style.backgroundColor = 'red'
              }
            }else if (nextValueL.classList.contains('corvette')){
              playerShips[4].shipDamage += 1
              console.log(`the corvette damage is: ${playerShips[4].shipDamage}`)
              if (playerShips[4].shipDamage === 1){
                previousMoveHit = false
                directionAttempt = 0
                foundShip = []
                corvetteP.style.backgroundColor = 'red'
              }
            }
          } else {
            console.log('cheese')
            selectedSquaresComp.push(nextValueL)
            nextValueL.classList.add('shipHit')
            nextValueL.style.backgroundColor = 'lightcoral'
            foundShip = []
            directionAttempt = 0
            previousMoveHit = false
            playerTurn = true
          }
        } else {
          selectedSquaresComp.push(currentRand)
          currentRand.classList.add('shipHit')
          nextValueL.style.backgroundColor = 'lightcoral'
          playerTurn = true
          previousMoveHit = false
          previousMoveComp = currentRand
          foundShip = []
          directionAttempt = 0
        }

      } else if (directionAttempt === 3){
        const nextValueU = cellsPlayer[parseFloat(previousMoveComp.getAttribute('value')) - Uvalue]
        if (selectedSquaresComp.includes(nextValueU) === false &&  nextValueU !== undefined){
          if (nextValueU.classList.contains('shipDeployed')){
            console.log('hello my lovelies')
            selectedSquaresComp.push(nextValueU)
            nextValueU.classList.add('shipHitSuccess')
            nextValueU.style.backgroundColor = 'red'
            previousMoveComp = nextValueU
            playerTurn = true
            previousMoveHit = true
            if(nextValueU.classList.contains('destroyer')){
              playerShips[0].shipDamage += 1
              console.log(`the destroyer damage is: ${playerShips[0].shipDamage}`)
              if (playerShips[0].shipDamage === 3){
                previousMoveHit = false
                directionAttempt = 0
                foundShip = []
                destroyerP.style.backgroundColor = 'red'
              }
            }else if (nextValueU.classList.contains('destroyertwo')){
              playerShips[1].shipDamage += 1
              console.log(`the destroyertwo damage is: ${playerShips[1].shipDamage}`)
              if (playerShips[1].shipDamage === 3){
                previousMoveHit = false
                directionAttempt = 0
                foundShip = []
                destroyerTwoP.style.backgroundColor = 'red'
              }
            }else if (nextValueU.classList.contains('carrier')){
              playerShips[2].shipDamage += 1
              console.log(`the carrier damage is: ${playerShips[2].shipDamage}`)
              if (playerShips[2].shipDamage === 4){
                previousMoveHit = false
                directionAttempt = 0
                foundShip = []
                carrierP.style.backgroundColor = 'red'
              }
            }else if (nextValueU.classList.contains('cruiser')){
              playerShips[3].shipDamage += 1
              console.log(`the cruiser damage is: ${playerShips[3].shipDamage}`)
              if (playerShips[3].shipDamage === 2){
                previousMoveHit = false
                directionAttempt = 0
                foundShip = []
                cruiserP.style.backgroundColor = 'red'
              }
            }else if (nextValueU.classList.contains('corvette')){
              playerShips[4].shipDamage += 1
              console.log(`the corvette damage is: ${playerShips[4].shipDamage}`)
              if (playerShips[4].shipDamage === 1){
                previousMoveHit = false
                directionAttempt = 0
                foundShip = []
                corvetteP.style.backgroundColor = 'red'
              }
            }
          } else {
            console.log('cheese')
            selectedSquaresComp.push(nextValueU)
            nextValueU.classList.add('shipHit')
            nextValueU.style.backgroundColor = 'lightcoral'
            foundShip = []
            directionAttempt = 0
            previousMoveHit = false
            playerTurn = true
          }
        } else {
          selectedSquaresComp.push(currentRand)
          currentRand.classList.add('shipHit')
          nextValueU.style.backgroundColor = 'lightcoral'
          playerTurn = true
          previousMoveHit = false
          previousMoveComp = currentRand
          foundShip = []
          directionAttempt = 0
        }

      } else if (directionAttempt === 4){
        const nextValueD = cellsPlayer[parseFloat(previousMoveComp.getAttribute('value')) + Dvalue]
        if (selectedSquaresComp.includes(nextValueD) === false  &&  nextValueD !== undefined){
          if (nextValueD.classList.contains('shipDeployed')){
            console.log('hello my lovelies')
            selectedSquaresComp.push(nextValueD)
            nextValueD.classList.add('shipHitSuccess')
            nextValueD.style.backgroundColor = 'red'
            previousMoveComp = nextValueD
            playerTurn = true
            previousMoveHit = true
            if(nextValueD.classList.contains('destroyer')){
              playerShips[0].shipDamage += 1
              console.log(`the destroyer damage is: ${playerShips[0].shipDamage}`)
              if (playerShips[0].shipDamage === 3){
                previousMoveHit = false
                directionAttempt = 0
                foundShip = []
                destroyerP.style.backgroundColor = 'red'
              }
            }else if (nextValueD.classList.contains('destroyertwo')){
              playerShips[1].shipDamage += 1
              console.log(`the destroyertwo damage is: ${playerShips[1].shipDamage}`)
              if (playerShips[1].shipDamage === 3){
                previousMoveHit = false
                directionAttempt = 0
                foundShip = []
                destroyerTwoP.style.backgroundColor = 'red'
              }
            }else if (nextValueD.classList.contains('carrier')){
              playerShips[2].shipDamage += 1
              console.log(`the carrier damage is: ${playerShips[2].shipDamage}`)
              if (playerShips[2].shipDamage === 4){
                previousMoveHit = false
                directionAttempt = 0
                foundShip = []
                carrierP.style.backgroundColor = 'red'
              }
            }else if (nextValueD.classList.contains('cruiser')){
              playerShips[3].shipDamage += 1
              console.log(`the cruiser damage is: ${playerShips[3].shipDamage}`)
              if (playerShips[3].shipDamage === 2){
                previousMoveHit = false
                directionAttempt = 0
                foundShip = []
                cruiserP.style.backgroundColor = 'red'
              }
            }else if (nextValueD.classList.contains('corvette')){
              playerShips[4].shipDamage += 1
              console.log(`the corvette damage is: ${playerShips[4].shipDamage}`)
              if (playerShips[4].shipDamage === 1){
                previousMoveHit = false
                directionAttempt = 0
                foundShip = []
                corvetteP.style.backgroundColor = 'red'
              }
      
            }
          } else {
            console.log('cheese')
            selectedSquaresComp.push(nextValueD)
            nextValueD.classList.add('shipHit')
            nextValueD.style.backgroundColor = 'lightcoral'
            foundShip = []
            directionAttempt = 0
            previousMoveHit = false
            playerTurn = true
          }
        } else {
          selectedSquaresComp.push(currentRand)
          currentRand.classList.add('shipHit')
          nextValueD.style.backgroundColor = 'lightcoral'
          playerTurn = true
          previousMoveHit = false
          previousMoveComp = currentRand
          foundShip = []
          directionAttempt = 0
        }

      }

    }
    console.log(previousMoveHit)
    console.log(foundShip)
    console.log(directionAttempt)
  }




  function playerPick(e){
    if (selectedSquaresPlayer.includes(e.target) === false){
      if (playerTurn === true){
        if (compShips[0].shipLocation.includes(e.target)){
          e.target.classList.add('shipHitSuccess')
          e.target.style.backgroundColor = 'red'
          compShips[0].shipDamage += 1
          console.log(playerTurn)
          selectedSquaresPlayer.push(e.target)
          compShipsHit += 1
          if (compShips[0].shipDamage === 3){
            compShipsHit += 1
            console.log(compShipsHit)
            destroyerC.style.backgroundColor = 'red'
            
          }
          setTimeout(computerMove, 1000)
        } else if (compShips[1].shipLocation.includes(e.target)){
          e.target.classList.add('shipHitSuccess')
          e.target.style.backgroundColor = 'red'
          compShips[1].shipDamage += 1
          selectedSquaresPlayer.push(e.target)
          console.log(playerTurn)
          compShipsHit += 1
          if (compShips[1].shipDamage === 3){
            compShipsHit += 1
            console.log(compShipsHit)
            destroyerTwoC.style.backgroundColor = 'red'
              
          }
          setTimeout(computerMove, 1000)
        } else if (compShips[2].shipLocation.includes(e.target)){
          e.target.classList.add('shipHitSuccess')
          e.target.style.backgroundColor = 'red'
          compShips[2].shipDamage += 1
          console.log(playerTurn)
          selectedSquaresPlayer.push(e.target)
          compShipsHit += 1
          if (compShips[2].shipDamage === 4){
            compShipsHit += 1
            console.log(compShipsHit)
            carrierC.style.backgroundColor = 'red'
            
          }
          setTimeout(computerMove, 1000)
        } else if (compShips[3].shipLocation.includes(e.target)){
          e.target.classList.add('shipHitSuccess')
          e.target.style.backgroundColor = 'red'
          compShips[3].shipDamage += 1
          console.log(playerTurn)
          selectedSquaresPlayer.push(e.target)
          compShipsHit += 1
          if (compShips[3].shipDamage === 2){
            compShipsHit += 1
            console.log(compShipsHit)
            cruiserC.style.backgroundColor = 'red'
            
          }
          setTimeout(computerMove, 1000)
        } else if (compShips[4].shipLocation.includes(e.target)){
          e.target.classList.add('shipHitSuccess')
          e.target.style.backgroundColor = 'red'
          compShips[4].shipDamage += 1
          console.log(playerTurn)
          selectedSquaresPlayer.push(e.target)
          compShipsHit += 1
          if (compShips[4].shipDamage === 1){
            compShipsHit += 1
            console.log(compShipsHit)
            compShips[4].shipLocation.forEach(element => element.classList.add('shipSunk'));
            corvetteC.style.backgroundColor = 'red'
          }
          setTimeout(computerMove, 1000)
        } else {
          e.target.classList.add('shipHit')
          e.target.style.backgroundColor = 'lightcoral'
          console.log('missed!')
          playerTurn = false
          selectedSquaresPlayer.push(e.target)
          setTimeout(computerMove, 1000)
        }
      }
      if (compShipsHit === 13){
        cellsComp.forEach(cell => cell.classList.add('shipHit'))
      } 
    }
  }
}


startButton.addEventListener('click', startGame)




// if (compShipsHit === 13){
//   playerTurn = null
//   cellsPlayer.forEach(cell => cell.classList.add('shipHit'))
//   cellsComp.forEach(cell => cell.classList.add('shipHit'))
// } else if (playerShipsHit === 13){
//   playerTurn = null
//   cellsPlayer.forEach(cell => cell.classList.add('shipHit'))
//   cellsComp.forEach(cell => cell.classList.add('shipHit'))
// }


