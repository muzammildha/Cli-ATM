#! user/bin/env node
import inquirer from "inquirer";
let myBalance = 10000000; //Dollar 
let myPin = 3072009;
let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        message: "Enter your PIN",
        type: "number"
    }
]);
if (pinAnswer.Pin == myPin) {
    (console.log([`Your Pin Was correct`]));
    let operationAnswer = await inquirer.prompt([
        {
            message: "Please select Action",
            type: "list",
            name: "Operation",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);
    if (operationAnswer.Operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "please enter Your Amount"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("Your remaining Balance is: " + myBalance);
    }
    else {
        console.log("Your account balance is: " + myBalance);
    }
}
else {
    console.log("Your Pin Was incorrect");
}
