function solve() {
    // Access HTML Elements
    let optionList = document.querySelectorAll("#selectMenuTo")[0];
    //console.log(optionList);
    //let button = document.getElementsByTagName('button')[0];
    let button = document.querySelector("#container button");
    let input = document.querySelector("#input");
    let resultField = document.getElementById('result');

    // Create and Add new HTML Elements
    optionList.innerHTML =
    `<option selected value=""></option>
    <option value="binary">Binary</option>
    <option value="hexadecimal">Hexadecimal</option>`;

    // Add Event Listener
    button.addEventListener('click', () => {
        //console.log(input.value, optionList.value);
        let result = '';
        if(optionList.value === 'binary') {
            result = (Number(input.value)).toString(2);
        }else{
            result = (Number(input.value)).toString(16).toUpperCase();
        }

        resultField.value = result;
    });
}
