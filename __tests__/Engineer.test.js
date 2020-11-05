
// const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('creates github username of Engineer', () => {
    const engineer = new Engineer('jgrossh2')
    expect(engineer.github).toBe('jgrossh2')
});
