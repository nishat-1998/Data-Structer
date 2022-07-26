function 
// Big O Notaion
sumAll(n){
    return n *(n+1)/2
 }
 let time1 = performance.now()
 console.log(sumAll(100000000))
 let time2 = performance.now()
 
 console.log(`your time ${(time2-time1)/1000 }`)