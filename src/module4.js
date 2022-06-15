// Задача 1

    // let n = -3;
    // let m = -10;
    // let count = 42;
    // let array = [];

    // let range = Math.abs(n - m);
    // let min = Math.min(n, m);

    // for(let i = 0; i < count; i++) {
    //     let num = min + Math.floor(Math.random()*(range + 1));
    //     array.push(num);
    // }

    // console.log (array);

// Задача 2

    // let str = 'Бавин Константин Сергеевич';
    // let array1 = [];
    // let newStr = '';

    // for(let i = 1; i <= str.length; i++) {
    //     array1[i - 1] = str[str.length - i];
    // }

    // for(let lit of array1) {
    //     newStr += lit;
    // }

    // console.log(str);
    // console.log(newStr);

                        // Решение из интернета

    // let str = 'Бавин Константин Сергеевич';
    // let newString = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newString += str[i];
    // }
    // console.log(newString);

// Задача 3

    // let roadMines = [true, false, false, false, false, false, false, false, false, true];
    // let mines = 0;

    // for(let i = 0; i < roadMines.length; i++) {
    //     console.log(`Танк переместился на ${i + 1}`);
    //         if (roadMines[i] === true && mines < 1) {
    //             console.log('Танк поврежден');
    //             mines++;
    //             continue;
    //         } else if (roadMines[i] === true && mines < 2) {
    //             console.log('Танк уничтожен');
    //             break;
    //         }
    // }

// Задача 4

                            // Мое решение

    // let dayOfMonth = [];
    // let dayOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    // let firstDayOfWeek = dayOfWeek.indexOf('Вторник');

    // for(let i = 0; i < 31; i++) {
    //     dayOfMonth[i] = i + 1;
    //     if (firstDayOfWeek < dayOfWeek.length){
    //         console.log(`${dayOfMonth[i]} января, ${dayOfWeek[firstDayOfWeek]}`);
    //     } else {
    //         firstDayOfWeek = 0;
    //         console.log(`${dayOfMonth[i]} января, ${dayOfWeek[firstDayOfWeek]}`);
    //     }
    //     firstDayOfWeek++;
    // }

                        // Решение из интренета

    // let dayOfMonth = [];
    // let dayOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    // let day = 'Суббота';
    // let firstDayOfWeek = dayOfWeek.indexOf(day);

    // for(let i = 1; i < 32; i++){
    //     dayOfMonth.push(i);
    // }

    // for(let elem of dayOfMonth) {
    //     const y = (firstDayOfWeek + elem - 1) % 7;
    //     console.log(`${elem} января, ${dayOfWeek[y]}`);
    // }


