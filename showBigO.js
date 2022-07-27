function uniqueName(arr){
 let uniqueName = []
 for( let i= 0; i< arr.length; i++){
    let element = arr[i]
    if(!uniqueName.includes(element)){
        uniqueName.push(element)
    }
 }
 return uniqueName
}

let nameArray= ["Nishat","Rifat", "Razu","Nishat"]


console.log(uniqueName(nameArray))

// time complexity = n2
// space complexity= n