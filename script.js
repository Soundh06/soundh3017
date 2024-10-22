function calculate() {
    let amount = document.getElementById('amount').value;
    let rate = document.getElementById('rate').value;
    let time = document.getElementById('time').value;
    let monthlyRate = rate / 12 / 100;
    let emi = (amount * monthlyRate * 
               Math.pow(1 + monthlyRate, time)) /
              (Math.pow(1 + monthlyRate, time) - 1);
    let result = emi.toFixed(2);
    document.getElementById("output").innerHTML = result;
}