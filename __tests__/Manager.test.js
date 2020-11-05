const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('create object for the officenumber of manager', () => {
    const manager = new Manager ('12');
    expect(manager.officenumber).toBe('12');
});
