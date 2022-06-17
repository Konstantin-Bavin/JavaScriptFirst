                        // Задача 1

// let emailList = ['1', '2', '3', '4', '5'];
// let emailBlackList = ['2', '4'];
// let whiteList = [];

// function emailWhiteList(email, blackList) {
//     for (let arr of email) {
//         let i = 1;
//         for (let warr of blackList) {
//             if(arr === warr){
//                 i = 0;
//                 break; 
//             } 
//         }
//         if (i === 1) {
//             whiteList.push(arr);
//         }
//     }
//     return whiteList;
//   }

//   console.log(emailWhiteList(emailList, emailBlackList));

                            // Задача 2

function discontPrice (price, numberOfProduct, promo = null){

    if(promo === 'ДАРИМ300' && price < 300) {
        price = 0;
    } else if(promo === 'ДАРИМ300') {
        price -= 300;
    }
    
    if (numberOfProduct >= 10){
        price *= .95;
    }

    if (price > 50000) {
        let sale = (price - 50000) * .2;
        price -= sale;
    }

    if (promo === 'СКИДКА15' && price >= 20000){
        price *= .85;
    }

    return price;
}

console.log(discontPrice(20000, 10, 'СКИДКА15'));

