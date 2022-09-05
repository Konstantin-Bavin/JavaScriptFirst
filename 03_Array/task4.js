function get(array, index, value = null) {
    if (index < array.length && index > 0) {
        return array[index];
    } else {
        return value;
    }    
}

const cities = ['moscow', 'london', 'berlin', 'porto'];
 
console.log(get(cities, 1)); 
console.log(get(cities, 4)); 
console.log(get(cities, 10, 'paris'));
console.log(get(cities, -1, 'oops')); 
