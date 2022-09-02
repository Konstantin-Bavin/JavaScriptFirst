import _ from "lodash";

const cloneDeep = (obj) => {
    const result = cloneInnerObj(obj);

    return result;
};

const cloneInnerObj = (innerObj) => {
    const innerObjEntries = Object.entries(innerObj);
    const result = {};

    for (const [key, value] of innerObjEntries) {
        if (_.isObject(value)) {
           result[key] = cloneInnerObj(value);
        } else {
           result[key] = value;
        }
   }
    return result;
};


const data = {
    key: 'value',
    key2: {
      key: 'innerValue',
      innerKey: {
        anotherKey: 'anotherValue',
      },
    },
  };

// result имеет такую же структуру, как и data
const result = cloneDeep(data);

console.log(result.key2 !== data.key2); // true
console.log(result.key2.innerKey !== data.key2.innerKey);

// cloneDeep(data);