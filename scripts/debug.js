
const selectionSetComp = [1,2,3]
const rowArrayComp = [0,1,2,3,4,5,6,7,8,9]



if ( (selectionSetComp.every(element => rowArrayComp.includes(element))) === true) {
  console.log('valid')
} else {
  console.log('invalid')
}


console.log(rowArrayComp.includes(3))

