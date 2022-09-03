function isBracketStructureBalanced(str) {

    const stack = [];
    const openBrackets = ['(', '[', '<', '{'];
    const closeBrackets = [')', ']', '>', '}'];
    
    for (const symbol of str) {
        let indexOpenBrackets = openBrackets.indexOf(symbol);
        let indexCloseBrackets = closeBrackets.indexOf(symbol);
        let lastElementStack = stack[stack.length - 1];
        let indexLastElementStack = openBrackets.indexOf(lastElementStack);
        
        if (indexOpenBrackets >= 0) {
            stack.push(symbol);
        } else if (indexCloseBrackets >= 0) {
            if (indexLastElementStack !== indexCloseBrackets || !stack.pop()) {
                return console.log(false);
            }
        }
    }

    console.log(stack.length === 0);
};


isBracketStructureBalanced('(>');  // false
isBracketStructureBalanced('()');  // true
isBracketStructureBalanced('[()]');  // true
isBracketStructureBalanced('{<>}}'); // false
isBracketStructureBalanced('{{{}}}');