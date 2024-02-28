// ++++++++++++++++++ map +++++++++++++++++++++++ 

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


// infos.map((info)=>{
//     Object.entries(info).map(([key, value])=>{
        
//         if(Array.isArray(value)){

//             value.map((hobbie) => console.log(hobbie))
//             console.log(`/`);

//         }else if(typeof(value) === 'object'){
//             // console.log(value , 'obj');
//             Object.entries(value).map(([key, value]) => console.log(`The key ${key} and the value ${value}`))
//             console.log(`/`);

//         }else{
//             console.log(value);
//             console.log(`/`);
//         }
//     })
// })

// ++++++++++++++ filter ++++++++++++++++++++

const customers = [
    {
        name: 'Himel',
        pos: 'LTqD'
    },
    {
        name: 'as',
        pos: 'LTD'
    },
    {
        name: 'sd',
        pos: 'LTdD'
    },
    {
        name: 'we',
        pos: 'LTD'
    },
    {
        name: 'zx',
        pos: 'LTDs'
    }
]

// this one works as expected
const ltdUsersFinal = customers.filter((customer) => customer.pos === 'LTD')


// these are written => case one 
const ltdUsers = customers.map((customer) => {
    const hi = Object.keys(customer).filter((ltd) => ltd === 'LTD')
    return hi;
})

const ltdUsersFinal2 = customers.map((cus) => {
    let newArr = []
    if(cus.pos === "LTD"){
        newArr.push(cus);
        // console.log(cus, 'LTD');
        // return cus;
    }
    return newArr;
})

console.log(ltdUsersFinal2);
// console.log(ltdUsersFinal2);

// const ltdCustomers = customers.map((customer) => {
//     r
// })

// console.log(ltdUsers);

// reduce, set, sort, function, callback function, self-provoke function, higher order function, 