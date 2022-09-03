function addPrefix(array, prefix) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray[i] = `${prefix} ${array[i]}`;
    }

    return newArray;
}

const names = ['john', 'smith', 'karl'];
 
const newNames = addPrefix(names, 'Mr');
console.log(newNames);
// => ['Mr john', 'Mr smith', 'Mr karl'];
 
console.log(names); // Старый массив не меняется!
// => ['john', 'smith', 'karl'];