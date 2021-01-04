function loadCheckDigit() {

    let enteredNumber   = document.getElementById('enteredNumbers').value;
    let modSum = getSum(enteredNumber);

    let checkDigit  = 10 - modSum;

    document.getElementById("checkDigit").value  = checkDigit;
    document.getElementById("readyNumber").value = enteredNumber + '-' + checkDigit;
}

function checkCheckDigit() {
    let number   = document.getElementById('readyNumber').value.replace('-', '');

    let message = "Podany ciąg cyfr nie jest poprawny";
    let color   = 'red';

    if (number === '')
    {
        document.getElementById('verifyText').innerText = "Najpierw wylicz cyfrę kontrolną";
        document.getElementById('verifyBox').style.backgroundColor = color;

        return;
    }

    let sum      = getSum(number, true);

    if (sum === 0)
    {
        message = "Podany ciąg cyfr jest poprawny";
        color   = 'green';
    }

    document.getElementById('verifyText').innerText = message;
    document.getElementById('verifyBox').style.backgroundColor = color;

}

function getSum(number, checking = false) {

    let sum = 0;

    for (let i = 0; i < number.length; i++)
    {
        let digit = parseInt(number.charAt(i));

        if(parseInt(i+1) % 2 === 0  || (checking === true && i === number.length - 1))
        {
            sum = sum + digit;
            continue;
        }

        sum += (digit*2 <= 9 ?digit*2 : digit*2 - 9);
    }

    return sum % 10;
}