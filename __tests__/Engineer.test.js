
const EngineerQuestions = require('../lib/Engineer.js');

test('creates name of engineer', () => {
    const engineerQuestions = new EngineerQuestions('Bob', 'jay@jay.com', '123abc');
    expect(engineerQuestions.name).toBe('Bob');
});

test('creates id of engineer', () => {
    const engineerQuestions = new EngineerQuestions('Bob', 'jay@jay.com', '123abc');
    expect(engineerQuestions.id).toBe('123abc');
});
test('creates email of engineer', () => {
    const engineerQuestions = new EngineerQuestions('Bob', 'jay@jay.com', '123abc');
    expect(engineerQuestions.email).toBe('jay@jay.com');
    
});
