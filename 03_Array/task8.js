function calculateAverage(coll) {
    if (coll.length === 0) {
        return null;
    }
    let sum = 0;
    for(const temp of coll){
        sum += temp;
    }
    const average = sum/coll.length;

    return average;
};



const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
console.log(calculateAverage(temperatures1)); // 38.5
 
const temperatures2 = [36, 37.4, 39, 41, 36.6];
console.log(calculateAverage(temperatures2)); // 38

const temperatures = [];
console.log(calculateAverage(temperatures)); // null
