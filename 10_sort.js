                // ! sort
                // ! sort
                // ! sort
                // ! sort

// ? sort() basically ekta compare funtion ney argument hishabe ney and array return kore

const numbers = [45, 236, 52, 7, 19,143];

// console.log(numbers.sort())
// answer:  143, 19, 236, 45, 52, 7 ]

// why this kind of result????? because javascript sort anything by assume it as string and its asqii value

const sorter = numbers.sort((small, large)=>{
    // return small - large
    return large - small
    
})

// console.log(sorter)

// sort this prodicts as high price to low

const products = [
    {productId: 1, productName: "phn1", price: 2300},
    {productId: 2, productName: "phn2", price: 1400},
    {productId: 3, productName: "phn3", price: 700},
    {productId: 4, productName: "phn4", price: 3000},
    {productId: 5, productName: "phn5", price: 2700}
]

const p_sort = products.sort((x, y)=>{
    return y.price - x.price
})

// console.log(p_sort)