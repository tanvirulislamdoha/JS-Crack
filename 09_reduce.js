            // ! reduce
            // ! reduce
            // ! reduce
            // ! reduce



const digits = [4, 32, 3, 5, 1, 54]

//  there are two concepts in reduce() methods which are ACCUMULATOR and CURRENTVALUE
// accumulator means jomoKari. aita ager iteration hishab ta joma kore rakhe and proti iteration e value cng hy
//  currentValue mane present je valuer upore iteration ta choltese oita

const addition = digits.reduce((accumulator, currentValue) => {
    // console.log(`accumulator is ${accumulator} ==== currentValue is ${currentValue}`)
    return accumulator + currentValue;
})
// console.log(addition)


// accumulator is 4 ==== currentValue is 32
// accumulator is 36 ==== currentValue is 3
// accumulator is 39 ==== currentValue is 5
// accumulator is 44 ==== currentValue is 1
// accumulator is 45 ==== currentValue is 54

// answer: 99

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 10000},
    {productId: 3, productName: "television", price: 13000}
]

const t_price = userCart.reduce((totalPrice, currentPrice)=>{
        console.log(`accumulator is ${totalPrice} ==== currentValue is ${currentPrice}`)
        // return totalPrice + currentPrice.price
}, 0)

// console.log(t_price)


// accumulator is 0 ==== currentValue is [object Object]
// accumulator is 12000 ==== currentValue is [object Object]
// accumulator is 22000 ==== currentValue is [object Object]

// answer = 35000

const maxi = [10, 20, 30, 40, 50]

const max_finder = maxi.reduce((accumulator, currentValue)=>{
    // console.log(`accumulator is ${accumulator} ==== currentValue is ${currentValue}`)
    
    return Math.max(accumulator, currentValue)

}, -Infinity)

// console.log(max_finder)


// accumulator is -Infinity ==== currentValue is 10
// accumulator is 10 ==== currentValue is 20
// accumulator is 20 ==== currentValue is 30
// accumulator is 30 ==== currentValue is 40
// accumulator is 40 ==== currentValue is 50

// answer: 50