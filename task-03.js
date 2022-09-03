const normalize = (obj) => {
    obj['name'] = obj['name'][0].toUpperCase() + obj['name'].slice(1).toLowerCase();
    obj['description'] = obj['description'].toLowerCase();
};

const lesson = {
    name: 'деструКТУРИЗАЦИЯ',
    description: 'каК удивитЬ колек',
  };
   
  // Обратите внимание, что не используется возврат.
  // Объекты, как и массивы, передаются по ссылке.
  // Изменение переданного объекта внутри отражается на самом объекте:
  normalize(lesson);
   
  console.log(lesson);
  // {
  //   name: 'Деструктуризация',
  //   description: 'как удивить колек'
  // }