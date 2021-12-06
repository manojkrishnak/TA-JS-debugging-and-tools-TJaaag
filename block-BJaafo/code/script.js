function getFullName(firstName, lastName){
    return `${firstName} ${lastName}`
}


let fullName = getFullName("manoj", "krishna");
let expected =  "manoj krishna";

if(fullName !== expected){
    throw new Error(`${fullName} is not same as ${expected}`)
}



let fullName2 = getFullName("Elon", "Musk");
let expected2 =  "Elon Musk";

if(fullName2 !== expected2){
    throw new Error(`${fullName2} is not same as ${expected2}`)
}


// -------------------------------------------------------------

function calculateTotalAmount(amount, taxRate){
    return amount + (amount * taxRate)
}


let totalAmount1 = calculateTotalAmount(1000, 0.18);
let expectedAmount1 =  1180;

if(totalAmount1 !== expectedAmount1){
    throw new Error(`${totalAmount1} is not same as ${expectedAmount1}`)
}

let totalAmount2 = calculateTotalAmount(2000, 0.18);
let expectedAmount2 =  2360;

if(totalAmount2 !== expectedAmount2){
    throw new Error(`${totalAmount2} is not same as ${expectedAmount2}`)
}

