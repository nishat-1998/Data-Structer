function logarithmsN(n){
    while( n > 1){
        console.log(n)
        n/=2

    }
    console.log("Done")
}
logarithmsN(16)


function extraLogN(n){
    if( n <= 1){
        console.log("Done")
        return
    }
    console.log(n)
    extraLogN(n/2)
    
}
logarithmsN(8)

// n is better log2(n)
