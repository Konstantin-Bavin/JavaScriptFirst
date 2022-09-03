function getTotalAmount(coll, currency){
    let sum = 0;
    for (const item of coll) {
        if (item.slice(0, 3) === currency) {
            sum += Number(item.slice(4));
        }
    }
    console.log(sum);
}



const money1 = [
    'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',
];
getTotalAmount(money1, 'usd') // 16

const money2 = [
'eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',
];
getTotalAmount(money2, 'eur') // 135

const money3 = [
'eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',
];
getTotalAmount(money3, 'rub') // 270