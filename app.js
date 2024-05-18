import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "userID",
        type: "input",
        message: "kindly enter your ID:",
    }, {
        name: "pin",
        type: "number",
        message: "kindly enter your PIN",
    }, {
        name: "account type",
        type: "list",
        choices: ["current account", "saving account"],
        message: "select your account type",
    }, {
        name: "transaction type",
        type: "list",
        choices: ["fast cash", "withdraw"],
        message: "select your transaction",
    }, {
        name: "amount",
        type: "list",
        choices: [5000, 10000, 15000, 20000],
        message: "select your amount",
        when(answers) {
            return answers.transactiontype == "fast cash";
        }
    }, {
        name: "amount",
        type: "number",
        message: "enter your amount",
        when(answers) {
            return answers.transactiontype == "withdraw";
        }
    }
]);
if (answers.userID && answers.pin) {
    const balance = Math.floor(Math.random() * 10000 + 1);
    console.log(balance);
    const EnterAmount = answers.amount;
    if (EnterAmount >= balance) {
        const remaining = balance - EnterAmount;
        console.log(`your remaining balance is ${remaining}`);
    }
    else {
        console.log(`insufficient balance`);
    }
}
