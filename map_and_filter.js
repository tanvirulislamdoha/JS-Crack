// const obj = {
//     name : 'Himel',
//     role : 'support'
// }

// const obj1 = new Object()

// console.log(obj1);

// map 

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
//         // console.log(typeof(value), value);
//         if(Array.isArray(value)){
//             // if array type
//             // console.log(value, 'arr');
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

// filter

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

const ltdUsers = customers.map((customer) => {
    const hi = Object.keys(customer).filter((ltd) => ltd === 'LTD')
    return hi
})

const ltdUsersFinal = customers.filter((customer) => customer.pos === 'LTD')
const ltdUsersFinal2 = customers.map((cus) => {
    return cus.pos === 'LTD'
})

console.log(ltdUsersFinal2);

// const ltdCustomers = customers.map((customer) => {
//     r
// })

// console.log(ltdUsers);

// reduce, set, sort, function, callback function, self-provoke function, higher order function, 