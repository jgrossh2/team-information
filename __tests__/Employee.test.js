const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates name of employee', () => {
    const employee = new Employee('Bob', 'jay@jay.com', '123abc');
    expect(employee.name).toBe('Bob');
});

test('creates id of employee', () => {
    const employee = new Employee('Bob', 'jay@jay.com', '123abc');
    expect(employee.id).toBe('123abc');
});
test('creates email of engineer', () => {
    const employee = new Employee('Bob', 'jay@jay.com', '123abc');
    expect(employee.email).toBe('jay@jay.com');
    
});
test('gets name of employee', () => {
    const employee = new Employee('Bob', 'jay@jay.com', '123abc');
    expect(employee.getName()).toEqual(expect.any(String));
});
test('gets id of the employee', () => {
    const employee = new Employee('Bob', 'jay@jay.com', '123abc');
    expect(employee.getId()).toEqual(expect.any(String));
});
test('gets email of employee', () => {
    const employee = new Employee('Bob', 'jay@jay.com', '123abc');
    expect(employee.getEmail()).toEqual(expect.any(String));
});
test('gets role of employee', () => {
    const employee = new Employee();
    expect(employee.getRole()).toEqual(expect.any(String));
});