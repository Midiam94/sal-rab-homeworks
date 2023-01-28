    // Задание №1.1. Оповещение о добавлении в корзину
function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;
    let message;
    message = productName;
    message = message + " ";
    message = message + "за";
    message = message + " ";
    message = message + productPrice;
    message = message + " ";
    message = message + "теперь в корзине!";
    console.log(message);
    return message;
}


// Задание №1.2. Увеличение количества в корзине
function addInCartCountChange(value) {
    let oldValue = value;
    let newValue = oldValue;
    newValue += 1;
    console.log(newValue);
    return newValue;
}

// Задание №1.3. Увеличение суммы в корзине
    function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference;
    difference = delta;
    let newSum;
    newSum = oldSum + difference;
    let newSumText;
    newSumText = newSum + `₽`;
    newSumText = `${newSum} ₽`; 
    console.log(newSum);
    return newSum;
}



