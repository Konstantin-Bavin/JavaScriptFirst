function getIntersectionOfSortedArrays (firstArray, secondArray) {
    const resultArray = [];
    let i = 0;
    let j = 0;
    
    while (i < firstArray.length && j < secondArray.length) {
        if (firstArray[i] === secondArray [j]) {
            resultArray.push(firstArray[i]);
            i++;
            j++
        } else
        if (firstArray[i] < secondArray [j]){
            i++;
        } else
        if (firstArray[i] > secondArray [j]){
            j++;
        }
    }
    
    return console.log(resultArray);
}


getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30]); // [10, 24]
 
getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4]); // []
 
getIntersectionOfSortedArrays([], [2]); // []