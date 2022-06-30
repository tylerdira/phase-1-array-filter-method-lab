// Code your solution here
function findMatching(arrayOfDrivers, string){
    let listOfDrivers = arrayOfDrivers.filter(names => names.toLowerCase() === string.toLowerCase())
    if(listOfDrivers) {
        return listOfDrivers
    } else {
        return undefined
    }
    
}


function fuzzyMatch(arrayOfDrivers, string){
    let listOfDrivers = arrayOfDrivers.filter(names => names[0] === string[0])
    if(listOfDrivers) {
        return listOfDrivers
    } else {
        return undefined
    }
    
}

function matchName(arrayOfDrivers, string){
    let listOfDrivers = arrayOfDrivers.filter(names => names.name === string)
    if(listOfDrivers) {
        return listOfDrivers
    } else {
        return undefined
    }
}