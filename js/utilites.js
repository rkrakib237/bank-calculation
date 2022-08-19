function getInputFieldValueById (inputFieldId){
    const inputField = document.getElementById(inputFieldId)
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString)
    inputField.value = '';
    return inputFieldValue;
}

function getElementValueById  (elementId){
    const textElement = document.getElementById(elementId)
    const elementFieldValueString = textElement.innerText;
    const textElementvalue = parseFloat(elementFieldValueString);
    return textElementvalue;
}
function SetTextElementvalueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;

}