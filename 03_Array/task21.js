function flatten(coll) {
    let result = [];

    for (const item of coll) {
        if(Array.isArray(item)) {
            result.push(...item);
        } else {
            result.push(item);
        }
    }
    
    return console.log(result);
};

flatten([]); // []
flatten([1, [3, 2], 9]); // [1, 3, 2, 9]
flatten([1, [[2], [3]], [9]]); // [1, [2], [3], 9]
