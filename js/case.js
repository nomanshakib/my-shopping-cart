
function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById("case-number-field");
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;
    
    return newCaseNumber;
};

function updateCaseTotalPrice(newCaseNumber) {
    const newCaseTotalPrice = newCaseNumber * 59;
    const previousCasePrice = document.getElementById("case-total-price");
    previousCasePrice.innerText = newCaseTotalPrice;
};

document.getElementById("btn-case-plus").addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);

    updateCaseTotalPrice(newCaseNumber);

    /* Calculate Total */
    calculateSubTotal();

});

document.getElementById("btn-case-minus").addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);

    updateCaseTotalPrice(newCaseNumber);

    /* Calculate Total */
    calculateSubTotal();
    
});