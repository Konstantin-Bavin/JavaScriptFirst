function getSameParity(coll) {
    const newColl = [];
    const remainder = coll[0] % 2;
    for (const item of coll) {
        if (remainder === 0 && item % 2 === 0) {
            newColl.push(item);
        } else if (remainder !== 0 && item % 2 !== 0) {
            newColl.push(item);
        }
    }
    console.log(newColl);
};




getSameParity([]);        // []
getSameParity([1, 2, 3]); // [1, 3]
getSameParity([1, 2, 8]); // [1]
getSameParity([2, 2, 8]); // [2, 2, 8]