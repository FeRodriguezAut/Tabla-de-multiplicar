for (let i =2; i <=100; i++) {
    if (esPrimo(i)) {
        console.log(`el numero ${i} es primo`);
    }
}
function esPrimo(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

