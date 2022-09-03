// console.log ('Hello, world!');

// Модуль 2, задача 1
    // let x1 = 4;
    // let y1 = 1;

    // let x2 = 5;
    // let y2 = 1;

    // let width = Math.abs(x1 - x2);
    // let heigth = Math.abs(y1 - y2);

    // let sqr = width * heigth;

    // console.log (sqr);

// Модуль 2, задача 2

    // let a = 13.890123;
    // let b = 2.891564;
    // let n = 3;

    // let fractA = a % 1;
    // let fractB = b % 1;

    // let farctAtoN = Math.floor(fractA * Math.pow(10, n))
    // let fractBtoN = Math.floor(fractB * Math.pow(10, n))

    // console.log (farctAtoN);
    // console.log (fractBtoN);
    
    // console.log ('> : ' + (farctAtoN > fractBtoN));
    // console.log ('< : ' + (farctAtoN < fractBtoN));
    // console.log ('>= : ' + (farctAtoN >= fractBtoN));
    // console.log ('<= : ' + (farctAtoN <= fractBtoN));
    // console.log ('=== : ' + (farctAtoN === fractBtoN));
    // console.log ('!== : ' + (farctAtoN !== fractBtoN));

// Модуль 2, задача 3

    let n = -30;
    let m = -100;
    let range = Math.abs (n - m);
    let min = Math.min (n, m);
    let number = (min / 2) + Math.floor(Math.random()* (Math.abs((range + 1) / 2)));

    console.log ((number * 2) + 1);
   