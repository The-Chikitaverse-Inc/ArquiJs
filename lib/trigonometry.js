function pythagoreanTheorem(a, b) {
    const theorem = Math.sqrt(a ** 2 + b ** 2)
    
    if (a || b <= 0) {
        console.error('The legs of this function are not numbers greater than 0.')
    }

    if ( typeof a || b !== Number) {
        console.error('The legs of this function are not numbers.')
    }
    
    return theorem
}



module.exports = {
    pythagoreanTheorem,

}