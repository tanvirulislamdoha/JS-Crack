                //! sets
                //! sets
                //! sets

//it is iterable and data store kora jay array er mto
// DUPLICATE value rakha jay na set e
//index base access kora jay na

// JOKON AMADER KACHE UNIQUE VALUE THAKE TOKON SET USE KORA BETTER


const rolls = new Set([1, 2, 3, 4])
// console.log(rolls.add(3))        // it will change anything cause duplicate value ney na
// console.log(rolls.add("3"))      // it will be added as string
// console.log(typeof rolls)           // answer: object
// console.log(rolls)           // answer: Set(4) { 1, 2, 3, 4 }

// console.log(rolls[2])  // undefined cause index diye access kora jay na

const cars = new Set();
cars.add("volvo");
cars.add("toyota");
//but array same add kora jay cause aitar address alada
cars.add(['item1', 'item1']);
cars.add(['item3', 'item2']);

// console.log(cars)


const random = [1,2,2,3,4,5,5,6];
const uniqueElements = new Set(random);
// console.log(uniqueElements);
// console.log(random);