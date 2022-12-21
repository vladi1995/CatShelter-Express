const fs = require('fs/promises');
const path = require('path');
const cats = require('../../data/db.json');
const breeds = require('../../data/breeds.json');

exports.saveBreed = (result) => {
    breeds.push({"breed": result.breed});
    return fs.writeFile(path.resolve('data','breeds.json'), JSON.stringify(breeds, '', 4), {encoding: 'utf-8'});
}

exports.saveCat = (result) => {
    cats.push({id: cats[cats.length-1].id+1, ...result});
    return fs.writeFile(path.resolve('data','db.json'), JSON.stringify(cats, '', 4), {encoding: 'utf-8'});
}

exports.getAll = (query = '') => {
    const result = cats.filter(x => x.name.toLowerCase().includes(query.toLowerCase()));
    return result;
}