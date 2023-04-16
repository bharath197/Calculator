const add = (a,b) => +a + +b
const subtract = (a,b) => +a - +b
const mulitply = (a,b) => +a * +b
const divide = (a,b) => +a / +b
let firstNumber
let operation
let secondNumber
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
const display = document.querySelector('.display')

function populate(e){
    display.innerHTML += this.value;
}
digits.forEach(digit=>{
    digit.addEventListener('click',populate)
})
operators.forEach(operator=>{
    operator.addEventListener('click', populate)
})
clear.addEventListener('click', ()=>{
    display.innerHTML = ''
})
equalTo.addEventListener('click',evaluate)
function evaluate(){
    const str = display.innerHTML
    let a
    let b
    let numbers = str.split(/[+*-/]/)
    let operations = str.split(/[0-9]/).filter(e=>e!=='')
    
    console.log(numbers)
    console.log(operations)
    // const arr = str.split(' ')
    for(let i in operations){
        a = numbers[0]
        b = numbers[1]
        console.log(a)
        console.log(b)
        console.log(operations[i])
        console.log(operate(a,b,operations[i]))
        numbers.splice(0,2,operate(a,b,operations[i]))
    }
    display.innerHTML = numbers[0]
}


