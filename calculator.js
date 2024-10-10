
function calculator() {

    let input1 = document.getElementById('inpute1').value
    let input2 = document.getElementById('inpute2').value
    let operator = document.getElementById('operator').value


    let result;

    if (!input1 || !input2 || isNaN(input1) || isNaN(input2)) {
        result = 'Please enter valid numbers for both inputs';
    } else{

        switch (operator) {
            case 'add':
                result = Number(input1) + Number(input2);
            break;

            case 'subtract':
                result = Number(input1) - Number(input2);
            break;
            case 'multiply':
                result = Number(input1) * Number(input2);
            break;
            case 'divide':
                result = Number(input1) / Number(input2);
            break;
            default:
            result = 'Invalid operator';
        }
    }


    let ResultTag = document.getElementById('result')   

    ResultTag.innerHTML = `Result: ${result}`

}