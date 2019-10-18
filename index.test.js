const cleanObject = require('./index.js');

test('doesn\'t clean clean objects', () => {
    expect(cleanObject({key: 'value'}))
        .toEqual({key: 'value'});
});

test('doesn\'t clean objects with 0', () => {
    expect(cleanObject({key: 'value', key2: 0}))
        .toEqual({key: 'value', key2: 0});
});

test('cleans objects with undefined', () => {
    expect(cleanObject({key: 'value', key2: undefined}))
        .toEqual({key: 'value'});
});

test('cleans objects with empty strings', () => {
    expect(cleanObject({key: 'value', key2: ''}))
        .toEqual({key: 'value'});
});