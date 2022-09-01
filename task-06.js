import _ from 'lodash';

const countWords = (str) => {
    const words = str.split(' ');
    const result = {};

    if(str.length === 0) {
        return console.log(result);
    }

    for (let word of words) {
        word = word.toLowerCase();
        if (_.has(result, word)) {
            result[word] += 1; 
        } else {
            result[word] = 1;
        }
    }

    return console.log(result);
};

const text1 = 'one two three two ONE one wow';
countWords(text1);

const text2 = 'another one sentence with strange Words words';
countWords(text2);

countWords('');