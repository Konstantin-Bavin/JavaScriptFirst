function buildDefinitionList(def) {
    const array = [];
    if (def.length === 0) {
         return console.log('');
    }

    for (const item of def) {
        for (let i = 0; i < item.length; i++) {
            if (i === 0) {
                array.push(`<dt>${item[i]}</dt>`);
            } else {
                array.push(`<dd>${item[i]}</dd>`);
            }
        }
    }
    let innerValue = array.join('');
    let result = `<dl>${innerValue}</dl>`;
    console.log(result);
}

const definitions = [
    ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
    ['Бобр', 'Животное из отряда грызунов'],
  ];
   
  buildDefinitionList(definitions);
  // '<dl><dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd><dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>';
  