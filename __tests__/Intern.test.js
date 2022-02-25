const Intern = require('../lib/Intern.js');

test('add intern school', () => {
    const intern = new Intern('Chris', 'chris@gmail.com', 1, 'Employee', 'LSU');

    expect(intern.school).toEqual(expect.any(String));
});