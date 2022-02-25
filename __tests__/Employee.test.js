const Employee = require('../lib/Employee.js');

test('employee fills out form', () => {
    const employee = new Employee('Chris', 'chris@gmail.com', 1, 'Employee');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.role).toBe('Employee');
})