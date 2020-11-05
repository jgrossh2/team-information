const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('create object for the officenumber of manager', () => {
    const manager = new Manager ('12');
    expect(manager.officeNumber).toBe('12');
});
test('get role of manager', () => {
    const manager = new Manager ('12');
    expect(manager.getRole()).toBe('Manager');
});
test('get office number of manager', () => {
    const manager = new Manager();
    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
})