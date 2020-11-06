
// const { expect } = require('@jest/globals');
const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('creates github username of Engineer', () => {
    const engineer = new Engineer('Dave', 'fndjdja', '46466', 'jgrossh2')
    expect(engineer.github).toBe('jgrossh2')
});
test('gets github of Engineer', () => {
    const engineer = new Engineer('Dave', 'fndjdja', '46466', 'jgrossh2')
    expect(engineer.getGithub()).toEqual(expect.any(String))
});