const outpot = document.querySelector('.current-operand'),
current = document.querySelector('.previous-operand'),
number = document.querySelectorAll('.number'),
operators = document.querySelectorAll('.operation'),
AC = document.getElementById('clear'),
Dot = document.getElementById('dot'),
equal = document.getElementById('equal')

let numbers = []
let operator
let result = 0

number.forEach(number => {
    number.addEventListener("click", getNumber)
})
operators.forEach(operator => {
    operator.addEventListener("click", getOperator)
})

AC.addEventListener('click', () => {
    outpot.innerHTML = ''
    current.innerHTML = ''
    numbers = []
    return
})
Dot.addEventListener('click', () => {
    if (!outpot.textContent.includes('.')) {
        outpot.textContent += '.'
        }
})
equal.addEventListener('click', getresult)

function getNumber() {
    outpot.textContent += this.textContent
}

function getOperator() {

    if (numbers[0]) {
        getresult()
    }
    else if (outpot.textContent != '') {
        numbers.push(Number(outpot.textContent))
    }
    operator = this.textContent
    current.textContent = outpot.textContent += operator;
    outpot.textContent = ''
}

function getresult() {
    numbers.push(Number(outpot.textContent))
    current.textContent += outpot.textContent

    switch (operator) {
        case '+':
            result = numbers[0] + numbers[1]
            break;
        case '-':
            result = numbers[0] - numbers[1]
            break;
        case '÷':
            if (numbers[1] == 0) {
                result = "You Can't devide by zero"
                current.textContent = ""
            } else {
                result = numbers[0] / numbers[1]
            }
            break;
        case '*':
            result = numbers[0] * numbers[1]
            break;

        default:
            break;
    }

    outpot.textContent = result
    numbers[0] = result;
    numbers.pop()
    operator = ''
}
