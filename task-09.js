 import _ from 'lodash';
 
 const fill = (obj1, arr, obj2) => {
    let result = {};

    if (arr.length === 0) {
        result = Object.assign(obj1, obj2);
    }

    result = Object.assign(obj1, _.pick(obj2, arr)); 

    return console.log(result);
 };

 const company = {
    name: null,
    state: 'moderating',
  };
   
  const data = {
    name: 'Hexlet',
    state: 'published',
  };
   
  // Вызовы ниже нужно рассматривать как независимые
   
  fill(company, ['name'], data);
  // {
  //   name: 'Hexlet',
  //   state: 'moderating',
  // }
   
  fill(company, [], data);
  // {
  //   name: 'Hexlet',
  //   state: 'published',
  // }