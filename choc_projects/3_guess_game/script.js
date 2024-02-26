const body_selector = document.querySelector('body')


function Element_Creator(elm_name){
    
    if(Array.isArray(elm_name)){
        let new_elm = document.createElement(elm_name[0])

        if(Array.isArray(elm_name[1])){
            new_elm.setAttribute(elm_name[1][0] ,elm_name[1][1])
        }

        if(typeof elm_name[2] === 'string'){
            new_elm.appendChild(document.createTextNode(elm_name[2]))
            // console.log(elm_name[3])
            elm_name[3].appendChild(new_elm)
            // console.log(new_elm)
        }
        else{
            elm_name[3].appendChild(new_elm)
        }

    }
    else{
        console.log('Function parameter must be an Array')
    }
    
}

// Selector function
// Selector function

function selecter(sl){
    let selected = document.querySelector(sl)
    return selected
}

// attribute_setter function
// attribute_setter function


function attribute_setter(valueSetter, all_attribute) {
    all_attribute.forEach((value) => selecter(valueSetter).setAttribute(value[0], value[1]))
}

// Creating Element
// Creating Element
// Creating Element

Element_Creator(['h1', ['class', 'heading'], 'Guessing Game', body_selector])

// div
Element_Creator(['div', ['class', 'parent_div'], '', body_selector])

// p
Element_Creator(['p', ['class', 'info'], "Try and guess a random number between 1 and 100.You have 10 attempts to guess the right number.", selecter('.parent_div')])

// form
Element_Creator(['form', ['action', ' '], '', selecter('.parent_div')])

// input
Element_Creator(['input', ['name', 'guess_number'], 'Input', selecter('form')])
attribute_setter('input', [['Placeholder', 'Enter your Number']]);

// button
Element_Creator(['button', ['class', 'btn'], 'Try', selecter('form')])


Element_Creator(['p', ['class', 'answer'], 'Answer is : 0', selecter('.parent_div')])

Element_Creator(['p', ['class', 'prev_guess'], 'Previous Guess : 10', selecter('.parent_div')])
Element_Creator(['p', ['class', 'rem_guess'], 'Remaining Guess : 10', selecter('.parent_div')])



function Guess_Match(){

    let counter = 10
    const guess_array = []

    if(counter <= 10){
        selecter('.btn').addEventListener('click', (e) => {
            e.preventDefault()
            counter--
    
            let user_guess = selecter('input').value
    
            const random_generator = Math.round(Math.random() * 10)
    
            if(user_guess === random_generator){
                // console.log('matched')
                const abc = selecter('.answer')
                abc.style.display = 'block'
                abc.innerHTML = "We find it"

            }
            else{
                // console.log('not_matched')
                const abc = selecter('.answer')
                abc.style.display = 'block'
                abc.innerHTML = "Not matched"
                
                selecter('.rem_guess').innerHTML = `Remaining Guess : ${counter}`

                selecter('.prev_guess').innerHTML = `Previous Guess : ${user_guess}`
            }
        })
    }
}

Guess_Match()



    // console.log(random_generator)
    
