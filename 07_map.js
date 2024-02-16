                //! map
                //! map
                //! map
                //! map



const arr = [1, 2, 3, 4, 5, 6, 'tanvir', 'islam', 'doha']

const obj = {
    id : 4321,
    name: 'tanvir islam',
    email: 'tanvir@io.com',
    address: 'sylhet'
}

const str = "hello world"

// const arr_map = arr.map((value, index) => console.log(value, index))

// console.log(arr_map)


// str.map((st) => console.log(st))

// obj.map(([value, key]) => console.log(key, value))

// const info = {
//     [1, 2, 4, 5],
//     ['tanivr', 'himel']    
// }


const infos = [
    {
        team: "support",
        role: "pain",
        salary: "kom"
    },
    {
        f1: 1,
        f2: 2,
        f3: 3
    }
]

infos.map((info) => {
    Object.entries(info).map(([key, value]) => {
        console.log(`key is ${key} => value is  ${value}`)
    })
})