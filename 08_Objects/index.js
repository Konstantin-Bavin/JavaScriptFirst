import _ from 'lodash';


const getFileInfo = (str) => {
    const parts = str.split('/');
    const filename = _.last(parts);
    const extension = _.last(filename.split('.'));

    const info = {filename: filename, extension: extension};

    return info;
};


const filepath = '/path/to/index.js';
const fileinfo = getFileInfo(filepath);

console.log(fileinfo);
