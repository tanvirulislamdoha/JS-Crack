const users = [
    {userId: 1,fistName: 'alif',gender:'male'},
    {userId: 2,fistName: 'zaman',gender:'male'},
    {userId: 3,fistName: 'kulsum',gender:'female'}
]

const [{fistName}, , {gender}] = users;

console.log(fistName, gender);

// alif female