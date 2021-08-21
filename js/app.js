// Memory price function
function updateMemoryPrice(product, isIncreasing, price) {
    const numberInput = document.getElementById(product + '-input');
    let number = numberInput.value;
    if (isIncreasing >= 1) {
        number = 180;
    } else if (number > 0) {
        number = parseInt(number) - 1;
    }

    numberInput.value = number;

    // update Case Total
    const caseTotal = document.getElementById(product + '-cost');
    caseTotal.innerText = number * price;
    getTotal()


}

// Stroage Function
function updateStoragePrice(product, isIncreasing, xIncreasing, price) {
    const Input = document.getElementById(product + '-input');
    let number = Input.value;

    if (isIncreasing >= 1) {
        number = 100;

    } else if (xIncreasing >= 1) {
        number = 180;

    } else if (number > 0) {
        number = parseInt(number) - 1;
    }

    Input.value = number;

    // update Case Total
    const caseTotal = document.getElementById(product + '-cost');
    caseTotal.innerText = number * price;
    getTotal()

}

// Delivery Function

function updateDelivery(product, isIncreasing, price) {
    const Input = document.getElementById(product + '-input');
    let number = Input.value;

    if (isIncreasing >= 1) {
        number = 20;
    } else if (number > 0) {
        number = parseInt(number) - 1;
    }

    Input.value = number;

    // update Case Total
    const caseTotal = document.getElementById(product + '-cost');
    caseTotal.innerText = number * price;
    getTotal()

}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-cost');
    const productNumberText = productInput.innerText;
    const productNumber = parseFloat(productNumberText);
    return productNumber
}


// Get total Amount 
function getTotal() {
    const baseTotal = getInputValue('base');
    const memoryTotal = getInputValue('memory');
    const storageTotal = getInputValue('storage');
    const deliveryTotal = getInputValue('delivery')
    const subTotal = baseTotal + memoryTotal + storageTotal + deliveryTotal;
    const total = subTotal;
    const elements = document.getElementsByClassName('total-price');
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerText = total;
    }
}
//Get Discount amount
function getDiscount() {
    const baseTotal = getInputValue('base');
    const memoryTotal = getInputValue('memory');
    const storageTotal = getInputValue('storage');
    const deliveryTotal = getInputValue('delivery')
    const subTotal = baseTotal + memoryTotal + storageTotal + deliveryTotal;
    const semiTotal = subTotal;
    const discount = semiTotal / 20;
    const total = subTotal - discount;
    const elements = document.getElementsByClassName('total-price');
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerText = total;
    }
}



// memory Option

document.getElementById('memory-extra-id').addEventListener('click', function() {
    const newDeposit = getInputValue('base')
    updateMemoryPrice('memory', true, 1);

})

document.getElementById('memory-base-id').addEventListener('click', function() {
    updateMemoryPrice('memory', false, 0);


})

// Storage Option

document.getElementById('storage-id').addEventListener('click', function() {
    updateStoragePrice('storage', false, false, 0);
})

document.getElementById('storage-md-id').addEventListener('click', function() {
    updateStoragePrice('storage', true, false, 1);
})
document.getElementById('storage-x-id').addEventListener('click', function() {
    updateStoragePrice('storage', false, true, 1);
})

// Delivery Option
document.getElementById('express-delivery').addEventListener('click', function() {
    updateDelivery('delivery', true, 1)
})
document.getElementById('free-delivery').addEventListener('click', function() {
    updateDelivery('delivery', false, 0)
})

// Hiding input field
document.getElementById('memory-input').style.display = 'none';
document.getElementById('storage-input').style.display = 'none';
document.getElementById('delivery-input').style.display = 'none';


// promo code
document.getElementById('promo-btn').addEventListener('click', function() {
    const promoInput = document.getElementById('promo-input');
    const promoText = promoInput.value;
    if (promoText == 'stevekaku') {
        getDiscount()
    }
})