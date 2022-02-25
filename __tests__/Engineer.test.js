const Engineer = require('../lib/Engineer');

test('engineer adds github username', () => {
    const engineer = new Engineer('Chris', 'chris@gmail.com', 1, 'Employee', 'chrisphailey');

    expect(engineer.github).toEqual(expect.any(String));
});
