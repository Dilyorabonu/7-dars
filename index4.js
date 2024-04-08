//1

function teskaristring(string) {
    let teskaristring = '';
    for (let i = string.length - 1; i >= 0; i--) {
        teskaristring += string[i];
    }
    return teskaristring;
}

console.log(teskaristring('Salom'));


//2

function teskaristring(string) {
    return string.split('').reverse().join('');
}

console.log(teskaristring('Salom'));


//3

function teskaristring(string) {
    return string.split('').reduce((teskari, i) => i + teskari, '');
}

console.log(teskaristring('Salom')); 


//4

function teskaristring(string) {
    let teskaristring = '';
    for (let i of string) {
        teskaristring = i + teskaristring;
    }
    return teskaristring;
}

console.log(teskaristring('Salom'));
