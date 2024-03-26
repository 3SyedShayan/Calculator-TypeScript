import inquirer from "inquirer"
const answer = await inquirer.prompt([
    {
        name: 'operation',
    message: 'Please select the operation to perform',
        type: 'list',
        choices: ['Addition', 'Subtraction', 'Division', 'Multiplication']
    },

    {
        name: 'firstNumber',
    message: 'Enter First Number',
        type: 'number'
    },

    {
        name: 'secondNumber',
    message: 'Enter Second Number',
        type: 'number'
    }
])

if (answer.operation === 'Addition'){
    console.log(answer.firstNumber + answer.secondNumber)
}
else if (answer.operation === 'Subtraction'){
    console.log(answer.firstNumber - answer.secondNumber)
}
else if (answer.operation === 'Division'){
    console.log(answer.firstNumber / answer.secondNumber)
}
else if (answer.operation === 'Multiplication'){
    console.log(answer.firstNumber * answer.secondNumber)
}
else {
console.log('Please select a valid Operation!')}



