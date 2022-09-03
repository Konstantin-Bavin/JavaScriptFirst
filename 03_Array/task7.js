function calculateSum (coll) {
    let sum = 0;

    if (coll.length === 0){
        return sum;
    }

    for(let i = 0; i < coll.length; i++) {
        if (coll[i] % 3 === 0) {
            sum += coll[i];
        }
    }   

    return sum;
};

const coll1 = [8, 9, 21, 19, 18, 22, 7];
console.log(calculateSum(coll1)); // 48
 
const coll2 = [2, 0, 17, 3, 9, 15, 4];
console.log(calculateSum(coll2)); // 27

const coll = [];
console.log(calculateSum(coll)); // 0
