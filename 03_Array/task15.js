function countUniqChars(text) {
    const elements = text.split('');
    
    const result = [];
    for (const item of elements) {
        if (result.includes(item)) {
            continue;
        } else {
            result.push(item);
        }
    }

    console.log(result.length);
}


const text1 = 'yyab'; // y, a, b
countUniqChars(text1); // 3
 
const text2 = 'You know nothing Jon Snow';
countUniqChars(text2); // 13
 
// Если передана пустая строка, то функция должна вернуть `0`
const text3 = '';
countUniqChars(text3); // 0