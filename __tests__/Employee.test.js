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