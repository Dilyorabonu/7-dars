//1

function berilganson(a) {
    if (a === 1) {
        return [1];
    } else {
        const array = berilganson(a - 1);
        array.push(a);
        return array;
    }
}

console.log(berilganson(5));


//2

function berilganson(a) {
    const array = [];
    for (let i = 1; i <= a; i++) {
        array.push(i);
    }
    return array;
}

console.log(berilganson(5));


//3

//spread

function berilganson(a) {
    return Array.from({ length: a }, (_, b) => b + 1);
}

console.log(berilganson(5));

//4

//map

function berilganson(a) {
    return [...Array(a).keys()].map(b => b + 1);
}

console.log(berilganson(5));