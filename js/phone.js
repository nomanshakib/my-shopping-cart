
function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById("phone-number-field");
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;

    if (isIncrease === true) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }

    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
};

function updatePhoneTotalPrice(newPhoneNumber) {
    const newPhoneTotalPrice = newPhoneNumber * 1219;
    const previousPhonePrice = document.getElementById("phone-total-price");
    previousPhonePrice.innerText = newPhoneTotalPrice;
};


document.getElementById("btn-phone-plus").addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    
    updatePhoneTotalPrice(newPhoneNumber);

    /* Calculate Total */
    calculateSubTotal();


});

document.getElementById("btn-phone-minus").addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);

    /* Calculate Total */
    calculateSubTotal();

});