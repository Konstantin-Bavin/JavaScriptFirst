//                     Задача 1

// let object = [
//     {name: 'Василий', surname: "Васильев"},
//     {name: 'Иван', surname: "Иванов"},
//     {name: 'Петр', surname: "Петров"},
// ];
// let result = [];
// function filter(obj, key, value) {
//     let arr = Object.values(obj);
//     for(let a of arr) {
//         if (key in a && a[key] === value)
//         {   
//             result.push(a);
//         }
//     }
//     return result;
// }

// console.log(filter(object, 'surname', 'Петров'));


// let list = document.getElementById('select');
// let array = [111, 222, 333, 444, 555];
// let item = document.createElement('option');

// for(let i = 0; i < array.length; i++){
//     item.innerHTML = array[i];
//     list.appendChild(item.cloneNode(true));
// }


let array = [
    {value: '111', label: '111'},
    {value: '222', label: '222'},
    {value: '333', label: '333'},
    {value: '444', label: '444'},
    {value: '555', label: '555'}
];

let value = '222';


function createSelect(arr, val){
    let select = document.createElement('select');
    document.body.append(select);

    let valuesOfArray = Object.values(arr);
    let atributes = [];
    let textInOption = [];    
    let option = document.createElement('option');
    for(let i = 0; i < arr.length; i++){
        textInOption[i] = valuesOfArray[i].label;
        atributes[i] = valuesOfArray[i].value;
        option.textContent = textInOption[i];
        option.setAttribute('value', atributes[i]);
        select.appendChild(option.cloneNode(true));
    }  
}

createSelect(array);