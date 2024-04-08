//1

function teskarison(string) {
    return string.split('').reverse().map(Number);
}

console.log(teskarison("34567"));


//2

function teskarison(str) {
    const array = [];
    for (let i = str.length - 1; i >= 0; i--) {
        array.push(parseInt(str[i]));
    }
    return array;
}

console.log(teskarison("34567"));


//3

function teskarison(str) {
    if (str === "") {
        return [];
    }
    
    return [parseInt(str.slice(-1))] .concat(teskarison(str.slice(0, -1)));
}

console.log(teskarison("34567"));
