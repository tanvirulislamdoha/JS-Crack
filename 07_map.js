//! map
//! map
//! map
//! map



const arr = [1, 2, 3, 4, 5, 6, 'tanvir', 'islam', 'doha']

const obj = {
  id: 4321,
  name: 'tanvir islam',
  email: 'tanvir@io.com',
  address: 'sylhet'
}

const str = "hello world"

// +++++++++ map [Only On Array]++++++++++++

// first -> amra shudu Array er upor map method use korte parbo
// second -> map full array return kore with multiple values depending on the conditions
// third -> amra argument hisabe value, index, r array pai callback funtion a 



// arr.map((value, index) => console.log("value: ",value, "index: ", index)) // => 

// value:  1 index:  0
// value:  2 index:  1
// value:  3 index:  2
// value:  4 index:  3
// value:  5 index:  4
// value:  6 index:  5
// value:  tanvir index:  6
// value:  islam index:  7
// value:  doha index:  8



const arr_map = arr.map((value) => value + 1)

// console.log(arr_map) // [ 2, 3, 4, 5, 6, 7, 'tanvir1', 'islam1', 'doha1' ] 'Note: just added the 1 value and returned the modifed array'



// str.map((st) => console.log(st)) // !!! Its not possible to map on string.
// obj.map(([value, key]) => console.log(key, value)) // !!! Its also not possible to map on a object, either we have to convert the objet to an array with Object.keys() or Object.values or Object.entites()



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

infor.map((info) => {
  Object.entries(info).map(([key, value]) => {
    // console.log(`key is ${key} => value is  ${value}`)
  })
})

//Use case One -> Amra shudu map method customized ba expected value ta shudu return hisabe a ekta array na cheye oita just console log ba
//DOM a populate korar jnno o use kori, jemon uporer function a amra returned array ta na niyew amra console log kore data show kortesi

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

// infos.map((info) => {
//   // first er map method diye amra first layer of object a duklam
//   Object.values(info).map((value) => {
//     // ekhon oi each object k tader value diye ekta new array toiri korlam and oi values gular upor map run koralm
//       if(Array.isArray(value)){
//         // ekhane amra oi each obejct er value gular moddhe kunota array type ki nh check kortesi
//           console.log(value, 'Array')
//       }
//       else if(typeof(value)==='object'){
//         // ekhane amra oi each obejct er value gular moddhe kunota object type ki nh check kortesi
//           console.log(value, 'Object')
//       }
//       else{
//           console.log(value, 'normal value')
//       }
//   })
//   console.log('\n')
// })

// ei porjaye amader print hoitese:

// 3 normal value
// Alice normal value
// 35 normal value
// [ 'Cooking', 'Photography' ] Array
// { street: '789 Oak St', city: 'Villageton', country: 'Countryland' } Object


// amra jodi each value gula k normal value hisabe print korate chai tahole amader array condition er moddhe arekta loop chalate hobe
// And Object type ke abar array te convert kore arekta loop chalate hobe.

// So the second steps will be:

infos.map((info) => {
  // first er map method diye amra first layer of object a duklam
  Object.values(info).map((value) => {
    // ekhon oi each object k tader value diye ekta new array toiri korlam and oi values gular upor map run koralm
      if(Array.isArray(value)){
        // ekhane amra oi each obejct er value gular moddhe kunota array type ki nh check kortesi
          // console.log(value, 'Array')
          // amra ekhn ei array te loop kore data console.log korbo
          value.map((val) => console.log(val))
      }
      else if(typeof(value)==='object'){
        // ekhane amra oi each obejct er value gular moddhe kunota object type ki nh check kortesi
          // console.log(value, 'Object')
        // amra ekhn ei object ta ke array te convert kore ete loop kore data console.log korbo
        Object.values(value).map((val) => console.log(val))
      }
      else{
          console.log(value, 'normal value')
      }
  })
  console.log('\n')
})

// printed output:

// 1 normal value
// John normal value
// 30 normal value
// Reading
// Hiking
// 123 Main St
// Cityville
// Countryland


// 2 normal value
// Jane normal value
// 25 normal value
// Painting
// Traveling
// 456 Elm St
// Townsville
// Countryland


// 3 normal value
// Alice normal value
// 35 normal value
// Cooking
// Photography
// 789 Oak St
// Villageton
// Countryland

// So now amra each and every value te access niye oita print korte partesi with checking on multiple steps ans writing loops accordingly.

