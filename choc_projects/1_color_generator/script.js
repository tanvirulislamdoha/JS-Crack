// const body_selector = document.querySelector('body')

// const first_box = document.querySelector('.box-1') 
// const second_box = document.querySelector('.box-2') 
// const third_box = document.querySelector('.box-3') 
// const fourth_box = document.querySelector('.box-4') 


// first_box.addEventListener('click', () => {
//     body_selector.style.backgroundColor = "#752727"
// })


// second_box.addEventListener('click', () => {
//     body_selector.style.backgroundColor = "#0e7f70"
// })


// third_box.addEventListener('click', () => {
//     body_selector.style.backgroundColor = "#391ba7"
// })


// fourth_box.addEventListener('click', () => {
//     body_selector.style.backgroundColor = "#a6ca30"
// })


//! Optimize code of above code
//! Optimize code of above code
//! Optimize code of above code
//! Optimize code of above code


const body_selector = document.querySelector('body');

// const boxes = document.querySelectorAll('.box');

const allColors = {
    'box-1': "#752727",
    'box-2': "#0e7f70",
    'box-3': "#391ba7",
    'box-4': "#a6ca30"
};

// Add event listener to the common parent element
document.addEventListener('click', (event) => {
    // console.log(event)
    // console.log(event.target)
    // console.log(event.target.classList)
    // console.log(event.target.classList.contains('box'))
    if (event.target.classList.contains('box')) {
        
        const boxClass = event.target.classList[1];
        // console.log(event.target.classList)
        // console.log(boxClass)
        
        body_selector.style.backgroundColor = allColors[boxClass];
    }
});


