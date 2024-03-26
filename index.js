// let num = 2
// let num2 = 5
// if (num > num2 )
// {
//     console.log('num 2 is smaller'
// )
// }
// else if(num == num2) 
// {
//     console.log('num is equal')
// }
// else
// {
//     console.log('num 2 is greater')
// }
// --------------------------------------------------------
// import inquirer from "inquirer"
// const years = await inquirer.prompt([
//     {
//     name: "age",
//     message: "Enter your age: ",
//     type: "input",
// }
// ])
// console.log("You will be 60 years in", 60-years.age, "!!")
// function xyz(name: string) {
//     console.log("Hello, " + name.toUpperCase() + "!!")
// }
// xyz('Ahmed')
// ---------------------------------------------------------
// export const x:Number = 5
// export const y:String = '4'
import inquirer from "inquirer";
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
]);
if (answer.operation === 'Addition') {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operation === 'Subtraction') {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operation === 'Division') {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operation === 'Multiplication') {
    console.log(answer.firstNumber * answer.secondNumber);
}
else {
    console.log('Please select a valid Operation!');
}
