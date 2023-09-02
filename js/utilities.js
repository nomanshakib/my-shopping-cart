function getTotalTextElementPriceValueById(elementPriceId) {
    const getElementTotalPrice = document.getElementById(elementPriceId);
    const currentTotalPriceString = getElementTotalPrice.innerText;
    const currentTotalPrice = parseInt(currentTotalPriceString);
    return currentTotalPrice;
}

function setTotalTextElementPriceValueById(elementId, value) {
    const subTotalPriceElement = document.getElementById(elementId);
    subTotalPriceElement.innerText = value;
};

function calculateSubTotal() {
    
    /* Calculate Total */
    
    const currentPhoneTotalPrice = getTotalTextElementPriceValueById("phone-total-price");
    const currentCaseTotalPrice = getTotalTextElementPriceValueById("case-total-price");
    
    const currentSubTotal = currentPhoneTotalPrice + currentCaseTotalPrice;
    setTotalTextElementPriceValueById("sub-total", currentSubTotal);

    /* Calculate Tex */

    const texAmountString = (currentSubTotal * 0.1).toFixed(2);
    const texAmount = parseFloat(texAmountString);
    setTotalTextElementPriceValueById("tax-amount", texAmount);

    const finalTotalAmount = currentSubTotal + texAmount;
    setTotalTextElementPriceValueById("final-total", finalTotalAmount);

};