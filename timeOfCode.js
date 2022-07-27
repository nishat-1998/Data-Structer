function sumAll(n){
    let total=0;
    for(let i= 0; i<= n; i++) {
        total += i
    }
    return total
}

function sumAll(n){
   return n *(n+1)/2
}

console.log(sumAll(10))



//Constant And Smaller Terms Don't Matter In Big O
//function min5log(n){
  //  for(let i=0; i<= Math.max(5,n); i++){
    //    console.log(i)
    //}
//}
//min5log(10)
// time com. is Big O(n)

//max

function max5log(n){
    for(let i=0; i<= Math.min(5,n); i++){
        console.log(i)
    }
}
max5log(2)

//time com. Big O(1)

//space complexcity

// Big O(1)
function sum(arr) {
    let total= 0;
    for (let i= 0; i<arr.length; i++){
        total += arr[i]
    }
    return total
}
console.log(sum([23,4,6]))

// Big O(n)

function double(arr){
    let number =[]
    for( let i= 0; i< arr.length; i++){
        number.push(arr[i]*2)
    }
    return number
}

console.log(double([5,6,7]))