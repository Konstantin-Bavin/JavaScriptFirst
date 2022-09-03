function reverse(array) {
    for(let i = 0; i < array.length / 2; i++) {
        let a = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = a;
        // newArray[i] = array[array.length - 1 - i];
    }

    return array;
}

const names = ['john', 'smith', 'karl', 'sda', 'dlddl'];
 
reverse(names);
console.log(names); // => ['karl', 'smith', 'john']
 
reverse(names);
console.log(names); // => ['john', 'smith', 'karl']
