//1

function ikkiarrayyigindisi(array1, array2) {
    const raqam1 = array1.reduce((acc, current) => acc + current, 0);

    const raqam2 = array2.reduce((acc, current) => acc + current, 0);

    return raqam1 + raqam2;
}

console.log(ikkiarrayyigindisi([1, 2, 3], [4, 5, 6]));


//2

function ikkiarrayyigindisi(array1, array2) {
    let natija = 0;

    for (let son of array1) {
        natija += son;
    }
    
    for (let son of array2) {
        natija += son;
    }
    // Yig'indi
    return natija;
}

console.log(ikkiarrayyigindisi([1, 2, 3], [4, 5, 6]));


//3

function ikkiarrayyigindisi(array1, array2) {
    let natija = 0;

    for (let a = 0; a < array1.length; a++) {
        natija += array1[a];
    }

    for (let a = 0; a < array2.length; a++) {
        natija += array2[a];
    }
    // Yig'indi
    return natija;
}

console.log(ikkiarrayyigindisi([1, 2, 3], [4, 5, 6]));


//4

function ikkiarrayyigindisi(array1, array2) {
    let natija = 0;
    array1.forEach(son => natija += son);

    array2.forEach(son => natija += son);

    // Yig'indi
    return natija;
}

console.log(ikkiarrayyigindisi([1, 2, 3], [4, 5, 6]));
