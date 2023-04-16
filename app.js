const add = (a,b) => +a + +b
const subtract = (a,b) => +a - +b
const mulitply = (a,b) => +a * +b
const divide = (a,b) => +a / +b


const operate = (a,b,c) =>{
    if(c==='+') return add(a,b)
    else if(c==='-') return subtract(a,b)
    else if(c==='/') return divide(a,b)
    else return mulitply(a,b)
}

const digits = document.querySelectorAll('.digits')
const operators = document.querySelectorAll('.operator')
const equalTo = document.querySelector('.equalTo')
const clear = document.querySelector('.clear')
const exp = document.querySelector('.expression')

let firstNumber
let operation
let secondNumber
let displayValue

function populate(e){
    exp.innerHTML += this.value;
    
}
digits.forEach(digit=>{
    digit.addEventListener('click',populate)
})
operators.forEach(operator=>{
    operator.addEventListener('click', populate)
})
equalTo.addEventListener('click',evaluate)
clear.addEventListener('click', ()=>{
    exp.innerHTML = ''
})








// function evaluate(){

//     const str = display.innerHTML
//     let a
//     let b
//     let numbers = str.split(/[+*/-]/)
//     let operations = str.split(/[0-9]/).filter(e=>e!==''&&e!=='.')

//     for(let i in operations){
//         a = numbers[0]
//         b = numbers[1]
//         numbers.splice(0,2,operate(a,b,operations[i]))
//     }
//     display.innerHTML = numbers[0]

// }


