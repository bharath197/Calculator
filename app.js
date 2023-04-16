const add = (a, b) => +a + +b
const subtract = (a, b) => +a - +b
const mulitply = (a, b) => +a * +b
const divide = (a, b) => +a / +b


const operate = (a, b, c) => {
    if (c === '+') return add(a, b)
    else if (c === '-') return subtract(a, b)
    else if (c === '/') return divide(a, b)
    else return mulitply(a, b)
}

const digits = document.querySelectorAll('.digits')
const operators = document.querySelectorAll('.operator')
const equalTo = document.querySelector('.equalTo')
const clear = document.querySelector('.clear')
const exp = document.querySelector('.expression')
const res = document.querySelector('.result')

let firstNumber = ''
let operation = ''
let secondNumber = ''





digits.forEach(digit => digit.addEventListener('click', () => {
    if (!operation) {
        firstNumber += digit.value;
        exp.textContent += digit.value
    }
    else {
        secondNumber += digit.value
        exp.textContent += digit.value
        res.textContent = operate(firstNumber, secondNumber, operation)
    }
}))


operators.forEach(operator => operator.addEventListener('click', () => {
    if (!firstNumber) return
    if (!secondNumber) {
        operation = operator.value
        exp.textContent = firstNumber + operator.value
    }
    if (secondNumber) {
        firstNumber = res.textContent
        operation = operator.value
        secondNumber = ''
        exp.textContent = res.textContent + operator.value
        res.textContent = ''
    }
}))

clear.addEventListener('click', () => {
    firstNumber = ''
    operation = ''
    secondNumber = ''
    res.textContent = ''
    exp.textContent = ''
})

equalTo.addEventListener('click', ()=>{
    if(firstNumber && operation && secondNumber){
        exp.textContent = res.textContent
        firstNumber = res.textContent
        operation = ''
        secondNumber = ''
        res.textContent = ''
    }
    else if(firstNumber && operation && !secondNumber){
        alert('invalid')
    }
    else{
        return
    }
})

