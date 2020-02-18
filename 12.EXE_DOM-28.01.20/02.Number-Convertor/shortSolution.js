function solve() {
    // Access HTML Elements
    let optionList = document.querySelectorAll("#selectMenuTo")[0];
    let button = document.querySelector("#container button");
    let input = document.querySelector("#input");
    let resultField = document.getElementById('result');

    // Common methods
    let mathObj = {
        binary: (num) => num.toString(2),
        hexadecimal: (num) => num.toString(16).toUpperCase()
    };

    // Create new HTML Elements
    let newElementBin = document.createElement('option');
    newElementBin.value = 'binary';
    newElementBin.innerHTML = 'Binary';
    let newElementHex = document.createElement('option');
    newElementHex.value = 'hexadecimal';
    newElementHex.innerHTML = 'Hexadecimal';

    // Add new HTML Elements
    optionList.appendChild(newElementBin);
    optionList.appendChild(newElementHex);

    // Add Event Listener
    button.addEventListener('click', () => {
        resultField.value = mathObj[optionList.value](Number(input.value));
    });
}
