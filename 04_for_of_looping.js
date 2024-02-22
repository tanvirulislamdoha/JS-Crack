                        //* for of loop
                        //* for of loop
                        //* for of loop
                        //* for of loop



// const arr = [1, 2, 3, 4, 5, 6, 'tanvir', 'islam', 'doha']

// const obj = {
//     id : 4321,
//     name: 'tanvir islam',
//     email: 'tanvir@io.com',
//     address: 'sylhet'
// }

// const str = "hello world"

//! for of loop normal loop er mto value return kore jegular index thake na like array, set , string

// for of loop
const arr = [1, 2, 3, 4, 5, 6, 'tanvir', 'islam', 'doha']
<<<<<<< HEAD

const [a,b,c,d] = arr;

console.log(a, b);
=======
>>>>>>> upstream/main
            
// for (let ar of arr){ 
//     // console.log(ar)         
//     // console.log(arr.indexOf(ar))         
// }
// for(int i=0; i<length; i++)

// for(let x of arr){
//     console.log(x)
// }


// const str = "hello world"

// for(let mahi of str){
//     console.log(mahi)
// }


// for (let {key,value} of obj){
//     // console.log(value)
// }

//! for of loop object e direct chalanu jay na...aitar jonno kichu rules follow korea lage.aita ke age array te convert kore dewa lage..given below

const obj = {
    id : 4321,
    name: 'tanvir islam',
    email: 'tanvir@io.com',
    address: 'sylhet'
}

<<<<<<< HEAD
// for (let v1 of obj){
//     // console.log(ob);    // generally Object.Keys() returns object key
//     // console.log(obj[ob]); 
//     // console.log(obj.ob); 
//     // console.log(v1)
// }
=======
for (let v1 of obj){
    // console.log(ob);    // generally Object.Keys() returns object key
    // console.log(obj[ob]); 
    console.log(v1)
}
>>>>>>> upstream/main


// Object.entries(obj)

<<<<<<< HEAD
// console.log(Object.keys(obj));

for(let k of Object.keys(obj)){
    // console.log(obj[k]);
}

// console.log(Object.values(obj));
=======

>>>>>>> upstream/main

for (let x of Object.values(obj)){
    // console.log(x);     // generally Object.values() returns object value
     
}

<<<<<<< HEAD
// console.log(Object.entries(obj));

for (let [key, value] of Object.entries(obj)){

    console.log(`Key is: ${key} and value is: ${value} `)
    // console.log(key, value);
=======
for (let [key, value] of Object.entries(obj)){

    console.log(`Key is: ${key} and value is: ${value} `)
>>>>>>> upstream/main

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
