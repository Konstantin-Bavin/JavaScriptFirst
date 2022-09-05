function getMax(coll) {
    if (coll.length === 0) {
        return console.log(null);
    }
    const [firstElem, ...rest] = coll;
    let maxElem = firstElem;

    for (const elem of rest) {
        if (maxElem < elem) {
            maxElem = elem;
        }
    }
    
    return console.log(maxElem);
};

// Для пустого массива возвращается null
getMax([]); // null
getMax([1, 10, 8]); // 10