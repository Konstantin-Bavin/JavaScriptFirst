function swap (array) {
    let element = array[array.length - 1];
    array[array.length - 1] = array[0];
    array[0] = element;
    return array;
}

console.log(swap([1, 2]));