const outpot = document.querySelector('.current-operand'),
    current = document.querySelector('.previous-operand'),
    number = document.querySelectorAll('.number'),
    operators = document.querySelectorAll('.operation'),
    AC = document.getElementById('clear'),
    Dot = document.getElementById('dot'),
    equal = document.getElementById('equal')



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
    if (outpot.textContent.includes('.')) {
        Dot.disabled = true
        return
    } else {
        outpot.textContent += '.'
    }
})

equal.addEventListener('click', getresult)

// if (!outpot.textContent || !current.textContent) {
//     equal.disabled = true
// }
function getNumber() {
    outpot.textContent += this.textContent
}


let numbers = []
let operator

function getOperator() {

    if (numbers[0]) {
        getresult()
        
        outpot.textContent = result

        // current.textContent = outpot.textContent + this.textContent
        // outpot.textContent = ''
    }
    else if (outpot.textContent) {
        operator = this.textContent
        // if (operator) {
        //     operator = this.textContent
        // }
        numbers.push(Number(outpot.textContent))
        current.textContent = outpot.textContent += operator;
        outpot.textContent = ''
    }
}

let result = 0
function getresult() {
    // if (!outpot.textContent || !current.textContent) {
    //     // equal.disabled = true
    //     numbers = []
    //     result = 0
    //     return
    // }

    // if (!outpot.textContent || !current.textContent) {
    //     equal.disabled = true
    // }

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
                // numbers = [];
                current.textContent = ''
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

    // if (!(current.textContent || outpot.textContent) || !result) {
    //     equal.disabled = true
    // }
    // if (number[0]) {
        //     if (numbers.length = 2) {
            //         equal.disabled = false
            //         console.log('ena');
            //     } else if (numbers.length < 2){
                //         equal.disabled = true
                //         console.log('dis');
                //     }
                
                // }
    if (numbers[0]) {        
        current.textContent = result + operator
        // outpot.textContent = ''
        console.log(result);
        console.log(current.textContent);
        console.log(outpot.textContent);
        console.log(operator);
        console.log(numbers);
    }
    outpot.textContent = result
    numbers = [];
    operator = ''

}



