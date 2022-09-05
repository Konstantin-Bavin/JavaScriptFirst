function getDistanse([x, y], [a, b]) {
    let distanse = Math.sqrt(Math.abs(x - a)**2 + Math.abs(y - b)**2);
    return distanse;
};

function getTheNearestLocation(locs, point) {
    let resultLocs = [];
    let minDistanse = Number.MAX_SAFE_INTEGER;

    if (locs.length === 0) {
        return console.log(null);
    }
    
    for (const [place, [x, y]] of locs) {
        let distanse = getDistanse(point, [x, y]);
        if (minDistanse > distanse) {
            minDistanse = distanse;
            resultLocs = [place, [x, y]];
        }
    }
    
    return console.log(resultLocs);
};


const locations = [
    ['Park', [10, 5]],
    ['Mus', [5, 4]],
    ['Sea', [1, 3]],
    ['Museum', [8, 4]],
  ];
   
  const currentPoint = [5, 5];
   
  // Если точек нет, то возвращается null
  getTheNearestLocation([], currentPoint); // null
   
  getTheNearestLocation(locations, currentPoint); // ['Museum', [8, 4]]
  