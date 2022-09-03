const is = (obj1, obj2) => {
    
    (obj1['name'] === obj2['name']) && (obj1['state'] === obj2['state']) && (obj1['website'] === obj2['website']) ?
    console.log(true) :
    console.log(false);
};

// const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
// const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };
// is(company1, company2); // false
 
const company1 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company2 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
is(company1, company2); // true