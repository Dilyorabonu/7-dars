//1

function daraja(arr) {
    if (arr.length === 0) {
        return "Array bo'sh";
    }

    let engkichik = arr[0];
    for (let a = 1; a < arr.length; a++) {
        if (arr[a] < engkichik) {
            engkichik = arr[a];
        }
    }

    const daraja4 = Math.pow(engkichik, 4).toString();
    return daraja4;
}

console.log(daraja([9, 6, 4, 3]));
console.log(daraja([-3, -5, -2]));


//2

function daraja(arr) {
    if (arr.length === 0) {
        return "Array bo'sh";
    }

    arr.sort((a, b) => a - b);

    const engkichik = arr[0];
    const daraja4 = Math.pow(engkichik, 4).toString();
    return daraja4;
}

console.log(daraja([9, 6, 4, 3]));
console.log(daraja([-3, -5, -2]));


//3

function daraja(arr) {
    if (arr.length === 0) {
        return "Array bo'sh";
    }

    let engkichik = Infinity;
    arr.forEach(son => {
        if (son < engkichik) {
            engkichik = son;
        }
    });

    const power4 = Math.pow(engkichik, 4).toString();
    return power4;
}

console.log(daraja([9, 6, 4, 3]));
console.log(daraja([-3, -5, -2]));