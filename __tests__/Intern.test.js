const { test, expect } = require('@jest/globals');
const Intern = require ('../lib/Intern.js');

test('create school object of intern', () => {
    const intern = new Intern("Dave", "jay@jay.com", "678678","Wisconsin");
    expect(intern.school).toBe("Wisconsin");
});

test('gets school for intern', () => {
    const intern = new Intern("Dave", "jay@jay.com", "678678","Wisconsin");

    expect(intern.getSchool()).toEqual(expect.any(String));
});
test('gets role for intern', () => {
    const intern = new Intern("Intern");

    expect(intern.getRole()).toBe('Intern');
});