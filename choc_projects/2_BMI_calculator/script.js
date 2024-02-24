const input_select = document.querySelectorAll('input')

const btn_select = document.querySelector('button')

const message = document.querySelector('.msg')

let height, weight;

btn_select.addEventListener('click', (e) => {
    e.preventDefault()
    input_select.forEach((input_val) => {
        // console.log(input_val.value)
        if(input_val.name === 'height'){
            height = input_val.value
        }
        else if(input_val.name === 'weight'){
            weight = input_val.value
        }
    })

    const bmi_calculator = (h, w) => {
        
        h = h * 0.3048
        
        const result =  (w / (h*h))

        // const result = 36

        // console.log(result)

        if(result < 18.5){
            message.classList.add("under_weight")
            message.textContent = `Your BMI is ${result}. [Somoy Thakte besh kori Kha, Tore pokki e tut o kori nibo gi] 🪢 🪢 🪢 🪢`
        }
        else if(result >= 18.5 && result <= 24.9){
            message.classList.add("healthy")
            message.textContent = `Your BMI is ${result}. Tumi Nayok. 😎 😎 😎 😎 `
            
        }
        else if(result >= 25 && result <= 29.9){
            message.classList.add("over_weight")
            message.textContent = `Your BMI is ${result}. Komaiya khau. Already tumi jolo-hosti oigeso.`
        }
        else{
            message.classList.add("obese")
            message.textContent = `Your BMI is ${result}. Ai halar hala oto khas kne. rakkosh kubarir. Sharadin upre thakos ni?🖕 🖕 🖕 `
        }
    }
    // console.log(bmi_calculator(5.7, 57))
    bmi_calculator(height, weight)
});
