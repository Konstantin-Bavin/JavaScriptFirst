function uniqArray(coll) {

    const newArray = [];

    for (const elem of coll) {
        if (newArray.includes(elem)){
            continue; 
        } else {
            newArray.push(elem);
        }
    }

    return newArray;
}

function getSameCount(arr1, arr2) {

    const result = [];

    for (const item1 of arr1) {
        for (const item2 of arr2) {
            if (item1 === item2) {
                result.push(item1);
            }
        }
    }

    const uniqResult = uniqArray(result);
    console.log(uniqResult.length);
}

// Общие повторяющиеся элементы: 1, 3, 2
getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5]); // 3
 
// Общие повторяющиеся элементы: 4
getSameCount([1, 4, 4], [4, 8, 4]); // 1
 
// Общие повторяющиеся элементы: 1, 10
getSameCount([1, 10, 3], [10, 100, 35, 1]); // 2
 
// Нет элементов
getSameCount([], []); // 0