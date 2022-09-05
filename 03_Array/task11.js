function getSuperSeriesWinner(coll) {
    
    let result = 0;
    for (const item of coll) {
        result += Math.sign(item[0] - item[1]);
    }

    if (result === 0){
        console.log(null);
    } else if (result > 0) {
        console.log('canada');
    } else {
        console.log('ussr'); 
    }
}



const scores = [
    [3, 7], // Первая игра
    [4, 1], // Вторая игра
    [4, 4],
    [3, 5],
    [4, 5],
    [3, 2],
    [4, 3],
    [6, 5],
  ];
   
  getSuperSeriesWinner(scores); // 'canada'

//   первое число канада