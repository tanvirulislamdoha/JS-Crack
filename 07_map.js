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


const infor = [
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

// infos.map((info) => {
//     Object.entries(info).map(([key, value]) => {
//         console.log(`key is ${key} => value is  ${value}`)
//     })
// })

const infos = [
    {
      id: 1,
      name: 'John',
      age: 30,
      hobbies: ['Reading', 'Hiking'],
      address: {
        street: '123 Main St',
        city: 'Cityville',
        country: 'Countryland'
      }
    },
    {
      id: 2,
      name: 'Jane',
      age: 25,
      hobbies: ['Painting', 'Traveling'],
      address: {
        street: '456 Elm St',
        city: 'Townsville',
        country: 'Countryland'
      }
    },
    {
      id: 3,
      name: 'Alice',
      age: 35,
      hobbies: ['Cooking', 'Photography'],
      address: {
        street: '789 Oak St',
        city: 'Villageton',
        country: 'Countryland'
      }
    }
  ];

//   console.log(complexArray)

  infos.map((info) => {
    Object.values(info).map((value) => {
        if(Array.isArray(value)){
            console.log(value)
        }
        else if(typeof(value)==='object'){
            console.log(value)
        }
        else{
            console.log(value)
        }
    })
    console.log('\n')

  })