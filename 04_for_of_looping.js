                        //* for of loop
                        //* for of loop
                        //* for of loop
                        //* for of loop



const arr = [1, 2, 3, 4, 5, 6, 'tanvir', 'islam', 'doha']

const obj = {
    id : 4321,
    name: 'tanvir islam',
    email: 'tanvir@io.com',
    address: 'sylhet'
}

const str = "hello world"

//! for of loop normal loop er mto value return kore jegular index thake na like array, set , string

// for of loop

for (let ar of arr){ 
    // console.log(ar)         
    // console.log(arr.indexOf(ar))         
}

for (let st of str ){
    // console.log(st)
}


// for (let {key,value} of obj){
//     // console.log(value)
// }

//! for of loop object e direct chalanu jay na...aitar jonno kichu rules follow korea lage.aita ke age array te convert kore dewa lage..given below


for (let ob of Object.keys(obj)){
    // console.log(ob);    // generally Object.Keys() returns object key
    // console.log(obj[ob]); 
    // console.log(obj.ob); 
}


for (let x of Object.values(obj)){
    // console.log(x);     // generally Object.values() returns object value
     
}

for (let [key, value] of Object.entries(obj)){

    // console.log(`Key is: ${key} and value is: ${value} `)

    // Object.entries() each object key value ke ekta kore array te return kore
    // that's why i destructed the each arrar and print key and value
}
// console.log(Object.entries(obj))

// answer for Object.entries(obj) = [
//   [ 'id', 4321 ],
//   [ 'name', 'tanvir islam' ],
//   [ 'email', 'tanvir@io.com' ],
//   [ 'address', 'sylhet' ]
// ]
