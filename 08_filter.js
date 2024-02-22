        //? filter 
        //? filter 
        //? filter 
        //? filter
        
        
const rolls = [4, 32, 3, 5, 1, 54]

// console.log(rolls.filter((roll) => roll%2==0))       // answer: [4, 32, 54]


// ! filter() duita argument ney. ekta callback funtion jeta mandatory, and ekta optinal this context ney. FILTER() new ekta array return kore based on condition.

//? callback function abar tinta parameter ney, ekta must which is value, duita optional which are index, ar oi array ta


const fill_one = rolls.filter((value, index, array) => {
    // console.log(`value is ${value} === Index is ${index} === ${array}`)
    
    return index%2 === 0
})

// console.log(fill_one)     // answer: [ 4, 3, 1 ]


//! let's use THIS 

const marks = {
    standard: 50
}

const tanvir_marks = [40, 78, 51, 63, 49, 86]

const std_marks = tanvir_marks.filter(function(mark){
    return mark <= this.standard
}, marks)

// console.log(std_marks)

