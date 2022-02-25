const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');

test('add manager office number', () => {
    const manager = new Manager('Chris', 'chris@gmail.com', 1, 'Employee', 23);

    expect(manager.number).toEqual(expect.any(Number));
})