

function generatePin() {

    const random = Math.round(Math.random() * 10000);
    return random

}



function getPin() {
    const pin = generatePin();
    const pinString = pin + '';

    if (pinString.length === 4) {
        return pin; //if random number generate 4 digit pin then return only
        // console.log(typeof pin)
    }

    else {
        return getPin(); // kepp calling random number generate 4 digit pin


    }
}




document.getElementById('generate-pin').addEventListener('click', function () {

    const displayPin = document.getElementById('display-pin');
    displayPin.value = getPin(); //display teh pin with 4 digit only
});



document.getElementById('calculator').addEventListener('click', function (event) {
    const calculatorPressNumber = event.target.innerText;

    const typedNumbers = document.getElementById('typed-numbers');
    const previousTypedNumbers = typedNumbers.value; //get previous typed number in a calculator
    let currentTypedNumbers = previousTypedNumbers + calculatorPressNumber;

    if (isNaN(calculatorPressNumber)) //this will check whether calculator Press Value a number or not
    {
        if (calculatorPressNumber === 'C') {
            typedNumbers.value = '';
        }

        else if (calculatorPressNumber === '<') {
            const myArray = previousTypedNumbers.split('');
            myArray.pop();
            const remainingArray = myArray.join('');
            typedNumbers.value = remainingArray;
        }
    }

    else {
        typedNumbers.value = currentTypedNumbers; // return value if its a number
    }

});

document.getElementById('verify-pin').addEventListener('click', function () {

    const displayPin = document.getElementById('display-pin');
    const currentPin = displayPin.value;

    const typedNumbers = document.getElementById('typed-numbers');
    const currentTypedNumbers = typedNumbers.value;
    if (currentPin === currentTypedNumbers) {
        document.getElementById('pin-success').style.display = 'block'; //show message  when match
        document.getElementById('pin-failure').style.display = 'none';//hide message when match
    }

    else {
        document.getElementById('pin-failure').style.display = 'block'; //show message  when did not match
        document.getElementById('pin-success').style.display = 'none'; //hide message  when did not match
    }




})