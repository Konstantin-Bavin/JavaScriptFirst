function makeCensored(sent, values) {
    if (sent.length === 0){
        return console.log('');
    }

    const separator = ' ';
    const wordsOfSentence = sent.split(separator);

    const newArray = [];
    for (const word of wordsOfSentence) {
        if (values.includes(word)) {
            newArray.push('$#@!');
        } else {
            newArray.push(word);
        }
    }

    const resultSentence = newArray.join(' ');

    console.log(resultSentence);   
}


const sentence = 'When you play the game of thrones, you win or you die';
const result = makeCensored(sentence, ['die', 'play']);
// When you $#%! the game of thrones, you win or you $#%!
 
const sentence2 = 'chicken chicken? chicken! chicken';
const result2 = makeCensored(sentence2, ['?', 'chicken']);
// '$#%! chicken? chicken! $#%!';