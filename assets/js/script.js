let hoursworked;
let wls;
let payroll;
let stats;
let grossearnings;
let deduction;
let result;

document.getElementById("submit").onclick = function(){
    hoursworked = document.getElementById("hoursworked").value;
    wls = document.getElementById("wls").value;
    payroll = document.getElementById("payroll").value;
    stats = document.getElementById("status").value;
    payroll = payroll /100;
    grossearnings = hoursworked*wls;
    deduction = grossearnings * payroll
    result = grossearnings - deduction;
    if (stats == 14) {
        result -= (result*0.14);
    }
    grossearnings = grossearnings.toFixed(2);
    result = result.toFixed(2);
    if (grossearnings != result) {
        document.getElementById("grossresult").textContent = `Total Gross Earnings: $ ${grossearnings}`;
    }
    document.getElementById("result").textContent = `Total Net Earnings: $ ${result}`;
    console.log(result);
}
