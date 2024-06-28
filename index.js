const prompt = require("prompt-sync")();
// Compound interest calc that prompts user for some inputs
// and calculates compounded interest value

let init_amount = 20000;
let monthly_contribution = 400;
let number_of_years = 30;
let interest_rate = 10;

// Step 1: Define a function to calculate final value of compounded interest
function compoundInterest(init_amount, monthly_contribution, number_of_years, interest_rate) {
    let total = init_amount;
    let annual_contribution = monthly_contribution * 12;

    for (let i = 0; i < number_of_years; i++) {
        total += annual_contribution;
        total = total * (100 + interest_rate) / 100;
    }
    return total.toFixed(2);
}

// Step 2: Define a function to calculate the difference
function calculateRegular (init_amount, monthly_contribution, number_of_years) {
    return (init_amount + (monthly_contribution * 12) * number_of_years).toFixed(2);
}




// Step 3: Create a run function that prompts user for all inputs required to calculate final amounts

function run() {
    let init_amount = parseInt(prompt("What is your initial investment? "));
    let monthly_contribution = parseInt(prompt("How much will you contribute monthly? "));
    let number_of_years = parseInt(prompt("How many years do you plan to contribute? "));
    let interest_rate = parseInt(prompt("What is your expected interest rate? "));

    printOutput(init_amount, monthly_contribution, number_of_years, interest_rate);
}

// Step: Create a visually pleasing print statement within said function,
// which uses a template literal string to display a financial breakdown

function printOutput() {
    let final_value = compoundInterest(init_amount, monthly_contribution, number_of_years, interest_rate);
    let value_without_compound = calculateRegular(init_amount, monthly_contribution, number_of_years);
    let summary =
`INIT_AMOUNT: $${init_amount}
MONTHLY_CONTRIBUTION: $${monthly_contribution}
NUMBER_OF_YEARS: ${number_of_years}
INTEREST_RATE: ${interest_rate}%

FINAL_COMPOUNDED_VALUE: $${compoundInterest(init_amount, monthly_contribution, number_of_years, interest_rate)}
REGULAR_AMOUNT: $${value_without_compound}
DIFFERENCE: $${final_value - value_without_compound}`
console.log(summary);
;
}

run();