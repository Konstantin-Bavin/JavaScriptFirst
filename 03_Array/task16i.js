function bubbleSort(coll) {
    let count = coll.length;
    let swaped;

    do {
        swaped = false;

        for (let i = 0; i < count; i++) {
            if (coll[i] > coll[i + 1]) {
                let temp = coll[i];
                coll[i] = coll[i + 1];
                coll[i + 1] = temp;

                swaped = true;
                count--;            
            }
        }
    } while (swaped);
    return console.log(coll);
};

bubbleSort([]); // []
bubbleSort([3, 10, 4, 3]); // [3, 3, 4, 10]
