// {key1: '', key2: 'some string', key3: undefined} ==> {key2: 'some string'}
function cleanObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] === '' || typeof obj[key] === 'undefined') {
                delete obj[key];
            }
        }
    }
    return obj;
};

module.exports = cleanObject;