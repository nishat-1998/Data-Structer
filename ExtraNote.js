
// Big O Notaion

   // Big O(n) -- (5n+2)

   function sumAll(n){
    let total=0;
    for(let i= 0; i<= n; i++) {
        total += i
    }
    return total
}
//Big O(1)
function 
sumAll(n){
    return n *(n+1)/2
 }
 let time1 = performance.now()
 console.log(sumAll(100000000))
 let time2 = performance.now()
 
 console.log(`your time ${(time2-time1)/1000 }`)

 // Big O(n2)-- (n+n)

 function multipleArray(n) {
    for (let i = 0; i <= n; i++){
    for (let j=0; j<=n; j++){
        console.log(i,j)
    }
    }
    }
   
   multipleArray(5)

// Big O(3)---(n+3)

function multipleArray(n) {
    for (let i = 0; i <= n; i++){
    for (let j=0; j<= 3; j++){
        console.log(i,j)
    }
    }
    }
   
   multipleArray(5)


