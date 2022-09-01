const pick = (obj, array) => {
    const entriesObj = Object.entries(obj);
    const result = {};

    for(const [key, value] of entriesObj) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === key) {
                result[key] = value;
            }            
        }
    }

    return console.log(result);
};

const data = {
    user: 'ubuntu',
    cores: 4,
    os: 'linux',
  };
   
  pick(data, ['user']); // { user: 'ubuntu' }
  pick(data, ['user', 'os']); // { user: 'ubuntu', os: 'linux' }
  pick(data, []); // {}
  // Если такого свойства нет в исходных данных,
  // то оно игнорируется 
  pick(data, ['none', 'cores']); // { cores: 4 }