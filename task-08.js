const get = (obj, arrays) => {
    // console.log(Object.prototype.hasOwnProperty.call(obj, arrays[1]));
    let result = obj;
    for (const key of arrays) {
        result = result[key] ?? 'null';
    } 
    console.log(result);

};




const data = {
    user: 'ubuntu',
    hosts: {
      0: {
        name: 'web1',
      },
      1: {
        name: 'web2',
        null: 3,
        active: false,
      },
    },
  };

get(data, ['undefined']); // null
get(data, ['user']); // 'ubuntu'
get(data, ['user', 'ubuntu']); // null
get(data, ['hosts', 1, 'name']); // 'web2'
get(data, ['hosts', 0]); // { name: 'web1' }
get(data, ['hosts', 1, null]); // 3
get(data, ['hosts', 1, 'active']); // false
